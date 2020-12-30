<template>
    <div>
        <div><span class="red-title m-right20">1、粒子背景</span><a href="https://vue-particles.netlify.app/" target="_blank">示例地址</a></div>
        <vue-particles class="particles-js" color="#dedede"></vue-particles>

        <div class="m-top20"><span class="red-title m-right20">2、进度条</span><a href="http://hilongjw.github.io/vue-progressbar/index.html" target="_blank">示例地址</a></div>
        <div style="width: 100%; border: 1px solid #f0f0f0; padding: 10px; box-sizing: border-box">
            <el-button @click="FnStart">start</el-button>
            <el-button @click="FnTest">test</el-button>
            <span>（在App.vue中引入）</span>
        </div>

        <div class="m-top20"><span class="red-title m-right20">3、拖拽排序</span><a href="http://sagalbot.github.io/vue-sortable/" target="_blank">示例地址</a></div>
        <div class="drag">
            <ul class="list-group" v-sortable="{ onUpdate: onUpdate }">
                <li class="list-group-item" v-for="item in dragList"> {{ item }} <i class="el-icon-rank"></i></li>
            </ul>
        </div>

        <div class="m-top20"><span class="red-title m-right20">4、星星点赞</span><a href="https://github.com/OYsun/VueStar/blob/master/README-ZH.MD" target="_blank">示例地址</a></div>
        <vue-star animate="animated rubberBand" color="#FC796B" style="position: relative">
            <i slot="icon" class="el-icon-star-on" @click="handleStarClick"></i>
        </vue-star>

        <div class="m-top20"><span class="red-title m-right20">5、天气预报</span><a href="https://www.npmjs.com/package/vue-weather-widget" target="_blank">示例地址</a></div>
        <div style="position: relative">
            <vue-weather
                    api-key=""
                    title="北京市--天气预报"
                    latitude="39.88465766090095"
                    longitude="116.38253678295897"
                    language="zh"
                    units="auto"
                    text-color="#f0f0f0"
                    bar-color="#f0f0f0">
            </vue-weather>
        </div>

        <div>
            <el-row :gutter="20">
                <el-col :span="12" v-for="(item, i) in chartData" :key="i" >
                    <ve-line v-if="i == 0"
                             :data="item"
                             width="auto"
                             height="400px"
                             :extend="line_extend"
                             :settings="line_chartSettings"
                    ></ve-line>
                    <ve-pie v-else-if="i == 1"
                            :data="item"
                            :settings="pie_chartSettings"
                    ></ve-pie>
                    <ve-histogram v-else-if="i == 2"
                                  :data="item"
                                  :extend="hist_extend"
                                  :settings="hist_chartSettings"
                    ></ve-histogram>
                    <ve-gauge v-else-if="i == 3"
                              :data="item"
                              :settings="gauge_chartSettings"
                    ></ve-gauge>
                </el-col>
            </el-row>
        </div>


    </div>
</template>

<script>
    import {FnProgress} from '../../service/component/library'
    export default {
        name: "library",
        data() {
            this.line_extend = {
                'xAxis.0.axisLabel.rotate': 45, // 横坐标的倾斜
                series: {
                    label: {
                        normal: {
                            show: true  // 显示指标数值
                        }
                    }
                }
            };
            this.line_chartSettings = {
                // 图表的 setting 属性中统一有两个配置：dimension 用于指定维度；metrics 用于指定指标
                // dimension: ['日期'],
                // metrics: ['下单用户'],
                legendName: { // 可以设置图例的别名
                    '访问用户': '访问用户 total: 10000'
                },
                xAxisType: 'value',  // 设置横轴为连续的数值轴
                // xAxisType: 'time', //设置横轴为连续的时间轴
                axisSite: { right: ['下单率'] },  // 设置双y轴，指标所在的轴，默认不在right轴的指标都在left轴
                yAxisType: ['KMB', 'percent'], // 竖轴数据类型（array，可选值: KMB, normal, percent）
                yAxisName: ['数值', '比率'],  // 竖轴轴标题
                // stack: { '用户': ['访问用户', '下单用户'] }, // 堆叠选项（堆叠之后高度将是所堆叠项的总和高度）
                area: false, // 是否展示为面积图
                digit: 2, // 设置数据类型为percent时保留的位数，默认为2
                // min: ['dataMin', 'dataMin'],
                // max: ['dataMax', 'dataMax'],  // min和max的值可以直接设置为数字，也可以设置为'dataMin'或'dataMax'，此时表示使用该坐标轴上的最小值或最大值为最小或最大刻度。
            };

            this.pie_chartSettings = {
                roseType: 'radius',  // 玫瑰图
                // limitShowNum: 5,  // 限制显示条数饼图
                level: [['1/1', '1/2', '1/3'], ['1/4', '1/5']],  // 多圆饼图
                // legendLimit: 3,  // legend显示数量限制
                hoverAnimation: true,  // 是否开启 hover 在扇区上的放大动画效果
                dataType: function (m) {
                    return m + '个'
                }
            };

            this.hist_extend = {
                series: {
                    label: { show: true, position: "top" }  // 设置显示柱状体图数据
                }
            };
            this.hist_chartSettings = {
                showLine: ['orderUser'],  // 柱形图 + 折线图
                labelMap: { // 可以设置指标的别名
                    visitUser: '访问用户',
                    orderUser: '下单用户',
                    rate: '下单率'
                },
            };

            this.gauge_chartSettings = {
                // dimension: 'type',
                // metrics: 'value',
                labelMap: {
                    'speed': '速度'  // 设置指标别名
                },
                dataName: {
                    'speed': 'km/h',  // 设置单位
                }
            }
            return {
                dragList: ['======1', '======2', '======3', '======4'],
                starActive: false,
                loading: false,
                dataEmpty: false,
                chartData: [
                    {
                        columns: ['日期', '访问用户', '下单用户', '下单率'],  // columns是维度和指标的集合，默认第一个值是维度
                        rows: [  // rows是数据的集合
                            { '日期': 1, '访问用户': 1393, '下单用户': 1093, '下单率': 0.32 },
                            { '日期': 2, '访问用户': 3530, '下单用户': 3230, '下单率': 0.26 },
                            { '日期': 5, '访问用户': 2923, '下单用户': 2623, '下单率': 0.76 },
                            { '日期': 10, '访问用户': 1723, '下单用户': 1423, '下单率': 0.49 },
                            { '日期': 11, '访问用户': 3792, '下单用户': 3492, '下单率': 0.323 },
                            { '日期': 20, '访问用户': 4593, '下单用户': 4293, '下单率': 0.78 }
                        ]
                    },
                    {
                        columns: ['日期', '访问用户', '下单用户', '下单率'],
                        rows: [
                            { '日期': '1/1', '访问用户': 1393, '下单用户': 1093, '下单率': 0.32 },
                            { '日期': '1/2', '访问用户': 3530, '下单用户': 3230, '下单率': 0.26 },
                            { '日期': '1/3', '访问用户': 2923, '下单用户': 2623, '下单率': 0.76 },
                            { '日期': '1/4', '访问用户': 1723, '下单用户': 1423, '下单率': 0.49 },
                            { '日期': '1/5', '访问用户': 3792, '下单用户': 3492, '下单率': 0.323 },
                            { '日期': '1/6', '访问用户': 4593, '下单用户': 4293, '下单率': 0.78 }
                        ]
                    },
                    {
                        columns: ['data', 'visitUser', 'orderUser', 'rate'],
                        rows: [
                            { 'data': '1/1', 'visitUser': 1393, 'orderUser': 1093, 'rate': 0.32 },
                            { 'data': '1/2', 'visitUser': 3530, 'orderUser': 3230, 'rate': 0.26 },
                            { 'data': '1/3', 'visitUser': 2923, 'orderUser': 2623, 'rate': 0.76 },
                            { 'data': '1/4', 'visitUser': 1723, 'orderUser': 1423, 'rate': 0.49 },
                            { 'data': '1/5', 'visitUser': 3792, 'orderUser': 3492, 'rate': 0.323 },
                            { 'data': '1/6', 'visitUser': 4593, 'orderUser': 4293, 'rate': 0.78 }
                        ]
                    },
                    {
                        columns: ['type', 'value'],
                        rows: [
                            { type: 'speed', value: 80 }
                        ]
                    }
                ]
            }
        },
        methods: {
            // 进度条
            FnStart() {
                this.$Progress.start()
            },
            FnTest() {
                this.$Progress.start()
                FnProgress()
                    .then((response) => {
                        this.$Progress.finish()
                    }, (response) => {
                        this.$Progress.fail()
                    })
            },
            //
            onUpdate(event) {
                this.dragList.splice(event.newIndex, 0, this.dragList.splice(event.oldIndex, 1)[0])
            },
            //
            handleStarClick() {
                this.starActive = !this.starActive;
                console.log('你点了个赞：', this.starActive)
            }
        }
    }
</script>

<style scoped>
    .particles-js {
        background-image: url('../../assets/img/sky871d198.jpg');
        background-size: cover;
        width: 800px;
        height: 100%;
    }
    .drag {width: 300px}
</style>

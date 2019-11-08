<template>
    <div style="padding: 20px; background-color: #fff">
        <div style="color: #FC796B; font-size: 20px; margin: 10px 0">事件修饰符：</div>
        <el-table :data="eventData" border>
            <el-table-column label="修饰符" prop="key"></el-table-column>
            <el-table-column label="备注" prop="value"></el-table-column>
            <el-table-column label="操作">
                <template slot-scope="scope">
                    <div class="outer" @click="outer1" v-if="scope.row.key === '.stop'">
                        <div class="middle" @click="middle1">　　　　
                            <button @click="inner1">无.stop事件修饰符</button>
                        </div>
                    </div>
                    <div class="outer" @click.stop="outer1" v-if="scope.row.key === '.stop'">
                        <div class="middle" @click.stop="middle1">
                            <button @click.stop="inner1">有.stop事件修饰符</button>
                        </div>
                    </div>

                    <div class="outer" @click="outer2" v-if="scope.row.key === '.capture'">
                        <div class="middle" @click="middle2">　　　　
                            <button @click="inner2">无.capture事件修饰符</button>
                        </div>
                    </div>
                    <div class="bigOuter" id="1" @click="bigOuter2($event)" v-if="scope.row.key === '.capture'">
                        <div class="outer" id="2" @click.capture="bigOuter2($event)">
                            <div class="middle" id="3" @click="bigOuter2($event)">
                                <button id="4" @click="bigOuter2($event)">有.capture事件修饰符</button>
                            </div>
                        </div>
                    </div>

                    <div class="outer" @click="outer3" v-if="scope.row.key === '.self'">
                        <div class="middle" @click="middle3">　　　　
                            <button @click="inner3">无.self事件修饰符</button>
                        </div>
                    </div>
                    <div class="outer" @click.self="outer3" v-if="scope.row.key === '.self'">
                        <div class="middle" @click.self="middle3">
                            <button @click.self="inner3">有.self事件修饰符</button>
                        </div>
                    </div>

                    <div v-if="scope.row.key === '.once'">
                        <button @click.once="inner4">有.once事件修饰符</button>
                        <div v-if="show">{{  message }}</div>
                    </div>

                    <div v-if="scope.row.key === '.prevent'">
                        <a href="/" @click="inner5">无.prevent修饰符</a><br>
                        <a href="/" @click.prevent="inner5">有.prevent修饰符</a>
                    </div>

                </template>
            </el-table-column>
            <el-table-column label="返回结果" prop="message"></el-table-column>
        </el-table>


        <div style="color: #FC796B; font-size: 20px; margin: 10px 0">按键修饰符：</div>
        <el-table :data="pressData" border>
            <el-table-column label="修饰符" prop="key"></el-table-column>
            <el-table-column label="备注" prop="value"></el-table-column>
            <el-table-column label="操作">
                <button @keyup.enter="enter" @keyup.tab="tab" @keyup.delete="dalete" @keyup.esc="esc" @keyup.space="space"
                @keyup.up="up" @keyup.down="down" @keyup.left="left" @keyup.right="right">将鼠标置于按钮上，并按下键盘相应键</button>
            </el-table-column>
        </el-table>
        <div style="color: #FC796B; font-size: 20px; margin: 10px 0">系统修饰符：</div>
        <el-table :data="systemData" border>
            <el-table-column label="修饰符" prop="key"></el-table-column>
            <el-table-column label="备注" prop="value"></el-table-column>
            <el-table-column label="操作">
                <template slot-scope="scope">
                    <div v-if="scope.row.key === '.exact'">
                        <el-button @click.ctrl="exact">无.exact修饰符</el-button>
                        <el-button @click.ctrl.exact="exact">有.exact修饰符</el-button>
                    </div>
                </template>
            </el-table-column>
        </el-table>
        <div style="color: #FC796B; font-size: 20px; margin: 10px 0">鼠标修饰符：</div>
        <el-table :data="mouthData" border>
            <el-table-column label="修饰符" prop="key"></el-table-column>
            <el-table-column label="备注" prop="value"></el-table-column>
            <el-table-column label="操作">
                <template slot-scope="scope">
                    <div v-if="scope.row.key === '.left'">
                        <button @click.left="mouth_left">.left修饰符</button>
                    </div>
                    <div v-if="scope.row.key === '.middle'">
                        <button @click.middle="mouth_middle">.middle修饰符</button>
                    </div>
                    <div v-if="scope.row.key === '.right'">
                        <button @click.right="mouth_right">.right修饰符</button>
                    </div>
                </template>
            </el-table-column>
        </el-table>
    </div>
</template>

<script>
    import {Message, MessageBox} from 'element-ui'
    export default {
        name: "decorate",
        data() {
            return {
                message: '点击一次消失，再点不生效',
                show: true,
                eventData: [
                    {key:'.stop',value:'阻止单击事件冒泡。嵌套两三层父子关系，然后所有都有点击事件，点击子节点，就会触发从内至外  子节点-》父节点的点击事件', message:''},
                    {key:'.prevent',value:'用于取消默认事件。比如我们页面的<a href="#">标签，当用户点击时，通常在浏览器的网址列出#。修饰符可以串联：<a v-on:click.stop.prevent="doThat"></a>'},
                    {key:'.capture',value:'由外至内依次触发.capture修饰符直到所点击的div处，再由内至外冒泡触发div，若由内至外时有当前所点击的div，先触发所点击的div，再由内至外触发', message:''},
                    {key:'.self',value:'只会触发自己范围内的事件，不会包含子元素。', message:''},
                    {key:'.once',value:'如果我们在@click事件上添加.once修饰符，只要点击按钮只会执行一次。', message:''},
                    // {key:'.passive',value:''},
                ],
                pressData: [
                    {key:'.enter',value:'回车键'},
                    {key:'.tab',value:'制表键'},
                    {key:'.delete',value:'含delete和backspace键'},
                    {key:'.esc',value:'返回键'},
                    {key:'.space',value:'空格键'},
                    {key:'.up',value:'向上键'},
                    {key:'.down',value:'向下键'},
                    {key:'.left',value:'向左键'},
                    {key:'.right',value:'向右键'},
                ],
                systemData: [
                    {key:'.ctrl',value:''},
                    {key:'.shift',value:''},
                    {key:'.alt',value:''},
                    {key:'.meta',value:''},
                    {key:'.exact', value:'有且只有 Ctrl 被按下的时候才触发<button @click.ctrl.exact="onCtrlClick">A</button>；即使 Alt 或 Shift 被一同按下时也会触发<button @click.ctrl="onClick">A</button>'},
                ],
                mouthData: [
                    {key:'.left',value:'鼠标左键'},
                    {key:'.middle',value:'鼠标中间滚轮'},
                    {key:'.right',value:'鼠标右键'},
                ],
                id:''
            }
        },
        methods: {
            inner1() {
                this.message = 'inner：这是最里面的Button';
                this.eventData[0].message = this.message;
            },
            middle1() {
                this.message = 'middle：这是中间的Div';
                this.eventData[0].message = this.message;
            },
            outer1() {
                this.message = 'outer：这是外面的Div';
                this.eventData[0].message = this.message;
            },
            inner2() {
                this.message = 'inner：这是最里面的Button';
                this.eventData[2].message = this.message;
            },
            middle2() {
                this.message = 'middle：这是中间的Div';
                this.eventData[2].message = this.message;
            },
            bigOuter2($event) {
                this.message = '观察弹框id顺序';
                this.eventData[2].message = this.message;
                this.id = $event.currentTarget.id;
                Message({type: 'success', message: this.id})
            },
            outer2() {
                this.message = 'outer：这是外面的Div';
                this.eventData[2].message = this.message;
            },
            inner3() {
                this.message = 'inner：这是最里面的Button';
                this.eventData[3].message = this.message;
            },
            middle3() {
                this.message = 'middle：这是中间的Div';
                this.eventData[3].message = this.message;
            },
            outer3() {
                this.message = 'outer：这是外面的Div';
                this.eventData[3].message = this.message;
            },
            inner4() {
                this.show = !this.show
            },
            inner5() {
                Message('弹出来了');
            },

            enter() { Message({type: 'success', message: '您刚才按了enter键!'}) },
            tab() { Message({type: 'success', message: '您刚才按了tab键!'}) },
            delete() { Message({type: 'success', message: '您刚才按了delete键!'}) },
            esc() { Message({type: 'success', message: '您刚才按了esc键!'}) },
            space() { Message({type: 'success', message: '您刚才按了space键!'}) },
            up() { Message({type: 'success', message: '您刚才按了up键!'}) },
            down() { Message({type: 'success', message: '您刚才按了down键!'}) },
            left() { Message({type: 'success', message: '您刚才按了left键!'}) },
            right() { Message({type: 'success', message: '您刚才按了right键!'}) },

            exact() {
                Message({type: 'success', message: '.exact修饰符弹出'})
            },
            mouth_left() {
                Message({type: 'success', message: '你刚才点了鼠标左键'})
            },
            mouth_middle() {
                Message({type: 'success', message: '你刚才点了鼠标滚轮键'})
            },
            mouth_right() {
                Message({type: 'success', message: '你刚才点了鼠标右键'}
                )
            },
        }
    }
</script>

<style scoped>
    .middle {padding: 10px; border: 1px solid #ff0000; text-align: center}
    .outer {padding: 10px 20px; border:1px solid green; margin: 5px}
    .bigOuter {padding: 10px 20px; border:1px solid orange; margin: 5px}
</style>

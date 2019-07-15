<template>
    <div style="padding: 20px; background-color: #fff">
        <div style="color: #FC796B; font-size: 20px; margin: 10px 0">双向数据绑定：</div>
        <el-card class="box-card" shadow="hover">
            <div>MVVM模式：Model-View-ViewModel</div>
        </el-card>
        <el-card class="box-card" shadow="hover">
            <div style="color: #FC796B">输入框：</div>
            <div>
                model:<el-input v-model="datas" style="width: 200px;margin-left: 20px"></el-input><br>
                view:<span v-text="datas" style="margin-left: 45px"></span>
            </div>
        </el-card>

        <el-card class="box-card" shadow="hover">
            <div style="color: #FC796B">下拉框：如果select绑定的值为对象，请务必指定value-key为它的唯一性标示</div>
            <el-select v-model="test" value-key="id">
                <el-option v-for="item in arr" :label="item.name" :key="item.id" :value="item"></el-option>
            </el-select>
            <div>选择的项为:{{ test }}</div>
        </el-card>

        <el-card class="box-card" shadow="hover">
            <div style="color: #FC796B">单选框：</div>
            <el-radio-group v-model="radiogroup">
                <el-radio label="apple"></el-radio>
                <el-radio label="banana"></el-radio>
                <el-radio label="orange"></el-radio>
            </el-radio-group>
            <div>选择的项为:{{ radiogroup }}</div>

        </el-card>

        <el-card class="box-card" shadow="hover">
            <div style="color: #FC796B">复选框：</div>
            <el-checkbox-group v-model="checkboxgroup">
                <el-checkbox label="apple"></el-checkbox>
                <el-checkbox label="banana"></el-checkbox>
                <el-checkbox label="orange"></el-checkbox>
            </el-checkbox-group>
            <div>选择的项为:{{ checkboxgroup }}</div>
        </el-card>

        <el-table :data="tableData" border style="margin: 20px 0">
            <el-table-column prop="key" label="修饰符"></el-table-column>
            <el-table-column prop="value" label="说明"></el-table-column>
            <el-table-column label="操作">
                <template  slot-scope="scope">
                    <div v-if="scope.row.key === '.lazy'">
                        <i class="el-icon-edit" style="color: blue; font-size: 20px;margin-right: 20px"></i>
                        <span style="color: blue">注：table中写input/button等，需在{{ note }}中写</span>
                        <input v-model="input1" placeholder="无.lazy修饰符"></input>
                        <input v-model.lazy="input2" placeholder="有.lazy修饰符"></input>
                        返回结果：<span v-text="input1"></span><span>{{input2}}</span>
                    </div>
                    <div v-if="scope.row.key === '.number'">
                        <el-input v-model="input3" placeholder="无.number修饰符" @blur="checkType"></el-input>
                        <el-input v-model.number="input4" placeholder="有.number修饰符" @blur="checkType"></el-input>
                        返回结果：<span v-text="input3"></span><span v-text="input4"></span>
                        两个类型：<span v-text="input3_type"></span><span v-text="input4_type" style="margin-left: 5px"></span>
                    </div>
                    <div v-if="scope.row.key === '.trim'">
                        <el-input v-model="input5" placeholder="无.trim修饰符" @blur="checkLength"></el-input>
                        <el-input v-model.trim="input6" placeholder="有.trim修饰符" @blur="checkLength"></el-input>
                        返回结果：<span v-text="input5"></span><span v-text="input6"></span>
                        输入长度：<span v-text="input5_length"></span><span style="margin-left: 5px" v-text="input6_length"></span>
                    </div>
                </template>
            </el-table-column>
        </el-table>

    </div>
</template>

<script>
    export default {
        name: "mvvm",
        data() {
            return {
                datas:'',
                input1:'',
                input2:'',
                input3:'',
                input4:'',
                input3_type:'',
                input4_type:'',
                input5:'',
                input6:'',
                input5_length:'',
                input6_length:'',

                show:true,
                test:'',
                note:'<template slot-scope="scope"></template>',
                arr:[
                    {id:1, name:'张三'},
                    {id:2, name:'李四'},
                    {id:3, name:'王五'}
                ],
                radiogroup:'',
                checkboxgroup:[],
                tableData: [
                    {key:'.lazy', value:'在默认情况下，v-model 在每次 input 事件触发后将输入框的值与数据进行同步，你可以添加 lazy 修饰符，从而转变为使用 change 事件进行同步。', message:''},
                    {key:'.number', value:'如果想自动将用户的输入值转为数值类型，可以给 v-model 添加 number 修饰符。这通常很有用，因为即使在 type="number" 时，HTML 输入元素的值也总会返回字符串。如果这个值无法被 parseFloat() 解析，则会返回原始的值。', message:''},
                    {key:'.trim', value:'如果要自动过滤用户输入的首尾空白字符，可以给 v-model 添加 trim 修饰符。', message:''},
                ]
            }
        },
        methods: {
            checkType() {
                this.input3_type = typeof this.input3;
                this.input4_type = typeof this.input4;
            },
            checkLength() {
                this.input5_length = this.input5.length;
                this.input6_length = this.input6.length;
            }
        },
    }
</script>

<style>
    .box-card {
        margin: 20px 0;
    }
</style>

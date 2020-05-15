<template>
    <div style="padding: 20px;">
        <table border="1" style="width: 100%">
            <tr><th>字符</th><th>描述</th><th>字符串</th><th>表达式</th><th>匹配结果</th></tr>
            <tr><td>\d</td><td>匹配一个数字字符,等价于 [0-9]</td><td>wangwuhui666</td><td>str.match(/\d/)</td><td>{{res}}</td></tr>
            <tr><td>\d</td><td>匹配一个数字字符,等价于 [0-9]</td><td>wangwuhui666</td><td>str.match(/\d/g)</td><td>{{res_d}}</td></tr>
            <tr><td>\D</td><td>匹配一个非数字字符,等价于 [^0-9]</td><td>wangwuhui666</td><td>str.match(/\D/g)</td><td>{{res_D}}</td></tr>
            <tr><td>\f</td><td>匹配一个换页符</td></tr>
            <tr><td>\n</td><td>匹配一个换行符</td></tr>
            <tr><td>\r</td><td>匹配一个回车符</td></tr>
            <tr><td>\t</td><td>匹配一个制表符</td></tr>
            <tr><td>\s</td><td>匹配任何空白字符，包括空格、制表符、换页符等等</td><td>wang wu hui 666</td><td>str.match(/\s/)</td><td>{{res_s}}</td></tr>
            <tr><td>\S</td><td>匹配任何非空白字符。等价于 [^ \f\n\r\t\v]</td><td>wang wu hui 666</td><td>str.match(/\S/)</td><td>{{res_S}}</td></tr>
            <tr><td>\b</td><td>匹配一个单词边界，也就是指单词和空格间的位置</td><td>wang wu hui 666</td><td>str.match(/\bw/g)</td><td>{{res_b}}</td></tr>
            <tr><td>\B</td><td>匹配非单词边界</td><td>wang wu hui 666</td><td>str.match(/\B/g)</td><td>{{res_B}}</td></tr>
            <tr><td>\w</td><td>匹配字母或数字或下划线或汉字,等价于[A-Za-z0-9_]</td></tr>
            <tr><td>^</td><td>匹配输入字符串的开始位置</td></tr>
            <tr><td>$</td><td>匹配输入字符串的结束位置</td></tr>
            <tr><td>*</td><td>匹配前面的子表达式零次或多次</td></tr>
            <tr><td>+</td><td>匹配前面的子表达式一次或多次</td></tr>
            <tr><td>?</td><td>匹配前面的子表达式零次或一次</td></tr>
            <tr><td>.</td><td>匹配除换行符（\n、\r）之外的任何单个字符</td></tr>
            <tr><td>{n}</td><td>n 是一个非负整数。匹配确定的 n 次</td></tr>
            <tr><td>{n,}</td><td>n 是一个非负整数。至少匹配n 次</td></tr>
            <tr><td>{n,m}</td><td>m 和 n 均为非负整数，其中n <= m，最少匹配 n 次且最多匹配 m 次</td></tr>
            <tr><td>x|y</td><td>匹配 x 或 y</td></tr>
            <tr><td>[xyz]</td><td>字符集合,匹配所包含的任意一个字符</td></tr>
            <tr><td>[^xyz]</td><td>负值字符集合,匹配未包含的任意字符</td></tr>
            <tr><td>[a-z]</td><td>字符范围,匹配指定范围内的任意字符</td></tr>
            <tr><td>[^a-z]</td><td>负值字符范围,匹配任何不在指定范围内的任意字符</td></tr>
            <tr><td>.*</td><td>贪婪模式，匹配尽可能多的字符</td><td>abcdefc</td><td>str.match(/ab.*c/)</td><td>{{res_tl}}</td></tr>
            <tr><td>.*?</td><td>非贪婪模式，匹配尽可能少的字符</td><td>abcdefc</td><td>str.match(/ab.*?c/)</td><td>{{res_ftl}}</td></tr>
            <tr><td colspan="5">g: 全局匹配 i: 忽略大小写 gi: 全局匹配 + 忽略大小</td></tr>
        </table>
        <div style="margin-top: 20px">
            <el-form :model="form" :rules="formRules" ref="form">
                <el-form-item label="姓名" prop="name">
                    <el-input v-model="form.name" style="width: 300px"></el-input>
                </el-form-item>
                <el-form-item label="电话" prop="tel">
                    <el-input v-model="form.tel" style="width: 300px"></el-input>
                </el-form-item>
                <el-form-item label="邮箱" prop="email">
                    <el-input v-model="form.email" style="width: 300px"></el-input>
                </el-form-item>
                <el-form-item label="身份证号：" prop="id_num">
                    <el-input v-model="form.id_num" style="width: 300px"></el-input>
                </el-form-item>
            </el-form>
        </div>
    </div>
</template>

<script>
    export default {
        name: "regexp",
        data() {
            let checkName = (rule, value, callback) => {
                if (value) {
                    if (value.length > 4) {
                        callback(new Error('名字最长为4位，请重新输入！'))
                    } else {
                        let reg=/^[\u4E00-\u9FA5]{1,4}$/;   /*定义验证表达式*/
                        let result = reg.test(value);     /*进行验证*/
                        if(!result) {
                            callback(new Error('名字必须是中文，请重新输入！ '))
                        }else {
                            callback()
                        }
                    }
                }
            };
            let checkTel = (rule, value, callback) => {
                if (value) {
                    const reg = /^1[3|4|5|7|8][0-9]\d{8}$/;
                    if (reg.test(value)) {
                        callback()
                    } else {
                        callback(new Error('请填写正确的手机号'))
                    }
                }
            };
            let checkID = (rule, value, callback) => {
                if (value) {
                    let aCity ={11: '北京', 12: '天津', 13: '河北', 14: '山西', 15: '内蒙古', 21: '辽宁', 22: '吉林',
                        23: '黑龙江', 31: '上海', 32: '江苏', 33: '浙江', 34: '安徽', 35: '福建', 36: '江西', 37: '山东',
                        41: '河南', 42: '湖北', 43: '湖南', 44: '广东', 45: '广西',46: '海南', 50: '重庆', 51: '四川', 52: '贵州', 53: '云南',
                        54: '西藏', 61: '陕西', 62: '甘肃', 63: '青海', 64: '宁夏', 65: '新疆', 71: '台湾', 81: '香港', 82: '澳门'}
                    let iSum = 0
                    if (!/^\d{17}(\d|x)$/i.test(value)) {
                        return callback(new Error('您输入的身份证长度或格式错误'))
                    }
                    value = value.replace(/x$/i, 'a');
                    if (aCity[parseInt(value.substr(0, 2))] == null) {
                        return callback(new Error('请填写正确的身份证号'))
                    }
                    let sBirthday = value.substr(6, 4) + '-' + Number(value.substr(10, 2)) + '-' + Number(value.substr(12,2))
                    let d = new Date(sBirthday.replace(/-/g, '/'));
                    if (sBirthday !== (d.getFullYear() + '-' + (d.getMonth() + 1) + '-' + d.getDate())) {
                        return callback(new Error('请填写正确的身份证号'))
                    }
                    for (var i = 17; i >= 0; i--) {
                        iSum += (Math.pow(2, i) % 11) * parseInt(value.charAt(17 - i), 11)
                    }
                    if (iSum % 11 !== 1) {
                        return callback(new Error('请填写正确的身份证号'))
                    }
                    return callback()
                } else {
                    callback(new Error('请填写您的身份证号'))
                }
            };
            return {
                res:'',
                res_d:'',
                res_D:'',
                res_s:'',
                res_S:'',
                res_b:'',
                res_B:'',
                res_tl:'',
                res_ftl:'',
                form: {
                    name:'',
                    tel:'',
                    email:'',
                    id_num:''
                },
                formRules: {
                    name: [
                        {required: true, message: '请输入姓名', rigger: 'blur'},
                        {validator: checkName, trigger: ['blur', 'change']}
                    ],
                    tel: [
                        {required: true, message: '请填写您的手机号', trigger: 'blur'},
                        { validator: checkTel, trigger: 'blur' }
                    ],
                    email: [
                        {required: true, message: '请填写您的邮箱', trigger: 'blur'},
                        {type: 'email', message: '请填写正确的邮箱地址', trigger: ['blur', 'change']}
                    ],
                    id_num: [
                        {required: true, message: '请填写您的身份证号', trigger: 'blur'},
                        { validator: checkID, trigger: 'blur' }
                    ],
                }
            }
        },
        mounted() {
            var str_d = 'wangwuhui666';
            this.res = str_d.match(/\d/);
            this.res_d = str_d.match(/\d/g);
            this.res_D = str_d.match(/\D/g);

            var str_s = 'wang wu hui 666';
            this.res_s = str_s.match(/\s/g);
            this.res_S = str_s.match(/\S/g);

            this.res_b = str_s.match(/\bw/g);
            this.res_B = str_s.match(/\B/g);

            var str_tl = 'abcdefc';
            this.res_tl = str_tl.match(/ab.*c/);
            this.res_ftl = str_tl.match(/ab.*?c/);
        },
        methods:{

        }
    }
</script>

<style scoped>
    tr{
        text-align: center;
    }
</style>

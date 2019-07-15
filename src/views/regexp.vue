<template>
    <div style="padding: 20px; background-color: #fff">
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
            <tr><td>\s</td><td>匹配任何非空白字符。等价于 [^ \f\n\r\t\v]</td><td>wang wu hui 666</td><td>str.match(/\S/)</td><td>{{res_S}}</td></tr>
            <tr><td>\b</td><td>匹配一个单词边界，也就是指单词和空格间的位置</td><td>wang wu hui 666</td><td>str.match(/\bw/g)</td><td>{{res_b}}</td></tr>
            <tr><td>\B</td><td>匹配非单词边界</td><td>wang wu hui 666</td><td>str.match(/\B/g)</td><td>{{res_B}}</td></tr>
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
    </div>
</template>

<script>
    export default {
        name: "regexp",
        data() {
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
        }
    }
</script>

<style scoped>
    tr{
        text-align: center;
    }
</style>

<template>
    <div>
        <!--<input id="button" type="button" value="调用child.html中的函数say()" onclick="callChild()"/>-->
        <el-button @click="callChild">调用child.html中的函数say()</el-button>
        <span>{{ result }}</span>
        <iframe name="myFrame" src="./iframe_child" frameborder=0 width="100%" :height="heightChange"></iframe>
    </div>
</template>

<script>
    export default {
        name: "iframe_parent",
        data () {
            return {
                heightChange: 0,
                result: ''
            }
        },
        methods: {
            say(){
                alert("parent.html");
            },
            callChild(){
                myFrame.window.say();
                myFrame.window.document.getElementById("button").value="调用结束";
            },

            reinitIframe: function () {
                var minHeight = document.documentElement.clientHeight - 60
                this.heightChange = minHeight
                var that = this
                window.onresize = function () {
                    minHeight = document.documentElement.clientHeight - 60
                    that.heightChange = minHeight
                }
            }
        },
        mounted() {
            this.reinitIframe()
        }
    }
</script>

<style scoped>

</style>

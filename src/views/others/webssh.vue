<template>
    <section>
        <div>
            <iframe class="iframe"  id="frame_content" frameborder=0 :src=url  width="100%" :height="heightChange"></iframe>
            <div contenteditable="true">大家好</div>
        </div>
    </section>
</template>

<script>
    export default {
        name: "webssh",
        data() {
            return {
                url: 'http://127.0.0.1:8888',
                heightChange: 0
            }
        },
        methods: {
            reinitIframe: function () {
                var minHeight = document.documentElement.clientHeight - 60   // 获取页面可视区的高度
                this.heightChange = minHeight;
                console.log(this.heightChange);
                var that = this
                window.onresize = function () {
                    minHeight = document.documentElement.clientHeight - 60
                    that.heightChange = minHeight
                }
            }
        },
        mounted () {
            this.reinitIframe()
        }
    }
</script>

<style scoped>

</style>

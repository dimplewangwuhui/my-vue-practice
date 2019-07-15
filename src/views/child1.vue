<!--子组件1-->
<template>
    <div class="childOne">
        <el-button @click="emitEvent">点击发送事件</el-button>
    </div>
</template>

<script>
    export default {
        name: 'child1',
        data () {
            return {
                childData: {
                    text: 'child1Message'
                }
            }
        },
        methods: {
            emitEvent () {
                // 发送事件
                this.$bus.$emit('clickEvent', this.childData.text);  //bus在main.js中注册
            }
        }
    }
</script>

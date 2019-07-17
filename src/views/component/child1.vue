<!--子组件1-->
<template>
    <div class="childOne">
        <h1>兄弟组件1</h1>
        <el-button type="primary" @click="emitEvent">点击向兄弟组件2发送事件</el-button>
    </div>
</template>

<script>
    export default {
        name: 'child1',
        data () {
            return {
                childData: {
                    text: 'hey, brother'
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

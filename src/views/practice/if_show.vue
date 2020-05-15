<template>
    <div style="padding: 20px;">
        <el-button @click="really = !really">显示/不显示</el-button>
        <div v-if="really">哇哈哈哈哈</div>
        <div v-show="really">哇哈哈哈哈</div>
        <el-table :data="tableData" border style="margin-top: 20px">
            <el-table-column label="v-if" prop="if"></el-table-column>
            <el-table-column label="v-show" prop="show"></el-table-column>
        </el-table>
        <div style="margin-top: 20px">当 v-for 与 v-if一起使用时，v-for 具有比 v-if 更高的优先级。</div>
        <div>注意:不推荐在同一元素上使用 v-if 和 v-for</div>
        <div>当在组件上使用 v-for 时，key 现在是必须的。</div>
    </div>
</template>

<script>
    export default {
        name: "if_show",
        data() {
            return {
                tableData: [
                    {if: '“真正”的条件渲染，因为它会确保在切换过程中条件块内的事件监听器和子组件适当地被销毁和重建。',
                        show: '只是简单地切换元素的 CSS 属性 display'},
                    {if: '惰性的：如果在初始渲染时条件为假，则什么也不做——直到条件第一次变为真时，才会开始渲染条件块。',
                        show: '不管初始条件是什么，元素总是会被渲染，并且只是简单地基于 CSS 进行切换。'},
                    {if: '更高的切换开销，如果在运行时条件很少改变，则使用 v-if 较好。',
                        show: '更高的初始渲染开销，如果需要非常频繁地切换，则使用 v-show 较好。'}
                ],
                really:true,
            }
        },
        methods: {

        }
    }
</script>

<style scoped>

</style>

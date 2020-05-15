<template>
    <div>
        <el-row :gutter="20">
            <el-col :span="20">
                <el-table ref="boxFixed" :data="tableData" border :header-row-class-name="FnHeaderRowClass" :header-cell-style="FnHeaderCellStyle">
                    <el-table-column type="selection"></el-table-column>
                    <el-table-column prop="id" label="ID"></el-table-column>
                    <el-table-column prop="name" label="姓名"></el-table-column>
                    <el-table-column prop="age" label="年龄"></el-table-column>
                </el-table>
            </el-col>
            <!--<el-col :span="4">-->
                <!--<div ref="boxFixed" style="width: 100px; height: 300px; background-color: #dde2ef;" :class="{'is_fixed': isFixed}"></div>-->
            <!--</el-col>-->
        </el-row>
    </div>
</template>

<script>
    export default {
        name: "topFixed",
        data() {
            return {
                isFixed: false,
                offsetTop: 0,
                tableData: [
                    {id: 1, name: 'wangwuhui', age: 18},{id: 2, name: 'wangwuhui', age: 18},{id: 3, name: 'wangwuhui', age: 18},{id: 4, name: 'wangwuhui', age: 18},{id: 5, name: 'wangwuhui', age: 18},{id: 6, name: 'wangwuhui', age: 18},{id: 7, name: 'wangwuhui', age: 18},
                    {id: 8, name: 'wangwuhui', age: 18},{id: 9, name: 'wangwuhui', age: 18},{id: 10, name: 'wangwuhui', age: 18},{id: 11, name: 'wangwuhui', age: 18},{id: 12, name: 'wangwuhui', age: 18},{id: 13, name: 'wangwuhui', age: 18},{id: 14, name: 'wangwuhui', age: 18},
                    {id: 15, name: 'wangwuhui', age: 18},{id: 16, name: 'wangwuhui', age: 18},{id: 17, name: 'wangwuhui', age: 18},{id: 18, name: 'wangwuhui', age: 18},{id: 19, name: 'wangwuhui', age: 18},{id: 20, name: 'wangwuhui', age: 18},
                ]
            }
        },
        methods: {
            initHeight() {
                var scrollTop = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop
                this.isFixed = scrollTop > this.offsetTop ? true : false;
            },
            // 获取当前元素到页面顶部的距离
            getElementToPageTop(el) {
                let actualTop = el.offsetTop
                let current = el.offsetParent
                if (current !== null) {
                    actualTop += current.offsetTop
                    current = current.offsetParent
                }
                return actualTop
            },
            FnHeaderCellStyle({ row, column, rowIndex, columnIndex}) {
                let realWidth = row[columnIndex].realWidth ? row[columnIndex].realWidth : row[columnIndex].minWidth
                return `width: ${realWidth}px`
            },
            FnHeaderRowClass({ row, rowIndex}) {
                let className = '';
                this.isFixed ? className = 'is_fixed' : className = '';
                return className
            }
        },
        mounted() {
            window.addEventListener('scroll', this.initHeight);
            this.$nextTick(() => {
                this.offsetTop = this.getElementToPageTop(this.$refs.boxFixed.$el) - 60;  // 60是顶部导航栏的高度
            })
        },
        destroyed() {
            window.removeEventListener('scroll',() => {
                this.scroll1 =
                    document.querySelector('.recordContent').scrollTop
            },false)
        }
    }
</script>

<style>
    .is_fixed{
        position: fixed;
        top: 60px;
        z-index: 999;
    }
</style>

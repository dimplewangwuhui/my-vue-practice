<template>
    <div class="searchZJ">
        <div class="f-search">
            <div class="f-searchIn" v-bind:class="{searchInFous: this.fousFlag}">{{this.searchValue}}<span v-bind:class="{searchActive: this.searchFlag}" v-on:click="searchDown"></span></div>
            <div class="f-searchXl" v-if="this.dataHas" v-bind:style="{height:this.searchFous, border:this.searchBorder}">
                <div v-for="(item,i) in searchList" :key="i" v-on:click="choseValue(item)">{{item}}</div>
            </div>
            <div class="f-searchXl" v-else >
                <div>暂无数据</div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: "search",
        data() {
            return {
                dataHas: true,
                searchFlag: false,
                searchFous: '0',
                fousFlag: false,
                searchValue: '',
                searchBorder: 'none'
            }
        },
        props: {
            // 我们在 props 中接收数据，注意props对象里面 键值 是对该数据的 数据类型 的规定。
            // 做了规范，使用者就只能传输指定类型的数据，否则报警告
            searchList: Array,
            selectValue: Object
        },
        methods: {
            searchDown() {
                this.searchFlag === false ? this.searchFlag = true : this.searchFlag = false;
                this.searchFous === '0' ? this.searchFous = 'auto' : this.searchFous = '0';
                this.searchBorder === 'none' ? this.searchBorder = '1px solid #D9D9D9' : this.searchBorder = 'none';
                this.fousFlag === false ? this.fousFlag = true : this.fousFlag = false
            },
            choseValue(value) {
                this.searchValue = value;
                this.searchDown();
                this.selectValue.data = '我被修改了';  //不规范传值
                this.$emit('selectFunc', value)  //正确传值方式
            }
        }
    }
</script>

<style scoped lang="stylus" rel="stylesheet/stylus">
    .f-search{
        width: 250px;
        height: auto;
        position: relative;
        box-sizing: border-box;
    }
    .f-searchIn{
        width: 250px;
        height: 35px;
        line-height: 35px;
        font-size: 0.95rem;
        border-radius: 5px;
        overflow: hidden;
        position: relative;
        background-color: white;
        box-shadow: none;
        box-sizing: border-box;
        color: #000000;
        padding-left: 10px;
        border: 1px solid #A3A3A3;
    }
    .searchInFous{
        border: 1px solid #57C4F6;
        box-shadow: 0 0 5px #57C4F6;
    }
    .f-searchIn > span{
        display: block;
        width: 28px;
        height: 28px;
        background-size: 100% 100%;
        background-repeat: no-repeat;
        background-position: 0px -13px;
        position: absolute;
        top: 10px;
        right: 5px;
    }
    .f-searchIn .searchActive{
        background-position: 0 12px;
        top: -2px;
    }
    .f-search .f-searchXl{
        position: absolute;
        width: 100%;
        height: auto;
        max-height: 220px;
        top: 41px;
        left: -1px;
        border-radius: 5px;
        /*border: 1px solid #D9D9D9;*/
        background-color: white;
        overflow-x: hidden;
        overflow-y: scroll;
    }
    .f-search .f-searchXl > div{
        height: 35px;
        line-height: 38px;
        color: #000000;
        padding-left: 25px;
        font-size: 0.92rem;
    }
    .f-search .f-searchXl > div:hover{
        background-color: #D5F1FD;
    }
</style>

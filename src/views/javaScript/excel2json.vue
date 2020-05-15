<template>
    <div id="app">
        <h1>vue-xlsx-table</h1>
        <vue-xlsx-table @on-select-file="handleSelectedFile"> 上传xlsx文件转json </vue-xlsx-table>
    </div>
</template>
<script>
    export default {
        methods: {
            handleSelectedFile (convertedData) {
                console.log(convertedData)
            }
        }
    }
</script>

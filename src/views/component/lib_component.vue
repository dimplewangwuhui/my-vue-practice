<template>
    <div>
        <div style="font-size: 20px; margin-bottom: 20px; text-align: center">自定义UI组件库wwh-ui</div>
        <div style="margin-bottom: 20px">
            <wwh-button>按钮</wwh-button>
        </div>
        <div style="margin-bottom: 20px">
            <wwh-button>按钮</wwh-button>
            <wwh-button type="primary">primary按钮</wwh-button>
            <wwh-button type="success">success按钮</wwh-button>
            <wwh-button type="info">info按钮</wwh-button>
            <wwh-button type="warning">warning按钮</wwh-button>
            <wwh-button type="danger">danger按钮</wwh-button>
        </div>
        <div style="margin-bottom: 20px">
            <wwh-button plain>按钮</wwh-button>
            <wwh-button type="primary" plain>primary按钮</wwh-button>
            <wwh-button type="success" plain>success按钮</wwh-button>
            <wwh-button type="info" plain>info按钮</wwh-button>
            <wwh-button type="warning" plain>warning按钮</wwh-button>
            <wwh-button type="danger" plain>danger按钮</wwh-button>
        </div>
        <div style="margin-bottom: 20px">
            <wwh-button round>按钮</wwh-button>
            <wwh-button type="primary" round>primary按钮</wwh-button>
            <wwh-button type="success" round>success按钮</wwh-button>
            <wwh-button type="info" round>info按钮</wwh-button>
            <wwh-button type="warning" round>warning按钮</wwh-button>
            <wwh-button type="danger" round>danger按钮</wwh-button>
        </div>
        <div style="margin-bottom: 20px">
            <wwh-button disabled>禁用</wwh-button>
        </div>
    </div>
</template>

<script>
    export default {
        name: "lib_component"
    }
</script>

<style scoped>

</style>

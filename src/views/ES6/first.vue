<template>
    <div style="padding: 20px; background-color: #fff">
        <img :src=imgUrl>
    </div>
</template>

<script>
    export default {
        name: "first",
        data() {
            return {
                imgUrl: require('../../assets/img/es6-tutorial.jpg'),
                arr:[{name:'wwh', age:'11'}]
            }
        },
        methods: {
        }
    }
</script>

<style scoped>

</style>

<template>
    <div style="padding: 20px;">
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
        },
        mounted() {
            console.log('======000000', this.$router)
        }
    }
</script>

<style scoped>

</style>

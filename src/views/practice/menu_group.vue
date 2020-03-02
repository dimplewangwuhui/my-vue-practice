<template>
    <div style="width: 100%">

    </div>
</template>
<script>
    export default {
        data() {
            return {
                arr: [{name:'1'}, {name: '2'}, {name: '3'}]
            }
        },
        computed: {

        },
        watch: {

        },
        methods: {

        },
        mounted() {
            let str = '/bj/api/users/search'
            console.log(str.split('api')[1])
        }
    }
</script>
<style>

</style>

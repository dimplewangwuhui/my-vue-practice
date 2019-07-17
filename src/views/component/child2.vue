<!--子组件2-->
<template>
    <div class="childTwo">
        <h1>兄弟组件2</h1>
        <span>兄弟组件1传给兄弟组件2的值为：{{the_data}}</span>
    </div>
</template>

<script>
    export default {
        name: 'child2',
        data () {
            return {
                the_data:'',
            }
        },
        mounted () {
            this.$bus.$on('clickEvent', (val) => {
                this.the_data = val;
                console.log('********', val)
            })
        }
    }
</script>

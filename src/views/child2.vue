<!--子组件2-->
<template>
    <div class="childTwo">
        <span>子组件1传给子组件2的值：{{the_data}}</span>
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

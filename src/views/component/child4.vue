<template>
    <div id="childB">
        <h1>我是B组件</h1>
        <el-button type="primary" @click="transform">点我让A组件接收到数据</el-button>
        <p>因为你点了A，所以我的信息发生了变化：{{AMessage}}</p>
    </div>
</template>

<script>
    import { mapGetters } from 'vuex'
    export default {
        data() {
            return {
                BMessage: 'Hello，A组件，我是B组件'
            }
        },
        computed: {
            ...mapGetters([
                'AMsg'
            ]),
            AMessage() {
                console.log('----');
                console.log('----', this.AMsg);
                return this.AMsg
            }
        },
        methods: {
            transform() {
                // 触发receiveBMsg，将B组件的数据存放到store里去
                this.$store.commit('receiveBMsg', {
                    BMsg: this.BMessage
                })
            }
        }
    }
</script>

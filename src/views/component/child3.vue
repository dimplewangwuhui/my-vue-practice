<template>
    <div id="childA">
        <h1>我是A组件</h1>
        <el-button type="primary" @click="transform">点我让B组件接收到数据</el-button>
        <p>因为你点了B，所以我的信息发生了变化：{{BMessage}}</p>
    </div>
</template>

<script>
    import { mapGetters } from 'vuex'
    export default {
        data() {
            return {
                AMessage: 'Hello，B组件，我是A组件'
            }
        },
        computed: {
            ...mapGetters([
                'BMsg'
            ]),
            BMessage() {
                return this.BMsg
            }
        },
        methods: {
            transform() {
                // 触发receiveAMsg，将A组件的数据存放到store里去
                this.$store.commit('receiveAMsg', {
                    AMsg: this.AMessage
                })
            }
        }
    }
</script>

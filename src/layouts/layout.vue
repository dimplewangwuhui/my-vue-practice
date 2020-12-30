<template>
  <div class="layout-container" v-if="isAlive">
    <LayoutHeader></LayoutHeader>
    <Sidebar></Sidebar>
    <LayoutMain></LayoutMain>
  </div>
</template>
<script>
import LayoutHeader from './layoutHeader'
import Sidebar from './sidebar'
import LayoutMain from './layoutMain'
export default {
  name: 'layout',
  components: {
    LayoutHeader,
    Sidebar,
    LayoutMain
  },
  data() {
    return {
      isAlive: true
    }
  },
  provide() {
    return {
      reFresh: this.refresh
    }
  },
  methods: {
    refresh() {
      console.log('刷新', this.$router)
      this.isAlive = false;
      this.$nextTick(() => {
        this.isAlive = true
      })
    }
  }
}
</script>

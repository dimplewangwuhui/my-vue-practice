<template>
  <div class="layout-main" :class="{'sidebar-collapse': isCollapse}">
    <el-breadcrumb separator="/" class="breadcrumb">
      <el-breadcrumb-item :to="{ path: '/' }">首页</el-breadcrumb-item>
      <el-breadcrumb-item v-for="(item, index) in $route.matched" v-if="item.path !== ''" :key="item.path">
        <span v-text="item.name"></span>
      </el-breadcrumb-item>
    </el-breadcrumb>
    <router-view style="padding:20px;"></router-view>
    <!--<iframe src="https://zhanyuzhang.github.io/lovely-cat/cat.html" id="catIframe" frameborder="0"></iframe>-->
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
export default {
  created () {
  },
  computed: {
    ...mapGetters([
      'sidebar'
    ]),
    isCollapse () {
      return this.sidebar.status
    }
  },
  mounted() {
    console.log('kkk', this.$route)
  }
}
</script>

<style>
  .layout-main {margin:60px 0 0 200px;transition: all .3s ease-out;background-color: #041834;}
  .layout-main.sidebar-collapse {margin-left:56px;}
  .breadcrumb {border-bottom: 1px solid #020821; height: 50px; line-height: 50px; padding-left: 20px; background-color: #041834}
  .breadcrumb-container {display: flex;}
  .breadcrumb-container > .title {flex:1;}

  #catIframe {
    position: absolute;
    width: 400px;
    padding: 50px 0;
    z-index: 1000;
    right: 0;
  }
</style>

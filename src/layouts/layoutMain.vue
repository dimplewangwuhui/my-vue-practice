<template>
  <div class="layout-main">
    <el-breadcrumb separator="/" class="breadcrumb">
      <el-breadcrumb-item :to="{ path: '/' }">首页</el-breadcrumb-item>
      <el-breadcrumb-item v-for="item in $route.matched" v-if="item.path !== '/' && item.path !== ''" :key="item.path">
        <span v-text="item.name"></span>
      </el-breadcrumb-item>
    </el-breadcrumb>
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  created () {
  },
  computed: {
  }
}
</script>

<style>
  .layout-main {padding:30px; margin:60px 0 0 250px;transition: all .3s ease-out;}
  .layout-main.sidebar-collapse {margin-left:56px;}
  .breadcrumb {margin-bottom: 30px}
  .breadcrumb-container {display: flex;}
  .breadcrumb-container > .title {flex:1;}
</style>

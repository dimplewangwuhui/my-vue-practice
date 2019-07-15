<template>
  <div class="header">
    <div class="logo">
      <span class="logo_text">API后台管理系统</span>
    </div>
    <div class="logout">
      <el-dropdown trigger="hover">
        <el-button type="text" style="padding: 18px 16px"><svg-icon class="icon-user" iconClass="icon-user"></svg-icon><span class="username" v-text="username"></span><i class="el-icon-caret-bottom el-icon--right"></i></el-button>
        <el-dropdown-menu slot="dropdown" class="dropdown-userinfo menu-icon-text">
          <el-dropdown-item @click.native="logout">登出</el-dropdown-item>
        </el-dropdown-menu>
      </el-dropdown>
    </div>
  </div>
</template>

<script>
  import svgIcon from '@/components/svg-icon'
  import { mapGetters } from 'vuex'
  import {MessageBox} from 'element-ui'
  export default {
    components: { svgIcon, MessageBox},
    data () {
      return {
      }
    },
    methods: {
      logout () {
        MessageBox.confirm('确认退出？', '提示').then(_ => {
          this.$store.dispatch('Logout')
        }).catch(_ => {})
      },
      getUserInfo () {
        this.$store.dispatch('GetInfo').catch(_ => {})
      }
    },
    computed: {
      ...mapGetters([
        'user'
      ]),
      username () {
        console.log('----===', this.user);
        return this.user && this.user.adAccount
      },
    },
    mounted () {
      this.getUserInfo()
    }
  }
</script>

<style>
  .header {width: 100%; height: 60px; line-height: 60px;background-color: #fff; border-bottom: 1px solid #DDE2EF; position: fixed; z-index: 999; margin-top: -60px}
  .logo {width: 250px; height: 60px; line-height: 60px; background-color: #FC796B; text-align: center; font-size: 20px; color: #fff; float: left}
  .logout {float: right; margin-right: 50px}
  .logout:hover {background-color: #fff7f6; height: 60px}
  .username {white-space:nowrap;max-width:10em;overflow:hidden;text-overflow:ellipsis;line-height:1.5;}
  .dropdown-userinfo .el-dropdown-menu__item {white-space: nowrap;}
  .el-button--primary {background-color: #FC796B!important;border-color: #FC796B!important;}
  .el-dropdown-menu {margin-top: -10px !important;}
  .el-dropdown-menu > li:hover {padding-left: 3.5rem; position: relative;background-color: #F58A7F !important;color:#fff !important;}
</style>


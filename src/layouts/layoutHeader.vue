<template>
  <div class="header">
    <div class="logo">
      <span class="logo_text"></span>
    </div>
    <div class="logout">
      <el-dropdown trigger="hover">
        <el-button type="text" style="padding: 18px 16px"><svg-icon class="icon-user" iconClass="icon-user"></svg-icon><span class="username" v-text="username"></span><i class="el-icon-caret-bottom el-icon--right"></i></el-button>
        <el-dropdown-menu slot="dropdown" class="dropdown-userinfo menu-icon-text">
          <el-dropdown-item @click.native="logout">登出</el-dropdown-item>
        </el-dropdown-menu>
      </el-dropdown>
    </div>
    <div class="lang">
      <el-tooltip content="中/英文切换" placement="bottom" effect="light">
        <svg class="icon" aria-hidden="true" v-if="lang === 'cn'"><use xlink:href="#icon-fuhao-zhongwen"></use></svg>
        <svg class="icon" aria-hidden="true" v-if="lang === 'en'"><use xlink:href="#icon-fuhao-yingwen"></use></svg>
      </el-tooltip>
    </div>
    <div class="note">
      <el-tooltip content="通知" placement="bottom" effect="light">
        <i class="el-icon-bell" @click="showNote"></i>
        <!--<el-button @click="note">通知</el-button>-->
      </el-tooltip>
      <el-drawer title="管理员通知" :visible.sync="drawer" :direction="direction">
        <div><ul v-for="(item,i) in notes"><li>{{item.msg}}</li></ul></div>
      </el-drawer>
    </div>
    <div class="btn-fullscreen" @click="handleFullScreen">
      <el-tooltip effect="light" :content="fullscreen?'取消全屏':'全屏'" placement="bottom" style=" transform: rotate(45deg);">
        <i class="el-icon-rank"></i>
      </el-tooltip>
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
        drawer: false,
        direction: 'rtl',
        lang: 'cn',
        fullscreen: false,
        notes:[
          {msg:'新增ES6'},
          {msg:'新增JavaScript'}
        ],
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
      },
      showNote() {
        this.drawer = true;
      },
      // 全屏事件
      handleFullScreen(){
        let element = document.documentElement;
        if (this.fullscreen) {
          if (document.exitFullscreen) {
            document.exitFullscreen();
          } else if (document.webkitCancelFullScreen) {
            document.webkitCancelFullScreen();
          } else if (document.mozCancelFullScreen) {
            document.mozCancelFullScreen();
          } else if (document.msExitFullscreen) {
            document.msExitFullscreen();
          }
        } else {
          if (element.requestFullscreen) {
            element.requestFullscreen();
          } else if (element.webkitRequestFullScreen) {
            element.webkitRequestFullScreen();
          } else if (element.mozRequestFullScreen) {
            element.mozRequestFullScreen();
          } else if (element.msRequestFullscreen) {
            // IE11
            element.msRequestFullscreen();
          }
        }
        this.fullscreen = !this.fullscreen;
      },
    },
    computed: {
      ...mapGetters([
        'user'
      ]),
      username () {
        console.log('----===', this.user);
        return this.user && this.user.username
      },
    },
    mounted () {
      this.getUserInfo()
    }
  }
</script>

<style>
  .header {width: 100%; height: 60px; line-height: 60px;background-color: #fff; border-bottom: 1px solid #DDE2EF; position: fixed; z-index: 999; margin-top: -60px}
  .logo {width: 201px; height: 60px; line-height: 60px; background-color: #FC796B; text-align: center; font-size: 20px; color: #fff; float: left}
  .note,.lang {float: right; margin-right: 10px; color: #576077; font-size: 18px; cursor: pointer; padding: 0 20px}
  .logout {float: right; margin-right: 50px}
  .logout:hover {background-color: #f0f0f0; height: 60px}
  .username {white-space:nowrap;max-width:10em;overflow:hidden;text-overflow:ellipsis;line-height:1.5;}
  .dropdown-userinfo .el-dropdown-menu__item {white-space: nowrap;}
  .el-button--primary {background-color: #FC796B!important;border-color: #FC796B!important;}
  .el-dropdown-menu {margin-top: -8px !important;}
  .el-dropdown-menu > li:hover {padding-left: 3.5rem; position: relative;background-color: #F58A7F !important;color:#fff !important;}
  .btn-fullscreen{float: right;-webkit-transform: rotate(0deg); /*transform: rotate(45deg);*/margin-right: 10px; color: #576077; font-size: 20px;cursor: pointer; padding: 0 20px}
</style>


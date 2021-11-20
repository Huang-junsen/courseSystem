<template>
  <div>
    <el-container>
      <el-header>课程管理系统</el-header>
      <el-container>
        <el-aside width="200px">
          <el-menu
              default-active="1"
              class="el-menu-vertical-demo"
              @open="handleOpen"
              @close="handleClose"
              :router="true"
              >
            <el-submenu index="1" >
              <template slot="title">
                <i class="iconfont icon-kechengguanli mr"></i>
                <span slot="title">课程管理</span>
              </template>
              <el-menu-item index="/course">
                <i class="iconfont icon-danlieliebiao mr"></i>
                <span>课程列表</span>
              </el-menu-item>
              <el-menu-item index="/courseEditor" :editorData="{name:'13'}">
                <i class="iconfont icon-tianjiakecheng mr"></i>
                <span>新增课程</span>
              </el-menu-item>
            </el-submenu>
          </el-menu>
        </el-aside>
        <el-main>
          <router-view></router-view>
        </el-main>
      </el-container>
    </el-container>
  </div>
</template>

<script>
export default {
  name: "Admin",
  methods:{
    handleOpen(key, keyPath) {
      console.log(key, keyPath);
    },
    handleClose(key, keyPath) {
      console.log(key, keyPath);
    }
  }
}
</script>

<style scoped lang="scss">
  @import "src/iconfont/iconfont";
  .el-container{
    background: whitesmoke;
    height: 100%;
    width: 100%;
    .el-header{
      background: #fff;
      position: relative;
      line-height: 50px;
    }
    .el-aside{
      background: #263238;
      overflow-x: hidden;
      height: 100%;
        .header-left{
          width: 200px;
          height: 60px;
          font-size: 28px;
          line-height: 60px;
          color: #fff;
          text-align: center;
        }
    }
    .mr{
      margin-right: 10px;
    }
  }
</style>
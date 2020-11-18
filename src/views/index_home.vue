<template>
  <div>

     <el-col :span="12" class="sw">
            <el-menu
              default-active="2"
              class="el-menu-vertical-demo"
              @open="handleOpen"
              @close="handleClose"
              background-color="#545c64"
              text-color="#fff"
              active-text-color="#ffd04b"
            >
            <h3>人力资源管理系统</h3>
                       <img src="../../public/imgaes/1.png" alt class="img" />
                       <div class="div-1">
            <img src="../../public/imgaes/2.png" alt />&nbsp;
            <span>王娜</span>
            <span class="span1">探索协同运营管理之道</span>
          </div>
              <el-menu-item index="1">
                <span slot="title" ><router-link to="wdrs" tag="div">我的桌面</router-link></span>
              </el-menu-item>
              <el-menu-item index="2">
                <span slot="title"><router-link to="wode" tag="div">我的人事</router-link></span>
              </el-menu-item>
              <el-menu-item index="3">
                <span slot="title"><router-link to="yggl" tag="div">员工管理</router-link></span>
              </el-menu-item>
              <el-menu-item index="4">
                <span slot="title"><router-link to="zphpz" tag="div">招聘和配置</router-link></span>
              </el-menu-item>
              <el-menu-item index="5">
                <span slot="title"><router-link to="kqgl" tag="div">考勤管理</router-link></span>
              </el-menu-item>
              <el-menu-item index="6">
                <span slot="title"><router-link to="flhgh" tag="div">福利和关怀</router-link></span>
              </el-menu-item>
              <el-menu-item index="7">
                <span slot="title"><router-link to="jxgl" tag="div">绩效管理</router-link></span>
              </el-menu-item>
              <el-menu-item index="8">
                <span slot="title"> <el-button type="text" @click="open">安全退出</el-button></span>
              </el-menu-item>
              <el-menu-item index="9">
                <span slot="title">组件库</span>
              </el-menu-item>
              <el-menu-item index="10">
                <span slot="title">更多系统原型</span>
              </el-menu-item>
              <el-menu-item index="11">
                <span slot="title">优职坊</span>
              </el-menu-item>
            </el-menu>
          </el-col>
      <el-main>
        <router-view></router-view>
      </el-main>
  </div>
</template>
<script>
export default {
    
}
</script>
<style scoped>
.el-menu-item{
        height: 54px;
        line-height: 54px;
}
.el-main{
    padding: 0px;
}
.sw {
  width: 250px;
  height: 700px;
}

.span1 {
  font-size: 12px;
  display: block;
  margin-top: 5px;
}
.img {
  margin-left: 15px;
}
h3 {
  padding: 15px 40px;
  color: white;
}
.div-1 {
  position: absolute;
  top: 100px;
  left: 80px;
  color: white;
}
</style>
<script>
  export default {
    methods: {
      open() {
        this.$confirm('您确定要退出吗?', '提示', {
          confirmButtonText: '确定',
          cancelButtonText: '取消',
          type: 'warning'
        }).then(() => {
          this.$message({
            type: 'success',
            message: '删除成功!'
          });
        }).catch(() => {
          this.$message({
            type: 'info',
            message: '已取消删除'
          });          
        });
      }
    }
  }
</script>
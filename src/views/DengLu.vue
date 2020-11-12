<template>
  <div class="home">
    <div class="div">
      <h2>人力资源管理系统</h2>
      <el-input placeholder="请输入内容" v-model="input" clearable class="aa"></el-input>
      <el-input placeholder="请输入密码" v-model="input1" show-password class="bb"></el-input>
      <el-button type="primary" class="cc" @click="to">登录</el-button>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      input: "",
      input1: ""
    };
  },
  methods:{
    to(){
      if(this.input==""){
alert("请输入用户名")
      }else if(this.input1==""){
alert("请输入密码")
      }else{
this.$router.push({
  path:'/index_home'
})
      }
    }
  }
};
</script>

<style scoped>
h2 {
  padding-top: 50px; margin-left: 100px;
}
.aa {
  margin-left: 70px;
  margin-top: 20px;
  width: 250px;
}
.bb { margin-left: 70px;
  margin-top: 20px;
  width: 250px;
}
.cc {
  margin-top: 50px; margin-left: 70px;
  width: 250px;
}
.home {
  background: rgb(145, 193, 233);
  width: 100%;
  height: 735px;
  padding-top: 100px;
}
.div {
  height: 400px;
  width: 400px;
  background: white;
  margin: 0 auto;
}
</style>
<template>
  <div class="app">
    <div class="wode">
      <span class="tupian"></span>
      <span class="rishi">我的人事</span>
         <el-form ref="form" :model="form" label-width="80px" class="el">
    <el-select v-model="form.region" placeholder="请选择活动区域">
      <el-option label="区域一" value="shanghai"></el-option>
      <el-option label="区域二" value="beijing"></el-option>
    </el-select>
          </el-form>
           <el-input v-model="form.name"></el-input>
      <span class="shuaxing">
        <span class="el-icon-refresh"></span>刷新
      </span>
      <span class="shuaxing">
        <span class="el-icon-circle-plus-outline"></span>招聘申请
      </span>
    </div>
    <div class="div">

      </div>
  </div>
</template>
<style scoped>
.el{
    display: inline;
}
.app{
 justify-content: space-between;
  white-space: nowrap;
  word-break: break-all;
  
}
.div{
   
    width: 300px;
    height: 850px;
  
    border: 1px solid black;
}
.wode {
  margin-top: 25px;
  margin-bottom: 15px;
}
.tupian {
  padding: 3px 15px;
  background: url("../../public/imgaes/9.png");
  background-repeat: no-repeat;
}
.rishi {
  font-size: 24px;
}
.shuaxing {
  padding: 5px;
  float: right;
  border: 1px solid rgb(201, 201, 201);
  cursor: pointer;
  margin-right: 10px;
}
.shuaxing:hover {
  border: 1px solid rgb(140, 188, 208);
  color: rgb(140, 188, 208);
}
</style>
<script>
export default {
    data() {
      return {
        form: {
          name: '',
          region: '',
          date1: '',
          date2: '',
          delivery: false,
          type: [],
          resource: '',
          desc: ''
        }
      }
    },
    methods: {
      onSubmit() {
        console.log('submit!');
      }
    }
  }
</script>
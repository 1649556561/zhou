<template>
  <div class="app">
    <div class="wode">
      <span class="tupian"></span>
      <span class="rishi">招聘和配置</span>
      <span class="shuaxing">
        <span class="el-icon-refresh"></span>刷新
      </span>
      <span class="shuaxing">
        <span class="el-icon-plus"></span>招聘申请
      </span>
    </div>
    <div class="div1">
      <div class="div1-1">
        <div>
          <span>分类</span>
        </div>
        <ul class="ul">
          <li>
            <img src="../../public/imgaes/13.png" /><router-link to="zphpz" tag="span">招聘管理</router-link>
          </li>
          <li>
            <img src="../../public/imgaes/13.png" /><router-link to="rzgl" tag="span">入职管理</router-link>
          </li>
          <li>
            <img src="../../public/imgaes/13.png" /><router-link to="zzgl" tag="span">转正管理</router-link>
          </li>
          <li>
            <img src="../../public/imgaes/13.png" /><router-link to="gwdd" tag="span">岗位调动管理</router-link>
          </li>
          <li>
            <img src="../../public/imgaes/13.png" /><router-link to="lzgl" tag="span">离职管理</router-link>
          </li>
        </ul>
      </div>
      <div class="div1-2">
        <el-table :data="tableData" border style="width: 100%">
          <el-table-column prop="date" label="主题" width="300" class="a"></el-table-column>
          <el-table-column prop="name" label="入职人" width="120"></el-table-column>
          <el-table-column prop="address" label="入职日期"  width="150"></el-table-column>
          <el-table-column prop="address1" label="入职部门" width="160"></el-table-column>
          <el-table-column prop="address2" label="入职岗位" width="170"></el-table-column>
        </el-table>
        <div class="aaa">
          <span class="el-icon-caret-left"></span>  <span>共有4条记录，第1/1页</span> <span class="el-icon-caret-right"></span> 
        </div>
      </div>
    </div>
  </div>
</template>
<style scoped>
.aaa span:nth-of-type(2){
  padding: 8px 40px 6px 40px;
  font-size: 12px;
  color: #606266;
}
.aaa{
  margin-top: 20px;
}
.aaa span{
  height: 30px;
  width: 40px;
  text-align: center;
  line-height: 30px;
  border: 1px solid #EBEEF5;
}
.app{
   height: 750px;
  width: 1430px;
  justify-content: space-between;
  white-space: nowrap;
  word-break: break-all;
}
.a{
  background: black;
}
.ul li img {
  position: relative;
  top: 5px;
  margin-right: 10px;
}
.ul li:hover {
  color: deepskyblue;
  cursor: pointer;
}
.ul li:nth-of-type(1) {
  margin-top: 70px;
}
.ul li:nth-of-type(2) {
  color: deepskyblue;
}
.ul li {
  list-style: none;
  line-height: 35px;
}
.a {
  margin-top: 10px;
  height: 20px;
}
.div1 div:nth-of-type(1) div {
  background: darkgray;
  padding: 8px 248px 15px 20px;
}
.div1-1 {
  border: 1px solid #EBEEF5;
  height: 700px;
  width: 300px;
}
.div1 div {
  float: left;
}
.div1-2 {
  height: 300px;
  width: 1105px;
  margin-left: 20px;
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
.aaa span:hover {
  color: deepskyblue;
}
</style>
<script>
export default {
  data() {
    return {
      tableData: [
        {
          date: "aaa招聘申请-刘峰-1000165",
          name: "刘峰",
          address: "生产部",
          address1: "初级工程师",
          address2: "5",
        },
        {
          date: "招聘申请-刘峰-1000165",
          name: "刘峰",
          address: "生产部",
          address1: "初级工程师",
          address2: "5",
        },
        {
          date: "招聘申请-刘峰-1000165",
          name: "刘峰",
          address: "生产部",
          address1: "初级工程师",
          address2: "5",
        },
        {
          date: "招聘申请-刘峰-1000165",
          name: "刘峰",
          address: "生产部",
          address1: "初级工程师",
          address2: "5",
        },
        
      ]
    };
  }
};
</script>
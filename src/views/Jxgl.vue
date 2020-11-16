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
            <img src="../../public/imgaes/13.png" />月度绩效考核
          </li>
          <li>
            <img src="../../public/imgaes/13.png" />季度绩效考核
          </li>
          <li>
            <img src="../../public/imgaes/13.png" />年度绩效考核
          </li>
          <li>
            <img src="../../public/imgaes/13.png" />奖励和处罚
          </li>
        </ul>
      </div>
      <div class="div1-2">
        <el-table :data="tableData" border style="width: 100%">
          <el-table-column prop="date" label="主题" width="300" class="a"></el-table-column>
          <el-table-column prop="name" label="所属部门" width="120"></el-table-column>
          <el-table-column prop="address" label="被考核人"  width="150"></el-table-column>
          <el-table-column prop="address1" label="自评分" width="160"></el-table-column>
          <el-table-column prop="address2" label="主管评分" width="170"></el-table-column>
          <el-table-column prop="address3" label="考核结果" width="200"></el-table-column>
        </el-table>
        <div class="aaa">
          <span class="el-icon-caret-left"></span>  <span>共有3条记录，第1/1页</span> <span class="el-icon-caret-right"></span> 
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
   height: 700px;
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
  height: 650px;
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
          date: "2018年4月绩效考核单-张旭",
          name: "销售部",
          address: "张旭",
          address1: "92",
          address2: "0",
          address3: ""
        },
        {
          date: "2018年4月绩效考核单-沈华",
          name: "销售部",
          address: "沈华",
          address1: "84",
          address2: "0",
          address3: ""
        },
        {
        date: "2018年4月绩效考核单-李萌",
          name: "销售部",
          address: "李萌",
          address1: "90",
          address2: "88",
          address3: "B"
        },
      
        
      ]
    };
  }
};
</script>
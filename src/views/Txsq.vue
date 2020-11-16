<template>
  <div class="app">
    <div class="wode">
      <span class="tupian"></span>
      <span class="rishi">招聘和配置</span>
      <el-select class="select" v-model="value" placeholder="请选择">
        <el-option
          v-for="item in options"
          :key="item.value"
          :label="item.label"
          :value="item.value"
        ></el-option>
      </el-select>
      <el-input class="input" v-model="input" placeholder="请输入内容"></el-input>
      <span class="el-icon-search span">查找</span>
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
            <img src="../../public/imgaes/13.png" /><router-link to="zphpz" tag="span">出差申请</router-link>
          </li>
          <li>
            <img src="../../public/imgaes/13.png" /><router-link to="wcsq" tag="span">外出申请</router-link>
          </li>
          <li>
            <img src="../../public/imgaes/13.png" /><router-link to="jbsq" tag="span">加班申请</router-link>
          </li>
          <li>
            <img src="../../public/imgaes/13.png" /><router-link to="qxjsq" tag="span">请休假申请</router-link>
          </li>
          <li>
            <img src="../../public/imgaes/13.png" /><router-link to="txsq" tag="span">调休申请</router-link>
          </li>
                 <li>
            <img src="../../public/imgaes/13.png" /><router-link to="wqdw" tag="span">外勤定位</router-link>
          </li>
        </ul>
      </div>
      <div class="div1-2">
        <el-table :data="tableData" border style="width: 100%">
          <el-table-column prop="date" label="主题" width="300" class="a"></el-table-column>
          <el-table-column prop="name" label="申请人" width="120"></el-table-column>
          <el-table-column prop="address" label="所属部门" width="150"></el-table-column>
          <el-table-column prop="address1" label="时间段" width="160"></el-table-column>
          <el-table-column prop="address2" label="共计时长" width="170"></el-table-column>
        </el-table>
        <div class="aaa">
          <span class="el-icon-caret-left"></span>
          <span>共有15条记录，第1/1页</span>
          <span class="el-icon-caret-right"></span>
        </div>
      </div>
    </div>
  </div>
</template>
<style scoped>

.select {
  border-radius: 4px;
  margin-left: 170px;
}
.span{
   border: 1px solid rgb(201, 201, 201);
  padding: 10px;
  margin-left: 10px;
  border-radius: 2px;
}
.input {
  border-radius: 4px;
  margin-left: 10px;
  width: 400px;
}
.aaa span:nth-of-type(2) {
  padding: 8px 40px 6px 40px;
  font-size: 12px;
  color: #606266;
}
.aaa {
  margin-top: 20px;
}
.aaa span {
  height: 30px;
  width: 40px;
  text-align: center;
  line-height: 30px;
  border: 1px solid #ebeef5;
}
.app {
  height: 650px;
  width: 1430px;
  justify-content: space-between;
  white-space: nowrap;
  word-break: break-all;
}
.a {
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
.ul li:nth-of-type(5) {
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
  border: 1px solid #ebeef5;
  height: 650px;
  width: 300px;
}
.div1 div {
  float: left;
}
.div1-2 {
  height: 300px;
  width: 1005px;
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
          date: "5出差申请-李浩-1000942",
          name: "李浩",
          address: "技术部",
          address1: "苏州",
          address2: "2016/5/5 ~ 2016/5/6",
        },
        {
         date: "出差申请-李浩-1000942",
          name: "李浩",
          address: "技术部",
          address1: "苏州",
          address2: "2016/5/5 ~ 2016/5/6",
        },
        {
         date: "出差申请-李浩-1000942",
          name: "李浩",
          address: "技术部",
          address1: "苏州",
          address2: "2016/5/5 ~ 2016/5/6",
        },
        {
          date: "出差申请-李浩-1000942",
          name: "李浩",
          address: "技术部",
          address1: "苏州",
          address2: "2016/5/5 ~ 2016/5/6",
        },
        {
         date: "出差申请-李浩-1000942",
          name: "李浩",
          address: "技术部",
          address1: "苏州",
          address2: "2016/5/5 ~ 2016/5/6",
        },
        {
         date: "出差申请-李浩-1000942",
          name: "李浩",
          address: "技术部",
          address1: "苏州",
          address2: "2016/5/5 ~ 2016/5/6",
        },
        {
          date: "出差申请-李浩-1000942",
          name: "李浩",
          address: "技术部",
          address1: "苏州",
          address2: "2016/5/5 ~ 2016/5/6",
        },
        {
         date: "出差申请-李浩-1000942",
          name: "李浩",
          address: "技术部",
          address1: "苏州",
          address2: "2016/5/5 ~ 2016/5/6",
        },
        {
         date: "出差申请-李浩-1000942",
          name: "李浩",
          address: "技术部",
          address1: "苏州",
          address2: "2016/5/5 ~ 2016/5/6",
        },
        {
          date: "出差申请-李浩-1000942",
          name: "李浩",
          address: "技术部",
          address1: "苏州",
          address2: "2016/5/5 ~ 2016/5/6",
        },
        {
         date: "出差申请-李浩-1000942",
          name: "李浩",
          address: "技术部",
          address1: "苏州",
          address2: "2016/5/5 ~ 2016/5/6",
        },
        {
          date: "出差申请-李浩-1000942",
          name: "李浩",
          address: "技术部",
          address1: "苏州",
          address2: "2016/5/5 ~ 2016/5/6",
        }
      ]
    };
  }
};
</script>
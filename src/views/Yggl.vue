<template>
  <div id="app">
    <div class="book">
      <span class="beijin"></span>
      <span class="yuan">员工管理</span>
      <el-select class="select" v-model="value" placeholder="请选择">
        <el-option
          v-for="item in options"
          :key="item.value"
          :label="item.label"
          :value="item.value"
        ></el-option>
      </el-select>
      <el-input class="input" v-model="input" placeholder="请输入内容"></el-input>
      <span class="el-icon-search">查找</span>
      <span @click="xinzen()">
        <span class="el-icon-plus"><router-link to="yuanzen" tag="span">新增员工</router-link></span>
      </span>
      <span @click="shuaxin()">
        <span class="el-icon-refresh">刷新</span>
      </span>
    </div>
    <div class="uer">
      <div class="zuo">
        <p class="strong">
          <strong>分类</strong>
        </p>
        <div class="zuo-yi">
          <p>
            <span>
              <img src="../../public/imgaes/15.png" />
            </span>
            <span @click="tab=0" :class="{one:tab==0}">显示所有</span>
          </p>
          <p @click="tab=1" :class="{one:tab==1}">
            <span>
              <img src="../../public/imgaes/15.png" />
            </span>集团
          </p>
          <p class="p" @click="tab=2" :class="{one:tab==2}">总经办</p>
          <p class="p" @click="tab=3" :class="{one:tab==3}">人事部</p>
          <p class="p" @click="tab=4" :class="{one:tab==4}">财务部</p>
          <p @click="tab=5" :class="{one:tab==5}">
            <span class="el-icon-plus"></span>科技公司
          </p>
          <p @click="tab=6" :class="{one:tab==6}">
            <span class="el-icon-plus"></span>工程公司
          </p>
          <p @click="tab=7" :class="{one:tab==7}">
            <span class="el-icon-plus"></span>现代事务所
          </p>
          <p class="p" @click="tab=8" :class="{one:tab==8}">北京机构</p>
          <p class="p" @click="tab=9" :class="{one:tab==9}">杭州机构</p>
          <p class="p" @click="tab=10" :class="{one:tab==10}">上海机构</p>
          <p class="p" @click="tab=11" :class="{one:tab==11}">深圳机构</p>
        </div>
        <div class="zuo-er">
          <p class="p1">
            （以上分类中包含了在职的、试用期和临
            <br />时的员工）
          </p>
        </div>
        <div class="zou-san">
          <p>
            <span class="el-icon-s-cooperation"></span>在职的员工
          </p>
          <p>
            <span class="el-icon-s-cooperation"></span>试用期员工
          </p>
          <p>
            <span class="el-icon-s-cooperation"></span>临时的员工
          </p>
          <p>
            <span class="el-icon-s-cooperation"></span>退休的员工
          </p>
          <p>
            <span class="el-icon-s-cooperation"></span>离职的员工
          </p>
        </div>
      </div>
      <div class="aa">
        <el-table :data="tableData" style="width: 100%">
          <el-table-column prop="date" label="姓名" width="180"></el-table-column>
          <el-table-column prop="name" label="性别" width="180"></el-table-column>
          <el-table-column prop="address" label="工号" width="120"></el-table-column>
          <el-table-column prop="address1" label="从属于" width="120"></el-table-column>
          <el-table-column prop="address2" label="职务" width="120"></el-table-column>
          <el-table-column prop="address3" label="入职日期" width="180"></el-table-column>
          <el-table-column prop="address4" label="操作" width="180"><router-link to="yuangai" tag="span"> <el-button type="primary" icon="el-icon-edit" circle></el-button> </router-link><el-button type="danger" icon="el-icon-delete" circle></el-button></el-table-column>
        </el-table>

      </div>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      tab: 0
    };
  }
};
</script>
<style scoped>
.aa {
  width: 1080px;
  height: 770px;
  float: left;
  border: 1px solid rgb(226, 226, 226);
  margin-left: 15px;
}
#app {
  height: 730px;
  width: 1430px;
  overflow-y: scroll;
  justify-content: space-between;
  white-space: nowrap;
  word-break: break-all;
}
.book {
  margin-top: 30px;
}
.book span:nth-of-type(3) {
  border: 1px solid rgb(201, 201, 201);
  padding: 10px;
  margin-left: 10px;
  border-radius: 2px;
}
.book span:nth-of-type(4) {
  border: 1px solid rgb(201, 201, 201);
  padding: 10px;
  margin-left: 180px;
  border-radius: 2px;
  cursor: pointer;
}
.book span:nth-of-type(5) {
  border: 1px solid rgb(201, 201, 201);
  padding: 10px;
  margin-left: 10px;
  border-radius: 2px;
  cursor: pointer;
}
.book span:nth-of-type(4):hover {
  border: 1px solid rgb(30, 159, 255);
  color: rgb(30, 159, 255);
}
.book span:nth-of-type(5):hover {
  border: 1px solid rgb(30, 159, 255);
  color: rgb(30, 159, 255);
}
.beijin {
  padding: 3px 15px;
  background: url("../../public/imgaes/9.png");
  background-repeat: no-repeat;
}
.yuan {
  font-size: 24px;
}
.select {
  border-radius: 4px;
  margin-left: 150px;
}
.input {
  border-radius: 4px;
  margin-left: 10px;
  width: 400px;
}
.uer {
  position: relative;
  margin-top: 20px;
  font-size: 14px;
}
.zuo {
  float: left;
  width: 260px;
  border: 1px solid rgb(226, 226, 226);
  border-radius: 4px;
}
.strong {
  padding: 9px 10px;
  border-bottom: 1px solid rgb(226, 226, 226);
}
.zuo-yi p {
  margin-top: 12px;
}
.zuo-yi p:hover {
  color: rgb(30, 159, 255);
  cursor: pointer;
}
.p {
  margin-left: 52px;
}
.zuo-yi p:nth-of-type(1) {
  margin-left: 20px;
  line-height: 30px;
}
.zuo-yi p:nth-of-type(1) span:nth-of-type(1) {
  float: left;
  margin-right: 5px;
}
.zuo-yi p:nth-of-type(2) {
  margin-left: 20px;
  line-height: 30px;
}
.zuo-yi p:nth-of-type(2) span {
  float: left;
  margin-right: 5px;
}
.zuo-yi p:nth-of-type(6) {
  margin-left: 30px;
  line-height: 30px;
}
.zuo-yi p:nth-of-type(6) span {
  margin-right: 5px;
  border: 1px solid rgb(226, 226, 226);
}
.zuo-yi p:nth-of-type(7) {
  margin-left: 30px;
  line-height: 30px;
}
.zuo-yi p:nth-of-type(7) span {
  margin-right: 5px;
  border: 1px solid rgb(226, 226, 226);
}
.zuo-yi p:nth-of-type(8) {
  margin-left: 30px;
  line-height: 30px;
}
.zuo-yi p:nth-of-type(8) span {
  margin-right: 5px;
  border: 1px solid rgb(226, 226, 226);
}
.zuo-er {
  margin-top: 10px;
  font-size: 12px;
  padding: 10px 20px;
  border-top: 1px solid rgb(226, 226, 226);
  border-bottom: 1px solid rgb(226, 226, 226);
  color: rgb(153, 153, 153);
}
.zou-san {
  margin-left: 30px;
}
.zou-san p {
  margin-top: 10px;
}
.zou-san p:hover {
  color: rgb(30, 159, 255);
  cursor: pointer;
}
.zou-san p span {
  margin-right: 10px;
}
.el-table td{
      border-right: 1px solid #EBEEF5;
}
</style>
<script>
export default {
  data() {
    return {
      tableData: [
        {
          date: "李莉",
          name: "男",
          address: "Ahz-001",
          address1: "杭州机构",
          address2: "分公司经理",
          address3: "2009/3/13",
        },
        {
         date: "李莉",
          name: "男",
          address: "Ahz-001",
          address1: "杭州机构",
          address2: "分公司经理",
          address3: "2009/3/13",
        },
        {
        date: "李莉",
          name: "男",
          address: "Ahz-001",
          address1: "杭州机构",
          address2: "分公司经理",
          address3: "2009/3/13",
        },
        {
          date: "李莉",
          name: "男",
          address: "Ahz-001",
          address1: "杭州机构",
          address2: "分公司经理",
          address3: "2009/3/13",
        },
        {
          date: "李莉",
          name: "男",
          address: "Ahz-001",
          address1: "杭州机构",
          address2: "分公司经理",
          address3: "2009/3/13",
        },
        {
         date: "李莉",
          name: "男",
          address: "Ahz-001",
          address1: "杭州机构",
          address2: "分公司经理",
          address3: "2009/3/13",
        },
        {
          date: "李莉",
          name: "男",
          address: "Ahz-001",
          address1: "杭州机构",
          address2: "分公司经理",
          address3: "2009/3/13",
        }
        ,
        {
          date: "李莉",
          name: "男",
          address: "Ahz-001",
          address1: "杭州机构",
          address2: "分公司经理",
          address3: "2009/3/13",
        }
        ,
        {
          date: "李莉",
          name: "男",
          address: "Ahz-001",
          address1: "杭州机构",
          address2: "分公司经理",
          address3: "2009/3/13",
        },
        {
          date: "李莉",
          name: "男",
          address: "Ahz-001",
          address1: "杭州机构",
          address2: "分公司经理",
          address3: "2009/3/13",
        },
        {
         date: "李莉",
          name: "男",
          address: "Ahz-001",
          address1: "杭州机构",
          address2: "分公司经理",
          address3: "2009/3/13",
        },
        
      ]
    };
  },
  //  data() {
  //     return {
  //       options: [{
  //         value: '选项1',
  //         label: '黄金糕'
  //       }, {
  //         value: '选项2',
  //         label: '双皮奶'
  //       }, {
  //         value: '选项3',
  //         label: '蚵仔煎'
  //       }, {
  //         value: '选项4',
  //         label: '龙须面'
  //       }, {
  //         value: '选项5',
  //         label: '北京烤鸭'
  //       }],
  //       value: ''
  //     }
  //   }
};
</script>

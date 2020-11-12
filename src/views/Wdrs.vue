<template>
  <div class="app">
    <img src="../../public/imgaes/9.png" class="img" />
    <span class="aaa">我的桌面</span>
  
      <div class="cheshi">
        <div>
          <span class="span">员工在职状态分布</span>
        <img src="../../public/imgaes/10.png"/>
        
    </div>
      <div>
        <span class="span">员工学历分布</span>
        <img src="../../public/imgaes/10.png" />
      </div>
      <div>
        <span class="span">员工年龄分布</span>
        <img src="../../public/imgaes/10.png" />
      </div>
        
      <div>
        <span class="span">
          <span>规章制度</span>
          <span class="span1">17</span>
        </span>
        <ul class="ul">
          <li class="abb">
            资产管理制度（2016.3修订版）
            <span>5/7</span>
          </li>
          <li class="abb">
            公司公务用车管理办法
            <span>5/7</span>
          </li>
          <li>
            公司财务管理制度
            <span>5/7</span>
          </li>
          <li>
            2016年公司最新管理制度
            <span>5/7</span>
          </li>
          <li>
            办公室行政管理制度
            <span>5/7</span>
          </li>
          <li>
            公司人才招聘制度
            <span>5/7</span>
          </li>
          <li>
            公司绩效考核制度
            <span>5/7</span>
          </li>
          <li>
            公司福利与关怀制度
            <span>5/7</span>
          </li>
          <li>
            员工考勤管理制度
            <span>5/7</span>
          </li>
          <li>
            新员工入职与转正制度
            <span>5/7</span>
          </li>
        </ul>
      </div>
      <br>
      <div>
        <span class="span">
          <span>信息公告</span>
          <span class="span1">20</span>
        </span>
        <ul class="ul">
          <li>
            Colloa签约倍科电器，助力世界500强
            <span>5/7</span>
          </li>
          <li>
            BPM替换案例：二进制携手中兴恒业
            <span>5/7</span>
          </li>
          <li>
            如何选择企业自身的BPM需求？
            <span>5/7</span>
          </li>
          <li>
            BPM运营平台助企业打造全面运营管理
            <span>5/7</span>
          </li>
          <li>
            Colloa系统陪伴《省老年体协》5个年头
            <span>5/7</span>
          </li>
          <li>
            资产管理制度（2016.3修订版）
            <span>5/7</span>
          </li>
          <li>
            公司公务用车管理办法
            <span>5/7</span>
          </li>
          <li>
            公司人事部人事管理制度
            <span>5/7</span>
          </li>
          <li>
            公司财务管理制度
            <span>5/7</span>
          </li>
          <li>
            关于召开BPM启用准备会议的通知
            <span>5/7</span>
          </li>
        </ul>
      </div>
      <div>
        <span class="span">
          <span>我关注的知识</span>
          <span class="span2">16</span>
        </span>
        <ul class="ul">
          <li>
            BPM系统管理员岗位职责都有哪些？
            <span>5/7</span>
          </li>
          <li>
            怎样的BPM系统容易被企业CIO接受
            <span>5/7</span>
          </li>
          <li>
            小企业如何低成本地采购BPM系统？
            <span>5/7</span>
          </li>
          <li>
            Colloa支持内外网同时登陆同一套数据？
            <span>5/7</span>
          </li>
          <li>
            推动十二五发展建设新闻稿
            <span>5/7</span>
          </li>
          <li>
            公司十周年庆典活动介绍
            <span>5/7</span>
          </li>
          <li>
            周六爬山公益活动
            <span>5/7</span>
          </li>
          <li>
            如何有步骤地开发区域市场
            <span>5/7</span>
          </li>
          <li>
            现代销售即网络营销
            <span>5/7</span>
          </li>
          <li>
            java和C++性能比较
            <span>5/7</span>
          </li>
        </ul>
      </div>
      <div class="as">
        <span class="span">友情链接</span>
        <ul class="ul">
          <li>优职坊官网</li>
          <li>CRM客户关系管理系统高保真原型</li>
          <li>SCM进销存管理系统高保真原型</li>
          <li>OA协同之行政管理系统高保真原型</li>
        </ul>
      </div>
    </div>
 </div>
</template>
<style scoped>
.cheshi{
  height: 700px;
  width: 1500px;
  overflow-x: scroll;
    overflow-y: scroll;
  justify-content: space-between;
  white-space: nowrap;
  word-break: break-all;
}
.app{
  width: 100%;
}
.app{
  width: 100%;
}

.aaa{
  font-size: 24px;
  margin-left: 10px;
  position: relative;top: -15px;left: -3px;
}
.ul li span {
  position: absolute;
  right: 15px;
  color: darkgrey;
}
.ul li {
  position: relative;
  list-style: none;
  line-height: 30px;
  color: deepskyblue;
}
.abb{
  color: crimson!important;
}
.cheshi div img {
  width: 90%;
}
.span1 {
  color: white;
  background: deepskyblue;
  padding: 0px 10px;
  border-radius: 30%;
  position: relative;
  left: 290px;
}
.span2 {
  background: deepskyblue;
  padding: 0px 10px;
  border-radius: 30%;
  position: relative;
  left: 260px;
}

.span {
  display: block;
  font-weight: bolder;
  padding: 10px 230px 0px 42px;
  height: 30px;
  background: darkgray;
}
.cheshi div:nth-of-type(2),
.cheshi div:nth-of-type(3),
.cheshi div:nth-of-type(5),
.cheshi div:nth-of-type(6) {
  margin-left: 50px;
}
.cheshi div:nth-of-type(4),
.cheshi div:nth-of-type(5),
.cheshi div:nth-of-type(6),
.cheshi div:nth-of-type(7) {
  margin-top: 30px;
}

.cheshi div {
  width: 450px;
  height: 360px;
  border: 1px solid black;
  float: left;
}
.cheshi div:nth-of-type(7) {
  height: 180px;
}

.img {
  width: 1.9%;
  margin-top: 30px;
  margin-bottom: 5px;
} 
</style>
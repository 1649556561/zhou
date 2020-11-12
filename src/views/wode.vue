<template>
    <div id="app">
        <el-header>
            <div class="wode">
                <span class="tupian"></span><span class="rishi">我的人事</span>
                <span class="shuaxing"><span class="el-icon-refresh"></span>刷新</span>
            </div>
            <div class="jiben">基本信息</div>
        </el-header>
        <el-main class="el">
            <div class="leiron">
                <div class="leiron-yi">
                    <p v-for="item in uer" v-text="item"></p>
                </div>
                <div class="leiron-er">
                    <p v-for="item in uerer" v-text="item"></p>
                </div>
                <div class="leiron-shan">
                    <p v-for="item in uershan" v-text="item"></p>
                </div>
                <div class="leiron-si">
                    <p v-for="item in uersi" v-text="item"></p>
                </div>
            </div>
            <div class="jiben">统计信息</div>
            <div class="mubiao">
                <p>目标管理</p>
                <div class="dabo">
                    <div class="mubiao-wo">
                        我的工作计划<span class="lanse">36</span>
                    </div>
                    <div class="mubiao-wo">
                        我的工作任务<span class="lanse">36</span>
                    </div>
                    <div class="mubiao-wo">
                        我的工作报告<span class="lanse">36</span>
                    </div>
                    <div class="mubiao-wo">
                        我的工作日程<span class="lanse">36</span>
                    </div>
                </div>
            </div>
            <div class="mubiao">
                <p>信息中心</p>
                <div class="dabo">
                    <div class="mubiao-wo">
                        我发布的公告<span class="lanse">36</span>
                    </div>
                    <div class="mubiao-wo">
                        我发布的文档<span class="lanse">36</span>
                    </div>
                    <div class="mubiao-wo">
                        我发布的帖子<span class="lanse">36</span>
                    </div>
                    <div class="mubiao-wo">
                        帖子回复数<span class="lanse">36</span>
                    </div>
                </div>
            </div>
            <div class="mubiao">
                <p>行政管理</p>
                <div class="dabo">
                    <div class="mubiao-wo">
                        会议室预定<span class="lanse">36</span>
                    </div>
                    <div class="mubiao-wo">
                        用车申请<span class="lanse">36</span>
                    </div>
                    <div class="mubiao-wo">
                        车辆保险登记<span class="lanse">36</span>
                    </div>
                    <div class="mubiao-wo">
                        车辆维修保养登记<span class="huise">0</span>
                    </div>
                    <div class="mubiao-wo">
                        车辆年检登记<span class="lanse">36</span>
                    </div>
                    <div class="mubiao-wo">
                        车辆加油登记<span class="lanse">36</span>
                    </div>
                    <div class="mubiao-wo">
                        车辆事故登记<span class="lanse">36</span>
                    </div>
                </div>
                <div class="dabo">
                    <div class="mubiao-wo">
                        资产领用申请<span class="lanse">36</span>
                    </div>
                    <div class="mubiao-wo">
                        资产归还申请<span class="lanse">36</span>
                    </div>
                    <div class="mubiao-wo">
                        资产采购申请<span class="lanse">36</span>
                    </div>
                    <div class="mubiao-wo">
                        用品领用申请<span class="lanse">36</span>
                    </div>
                    <div class="mubiao-wo">
                        用品采购申请<span class="lanse">36</span>
                    </div>
                    <div class="mubiao-wo">
                        证照借用申请<span class="lanse">36</span>
                    </div>
                    <div class="mubiao-wo">
                        用章申请<span class="lanse">36</span>
                    </div>
                </div>
                <div class="dabo">
                    <div class="mubiao-wo">
                        通用行政流程<span class="huise">0</span>
                    </div>
                    <div class="mubiao-wo">
                        名片印制申请<span class="lanse">36</span>
                    </div>
                    <div class="mubiao-wo">
                        行政接待申请<span class="huise">0</span>
                    </div>
                    <div class="mubiao-wo">
                        行政维修申请<span class="lanse">36</span>
                    </div>
                </div>
            </div>
            <div class="mubiao">
                <p>人力资源</p>
                <div class="dabo">
                    <div class="mubiao-wo">
                        招聘申请<span class="lanse">36</span>
                    </div>
                    <div class="mubiao-wo">
                        入职申请<span class="huise">0</span>
                    </div>
                    <div class="mubiao-wo">
                        转正申请<span class="huise">0</span>
                    </div>
                    <div class="mubiao-wo">
                        岗位调动申请<span class="lanse">36</span>
                    </div>
                    <div class="mubiao-wo">
                        离职申请<span class="lanse">36</span>
                    </div>
                    <div class="mubiao-wo">
                        出差申请<span class="lanse">36</span>
                    </div>
                    <div class="mubiao-wo">
                        外出申请<span class="lanse">36</span>
                    </div>
                </div>
                <div class="dabo">
                    <div class="mubiao-wo">
                        加班申请<span class="lanse">36</span>
                    </div>
                    <div class="mubiao-wo">
                        请休假申请<span class="lanse">36</span>
                    </div>
                    <div class="mubiao-wo">
                        调休申请<span class="lanse">36</span>
                    </div>
                    <div class="mubiao-wo">
                        劳动合同登记<span class="huise">0</span>
                    </div>
                    <div class="mubiao-wo">
                        员工培训安排<span class="lanse">36</span>
                    </div>
                    <div class="mubiao-wo">
                        员工生日关怀<span class="huise">0</span>
                    </div>
                    <div class="mubiao-wo">
                        员工专项福利<span class="lanse">36</span>
                    </div>
                </div>
                <div class="dabo">
                    <div class="mubiao-wo">
                        月度绩效考核单<span class="huise">0</span>
                    </div>
                    <div class="mubiao-wo">
                        季度绩效考核单<span class="huise">0</span>
                    </div>
                    <div class="mubiao-wo">
                        年度绩效考核单<span class="huise">0</span>
                    </div>
                    <div class="mubiao-wo">
                        奖励和处罚申请<span class="huise">0</span>
                    </div>
                </div>
            </div>
            <div class="mubiao">
                <p>财务中心</p>
                <div class="dabo">
                    <div class="mubiao-wo">
                        差旅费报销<span class="lanse">36</span>
                    </div>
                    <div class="mubiao-wo">
                        费用报销<span class="lanse">36</span>
                    </div>
                    <div class="mubiao-wo">
                        支出申请<span class="huise">0</span>
                    </div>
                    <div class="mubiao-wo">
                        付款申请<span class="lanse">36</span>
                    </div>
                    <div class="mubiao-wo">
                        开票申请<span class="lanse">36</span>
                    </div>
                    <div class="mubiao-wo">
                        来票登记<span class="huise">0</span>
                    </div>
                    <div class="mubiao-wo">
                        预借款申请<span class="lanse">36</span>
                    </div>
                </div>
                <div class="dabo">
                    <div class="mubiao-wo">
                        资金调拨申请<span class="huise">0</span>
                    </div>
                </div>
            </div>
        </el-main>
    </div>
</template>
<script>
export default {
    data(){
        return{
            uer:["从属于","姓名","性别","固定电话","电子邮件","职务","出生日期","转正日期","职责说明","附加描述"
            ,"简历和证书","籍贯","政治面貌","身份证号","联系地址","毕业院校","专业方向","爱好特长","状态"],
            uerer:["销售部","李娜","女","025-84858968","limeng123@139.com","销售经理","1990/9/12","2015/8/7","代替1"
            ,"销售部经理","代替2","信阳","党员","123429199009120432","北京市通州区凤凰熙岸04栋3204","郑州大学","信息工程专业","旅游"
            ,"有效（能够登录本系统，登录时的用户名默认为姓名）"],
            uershan:["在职状态","工号","上级主管","移动电话","即时通信","职务级别","入职日期","离职日期","代替1"
            ,"代替2","代替3","民族","婚姻状况","户口所在地","替代4","最高学历","学历证明人","替代5","指定用户名"],
            uersi:["在职","Azb-050","代替1","13900221452","代替2","0","2015/5/7","代替3","代替4"
            ,"代替5","代替6","代替7","未婚","北京","替代8","本科","刘博","替代9","替代10"]
        }
    }
}
</script>
<style scoped>
.el{
  height: 620px;
  width: 1330px;
  overflow-x: scroll;
    overflow-y: scroll;
  justify-content: space-between;
  white-space: nowrap;
  word-break: break-all;
      margin-top: 30px;
}
        .leiron-si p:nth-of-type(3){
            opacity: 0;
        }
        .leiron-si p:nth-of-type(5){
            opacity: 0;
        }
        .leiron-si p:nth-of-type(8){
            opacity: 0;
        }
        .leiron-si p:nth-of-type(9){
            opacity: 0;
        }
        .leiron-si p:nth-of-type(10){
            opacity: 0;
        }
        .leiron-si p:nth-of-type(11){
            opacity: 0;
        }
        .leiron-si p:nth-of-type(12){
            opacity: 0;
        }
        .leiron-si p:nth-of-type(15){
            opacity: 0;
        }
        .leiron-si p:nth-of-type(18){
            opacity: 0;
        }
        .leiron-si p:nth-of-type(19){
            opacity: 0;
        }
        .leiron-shan p:nth-of-type(9){
            opacity: 0;
        }
        .leiron-shan p:nth-of-type(10){
            opacity: 0;
        }
        .leiron-shan p:nth-of-type(11){
            opacity: 0;
        }
        .leiron-shan p:nth-of-type(15){
            opacity: 0;
        }
        .leiron-shan p:nth-of-type(18){
            opacity: 0;
        }
        .leiron-er p:nth-of-type(9){
            opacity: 0;
        }
        .leiron-er p:nth-of-type(11){
            opacity: 0;
        }
            .rishi{
        font-size: 24px;
    }
    .shuaxing{
        padding: 5px;
        float: right;
        border: 1px solid rgb(201,201,201);
        cursor: pointer;
        margin-right: 10px;
    }
    .shuaxing:hover{
        border: 1px solid rgb(140,188,208);
        color: rgb(140,188,208);
    }
    .wode{
        margin-top: 25px;
        margin-bottom: 15px;
    }
    .jiben{
        font: size 14px; 
        background-color: rgb(255,255,224);
        padding: 10px;
        margin-left:2px; 
        border-top: 1px solid rgb(221,221,221);
        border-bottom: 1px solid rgb(221,221,221);
    }
    .tupian{
        padding: 3px 15px;
        background: url("../../public/imgaes/9.png");
        background-repeat: no-repeat;
    }
    .el-header {
    padding: 0 0px;
    box-sizing: border-box;
    flex-shrink: 0;
    }
    .el-main {
    padding: 0 0px;
    box-sizing: border-box;
    flex-shrink: 0;
    }
    .leiron{
        font-size:  14px; 
        margin-top: 10px;
        position: relative;
        height: 600px
    }
    .leiron div p{
        margin: 10px 0;
    }
    .leiron-yi{
        width: 180px;
        text-align: right;
        position: absolute;
        left: 0px;
    }
    .leiron-er{
        width: 400px;
        text-align: left;
        position: absolute;
        left: 200px;
    }
    .leiron-shan{
        width: 180px;
        text-align: right;
        position: absolute;
        right: 400px;
    }
    .leiron-si{
        width: 180px;
        text-align: left;
        position: absolute;
        right: 200px;
    }
    .mubiao{
        margin-top:10px;
        margin-left:2px; 
        font-size: 14px;
        border: 1px solid rgb(221,221,221);
    }
    .mubiao p{
        border-bottom: 1px solid rgb(221,221,221);
        font-weight: bold;
        margin: 10px;
        padding-bottom: 10px;
    }
    .mubiao-wo{
        font-size: 14px;
        padding: 20px 10px;
        width: 170px;
    }
    .lanse{
        font-size: 12px;
        background-color:rgb(30,159,255);
        color: #fff;
        padding: 2px 12px;
        margin-left: 10px;
        border-radius: 30px; 
    }
    .huise{
        background-color:rgb(201,201,201);
        font-size: 12px;
        color: #fff;
        padding: 2px 12px;
        margin-left: 10px;
        border-radius: 30px;
    }
    .dabo{
        display: flex;
        flex-direction: wrap;
    }
</style>
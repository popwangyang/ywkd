<template>
  <span>
     <div class='footBgc' v-if="state == 'logoBox'">
      <div class='centerWidth' style="border: none;">
        <div class='footTop'>
          <section class="floatL">
            <h2>联系我们</h2>
            <div class="footer-icon-container">
              <p>Contact us</p>
              <div class="footer-line"></div>
            </div>
            <ul>
              <li>
                <b><i></i>公司地址:</b>
                <span>浙江省杭州市西湖区文二西路808号西溪壹号创意商务中心2号楼2F</span>
              </li>
              <li>
                <b><i class="icon1"></i>公司电话:</b>
                <span>0571-8110 8912</span>
              </li>
              <li>
                <b><i class="icon2"></i>公司邮箱:</b>
                <span>YWKEDAO@HLCHANG.CN</span>
              </li>
            </ul>
          </section>
          <section class="floatL">
            <h2>招贤纳士</h2>
            <div class="footer-icon-container">
              <p>recruit</p>
              <div class="footer-line"></div>
            </div>
            <ul>
              <li>
                <b><i></i>HR邮箱:</b>
                <span>zhejiangth@cneucc.com</span>
              </li>
            </ul>
          </section>
          <section class='floatR foot-box'>
            <img src="../assets/images/ywkd_footer.png" alt="娱网科道">
          </section>
          <div class='clear'></div>
        </div>
      </div>
      <div class="centerWidth" style="border: none;">
        <img src="../assets/images/ywkd_footer_logo.png" alt="" style="width: 178px;height: 40px;">
        <div class="logoTitle">「打造卡拉OK 娱乐正版新模式」</div>
      </div>
      <div class='centerWidth'>
        <div class='footRight'>
          Copyright &copy;2016-2019  Yuwang Inc All Rights Reserved 娱网科道 版权所有
        </div>
        <div class='clear'></div>
      </div>
    </div>
    <div v-else class="footer2">
      <div class="content">
        <div class="top">
         <span></span>
          <span>
            <span class="title">
              <span @click="goPage(1)">
                <span>鲸唱曲库</span>
                <span>JC Songbook</span>
              </span>
               <span @click="goPage(2)">
                <span>鲸唱蔚蓝</span>
                <span>JC Weilan</span>
              </span>
               <span @click="goPage(3)">
                <span>帮助中心</span>
                <span>Help center</span>
              </span>
            </span>
            <span class="nav">
              <span>帮助</span>
              <span>隐私</span>
              <span>条款</span>
            </span>
          </span>
          <span></span>
        </div>
        <div class="bottom">Copyright ©2019 娱网科道科技有限公司出品</div>
      </div>
    </div>
  </span>
</template>

<script>
  export default{
    props: {
      state: {
        type: String,
        default: 'logoBox',
      },
    },
    methods: {
      goPage(num) {
        switch (num){
          case 1:
            this.$router.push('')
            break;
          case 2:
            this.$router.push({name: 'Clouds'})
            break;
          case 3:
            this.$router.push({name: 'Help'})
            break;
        }
      }
    },
  }
</script>
<style scoped="scoped" lang="less">
  @import '../assets/css/common.less';
  @images: '../assets/images/';
  .footer2{
   .box(100%, 230px, black);
   .content{
     .content;
     box-sizing: border-box;
     padding-top: 40px;
     .top{
       .box(100%, 80%);
       display: flex;
       justify-content: space-between;
       &>span:nth-child(1){
         .box(190px, 45px, url('@{images}/foot2_logo_.png') no-repeat);
         background-size: contain;
       }
        &>span:nth-child(2){
          .box(600px, 45px);
          text-align: center;
          .title{
            display: flex;
            justify-content: space-between;
            font-size: 16px;
            margin-top: 20px;
            &>span{
              display: flex;
              flex-direction: column;
              align-items: center;
              justify-content: center;
              color: white;
              cursor: pointer;
              margin-top: 10px;
            }
          }
          .nav{
            .box(400px, 30px);
            display: inline-block;
            margin-top: 30px;
            line-height: 30px;
            color: white;
            display: flex;
            margin-left:100px;
            justify-content: space-between;
          }
        }
        &>span:nth-child(3){
          .box(106px, 115px, url('@{images}/footer2erVma.png') no-repeat);
        }
     }

   }
   .bottom{
     .box(100%, 20%, black);
     .fontStyle(14px, white, 100);
     display: flex;
     align-items: center;
     justify-content: center;
     border-top: 1px solid #B1B9C1;
   }
  }
  /*页脚*/
  .footBgc{
    width: 100%;height: auto;
    display: block;
    background-color: #000000;
  }
  .floatL{
    float: left;
  }
  .floatR{
    float: right;
  }
  .footBgc .centerWidth{
    border-top: 1px solid #4C156F;
    width: 1160px;
    margin: 0 auto;
    padding: 0 20px 20px;
    overflow: hidden;
  }
  .footBgc .centerWidth .footTop{
    padding: 35px 0;
    color: #ffffff;
  }
  .footBgc .centerWidth .footTop section:nth-of-type(1){
    width: 420px;
    margin-right: 69px;
  }
  .footBgc h2{
    font-size: 16px;
  }
  .footBgc .footer-icon-container{
    margin-bottom: 14px;
  }
  .footBgc .footer-icon-container p{
    font-size:10px;
    color: #a2a4a8;
  }
  .footBgc .footer-icon-container .footer-line{
    width: 35px;
    height: 2px;
    background-color: #CA30E1;
    margin-top: 5px;
  }
  .footBgc ul li{
    font-size: 12px;
    line-height: 26px;
    color: #a2a4a8;
  }
  .footBgc ul li b{
    /*color: #ffffff;*/
  }
  .foot-box{
    width: 168px;height: 168px;
  }
  .footRight{line-height: 50px;color:#4C156F;font-size: 12px;
    text-align: center;
  }
</style>

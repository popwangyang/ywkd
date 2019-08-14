<template>
  <div class="box">
    <main>
      <div class="main-header">
        <div class="main-header-title">
          <div class="main-header-title-img"></div>
          <div class="main-header-title-line"></div>
          <h2>卡拉OK数字娱乐云平台</h2>
        </div>
        <div class="main-header-body">
          <div class="main-header-body-content"></div>
        </div>
      </div>
      <!--正版欢唱，智慧娱乐-->
<!--      <div class="intelligence">
        <div class="intelligence-container">
          <h2>正版欢唱，智慧娱乐</h2>
          <div class="intelligence-top">
            <div class="intelligence-top-container">
              <div class="intelligence-top-container-left">
                <div class="intelligence-top-container-left-img"></div>
              </div>
              <div class="intelligence-top-container-right">
                <h3>智慧K歌</h3>
                <ul>
                  <li>正版音乐综合服务</li>
                  <p>鲸唱创新高清音乐综合技术服务平台高清音乐内容保质、保量、保新实现卡拉</p>
                  <p>OK正版曲库的合法使用。</p>
                  <li>曲库云平台</li>
                  <p>卡拉OK 正版曲库云服务一线实力唱片公司鼎力合作极速更新及扩充 KTV 曲</p>
                  <p>库音乐。</p>
                  <li>内容风险管控</li>
                  <p>曲库黑名单筛查，曲库音乐上架审核，曲库数据备案，音乐版权信息识别。</p>
                </ul>
                <div class="details-button" @click="goSing">
                  <a>了解详情</a>
                </div>
              </div>
            </div>
          </div>
          <div class="intelligence-middle">
            <div class="intelligence-middle-container">
              <div class="intelligence-middle-container-left">
                <h3>智慧娱乐</h3>
                <ul>
                  <li>更好玩的场景化游戏体验</li>
                  <li>充值送礼</li>
                  <li>巨好玩KTV娱乐新坐标</li>
                  <li>麦霸大赛</li>
                </ul>
                <div class="details-button" @click="goEntertainment">
                  <a>了解详情</a>
                </div>
              </div>
              <div class="intelligence-middle-container-right">
                <div class="intelligence-middle-container-right-img"></div>
              </div>
            </div>
          </div>
          <div class="intelligence-bottom">
            <div class="intelligence-bottom-container">
              <div class="intelligence-bottom-container-left">
                <div class="intelligence-bottom-container-left-img"></div>
              </div>
              <div class="intelligence-bottom-container-right">
                <h3>智慧管理</h3>
                <ul>
                  <li>在线超市模块</li>
                  <li>订单及会员管理模块</li>
                  <li>手机远程管理</li>
                </ul>
                <div class="details-button" @click="goManage">
                  <a>了解详情</a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div> -->



      <BQBox></BQBox>






      <!--娱网云盒2.0-->
      <div class="yw-clouds">
        <div class="yw-clouds-container">
          <h2>娱网云盒2.0全新演绎</h2>
          <h3>更好玩的场景化游戏体验</h3>
          <p>应用美国博通CPU的娱网云盒2.0</p>
          <p>行业领先的硬件配置 带来更理想的运</p>
          <p>行速度、兼容性及拓展性。</p>
          <div class="yw-clouds-container-img"></div>
        </div>
      </div>
      <!--正版娱乐 智慧互联-->
      <div class="yw-footer">
        <h2>正版娱乐 智慧互联</h2>
        <div class="yw-footer-content"></div>
      </div>
    </main>
  </div>
</template>

<script>
   import BQBox from '@/components/Clouds/banquanBox.vue'
    export default {
        name: "clouds",
        components: {
          BQBox,
        },
      methods:{
        goEntertainment(){
          this.$router.push('Entertainment')
        },
        goSing(){
          this.$router.push('Sing')
        },
        goManage(){
          this.$router.push('Manage')
        },
      }
    }
</script>

<style scoped>
  main{
    padding-top: 60px;
  }
  .main-header{
    height: 845px;
    width: 100%;
    background: url("../assets/images/clouds/header_bg_01.jpg") no-repeat;
    background-size: 100% 100%;
    position: relative;
  }
  .main-header-title{
    width: 476px;
    line-height: 30px;
    height: 30px;
    margin: 0 auto;
    padding-top: 100px;
  }
  .main-header-title-img{
    width: 160px;
    height: 30px;
    background: url("../assets/images/clouds/clouds_logo.png") no-repeat;
    background-size: 100% 100%;
    float: left;
  }
  .main-header-title-line{
    float: left;
    height: 24px;
    width: 1px;
    background-color: #ffffff;
    margin: 3px 20px;
  }
  .main-header-title h2{
    font-size: 26px;
    color: #ffffff;
    float: left;
  }
  .main-header-body{
    width: 1160px;
    height: 589px;
    padding: 0 20px;
    position: absolute;
    bottom: 0;
    left: calc(50% - 600px);
    background: url("../assets/images/clouds/header_bg_02.png") no-repeat;
    background-size: 100% 100%;
  }
  .main-header-body-content{
    width: 946px;
    height: 515px;
    position: absolute;
    bottom: -45px;
    left: calc(50% - 473px);
    background: url("../assets/images/clouds/header_bg_03.png") no-repeat;
    background-size: 100% 100%;
  }
  .intelligence{
    /*height: 1000px;*/
    background-color: #06062A;
    width: 100%;
  }
  .intelligence-container{
    width: 1200px;
    margin: 0 auto;
    padding: 100px 0 ;
  }
  .intelligence-container h2{
    font-size: 32px;
    color: #ffffff;
    text-align: center;
    margin-bottom: 30px;
  }
  .intelligence-top{
    width: 1080px;
    height: 570px;
    padding: 0 20px 0 0;
    background: url("../assets/images/clouds/intelligence_01.png") no-repeat;
    background-size: 100% 100%;
    margin: 0 0 80px 100px;
  }
  .intelligence-top-container{
    width: 100%;
    height: 100%;
  }
  .intelligence-top-container-left{
    width: 54%;
    height: 100%;
    float: left;
    position: relative;
  }
  .intelligence-top-container-left-img{
    width: 680px;
    height: 438px;
    background: url("../assets/images/clouds/intelligence_02.png") no-repeat;
    background-size: 100% 100%;
    position: absolute;
    left: -100px;
    top: calc(50% - 206px);
  }
  .intelligence-top-container-right{
    width: 46%;
    float: left;
    height: 100%;
    color: #ffffff;
  }
  .intelligence-top-container-right h3{
    margin: 80px 0 30px;
    font-size: 24px;
  }
  .intelligence-top-container-right ul{
    color: #98A3B9;
  }
  .intelligence-top-container-right ul li{
    color: #98A3B9;
    list-style-type: disc;
    margin: 0 0 20px 24px ;
    font-size: 20px;
    font-weight: 400;
  }
  .intelligence-top-container-right ul p{
    /*font-size: 13px;*/
  }
  .intelligence-top-container-right ul p:nth-of-type(2),.intelligence-top-container-right ul p:nth-of-type(4){
    margin-bottom: 15px;
  }
  .intelligence-top-container-right .details-button{
    margin-top: 40px;
    color: #ffffff;
    font-size: 16px;
    width: 64px;
    height: 22px;
    padding: 4px 12px;
    border-radius: 15px;
    cursor: pointer;
    background: -webkit-linear-gradient(left, #DF2BD3 , #5825B0);
    background: -o-linear-gradient(right, #DF2BD3, #5825B0);
    background: -moz-linear-gradient(right, #DF2BD3, #5825B0);
    background: linear-gradient(to right, #DF2BD3 , #5825B0);
  }
  .intelligence-top-container-right .details-button a{
    color: #ffffff;
    text-decoration: none;
  }

  .intelligence-middle{
    width: 1080px;
    height: 570px;
    padding: 0 20px 0 0;
    background: url("../assets/images/clouds/intelligence_01.png") no-repeat;
    background-size: 100% 100%;
    margin: 0 0 80px 0;
  }
  .intelligence-middle-container{
    width: 100%;
    height: 100%;
  }
  .intelligence-middle-container-left{
    width: 46%;
    height: 100%;
    float: left;
    position: relative;
  }
  .intelligence-middle-container-left h3{
    margin: 130px 0 30px 35px;
    font-size: 24px;
    color: #ffffff;
  }
  .intelligence-middle-container-left ul{
    color: #98A3B9;
    margin-left: 55px;
  }
  .intelligence-middle-container-left ul li{
    color: #98A3B9;
    list-style-type: disc;
    margin: 0 0 20px 0 ;
    font-size: 20px;
    font-weight: 400;
  }
  .intelligence-middle-container-left ul p:nth-of-type(2),.intelligence-middle-container-left ul p:nth-of-type(4){
    margin-bottom: 15px;
  }
  .intelligence-middle-container-left .details-button{
    margin: 40px 0 0 35px;
    color: #ffffff;
    font-size: 16px;
    width: 64px;
    height: 22px;
    padding: 4px 12px;
    border-radius: 15px;
    cursor: pointer;
    background: -webkit-linear-gradient(left, #DF2BD3 , #5825B0);
    background: -o-linear-gradient(right, #DF2BD3, #5825B0);
    background: -moz-linear-gradient(right, #DF2BD3, #5825B0);
    background: linear-gradient(to right, #DF2BD3 , #5825B0);
  }
  .intelligence-middle-container-left .details-button a{
    color: #ffffff;
    text-decoration: none;
  }
  .intelligence-middle-container-right{
    width: 54%;
    float: left;
    height: 100%;
    color: #ffffff;
    position: relative;
  }
  .intelligence-middle-container-right-img{
    width: 680px;
    height: 438px;
    background: url("../assets/images/clouds/intelligence_02.png") no-repeat;
    background-size: 100% 100%;
    position: absolute;
    right: -142px;
    top: calc(50% - 206px);
  }
  .intelligence-bottom{
    width: 1080px;
    height: 570px;
    padding: 0 20px 0 0;
    background: url("../assets/images/clouds/intelligence_05.png") no-repeat;
    background-size: 100% 100%;
    margin: 0 0 0 100px;
  }
  .intelligence-bottom-container{
    width: 100%;
    height: 100%;
  }
  .intelligence-bottom-container-left{
    width: 54%;
    height: 100%;
    float: left;
    position: relative;
  }
  .intelligence-bottom-container-left-img{
    width: 680px;
    height: 438px;
    background: url("../assets/images/clouds/intelligence_06.png") no-repeat;
    background-size: 100% 100%;
    position: absolute;
    left: -116px;
    top: calc(50% - 206px);
  }
  .intelligence-bottom-container-right{
    width: 46%;
    float: left;
    height: 100%;
    color: #ffffff;
  }
  .intelligence-bottom-container-right h3{
    margin: 154px 0 30px;
    font-size: 24px;
  }
  .intelligence-bottom-container-right ul{
    color: #98A3B9;
  }
  .intelligence-bottom-container-right ul li{
    color: #98A3B9;
    list-style-type: disc;
    margin: 0 0 20px 20px ;
    font-size: 20px;
    font-weight: 400;
  }
  .intelligence-bottom-container-right ul p:nth-of-type(2),.intelligence-bottom-container-right ul p:nth-of-type(4){
    margin-bottom: 15px;
  }
  .intelligence-bottom-container-right .details-button{
    margin-top: 40px;
    color: #ffffff;
    font-size: 16px;
    width: 64px;
    height: 22px;
    padding: 4px 12px;
    border-radius: 15px;
    cursor: pointer;
    background: -webkit-linear-gradient(left, #DF2BD3 , #5825B0);
    background: -o-linear-gradient(right, #DF2BD3, #5825B0);
    background: -moz-linear-gradient(right, #DF2BD3, #5825B0);
    background: linear-gradient(to right, #DF2BD3 , #5825B0);
  }
  .intelligence-bottom-container-right .details-button a{
    color: #ffffff;
    text-decoration: none;
  }
  /*娱网云盒2.0*/
  .yw-clouds{
    width: 100%;
    height: 45vw;
    min-width: 1240px;
    min-height: 560px;
    background: url("../assets/images/clouds/yw_clouds_01.png") no-repeat;
    background-size: cover;
  }
  .yw-clouds-container{
    text-align: center;
  }
  .yw-clouds-container h2{
    color: #ffffff;
    font-size: 32px;
    margin: 0 0 30px 0;
    padding-top: 80px;
  }
  .yw-clouds-container h3{
    color: #ffffff;
    font-size: 20px;
    margin: 0 0 30px 0;
  }
  .yw-clouds-container p{
    color: #98A3B9;
  }
  .yw-clouds-container-img{
    background: url("../assets/images/clouds/yw_clouds_02.png") no-repeat;
    background-size: cover;
    width: 32vw;
    height: 15vw;
    margin: 0 auto;
    min-width: 396px;
    min-height: 186px;
  }
  .yw-footer{
    background-color: #06062A;
    /*height: 600px;*/
    padding-top: 80px;
    padding-bottom: 100px;
  }
  .yw-footer h2{
    color: #ffffff;
    font-size: 32px;
    text-align: center;
  }
  .yw-footer-content{
    width: 1200px;
    height: 682px;
    background: url("../assets/images/clouds/yw_footer_01.jpg") no-repeat;
    background-size: cover;
    margin: 40px auto 0;
  }
</style>

<template>
  <div class="box">
    <div class="face-header">
      <img src="../assets/images/face/title.png" alt="">
    </div>
    <!--鲸选曲库-->
    <div class="face-content">
      <div class='face-content-header'>
        <div class="face-content-header-title">
          <h2>卡拉OK行业解决版权问题其实并不难</h2>
          <h3>全面解决版权使用的后顾之忧</h3>
        </div>
        <div class="face-content-header-icon">
          <ul>
            <li>
              <!--<img src="./images/face/header_block1.png" alt="娱网科道">-->
              <div class="face-content-header-img-left"></div>
              <div class="face-content-header-line"></div>
              <p>创新版权使用收费模式，精准计次，</p>
              <p>唱多少，付多少。不点播，不付费。</p>
              <p> 版权成本，明明白白。</p>
            </li>
            <li>
              <!--<img src="./images/face/header_block2.png" alt="娱网科道">-->
              <div class="face-content-header-img-second"></div>
              <div class="face-content-header-line"></div>
              <p>公正版权分配，得到上千唱片公司的</p>
              <p>认可，权利曲库数量庞大，满足所有</p>
              <p>卡拉OK正版经营需求。</p>
            </li>
            <li>
              <!--<img src="./images/face/header_block3.png" alt="娱网科道">-->
              <div class="face-content-header-img-right"></div>
              <div class="face-content-header-line"></div>
              <p>主流 VOD 战略合作，从设备源头提</p>
              <p>供技术及数据解决方案。</p>
            </li>
            <li>
              <!--<img src="./images/face/header_block3.png" alt="娱网科道">-->
              <div class="face-content-header-img-middle"></div>
              <div class="face-content-header-line"></div>
              <p>专业法律团队，防范非故侵权，为卡拉</p>
              <p>OK保驾护航。</p>
            </li>
          </ul>
        </div>
      </div>
    </div>
    <!--核心产品-->
    <div class="page main-production">
      <div class="main-production-content">
        <div class="main-production-header-container">
          <div class='main-production-header'>
            <!--<img src="./images/face/product01.png" alt="核心产品">-->
            <div class="main-production-header-img"></div>
            <p>核心产品</p>
            <div class="main-production-header-line"></div>
          </div>
        </div>
        <div class="main-production-content-container">
          <HomeHeXi/>
        </div>
      </div>
    </div>
    <!--企业新闻-->
    <div class="page platform-advantage">
        <div class="platform-advantage-header">
          <!--<img src="./images/face/product01.png" alt="平台优势">-->
          <div class="platform-advantage-header-img"></div>
          <p>企业新闻</p>
          <div class="platform-advantage-header-line"></div>
        </div>
        <div class="platform-advantage-content-container">
          <HomeNews/>
        </div>
    </div>
    <!-- 我们的合作伙伴 -->
    <div class="page partners">
      <div class="partners-header-container">
        <div class='partners-header'>
          <!--<img src="./images/face/product01.png" alt="合作伙伴">-->
          <div class="partners-header-img"></div>
          <p>合作伙伴</p>
          <div class="partners-header-line"></div>
        </div>
      </div>
      <div class="partners-content">
        <ul>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
        </ul>
        <div class="partners-bottom-container">
          <div class="partners-bottom">
            <p>期待您的加入</p>
            <div>立即入驻</div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
    import HomeHeXi from '../components/homeHeXi.vue'
    import HomeNews from '../components/homeNews/index.vue'
    import {post,baseJs,token} from "../api/api";
    export default {
      name: "Home",
      components:{
        HomeHeXi,
        HomeNews
      },
      data(){
      	return {

      	}
      },
      computed:{},
      methods:{

      },
      created(){

      },
      mounted(){

      },
    }
</script>

<style scoped>
  .face-header{
    width: 100%;
    min-width:1300px;
    /*clear: both;*/
    /*height:calc(84vh - 60px);*/
    height: 47vw;
    min-height: 670px;
    background-image: url("../assets/images/face/title_bg.png");
    background-size: 100% 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    padding-top: 60px;
  }
  .face-content{
    background-color: #06062A;
  }
  .face-content-header{
    width: 1160px;
    margin: 0 auto;
    padding: 0 20px;
    overflow: hidden;
  }
  .face-content-header-title{
    height: 50px;
    padding: 30px 0 50px;
    margin-bottom: 70px;
  }
  .face-content-header-title h2{
    line-height: 50px;
    font-size: 36px;
    text-align: center;
    color: #ffffff;
    margin-bottom: 20px;
  }
  .face-content-header-title h3{
    font-size: 24px;
    text-align: center;
    color: #ffffff;
  }
  .face-content-header-icon ul{
    display: flex;
    justify-content: space-between;
    box-sizing: border-box;
  }
  .face-content-header-icon ul li{
    text-align: center;
    width: 23%;
    background: -webkit-linear-gradient(left, #232663 , #14163D); /* Safari 5.1 - 6.0 */
    background: -o-linear-gradient(right, #232663,  #14163D); /* Opera 11.1 - 12.0 */
    background: -moz-linear-gradient(right, #232663,  #14163D); /* Firefox 3.6 - 15 */
    background: linear-gradient(to right, #232663 ,  #14163D); /* 标准的语法 */
  }
  .face-content-header-icon ul li img{
    margin: 50px auto 0;
  }
  .face-content-header-img-left{
    width: 147px;height: 134px;
    margin: 50px auto 0;
    background: url("../assets/images/face/face_jingling.png") 0 -6px no-repeat;
  }
  .face-content-header-img-second{
   width: 160px;
   height: 134px;
   margin: 50px auto 0;
   background: url('../assets/images/face/face_middle.png')no-repeat;
   background-size: contain;
   background-position: 0 100%;
  }

  .face-content-header-img-middle{
    width: 100px;height: 142px;
    margin: 50px auto 0;
    background: url("../assets/images/face/face_jingling.png") -212px 0 no-repeat;
  }
  .face-content-header-img-right{
    width: 119px;height: 141px;
    margin: 50px auto 0;
    background: url("../assets/images/face/face_jingling.png") -376px -1px no-repeat;
  }
  .face-content-header-icon ul li .face-content-header-line{
    margin: 40px auto;
    height: 1px;
    background-color: #ffffff;
    width: 40px;
  }
  .face-content-header-icon ul li p{
    color: #ffffff;
  }
  .face-content-header-icon ul li p:last-child{
    margin-bottom: 50px;
  }
  /*核心产品*/
  .main-production{background-color: #06062A;}
  .main-production-content{width: 1160px;margin: 0 auto;padding: 0 20px;overflow: hidden;}
  .main-production-header-container{
    height: 90px;
    margin: 70px 0 90px;
  }
  .main-production-header{
    width: 420px;height: 76px;
    margin: 0 auto;
    background: url("../assets/images/face/face_jingling.png") -12px -664px no-repeat;
    position: relative;
  }
  .main-production-header-img{
    position: absolute;
    left: 44%;
    top: -10px;
    width: 52px;
    height: 34px;
    background: url("../assets/images/face/face_jingling.png") -14px -601px no-repeat;
  }
  .main-production-header p{
    position: absolute;
    left: 34%;
    bottom: -10px;
    color: #ffffff;
    font-size: 36px;
  }
  .main-production-header-line{
    height: 30px;width: 2px;margin: 0 auto;background-color: #73187E;
    position: absolute;
    left: 50%;bottom: -55px;
  }
  .main-production-content-container{
    height: 950px;
    background: yellow;
  }
  .main-production-content-top{
    height: 380px;
    background: url("../assets/images/face/product05.png") 5px 10px no-repeat;
    background-size: cover;
  }
  .main-production-content-top-left{
    position: relative;
    height: 460px;float: left;
    width: 46%;
  }
  .main-production-content-top-left img:nth-of-type(1){
    position: absolute;
    width: 460px;height: 460px;
  }
  .main-production-content-top-left img:nth-of-type(2){
    position: absolute;
    top: 0;
    left: 0;
    width: 495px;height:auto;
  }
  .main-production-content-top-right{
    float: left;
    width: 54%;height: 460px;
  }
  .main-production-content-top-right-container{
    padding: 95px 0 0 25px;
  }
  .main-production-content-top-right-container-img{
    width: 196px;
    height: 36px;
    background: url("../assets/images/face/face_jingling.png") -18px -1023px no-repeat;
  }
  .main-production-content-top-right-container p{
    font-size: 14px;
    color: #98A3B9;
  }
  .main-production-content-top-right-container p:nth-of-type(1){
    margin-top: 20px;
  }
  .main-production-content-top-right-container .detail-button{
    margin-top: 40px;color: #ffffff;font-size: 16px;width: 64px;
    height: 22px;padding: 4px 12px;border-radius: 15px;cursor: pointer;
    background: -webkit-linear-gradient(left, #DF2BD3 , #5825B0);
    background: -o-linear-gradient(right, #DF2BD3,  #5825B0);
    background: -moz-linear-gradient(right, #DF2BD3,  #5825B0);
    background: linear-gradient(to right, #DF2BD3 ,  #5825B0);
  }
  .main-production-content-middle{
    margin-top: 180px;
    height: 380px;
    background: url("../assets/images/face/product06.png") -14px 11px no-repeat;
    background-size: 100% 100%;
  }
  .main-production-content-middle-right{
    position: relative;
    height: 460px;float: left;
    width: 46%;
  }
  .main-production-content-middle-right img:nth-of-type(1){
    position: absolute;
    right: 5px;
    top: 0;
    width: 460px;height: 460px;
  }
  .main-production-content-middle-right img:nth-of-type(2){
    position: absolute;
    top: -1px;
    right: 5px;
    width: 495px;height:auto;
  }
  .main-production-content-middle-left{
    float: left;
    width: 54%;height: 460px;
  }
  .main-production-content-middle-left-container{
    padding: 90px 0 0 50px;
  }
  .main-production-content-middle-left-container-img{
    width: 196px;
    height: 36px;
    background: url("../assets/images/face/face_jingling.png") -18px -1093px no-repeat;
  }
  .main-production-content-middle-left-container p{
    font-size: 14px;
    color: #98A3B9;
  }
  .main-production-content-middle-left-container p:nth-of-type(1){
    margin-top: 20px;
  }
  .main-production-content-middle-left-container .detail-button{
    margin-top: 40px;color: #ffffff;font-size: 16px;width: 64px;
    height: 22px;padding: 4px 12px;border-radius: 15px;cursor: pointer;
    background: -webkit-linear-gradient(left, #DF2BD3 , #5825B0);
    background: -o-linear-gradient(right, #DF2BD3,  #5825B0);
    background: -moz-linear-gradient(right, #DF2BD3,  #5825B0);
    background: linear-gradient(to right, #DF2BD3 ,  #5825B0);
  }
  .main-production-content-bottom{
    margin-top: 180px;
    height: 380px;
    background: url("../assets/images/face/product09.png") 5px 10px no-repeat;
    background-size: cover;
  }
  .main-production-content-bottom-left{
    position: relative;
    height: 460px;float: left;
    width: 46%;
  }
  .main-production-content-bottom-left img:nth-of-type(1){
    position: absolute;
    width: 460px;height: 460px;
  }
  .main-production-content-bottom-left img:nth-of-type(2){
    position: absolute;
    top: 0;
    left: 0;
    width: 495px;height:auto;
  }
  .main-production-content-bottom-right{
    float: left;
    width: 54%;height: 460px;
  }
  .main-production-content-bottom-right-container{
    padding: 95px 0 0 25px;
  }
  .main-production-content-bottom-right-container-img{
    width: 180px;
    height: 36px;
    background: url("../assets/images/face/face_jingling.png") -20px -1151px no-repeat;
  }
  .main-production-content-bottom-right-container p{
    font-size: 14px;
    color: #98A3B9;
  }
  .main-production-content-bottom-right-container p:nth-of-type(1){
    margin-top: 20px;
  }
  .main-production-content-bottom-right-container .detail-button{
    margin-top: 40px;color: #ffffff;font-size: 16px;width: 64px;
    height: 22px;padding: 4px 12px;border-radius: 15px;cursor: pointer;
    background: -webkit-linear-gradient(left, #DF2BD3 , #5825B0);
    background: -o-linear-gradient(right, #DF2BD3,  #5825B0);
    background: -moz-linear-gradient(right, #DF2BD3,  #5825B0);
    background: linear-gradient(to right, #DF2BD3 ,  #5825B0);
  }
  /*平台优势*/
  .platform-advantage{
    /*background-color: #06062A;*/
    padding-top: 80px;
    background: url("../assets/images/face/plateform_advantage_02.png") no-repeat;
    /*background-size: 100% 100%;*/
    position: relative;
  }
  .platform-advantage-header{
    width: 500px;height: 72px;
    margin: 0 auto 90px;
    background-image: url("../assets/images/face/plateform_advantage_01.png");
    background-size: 100% 100%;
    position: relative;
  }
  .platform-advantage-header-img{
    position: absolute;
    left: 44%;
    top: -10px;
    width: 52px;
    height: 34px;
    background: url("../assets/images/face/face_jingling.png") -14px -601px no-repeat;
  }
  .platform-advantage-header p{
    position: absolute;
    left: 34%;
    bottom: -10px;
    color: #ffffff;
    font-size: 36px;
  }
  .platform-advantage-header-line{
    height: 30px;width: 2px;margin: 0 auto;background-color: #73187E;
    position: absolute;
    left: 50%;bottom: -55px;
  }
  .platform-advantage-content-container{
    height: 800px;
    width: 1170px;
    margin: 0 auto;
    /* padding-bottom: 200px; */
  }
  /*.swiper-container*/
  .swiper-container{
    width: 100%;
    height: 100%;
    /*margin-left: 60px !important;*/
  }
  .platform-advantage-content{
    margin: 0 auto;
    width: 1170px;
    height:750px;
    padding-left: 60px ;
    background: url("../assets/images/face/plateform_advantage_03.png") no-repeat;
    background-size: cover;
    overflow: hidden;
  }
  .platform-advantage-img-container{
    position: absolute;
    top:-105px;
    left: calc(54% + 25px);
    height: 1400px;width: 850px;
    background: url("../assets/images/face/planet.png") no-repeat;
    background-size: cover;
  }
  /*小于1200时left固定*/
  @media only screen and (max-width: 1200px){
    .platform-advantage-img-container{
      left: 685px;
    }
  }
  .platform-advantage-content-point{
    float: left;width: 70px;height: 100%;
  }
  /*.platform-advantage-content-page{*/
  /*float: left;height: 750px;width: calc(100% - 70px);position: relative;*/
  /*overflow: hidden;*/
  /*}*/
  .swiper-slide{
    height: 100%;width: 100%;
    z-index: 200;
  }
  .swiper-slide .platform-advantage-content-left{
    width: 50%;float: left;height: 100%;
    display: flex;flex-direction: column;justify-content: space-around;
  }
  .platform-advantage-content-left section{
    width: 100%;background-color: #312167;border-top-left-radius: 24px;
    color: #FFFFFF;opacity: 0.7;border-bottom-right-radius: 24px;
  }
  .platform-advantage-content-left section .platform-advantage-content-left-top{

  }
  .platform-advantage-content-left-top .platform-advantage-content-left-title{
    width: 96px;border-top-left-radius: 24px;padding: 10px 20px;background-color: #6F26B3;
    border-bottom-right-radius: 24px;font-size: 16px;font-weight: 600;
  }
  .platform-advantage-content-left section .platform-advantage-content-left-content{
    padding: 20px 10px;
  }
  .platform-advantage-content-page li .platform-advantage-content-right{
    width: 50%;float: left;height: 100%;
  }
  .platform-advantage-content-right p{
    font-size: 32px;color: #ffffff;font-weight: 600;position: absolute;
    top: 52%;left: 60%;
  }
  /*合作伙伴*/
  .partners{
    height: 857px;
    width: 100%;
    background: url("../assets/images/face/partners_bg.png") no-repeat;
    background-size: cover;
  }
  .partners-header-container{
    height: 90px;
    margin: 0 0 90px;
    padding-top: 70px;
  }
  .partners-header{
    width: 300px;height: 84px;
    margin: 0 auto;
    background-image: url("../assets/images/face/partners.png");
    background-size: cover;
    position: relative;
  }
  .partners-header-img{
    position: absolute;
    left: 42%;
    top: -10px;
    width: 52px;
    height: 34px;
    background: url("../assets/images/face/face_jingling.png") -14px -601px no-repeat;
  }
  .partners-header p{
    position: absolute;
    left: 28%;
    bottom: -10px;
    color: #ffffff;
    font-size: 36px;
  }
  .partners-header-line{
    height: 30px;width: 2px;margin: 0 auto;background-color: #73187E;
    position: absolute;
    left: 50%;bottom: -55px;
  }
  .partners-content{
    width: 1160px;margin: 0 auto;padding: 0 20px;
  }
  .partners-content ul{
    display: block;overflow: hidden;
  }
  .partners-content ul li{
    float: left;width: 258px;height: 138px;margin: 0 42px 66px 0;
  }
  .partners-content ul li:nth-of-type(1){
    background: url("../assets/images/face/face_jingling.png") -8px -202px no-repeat;
  }
  .partners-content ul li:nth-of-type(2){
    background: url("../assets/images/face/face_jingling.png") -324px -202px no-repeat;
  }
  .partners-content ul li:nth-of-type(3){
    background: url("../assets/images/face/face_jingling.png") -638px -202px no-repeat;
  }
  .partners-content ul li:nth-of-type(4){
    background: url("../assets/images/face/face_jingling.png") -951px -202px no-repeat;
  }
  .partners-content ul li:nth-of-type(5){
    background: url("../assets/images/face/face_jingling.png") -8px -402px no-repeat;
  }
  .partners-content ul li:nth-of-type(6){
    background: url("../assets/images/face/face_jingling.png") -324px -402px no-repeat;
  }
  .partners-content ul li:nth-of-type(7){
    background: url("../assets/images/face/face_jingling.png") -638px -402px no-repeat;
  }
  .partners-content ul li:nth-of-type(8){
    background: url("../assets/images/face/face_jingling.png") -951px -402px no-repeat;
  }
  .partners-content ul li:nth-of-type(4n){
    margin-right: 0;
  }
  .partners-bottom-container{
    width: 1160px;
  }
  .partners-bottom{
    width: 450px;height: 199px;background: url("../assets/images/face/partners_bottom.png");
    background-size: cover;margin: 0 auto;
  }
  .partners-bottom p{
    color: #ffffff;font-size: 36px;text-align: center;padding-top: 60px;
  }
  .partners-bottom div{
    margin: 28px auto 0;color: #ffffff;font-size: 22px;width: 90px;
    height: 30px;padding: 5px 50px;border-radius: 20px;cursor: pointer;
    background: -webkit-linear-gradient(left, #DA2ACE , #6326C1);
    background: -o-linear-gradient(right, #DA2ACE,  #6326C1);
    background: -moz-linear-gradient(right, #DA2ACE,  #6326C1);
    background: linear-gradient(to right, #DA2ACE ,  #6326C1);
  }
</style>
<style>
  /*轮播圆点*/
  .platform-advantage-content .swiper-container .swiper-pagination .swiper-pagination-bullet{
    width: 14px;
    height: 14px;
    margin: 10px 0 !important;
  }
</style>

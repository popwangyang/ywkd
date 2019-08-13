<template>
    <div class="box">
      <div class="main">
        <Klb/>


        <div class="header">
          <div class="header-title">
            <div class="header-title-top">
              <div class="header-logo"></div>
              <div class="divide-line"></div>
              <div class="header-title-top-content">正版授权曲库产品</div>
            </div>
            <p>卡拉OK 必备正版高清曲库</p>
          </div>
          <div class="header-content-container">
            <div></div>
            <div></div>
            <div></div>
          </div>
        </div>
        <!--功能强大，打造智能云曲库平台-->
        <div class="feature">
          <div class="feature-title">功能强大，打造智能云曲库平台</div>
          <div class="feature-container">
            <ul>
              <li>
                <div class="img-container"></div>
                <p>计费方式灵活</p>
              </li>
              <li>
                <div class="img-container"></div>
                <p>曲库正版授权</p>
              </li>
              <li>
                <div class="img-container"></div>
                <p>曲库品质高清</p>
              </li>
              <li>
                <div class="img-container"></div>
                <p>版权担保服务</p>
              </li>
              <li>
                <div class="img-container"></div>
                <p>可定制曲库包</p>
              </li>
              <li>
                <div class="img-container"></div>
                <p>正版曲库VOD</p>
              </li>
              <li>
                <div class="img-container"></div>
                <p>云曲库更智能</p>
              </li>
              <li>
                <div class="img-container"></div>
                <p>大数据更精准</p>
              </li>
            </ul>
          </div>
        </div>
        <!--庞大曲库体量，主流欢唱音乐-->
        <div class="legal-records">
          <div class="legal-records-title">
            <h2>庞大曲库体量，主流欢唱音乐</h2>
          </div>
          <div class="legal-records-content">
            <div class="legal-records-container">
              <div class="swiper-container" @mouseenter="mouseenter" @mouseleave="mouseleave">
                <swiper class="swiper-wrapper" :options="swiperOption" ref="mySwiper">
                  <swiper-slide class="swiper-slide">
                    <div class="swiper-slide-top">陈奕迅 /《黑 · 白 · 灰》</div>
                    <div class="swiper-slide-bottom">
                      <div class="swiper-slide-bottom-left">
                        <ul>
                          <li class="swiper-slide-bottom-left-li">
                            <p class="left">十年</p>
                            <p class="right">《黑·白·灰》</p>
                          </li>
                          <li class="swiper-slide-bottom-left-li">
                            <p class="left">k歌之王</p>
                            <p class="right">《打得火热》</p>
                          </li>
                          <li class="swiper-slide-bottom-left-li">
                            <p class="left">浮夸</p>
                            <p class="right">《U87》</p>
                          </li>
                          <li class="swiper-slide-bottom-left-li">
                            <p class="left">好久不见</p>
                            <p class="right">《认了吧》</p>
                          </li>
                          <li class="swiper-slide-bottom-left-li">
                            <p class="left">淘汰</p>
                            <p class="right">《认了吧》</p>
                          </li>
                        </ul>
                      </div>
                      <div class="swiper-slide-bottom-right">
                        <div class="legal-records-container-bottom-right-img">
                          <img src="../assets/images/genuine/zhuanji.png" alt="专辑">
                        </div>
                      </div>
                    </div>
                  </swiper-slide>
                  <swiper-slide class="swiper-slide">
                    <div class="swiper-slide-top">古巨基 /《热门歌曲》</div>
                    <div class="swiper-slide-bottom">
                      <div class="swiper-slide-bottom-left">
                        <ul>
                          <li class="swiper-slide-bottom-left-li">
                            <p class="left">情歌王</p>
                            <p class="right">《劲歌金曲》</p>
                          </li>
                          <li class="swiper-slide-bottom-left-li">
                            <p class="left">爱与诚</p>
                            <p class="right">《大雄》</p>
                          </li>
                          <li class="swiper-slide-bottom-left-li">
                            <p class="left">爱的太迟</p>
                            <p class="right">《Human 我生》</p>
                          </li>
                          <li class="swiper-slide-bottom-left-li">
                            <p class="left">告别我的恋人们</p>
                            <p class="right">《告别我的恋人们》</p>
                          </li>
                          <li class="swiper-slide-bottom-left-li">
                            <p class="left">情歌王</p>
                            <p class="right">《劲歌金曲》</p>
                          </li>
                        </ul>
                      </div>
                      <div class="swiper-slide-bottom-right">
                        <div class="legal-records-container-bottom-right-img">
                          <img src="../assets/images/genuine/genuine_06.png" alt="专辑">
                        </div>
                      </div>
                    </div>
                  </swiper-slide>
                  <swiper-slide class="swiper-slide">
                    <div class="swiper-slide-top">李克勤 /《热门歌曲》</div>
                    <div class="swiper-slide-bottom">
                      <div class="swiper-slide-bottom-left">
                        <ul>
                          <li class="swiper-slide-bottom-left-li">
                            <p class="left">月半小夜曲</p>
                            <p class="right">《一年半载》</p>
                          </li>
                          <li class="swiper-slide-bottom-left-li">
                            <p class="left">一生不变</p>
                            <p class="right">《Purple Dream》</p>
                          </li>
                          <li class="swiper-slide-bottom-left-li">
                            <p class="left">红日</p>
                            <p class="right">《红日》</p>
                          </li>
                          <li class="swiper-slide-bottom-left-li">
                            <p class="left">护花使者</p>
                            <p class="right">《雨中街头剧》</p>
                          </li>
                          <li class="swiper-slide-bottom-left-li">
                            <p class="left">深深深</p>
                            <p class="right">《此情此景》</p>
                          </li>
                        </ul>
                      </div>
                      <div class="swiper-slide-bottom-right">
                        <div class="legal-records-container-bottom-right-img">
                          <img src="../assets/images/genuine/genuine_05.png" alt="专辑">
                        </div>
                      </div>
                    </div>
                  </swiper-slide>
                </swiper>
                <div class="swiper-button-prev"></div><!--左箭头-->
                <div class="swiper-button-next"></div><!--右箭头-->
              </div>
              <div class="legal-records-container-bottom"></div>
            </div>
          </div>
        </div>
        <!-- 全球顶级唱片公司 -->
        <div class="partners">
          <div class='partners-header'>
            <h2>全球顶级唱片公司，正版音乐高清曲库授权</h2>
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
          </div>
        </div>
        <!--精确计费，杜绝浪费-->
        <div class="charging">
          <div class="charging-title">
            <h2>精确计费，杜绝浪费</h2>
          </div>
          <div class="charging-container">
            <!--<div class="charging-container-header">-->
            <!--<div class="charging_logo"></div>-->
            <!--<div class="charging_header_title"><p>传统收费模式</p></div>-->
            <!--</div>-->
            <!--<div class="charging-container-body">-->
            <!--<ul>-->
            <!--<li>-->
            <!--<p>创新服务，用户点播，商户后台扣费</p>-->
            <!--<div class="charging-container-body-middle">-->
            <!--<div class="charging-point"></div>-->
            <!--<div class="charging-line"></div>-->
            <!--<div class="charging-container-body-middle-content"></div>-->
            <!--<div class="charging-line"></div>-->
            <!--<div class="charging-point"></div>-->
            <!--</div>-->
            <!--<p>年度打包收费</p>-->
            <!--</li>-->
            <!--<li></li>-->
            <!--<li></li>-->
            <!--<li></li>-->
            <!--<li></li>-->
            <!--</ul>-->
            <!--</div>-->
          </div>
        </div>
        <!--卡拉OK版权音乐曲库授权证书-->
        <div class="copyright-book">
          <div class="copyright-book-header">
            <h2>卡拉OK版权音乐曲库授权证书</h2>
          </div>
          <div class="copyright-book-container">
            <div class="copyright-book-container-left">
              <div class="copyright-book-container-left-img"></div>
            </div>
            <div class="copyright-book-container-right">
              <div class="copyright-book-container-right-content">
                <h3>鲸选曲库 正版授权</h3>
                <p>我们为授权的卡拉OK 商家提供《卡拉OK 版权音乐曲库授权书》，</p>
                <p>兹证明该商家经营场所经营过程中所使用的曲库内容均为正版授权。</p>
              </div>
            </div>
          </div>
        </div>
        <!--鲸选曲库app下载-->
        <div class="app-download">
          <div class="app-download-main">
            <div class="app-download-title">
              <h2>鲸选曲库商家端 app 下载</h2>
            </div>
            <div class="app-download-top">
              <div class="app-download-top-container">
                <div class="app-download-top-img"></div>
                <h2>合作入口</h2>
                <div class="join-button">KTV寻求曲库授权</div>
              </div>
            </div>
            <div class="app-download-bottom"></div>
          </div>
        </div>
      </div>
    </div>
</template>

<script>
    import Klb from '@/components/Genuine/Klb.vue'
    import {post,baseJs,token} from "../api/api";
    import 'swiper/dist/css/swiper.css'
    import {swiper,swiperSlide} from 'vue-awesome-swiper'
    export default {
      name: "genuine",
      components: {
        swiper,
        swiperSlide,
        Klb,
      },
      data() {
        return {
          user_name: '',
          swiperOption: {
            width: 1200,
            height: 404,
            autoplay: {
              // 触碰后自动切换也不会停止
              disableOnInteraction: false,
              delay: 5000,
              stopOnLastSlide: false
            },
            // direction:'vertical',
            loop: true,
            navigation: {
              nextEl: '.swiper-button-next',
              prevEl: '.swiper-button-prev'
            },
          },
        }
      },
      methods: {
        mouseenter() {
          this.$refs.mySwiper.swiper.autoplay.stop()
        },
        mouseleave() {
          this.$refs.mySwiper.swiper.autoplay.start()
        },
        handleScroll() {
          const f = window.innerHeight / 2 + 300;
          const t6 = document.querySelector('.legal-records-container').offsetTop - f ;
          if(window.scrollY >= t6 || window.pageYOffset >= t6){
            if(document.querySelector('.swiper-slide-bottom-left-li')){
              document.querySelector('.swiper-slide-bottom-left-li').className = 'active'
            }
          }
        }
      },
      created(){

      },
      mounted() {
        window.addEventListener('scroll', this.handleScroll);
      },
      destroyed() {
        window.removeEventListener('scroll', this.handleScroll)
      }
    }
</script>

<style scoped>
  html,body{
    /*overflow: hidden;*/
  }
  .active{
    opacity: 1 !important;
    transform: translateY(0) !important;
    -webkit-transform:translateY(0) !important;
    -ms-transform: translateY(0) !important;
    -webkit-transition-delay: .3s !important;
    transition-delay: .3s !important;
  }
  /*header*/
  .main{
    min-width: 1400px;
  }
  .header{
    background: url("../assets/images/genuine/header_bg.png") no-repeat;
    background-size: 100% 100%;
    width: 100%;
    height: 1050px;
    overflow: hidden;
    /* padding-top: 60px; */
  }
  @media only screen and (max-width: 1650px){
    .header{
      background-size: cover;
    }
  }
  .header-title{
    width: 500px;margin: 50px auto 0;color: #ffffff;
  }
  .header-title-top{
    overflow: hidden;
  }
  .header-title-top .header-logo{
    width: 211px;height: 38px;background: url("../assets/images/genuine/quku_logo.png") no-repeat;
    background-size: 100% 100%;float: left;margin-top: 2px;
  }
  .header-title-top .divide-line{
    width: 1px;height: 30px;margin: 6px 16px 0;background-color: #ffffff;float: left;
  }
  .header-title-top-content{
    float: left;font-size: 32px;
  }
  .header-title p{
    text-align: center;
    font-size: 26px;
    margin-top: 10px;
  }
  .header-content-container{
    width: 1160px;
    height: 800px;
    padding: 0 20px;
    margin: 20px auto;
    position: relative;
  }
  .header-content-container > div:nth-of-type(1){
    width: 758px;
    height: 626px;
    background: url("../assets/images/genuine/video_01.png") no-repeat;
    background-size: 100% 100%;
    position: absolute;
    top: 20px;
    left: 0;
  }
  .header-content-container > div:nth-of-type(2){
    width: 500px;
    height: 452px;
    background: url("../assets/images/genuine/video_02.png") no-repeat;
    background-size: 100% 100%;
    position: absolute;
    top: 0;
    right: 0;
  }
  .header-content-container > div:nth-of-type(3){
    width: 510px;
    height: 357px;
    background: url("../assets/images/genuine/video_03.png") no-repeat;
    background-size: 100% 100%;
    position: absolute;
    right: 50px;
    bottom: 50px;
  }

  /*功能强大，打造智能云曲库平台*/
  .feature{
    background-color: #06062A;
  }
  .feature-title{
    width: 400px;
    margin: 0 auto 40px;
    color: #ffffff;
    font-size: 26px;
  }
  .feature-container{
    width: 1160px;padding: 0 20px;
    margin: 0 auto;height: 500px;
  }
  .feature-container ul li{
    list-style: none;
    float: left;
    margin: 20px 85px;
  }
  .feature-container ul li:nth-of-type(8){
    margin: 20px 84px;
  }
  .feature-container ul li:nth-of-type(1) .img-container{
    width: 120px;
    height: 130px;
    background: url("../assets/images/genuine/genuine_jingling.png") -33px 0px no-repeat;
  }
  .feature-container ul li:nth-of-type(2) .img-container{
    width: 120px;
    height: 130px;
    background: url("../assets/images/genuine/genuine_jingling.png") -189px 0px no-repeat;
  }
  .feature-container ul li:nth-of-type(3) .img-container{
    width: 120px;
    height: 130px;
    background: url("../assets/images/genuine/genuine_jingling.png") -344px 0px no-repeat;
  }
  .feature-container ul li:nth-of-type(4) .img-container{
    width: 120px;
    height: 130px;
    background: url("../assets/images/genuine/genuine_jingling.png") -499px 0px no-repeat;
  }
  .feature-container ul li:nth-of-type(5) .img-container{
    width: 120px;
    height: 130px;
    background: url("../assets/images/genuine/genuine_jingling.png") -656px 0px no-repeat;
  }
  .feature-container ul li:nth-of-type(6) .img-container{
    width: 120px;
    height: 130px;
    background: url("../assets/images/genuine/genuine_jingling.png") -811px 0px no-repeat;
  }
  .feature-container ul li:nth-of-type(7) .img-container{
    width: 120px;
    height: 130px;
    background: url("../assets/images/genuine/genuine_jingling.png") -967px 0px no-repeat;
  }
  .feature-container ul li:nth-of-type(8) .img-container{
    width: 122px;
    height: 130px;
    background: url("../assets/images/genuine/genuine_jingling.png") -1122px 0px no-repeat;
  }
  .feature-container ul li p{
    color: #ffffff;
    text-align: center;
    font-size: 19px;
    margin-top: 10px;
  }
  /*庞大曲库体量*/
  .legal-records{
    width: 100%;
    height: 39vw;
    min-height: 650px;
    background: url("../assets/images/genuine/music-bg.png") no-repeat;
    background-size: cover;
  }
  .legal-records-title{
    height: 120px;
    line-height: 120px;
  }
  .legal-records-title h2{
    text-align: center;
    color: #ffffff;
    font-size: 26px;
    font-weight: 500;
  }
  .legal-records-container{
    width: 1200px;
    height: 500px;
    margin: 0 auto;
    background-color: #13153F;
  }
  .swiper-container{
    width: 1200px;
    height: 404px;
  }
  .swiper-wraper .swiper-slide{

  }
  /*轮播左右箭头*/
  .swiper-container .swiper-button-prev{
    background-image: url("../assets/images/genuine/left.png");
    top: 60%;
  }
  .swiper-container .swiper-button-next{
    background-image: url("../assets/images/genuine/right.png");
    top: 60%;
  }
  .swiper-slide-top{
    /*width: 100%;*/
    height: 80px;
    padding: 0 80px;
    color: #ffffff;
    font-size: 16px;
    line-height: 80px;
  }
  .swiper-slide-bottom{
    height: 324px;
    padding: 0 80px;
  }
  .swiper-slide-bottom-left{
    width: 54%;
    float: left;
    height: 100%;
  }
  .swiper-slide-bottom-left ul{
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    height: 324px;
  }
  .swiper-slide-bottom-left ul li{
    background-color: #281859;
    width: 80%;
    height: 50px;
    line-height: 50px;
    padding: 0 10px;
    color: #8983D7;
    opacity: 0;
    transform: translateY(60px);
    -webkit-transform: translateY(60px);
  }
  .swiper-slide-bottom-left ul li:nth-of-type(1){
    transition: all 0.5s cubic-bezier(.5, -.01, 0, 1.005);
    -webkit-transition: all 0.5s cubic-bezier(.5, -.01, 0, 1.005);
  }
  .swiper-slide-bottom-left ul li:nth-of-type(2){
    transition: all 0.7s cubic-bezier(.5, -.01, 0, 1.005);
    -webkit-transition: all 0.7s cubic-bezier(.5, -.01, 0, 1.005);
  }
  .swiper-slide-bottom-left ul li:nth-of-type(3){
    transition: all 0.9s cubic-bezier(.5, -.01, 0, 1.005);
    -webkit-transition: all 0.9s cubic-bezier(.5, -.01, 0, 1.005);
  }
  .swiper-slide-bottom-left ul li:nth-of-type(4){
    transition: all 1.1s cubic-bezier(.5, -.01, 0, 1.005);
    -webkit-transition: all 1.1s cubic-bezier(.5, -.01, 0, 1.005);
  }
  .swiper-slide-bottom-left ul li:nth-of-type(5){
    transition: all 1.3s cubic-bezier(.5, -.01, 0, 1.005);
    -webkit-transition: all 1.3s cubic-bezier(.5, -.01, 0, 1.005);
  }
  .swiper-slide-bottom-left ul li p:nth-of-type(1){
    float: left;
  }
  .swiper-slide-bottom-left ul li p:nth-of-type(2){
    float: right;
  }
  .swiper-slide-bottom-right{
    width: 46%;
    float: left;
    height: 100%;
  }
  .legal-records-container-bottom-right-img{
    width: 483px;
    height: 320px;
  }
  .legal-records-container-bottom-right-img img{
    width: 100%;
    height: 100%;
  }
  .legal-records-container-bottom{
    width: 100%;
    height: 96px;
    background: url("../assets/images/genuine/legal_container_bottom.png");
  }
  /*全球顶级唱片公司*/
  .partners{
    height: 540px;
    width: 100%;
    background-color:#06062A ;
    padding-top: 50px;
  }
  .partners .partners-header{
    height: 100px;line-height: 100px;
  }
  .partners .partners-header h2{
    text-align: center;
    color: #ffffff;
    font-size: 26px;
    font-weight: 500;
  }
  .partners-content{
    margin: 30px auto 0;
    width: 1200px;
  }
  .partners-content ul{
    display: block;
    overflow: hidden;
  }
  .partners-content ul li{
    float: left;
    width: 254px;
    height: 134px;
    margin: 0 60px 66px 0;
    list-style: none;
  }
  .partners-content ul li:nth-of-type(1){
    background: url("../assets/images/genuine/genuine_jingling.png") -581px -186px no-repeat;
  }
  .partners-content ul li:nth-of-type(2){
    width: 256px;
    background: url("../assets/images/genuine/genuine_jingling.png") -896px -186px no-repeat;
  }
  .partners-content ul li:nth-of-type(3){
    width: 255px;
    background: url("../assets/images/genuine/genuine_jingling.png") -1211px -186px no-repeat;
  }
  .partners-content ul li:nth-of-type(4){
    width: 255px;
    background: url("../assets/images/genuine/genuine_jingling.png") -1526px -186px no-repeat;
  }
  .partners-content ul li:nth-of-type(5){
    background: url("../assets/images/genuine/genuine_jingling.png") -581px -385px no-repeat;
  }
  .partners-content ul li:nth-of-type(6){
    background: url("../assets/images/genuine/genuine_jingling.png") -896px -385px no-repeat;
  }
  .partners-content ul li:nth-of-type(7){
    background: url("../assets/images/genuine/genuine_jingling.png") -1211px -385px no-repeat;
  }
  .partners-content ul li:nth-of-type(8){
    background: url("../assets/images/genuine/genuine_jingling.png") -1526px -385px no-repeat;
  }
  .partners-content ul li:nth-of-type(4n){
    margin-right: 0;
  }

  /*精确计费，杜绝浪费*/
  .charging{
    width: 100%;
    height: 750px;
    background-color: #06062E;
  }
  .charging-title h2{
    text-align: center;
    color: #ffffff;
    font-size: 26px;
    font-weight: 500;
  }
  .charging-container{
    width: 1200px;
    height: 580px;
    padding-top: 40px;
    margin: 40px auto 0;
    background: url("../assets/images/genuine/charging_bg.jpg") no-repeat;
    background-size: 100% 100%;
  }
  .charging-container-header{
    width: 500px;
    height: 40px;
    margin: 0 auto 40px;
  }
  .charging_logo{
    float: left;
    width: 184px;
    height: 33px;
    background: url("../assets/images/genuine/quku_logo.png") no-repeat;
    background-size: 100% 100%;
  }
  .charging_header_title{
    float: left;
    margin-left: 100px;
  }
  .charging_header_title p{
    color: #ffffff;
    font-size: 28px;
  }
  .charging-container-body{

  }
  .charging-container-body ul li{
    list-style: none;
    width: 100%;
    text-align: center;
  }
  .charging-container-body ul li:nth-of-type(1) p:nth-of-type(1){
    color: #ffffff;
    width: 160px;
    text-align: center;
  }

  /*卡拉OK证书*/
  .copyright-book{
    padding-top: 50px;
    width: 100%;
    height: 750px;
    background-color: #06062E;
  }
  .copyright-book-header h2{
    text-align: center;
    color: #ffffff;
    font-size: 26px;
    font-weight: 500;
  }
  .copyright-book-container{
    width: 1200px;
    height: 580px;
    margin: 60px auto 0;
    background: url("../assets/images/genuine/copyright_book_bg.png") no-repeat;
    background-size: 100% 100%;
  }
  .copyright-book-container-left{
    width: 40%;float: left;height: 100%;
    position: relative;
  }
  .copyright-book-container-left-img{
    width: 452px;
    height: 580px;
    position: absolute;
    top: 26px;
    left: 32px;
    background: url("../assets/images/genuine/genuine_jingling.png") -18px -592px no-repeat;
  }
  .copyright-book-container-right{
    width: 60%;float: left;height: 100%;
  }
  .copyright-book-container-right-content{
    margin: 200px 0 0 50px;
  }
  .copyright-book-container-right-content h3{
    color: #ffffff;
    font-size: 22px;
    margin-bottom: 20px;
  }
  .copyright-book-container-right-content p{
    color: #ffffff;
  }
  /*鲸选曲库app下载*/
  .app-download{
    padding-top: 50px;
    width: 100%;
    /*height: 750px;*/
    background-color: #06062E;
  }
  .app-download-main{
    padding-top: 50px;
  }
  .app-download-title h2{
    text-align: center;
    color: #ffffff;
    font-size: 26px;
    font-weight: 500;
    padding-bottom: 50px;
  }
  .app-download-top{
    height: 310px;width: 100%;
    background-color: #06062E;
    position: relative;
  }
  .app-download-top-container{
    position: absolute;
    top: calc(50% - 160px);
    left: calc(50% - 600px);
  }
  .app-download-top-img{
    height: 575px;width: 1200px;
    background: url("../assets/images/genuine/app_download.png") no-repeat;
    background-size: 100% 100%;
  }
  .app-download-top-container h2{
    color: #ffffff;
    text-align: center;
    font-size: 24px;
    margin-top: 80px;
  }
  .app-download-top-container .join-button{
    color: #ffffff;
    text-align: center;
    font-size: 16px;
    margin: 80px auto 0 ;
    width:140px;
    height:30px;
    line-height:30px;
    padding: 4px 12px;
    border-radius: 20px;
    cursor: pointer;
    background: -webkit-linear-gradient(left, #DF2BD3 , #5825B0);
    background: -o-linear-gradient(right, #DF2BD3, #5825B0);
    background: -moz-linear-gradient(right, #DF2BD3, #5825B0);
    background: linear-gradient(to right, #DF2BD3 , #5825B0);
  }
  .app-download-bottom{
    height: 680px;
    width: 100%;
    background: url("../assets/images/genuine/entrance.jpg") no-repeat;
    background-size: 100% 100%;
  }
</style>

<template>
    <div class="page">
      <div class="copyright-top">
        <div class="copyright-top-title">
          <div class="copyright-top-title-left"></div>
          <div class="copyright-top-title-right">
            <el-input placeholder="请输入您想查找的歌手名和歌曲名" v-model="input">
              <template slot="append">
                <el-button type="primary" @click='goSearch'>找版权</el-button>
              </template>
            </el-input>
          </div>
        </div>
        <div class="copyright-top-container">
          <div class="copyright-top-container-left">
            <h2>一站式互联网音乐版权</h2>
            <h2>授权平台</h2>
            <div class="copyright-entrances">
              <div class="copyright-entrance">我是版权方</div>
              <div class="ktv-entrance">我是KTV方</div>
            </div>
          </div>
          <div class="copyright-top-container-right">
            <div class="copyright-top-container-right-box" @mouseenter="mouseenter" @mouseleave="mouseleave">
              <swiper class="swiper-container" :options="swiperOption" ref="mySwiper">
                  <swiper-slide class="swiper-slide">
                    <div class="platform-advantage-content-left">

                    </div>
                  </swiper-slide>
                  <swiper-slide class="swiper-slide">
                    <div class="platform-advantage-content-left">

                    </div>
                  </swiper-slide>
                  <swiper-slide class="swiper-slide">
                    <div class="platform-advantage-content-left">

                    </div>
                  </swiper-slide>
                  <div class="swiper-pagination" slot="pagination">
                    <span class="swiper-pagination-bullet"></span>
                    <span class="swiper-pagination-bullet"></span>
                    <span class="swiper-pagination-bullet"></span>
                  </div>
                </swiper>
            </div>
          </div>
        </div>
      </div>
      <div class="copyright-bottom">
        <div class="copyright-bottom-container">
          <ul>
            <li>
              <div class="copyright-bottom-container-img"></div>
              <p>精确计算</p>
            </li>
            <li>
              <div class="copyright-bottom-container-img"></div>
              <p>实时分配</p>
            </li>
            <li>
              <div class="copyright-bottom-container-img"></div>
              <p>海量终端渠道</p>
            </li>
            <li>
              <div class="copyright-bottom-container-img"></div>
              <p>全网营销定制</p>
            </li>
          </ul>
        </div>
      </div>
    </div>
</template>

<script>
  import 'swiper/dist/css/swiper.css'
  import {swiper,swiperSlide} from 'vue-awesome-swiper'
    export default {
        name: "CopyHeader",
        components:{
          swiper,
          swiperSlide
        },
        data() {
          return {
            input: '',
            swiperOption:{
              width:570,
              height:360,
              autoplay:{
                // 触碰后自动切换也不会停止
                disableOnInteraction:false,
                delay: 5000,
                stopOnLastSlide: false
              },
              loop:true,
              pagination: {
                el: '.swiper-pagination',
                type: 'bullets',
                clickable :true
                //type: 'fraction',
                //type : 'progressbar',
                //type : 'custom',
              },
            }
          }
        },
      methods:{
        mouseenter(){
          this.$refs.mySwiper.swiper.autoplay.stop()
        },
        mouseleave(){
          this.$refs.mySwiper.swiper.autoplay.start()
        },
		goSearch(){
			 if(!!!this.input){
			  this.$message({
				message: '请输入需要收搜的内容',
				type: 'error'
			  });
			  return;
			}
		  this.$router.push({name: 'Search1', query:{value: this.input}});
		}
      }
    }
</script>

<style scoped>
  .page{
    height: 640px;
    width: 100%;
    box-shadow: 0px 2px 12px 0px rgba(0,0,0,0.1);
  }
  .copyright-top{
    /*height: 80px;*/
    /*width: 100%;*/
    padding: 0 30px;
    background-color: #EBEDF8;
  }
  .copyright-top-title{
    width: 100%;
    height: 80px;
  }
  .copyright-top-title-left{
    width: 50%;
    float: left;
    height: 80px;
    line-height: 80px;
  }
  .copyright-top-title-right{
    width: 50%;
    float: left;
    height: 80px;
    line-height: 80px;
  }
  .copyright-top-container{
    height: 400px;
    width: 100%;
  }
  .copyright-top-container-left{
    height: 100%;
    width: 50%;
    float: left;
  }
  .copyright-top-container-left h2{
    color: #480606;
    font-size: 36px;
    letter-spacing: 2px;
    margin: 60px 0 0 0;
    font-weight: 600;
  }
  .copyright-top-container-left h2:nth-of-type(2){
    margin-top: 10px;
  }
  .copyright-entrances{
    margin: 40px 0 0 0;
  }
  .copyright-entrances .copyright-entrance{
    width: 90px;
    height: 36px;
    line-height: 36px;
    font-size: 18px;
    padding: 4px 36px;
    border-radius: 8px;
    background-color: #326DF2;
    color: #ffffff;
    float: left;
    cursor: pointer;
    margin-right: 20px;
  }
  .copyright-entrances .ktv-entrance{
    width: 90px;
    height: 36px;
    line-height: 36px;
    font-size: 18px;
    padding: 4px 36px;
    border-radius: 8px;
    background-color: #00B0F9;
    color: #ffffff;
    float: left;
    cursor: pointer;
  }
  .copyright-top-container-right{
    height: 100%;
    width: 50%;
    float: left;
  }
  .copyright-top-container-right-box{
    height: 90%;
    overflow: hidden;
  }
  .platform-advantage-content-left{
    width: 570px;
    height: 320px;
    background: url("../../assets/images/copy_right/ddddd.png") no-repeat;
    background-size: 100% 100%;
  }
  /**/
  .swiper-container{
    overflow: initial;
  }
  .swiper-container-horizontal > .swiper-pagination-bullets{
    bottom: -30px;
  }
  .copyright-bottom{
    height: 160px;
    background-color: #ffffff;
    width: 1200px;
  }
  .copyright-bottom-container{
    height: 100%;
    width: 100%;
  }
  .copyright-bottom-container ul{
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    align-items: center;
  }
  .copyright-bottom-container ul li{
    height: 100px;
    width: 100px;
  }
  .copyright-bottom-container ul li .copyright-bottom-container-img{
    height: 66px;
    width: 64px;
    background: url("../../assets/images/copy_right/copy_right_jingling.png") 0px -95px no-repeat;
    margin: 0 auto 4px;
  }
  .copyright-bottom-container ul li:nth-of-type(2) .copyright-bottom-container-img{
    height: 66px;
    width: 64px;
    background: url("../../assets/images/copy_right/copy_right_jingling.png") -303px -95px no-repeat;
  }
  .copyright-bottom-container ul li:nth-of-type(3) .copyright-bottom-container-img{
    height: 70px;
    width: 64px;
    background: url("../../assets/images/copy_right/copy_right_jingling.png") -593px -94px no-repeat;
  }
  .copyright-bottom-container ul li:nth-of-type(4) .copyright-bottom-container-img{
    height: 66px;
    width: 64px;
    background: url("../../assets/images/copy_right/copy_right_jingling.png") -892px -97px no-repeat;
  }
  .copyright-bottom-container ul li p{
    text-align: center;
    font-size: 16px;
  }
</style>
<style>
 .copyright-top-container-right-box .swiper-container .swiper-pagination .swiper-pagination-bullet {
    width: 12px;
    height: 12px;
    margin: 0 4px !important;
  }
</style>

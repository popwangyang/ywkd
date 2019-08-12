<template>
    <div class="box">
      <main>
        <div class="main-header">
          <div class="main-header-container-title">
            <h2>智慧娱乐</h2>
            <h3>重新定义KTV内容娱乐</h3>
            <p>打造丰富的鲸唱蔚蓝智慧娱乐</p>
          </div>
          <div class="main-header-content-container">
            <div class="main-header-content-container-left">
              <h2>更丰富的鲸唱蔚蓝</h2>
              <h2>智慧娱乐</h2>
              <p>聚合优质内容，满足消费者的多元化娱乐需求</p>
            </div>
            <div class="main-header-content-container-right">
              <div class="main-header-content-container-right-left">
                <ul>
                  <li>
                    <div class="main-header-content-container-right-img"></div>
                    <h3>私人影院</h3>
                    <p>打造强势二级私人影院</p>
                  </li>
                  <li>
                    <div class="main-header-content-container-right-img"></div>
                    <h3>体育赛事直播</h3>
                    <p>将世界杯酒吧场景带回KTV</p>
                  </li>
                </ul>
              </div>
              <div class="main-header-content-container-right-right">
                <ul>
                  <li>
                    <div class="main-header-content-container-right-img"></div>
                    <h3>演唱会直播</h3>
                    <p>高清直播明星演唱会，拥抱粉丝经济</p>
                  </li>
                  <li>
                    <div class="main-header-content-container-right-img"></div>
                    <h3>聚乐博彩</h3>
                    <p>跑马、赛车、体彩、福彩</p>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        <div class="entertainment-container">
          <section>
            <div class="entertainment-container-content-left">
              <div class="entertainment-container-content-left-img"></div>
            </div>
            <div class="entertainment-container-content-right">
              <div class="entertainment-container-content-right-img">
                <h2>更好玩的场景化游戏体验</h2>
                <p>互动游戏，挖掘KTV场景全新娱乐方式</p>
              </div>
            </div>
          </section>
          <section>
            <div class="entertainment-container-content-left">
              <div class="entertainment-container-content-left-img">
                <h2>充值送礼</h2>
                <p>互动送礼，聚乐社交，打通点唱、PK、送礼场景</p>
              </div>
            </div>
            <div class="entertainment-container-content-right">
              <div class="entertainment-container-content-right-img"></div>
            </div>
          </section>
          <section>
            <div class="entertainment-container-content-left">
              <div class="entertainment-container-content-left-img"></div>
            </div>
            <div class="entertainment-container-content-right">
              <div class="entertainment-container-content-right-img">
                <h2>巨好玩 KTV娱乐新坐标</h2>
                <p>巨好玩，鲸唱蔚蓝活动赛事入口</p>
              </div>
            </div>
          </section>
          <section>
            <div class="entertainment-container-content-left">
              <div class="entertainment-container-content-left-img">
                <h2>麦霸大赛</h2>
                <p>平台赛事、门店赛事，赛事活动让K歌体验更刺激</p>
              </div>
            </div>
            <div class="entertainment-container-content-right">
              <div class="entertainment-container-content-right-img"></div>
            </div>
          </section>
        </div>
      </main>
    </div>
</template>

<script>
    export default {
        name: "entertainment"
    }
</script>

<style scoped>
  main{
    padding-top: 60px;
    background-color: #06062A;
  }
  .main-header{
    width: 100%;
    height: 742px;
    background: url("../assets/images/entertainment/entertainment_01.jpg") no-repeat;
    background-size: cover;
    position: relative;
  }
  .main-header-container-title{
    width: 1200px;
    height: auto;
    margin: 0 auto;
    text-align: center;
    padding-top: 96px;
  }
  .main-header-container-title h2{
    color: #ffffff;
    font-size: 36px;
    margin: 0 auto 20px;
    text-align: center;
  }
  .main-header-container-title h3{
    color: #ffffff;
    font-size: 30px;
    margin: 0 auto 10px;
    text-align: center;
  }
  .main-header-container-title p{
    color: #ffffff;
    font-size: 16px;
    margin: 0 auto 10px;
    text-align: center;
  }
  .main-header-content-container{
    position: absolute;
    width: 1200px;
    height: 620px;
    left: calc(50% - 600px);
    bottom: -310px;
    background: url("../assets/images/entertainment/entertainment_02.jpg") 0 -2px no-repeat;
  }
  .main-header-content-container-left{
    width: 46%;
    height: 100%;
    float: left;
  }
  .main-header-content-container-left h2{
    font-size: 26px;
    color: #ffffff;
  }
  .main-header-content-container-left h2:nth-of-type(1){
    padding-top: 120px;
    margin: 0 0 10px 50px;
  }
  .main-header-content-container-left h2:nth-of-type(2){
    margin: 0 0 50px 50px;
  }
  .main-header-content-container-left p{
    font-size: 16px;
    color: #98A3B9;
    margin: 0 0 0 50px;
  }

  .main-header-content-container-right{
    width: 54%;
    height: 100%;
    float: left;
  }
  .main-header-content-container-right-left{
    width: 50%;
    height: 100%;
    float: left;
  }
  .main-header-content-container-right-right{
    width: 50%;
    height: 100%;
    float: left;
  }
  .main-header-content-container-right-left ul li{
    width: 285px;
    height: 260px;
    /*margin: 20px 10px 10px 0;*/
  }
  .main-header-content-container-right-left ul li:nth-of-type(1){
    margin: 40px 10px 20px 0;
  }
  .main-header-content-container-right-left ul li:nth-of-type(2){
    margin: 10px 10px 10px 0;
  }
  .main-header-content-container-right-left ul li h3{
    text-align: center;
    color: #ffffff;
    font-size: 20px;
    margin: 14px 0 10px 0 ;
  }
  .main-header-content-container-right-left ul li p{
    text-align: center;
    color: #98A3B9;
    font-size: 14px;
  }
  .main-header-content-container-right-left ul li:nth-of-type(1) .main-header-content-container-right-img{
    width: 285px;
    height: 187px;
    background: url("../assets/images/entertainment/entertainment_jingling.jpg") 0px 0px no-repeat;
  }
  .main-header-content-container-right-left ul li:nth-of-type(2) .main-header-content-container-right-img{
    width: 285px;
    height: 187px;
    background: url("../assets/images/entertainment/entertainment_jingling.jpg") -663px 0px no-repeat;
  }
  .main-header-content-container-right-right ul li{
    width: 285px;
    height: 260px;
    /*margin: 20px 10px 10px 0;*/
  }
  .main-header-content-container-right-right ul li:nth-of-type(1){
    margin: 20px 10px 20px 0;
  }
  .main-header-content-container-right-right ul li:nth-of-type(2){
    margin: 10px 10px 10px 0;
  }
  .main-header-content-container-right-right ul li:nth-of-type(1) .main-header-content-container-right-img{
    width: 285px;
    height: 187px;
    background: url("../assets/images/entertainment/entertainment_jingling.jpg") -331px 0px no-repeat;
  }
  .main-header-content-container-right-right ul li:nth-of-type(2) .main-header-content-container-right-img{
    width: 285px;
    height: 187px;
    background: url("../assets/images/entertainment/entertainment_jingling.jpg") -994px 0px no-repeat;
  }
  .main-header-content-container-right-right ul li h3{
    text-align: center;
    color: #ffffff;
    font-size: 20px;
    margin: 14px 0 10px 0;
  }
  .main-header-content-container-right-right ul li p{
    text-align: center;
    color: #98A3B9;
    font-size: 14px;
  }
  /**/
  .entertainment-container{
    width: 1200px;
    margin: 0 auto;
    padding: 390px 0 80px;
  }
  .entertainment-container section:nth-of-type(1){
    height: 390px;
    width: 1200px;
  }
  .entertainment-container section:nth-of-type(1) .entertainment-container-content-left{
    width: 50%;
    float: left;
    height: 100%;
  }
  .entertainment-container section:nth-of-type(1) .entertainment-container-content-left-img{
    width: 570px;
    height: 360px;
    background: url("../assets/images/entertainment/entertainment_jingling.jpg") 0px -225px no-repeat;
  }
  .entertainment-container section:nth-of-type(1) .entertainment-container-content-right{
    width: 50%;
    float: left;
    height: 100%;
    position: relative;
  }
  .entertainment-container section:nth-of-type(1) .entertainment-container-content-right-img{
    width: 500px;
    height: 320px;
    background: url("../assets/images/entertainment/entertainment_bg_01.png") no-repeat;
    background-size: 100% 100%;
    position: absolute;
    left: 0;
    bottom: 0;
  }
  .entertainment-container section:nth-of-type(1) .entertainment-container-content-right-img h2{
    font-size: 26px;
    color: #ffffff;
    margin: 0 0 20px 30px;
    padding-top: 94px;
  }
  .entertainment-container section:nth-of-type(1) .entertainment-container-content-right-img p{
    font-size: 16px;
    color: #98A3B9;
    margin-left: 30px;
  }
  .entertainment-container section:nth-of-type(2){
    height: 390px;
    width: 1200px;
    margin-top: 40px;
  }
  .entertainment-container section:nth-of-type(2) .entertainment-container-content-left{
    width: 50%;
    float: left;
    height: 100%;
  }
  .entertainment-container section:nth-of-type(2) .entertainment-container-content-left-img{
    width: 500px;
    height: 320px;
    background: url("../assets/images/entertainment/entertainment_bg_02.png") no-repeat;
    background-size: 100% 100%;
  }
  .entertainment-container section:nth-of-type(2) .entertainment-container-content-left-img h2{
    font-size: 26px;
    color: #ffffff;
    margin: 0 0 20px 40px;
    padding-top: 150px;
  }
  .entertainment-container section:nth-of-type(2) .entertainment-container-content-left-img p{
    font-size: 16px;
    color: #98A3B9;
    margin-left: 40px;
  }
  .entertainment-container section:nth-of-type(2) .entertainment-container-content-right{
    width: 50%;
    float: left;
    height: 100%;
  }
  .entertainment-container section:nth-of-type(2) .entertainment-container-content-right-img{
    width: 570px;
    height: 360px;
    background: url("../assets/images/entertainment/entertainment_jingling.jpg") -600px -225px no-repeat;
    margin-top: 30px;
  }
  .entertainment-container section:nth-of-type(3){
    height: 390px;
    width: 1200px;
    margin-top: 30px;
  }
  .entertainment-container section:nth-of-type(3) .entertainment-container-content-left{
    width: 50%;
    float: left;
    height: 100%;
    position: relative;
  }
  .entertainment-container section:nth-of-type(3) .entertainment-container-content-left-img{
    width: 570px;
    height: 360px;
    background: url("../assets/images/entertainment/entertainment_jingling.jpg") 0px -622px no-repeat;
    position: absolute;
    left: 0;
    bottom: 0;
  }
  .entertainment-container section:nth-of-type(3) .entertainment-container-content-right{
    width: 50%;
    float: left;
    height: 100%;
    position: relative;
  }
  .entertainment-container section:nth-of-type(3) .entertainment-container-content-right-img{
    width: 500px;
    height: 320px;
    background: url("../assets/images/entertainment/entertainment_bg_01.png") no-repeat;
    background-size: 100% 100%;
    position: absolute;
    left: 0;
    bottom: 0;
  }
  .entertainment-container section:nth-of-type(3) .entertainment-container-content-right-img h2{
    font-size: 26px;
    color: #ffffff;
    margin: 0 0 20px 30px;
    padding-top: 94px;
  }
  .entertainment-container section:nth-of-type(3) .entertainment-container-content-right-img p{
    font-size: 16px;
    color: #98A3B9;
    margin-left: 30px;
  }
  .entertainment-container section:nth-of-type(4){
    height: 390px;
    width: 1200px;
    margin-top: 40px;
  }
  .entertainment-container section:nth-of-type(4) .entertainment-container-content-left{
    width: 50%;
    float: left;
    height: 100%;
  }
  .entertainment-container section:nth-of-type(4) .entertainment-container-content-left-img{
    width: 500px;
    height: 320px;
    background: url("../assets/images/entertainment/entertainment_bg_02.png") no-repeat;
    background-size: 100% 100%;
  }
  .entertainment-container section:nth-of-type(4) .entertainment-container-content-left-img h2{
    font-size: 26px;
    color: #ffffff;
    margin: 0 0 20px 40px;
    padding-top: 150px;
  }
  .entertainment-container section:nth-of-type(4) .entertainment-container-content-left-img p{
    font-size: 16px;
    color: #98A3B9;
    margin-left: 40px;
  }
  .entertainment-container section:nth-of-type(4) .entertainment-container-content-right{
    width: 50%;
    float: left;
    height: 100%;
  }
  .entertainment-container section:nth-of-type(4) .entertainment-container-content-right-img{
    width: 570px;
    height: 360px;
    background: url("../assets/images/entertainment/entertainment_jingling.jpg") -600px -622px no-repeat;
    margin-top: 30px;
  }
</style>

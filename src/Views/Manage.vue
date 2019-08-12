<template>
  <div class="box">
    <main>
      <div class="main-header">
        <div class="main-header-container-title">
          <h2>智慧管理</h2>
          <h3>互联网化的VOD 让管理变得简单</h3>
          <p>一站式模块化管理系统</p>
        </div>
        <div class="main-header-img-container"></div>
      </div>
      <!--sing-body-->
      <div class="main-body">
        <div class="main-body-container">
          <div class="main-body-container-title">
            <h2>鲸唱蔚蓝管理系统5大优势</h2>
            <p>简洁，整合，一体化、高效灵活的软件系统</p>
            <div class="main-body-container-title-list">
              <ul>
                <li>
                  <div class="main-body-container-title-list-img"></div>
                  <h3>无本地服务器</h3>
                  <p>省钱、省事、省心</p>
                </li>
                <li>
                  <div class="main-body-container-title-list-img"></div>
                  <h3>夜场模式</h3>
                  <p>完美解决复杂场景</p>
                  <p>的运营管理问题</p>
                </li>
                <li>
                  <div class="main-body-container-title-list-img"></div>
                  <h3>移动管理</h3>
                  <p>监控管理更高效</p>
                </li>
                <li>
                  <div class="main-body-container-title-list-img"></div>
                  <h3>安装使用简单</h3>
                  <p>培训支持，人性化</p>
                  <p>产品设计</p>
                </li>
                <li>
                  <div class="main-body-container-title-list-img"></div>
                  <h3>模块化功能定制</h3>
                  <p>更懂场所实际需求</p>
                </li>
              </ul>
            </div>
          </div>
          <div class="main-body-supermarket">
            <div class="main-body-supermarket-img">
              <h2>在线超市模块</h2>
              <p>扫码互联，线上下单</p>
            </div>
          </div>
        </div>
      </div>
      <div class="orders">
        <div class="orders-container">
          <h2>订单及会员管理模块</h2>
          <p>扫码互联，线上一站式服务</p>
          <div class="order-container-list">
            <ul>
              <li>
                <h3>在线预订</h3>
                <p>鲸唱公众号在线预订包房</p>
                <p>包房扫码购买套餐开房</p>
              </li>
              <li>
                <h3>移动支付</h3>
                <p>支付宝、微信支付,电子会员卡,团</p>
                <p>购订单提高收银效率杜绝财务管理</p>
                <p>漏洞</p>
              </li>
              <li>
                <h3>在线预订</h3>
                <p>在线会员营销系统扫码入</p>
                <p>会员优惠券营销会员卡值</p>
                <p>赠送手机寄取酒水</p>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div class="remote-control">
        <div class="remote-control-container">
          <h2>手机远程管理</h2>
          <p>营业报表，数据分析，意见管理，服务评价，员工绩效，手机远程监控</p>
          <div class="remote-control-container-list">
            <ul>
              <li>
                <p>老板远程监控</p>
              </li>
              <li>
                <p>移动可视化管理</p>
              </li>
              <li>
                <p>营销决策支持</p>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </main>
  </div>
</template>

<script>
    export default {
        name: "Manage"
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
    background: url("../assets/images/manage/manage_01.jpg") no-repeat;
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
  .main-header-img-container{
    position: absolute;
    width: 1270px;
    height: 707px;
    left: calc(50% - 635px);
    bottom: -350px;
    background: url("../assets/images/manage/video.png") no-repeat;
    background-size: 100% 100%;
  }
  .main-body{
    width: 100%;
    padding-top: 400px;
  }
  .main-body-container{
    width: 1200px;
    margin: 0 auto;
  }
  .main-body-container-title{

  }
  .main-body-container-title>h2{
    color: #ffffff;
    font-size: 26px;
    text-align: center;
    margin: 0 0 30px 0;
  }
  .main-body-container-title>p{
    color: #98A3B9;
    font-size: 17px;
    text-align: center;
    margin: 0 0 30px 0;
  }
  .main-body-container-title-list{
    width: 1200px;
    height: 300px;
  }
  .main-body-container-title-list ul li{
    height: 280px;
    width: 228px;
    margin: 0 15px 0 0;
    float: left;
    background: -webkit-linear-gradient(left, #242764 , #13153C);
    background: -o-linear-gradient(right, #242764, #13153C);
    background: -moz-linear-gradient(right, #242764, #13153C);
    background: linear-gradient(to bottom, #242764 , #13153C);
  }
  .main-body-container-title-list ul li:nth-of-type(5){
    margin-right: 0;
  }
  .main-body-container-title-list ul li h3{
    text-align: center;
    margin: 30px 0 16px;
    color: #ffffff;
    font-size: 22px;
  }
  .main-body-container-title-list ul li p{
    text-align: center;
    margin: 0 0 4px;
    color: #98A3B9;
    font-size: 14px;
  }
  .main-body-container-title-list ul li:nth-of-type(1) .main-body-container-title-list-img{
    width: 59px;
    height: 59px;
    margin: 60px auto 16px;
    background: url("../assets/images/manage/manage_jingling.png") 0 0 no-repeat;
  }
  .main-body-container-title-list ul li:nth-of-type(2) .main-body-container-title-list-img{
    width: 62px;
    height: 58px;
    margin: 60px auto 16px;
    background: url("../assets/images/manage/manage_jingling.png") -245px -6px no-repeat;
  }
  .main-body-container-title-list ul li:nth-of-type(3) .main-body-container-title-list-img{
    width: 52px;
    height: 59px;
    margin: 60px auto 16px;
    background: url("../assets/images/manage/manage_jingling.png") -496px -1px no-repeat;
  }
  .main-body-container-title-list ul li:nth-of-type(4) .main-body-container-title-list-img{
    width: 56px;
    height: 59px;
    margin: 60px auto 16px;
    background: url("../assets/images/manage/manage_jingling.png") -733px -1px no-repeat;
  }
  .main-body-container-title-list ul li:nth-of-type(5) .main-body-container-title-list-img{
    width: 59px;
    height: 59px;
    margin: 60px auto 16px;
    background: url("../assets/images/manage/manage_jingling.png") -980px -1px no-repeat;
  }
  .main-body-supermarket{
    width: 1200px;
    height: 958px;
    margin-top: 50px;
    padding-bottom: 60px;
  }
  .main-body-supermarket-img{
    width: 1200px;
    height: 958px;
    background: url(../assets/images/manage/supermarket.png) -20px -12px no-repeat;
  }
  .main-body-supermarket-img h2{
    text-align: center;
    font-size: 26px;
    color: #FFFFFF;
    margin-bottom: 20px;
    padding-top: 100px;
  }
  .main-body-supermarket-img p{
    text-align: center;
    font-size: 16px;
    color: #98A3B9;
  }
  main .orders{
    width: 100%;
    height: 681px;
    background: url(../assets/images/manage/order.png) no-repeat;
    background-size: 100% 100%;
    min-width: 1600px;
  }
  main .orders-container{
    width: 1200px;
    height: 600px;
    margin: 0 auto;
  }
  main .orders-container h2{
    font-size: 26px;
    color: #FFFFFF;
    margin: 0 0 40px 0;
    padding-top: 136px;
  }
  main .orders-container p{
    font-size: 16px;
    color: #98A3B9;
  }
  main .order-container-list{
    margin-top: 72px;
  }
  main .order-container-list ul li{
    width: 240px;
    height: 168px;
    float: left;
    margin-right: 20px;
    background: -webkit-linear-gradient(left, #242764 , #13153C);
    background: -o-linear-gradient(right, #242764, #13153C);
    background: -moz-linear-gradient(right, #242764, #13153C);
    background: linear-gradient(to bottom, #242764 , #13153C);
  }
  .order-container-list ul li h3{
    color: #FFFFFF;
    font-size: 20px;
    text-align: center;
    margin: 50px 0 10px 0;
  }
  main .order-container-list ul li p{
    color: #98A3B9;
    font-size: 14px;
    text-align: center;
    /*margin: 20p 0 10px 0;*/
  }
  .remote-control{
    width: 100%;
    height: 480px;
    background-color: #06062A;
    padding-top: 90px;
  }
  .remote-control-container{
    width: 1200px;
    height: 480px;
    margin: 0 auto;
  }
  .remote-control-container h2{
    font-size: 26px;
    color: #FFFFFF;
    margin: 0 0 30px;
    text-align: center;
  }
  .remote-control-container p{
    font-size: 14px;
    color: #98A3B9;
    margin: 0 0 50px;
    text-align: center;
  }
  .remote-control-container-list{

  }
  .remote-control-container-list ul li p{
    text-align: left;
    margin: 20px 0 0 20px;
  }
  .remote-control-container-list ul li{
    float: left;
    width: 385px;
    height: 245px;
    margin-right: 22px;
  }
  .remote-control-container-list ul li:nth-of-type(1){
    background: url(../assets/images/manage/remote_control_01.png) 0 0 no-repeat;
  }
  .remote-control-container-list ul li:nth-of-type(2){
    background: url(../assets/images/manage/remote_control_02.png) 0 65px no-repeat;
  }
  .remote-control-container-list ul li:nth-of-type(3){
    background: url(../assets/images/manage/remote_control_03.png) 0 0 no-repeat;
    margin-right: 0;
  }
</style>

<template>
  <div id="app">
    <div class="nav">
      <div class="navBox">
        <div class="navContent">
          <div :class="logoBox">
            <!--<img src="./assets/images/header_logo.png"/>-->
          </div>
          <div class="menu colorfff">
            <ul>
              <li v-for="m in titleList" :class="{cur:m==is_active}">
                <a @click="goIndex(m)">{{m}}</a>
                <div class="underline">
                  <div class="triangleUp"></div>
                </div>
              </li>
            </ul>
          </div>
          <div class="clear"></div>
        </div>
      </div>
    </div>
    <router-view/>
    <div class='footBgc'>
      <div class='centerWidth'>
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
            <img src="./assets/images/ywkd_footer.png" alt="娱网科道">
          </section>
          <div class='clear'></div>
        </div>
      </div>
      <div class='centerWidth'>
        <div class='footRight'>
          Copyright &copy;2016-2017  Yuwang Inc All Rights Reserved 娱网科道 版权所有
        </div>
        <div class='clear'></div>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'App',
    data(){
      return{
        titleList:['首页','鲸选曲库','鲸易版权','鲸唱蔚蓝','帮助中心',],
        is_active:'首页',
        logoBox:'logoBox'
      }
    },
    methods:{
      goIndex(val){
        switch (val) {
          case '首页':
            this.$router.push('Home');
            this.logoBox = 'logoBox';
          break;
          case '鲸选曲库':
            this.$router.push('Genuine');
            this.logoBox = 'logoBox';
            break;
          case '鲸易版权':
            this.$router.push('CopyRight');
            this.logoBox = 'copy-right-logo';
            break;
          case '鲸唱蔚蓝':
            this.$router.push('Clouds');
            this.logoBox = 'logoBox';
            break;
          case '帮助中心':
            this.$router.push('Home');
            this.logoBox = 'logoBox';
            break;
        }
        this.is_active = val;
      },
    },
    created(){
      switch (this.$route.name) {
        case 'Home':
          this.is_active = '首页';
          this.logoBox = 'logoBox';
          break;
        case 'Genuine':
          this.is_active = '鲸选曲库';
          this.logoBox = 'logoBox';
          break;
        case 'CopyRight':
          this.is_active = '鲸易版权';
          this.logoBox = 'copy-right-logo';
          break;
        case 'Clouds':
          this.is_active = '鲸唱蔚蓝';
          this.logoBox = 'logoBox';
          break;
        case 'Help':
          this.is_active = '帮助中心';
          this.logoBox = 'logoBox';
          break;
      }
    }
  }
</script>

<style scoped>
  /*导航*/
  .nav{
    position: fixed;
    z-index: 1000;
    background-color: #000000;
    height: 60px;
    width: 100%;
    box-shadow: 0 0 5px #000000;
  }
  .navBox{
    position: absolute;
    left: 0;
    right: 0;
    height: 60px;
    width: 100%;
  }
  .navContent{
    width: 1200px;
    height: 60px;
    margin: 0 auto;
  }
  .logoBox{
    float: left;
    margin-top: 14px;
    height: 32px;
    width: 139px;
    background: url("./assets/images/header_logo.png") no-repeat;
    background-size: 100% 100%;
  }
  .copy-right-logo{
    float: left;
    margin-top: 14px;
    height: 30px;
    width: 160px;
    /*background: url("./assets/images/copy_right/copy_right_jingling.png") -15px 0px no-repeat;*/
    background: url("./assets/images/copy_right/header_logo.png") no-repeat;
    background-size: 100% 100%;
  }
  .menu{
    float: right;
    width: 600px;
    overflow: hidden;
    height: 60px;
    line-height: 60px;
  }
  .menu ul{
    list-style: none;
  }
  .menu ul li{
    width: 100px;
    float: left;
    margin: 0 10px;
    position: relative;
  }
  .menu ul li a{
    text-decoration: none;
    color: #DCDCDC;
    font-size: 16px;
    width: 100%;
    text-align: center;
    display: block;
    font-family: "微软雅黑";
    cursor: pointer;
  }
  .menu ul li.cur a{
    color: #da581d;
  }
  .menu ul li.cur .underline{
    display: block;
  }
  .underline{
    display: none;
    position: absolute;
    top: 57px;
    width: 100px;
    height: 3px;
    background-color: #da581d;
  }
  .menu ul li:hover .underline{
    display: block;
  }
  .triangleUp{
    position: absolute;
    top:-4px;
    left: 45px;
    width: 0;
    height: 0;
    border-left: 5px solid transparent;
    border-right: 5px solid transparent;
    border-bottom: 5px solid #da581d;
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
<style>
  *{
    margin: 0;
    padding: 0;
  }
  body,html{
    margin: 0;
    padding: 0;
    height: 100%;
    color:#555;
    font-size:14px;
    font-family: "微软雅黑";
    background:#06062A;
  }
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  height: 100%;
  background-color: #06062A;
}
body,div,dl,dt,dd,ul,ol,li,h1,h2,h3,h4,h5,h6,pre,code,form,fieldset,legend,input,button,textarea,p,blockquote,th,td { margin:0; padding:0; }
  html{min-width: 1200px;overflow-y: scroll;}
  td,th,caption { font-size:14px; }
  h1, h2, h3, h4, h5, h6 { font-weight:normal; font-size:100%; }
  address, caption, cite, code, dfn, em, strong, th, var { font-style:normal; font-weight:normal;}
  a { color:#555; text-decoration:none; }
  a:hover { text-decoration:underline; }
  img { border:none; }
  ol,ul,li { list-style:none; }
  input, textarea, select, button { font:14px Verdana,Helvetica,Arial,sans-serif; }
  table { border-collapse:collapse; }
</style>

<template>
  <div id="app">
    <div class="nav">
      <div class="navBox">
        <div class="navContent">
          <div :class="logoBox">
            <!--<img src="./assets/images/header_logo.png"/>-->
          </div>
          <div class="menu colorfff">
            <ul v-if="$route.name != 'Help'">
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
    <Footer :state='logoBox'></Footer>
  </div>
</template>

<script>
  import Footer from '@/components/footer'
  export default {
    name: 'App',
    components: {
      Footer,
    },
    data(){
      return{
        titleList:['首页','K乐宝','鲸易版权','鲸唱蔚蓝','加入我们','授权歌单'],
        is_active:'首页',
        logoBox:'logoBox',
        footerState: 0,
      }
    },
    watch: {
      $route(newValue, oldValue) {
       switch (newValue.name) {
           case 'Home':
             this.is_active = '首页';
             this.logoBox = 'logoBox';
             break;
           case 'Genuine':
             this.is_active = 'K乐宝';
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
           case 'Us':
             this.is_active = '加入我们';
             this.logoBox = 'logoBox';
             break;
           case 'SongList':
            this.is_active = '授权歌单';
            this.logoBox = 'logoBox';
             break;
						case 'Search':
						this.logoBox = 'logoBox';
							break;
						case 'Search1':
						this.logoBox = 'copy-right-logo';
							break;
         }
      }
    },
    methods:{
      goIndex(val){
        switch (val) {
          case '首页':
            this.$router.push('Home');
            this.logoBox = 'logoBox';
          break;
          case 'K乐宝':
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
          case '加入我们':
            this.$router.push('Us');
            this.logoBox = 'logoBox';
            break;
          case '授权歌单':
            this.$router.push('SongList');
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
          this.is_active = 'K乐宝';
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
        case 'Us':
          this.is_active = '加入我们';
          this.logoBox = 'logoBox';
          break;
        case 'SongList':
         this.is_active = '授权歌单';
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
    width: 730px;
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

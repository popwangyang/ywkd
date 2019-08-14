<template>
  <div class="klb">
    <div class="content">
      <span class="title">
        <div>
          <img src="../../assets/images/logo_klb.png" alt="">
          <span class="shuxian"></span>
          <span class="head">
            音乐内容正版化一站式服务方案
          </span>
        </div>
        <div>打造正版内容新生态，联动娱乐共赢新未来</div>
      </span>
      <div class="downBtn">下载软件</div>
       <Box2></Box2>
       <Box3></Box3>
    </div>
  </div>
</template>

<script>
  import Box2 from './components/Box2'
  import Box3 from './components/Box3'
  export default{
    components: {
      Box2,
      Box3
    },
    data(){
      return{

      }
    },

  }
</script>

<style scoped="scoped" lang="less">
  .klb{
    height: 1700px;
    background: url('../../assets/images/klb/bg.png');
    background-repeat: no-repeat;
    background-size: cover;
    padding-top: 60px;

	.content{
		width: 1176px;
		height: 100%;
		margin: 0 auto;
    overflow: hidden;
    display: flex;
    flex-direction: column;
    align-items: center;
   .box2{
      margin-top: 120px;
      width: 100%;
      height: 250px;
    }
	.title{
	  display: block;
    width: 700px;
    height: 120px;
    margin: 84px auto 20px;
    &>div{
      height: 60px;
      display: flex;
      align-items: center;
      justify-content: center;
     }
     div:nth-child(2){
       font-size:28px;
        font-family:PingFangSC-Light;
        font-weight:300;
        color:rgba(255,255,255,1);
        line-height: 60px;
     }
     .shuxian{
       display: block;
       height: 30px;
       width: 0px;
       border-left: 2px solid white;
       margin: 0 20px;
     }
     .head{
       font-size:36px;
       font-family:PingFangSC-Regular;
       font-weight:400;
       color:rgba(255,255,255,1);
       line-height: 60px;
     }
	  }
    .downBtn{
      width:170px;
      height:40px;
      background:linear-gradient(90deg,rgba(225,43,211,1) 0%,rgba(98,38,193,1) 100%);
      border-radius:30px;
      color: white;
      text-align: center;
      line-height: 40px;
      font-size: 16px;
      cursor: pointer;
    }
    }
  }
</style>

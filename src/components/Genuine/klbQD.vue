<template>
  <div class="klbQDBox">
    <div class="content">
      <div class="header">
        <span class="logo"></span>
        <span class="shuxian"></span>
        <span class="title"></span>
      </div>
      <div class="body">
        <img :src="item.imgUrl" alt="" v-for="(item, index) in imgArr" :key='index'>
      </div>
      <span class="btn">查看授权清单</span>
    </div>
  </div>
</template>

<script>
  export default{
    data(){
      return{
        imgArr:[
          {
            imgUrl:require('@/assets/images/klb/klbqd1.png'),
          },
          {
            imgUrl:require('@/assets/images/klb/klbqd2.png'),
          },
          {
            imgUrl:require('@/assets/images/klb/klbqd3.png'),
          },
          {
            imgUrl:require('@/assets/images/klb/klbqd4.png'),
          }
        ]
      }
    }
  }
</script>

<style scoped="scoped" lang="less">
  @import '../../assets/css/common.less';
  @h:60px; // 标体的高度；
  .klbQDBox{
    width: 100%;
    height: 540px;
    background: url('../../assets/images/klb/qingdanBG.png') no-repeat;
    .content{
      .content;
      .header{
        margin-top: 80px;
        .flexBox(100%, @h);
        .logo{
          .box(216px, @h);
          background: url("../../assets/images/klb/nlogo.png") no-repeat;
          background-size: contain;
          background-position: right top;
        }
        .shuxian{
          display: block;
          width: 0;
          height: 70%;
          border-left: 2px solid white;
          margin: 0 30px;
        }
        .title{
          .box(480px, @h);
           background: url("../../assets/images/klb/nlogoTitle.png") no-repeat;
           background-size: contain;
        }
      }
      .body{
        margin-top: 50px;
        .box(100%, 180px);
        display: flex;
        justify-content: space-between;
        img{
          height: 180px;
        }
      }
      span[class='btn']{
        cursor: pointer;
        .fontStyle(16px, white, 400);
        .flexBox(200px, 50px);
        background: linear-gradient(90deg,rgba(0,220,255,1) 0%,rgba(0,126,255,1) 100%);
        border-radius: 25px;
        margin-top: 50px;
      }
    }
  }
</style>

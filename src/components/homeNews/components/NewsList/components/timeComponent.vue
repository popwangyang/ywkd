<template>
  <div class="box">
    <span class="listItem">
      <div class="time">
        <div>
          <div class="yue">{{item.mounth}}</div>
          <div class="nan">{{item.year}}</div>
        </div>
        <b></b>
      </div>
      <span class="item homeNewsItem" v-for="(item1, index) in item.list" :key="index">
         <span class="img">
           <img :src="item1.imgUrl" alt="">
         </span>
         <span>
           <span class="title">
             {{item1.title}}
           </span>
           <span class="content">
            {{item1.content}}
           </span>
         </span>
      </span>
    </span>
  </div>
</template>

<script>
  export default{
    props:{
      item: Object,
    }
  }
</script>

<style scoped="scoped">
  .box{
    width: 100%;
    display: flex;
    justify-content: flex-end;
  }
  .listItem{
    display: block;
    border-left:1px solid #828691;
    width: 650px;
    padding-left: 26px;
    position: relative;
  }
  .time{
    position: absolute;
    left: -130px;
    top: 0;
  }
  .time b{
    display: block;
    content: '';
    width: 16px;
    height: 16px;
    border-radius: 50%;
    background: rgba(255,255,255,1);
    position: absolute;
    right: -48px;
    top: 24px;
  }
  .time .yue{
    font-size:40px;
    font-family:PingFangSC-Semibold;
    font-weight:600;
    color:rgba(255,255,255,1);
  }
  .time .nan{
    font-size:20px;
    font-family:PingFangSC-Light;
    font-weight:300;
    color:rgba(255,255,255,1);
    text-align: right;
  }
  .item{
    margin-bottom: 20px;
  }
  .item{
    display: flex;
    width: 100%;
    height: 130px;
  }
  .item img{
    display: block;
    width:190px;
    height:130px;
    background: skyblue;
    margin-right: 40px;
  }
  .item .text{

  }
  .title{
    display: block;
    height: 40px;
    font-size: 20px;
    color: rgba(255,255,255,1);
    line-height: 40px;
  }
  .content{
    display: block;
    height: 90px;
    font-size:14px;
    color:rgba(130,134,145,1);

  }
</style>

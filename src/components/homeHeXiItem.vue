<template>
  <div class="box">
    <span>
      <img :src="item.imgUrl" alt="">
    </span>
    <span>
      <span class="text">{{item.text}} </span>
      <slot></slot>
    </span>
  </div>
</template>
<script>
  export default{
    props: {
      item: Object,
    }
  }
</script>
<style scoped="scoped">
  .box{
    background:transparent;
    width: 100%;
    height: 100%;
    border-radius:8px;
    display: flex;
    box-sizing: border-box;
    padding: 28px;
  }
  .box>span:nth-child(1){
    display: flex;
    width: 200px;
    height: 100%;
    /* background: orchid; */
    align-items: center;
    justify-content: flex-start;
  }
  img{
    width: 161px;
  }
  .box>span:nth-child(2){
    flex: 1;
    height: 100%;
    position: relative;
  }
  .text{
    font-size:14px;
    font-family:PingFangSC-Semibold;
    font-weight:600;
    color:rgba(255,255,255,1);
    line-height:20px
  }

</style>

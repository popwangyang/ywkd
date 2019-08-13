<template>
  <div>
    <img :src="firstUrl" alt="" v-if="index == 1">
    <img :src="secondUrl" alt="" v-else-if="index == 2">
    <img :src="thirdUrl" alt="" v-else-if="index == 3">
    <span v-else class="span">
      {{index}}
    </span>
  </div>
</template>

<script>
  export default{
    props:{
      index:{
        type: Number,
        default:6
      }
    },
    data(){
      return{
        firstUrl: require("@/assets/images/face/first.png"),
        secondUrl: require("@/assets/images/face/second.png"),
        thirdUrl: require("@/assets/images/face/third.png")
      }
    }
  }
</script>

<style scoped="scoped">
  .span{
    display: block;
    text-align: center;
    line-height: 18px;
    width:18px;
    height:18px;
    background:rgba(103,203,244,1);
    border-radius:2px;
    margin: 8px 8px;
    color: rgba(255, 255, 255, 1);
    font-weight: 400;
  }
  img{
    width: 24px;
    height: 20px;
    margin: 6px 5px;
  }
</style>

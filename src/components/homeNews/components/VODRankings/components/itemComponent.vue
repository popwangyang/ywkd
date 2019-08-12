<template>
  <div class="ItemBox">
    <span>
        <Head :index="1"/>
        <span class="name">石楠</span>
    </span>
    <span>1.235</span>
  </div>
</template>

<script>
  import Head from './head.vue'
  export default{
    components:{
      Head,
    },
    props:{

    }
  }
</script>

<style scoped="scoped">
  .ItemBox{
    display: flex;
    justify-content: space-between;
    height: 60px;
    align-items: center;
    border-bottom: 1px solid #035282;
  }
  .ItemBox>span:nth-child(1){
    display: flex;
    align-items: center;

  }
  .ItemBox>span:nth-child(2){
    width: 82px;
    display: flex;
    align-items: center;
    font-size:16px;
    font-family:DINAlternate-Bold;
    font-weight:bold;
    color:rgba(255,255,255,1);
    line-height:14px;
  }
  .name{
    margin-left: 10px;
    font-size:14px;
    font-family:PingFangSC-Regular;
    font-weight:400;
    color:rgba(255,255,255,1);
  }
</style>

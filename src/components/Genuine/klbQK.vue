<template>
  <div class="KLBQK">
    <div class="content">
      <div class="header">庞大曲库体量，主流欢唱音乐</div>
      <Box4></Box4>
    </div>
  </div>
</template>

<script>
  import Box4 from './components/Box4.vue'
  export default{
    components: {
      Box4
    },
  }
</script>

<style scoped="scoped" lang="less">
  .KLBQK{
    width: 100%;
    height: 750px;
    .content{
      width: 1176px;
      height: 100%;
      margin: 0 auto;
      overflow: hidden;
      display: flex;
      flex-direction: column;
      align-items: center;
      .header{
        margin-top: 60px;
        font-size:36px;
        font-family:PingFangSC-Semibold;
        font-weight:400;
        color:rgba(255,255,255,1);
        margin-bottom: 60px;
      }
    }
  }
</style>

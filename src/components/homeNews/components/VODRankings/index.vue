<template>
  <div class="VODRankBox">
    <div class="header">点播排行榜</div>
    <div class="content">
      <Item></Item>
      <Item></Item>
      <Item></Item>
      <Item></Item>
      <Item></Item>
      <Item></Item>
    </div>
  </div>
</template>

<script>
  import Item from './components/itemComponent'
  export default{
    components:{
      Item
    }
  }
</script>

<style scoped="scoped">
  .VODRankBox{
    border-radius:3px;
  }
  .header{
    color: #FFFFFF;
    font-weight:600;
    text-align: center;
    line-height: 56px;
    width:330px;
    height:56px;
    background:linear-gradient(90deg,rgba(0,220,255,1) 0%,rgba(0,126,255,1) 100%);
  }
  .content{
    height: 700px;
    background:#051d46;
    box-sizing: border-box;
    padding: 20px 10px;
  }
</style>

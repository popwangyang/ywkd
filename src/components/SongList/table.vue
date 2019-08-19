<template>
  <div class="tableBox">
    <div class="head">
      <span>序列</span>
      <span>曲目</span>
      <span>歌手</span>
    </div>
			<div v-for="(item, index) in data" :key='index'>
				<span>{{item.index}}</span>
				<span>{{item.name}}</span>
				<span>{{item.singer}}</span>
			</div>
  </div>
</template>

<script>
    export default {
      props: {
        data: {
          type: Array
        },
      }
    }
</script>
<style scoped="scoped" lang="less">
  @import '../../assets/css/common.less';
  .tableBox{
    background: #2b317c;
    padding-bottom: 40px;
    &>div{
      height: 60px;
      display: flex;
      background: #2b317c;
      border-bottom: 1px solid #414c8f;
      color: white;
      &>span{
        display: flex;
        align-items: center;
        height: 100%;
        box-sizing: border-box;
      }
      &>span:nth-child(1){
        width: 30%;
        padding-left: 50px;
      }
      &>span:nth-child(2){
        width: 40%;
        padding-left: 10px;
      }
       &>span:nth-child(3){
        width: 30%;
      }
    }
    &>div[class='head']{
       background: #455798;
       color: white;
    }
    &>div:nth-last-child{
      border-bottom: none;
    }
  }

</style>

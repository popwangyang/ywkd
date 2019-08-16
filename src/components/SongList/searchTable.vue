<template>
  <div class="searchTableBox">
    <div class="title">
      <div>曲目</div>
      <div>歌手</div>
      <div>唱片公司</div>
    </div>
    <div v-for="(item, index) in data" :key='index'>
       <div>{{item.name}}</div>
      <div>{{item.singer}}</div>
      <div>{{item.componeny}}</div>
    </div>
  </div>
</template>

<script>
  export default{
    props: {
      data: {
        type: Array,
      },
    },
  }
</script>

<style scoped="scoped" lang="less">
  @import '../../assets/css/common.less';
  .searchTableBox{
    .box(100%, 100%);
    &>div{
      .flexBox(100%, 60px);
      border-bottom: 1px solid #475293;
      div{
        flex: 1;
        .flexBox(100%, 100%);
        box-sizing: border-box;
        padding-left: 100px;
        justify-content: flex-start;
        color: white;
      }
    }
    &>div[class='title']{
      background: #266896;
      border-bottom: none;
    }
  }
</style>

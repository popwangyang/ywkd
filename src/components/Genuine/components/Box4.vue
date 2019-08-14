<template>
  <div class="klbQKBox4">
    <div>
      <div class="item" v-for="(item, index) in arr" :key="index" :class="['item', index == num ? 'itemHover' : '' ]" @mouseenter="change(index)">{{item.name}}
       <span class="tuoyuan"></span>
      </div>
    </div>
    <div>
      <div class="xgsd" v-if="num == 0">
        <span>目前曲库包含歌曲1000首，详情见<a>曲库清单</a></span>
      </div>
      <div class="dzbg" v-if="num == 1"></div>
      <div class="znklb" v-if="num == 2"></div>
      <div class='yjgx' v-if="num == 3"></div>
    </div>
  </div>
</template>

<script>
  import dataList from '@/assets/js/klbQK'
  export default{
    data() {
      return {
        arr: dataList.dataList,
        num: 0,
      }
    },
    methods: {
      change(num) {
        this.num = num;
      }
    },
  }
</script>

<style scoped="scoped" lang="less">
  .klbQKBox4{
    width: 100%;
    height: 500px;
    display: flex;
    background: url('../../../assets/images/KLBQK/bg1.png') no-repeat;
    &>div:nth-child(1){
      width: 230px;
      height: 100%;
      background:linear-gradient(90deg, #0000003b 0%, rgba(0, 0, 0, 0.09) 100%);;
      .item{
        width: 100%;
        height: 90px;
        font-size:18px;
        font-family:PingFangSC-Regular;
        font-weight:400;
        color:rgba(255,255,255,1);
        text-align: center;
        line-height: 100px;
        position: relative;
        cursor: pointer;
        .tuoyuan{
          display: block;
          background: url('../../../assets/images/KLBQK/tuoyuan.png') no-repeat;
          background-position: 0% 7.5px;
          width: 5px;
          height: 100%;
          position: absolute;
          right: -5px;
          top: 0px;
          transform: scale(0);
          transition: all 0.2s ease-in-out;
        }
      }
      .itemHover{
        background:linear-gradient(90deg, #00c7ee66 0%, rgba(0, 201, 240, 0.09) 100%);
        color: #67CBF4;
        .tuoyuan{
          transform: scale(1);
        }
      }
    }
    &>div:nth-child(2){
      flex: 1;
      &>div{
        width: 100%;
        height: 100%;
      }
      .xgsd{
        background: url('../../../assets/images/KLBQK/xgsd.png') no-repeat;
        background-position: 12px 60px;
        position: relative;
        span{
          position: absolute;
          bottom: 40px;
          display: block;
          width: 100%;
          text-align: center;
          color: #e7e7ea;
          font-size: 14px;
          a{
            color: #00bcd4;
            margin-left: 10px;
            text-decoration: underline;
            cursor: pointer;
          }
        }
      }
      .dzbg{
        background: url('../../../assets/images/KLBQK/dzbg.png') no-repeat;
        background-position: 30px 40px;
      }
      .znklb{
        background: url('../../../assets/images/KLBQK/znklb.png') no-repeat;
        background-position: 20px 40px;
      }
      .yjgx{
         background: url('../../../assets/images/KLBQK/yjgx.png') no-repeat;
        background-position: 20px 40px;
      }
    }
  }
</style>

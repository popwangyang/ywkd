<template>
  <div class="box">
    <div>
      <div class="listItem" v-for="(item, index) in selectList" :key="index">
        <p>{{item}}</p>
      </div>
    </div>
    <div>
      <div class="item" v-for="(item, index) in dataList" :key="index" @mouseover="change(index)">
        <span class="img">
          <img :src="item.isSelect ? item.slecetImgUrl : item.imgUrl">
        </span>
        <span class="text">{{item.text}}</span>
        <span :class="['bottom', {showBottom: item.isSelect}]"><i></i></span>
      </div>
    </div>
  </div>
</template>

<script>
  import klbData from '@/assets/js/klb.js'
  export default{
    data(){
      return{
        selectList:[],
        dataList:klbData.dataList,
      }
    },
    methods:{
      change(num){
        this.dataList.map((item, index) => {
          if(index == num){
            item.isSelect = true;
            this.selectList = item.list;
          }else{
            item.isSelect = false;
          }
        })
      }
    },
    mounted() {
      this.change(0)
    }
  }

</script>

<style scoped="scoped" lang="less">
  .box{
    margin-top: 120px;
    width: 100%;
    height: 250px;
    &>div:nth-child(1){
      height: 70px;
      background: #37025670;
      display: flex;
      align-items: center;
      justify-content: flex-start;
      .listItem{
        width: 33%;
        height: 100%;
        box-sizing: border-box;
        padding: 15px 20px 0px;
        p{
          color: white;
        }
        p:before{
          content: "";
          display: inline-block;
          border-radius: 50%;
          margin-right: 10px;
          width: 8px;
          height: 8px;
          background: #C129CE;
        }

      }
    }
     &>div:nth-child(2){
      height: 180px;
      background: #370256;
      display: flex;
      align-items: center;
      justify-content: space-around;
      .item{
        width: 16%;
        cursor: pointer;
        height: 100%;
        display: flex;
        flex-direction: column;
        align-items: center;
        position: relative;
        .img{
          display: flex;
          align-items: center;
          justify-content: center;
          width: 88px;
          height: 95px;
        }
        img{
          width: 60px;
        }
        .text{
          margin-top: 10px;
          color: white;
          width: 120px;
          text-align: center;
        }
        .bottom{
          position: absolute;
          display: flex;
          height: 4px;
          width: 100%;
          background: #C129CE;
          bottom: 0;
          left: 0;
          transition: all 0.2s;
          transform: scale(0, 0);
          i{
            display: block;
            position: absolute;
            top: -6px;
            margin-left: 50%;
            left: -6px;
            width: 0;
            height: 0;
            border-bottom: 6px solid #C129CE;
            border-left: 6px solid transparent;
            border-right: 6px solid transparent; /**/
          }
        }
        .showBottom{
          transform: scale(1, 1);
        }
      }
    }
  }
</style>

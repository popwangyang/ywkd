<template>
  <div class="KLBbox3">
    <div class="header">卡拉OK内容正版服务合作方案</div>
    <div class="list">
      <div  v-for="(item, index) in arr" :key="index" class="listItem" ref="listItem" @mouseenter="change(index)">
        <span class="icon">
          <img :src="item.iconUrl" >
        </span>
        <span class="title">{{item.title}}</span>
        <span class="text">{{item.text}}</span>
      </div>
    </div>
    <div class="content">
      <img :src="contentUrl" >
    </div>
  </div>
</template>

<script>
  import dataList from '@/assets/js/klb.js'
  export default{
    data(){
      return{
        contentUrl: null,
        arr: dataList.okdataList
      }
    },
    methods: {
      change(num) {
       this.$refs.listItem.map((item, index) => {
         if(num == index){
            this.$refs.listItem[index].classList.add(`listItemHover${index}`)
            this.contentUrl = this.arr.filter((item, index) => index == num )[0].content;
         }else{
            this.$refs.listItem[index].classList.remove(`listItemHover${index}`)
         }
       })
      }
    },
    mounted() {

      this.change(0);
    }
  }
</script>

<style scoped="scoped" lang="less">
  .KLBbox3{
    width: 100%;
    overflow: hidden;
    .header{
      text-align: center;
      margin-top: 67px;
      font-size: 36px;
      font-family: PingFangSC-Regular;
      font-weight: 400;
      color: #ffffff;
      margin-bottom: 47px;
      overflow: hidden;
    }
    .list{
       display: flex;
        height: 240px;
       .listItem+.listItem{
         margin-left:30px;
       }
      .listItem{
        height: 220px;
        width: 370px;
        background: yellow;
        background-size: contain;
        transform: scale(0.9);
        transition-duration: 0.5s;
        transition-property: all;
        position: relative;
        display: flex;
        flex-direction: column;
        align-items: center;
        cursor: pointer;
        .icon{
          display: block;
          width: 50px;
          height: 50px;
          margin-top: 30px;
          margin-bottom: 20px;
          img{
            width: 100%;
            height: 100%;
          }
        }
        .title{
          font-size:20px;
          font-family:PingFangSC-Semibold;
          font-weight:600;
          color:rgba(255,255,255,1);
          margin-bottom: 10px;
        }
        .text{
          display: block;
          width: 250px;
          text-align: center;
          font-size:14px;
          font-family:PingFangSC-Regular;
          font-weight:400;
          color: white;
        }
       }
       .listItem:nth-child(1){
         background: url('../../../assets/images/klb/saoma-bj.png') no-repeat;
       }
       .listItemHover0{
         background: url('../../../assets/images/klb/saoma-bj1.png') no-repeat !important;
         height: 240px;
         transform: scale(1)
       }
       .listItem:nth-child(2){
         background: url('../../../assets/images/klb/jici-bj.png') no-repeat;
       }
       .listItemHover1{
         background: url('../../../assets/images/klb/jici-bj1.png') no-repeat !important;
         height: 240px;
         transform: scale(1)
       }
       .listItem:nth-child(3){
         background: url('../../../assets/images/klb/nianfei-img.png') no-repeat;
       }
        .listItemHover2{
         background: url('../../../assets/images/klb/nianfei-img1.png') no-repeat !important;
         height: 240px;
         transform: scale(1)
       }
    }
    .content{
      margin-top: 60px;
      width: 100%;
      img{
        width: 100%;
        height: 100%;
      }
    }
  }
</style>

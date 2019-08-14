<template>
  <div class="singListBox">
    <div class="content">
      <div>
        <div class="contentLeft">
          <div :class="['item', num == index ? 'isHover': '']" v-for="(item, index) in dataList" :key='index' @mouseenter="hover(index)">
            <span class="icon">“</span>
            <span class="text">{{item.title}}</span>
            <span class="sanjiao"></span>
          </div>
        </div>
      </div>
      <div>
        <img :src="imgSrc" alt="">
      </div>
    </div>
  </div>
</template>

<script>
  export default{
    data() {
      return {
        num: 0,
        imgSrc:null,
        dataList:[
          {
            title:'轻松点歌 比传统 VOD 更快更方便',
            contentUrl:require('@/assets/images/sing/pic1.png')
          },
          {
            title:'鲸唱个人歌单',
            contentUrl:require('@/assets/images/sing/pic2.png')
          },
          {
            title:'智能推荐曲目',
            contentUrl:require('@/assets/images/sing/pic3.png')
          }
        ]
      }
    },
    methods: {
      hover(num) {
        this.num = num;
        this.imgSrc = this.dataList.filter((item, index) => num == index)[0].contentUrl;
      }
    },
    mounted(){
      this.hover(0);
    }
  }
</script>

<style scoped="scoped" lang="less">
  @import '../../assets/css/common.less';
  .singListBox{
    .box(100%, 600px);
    .content{
      .content;
      display: flex;
      justify-content: space-between;
      flex-direction: row;
      &>div:nth-child(1){
       .box(450px, 100%);
       .contentLeft{
         width: 370px;
         height: 100%;
         .item{
           .box(340px, 120px, linear-gradient(90deg,rgba(0,220,255,1) 0%,rgba(0,126,255,1) 100%));
            padding:10px 20px;
            position: relative;
            margin-bottom: 50px;
            cursor: pointer;
            transform-origin: 0 0;
            transition: all 0.5s ease-in-out;
            .icon{
              .fontStyle(120px, white, 400);
                display: inline-block;
                width: 50px;
                height: 60px;
                overflow: hidden;
            }
            .text{
              .fontStyle(16px, white, 100);
            }
            .sanjiao{
              display:block;
              width: 0;
              height: 0;
              border-left: 10px solid #007eff;
              border-top: 10px solid transparent;
              border-bottom: 10px solid transparent;
              position: absolute;
              right:-10px;
              top: 50%;
              margin-top: -5px;
            }
         }
         .isHover{
           transform: scale(1.08);
         }
       }
      }
      &>div:nth-child(2){
       flex: 1;
        height: 80%;
        align-self: flex-start;
        margin-left: 20px;
        img{
          height: 100%;
        }
      }
    }
  }
</style>

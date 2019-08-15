<template>
  <div class="box">
    <span></span>
    <span>
      <span class="item" v-for="(item, index) in list">
        <Item :item='item'>
          <span class="button" @click="goPage(index)">了解详情</span>
        </Item>
      </span>
    </span>
  </div>
</template>

<script>
  import Item from './homeHeXiItem.vue'
  import homeListData from '../assets/js/homeHeXi.js'
  export default{
    components:{
      Item
    },
    data(){
      return{
        list: homeListData.list,
      }
    },
    methods: {
      goPage(index) {
        switch (index){
          case 0:
          this.$router.push({name: 'Genuine'})
           break;
          case 1:
           this.$router.push({name: 'CopyRight'})
            break;
          case 2:
           this.$router.push({name: 'Clouds'})
            break;
        }
      }
    },

  }
</script>

<style scoped="scoped">
  .box{
    height: 100%;
    position: relative;
  }
  .box > span{
    position: absolute;
    display: block;
  }
  .box>span:nth-child(1){
    width:599px;
    height:738px;
    background:url('../assets/images/face/bg.png') no-repeat;
    opacity:0.8993000000000001;
    top: 106px;
    right: 0;
    z-index: 1;
  }
  .box>span:nth-child(2){
    z-index: 2;
    width: 100%;
    height: 100%;
    padding-left: 40px;
    display: flex;
    flex-direction: column;
    justify-content: center;
  }
  .item{
    display: block;
    width:800px;
    height:190px;
    background:linear-gradient(90deg,rgba(36,39,100,0.86) 0%,rgba(19,21,60,1) 100%);
    box-shadow:0px 6px 20px 0px rgba(0,0,0,0.4);
    border-radius:8px;
    transition: all 0.2s;
  }
  .item+.item{
    margin-top: 30px;
  }
  .item:hover{
    background:linear-gradient(41deg,rgba(102,38,194,1) 0%,rgba(221,43,211,1) 100%);
    transform: scale(1.05, 1.05);
  }
  .item:hover .button {
    background:linear-gradient(90deg,rgba(0,220,255,1) 0%,rgba(0,126,255,1) 100%);
  }
  .button{
    display: flex;
    width:96px;
    height:32px;
    background:linear-gradient(90deg,rgba(225,43,211,1) 0%,rgba(98,38,193,1) 100%);
    border-radius:16px;
    align-items: center;
    justify-content: center;
    color: #FFFFFF;
    position: absolute;
    left: 0;
    bottom: 0px;
    cursor: pointer;
  }
</style>

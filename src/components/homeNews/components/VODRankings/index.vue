<template>
  <div class="VODRankBox">
    <div class="header">点播排行榜</div>
    <div class="content">
      <div class="title">
        <span>歌曲名称</span>
        <span>点播次数</span>
      </div>
			<el-carousel trigger="click" height="600px" arrow='never' indicator-position="outside">
				<el-carousel-item v-for="num in 3" :key="num">
					<span v-for="(item, index) in dataList.slice((num - 1) * 10, num * 10)" :key="index">
						<Item :data="item"></Item>
					</span>
				</el-carousel-item>
      </el-carousel>
    </div>
  </div>
</template>

<script>
  import Item from './components/itemComponent'
  import dataList from '@/assets/js/homeHeXi.js'
  import Load from './components/loadComponent.vue'
  export default{
    components:{
      Item,
      Load
    },
    data(){
      return{
        dataList: dataList.VODData,
        loadStatues: '1',
      }
    },
    methods:{
      getData(){}
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
    /* height: 668px; */
    background:#051d46;
    box-sizing: border-box;
    padding: 10px 10px;
    padding-bottom: 20px;
  }
  .title{
    display: flex;
    justify-content: space-between;
    align-items: center;
    height: 40px;
    font-size: 14px;
    color: rgba(255,255,255,1);
    font-weight: 500;
    background:linear-gradient(90deg,rgba(0,220,255,1) 0%,rgba(0,126,255,1) 100%);
  }
  .title>span:nth-child(1){
    margin-left: 14px;
  }
  .title>span:nth-child(2){
    width: 82px;
    display: block;
  }
</style>

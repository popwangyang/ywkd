<template>
  <div class="songListBox">
    <div class="content">
      <div class="box">
        <div class="boxLeft">
          <div>
            <Search @change="searchBtn"/>
          </div>
          <div>
            <div class="tabbar">
              <div class="tabbarItem" v-for="(item, index) in dataList" :key="index" :class="['tabbarItem', index == num ? 'tabbarItemHover':'']" @mouseenter="hover(index)">{{item.name}}</div>
            </div>
            <div class="body">
              <Table />
              <PageList />
            </div>
          </div>
        </div>
        <div class="boxRight">
          <img src="../assets/images/SongList/wts.png" alt="">
          <img src="../assets/images/SongList/ppt.png" alt="">
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import Search from '@/components/SongList/search'
  import Table from '@/components/SongList/table'
  import PageList from '@/components/SongList/pageList'
  export default{
    components: {
      Search,
      Table,
      PageList
    },
    data() {
      return {
        num: 0,
        dataList: [
          {
          name: '英皇娱乐',
        },{
          name: '爱贝克思',
        },{
          name: '丰华唱片',
        },{
          name: '华特音乐',
        }]
      }
    },
    methods: {
      searchBtn(val) {
        console.log(val);
      },
      hover(index){
        console.log(index)
        this.num = index;
      }
    },
  }
</script>

<style scoped="scoped" lang="less">
  @import '../assets/css/common.less';
  @images: '../assets/images/SongList';
  .songListBox{
    .box(100%, 1120px, url('@{images}/bg.png') no-repeat);
    .content{
      .content;
      div[class='box']{
        .box(100%, 950px);
        margin-top: 120px;
        display: flex;
        .boxLeft{
          flex: 1;
          background: #331b68;
          height: 100%;
          &>div:nth-child(1){
            .box(100%, 90px);
            padding-right: 16px;
            display: flex;
            align-items: center;
            justify-content: flex-end;
          }
          &>div:nth-child(2){
            .flexBox(100%, 860px);
            .tabbar{
              .box(200px, 100%, #2a377e);
              .tabbarItem{
                .flexBox(100%, 80px);
                .fontStyle(16px, white, 500);
                cursor: pointer;
                transition: all 0.2s ease-in-out;
              }
              .tabbarItemHover{
                background: linear-gradient(90deg,#06cbf1 0%,#0478f2 100%);
                font-size: 18px;
              }
            }
            .body{
              flex: 1;
              height: 100%;
              width: 100%;
              margin-left: 10px;
            }
          }
        }
        .boxRight{
          .box(390px, 100%);
        }
      }
    }
  }
</style>

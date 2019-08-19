<template>
  <div class="songListBox">
    <div class="content">
      <div class="box">
        <div class="boxLeft">
          <div>
            <div style="width:360px">
              <Search @search='search'/>
            </div>
          </div>
          <div>
            <div class="tabbar">
              <div class="tabbarItem" v-for="(item, index) in dataList" :key="index" :class="['tabbarItem', index == num ? 'tabbarItemHover':'']" @click="hover(index)">{{item.name}}</div>
            </div>
            <div class="body">
              <Table :data="tableData"/>
              <PageList
              @handleSizeChange="handleSizeChange"
              @handleCurrentChange="handleCurrentChange"
              :totle="totle"
              :pageSize="pageSize"
              :pageIndex="pageIndex"/>
            </div>
          </div>
        </div>
        <div class="boxRight">
          <span><img :src="bookUrl" alt="" @click="showPdf"></span>
          <span><img :src="logoUrl" alt=""></span>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import Search from '@/components/SongList/search'
  import Table from '@/components/SongList/table'
  import PageList from '@/components/SongList/pageList'
  import songList from '@/assets/songList.json'
  export default{
    components: {
      Search,
      Table,
      PageList
    },
    data() {
      return {
        totle:0,
        pageSize:10,
        pageIndex:1,
        num: 0,
        logoUrl:'',
        bookUrl:'',
        tableData:[],
        dataList: [
        {
          name: '英皇娱乐',
          bookUrl: require('@/assets/images/SongList/book1.png'),
          logoUrl: require('@/assets/images/SongList/logo1.png'),
        },
        {
          name: '爱贝克思',
          bookUrl: require('@/assets/images/SongList/book2.png'),
          logoUrl: require('@/assets/images/SongList/logo2.png'),
        },
        {
          name: '丰华唱片',
          bookUrl: require('@/assets/images/SongList/book3.png'),
          logoUrl: require('@/assets/images/SongList/logo3.png'),
        },
        {
          name: '华特音乐',
          bookUrl: require('@/assets/images/SongList/book4.png'),
          logoUrl: require('@/assets/images/SongList/logo4.png'),
        }]
      }
    },
    methods: {
      search(val){
         this.$router.push({name: 'Search', query:{value: val}});
      },
      showPdf(){
        let url = this.num+1 +'.pdf';
       window.open('static/pdf/web/viewer.html?file=' + encodeURIComponent(url));
      },
      hover(index){
        this.num = index;
        this.pageSize = 10;
        this.pageIndex = 1;
        this.totle = songList[ this.num].list.length;
        let obj = this.dataList.filter((item, n) =>  n == index)[0];
        this.logoUrl = obj.logoUrl;
        this.bookUrl = obj.bookUrl;
        this.pageSlice();
      },
      pageSlice(){
        let arr = songList[ this.num].list
        let startNum = (this.pageIndex - 1) * this.pageSize;
        let endNum = startNum + this.pageSize;
        this.tableData = arr.slice(startNum, endNum);
      },
      handleCurrentChange(index){
        this.pageIndex = index;
        this.pageSlice();
      },
      handleSizeChange(size){
        this.pageIndex = index;
        this.pageSize = size;
        this.pageSlice();
      }
    },
    mounted(){
      this.hover(0);
	    console.log(songList)
    }
  }
</script>

<style scoped="scoped" lang="less">
  @import '../assets/css/common.less';
  @images: '../assets/images/SongList';
  .songListBox{
    .box(100%, 1060px, url('@{images}/bg.png') no-repeat);
    .content{
      .content;
      div[class='box']{
        .box(100%, 890px);
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
            .flexBox(100%, 800px);
            .tabbar{
              .box(160px, 100%, #2a377e);
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
          span img{
            width: 100%;
            height: 100%;
          }
          &>span:nth-child(1){
            display: block;
            width: 375px;
            height: 550px;
            margin-left: 5px;
            img{
              cursor: pointer;
            }
          }
          &>span:nth-child(2){
            display: block;
            width: 375px;
            height: 335px;
            margin-left: 5px;
            margin-top: 5px;
          }
        }
      }
    }
  }
</style>

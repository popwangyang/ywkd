<template>
  <div class="SearchBox">
    <div class="content">
      <div class="box1">
        <Search :value="value"></Search>
      </div>
      <div class="box2">
        <div>搜索到 <span>{{value}}</span> 相关歌曲</div>
        <Table :data="data"/>
      </div>
    </div>
  </div>
</template>

<script>
  import Search from '@/components/SongList/search.vue'
  import Table from '@/components/SongList/searchTable.vue'
  import dataList from '@/assets/songList.json'
  export default{
    components: {
      Search,
      Table,
    },
    data() {
      return {
        data: [],
        value: ''
      }
    },
    methods: {
      search(value) {
        this.value = value;
        let result = []
        dataList.map(item => {
          let componeny = item.title;
          item.list.map(song => {

            if(song.name == value || song.singer.trim() == value.trim()){
              console.log(song)
              let obj = {
                name: song.name,
                singer: song.singer,
                componeny: componeny
              }
              result.push(obj)
            }
          })
        })
        this.data = result;
      }
    },
    mounted(){
      this.search(this.$route.query.value);
    }
  }
</script>

<style scoped="scoped" lang="less">
  @import '../assets/css/common.less';
  @images: '../assets/images/SongList';
  .SearchBox{
    .box(100%, 800px);
    padding-top: 60px;
    .content{
      .content;
      .box1{
        .box(700px, auto);
        margin: 40px auto 0;
        width: 700px;
      }
      .box2{
        .box(100%, 560px, #033668);
        padding: 20px;
        box-sizing: border-box;
        margin-top: 40px;
        &>div:nth-child(1){
          color: #8B9CC1;
          line-height: 30px;
          margin-bottom: 20px;
          display: inline-block;
          span{
            color: #049eca;
          }
        }
      }
    }
  }
</style>

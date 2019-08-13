<template>
  <div class="homeNews">
    <span>
      <NewsList></NewsList>
    </span>
     <span>
       <VODRankings/>
     </span>
  </div>
</template>

<script>
  import NewsList from './components/NewsList'
  import VODRankings from './components/VODRankings'

  export default{
    components:{
      VODRankings,
      NewsList
    },
    data(){
      return{}
    },
    methods:{

    },
    mounted() {

    }
  }
</script>

<style scoped="scoped">
  .homeNews{
    width: 100%;
    height: 100%;
    display: flex;
  }
  .homeNews>span{
    display: block;
  }
  .homeNews>span:nth-child(1){
    width: 800px;
    height: 100%;
    margin-right: 20px;
  }

  .homeNews>span:nth-child(2){
    width: 330px;
    min-height: 700px;
  }

</style>

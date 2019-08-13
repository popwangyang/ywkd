<template>
  <div>
     <span v-for="(item, index) in dataList" :key="index">
      <Time :item="item" ref="Time"></Time>
    </span>
    <load @change="getData"></load>
  </div>
</template>

<script>
  import Time from './components/timeComponent'
  import load from './components/loadComponent'
  import dataList from '@/assets/js/homeHeXi.js'
  export default{
    components:{
      Time,
      load,
    },
    data(){
      return{
        dataList: dataList.dataList,
        loadStatues: '1'
      }
    },
    methods:{
       getData(){
         this.$router.push({name: 'newDetail'})
      }
    },
    mounted() {
      let box = document.getElementsByClassName('homeNewsItem');
      let span = box[box.length - 1];
      span.setAttribute('style', 'margin-bottom: 0;')
    }
  }
</script>

<style>
</style>

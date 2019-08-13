<template>
  <div>
    <div class="loadBox" v-if="statues == '1'" style="cursor: pointer;" @click="change">
      <div>查看更多</div>
      <div>
        <i class="el-icon-arrow-down"></i>
      </div>
    </div>
    <div class="loadBox" v-if="statues == '2'">
      <i class="el-icon-loading" style="font-size: 30px;"></i>
    </div>
    <div class="loadBox"  v-if="statues == '3'">
      <div>没有更多内容了</div>
    </div>
  </div>
</template>

<script>
  export default{
    props:{
      statues:{
        type:String,
        default: '1'
      }
    },
    methods:{
      change(){
        this.$emit('change')
      }
    }
  }
</script>

<style scoped="scoped">
  .loadBox{
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    color: #757986;
    margin-top: 50px;
  }
</style>

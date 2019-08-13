<template>
  <div class="vodLoadBox">
    <span class="loadBtn" v-if="statues == '1'" @click="change">
      查看更多
    </span>
    <span v-else-if="statues == '2'">
       <i class="el-icon-loading" style="font-size: 30px;"></i>
    </span>
    <span v-else-if="statues == '3'">
      没有更多内容了
    </span>
  </div>
</template>

<script>
  export default{
    props:{
      statues:{
        type: String,
        dafault: '1'
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
  .vodLoadBox{
    height: 120px;
    display: flex;
    align-items: center;
    justify-content: center;
    color:rgba(169,177,191,1);
    font-size:16px;
    font-weight:600;
  }
  .loadBtn{
    display: block;
    text-align: center;
    line-height: 38px;
    cursor: pointer;
    width:202px;
    height:38px;
    border-radius:19px;
    border:1px solid rgba(169,177,191,1);
  }
</style>

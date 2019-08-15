<template>
  <div class="searchBox">
    <input v-model="inputValue" type="text" placeholder="请输入您想查找的歌曲信息" @input="change">
    <i class="el-icon-search"></i>
  </div>
</template>

<script>
  export default{
    data() {
      return {
        inputValue: ''
      }
    },
    methods: {
      change(e) {
        this.$emit('change', this.inputValue);
      }
    },
  }
</script>

<style scoped="scoped" lang="less">
  @import '../../assets/css/common.less';
  .searchBox{
    .flexBox(360px, 40px, #501C85);
    border-radius: 20px;
    justify-content: space-between;
    padding: 0 20px;
    box-sizing: border-box;
    i{
      color: #04C2F1;
      font-size: 20px;
    }
    input{
      background: none;
      border: none;
      outline: none;
      width: 70%;
      caret-color: #f1efef;
      color: white;
    }
  }
</style>

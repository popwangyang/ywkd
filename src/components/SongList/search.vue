<template>
  <div class="searchBox">
    <input v-model="inputValue" type="text" placeholder="请输入您想查找的歌曲信息" @input="change">
    <i class="el-icon-search" @click="search"></i>
  </div>
</template>

<script>
  export default{
    props: {
      value: {
        type: String,
      },
    },
    data() {
      return {
        inputValue: this.value,
      }
    },
		watch: {
			value(newValue, oldValue) {
				this.inputValue = newValue;
			}
		},
    methods: {
      change(e) {
        this.$emit('change', this.inputValue);
      },
      search(){
        if(!!!this.inputValue){
          this.$message({
            message: '请输入需要收搜的内容',
            type: 'error'
          });
          return;
        }
        this.$emit('search',  this.inputValue)
      }
    },
  }
</script>

<style scoped="scoped" lang="less">
  @import '../../assets/css/common.less';
  .searchBox{
    .flexBox(100%, 40px, #501C85);
    border-radius: 20px;
    justify-content: space-between;
    padding: 0 20px;
    box-sizing: border-box;
    i{
      color: #04C2F1;
      font-size: 20px;
      cursor: pointer;
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

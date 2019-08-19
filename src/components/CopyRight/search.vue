<template>
  <div class="searchBox">
    <input v-model="inputValue" type="text" placeholder="请输入您想查找歌曲或者歌手" @input="change">
    <span class="btn">找版权</span>
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
        this.$router.push({name: 'Search', query:{value: this.inputValue}});
      }
    },
  }
</script>

<style scoped="scoped" lang="less">
  @import '../../assets/css/common.less';
  .searchBox{
    .flexBox(100%, 40px);
    border-radius: 5px;
    justify-content: space-between;
    padding-left: 20px;
    box-sizing: border-box;
	border: 2px solid #326DF2;
    .btn{
		.flexBox(80px, 100%, #326DF2);
		.fontStyle(14px, white, 100);
		 cursor:pointer;
	}
    input{
      background: none;
      border: none;
      outline: none;
      width: 70%;
      caret-color: black;
      color: black;
    }
  }
</style>

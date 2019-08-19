<template>
  <div class="box">
    <div class="content">
    <New/>
    <New/>
    <New/>
    <New/>
    <New/>
    <New/>
	</div>
  </div>
</template>

<script>
  import New from '@/components/newDetail/new'
  export default{
    components: {
      New
    },
    data(){
      return{
        }
    }
  }
</script>

<style scoped="scoped" lang="less">
	@import '../assets/css/common.less';

  .box{
    overflow: hidden;
	.box(100%, 800px, white);
  padding-top: 60px;
	.content{
		.content();
		background: yellow;
    display: flex;
    flex-direction: row;
    align-items: flex-start;
    justify-content: flex-start;
    flex-wrap: wrap;
	}
  }
</style>

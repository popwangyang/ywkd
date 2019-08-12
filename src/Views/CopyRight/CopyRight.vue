<template>
    <div class="box">
      <main>
        <copy-header></copy-header>
        <hit-song></hit-song>
        <charts></charts>
      </main>
    </div>
</template>

<script>
    import CopyHeader from './CopyHeader'
    import HitSong from './HitSong'
    import Charts from './Charts'
    export default {
        name: "CopyRight",
        components:{
          CopyHeader,
          HitSong,
          Charts
        }
    }
</script>

<style scoped>
  .box{
    background-color: #F9FBFF;
  }
  main{
    padding: 86px 0 20px;
    width: 1200px;
    margin: 0 auto;
  }
</style>

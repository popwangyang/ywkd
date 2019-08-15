<template>
  <div class="PageListBox">
    <span>共922条数据</span>
    <span>
      <el-pagination
        @size-change="handleSizeChange"
        @current-change="handleCurrentChange"
        :current-page.sync="currentPage3"
        :page-size="10"
        layout="prev, pager, next, jumper"
        :total="50">
      </el-pagination>
    </span>
  </div>
</template>

<script>
  export default{
    data() {
      return {
        currentPage3: 100,
      }
    },
    methods: {
      handleSizeChange() {

      },
      handleCurrentChange(){

      },
    },
  }
</script>
<style lang="less">
  .PageListBox{
     .el-pager li{
      background: none;
      color: white;
    }
    .el-pagination .btn-prev, .el-pagination .btn-next{
       background: none;
       color: white;
    }
    .el-pagination__jump{
      color: white;
    }
    .el-input__inner{
      background: none;
    }
    .el-pagination button:disabled{
      background: none !important;
    }
  }
</style>
<style scoped="scoped" lang="less">
  .PageListBox{
    display: flex;
    align-items: center;
    justify-content: space-between;
    color: white;
    margin-top: 20px;
  }
</style>

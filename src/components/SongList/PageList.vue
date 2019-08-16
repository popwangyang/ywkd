<template>
  <div class="PageListBox">
    <span>共922条数据</span>
    <span>
      <el-pagination
        @size-change="handleSizeChange"
        @current-change="handleCurrentChange"
        :current-page.sync="page"
        :page-size="pageSize"
        layout="prev, pager, next, jumper"
        :total="totle">
      </el-pagination>
    </span>
  </div>
</template>

<script>
  export default{
    props: {
      totle: {
        type: Number,
        default: 0,
      },
      pageSize: {
        type: Number,
        default: 10,
      },
      pageIndex: {
        type: Number,
        default: 1,
      }
    },
    data() {
      return {
        page: this.pageIndex
      }
    },
    methods: {
      handleSizeChange(pageSize) {
        this.$emit('handleSizeChange', pageSize);
      },
      handleCurrentChange(pageIndex){
        this.$emit('handleCurrentChange', pageIndex);
      },
    },
  }
</script>
<style lang="less">
  .PageListBox{
     .el-pager li{
      background: none;
      &[class='active']{
        color: red;
      }
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
    .el-pagination{
      color: white;
    }
    .el-pager li.btn-quicknext, .el-pager li.btn-quickprev{
      color: white;
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

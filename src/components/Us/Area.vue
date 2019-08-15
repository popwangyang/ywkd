<template>
  <div class="AreaBox">
    <span>省/市/区</span>
    <div>
      <el-select v-model="search.province_code" placeholder="请选择" clearable @change="changeProvince" @clear="clearProvince">
        <el-option
          v-for="item in provinceList"
          :key="item.value"
          :label="item.label"
          :value="item.value">
        </el-option>
      </el-select>
      <el-select v-model="search.city_code" placeholder="请选择" clearable  @change="changeCity" @clear="clearCity">
        <el-option
          v-for="item in cityList"
          :key="item.value"
          :label="item.label"
          :value="item.value">
        </el-option>
      </el-select>
      <el-select v-model="search.county_code" placeholder="请选择" clearable  @change="changeCounty">
        <el-option
          v-for="item in countyList"
          :key="item.value"
          :label="item.label"
          :value="item.value">
        </el-option>
      </el-select>
    </div>
  </div>
</template>

<script>
  import areaData from '@/assets/data.json'
  import { getMapData } from '@/libs/util'
  export default{
    data() {
      return {
        provinceList: [],
        cityList: [],
        countyList: [],
        search: {
          province_code: '',
          city_code: '',
          county_code: ''
        }
      }
    },
    methods: {
      //  清除市按钮
      clearCity() {
        this.search.city_code = ''
        this.search.county_code = ''
        this.$emit('message', this.search)
      },
      //  清除省按钮
      clearProvince() {
        this.search.province_code = ''
        this.search.city_code = ''
        this.search.county_code = ''
        this.$emit('message', this.search)
      },
      //  选择省的数据
      changeProvince (item) {
        this.search.province_code = item
        this.cityList = []
        this.search.city_code = ''
        this.search.county_code = ''
        console.log(item, 'code码')
        this.cityAjax(item)
        this.$emit('message', this.search)
      },
      // 选择市的数据
      changeCity (val) {
        this.search.city_code = val
        this.search.county_code = ''
        this.countyList = []
        this.countyAjax(val)
        this.$emit('message', this.search)
      },
      // 改变县
      changeCounty (val) {
        this.search.county_code = val
        this.$emit('message', this.search)
      },
       // 省请求
      provinceAjax () {
        this.provinceList = this.provinceList = getMapData(null);
        this.cityList = []
        this.countyList = []
      },
      cityAjax (num) {
       this.cityList = getMapData(num)
       this.countyList = []
      },
      // 区县请求
      countyAjax (num) {
        this.countyList = getMapData(num)
      }
    },
    mounted(){
       //  获取省市县的数据
      this.provinceAjax()
    }
  }
</script>
<style>
  .AreaBox .el-select .el-input input{
    background: #00000085;
    border: none;
    width: 180px;
  }
</style>

<style scoped="scoped" lang="less">
   @import '../../assets/css/common.less';
  .AreaBox{
    width: 100%;
    height: 90px;
    &>span{
      .fontStyle(14px, white, 100);
      margin-top: 40px;
      margin-bottom: 20px;
      display: inline-block;
    }
    &>div{
      display: flex;
      justify-content: space-between;
    }
  }

</style>

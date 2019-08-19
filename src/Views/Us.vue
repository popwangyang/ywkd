<template>
  <div class="USBox">
    <div class="content">
      <div class="title">即刻加入，成为K乐宝正版娱乐商家</div>
      <div class="body">
        <div>
          <span>扫码关注“鲸唱音乐”尽享正版音乐服务</span>
        </div>
        <div>
          <div class="title1">请填写信息</div>
          <AreaSelect @message='change'></AreaSelect>
          <div class="form">
            <el-input  placeholder="请输入场所名称" v-model="ktv_name"></el-input>
            <el-input  placeholder="请输入联系人" v-model="contact_username"></el-input>
            <el-input  placeholder="请输入联系方式" v-model="contact_phone"></el-input>
          </div>
        </div>
      </div>
      <div class="btn" @click="btn">立即申请</div>
    </div>
  </div>
</template>

<script>
  import axios from 'axios'
  import AreaSelect from '@/components/Us/Area'
  import { getPlaceName } from '@/libs/util'
  export default{
    components: {
      AreaSelect,
    },
    data() {
      return {
        ktv_name: '',
        contact_username: '',
        contact_phone: '',
        code: {
          province_code:'',
          city_code: '',
          county_code: '',
        }
      }
    },
    methods: {
      change(code) {
        this.code = code;
      },
      btn(){

        let code = this.code;
        let flage = true;
        var regu =/^(1)[3|4|5|7|8][0-9]{9}$/;

        let send_data = {
          province: getPlaceName(code.province_code),
          city: getPlaceName(code.city_code),
          county: getPlaceName(code.county_code),
          contact_phone: this.contact_phone,
          contact_username: this.contact_username,
          ktv_name: this.ktv_name,
        }
         for(let key in send_data){
           console.log()
          if(send_data[key] == ''){
            flage = false;
          }
        }
        if(!flage){
          this.$message.error('请填写完整信息');
          return;
        }
        console.log(regu.test(send_data.contact_phone))
        if(!regu.test(send_data.contact_phone)){
           this.$message.error('手机号格式不正确');
          return;
        }
        axios.post('https://pre.bjywkd.com/ktv/joiningmerchants', send_data).then(res => {

        }).catch(err => {
          this.$message.error('提交失败！');
        })
      }
    },
  }
</script>
<style>
  .USBox .form .el-input input{
    background: #00000085;
    border: none;
    margin-bottom: 30px;

  }
</style>
<style scoped="scoped" lang="less">
  @import '../assets/css/common.less';
  .USBox{
    .box(100%, 870px, url('../assets/images/us/bg.png') no-repeat);
    background-size: cover;
    overflow: hidden;
    .content{
      .content;
      padding-top: 60px;
      div[class='title']{
        .fontStyle(32px, white, 100);
        margin-top: 90px;
      }
      div[class='body']{
        .flexBox(100%, 420px);
        margin-top: 90px;
        &>div:nth-child(1){
         .box(420px, 420px, url('../assets/images/us/erVma.png') no-repeat);
         span{
           .fontStyle(16px, white, 100);
           .box(100%, auto);
           padding: 0 100px;
           text-align: center;
           margin-top: 30px;
         }
        }
        &>div:nth-child(2){
          flex: 1;
          background: #211f1fad;
          height: 100%;
          box-sizing: border-box;
          padding: 28px 30px;
          .title1{
            .fontStyle(16px, white, 100);
          }
          .form{
            .box(100%, 200px);
            margin-top: 60px;
          }
        }
      }
      &>div:last-child{
        .flexBox(330px, 60px, linear-gradient(180deg,rgba(0,212,255,1) 0%,rgba(0,126,255,1) 100%));
        box-shadow:0px 4px 6px 0px rgba(0,0,0,0.22);
        border-radius:30px;
        margin-top: 50px;
        .fontStyle(18px, white, 100);
        cursor: pointer;
      }
    }
  }
</style>

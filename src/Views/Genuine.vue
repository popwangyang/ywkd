<template>
    <div class="box">
      <div class="main">
        <Klb/>
        <KlbQK/>
        <KlbQD/>
        <div class="klbBox5">
          <span class="header">精确计次 优于传统</span>
          <span class="body"></span>
        </div>
        <div class="klbBox6">
          <div class="content">
            <span class="header">卡拉OK版权音乐曲库授权证书</span>
            <span class="body"></span>
            <span class="header" style="margin-bottom: 20px;">软件下载</span>
            <span class="nav">K乐宝同步新歌更新、高清正版曲库、批量便捷操作、高效曲库管理</span>
            <span class="download">
              <span>
                <span class="icon"></span>
                <span class="title">
                  K乐宝内容分发平台1.0.1客户端
                </span>
                <span class="btn">下载K乐宝</span>
              </span>
              <span>
               <span class="icon"></span>
               <span class="title">
                 K乐宝内容分发平台1.0.1使用手册
               </span>
               <span class="btn" style="background: #FDC424;">下载手册</span>
             </span>
            </span>
          </div>
        </div>
      </div>
    </div>
</template>

<script>
    import Klb from '@/components/Genuine/Klb.vue'
    import KlbQK from '@/components/Genuine/klbQk.vue'
    import KlbQD from '@/components/Genuine/klbQD.vue'
    import {post,baseJs,token} from "../api/api";
    export default {
      name: "genuine",
      components: {
        Klb,
        KlbQK,
        KlbQD,
      },
    }
</script>

<style scoped lang="less">
  @import '../assets/css/common.less';
   html,body{
    /*overflow: hidden;*/
  }
  .klbBox5{
    width: 100%;
    height: 800px;
    overflow: hidden;
    background: url('../assets/images/klb/klbBox4BG.png') no-repeat;
    span[class='header']{
      .box(100%, auto);
      margin-top: 70px;
      text-align: center;
      .fontStyle(36px, white, 400);
      margin-bottom: 80px;
    }
    span[class='body']{
      margin: 0 auto;
      .box(1170px, 530px, yellow);
    }
  }
  .klbBox6{
    .box(100%, 1200px);
    .content{
      .content;
      .download{
        .flexBox(100%, 160px);

        margin-top: 20px;
        &>span{
          .box(160px, 160px);
            background:rgba(255,255,255,1);
            box-shadow:0px 2px 14px 3px rgba(174,174,174,0.2);
            border-radius:4px;
            display:flex;
            align-items: center;
            padding: 0 20px;
            flex-direction: column;
          .icon{
            .box(50px, 50px, url('../assets/images/klb/download1.png') no-repeat);
            border: 1px solid black;
            background-position: center;
            margin-top: 20px;
            margin-bottom: 10px;
          }
          .title{
            .fontStyle(12px, black, 100);
            text-align: center;
          }
          .btn{
            .box(105px, 26px);
            background:rgba(50,109,242,1);
            border-radius:4px;
            text-align: center;
            line-height: 26px;
            margin-top: 10px;
            color: white;
            cursor: pointer;
          }
        }
        &>span:nth-child(1){
          margin-right: 30px;
        }
      }
      .header{
         margin-top: 70px;
        text-align: center;
        .fontStyle(36px, white, 400);
        margin-bottom: 80px;
      }
      .nav{
        .fontStyle(16px, white, 100);
      }
      .body{
        .box(100%, 530px, gray);
      }
    }
  }

</style>

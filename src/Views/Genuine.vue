<template>
    <div class="box" id="Genuine">
      <div class="main">
        <Klb/>
        <KlbQK/>
        <KlbQD/>
        <div class="klbBox5">
        </div>
        <div class="klbBox6">
          <div class="content" >
            <span class="header">卡拉OK版权音乐曲库授权证书</span>
            <span class="body">
              <span>
                  <span class="title">鲸选曲库 正版授权</span>
                  <span class="text">我们为授权的卡拉OK 商家提供《卡拉OK 版权音乐曲库授权书》，兹证明该商家经营场所经营过程中所使用的曲库内容均为正版授权。</span>
              </span>
            </span>
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
  @images: '../assets/images/klb/';
   html,body{
    /*overflow: hidden;*/
  }
  .klbBox5{
    width: 100%;
    height: 800px;
    overflow: hidden;
    background: url('../assets/images/klb/klbBox4BG.png') no-repeat;
  }
  .klbBox6{
    .box(100%, 1200px, url('../assets/images/klb/klbBox6BG.png') no-repeat);
    background-position: left bottom;
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
            background-size: contain;
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
          .icon{
            .box(50px, 50px, url('../assets/images/klb/download2.png') no-repeat);
             background-size: contain;
          }
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
        .box(100%, 530px, url('@{images}/bg6.png') no-repeat);
        background-size: contain;
        position: relative;
        &>span{
          position: absolute;
          top: 180px;
          right: 120px;
          .flexBox(400px, auto);
          flex-direction: column;
          align-items: flex-start;
          .title{
            display: block;
            .fontStyle(24px, white, 100);
            margin-bottom: 20px;
          }
          .text{
            .fontStyle(16px, white, 100);
          }
        }
      }
    }
  }

</style>

<template>
  <div class="banquanBox">
    <div class="content">
      <div class="title">正版欢唱，智慧娱乐</div>
      <div class="body">
        <span v-for="(item, index) in dataList" :key='index'>
          <span class="topContent">
            <span class="icon">
              <img :src="item.iconUrl" style="height: 100%;">
            </span>
            <span class="title">{{item.title}}</span>
            <span class="list">
              <div v-for="(item1, index1) in item.list" :key='index1'>{{item1}}</div>
            </span>
          </span>
          <span class="bottomContent" @click="goPage(index)">了解详情</span>
        </span>
      </div>
    </div>
  </div>
</template>

<script>
  export default{
    data(){
      return{
        dataList:[
          {
            title: '智慧K歌',
            iconUrl:require('@/assets/images/clouds/icon1.png'),
            list:[
              '正版音乐综合服务',
              '曲库云平台',
              '内容风险管控'
            ]
          },
          {
            title: '智慧娱乐',
           iconUrl:require('@/assets/images/clouds/icon2.png'),
            list:[
              '更好玩的场景化游戏体验',
              '充值送礼',
              '巨好玩 KTV娱乐新坐标',
              '麦霸大赛'
            ]
          },
          {
            title: '智慧管理',
            iconUrl:require('@/assets/images/clouds/icon3.png'),
            list:[
              '麦霸大赛',
              '订单及会员管理模块',
              '手机远程管理'
            ]
          }
        ]
      }
    },
	methods: {
		goPage(index){
			switch (index){
				case 0:
          this.$router.push('Sing')
					break;
				case 1:
				  this.$router.push('Entertainment')
					break;
				case 2:
				  this.$router.push('Manage')
					break;
			}
		}
	},
  }
</script>

<style scoped="scoped" lang="less">
  @import '../../assets/css/common.less';
  @images: '../../assets/images/clouds';
  .banquanBox{
    .box(100%, 800px);
    .content{
      .content;
      div[class='title']{
        .fontStyle(32px, white, none);
        margin-top: 120px;
        margin-bottom: 50px;
      }
      div[class='body']{
        .flexBox(100%, 420px);
        &>span{
          .flexBox(33.3%, 100%, none);
          flex-direction: column;
          .topContent{
            .flexBox(60%, 60%);
            flex-direction: column;
            justify-content: flex-start;
            .icon{
              .box(70px, 70px);
              text-align: center;
            }
            .title{
              .fontStyle(18px, white, 100);
              margin: 10px auto 20px;
            }
            .list{
              div{
                .fontStyle(14px, white, 100);
                line-height: 30px;
                text-align: left;
              }
              div:before{
                content: " ";
                display: inline-block;
                width: 6px;
                height: 6px;
                border-radius: 50%;
                background: white;
                line-height: 30px;
                margin-right: 6px;
                margin-top: -4px;
              }
            }
            transition: all 0.5s ease-in-out;
          }
          .bottomContent{
            .box(120px, 40px, linear-gradient(90deg,rgba(0,220,255,1) 0%,rgba(0,126,255,1) 100%));
            border-radius: 20px;
            text-align: center;
            line-height: 40px;
            cursor: pointer;
            .fontStyle(14px, white, 100);
            opacity: 0;
            transition: all 0.5s ease-in-out;
             transform: translateY(30px);
          }
        }
        &>span:hover{
          .topContent{
            transform: translateY(-30px);
          }
          .bottomContent{
            transform: translateY(0px);
            opacity: 1;
          }
        }
        &>span:nth-child(1){
          background: url('@{images}/bg1.png') no-repeat;

        }
        &>span:nth-child(2){
          background: url('@{images}/bg2.png') no-repeat;
        }
        &>span:nth-child(3){
          background: url('@{images}/bg3.png') no-repeat;
        }
      }
    }
  }
</style>

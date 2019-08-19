<template>
    <div class="page">
      <div class="charts-title">
        <h2>排行榜</h2>
        <div class="charts-title-more"></div>
      </div>
      <div class="charts-container">
        <ul>
          <li v-for="c in charts">
            <h3>{{c.title}}</h3>
            <h2>{{c.type}}</h2>
            <div class="divide-line"></div>
            <ol>
              <li v-for="(m,index) in c.song_list">
                <p>{{index + 1}}&nbsp&nbsp&nbsp{{m.name}}</p>
                <p>{{m.singer}}</p>
              </li>
            </ol>
          </li>
        </ul>
      </div>
    </div>
</template>

<script>
    export default {
        name: "Charts",
        data(){
          return{
            charts:[{
              title:'巅峰榜',
              type:'流行指数',
              song_list:[
                {
                name:'十年',
                singer:'陈奕迅'
              },{
                name:'小小',
                singer:'容祖儿'
              },{
                name:'听海',
                singer:'张惠妹'
              },{
                name:'逆流成河',
                singer:'许靖韵'
              },{
                name:'三天三夜',
                singer:'张惠妹'
              },{
                name:'青春、恋爱和意外',
                singer:'曾乐彤'
              },{
                name:'爱得太迟',
                singer:'古巨基'
              },{
                name:'失恋无罪',
                singer:'A-Lin'
              }]
            },{
              title:'巅峰榜',
              type:'热歌',
              song_list:[
                {
                  name:'十年',
                  singer:'陈奕迅'
                },{
                  name:'死了都要爱',
                  singer:'信乐团'
                },{
                  name:'听海',
                  singer:'张惠妹'
                },{
                  name:'黄昏',
                  singer:'周传雄'
                },{
                  name:'人来人往',
                  singer:'陈奕迅'
                },{
                  name:'One night in北京',
                  singer:'信乐团'
                },{
                  name:'下一站天后',
                  singer:'TWINS'
                },{
                  name:'小小',
                  singer:'容祖儿'
                }]
            },{
              title:'巅峰榜',
              type:'新歌',
              song_list:[
                {
                  name:'需要你的爱',
                  singer:'信/F.I.R.'
                },{
                  name:'初心',
                  singer:'古巨基'
                },{
                  name:'长大',
                  singer:'容祖儿'
                },{
                  name:'逆流成河',
                  singer:'许靖韵'
                },{
                  name:'青春、恋爱和意外',
                  singer:'曾乐彤'
                },{
                  name:'最美的旋律',
                  singer:'乔毓明'
                },{
				  name:'五十路',
				  singer:'李克勤'
				},{
				  name:'暗里着迷',
				  singer:'陈家乐'
				}
				]
            },{
              title:'巅峰榜',
              type:'粤语',
              song_list:[
                {
                  name:'K歌之王',
                  singer:'陈奕迅'
                },
                {
                  name:'下一站天后',
                  singer:'Twins'
                },
                {
                  name:'心淡',
                  singer:'容祖儿'
                },
                {
                  name:'爱得太迟',
                  singer:'古巨基'
                },
                {
                  name:'人来人往',
                  singer:'陈奕迅'
                },{
                  name:'陈奕迅',
                  singer:'李克勤'
                },{
                  name:'你快乐吗',
                  singer:'陈冠希'
                },{
                  name:'游乐场',
                  singer:'谢霆锋'
                }]
            },{
              title:'巅峰榜',
              type:'闽南语',
              song_list:[
                {
                  name:'心内事无人知',
                  singer:'MISS南台湾'
                },{
                  name:'下一站',
                  singer:'曾志伦'
                },{
                  name:'无缘的牵挂',
                  singer:'陈雷'
                },{
                  name:'已经过去',
                  singer:'蔡义德/刘依纯'
                },{
                  name:'失落的梦',
                  singer:'陈雷'
                },{
                  name:'小雨情',
                  singer:'郭建一'
                },{
                  name:'秀兰玛雅',
                  singer:'余天龙'
                },{
                  name:'故乡月',
                  singer:'秀兰玛雅'
                }]
            }]
          }
        }
    }
</script>

<style scoped>
  .page{
    margin-top: 20px;
    padding: 0 30px 20px;
    background-color: #ffffff;
    box-shadow: 0px 2px 12px 0px rgba(0,0,0,0.1);
  }
  .charts-title{
    height: 100px;
    line-height: 100px;
    position: relative;
  }
  .charts-title h2{
    text-align: center;
    color: #323232;
    font-size: 24px;
  }
  .charts-title-more{
    position: absolute;
    right: 0;
    top: 0;
    color: #999999;
    font-size: 12px;
    cursor: pointer;
  }
  .charts-title-more-arrow{
    width: 4px;
    height: 8px;
    background: url("../../assets/images/copy_right/arrow_right.png") no-repeat;
    background-size: 100% 100%;
    float: right;
    margin: 20px 0 0 6px;
  }
  .charts-container ul{
    display: flex;
    flex-direction: row;
    justify-content: space-between;
  }
  .charts-container ul > li{
    width: 208px;
    height: 456px;
    color: #ffffff;
    text-align: center;
  }
  .charts-container ul > li:nth-of-type(1){
    background: url("../../assets/images/copy_right/copy_right_jingling.png") 0 -526px  no-repeat;
  }
  .charts-container ul > li:nth-of-type(2){
    background: url("../../assets/images/copy_right/copy_right_jingling.png") -229px -526px  no-repeat;
  }
  .charts-container ul > li:nth-of-type(3){
    background: url("../../assets/images/copy_right/copy_right_jingling.png") -458px -526px  no-repeat;
  }
  .charts-container ul > li:nth-of-type(4){
    background: url("../../assets/images/copy_right/copy_right_jingling.png") -686px -526px  no-repeat;
  }
  .charts-container ul > li:nth-of-type(5){
    background: url("../../assets/images/copy_right/copy_right_jingling.png") -914px -526px  no-repeat;
  }
  .charts-container ul > li h3{
    font-size: 18px;
    margin: 20px 0 2px 0;
  }
  .charts-container ul > li h2{
    font-size: 24px;
  }
  .charts-container ul > li .divide-line{
    width: 30px;
    height: 2px;
    background-color: #ffffff;
    margin: 20px auto;
  }
  .charts-container ul > li ol{
    height: 300px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
  }
  .charts-container ul > li ol li{
    margin-left: 50px;
    text-align: left;
  }
  .charts-container ul > li ol li p:nth-of-type(1){
    font-size: 14px;
  }
  .charts-container ul > li ol li p:nth-of-type(2){
    font-size: 12px;
    margin: 6px 0 0 20px;
  }
</style>

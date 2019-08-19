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
                name:'Tell Me It\'s Over',
                singer:'Avril Lavigne'
              },{
                name:'像鱼',
                singer:'王贰浪'
              },{
                name:'生僻字',
                singer:'陈柯宇'
              },{
                name:'想象',
                singer:'摩登兄弟'
              },{
                name:'路过人间',
                singer:'郁可唯'
              },{
                name:'天亮以后说再见',
                singer:'河野'
              }]
            },{
              title:'巅峰榜',
              type:'热歌',
              song_list:[
                {
                  name:'起风了',
                  singer:'买辣椒也用券'
                },{
                  name:'盗将行',
                  singer:'花粥 / 马雨阳'
                },{
                  name:'水星记',
                  singer:'郭顶'
                },{
                  name:'写给黄淮',
                  singer:'解忧邵帅'
                },{
                  name:'可不可以',
                  singer:'张紫豪'
                },{
                  name:'年少有为',
                  singer:'李荣浩'
                }]
            },{
              title:'巅峰榜',
              type:'新歌',
              song_list:[
                {
                  name:'Tell Me It\'s Over',
                  singer:'Avril Lavigne'
                },{
                  name:'像鱼',
                  singer:'王贰浪'
                },{
                  name:'生僻字',
                  singer:'陈柯宇'
                },{
                  name:'想象',
                  singer:'摩登兄弟'
                },{
                  name:'路过人间',
                  singer:'郁可唯'
                },{
                  name:'天亮以后说再见',
                  singer:'河野'
                }]
            },{
              title:'巅峰榜',
              type:'欧美',
              song_list:[
                {
                  name:'Neon Moon',
                  singer:'Cigarettes Lavigne'
                },
                {
                  name:'CYBERPUNK',
                  singer:'Omnia'
                },
                {
                  name:'Tell Me It\'s Over',
                  singer:'Avril Lavigne'
                },
                {
                  name:'Hope',
                  singer:'The Chainsmokers'
                },
                {
                  name:'imagine',
                  singer:'Ariana Grande'
                },{
                  name:'Familia',
                  singer:'Nicki Minaj '
                }]
            },{
              title:'巅峰榜',
              type:'日韩',
              song_list:[
                {
                  name:'Way Back Home',
                  singer:'SHAUN'
                },{
                  name:'像鱼',
                  singer:'IU'
                },{
                  name:'生僻字',
                  singer:'金东律 / IU'
                },{
                  name:'Something',
                  singer:'George / '
                },{
                  name:'River Flows in You',
                  singer:'EXO'
                },{
                  name:'River Flows in You',
                  singer:'Yiruma'
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

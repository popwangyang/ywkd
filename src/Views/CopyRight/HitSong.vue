<template>
  <div class="page">
    <div class="hit-song-header">
      <h2>热门歌曲</h2>
      <div class="hit-song-container">
        <ul>
          <li>
            <div class="hit-song-container-img"></div>
            <h3>明天你依旧在我身边</h3>
            <p>谭维维</p>
          </li>
          <li>
            <div class="hit-song-container-img"></div>
            <h3>刚刚好</h3>
            <p>薛之谦</p>
          </li>
          <li>
            <div class="hit-song-container-img"></div>
            <h3>Like that</h3>
            <p>吴亦凡</p>
          </li>
          <li>
            <div class="hit-song-container-img"></div>
            <h3>十七岁的夏天</h3>
            <p>钟葛轩</p>
          </li>
        </ul>
      </div>
      <div class="device-line"></div>
      <div class="new-song-container">
        <ul>
          <li>
            <!--<h3>新歌推荐</h3>-->
          </li>
          <li>
            <div class="new-song-container-img"></div>
            <h3>成全</h3>
            <p>林宥嘉</p>
          </li>
          <li>
            <div class="new-song-container-img"></div>
            <h3>未寻</h3>
            <p>魏巡</p>
          </li>
          <li>
            <div class="new-song-container-img"></div>
            <h3>舞舞舞</h3>
            <p>萧亚轩</p>
          </li>
        </ul>
      </div>
      <div class="hot-song-container">
        <ul>
          <li>
            <!--<h3>新歌推荐</h3>-->
          </li>
          <li>
            <div class="hot-song-container-img"></div>
            <h3>为爱投降</h3>
            <p>阿杜</p>
          </li>
          <li>
            <div class="hot-song-container-img"></div>
            <h3>见坏就收</h3>
            <p>张信哲</p>
          </li>
          <li>
            <div class="hot-song-container-img"></div>
            <h3>不用去猜</h3>
            <p>JONY J</p>
          </li>
        </ul>
      </div>
      <div class="check-all-container">
        <div class="check-all">查看全部版权</div>
      </div>
    </div>
  </div>
</template>

<script>
    export default {
        name: "HitSong"
    }
</script>

<style scoped>
  .page{
    margin-top: 20px;
    /*height: 800px;*/
    padding: 20px 30px;
    background-color: #ffffff;
    box-shadow: 0px 2px 12px 0px rgba(0,0,0,0.1);
  }
  .hit-song-header{

  }
  .hit-song-header > h2{
    text-align: center;
    font-size: 24px;
    height: 100px;
    line-height: 100px;
    font-weight: 600;
    color: #323232;
  }
  .hit-song-container ul{
    display: flex;
    flex-direction: row;
    justify-content: space-between;
  }
  .hit-song-container ul li{
    width: 260px;
    height: 240px;
    border-radius: 10px;
    overflow: hidden;
    box-shadow:0px 4px 12px 0px rgba(0,0,0,0.17);
  }
  .hit-song-container ul li .hit-song-container-img{
    width: 260px;
    height: 150px;
    background: url("../../assets/images/copy_right/hit_song_01.png") no-repeat;
    background-size: cover;
  }
  .hit-song-container ul li:nth-of-type(2) .hit-song-container-img{
    background: url("../../assets/images/copy_right/hit_song_02.png") no-repeat;
    background-size: cover;
  }
  .hit-song-container ul li:nth-of-type(3) .hit-song-container-img{
    background: url("../../assets/images/copy_right/hit_song_03.png") no-repeat;
    background-size: cover;
  }
  .hit-song-container ul li:nth-of-type(4) .hit-song-container-img{
    background: url("../../assets/images/copy_right/hit_song_04.png") no-repeat;
    background-size: cover;
  }
  .hit-song-container ul li h3{
    color: #323232;
    font-size: 18px;
    font-weight: 400;
    margin: 20px 0 10px 10px;
  }
  .hit-song-container ul li p{
    color: #666666;
    font-size: 14px;
    font-weight: 400;
    margin-left: 10px;
  }
  .device-line{
    height: 1px;
    margin: 30px 0;
    background-color: #F1F1F1;
  }
  .new-song-container ul{
    display: flex;
    flex-direction: row;
    justify-content: space-between;
  }
  .new-song-container ul li{
    width: 260px;
    height: 240px;
    border-radius: 10px;
    overflow: hidden;
    box-shadow:0px 2px 12px 0px rgba(0,0,0,0.1);
  }
  .new-song-container ul li:nth-of-type(1){
    border-radius: 0;
  }
  .new-song-container ul li .new-song-container-img{
    width: 260px;
    height: 150px;
    background: url("../../assets/images/copy_right/hit_song_05.png") no-repeat;
    background-size: cover;
  }
  .new-song-container ul li:nth-of-type(3) .new-song-container-img{
    background: url("../../assets/images/copy_right/hit_song_06.png") no-repeat;
    background-size: cover;
  }
  .new-song-container ul li:nth-of-type(4) .new-song-container-img{
    background: url("../../assets/images/copy_right/hit_song_07.png") no-repeat;
    background-size: cover;
  }
  .new-song-container ul li:nth-of-type(1){
    background: url("../../assets/images/copy_right/copy_right_jingling.png") -1px -247px no-repeat;
  }
  .new-song-container ul li h3{
    color: #323232;
    font-size: 18px;
    font-weight: 400;
    margin: 20px 0 10px 10px;
  }
  .new-song-container ul li p{
    color: #666666;
    font-size: 14px;
    font-weight: 400;
    margin-left: 10px;
  }
  .hot-song-container{
    margin: 20px 0;
  }
  .hot-song-container ul{
    display: flex;
    flex-direction: row;
    justify-content: space-between;
  }
  .hot-song-container ul li{
    width: 260px;
    height: 240px;
    border-radius: 10px;
    overflow: hidden;
    box-shadow:0px 4px 12px 0px rgba(0,0,0,0.17);
  }
  .hot-song-container ul li .hot-song-container-img{
    width: 260px;
    height: 150px;
    background: url("../../assets/images/copy_right/hit_song_08.png") no-repeat;
    background-size: cover;
  }
  .hot-song-container ul li:nth-of-type(3) .hot-song-container-img{
    background: url("../../assets/images/copy_right/hit_song_09.png") no-repeat;
    background-size: cover;
  }
  .hot-song-container ul li:nth-of-type(4) .hot-song-container-img{
    background: url("../../assets/images/copy_right/hit_song_10.png") no-repeat;
    background-size: cover;
  }
  .hot-song-container ul li:nth-of-type(1){
    background: url("../../assets/images/copy_right/copy_right_jingling.png") -304px -247px no-repeat;
  }
  .hot-song-container ul li h3{
    color: #323232;
    font-size: 18px;
    font-weight: 400;
    margin: 20px 0 10px 10px;
  }
  .hot-song-container ul li p{
    color: #666666;
    font-size: 14px;
    font-weight: 400;
    margin-left: 10px;
  }
  .check-all-container{
    /*height: 100px;*/
  }
  .check-all{
    height: 40px;
    width: 160px;
    margin: 40px auto 10px;
    color: #326DF2;
    padding: 4px 14px;
    border: 1px solid #326DF2;
    border-radius: 30px;
    text-align: center;
    line-height: 40px;
    font-size: 22px;
    cursor: pointer;
  }
</style>

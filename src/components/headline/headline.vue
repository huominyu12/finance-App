<template>
  <div class="headline">
    <div class="header-wrapper">
      <div class="header">
        <span class="icon icon-search2"></span>
        <span class="icon icon-volume-medium"></span>
        <div class="title"></div>
        <div class="right-icon"></div>
      </div>
      <div class="nav">
        <ul>
          <router-link to="/headline/contentbox">
            <li>头条</li>
          </router-link>
          <router-link to="/headline/original">
            <li>原创</li>
          </router-link>
          <li>产经</li>
          <li>金融</li>
          <li>视频</li>
          <li>科技</li>
          <li>快消</li>
          <li>汽车</li>
          <li>房地产</li>
          <li>创业季</li>
        </ul>
        <div class="add-btn icon-plus-circle"><i></i></div>
      </div>
    </div>
    <router-view :slide="slide" :article="article"></router-view>
    <!--<contentBox :slide="slide" :article="article"></contentBox>-->

  </div>

</template>

<script>
  export default {
    props: {
      slide: {
        type: Object
      },
      article: {
        type: Object
      }
    }
  }

</script>

<style lang="less" scoped>
  @import "../../common/less/icon.less";

  .header-wrapper {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 110px;
    box-sizing: border-box;
    font-size: 0;
    color: #696969;
    background-color: rgb(255, 255, 255);
    z-index: 50;
    .header {
      position: relative;
      height: 60px;
      padding: 0 15px;
      .icon {
        display: inline-block;
        width: 24px;
        height: 25px;
        font-size: 24px;
        padding: 20px 15px 10px 0;
        text-align: center;
        color: #60646f;
      }
      .title {
        position: absolute;
        top: 0;
        left: 42%;
        display: inline-block;
        width: 60px;
        height: 35px;
        margin: 10px 0 16px 0;
        background: url('../../common/img/financetitle.jpg') no-repeat;
        background-size: 60px 35px;
      }
      .right-icon {
        display: inline-block;
        float: right;
        width: 35px;
        height: 40px;
        margin: 10px 0;
        background: url('../../common/img/icon.jpg') no-repeat;
        background-size: 35px 40px;
      }
    }
    .nav {
      position: relative;
      width: 100%;
      height: 50px;
      ul {
        width: 300px;
        height: 50px;
        margin: 0 15px 0 5px;
        & > .active {
         li{
           color: red;
         }
        }
        li {
          float: left;
          width: 60px;
          height: 20px;
          font-size: 18px;
          text-align: center;
          margin-bottom: 10px;
          color: #878787;
          /*&.active {*/
          /*color: #f96363;*/
          /*}*/
        }
      }
      .add-btn {
        position: absolute;
        right: 15px;
        top: 5px;
        display: inline-block;
        padding: 8px 0 8px 15px;
        font-size: 25px;
        color: #b1b1b1;
        border-left: 1px solid #b1b1b1;
      }
    }
  }


</style>

<template>
  <div>
    <div class="titleheader">
      <div class="icon"><i class="icon-circle-left"></i></div>
      <div class="bgimg"></div>
    </div>
    <div class="content-wrapper" ref="contentWrapper">
      <div class="focus">
        <img :src="financeArticle.focus_position[0].path+financeArticle.focus_position[0].thumbnails_url[4]">
        <div class="focus-content">
          {{financeArticle.focus_position[0].title}}
        </div>
      </div>
      <div class="article-list-wrapper">
        <ul>
          <li class="article-list" v-for="item in financeArticle.article_list">
            <img :src="item.path+item.thumbnails_url[3]" v-if="item.thumbnails_url.length>0">
            <div class="list-content">
              <h1 class="article-title">{{item.title}}</h1>
              <span class="article-description">{{item.description}}</span>
            </div>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    props: {
      financeArticle: {
        type: Object
      }
    },
    data() {
      return {}
    }
  }
</script>

<style lang="less" scoped>
  .titleheader {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 80px;
    background: #2d4585;
    z-index: 30;
    .icon {
      position: absolute;
      top: 0;
      left: 0;
      display: inline-block;
      width: 30px;
      height: 30px;
      padding: 15px 10px;
      .icon-circle-left {
        display: inline-block;
        width: 30px;
        height: 30px;
        font-size: 30px;
        color: rgba(228, 234, 241, 0.4);
        border-radius: 50%;
        background-color: #152242;
      }
    }
    .bgimg {
      position: relative;
      top: 0;
      left: 40%;
      display: inline-block;
      width: 83px;
      height: 50px;
      margin: 15px 0;
      background: url('../../common/img/wealthlogo.jpg') no-repeat;
      background-size: 83px 50px;
    }

  }

  .content-wrapper {
    position: absolute;
    top: 80px;
    left: 0;
    bottom: 60px;
    .focus {
      position: relative;
      width: 100%;
      height: 220px;
      img {
        width: 100%;
        height: 220px;
      }
      .focus-content {
        position: absolute;
        bottom: 0;
        left: 0;
        width: 100%;
        height: 20px;
        padding: 0 15px;
        box-sizing: border-box;
        line-height: 20px;
        color: rgb(255, 255, 255);
        background: rgba(0, 0, 0, 0.5);
      }
    }
    .article-list-wrapper {
      padding-bottom: 60px;
      .article-list {
        display: flex;
        padding: 10px;
        border-bottom: 1px solid #c7c7c7;
        img {
          width: 90px;
          height: 75px;
        }
        .list-content {
          flex: 1;
          height: 75px;
          margin: 0 10px;
          overflow: hidden;
          .article-title {
            font-size: 20px;
            margin-top: 3px;
          }
          .article-description {
            display: inline-block;
            margin-top: 10px;
            font-size: 17px;
            height: 40px;
            line-height: 20px;
            color: #787878;

          }
        }
      }
    }
  }

</style>

<template>
  <div>
    <div class="title-wrapper">
      <div class="nav-title">
        <span class="back" @click="reflesh()"><img src="../../common/img/1.jpg"></span>头条
        <span class="font"><img src="../../common/img/2.jpg"> </span></div>
    </div>
    <div class="content">
      <h1 class="title">{{content.article.title}}</h1>
      <span class="sub_title">{{content.article.sub_title}}</span>
      <div class="time-and-listen">
        <span class="time">{{time}}</span>
        <div class="listen-icon"><img src="../../common/img/7.jpg"/><span class="listen">听报道</span></div>
      </div>
      <span class="article"><span class="blank"></span>{{artitle}}</span>
      <div class="like">
        <div class="like-content">文章很棒,赞赏一下吧</div>
        <div class="btn">赞赏</div>
      </div>
      <div class="iconbox">
        <span class="icon"><img src="../../common/img/weixin.png"><div class="name">微信</div></span>
        <span class="icon"><img src="../../common/img/friend.png"><div class="name">朋友圈</div></span>
        <span class="icon"><img src="../../common/img/weibo.png"><div class="name">微博</div></span>
        <span class="icon"><img src="../../common/img/more.png"><div class="name">更多</div></span>
      </div>
    </div>
    <div class="comment">
      <div class="comment-left"><input placeholder="添加评论...."/><span class="send">...</span></div>
      <div class="comment-right">
        <span class="right"><img src="../../common/img/5.jpg"></span>
        <span class="right"><img src="../../common/img/4.jpg"></span>
        <span class="right"><img src="../../common/img/3.jpg"></span>
      </div>
    </div>

  </div>
</template>

<script>
  import {mapGetters, mapMutations} from 'vuex'

  export default {
    data() {
      return {}
    },
    computed: {
      ...mapGetters(['content', 'times']),
      time: function () {
        this.TIMECHANGE({time: this.content.article.updated_time})
        return this.times
      },
      artitle: function () {
        var str = ''
        for (let i = 1; i < this.content.article.audio_content.length; i++) {
          str += this.content.article.audio_content[i]
        }
        return str
      }
    },
    methods: {
      ...mapMutations(['TIMECHANGE']),
      reflesh() {
        window.location.reload()
      }
    }
  }
</script>

<style lang="less" scoped>
  .title-wrapper {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 60px;
    padding: 15px;
    box-sizing: border-box;
    background: rgb(255, 255, 255);
    z-index: 50;
    .nav-title {
      width: 100%;
      height: 100%;
      line-height: 30px;
      text-align: center;
      font-size: 25px;
      position: relative;
      .back {
        position: absolute;
        top: 0;
        left: 0;
        display: inline-block;
        width: 20px;
        height: 100%;
        img {
          width: 25px;
        }
      }
      .font {
        position: absolute;
        right: 0;
        top: 0;
        img {
          width: 25px;
        }
      }
    }
  }

  .content {
    position: absolute;
    top: 60px;
    left: 0;
    width: 100%;
    padding-bottom: 50px;
    .title {
      margin: 40px 15px 20px 15px;
      font-size: 30px;
      line-height: 35px;
      font-weight: bold;
    }
    .sub_title {
      display: inline-block;
      margin: 10px 15px 0 15px;
      color: #9f9f9f;
      font-size: 18px;
    }
    .time-and-listen {
      position: relative;
      padding: 10px 15px;
      .time {
        color: #9f9f9f;
        font-size: 18px;
      }
      .listen-icon {
        position: relative;
        float: right;
        img {
          position: absolute;
          left: -15px;
          width: 19px;
          vertical-align: middle;
        }
        .listen {
          padding: 0 10px;
          border: 1px solid #9f9f9f;;
          font-size: 14px;
          color: #9f9f9f;;
        }
      }
    }
    /*.second-title {*/
    /*margin: 10px 15px;*/
    /*font-size: 22px;*/
    /*font-weight: 700;*/
    /*line-height: 35px;*/
    /*}*/
    .article {
      display: inline-block;
      font-size: 18px;
      margin: 0 15px;
      line-height: 28px;
      .blank {
        display: inline-block;
        width: 30px;
      }
    }
    .like {
      padding: 40px;
      background: #f7f7f7;
      .like-content {
        margin-bottom: 20px;
        font-size: 20px;
        text-align: center;
      }
      .btn {
        padding: 10px 0;
        font-size: 20px;
        background: #ff6b23;
        color: rgb(255, 255, 255);
        text-align: center;
      }
    }
    .iconbox {
      margin: 20px 0;
      text-align: center;
      .icon {
        position: relative;
        display: inline-block;
        width: 24%;
        .name {
          margin-top: 10px;
          color: #b9b8bc;
        }
      }
    }
  }

  .comment {
    position: fixed;
    bottom: 0;
    left: 0;
    width: 100%;
    height: 50px;
    padding: 10px 15px;
    box-sizing: border-box;
    background: #252525;
    z-index: 50;
    .comment-left {
      input {
        height: 25px;
        width: 40%;
        display: inline-block;
        border-radius: 3px;
      }
      .send {
        height: 25px;
        /*width: 10%;*/
        padding: 5px 10px 0 10px;
        /*line-height: 50px;*/
        display: inline-block;
        background: #4990e2;
        color: rgb(255, 255, 255);
      }
    }
    .comment-right {
      position: absolute;
      top: 10px;
      right: 15px;
      .right {
        margin-left: 25px;
        img {
          width: 30px;
        }
      }

    }
  }

</style>

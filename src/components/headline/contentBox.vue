<template>
  <div class="content-box-wrapper">
    <div class="content-wrapper" ref="contentWrapper">
      <div class="slide-wrapper">
        <ul ref="slideBox">
          <li class="picture">
            <img :src="slide.focus_articles[3].article.thumb_path+slide.focus_articles[3].article.thumb_images[4]">
          </li>
          <li class="picture" v-for="item in slide.focus_articles.concat([slide.focus_articles[0]])">
            <img :src="item.article.thumb_path+item.article.thumb_images[4]">
            <div class="focustitle">{{item.article.title}}</div>
          </li>
        </ul>
        <div class="alldots">
          <span class="dot active"></span>
          <span class="dot"></span>
          <span class="dot"></span>
          <span class="dot"></span>
        </div>
      </div>
      <div class="article-wrapper" ref="articleWrapper">
        <ul>
          <router-link to="/content">
            <li v-for="item in article.normal_articles" @click="stop(item)">
              <div class="bgimg"><img :src="item.article.thumb_path+item.article.thumb_images[0]"></div>
              <div class="content">
                <div class="sub-title">{{item.article.sub_title}}</div>
                <div class="title">{{item.article.title}}</div>
              </div>
            </li>
          </router-link>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
  //  import IScroll from 'iscroll/build/iscroll'
  import {mapActions, mapGetters, mapMutations} from 'vuex'

  export default {
    props: {
      slide: {
        type: Object
      },
      article: {
        type: Object
      }
    },
    data() {
      return {}
    },
    computed: {
      ...mapGetters(['classdot', 'timer', 'index'])
    },
    created() {
      this.$nextTick(() => {
        let obj = this.$refs.slideBox
        let dot = document.getElementsByClassName('dot')
        let offsetX = -(obj.clientWidth / 6) * (this.index + 1) + 'px'
        this.SET_TRANSLATE({obj, x: offsetX, y: 0, z: 0})
        this.ACTIVE_DOT({dot, num: this.index})
        this.startInterval({obj, dot})
        this.transitionEnd({obj, callback: this.callback})
        this.touchs({obj, dot, callback: this.startInterval({obj, dot})})
      }
      )
    },

    methods: {
      ...mapMutations(['SET_TRANSLATE', 'REMOVE_TRANSITIONS', 'CLICKITEM', 'ACTIVE_DOT', 'SET_TRANSLATE']),
      ...mapActions(['startInterval', 'transitionEnd', 'transitionAgain', 'touchs']),
      callback() {
        this.transitionAgain({obj: this.$refs.slideBox, modules: 'slide'})
      },
      stop(item) {
        clearInterval(this.timer)
        var bottom = document.getElementsByClassName('bottom-nav-wrapper')[0]
        bottom.innerHTML = ''
        this.CLICKITEM({item})
      }
    },
    watch: {
      slide(val) {
        if (val.focus_articles) {
          this.$nextTick(() => {
            let obj = this.$refs.slideBox
            let dot = document.getElementsByClassName('dot')
            this.startInterval({obj, dot})
            this.transitionEnd({obj, callback: this.callback})
            this.touchs({obj, dot, callback: this.startInterval({obj, dot})})
          })
        }
      }
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang='less' scoped>
  .content-box-wrapper {
    position: absolute;
    top: 110px;
    /*bottom: 60px;*/
    width: 100%;
    /*height: 100%;*/
    overflow: hidden;
    .content-wrapper {
      width: 100%;
      z-index: 30;
      .slide-wrapper {
        position: relative;
        height: 219px;
        width: 100%;
        overflow: hidden;
        ul {
          width: 600%;
          height: 219px;
          &:first-child {
            transform: translateX(-16.66%)
          }
          .picture {
            float: left;
            width: 16.6666666%;
            height: 219px;
            position: relative;
            img {
              width: 100%;
              height: 219px;
            }
            .focustitle {
              position: absolute;
              bottom: 0;
              left: 0;
              width: 100%;
              height: 25px;
              line-height: 25px;
              padding: 0 55px 0 10px;
              box-sizing: border-box;
              white-space: nowrap;
              overflow: hidden;
              text-overflow: ellipsis;
              font-size: 18px;
              color: rgb(255, 255, 255, 0.5);
              background: rgba(0, 0, 0, 0.5);
            }
          }
        }
        .alldots {
          position: absolute;
          bottom: 0;
          right: 0;
          width: 17%;
          height: 25px;
          display: inline-block;
          padding: 5px;
          box-sizing: border-box;
          background: rgba(0, 0, 0, 0);
          .dot {
            display: inline-block;
            width: 9px;
            height: 9px;
            border-radius: 50%;
            background: rgba(255, 255, 255, 0.5);
            &.active {
              background: rgb(255, 255, 255);
            }
          }
        }
      }
      .article-wrapper {
        li {
          display: flex;
          padding: 10px;
          border-bottom: 1px solid #ededed;
          box-sizing: border-box;
          &:last-of-type {
            margin-bottom: 60px;
          }
          .bgimg {
            flex: 0 0 95px;
            height: 75px;
            img {
              width: 95px;
              height: 75px;
            }
          }
          .content {
            flex: 1;
            padding: 0 10px;
            box-sizing: border-box;
            .sub-title {
              display: inline-block;
              /*width: 90%;*/
              margin: 3px 0 5px 0;
              font-size: 15px;
              color: #969696;
              /*overflow: hidden;*/
              /*white-space: nowrap;*/
              /*text-overflow: ellipsis;*/
            }
            .title {
              display: inline-block;
              height: 40px;
              line-height: 20px;
              font-size: 17px;
              color: black;
              overflow: hidden;
            }
          }
        }

      }
    }
  }
</style>

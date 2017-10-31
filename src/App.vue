<template>
  <div id="app">
    <router-view :slide="slide" :article="article" :financeArticle="financeArticle">
    </router-view>
    <div class="bottom-nav-wrapper">
      <div class="headlines" >
        <div class="bottom-nav" v-for="(value,key) in bottomNav.tab_bar_list_day">
          <router-link :to="'/'+key"><span class="icon" :class="key" @click="clickfn(key)"></span></router-link>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import {mapGetters} from 'vuex'

  export default {
    name: 'app',
    data() {
      return {
        bottomNav: {},
        slide: {},
        article: {},
        financeArticle: {}
      }
    },
    created() {
      let self = this
      this.$axios.get('/api/bottomNav')
        .then((res) => {
          res = res.data
          if (res.error === 0) {
            self.bottomNav = res.data.data
          }
        })
        .catch((error) => {
          alert(error)
        })
      this.$axios.get('/api/slide')
        .then((res) => {
          res = res.data
          if (res.error === 0) {
            self.slide = res.data.data
          }
        })
        .catch((error) => {
          alert(error)
        })
      this.$axios.get('/api/article')
        .then((res) => {
          res = res.data
          if (res.error === 0) {
            self.article = res.data.data
          }
        })
        .catch((error) => {
          alert(error)
        })
      this.$axios.get('/api/financeArticle')
        .then((res) => {
          res = res.data
          if (res.error === 0) {
            self.financeArticle = res.data.data
          }
        })
        .catch((error) => {
          alert(error)
        })
    },
    computed: {
      ...mapGetters(['timer'])
    },
    methods: {
      clickfn(key) {
        clearInterval(this.timer)
        if (key === 'headline') {
          this.$router.go({path: '/headline/contentbox'})
        }
      }
    }
  }
</script>

<style lang="less" scoped>
  @import "common/less/mixin";

  .bottom-nav-wrapper {
    position: fixed;
    bottom: 0;
    left: 0;
    width: 100%;
    border-top: 1px solid #e3e3e3;
    background-color: #f8f8f8;
    z-index: 40;
    .bottom-nav {
      display: inline-block;
      width: 20%;
      height: 60px;
      padding: 5px 15px 5px 25px;
      box-sizing: border-box;
      & > .active {
        & > .icon {
          .activeImg()
        }
      }
      .icon {
        display: inline-block;
        margin: 0 auto;
        height: 50px;
        width: 100%;
        .iconImg();
      }
    }
  }

</style>

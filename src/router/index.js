import Vue from 'vue'
import Router from 'vue-router'
import explore from '../components/explore/expore.vue'
import headline from '../components/headline/headline.vue'
import mine from '../components/mine/mine.vue'
import trend from '../components/trend/trend.vue'
import wealth from '../components/wealth/wealth.vue'
import content from '../components/headline/content.vue'
import contentBox from '../components/headline/contentBox.vue'
import original from '../components/headline/original.vue'
// import App from '../App.vue'

Vue.use(Router)

export default new Router({
  linkActiveClass: 'active',
  linkExactActiveClass: 'active',     // 嵌套路由时的class名
  routes: [
    {
      path: '/headline',
      name: 'headline',
      component: headline,
      children: [{path: '/headline/contentbox', name: 'contentBox', component: contentBox},
        {path: '/headline/original', name: 'original', component: original}]
    },
    {path: '/explore', name: 'explore', component: explore},
    {path: '/mine', name: 'mine', component: mine},
    {path: '/trend', name: 'trend', component: trend},
    {path: '/wealth', name: 'wealth', component: wealth},
    {path: '/content', name: 'content', component: content}
// {path: '/headline/headline', name: 'contentBox', component: contentBox}
  ]
})


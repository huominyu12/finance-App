import * as types from '../mutations-types'

const state = {
  content: {},
  times: 0
}

const getters = {
  content: state => state.content,
  times: state => state.times
}
const mutations = {
  [types.CLICKITEM](state, {item}) {
    state.content = item
  },
  [types.TIMECHANGE](state, {time}) {
    let date = new Date(parseInt(time * 1000))
    let year = date.getFullYear()
    let months = date.getMonth() + 1
    let day = date.getDate()
    let hous = date.getHours()
    let second = date.getMinutes()
    if (second < 10) {
      second = '0' + second
    }
    if (months < 10) {
      months = '0' + months
    }
    if (day < 10) {
      day = '0' + day
    }
    if (hous < 10) {
      hous = '0' + hous
    }
    state.times = year + '年' + months + '月' + day + '日 ' + hous + ':' + second
  }
}

export default {
  state,
  getters,
  mutations
}

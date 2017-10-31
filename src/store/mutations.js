import * as types from './mutations-types'

export default {
  [types.ADD_TRANSITIONS]({state}, {obj}) {
    obj.style.transition = 'all 0.5s'
    obj.style.webkitTransition = 'all 0.5s'
  },
  [types.SET_TRANSLATE]({state}, {obj, x, y, z}) {
    obj.style.transform = `translate3D(${x},${y},${z})`
    obj.style.webkitTransform = `translate3D(${x},${y},${z})`
  },
  [types.REMOVE_TRANSITIONS]({state}, {obj}) {
    obj.style.transition = 'none'
    obj.style.webkitTransition = 'none'
  }
}


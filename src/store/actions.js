import * as types from './mutations-types'

export const transitionEnd = (context, {obj, callback}) => {
  if (typeof obj === 'object') {
    obj.addEventListener('transitionsEnd', () => {
      callback && callback()
    })
    obj.addEventListener('webkitTransitionEnd', () => {
      callback && callback()
    })
  }
}
export const transitionAgain = ({commit, state}, {obj, modules}) => {
  if (state[modules].index >= 4) {
    state[modules].index = 0
    commit(types.REMOVE_TRANSITIONS, {obj})
    commit(types.SET_TRANSLATE, {obj, x: -obj.clientWidth / 6 + 'px', y: 0, z: 0})
  } else if (state[modules].index < 0) {
    state[modules].index = 4
    commit(types.REMOVE_TRANSITIONS, {obj})
    commit(types.SET_TRANSLATE, {obj, x: -obj.clientWidth / 6 * 4 + 'px', y: 0, z: 0})
  }
}


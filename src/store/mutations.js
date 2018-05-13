// stateの上阿智を変更する
import { SET_MESSAGE } from './mutation-types'

export default {
  [SET_MESSAGE](state, message) {
    state.messages.push(message)
  }
}
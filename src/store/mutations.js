// stateの上阿智を変更する
import { 
  SET_MESSAGE,
  GET_CHANNELS
 } from './mutation-types'

export default {
  [SET_MESSAGE](state, message) {
    state.messages.push(message)
  },
  [GET_CHANNELS](state, message) {
    sate.channels = channels
  }
}
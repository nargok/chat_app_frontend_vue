// stateの状態を変更する
import { 
  SET_MESSAGE,
  GET_CHANNELS,
  SET_MESSAGES
 } from './mutation-types'

export default {
  [SET_MESSAGE](state, message) {
    state.messages.push(message)
  },
  [GET_CHANNELS](state, channels) {
    state.channels = channels
  },
  [SET_MESSAGES](state, messages) {
    state.messages = messages
  }
}
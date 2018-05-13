import { 
  SET_MESSAGE,
  GET_CHANNELS
} from './mutation-types'

export default {
  [SET_MESSAGE] ({commit}, message) {
    commit(SET_MESSAGE, message)
  },
  [GET_CHANNELS] ({commit}) {
    fetch('https://us-central1-demoapp-chat-server.cloudfunctions.net/v1/chennels').then((response) => {
      return response.json()
    }).then((json) => {
      commit(GET_CHANNELS, json.channels)
    })
  }
}
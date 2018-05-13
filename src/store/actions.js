import { 
  SET_MESSAGE,
  GET_CHANNELS
} from './mutation-types'

export default {
  [SET_MESSAGE] ({commit}, message) {
    commit(SET_MESSAGE, message)
  },
  [GET_CHANNELS] ({commit}) {
    async function fetchAPI(){
      const response = await fetch('https://us-central1-demoapp-chat-server.cloudfunctions.net/v1/chennels')
      const json = await response.json()
      commit(GET_CHANNELS, json.channels)
    }
    retchAPI()
  }
}
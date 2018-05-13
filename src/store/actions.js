import { 
  GET_CHANNELS,
  SET_MESSAGES
} from './mutation-types'

// メッセージ用のAPIのパスを取得する関数
const get_message_path = cname => 'https://us-central1-demoapp-chat-server.cloudfunctions.net/v1/channels/' + cname + '/messages'

// メッセージ用API fetch関数
async function fetch_get_messages (cname) {
  const response = await fetch(get_message_path(cname))
  const json = await response.json()
  return json.messages
}

export default {
  // 使わないからコメントアウト
  // [SET_MESSAGE] ({commit}, message) {
  //   commit(SET_MESSAGE, message)
  // },
  [GET_CHANNELS] ({commit}) {
    async function fetchAPI(){
      const response = await fetch('https://us-central1-demoapp-chat-server.cloudfunctions.net/v1/channels')
      const json = await response.json()
      commit(GET_CHANNELS, json.channels)
    }
    fetchAPI()
  },
  // サーバのメッセージを取得する
  async GET_MESSAGES ({commit}, cname) {
    // サーバのメッセージをGETで取得する
    const messages = await fetch_get_messages(cname)
    commit(SET_MESSAGES, messages)
  },
  // サーバにメッセージを送信する
  async POST_MESSAGES ({commit}, {cname, message}) {
    // サーバにメッセージをPOSTで送信する
    // fetchの第2引数は送信パラメータ
    const response = await fetch(get_message_path(cname), {
      method: 'POST',
      body: JSON.stringify({
        'body': message
      }),
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      }
    })
    // POSTしたレスポンスを受け取ります
    const json = await response.json()
    // POSTがOKならサーバのメッセージを取得しコミットします
    if(json.result === 'ok') {
      const messages = await fetch_get_messages(cname)
      commit(SET_MESSAGES, messages)
    }
  }
}
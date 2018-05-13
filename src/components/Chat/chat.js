import { mapGetters, mapActionss, mapActions } from 'vuex'
import {
  //  SET_MESSAGE,
   GET_CHANNELS
 } from '../../store/mutation-types'
import MessageList from '../MessageList'

export default {
  name : 'chat',
  mounted() {
    this.GET_CHANNELS()
    // メッセージを取得する
    this.GET_MESSAGES(this.$route.params.cname)
  },
  components: {
    'message-list': MessageList
  },
  computed: {
    ...mapGetters([
      'messages',
      'channels'
    ]),
  },
  methods: {
    ...mapActions([
      // SET_MESSAGE,
      GET_CHANNELS,
      "GET_MESSAGES",
      "POST_MESSAGES"
    ]),

    send_message(){
      this.POST_MESSAGES({"cname": this.$route.params.cname, "message": this.message})
      this.message = ""
    }
  },
  data() {
    return {
      message: ""
    }
  }
}
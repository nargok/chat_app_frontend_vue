import { mapGetters, mapActionss, mapActions } from 'vuex'
import {
   SET_MESSAGE,
   GET_CHANNELS
 } from '../../store/mutation-types'

export default {
  name : 'chat',
  mounted() {
    this.GET_CHANNELS()
  },
  computed: {
    ...mapGetters([
      'messages',
      'channels'
    ]),
  },
  methods: {
    ...mapActions([
      SET_MESSAGE,
      GET_CHANNELS
    ]),

    send_message(){
      this.messages.push(this.message)
      this.message = ""
    }
  },
  data() {
    return {
      message: ""
    }
  }
}
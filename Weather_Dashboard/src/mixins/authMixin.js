import {mapState} from 'pinia'
import {useUserStore} from '@/stores/user'

export default {
  computed:{
    ...mapState(useUserStore, ['getIdData'])
  },
}

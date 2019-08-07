import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

import {
  
} from '@fortawesome/free-solid-svg-icons';

const icons = [
  // fas

];

library.add(...icons);

export default {
  install (Vue) {
    Vue.component('font-awesome-icon', FontAwesomeIcon)
  }
}

import VeeValidate from 'vee-validate';
import i18n from '@/plugins/i18n';

import pl from 'vee-validate/dist/locale/pl.js'
import en from 'vee-validate/dist/locale/en.js'

export default {
  install (Vue) {
    if (this.installed) return
    this.installed = true

    Vue.use(VeeValidate, {
      locale: i18n.i18next.language,
      dictionary: {
        pl, en
      },
      classes: true,
      classNames: {
        valid: 'form-input__input--valid',
        invalid: 'form-input__input--invalid'
      }
    })
  }
}

import { extend, localize } from 'vee-validate'
import { required, email, min, length, confirmed } from 'vee-validate/dist/rules'

extend('required', required)
extend('email', email)
extend('min', min)
extend('length', length)
extend('confirmed', confirmed)

// 自定义错误消息
localize({
  en: {
    messages: {
      required: '{_field_} is required',
      min: '{_field_} must have no less than {length} characters',
      length: '{_field_} must have {length} characters'
    }
  }
})

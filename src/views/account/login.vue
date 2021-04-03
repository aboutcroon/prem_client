<template>
  <div class="wrapper">
    <a-form :form="loginForm" class="login-form" @submit="handleSubmit">
      <a-form-item>
        <a-input v-decorator="['userName', { rules: [{ required: true, message: '请输入手机/邮箱' }] }]" placeholder="手机/邮箱">
          <a-icon slot="prefix" type="user" style="color: rgba(0,0,0,.25)" />
        </a-input>
      </a-form-item>
      <a-form-item>
        <a-input v-decorator="['password', { rules: [{ required: true, message: '请输入密码' }] }]" type="password" placeholder="密码">
          <a-icon slot="prefix" type="lock" style="color: rgba(0,0,0,.25)" />
        </a-input>
      </a-form-item>
      <a-form-item>
        <a-input v-decorator="['verification', { rules: [{ required: true, message: '请输入验证码' }] }]" placeholder="验证码">
          <a-icon slot="prefix" type="lock" style="color: rgba(0,0,0,.25)" />
        </a-input>
        <div v-html="verificateSvg" @click="getCaptcha"></div>
      </a-form-item>
      <a-form-item>
        <a-checkbox v-decorator="['remember', { valuePropName: 'checked', initialValue: true }]">
          记住我
        </a-checkbox>
        <router-link class="login-form-forgot" to="forget">
          忘记密码
        </router-link>
        <a-button type="primary" html-type="submit" class="login-form-button">
          立即登录
        </a-button>
        或者
        <router-link to="register">
          立即注册
        </router-link>
      </a-form-item>
    </a-form>
  </div>
</template>

<script>
import { getCode } from '../../api/login'
export default {
  name: 'login',
  data () {
    return {
      loginForm: this.$form.createForm(this, { name: 'loginForm' }),
      verificateSvg: ''
    }
  },
  mounted () {
    this.getCaptcha()
  },
  methods: {
    handleSubmit (e) {
      e.preventDefault()
      this.loginForm.validateFields((err, values) => {
        if (!err) {
          console.log('Received values of form: ', values)
        }
      })
    },
    getCaptcha () {
      getCode().then(res => {
        if (res.status === 200) {
          if (res.data.code === 200) {
            this.verificateSvg = res.data.data
          }
        }
      })
    }
  }
}
</script>
<style lang="less" scoped>
.wrapper {
  display: flex;
  justify-content: center;
  align-items: center;
}
.login-form {
  max-width: 300px;
}
.login-form-forgot {
  float: right;
}
.login-form-button {
  width: 100%;
}
</style>

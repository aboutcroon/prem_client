<template>
  <div class="login">
    <div class="container">
      <section class="header">
        <div class="box">
          <i class="iconfont icon-sun" style="font-size: 48px; color: #C53C26;"></i>
        </div>
        <div class="box">
          <span style="font-size: 24px">Sign in to Prem</span>
        </div>
      </section>
      <div class="warning" v-if="errorMessage">
        <span style="display: flex;">
          {{ errorMessage }}
          <i class="iconfont icon-x" style="color: #C53C26; margin-left: 15px; cursor: pointer;" @click="errorMessage = ''"></i>
        </span>
      </div>
      <section class="form-box">
        <validation-observer ref="observer" v-slot="{ validate }">
          <a-form :form="loginForm" class="login-form">
            <validation-provider name="username" rules="required|email" v-slot="{ errors }">
              <a-form-item>
                Phone number or email address
                <a-input v-model="loginForm.username"></a-input>
                <span class="error">{{ errors[0] }}</span>
              </a-form-item>
            </validation-provider>
            <validation-provider name="password" rules="required|min:6" v-slot="{ errors }">
              <a-form-item>
                Password
                <a-input v-model="loginForm.password" type="password"></a-input>
                <div class="error">{{ errors[0] }}</div>
              </a-form-item>
            </validation-provider>
            <validation-provider name="verification code" rules="required|length:4" v-slot="{ errors }">
              <a-form-item>
                Verification code
                <a-input v-model="loginForm.code"></a-input>
                <div v-html="verificateSvg" @click="getCaptcha" style="margin-top: 10px"></div>
                <div class="error">{{ errors[0] }}</div>
              </a-form-item>
            </validation-provider>
            <a-form-item>
              <a-checkbox>
                Remember me
              </a-checkbox>
              <router-link class="login-form-forgot" to="forget">
                Forgot password?
              </router-link>
              <a-button type="primary" html-type="submit" class="login-form-button" style="font-weight: 700" @click="validate().then(submit)">
                {{ loading ? 'Signing in...' : 'Sign in' }}
              </a-button>
            </a-form-item>
          </a-form>
        </validation-observer>
      </section>
      <section class="new">
        New to Prem?
        <router-link to="register">
          Create an account
        </router-link>
        .
      </section>
    </div>
  </div>
</template>

<script>
import { mapState } from 'vuex'
import request from '@/common/request'
import { ValidationProvider, ValidationObserver } from 'vee-validate'
import { v4 as uuidv4 } from 'uuid'
export default {
  name: 'login',
  components: {
    ValidationProvider,
    ValidationObserver
  },
  data () {
    return {
      loginForm: {
        username: '',
        password: '',
        code: ''
      },
      verificateSvg: '',
      errorMessage: '',
      loading: false
    }
  },
  computed: {
    ...mapState(['sid'])
  },
  mounted () {
    let sid = ''
    if (localStorage.getItem('sid')) {
      sid = localStorage.getItem('sid')
    } else {
      sid = uuidv4()
      localStorage.setItem('sid', sid)
    }
    this.$store.commit('setSid', sid)
    this.getCaptcha(sid)
  },
  methods: {
    async submit () {
      const isValid = await this.$refs.observer.validate()
      if (!isValid) {
        return
      }
      this.loading = true
      const res = await request.login({
        data: {
          username: this.loginForm.username,
          password: this.loginForm.password,
          code: this.loginForm.code,
          sid: this.sid
        }
      })
      this.loading = false
      if (res.code === 200) {
        console.log(res)
      } else {
        this.errorMessage = res.message
      }
    },
    getCaptcha (sid) {
      request.getCode({
        params: {
          sid
        }
      }).then(res => {
        // status 是 http 状态码
        if (res.code === 200) {
          this.verificateSvg = res.data
        }
      })
    }
  }
}
</script>
<style lang="less" scoped>
.container {
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}

.header {
  width: 100%;
  padding: 24px 0;

  .box {
    text-align: center;
  }
}

.warning {
  background: #FEE3E6;
  height: 50px;
  width: 348px;
  border-radius: 6px;
  border: 1px solid rgb(226, 107, 107);
  margin-bottom: 15px;
  display: flex;
  justify-content: center;
  align-items: center;
}

.form-box {
  background: #F6F8FA;
  padding: 24px;
  border-radius: 6px;

  .error {
    position: absolute;
    left: 0;
    bottom: 0;
    color: #C53C26;
    line-height: 0;
    transform: translateY(16px)
  }
}

.new {
  width: 348px;
  padding: 15px 20px;
  border: 1px solid #D4D7DB;
  border-radius: 6px;
  text-align: center;
  margin-top: 16px;
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

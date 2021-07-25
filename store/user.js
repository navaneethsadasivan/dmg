import Vue from 'vue'
import Cookie from 'js-cookie'

export const state = () => ({
  isLoggedIn: false,
  username: '',
  token: ''
})

export const mutations = {
  updateAuth(state, value) {
    if (value) {
      Cookie.set('loggedIn', 1, { expires: 1 })
      Cookie.set('token', value, { expires: 1 })
      state.isLoggedIn = true
      state.token = value
    } else if (value === 0) {
      Cookie.remove('loggedIn')
      Cookie.remove('token')
      state.isLoggedIn = false
      state.value = ''
    }
  },
  updateUser(state, value) {
    if (state.isLoggedIn && value) {
      Cookie.set('user', value, { expires: 1 })
      state.username = value
    } else {
      Cookie.remove('user')
      state.username = ''
    }
  }

}

export const actions = {
  async register({ dispatch, commit, redirect}, payload) {
    this.$axios.setBaseURL('http://localhost:8000')
    await this.$axios.post(
      '/register', payload
    ).then((result) => {
      commit('updateAuth', 1)
      commit('updateUser', payload.username)
      this.$router.push('/')
    })
  },

  async login({ dispatch, commit, redirect }, payload) {
    this.$axios.setBaseURL(`${process.env.base_url}`)
    await this.$axios.post(
      '/login', payload
    ).then((result) => {
      if(result.data.auth) {
        commit('updateAuth', result.data.token)
        commit('updateUser', payload.username)
        this.$router.push('/')
      } else {
        Vue.prototype.$message.error('User not found')
      }
    })
  },

  logout({ dispatch, commit, redirect }) {
    commit('updateAuth', 0)
    commit('updateUser')
    this.$router.push('/login')
  }
}

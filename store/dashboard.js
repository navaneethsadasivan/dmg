export const state = () => ({
  navBar: false,
  navBarItem: '1'
})

export const mutations = {
  toggle(state) {
    state.navBar = !state.navBar
  },
  updateItem(state, value) {
    state.navBarItem = value
  }
}

export const getters = {
  getNavBarState(state) {
    return state.navBar
  },
  getNavBarCurrentItem(state) {
    return state.navBarItem
  }
}

export const actions = {
  doToggle({ dispatch, commit }) {
    commit('toggle')
  },
  doUpdateItem({ dispatch, commit }, value) {
    commit('updateItem', value)
  }
}

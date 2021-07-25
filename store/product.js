export const state = () => ({
  list: []
})

export const mutations = {
  addProduct(state, product) {
    state.list.push({
      name: product.name,
      price: parseFloat(product.price),
      tags: product.selectedTags,
      status: false
    })
  },
  updateStatus(state, product) {
    product.status = !product.status
  },
  updateProduct(state, payload) {
    payload.product.name = payload.update.editName
    payload.product.price = payload.update.editPrice
    payload.product.tags = payload.update.editTags
  }
}

export const getters = {
  getProducts(state) {
    return state.list
  },
  getTotalCount(state) {
    return state.list.length
  }
}

export const actions = {
  add({ dispatch, commit }, payload) {
    commit('addProduct', payload)
  },
  update({ dispatch, commit }, payload) {
    commit('updateProduct', payload)
  },
  changeStatus({ dispatch, commit }, payload) {
    commit('updateStatus', payload)
  }
}

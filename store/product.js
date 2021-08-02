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
    payload.product.name = payload.update.name
    payload.product.price = payload.update.price
    payload.product.tags = payload.update.selectedTags
  },
  deleteProduct(state, product) {
    state.list.splice(state.list.indexOf(product), 1)
  }
}

export const getters = {
  getProducts(state) {
    return state.list
  },
  getTotalProducts(state) {
    return state.list.length
  },
  getActiveProducts(state) {
    let count = 0
    state.list.forEach(product => {
      if (product.status) {
        count++
      }
    })
    return count
  },
  getProductsInfo(state, getters) {
    return {
      featuredName: 'Active',
      featuredValue: getters.getActiveProducts,
      additionalDetails: [
        {name: 'Total', value: getters.getTotalProducts}
      ]
    }
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
  },
  remove({ dispatch, commit }, payload) {
    commit('deleteProduct', payload)
  }
}

export const state = () => ({
  categories: []
})

export const mutations = {
  addCategory(state, category) {
    state.categories.push({
      name: category.name,
      active: false,
      description: category.description,
      items: category.items
    })
  },
  addCategoryItem(state, category) {
    state.categories.forEach(stateCategory => {
      if (stateCategory.name === category.name) {
        stateCategory.items.push({
          name: category.item
        })
      }
    })
  },
  updateStatus(state, category) {
    category.active = !category.active
  },
  deleteCategory(state, category) {
    state.categories.splice(state.categories.indexOf(category), 1)
  }
}

export const getters = {
  getCategories(state) {
    return state.categories
  },
  getTotalCategories(state) {
    return state.categories.length
  },
  getTotalCategoryAttributes(state) {
    let count = 0
    state.categories.forEach(category => {
      count+=category.items.length
    })
    return count
  },
  getCategoryInfo(state, getters) {
    return {
      featuredName: 'Total',
      featuredValue: getters.getTotalCategories,
      additionalDetails: [
        {name: 'Attributes', value: getters.getTotalCategoryAttributes}
      ]
    }
  }
}

export const actions = {
  addNewCategory({ dispatch, commit }, payload) {
    commit('addCategory', payload)
  },
  addNewCategoryItem({ dispatch, commit }, payload) {
    commit('addCategoryItem', payload)
  },
  toggle({ dispatch, commit }, payload) {
    commit('updateStatus', payload)
  },
  remove({ dispatch, commit }, payload) {
    commit('deleteCategory', payload)
  }
}

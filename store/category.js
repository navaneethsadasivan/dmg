export const state = () => ({
  categories: []
})

export const mutations = {
  addCategory(state, category) {
    state.categories.push({
      categoryName: category.name,
      categoryItems: category.items
    })
  },
  addCategoryItem(state, category) {
    state.categories.forEach(stateCategory => {
      if (stateCategory.categoryName === category.name) {
        stateCategory.categoryItems.push({
          itemName: category.item
        })
      }
    })
  }
}

export const getters = {
  getCategories(state) {
    return state.categories
  }
}

export const actions = {
  addNewCategory({ dispatch, commit }, payload) {
    commit('addCategory', payload)
  },
  addNewCategoryItem({ dispatch, commit }, payload) {
    commit('addCategoryItem', payload)
  }
}

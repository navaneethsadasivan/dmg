// export const state = () => ({
//   list: []
// })

// export const mutations = {
//   add(state, product) {
//     state.list.push({
//       productName: product.name,
//       quantity: product.quantity,
//       price: product.price,
//       totalPrice: product.quantity * product.price
//     })
//   },
//   remove(state, product) {
//     state.list.splice(state.list.indexOf(product), 1)
//   },
//   updateQuantity(state, payload) {
//     if (payload.mode === 'add') {
//       payload.product.quantity += 1
//       payload.product.totalPrice = payload.product.quantity * payload.product.price
//     } else if (payload.mode === 'substract') {
//       payload.product.quantity -= 1
//       payload.product.totalPrice = payload.product.quantity * payload.product.price
//     }
//   }
// }

// export const getters = {
//   getTotalCount(state) {
//     return state.list.length
//   },
//   getTotalPrice(state) {
//     let total = 0
//     state.list.forEach(item => {
//       total += item.totalPrice
//     });
//     return total
//   },
//   getListItems(state) {
//     return state.list
//   }
// }

// export const actions = {
//   addToBasket({ dispatch, commit}, payload) {
//     commit('add', payload)
//   },
//   updateItemQuantity({ dispatch, commit }, payload) {
//     commit('updateQuantity', payload)
//   },
//   removeFromBasket({ dispatch, commit }, payload) {
//     commit('remove', payload)
//   }
// }

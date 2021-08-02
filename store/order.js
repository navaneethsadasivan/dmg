export const state = () => ({
    list: []
  })
  
  export const mutations = {
    addOrder(state, order) {
      state.list.push({
        orderNumber: order.orderNumber,
        totalItems: order.totalItems,
        totalPrice: parseFloat(order.totalPrice),
        customerId: order.customerId,
        status: order.status,
        trackingId: order.trackingId
      })
    },
    updateOrder(state, payload) {
      payload.order.orderNumber = payload.update.orderNumber
      payload.order.totalItems = payload.update.totalItems
      payload.order.totalPrice = payload.update.totalPrice
      payload.order.customerId = payload.update.customerId
      payload.order.status = payload.update.status
      payload.order.trackingId = payload.update.trackingId
    },
    deleteOrder(state, order) {
      state.list.splice(state.list.indexOf(order), 1)
    }
  }
  
  export const getters = {
    getOrders(state) {
      return state.list
    },
    getTotalOrders(state) {
      return state.list.length
    },
    getStatusOrders(state) {
      let [countCompleted, countProcessing, countCancelled, countIssue] = [0, 0, 0, 0]
      state.list.forEach(order => {
        switch(order.status) {
          case 'Completed':
            countCompleted++
            break;
          case 'Processing':
            countProcessing++
            break;
          case 'Cancelled':
            countCancelled++
            break;
          case 'Issue':
            countIssue++
            break;
        }
      })
      return {
        completed: {featuredName: 'Completed', featuredValue: countCompleted},
        processing: {featuredName: 'Processing', featuredValue: countProcessing},
        cancelled: {featuredName: 'Cancelled', featuredValue: countCancelled},
        issue: {featuredName: 'Issue', featuredValue: countIssue}
      }
    },
    getOrdersInfo(state, getters) {
      return {
        featuredName: 'Completed',
        featuredValue: getters.getStatusOrders.completed.featuredValue,
        additionalDetails: [
          {name: 'Processing', value: getters.getStatusOrders.processing.featuredValue},
          {name: 'Cancelled', value: getters.getStatusOrders.cancelled.featuredValue},
          {name: 'Issue', value: getters.getStatusOrders.issue.featuredValue}
        ]
      }
    }
  }
  
  export const actions = {
    add({ dispatch, commit }, payload) {
      commit('addOrder', payload)
    },
    update({ dispatch, commit }, payload) {
      commit('updateOrder', payload)
    },
    remove({ dispatch, commit }, payload) {
      commit('deleteOrder', payload)
    }
  }
  
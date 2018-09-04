import {firebaseAction} from 'vuexfire'

const state = {
    orders: []
}

const getters = {
    getOrders: state =>state.orders,
    numberOfOrders:state => state.orders.length
}

const mutations = {
    addOrder:(state, orders)=>state.orders.push(orders)
}

const actions = {    
    //this binds the database (firebase) to our store state above
    setOrdersRef:firebaseAction(({ bindFirebaseRef}, { ref }) => {
        
        bindFirebaseRef('orders', ref)      
    })   
}

export default {
    state,
    getters,
    mutations,
    actions
}
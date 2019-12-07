export default {
    state: {
        counter: 100
    },
    mutations: {
        changeCounter (state, payload){
            state.counter += payload
        }
    },
    actions: {
        asyncChangeCounter ({commit}, payload){
            setTimeout(() => {
                commit('changeCounter', payload.counterValue)
            }, payload.timeoutDelay)
        }
    },
    getters: {
        computedCouner (state){
            return state.counter *(5 - 2)
        }

    }

}
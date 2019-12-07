import Vue from 'vue'
import Vuex from 'vuex';

Vue.use(Vuex);


export default new Vuex.Store({
    state: {
        counter: 100
    },
    getters: {
        computedCouner (state){
            return state.counter *(5 - 2)
        }

    }

})
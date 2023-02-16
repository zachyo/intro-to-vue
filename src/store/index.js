import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    count: 0,
  },
  mutations: {
    increment(state, num) {
      state.count += num;
    },
  },
  actions: {
    asyncIncrement({ commit }, asyncNum) {
      setTimeout(() => {
        commit("increment", asyncNum);
      }, 2000);
    },
  },
  getters: {
    doubleCount(state) {
      return state.count * 2;
    },
  },
});

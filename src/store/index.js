import { createStore } from 'vuex'

export default createStore({
  state: {
    badgeTimes: 
      []
  },
  getters: {
  },
  mutations: {
    GET_BADGE_TIMES(state, value) {
      state.badgeTimes = value
    }
  },
  actions: {
    getBadgeTimes(context) {
      fetch("http://localhost:3000/api/badge-time")
        .then((res) => {
          if (res.ok) {
            return res.json();
          }
        })
        .then((value) => {
          context.commit('GET_BADGE_TIMES', value)
        })
        .catch((err) => {
          console.log(err);
        });
    }
  },
  modules: {
  }
})

import { createStore } from 'vuex';

export default createStore({
  state: {
    badgeTimes: 
      [],
    addressApi: 'https://evening-shore-80525.herokuapp.com'
  },
  mutations: {
    GET_BADGE_TIMES(state, value) {
      state.badgeTimes = value
    }
  },
  actions: {
    getBadgeTimes(context) {
      let xsrfToken = localStorage.getItem('xsrfToken');
      fetch(this.state.addressApi + "/api/badge-time", {
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
          'x-xsrf-token': xsrfToken,
        },
      })
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
    },
  },
  modules: {
  }
})

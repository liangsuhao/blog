// initial state
const state = () => ({
    token: ''
  })
  
  // getters
  const getters = {
    getToken: ()=>{
        return state.token;
    }
  }
  
  // actions
  const actions = {
    // checkToken ({ commit }) {
      
    // },

    saveToken ({ commit }, token) {
        commit('setToken',token)
    }
  }
  
  // mutations
  const mutations = {
    setToken (state, token) {
      state.token = token;
      console.log(123)
      localStorage.setItem('token',token);
    },
  }
  
  export default {
    namespaced: true,
    state,
    getters,
    actions,
    mutations
  }
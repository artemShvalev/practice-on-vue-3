import axios from "axios";
import { error } from "@/utils/error";

const tokenKey = "jwt-token";

export default {
  namespaced: true, //  для того что бы название экшнов были локальными
  state(){
    return {
      token: localStorage.getItem(tokenKey),
    };
  },
  mutations: {
    setToken(state, token) {
      state.token = token;
      localStorage.setItem(tokenKey, token);
    },
    logout(state){
      state.token = null;
      localStorage.removeItem(tokenKey);
    },
  },
  actions: {
    async login({ commit, dispatch }, payload ) {
      try {
        const url = `https://identitytoolkit.googleapis.com/v1/accounts:signUP?key=${process.env.VUE_APP_FB_KEY}`
        const { data } = await axios.get(url, { ...payload, returnSecureToken: true });
        commit("setToken", data.idToken);
        commit('clearMessage', null, { root: true })
      } catch (e) {
        dispatch("setMessage", {
            value: error(e.response.data.error.message),
            type: "danger",
        }, { root: true });
        throw new Error();
      }
    },
  },
  getters: {
    token(state) {
      return state.token;
    },
    isAuthenticated(_, getters) {
      return !!getters.token;
    },
  },
};

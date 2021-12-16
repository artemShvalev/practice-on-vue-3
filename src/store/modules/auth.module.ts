/* eslint-disable @typescript-eslint/no-explicit-any */
import axios from "axios";
import { error } from "@/utils/error";

const tokenKey = "jwt-token";


export default {
  namespaced: true, //  для того что бы название экшнов были локальными
  state(): unknown {
    return {
      token: localStorage.getItem(tokenKey),
    };
  },
  mutations: {
    setToken(state: any, token: string): void {
      state.token = token;
      localStorage.setItem(tokenKey, token);
    },
    logout(state: any): void {
      state.token = null;
      localStorage.removeItem(tokenKey);
    },
  },
  actions: {
    // eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
    async login({ commit }: any, {...payload }): Promise<any> {
      try {
        const url = `https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=${process.env.VUE_APP_FB_KEY}`;
        const { data } = await axios.post(url, payload);
        commit("setToken", data.idToken);
      } catch (e: ?unknown) {
        console.log(error(e.response.data.error.message));
        throw new Error()
      }
    },
  },
  getters: {
    token(state: any) {
      return state.token;
    },
    isAuthenticated(state: any, getters: any) {
      return !!state.token;
    },
  },
};

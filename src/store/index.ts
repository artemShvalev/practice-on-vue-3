import { createStore, createLogger } from "vuex";
import auth from "./modules/auth.module";
import request from "./modules/request.module";

const plugins = []

if (process.env.NODE_ENV === "development") {
  plugins.push(createLogger());

}

export default createStore({
  plugins,
  state(): unknown {
    return {
      message: null,
      sidebar: false,
    };
  },
  mutations: {
    setMessage(state: any, message) {
      state.message = message;
    },
    clearMessage(state) {
      state.message = null;
    },
    openSidebar(state) {
      state.sidebar = true;
    },
    closeSidebar(state) {
      state.sidebar;
    },
  },
  actions: {
    setMessage({ commit }, message) {
      commit("setMessage", message);
      setTimeout(() => {
        commit("clearMessage");
      }, 10000);
    },
  },
  modules: {
    auth,
    request,
  },
});

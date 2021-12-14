const tokenKey = 'jwt-token'

export default {
  namespaced: true, //  для того что бы название экшнов были локальными
  state(): unknown {
    return {
      token: localStorage.getItem(tokenKey),
    };
  },
  logout(state: any): void {
    state.token = null;
    localStorage.removeItem(tokenKey);
  },
  mutations: {
    setToken(state: any, token: string): void {
      state.token = token;
      localStorage.setItem(tokenKey, token);
    },
  },
  actions: {
    async login({ commit }: any, payload: any): Promise<any> {
      commit("setToken", "Test token");
    },
  },
  getters: {
    token(state: any) {
      return state.token;
    },
  },
  isAuthenticated(state: any, getters: any) {
    return !!state.token;
  },
};

import axios from "@/axios/request";
import store from "@/store/index";

export default {
  namespaced: true,
  state(): undefined | any {
    return {
      requests: [],
    };
  },
  mutations: {
    setRequests(state: any, requests: any | []): void {
      state.requests = requests;
    },
    addRequest(state: any, request: any) {
      state.requests.push(request);
    },
  },
  actions: {
    async create({ commit, dispatch }: any, payload: any): Promise<any> {
      try {
        const token = store.getters["auth/token"];
        const { data } = await axios.post(
          `/requests.json?auth=${token}`,
          payload
        );
        commit("addRequest", { ...payload, id: data.name });
        dispatch(
          "setMessage",
          {
            value: "Заявка успешно добавлена",
            type: "text-green-500",
          },
          { root: true }
        );
      } catch (e) {
        dispatch(
          "setMessage",
          {
            value: `Ошибка ${e.message}`,
            type: "text-red-500",
          },
          { root: true }
        );
      }
    },
  },
  getters: {
    requests(state: any) {
      return state.requests
    }
  }
};

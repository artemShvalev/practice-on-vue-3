import axios from "../../axios/request";
import store from "../index";

export default {
  namespaced: true,
  state() {
    return {
      requests: [],
    };
  },
  mutations: {
    setRequests(state: any, requests: any) {
      state.requests = requests;
    },
    addRequest(state: any, request: any) {
      state.requests.push(request);
    },
  },
  actions: {
    async create({ commit, dispatch }: any, payload: any) {
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
            type: ".text-red-500",
          },
          { root: true }
        );
      }
    },
    async load({ commit, dispatch }) {
      try {
        const token = store.getters["auth/token"];
        const { data } = await axios.get(`/requests.json?auth=${token}`);
        const requests = Object.keys(data).map((id) => ({ ...data[id], id }));
        commit("setRequests", requests);
      } catch (e) {
        dispatch(
          "setMessage",
          { value: `Ошибка ${e.message}`, type: "text-red-500" },
          { root: true }
        );
      }
    },
    async loadOne({ commit, dispatch }, id) {
      try {
        const token = store.getters["auth/token"];
        const { data } = await axios.get(`/requests/${id}.json?auth=${token}`);
        return data
      } catch (e) {
        dispatch(
          "setMessage",
          { value: `Ошибка ${e.message}`, type: "text-red-500" },
          { root: true }
        );
      }
    },
    async remove({ dispatch }, id) {
      try {
        const token = store.getters["auth/token"];
        await axios.delete(`/requests/${id}.json?auth=${token}`);
        dispatch('setMessage', {
          value: 'заявка удалена',
          type: 'text-green-500'
        }, {root: true})
      } catch (e) {
        dispatch(
            "setMessage",
            { value: `Ошибка ${e.message}`, type: "text-red-500" },
            { root: true }
        );
      }
    },
    async update({ dispatch }, request) {
      try {
        const token = store.getters["auth/token"];
        await axios.put(`/requests/${request.id}.json?auth=${token}`, request);
        dispatch('setMessage', {
          value: 'заявка обновлена',
          type: 'text-green-500'
        }, {root: true})
      } catch (e) {
        dispatch(
            "setMessage",
            { value: `Ошибка ${e.message}`, type: "text-red-500" },
            { root: true }
        );
      }
    },
  },
  getters: {
    requests(state: any) {
      return state.requests;
    },
  },
};

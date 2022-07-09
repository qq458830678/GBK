import Vue from "vue";
import Vuex from "vuex";

import { ReqCategoryList } from "@/api/index";

Vue.use(Vuex);

const state = { CategoryList: [] };

const mutations = {
  CATEGORY_LIST_DATA(state, data) {
    state.CategoryList = data;
  },
};

const actions = {
  async AsyncCategoryList({ commit }) {
    const result = await ReqCategoryList();
    console.log(result);
    commit("CATEGORY_LIST_DATA", result.data);
  },
};

const getters = {};

export default new Vuex.Store({
  state,
  mutations,
  actions,
  getters,
});

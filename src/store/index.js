import Vue from 'vue'
import Vuex from 'vuex'
import podcast from './modules/podcast';

Vue.use(Vuex);

export const store = new Vuex.Store({
  modules: {
    podcast
  }
});

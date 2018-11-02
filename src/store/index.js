import Vue from 'vue'
import Vuex from 'vuex'
import podcast from './modules/podcast';
import stories from './modules/stories';

Vue.use(Vuex);

export const store = new Vuex.Store({
  modules: {
    podcast,
    stories
  }
});

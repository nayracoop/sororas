import Vue from 'vue'
import * as types from '../types';

const state = {
  opened: 0,
  groups:[
    { label:"M", el:null, current:-1, parts:[
      { title:"Embarazo", img:"", audio:"1-MABEL-quedaembarazada.mp3", dependencies:[], listened:false, enabled:true }
    ] },
    { label:"P", el:null, current:-1, parts:[
      { title:"Embarazo", img:"", audio:"1-PAOLA-quedaembaraza.mp3", dependencies:[ [0,0], [2,0] ], listened:false, enabled:false }
    ] },
    { label:"C", el:null, current:-1, parts:[
      { title:"Embarazo", img:"", audio:"2-CARLA-embarazo.mp3", dependencies:[ ], listened:false, enabled:true },
      { title:"Motivos", img:"", audio:"3-CARLA-noestabapreparada.mp3", dependencies:[ [1,0] ], listened:false, enabled:false }
    ] }
  ]
}

export const actions = {

}

export const mutations = {
  [types.TOGGLE_STORIES]: state => {
    state.opened = !state.opened
  }
}

const getters = {
  [types.STORY_LIST]: state => {
    return state.groups
  },
  [types.IS_OPENED]: state => {
    return state.opened
  }
}

export default {
  state,
  actions,
  mutations,
  getters
}

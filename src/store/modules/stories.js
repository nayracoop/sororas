import Vue from 'vue'
import * as types from '../types';

const state = {
  visible: false,
  playing: false,
  characters: [
    { name: 'Luciana', current: -1, stories: [
      { title: 'Embarazo', img: '', src: '/src/assets/video/test_b2.mp4', dependencies: [], viewed: false, enabled: true },
      { title: 'Embarazo', img: '', src: '/src/assets/video/test_a.mp4', dependencies: [], viewed: false, enabled: true }
    ] },
    { name: 'Mara', current: -1, stories: [
      { title: 'Embarazo', img: '', src: '/src/assets/video/test_b2.mp4', dependencies: [ [0,0], [2,0] ], viewed: false, enabled: false }
    ] },
    { name: 'Malvina', current: -1, stories: [
      { title: 'Embarazo', img: '', src: '/src/assets/video/malvina_1.mp4', dependencies: [], viewed: false, enabled: true },
      { title: 'Embarazo', img: '', src: '/src/assets/video/malvina_2.mp4', dependencies: [], viewed: false, enabled: true },
      { title: 'Embarazo', img: '', src: '/src/assets/video/malvina_3.mp4', dependencies: [], viewed: false, enabled: true },
      { title: 'Embarazo', img: '', src: '/src/assets/video/malvina_4.mp4', dependencies: [], viewed: false, enabled: true },
      { title: 'Embarazo', img: '', src: '/src/assets/video/malvina_5.mp4', dependencies: [], viewed: false, enabled: true },
      { title: 'Embarazo', img: '', src: '/src/assets/video/malvina_6.mp4', dependencies: [], viewed: false, enabled: true },
      { title: 'Embarazo', img: '', src: '/src/assets/video/malvina_7.mp4', dependencies: [ [1,0] ], viewed: false, enabled: true },
    ] }
  ],
  current: 0
}

export const actions = {

}

export const mutations = {
  [types.TOGGLE_STORIES]: state => {
    state.visible = !state.visible
  },
  [types.SHOW_STORY]: state => {
    state.playing = true
  },
  [types.HIDE_STORY]: state => {
    state.playing = false
  },
  [types.SET_CURRENT_STORY]: (state, payload) => {
    if(payload < 0) payload = 0
    else if(payload >= state.characters.length) payload = state.characters.length-1
    state.current = payload
  }
}

const getters = {
  [types.STORY_LIST]: state => {
    return state.characters
  },
  [types.CURRENT_STORY]: state => {
    return state.characters[state.current]
  },
  [types.VISIBLE]: state => {
    return state.visible
  },
  [types.PLAYING]: state => {
    return state.playing
  },
  [types.RELEASES]: state => {
    let news = false
    state.characters.forEach(ch => {
      if(ch.stories.find(el => { return el.viewed === false && el.enabled === true }) != undefined) news = true
    })
    return news
  }
}

export default {
  state,
  actions,
  mutations,
  getters
}

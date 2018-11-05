import Vue from 'vue'
import * as types from '../types';

const state = {
  visible: false,
  playing: false,
  characters: [
    { name: 'Macarena', current: -1, stories: [
      { title: '', img: '', src: '/src/assets/video/Macarena/Macarena 1.mp4', dependencies: [], viewed: false, enabled: true },
      { title: '', img: '', src: '/src/assets/video/Macarena/Macarena 2.mp4', dependencies: [], viewed: false, enabled: true },
      { title: '', img: '', src: '/src/assets/video/Macarena/Macarena 3.mp4', dependencies: [], viewed: false, enabled: true },
      { title: '', img: '', src: '/src/assets/video/Macarena/Macarena 4.mp4', dependencies: [], viewed: false, enabled: true },
      { title: '', img: '', src: '/src/assets/video/Macarena/Macarena 5.mp4', dependencies: [], viewed: false, enabled: true },
      { title: '', img: '', src: '/src/assets/video/Macarena/Macarena 6.mp4', dependencies: [], viewed: false, enabled: true }
    ] },
    { name: 'Mabel', current: -1, stories: [
      { title: '', img: '', src: '/src/assets/video/Mabel/Mabel 1.mp4', dependencies: [], viewed: false, enabled: true },
      { title: '', img: '', src: '/src/assets/video/Mabel/Mabel 2.mp4', dependencies: [], viewed: false, enabled: true },
      { title: '', img: '', src: '/src/assets/video/Mabel/Mabel 3.mp4', dependencies: [], viewed: false, enabled: true }
    ] },
    { name: 'Luciana', current: -1, stories: [
      { title: '', img: '', src: '/src/assets/video/Luciana/Luciana 1.mp4', dependencies: [], viewed: false, enabled: true },
      { title: '', img: '', src: '/src/assets/video/Luciana/Luciana 2.mp4', dependencies: [], viewed: false, enabled: true },
      { title: '', img: '', src: '/src/assets/video/Luciana/Luciana 3.mp4', dependencies: [], viewed: false, enabled: true }
    ] },
    { name: 'Graciela', current: -1, stories: [
      { title: '', img: '', src: '/src/assets/video/Graciela/Graciela 1.mp4', dependencies: [], viewed: false, enabled: true },
      { title: '', img: '', src: '/src/assets/video/Graciela/Graciela 2.mp4', dependencies: [], viewed: false, enabled: true },
      { title: '', img: '', src: '/src/assets/video/Graciela/Graciela 3.mp4', dependencies: [], viewed: false, enabled: true },
      { title: '', img: '', src: '/src/assets/video/Graciela/Graciela 4.mp4', dependencies: [], viewed: false, enabled: true },
      { title: '', img: '', src: '/src/assets/video/Graciela/Graciela 5.mp4', dependencies: [], viewed: false, enabled: true }
    ] },
    { name: 'Gisela', current: -1, stories: [
      { title: '', img: '', src: '/src/assets/video/Gisela/Gisela 1.mp4', dependencies: [], viewed: false, enabled: true },
      { title: '', img: '', src: '/src/assets/video/Gisela/Gisela 2.mp4', dependencies: [], viewed: false, enabled: true },
      { title: '', img: '', src: '/src/assets/video/Gisela/Gisela  3.mp4', dependencies: [], viewed: false, enabled: true },
      { title: '', img: '', src: '/src/assets/video/Gisela/Gisela 4.mp4', dependencies: [], viewed: false, enabled: true },
      { title: '', img: '', src: '/src/assets/video/Gisela/Gisela 5.mp4', dependencies: [], viewed: false, enabled: true }
    ] },
    { name: 'Emiliana', current: -1, stories: [
      { title: '', img: '', src: '/src/assets/video/Emiliana/Emiliana 1.mp4', dependencies: [], viewed: false, enabled: true },
      { title: '', img: '', src: '/src/assets/video/Emiliana/Emiliana 2.mp4', dependencies: [], viewed: false, enabled: true },
      { title: '', img: '', src: '/src/assets/video/Emiliana/Emiliana 3.mp4', dependencies: [], viewed: false, enabled: true }
    ] },
    { name: 'Carla', current: -1, stories: [
      { title: '', img: '', src: '/src/assets/video/Carla/Carla 1.mp4', dependencies: [], viewed: false, enabled: true },
      { title: '', img: '', src: '/src/assets/video/Carla/Carla 2.mp4', dependencies: [], viewed: false, enabled: true },
      { title: '', img: '', src: '/src/assets/video/Carla/Carla 3.mp4', dependencies: [], viewed: false, enabled: true }
    ] },
    { name: 'Teresa', current: -1, stories: [
      { title: '', img: '', src: '/src/assets/video/Teresa/Teresa 1.mp4', dependencies: [], viewed: false, enabled: true },
      { title: '', img: '', src: '/src/assets/video/Teresa/Teresa 2.mp4', dependencies: [], viewed: false, enabled: true },
      { title: '', img: '', src: '/src/assets/video/Teresa/Teresa 3.mp4', dependencies: [], viewed: false, enabled: true },
      { title: '', img: '', src: '/src/assets/video/Teresa/Teresa 5.mp4', dependencies: [], viewed: false, enabled: true }
    ] },
    { name: 'Paola', current: -1, stories: [
      { title: '', img: '', src: '/src/assets/video/Paola/Paola 1.mp4', dependencies: [], viewed: false, enabled: true },
      { title: '', img: '', src: '/src/assets/video/Paola/Paola 2.mp4', dependencies: [], viewed: false, enabled: true },
      { title: '', img: '', src: '/src/assets/video/Paola/Paola 3.mp4', dependencies: [], viewed: false, enabled: true },
      { title: '', img: '', src: '/src/assets/video/Paola/Paola 4.mp4', dependencies: [], viewed: false, enabled: true },
      { title: '', img: '', src: '/src/assets/video/Paola/Paola 5.mp4', dependencies: [], viewed: false, enabled: true },
      { title: '', img: '', src: '/src/assets/video/Paola/Paola 6.mp4', dependencies: [], viewed: false, enabled: true },
      { title: '', img: '', src: '/src/assets/video/Paola/Paola 7.mp4', dependencies: [], viewed: false, enabled: true }
    ] },
    { name: 'Marcela', current: -1, stories: [
      { title: '', img: '', src: '/src/assets/video/Marcela/Marcela 1.mp4', dependencies: [], viewed: false, enabled: true },
      { title: '', img: '', src: '/src/assets/video/Marcela/Marcela 2.mp4', dependencies: [], viewed: false, enabled: true },
      { title: '', img: '', src: '/src/assets/video/Marcela/Marcela 3.mp4', dependencies: [], viewed: false, enabled: true },
    ] },
    { name: 'Malvina', current: -1, stories: [
      { title: '', img: '', src: '/src/assets/video/Malvina/Malvina 1.mp4', dependencies: [], viewed: false, enabled: true },
      { title: '', img: '', src: '/src/assets/video/Malvina/Malvina 2.mp4', dependencies: [], viewed: false, enabled: true },
      { title: '', img: '', src: '/src/assets/video/Malvina/Malvina 3.mp4', dependencies: [], viewed: false, enabled: true },
      { title: '', img: '', src: '/src/assets/video/Malvina/Malvina 4.mp4', dependencies: [], viewed: false, enabled: true },
      { title: '', img: '', src: '/src/assets/video/Malvina/Malvina 5.mp4', dependencies: [], viewed: false, enabled: true },
      { title: '', img: '', src: '/src/assets/video/Malvina/Malvina 6.mp4', dependencies: [], viewed: false, enabled: true },
      { title: '', img: '', src: '/src/assets/video/Malvina/Malvina 7.mp4', dependencies: [], viewed: false, enabled: true }
    ] },
    { name: 'Malena', current: -1, stories: [
      { title: '', img: '', src: '/src/assets/video/Malena/Malena 1.mp4', dependencies: [], viewed: false, enabled: true },
      { title: '', img: '', src: '/src/assets/video/Malena/Malena 2.mp4', dependencies: [], viewed: false, enabled: true },
      { title: '', img: '', src: '/src/assets/video/Malena/Malena 3.mp4', dependencies: [], viewed: false, enabled: true },
      { title: '', img: '', src: '/src/assets/video/Malena/Malena 4.mp4', dependencies: [], viewed: false, enabled: true }
    ] }
    // { name: 'Mara', current: -1, stories: [
    //   { title: 'Embarazo', img: '', src: '/src/assets/video/test_b2.mp4', dependencies: [ [0,0], [2,0] ], viewed: false, enabled: false }
    // ] },
    // { name: 'Malvina', current: -1, stories: [
    //   { title: 'Embarazo', img: '', src: '/src/assets/video/malvina_1.mp4', dependencies: [], viewed: false, enabled: true },
    //   { title: 'Embarazo', img: '', src: '/src/assets/video/malvina_2.mp4', dependencies: [], viewed: false, enabled: true },
    //   { title: 'Embarazo', img: '', src: '/src/assets/video/malvina_3.mp4', dependencies: [], viewed: false, enabled: true },
    //   { title: 'Embarazo', img: '', src: '/src/assets/video/malvina_4.mp4', dependencies: [], viewed: false, enabled: true },
    //   { title: 'Embarazo', img: '', src: '/src/assets/video/malvina_5.mp4', dependencies: [], viewed: false, enabled: true },
    //   { title: 'Embarazo', img: '', src: '/src/assets/video/malvina_6.mp4', dependencies: [], viewed: false, enabled: true },
    //   { title: 'Embarazo', img: '', src: '/src/assets/video/malvina_7.mp4', dependencies: [ [1,0] ], viewed: false, enabled: true },
    // ] }
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

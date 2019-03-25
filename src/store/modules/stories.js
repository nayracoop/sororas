import Vue from 'vue'
import * as types from '../types'

const state = {
  visible: false,
  playing: false,
  characters: [
    { name: 'Inés',
      current: -1,
      stories: [
        { title: '', img: '/src/assets/img/thumbnails/011.jpg', src: '/src/assets/video/01/1.mp4', dependencies: [], viewed: false, enabled: true },
        { title: '', img: '/src/assets/img/thumbnails/012.jpg', src: '/src/assets/video/01/2.mp4', dependencies: [], viewed: false, enabled: true },
        { title: '', img: '/src/assets/img/thumbnails/013.jpg', src: '/src/assets/video/01/3.mp4', dependencies: [], viewed: false, enabled: true },
        { title: '', img: '/src/assets/img/thumbnails/014.jpg', src: '/src/assets/video/01/4.mp4', dependencies: [], viewed: false, enabled: true },
        { title: '', img: '/src/assets/img/thumbnails/015.jpg', src: '/src/assets/video/01/5.mp4', dependencies: [], viewed: false, enabled: true },
        { title: '', img: '/src/assets/img/thumbnails/016.jpg', src: '/src/assets/video/01/6.mp4', dependencies: [], viewed: false, enabled: true }
      ] },
    { name: 'Silvia',
      current: -1,
      stories: [
        { title: '', img: '/src/assets/img/thumbnails/021.jpg', src: '/src/assets/video/02/1.mp4', dependencies: [], viewed: false, enabled: true },
        { title: '', img: '/src/assets/img/thumbnails/022.jpg', src: '/src/assets/video/02/2.mp4', dependencies: [], viewed: false, enabled: true },
        { title: '', img: '/src/assets/img/thumbnails/023.jpg', src: '/src/assets/video/02/3.mp4', dependencies: [], viewed: false, enabled: true }
      ] },
    { name: 'M. Belén',
      current: -1,
      stories: [
        { title: '', img: '/src/assets/img/thumbnails/031.jpg', src: '/src/assets/video/03/1.mp4', dependencies: [], viewed: false, enabled: true },
        { title: '', img: '/src/assets/img/thumbnails/032.jpg', src: '/src/assets/video/03/2.mp4', dependencies: [], viewed: false, enabled: true },
        { title: '', img: '/src/assets/img/thumbnails/033.jpg', src: '/src/assets/video/03/3.mp4', dependencies: [], viewed: false, enabled: true }
      ] },
    { name: 'Miriam',
      current: -1,
      stories: [
        { title: '', img: '/src/assets/img/thumbnails/041.jpg', src: '/src/assets/video/04/1.mp4', dependencies: [], viewed: false, enabled: true },
        { title: '', img: '/src/assets/img/thumbnails/042.jpg', src: '/src/assets/video/04/2.mp4', dependencies: [], viewed: false, enabled: true },
        { title: '', img: '/src/assets/img/thumbnails/043.jpg', src: '/src/assets/video/04/3.mp4', dependencies: [], viewed: false, enabled: true },
        { title: '', img: '/src/assets/img/thumbnails/044.jpg', src: '/src/assets/video/04/4.mp4', dependencies: [], viewed: false, enabled: true },
        { title: '', img: '/src/assets/img/thumbnails/045.jpg', src: '/src/assets/video/04/5.mp4', dependencies: [], viewed: false, enabled: true }
      ] },
    { name: 'Blanca',
      current: -1,
      stories: [
        { title: '', img: '/src/assets/img/thumbnails/051.jpg', src: '/src/assets/video/05/1.mp4', dependencies: [], viewed: false, enabled: true },
        { title: '', img: '/src/assets/img/thumbnails/052.jpg', src: '/src/assets/video/05/2.mp4', dependencies: [], viewed: false, enabled: true },
        { title: '', img: '/src/assets/img/videothumbnails05/3.jpg', src: '/src/assets/video/05/ 3.mp4', dependencies: [], viewed: false, enabled: true },
        { title: '', img: '/src/assets/img/thumbnails/054.jpg', src: '/src/assets/video/05/4.mp4', dependencies: [], viewed: false, enabled: true },
        { title: '', img: '/src/assets/img/thumbnails/055.jpg', src: '/src/assets/video/05/5.mp4', dependencies: [], viewed: false, enabled: true }
      ] },
    { name: 'María',
      current: -1,
      stories: [
        { title: '', img: '/src/assets/img/thumbnails/061.jpg', src: '/src/assets/video/06/1.mp4', dependencies: [], viewed: false, enabled: true },
        { title: '', img: '/src/assets/img/thumbnails/062.jpg', src: '/src/assets/video/06/2.mp4', dependencies: [], viewed: false, enabled: true },
        { title: '', img: '/src/assets/img/thumbnails/063.jpg', src: '/src/assets/video/06/3.mp4', dependencies: [], viewed: false, enabled: true }
      ] },
    { name: 'Silvina',
      current: -1,
      stories: [
        { title: '', img: '/src/assets/img/thumbnails/071.jpg', src: '/src/assets/video/07/1.mp4', dependencies: [], viewed: false, enabled: true },
        { title: '', img: '/src/assets/img/thumbnails/072.jpg', src: '/src/assets/video/07/2.mp4', dependencies: [], viewed: false, enabled: true },
        { title: '', img: '/src/assets/img/thumbnails/073.jpg', src: '/src/assets/video/07/3.mp4', dependencies: [], viewed: false, enabled: true }
      ] },
    { name: 'Marta',
      current: -1,
      stories: [
        { title: '', img: '/src/assets/img/thumbnails/081.jpg', src: '/src/assets/video/08/1.mp4', dependencies: [], viewed: false, enabled: true },
        { title: '', img: '/src/assets/img/thumbnails/082.jpg', src: '/src/assets/video/08/2.mp4', dependencies: [], viewed: false, enabled: true },
        { title: '', img: '/src/assets/img/thumbnails/083.jpg', src: '/src/assets/video/08/3.mp4', dependencies: [], viewed: false, enabled: true },
        { title: '', img: '/src/assets/img/thumbnails/085.jpg', src: '/src/assets/video/08/5.mp4', dependencies: [], viewed: false, enabled: true }
      ] },
    { name: 'Magdalena',
      current: -1,
      stories: [
        { title: '', img: '/src/assets/img/thumbnails/091.jpg', src: '/src/assets/video/09/1.mp4', dependencies: [], viewed: false, enabled: true },
        { title: '', img: '/src/assets/img/thumbnails/092.jpg', src: '/src/assets/video/09/2.mp4', dependencies: [], viewed: false, enabled: true },
        { title: '', img: '/src/assets/img/thumbnails/093.jpg', src: '/src/assets/video/09/3.mp4', dependencies: [], viewed: false, enabled: true },
        { title: '', img: '/src/assets/img/thumbnails/094.jpg', src: '/src/assets/video/09/4.mp4', dependencies: [], viewed: false, enabled: true },
        { title: '', img: '/src/assets/img/thumbnails/095.jpg', src: '/src/assets/video/09/5.mp4', dependencies: [], viewed: false, enabled: true },
        { title: '', img: '/src/assets/img/thumbnails/096.jpg', src: '/src/assets/video/09/6.mp4', dependencies: [], viewed: false, enabled: true },
        { title: '', img: '/src/assets/img/thumbnails/097.jpg', src: '/src/assets/video/09/7.mp4', dependencies: [], viewed: false, enabled: true }
      ] },
    { name: 'Ada',
      current: -1,
      stories: [
        { title: '', img: '/src/assets/img/thumbnails/101.jpg', src: '/src/assets/video/10/1.mp4', dependencies: [], viewed: false, enabled: true },
        { title: '', img: '/src/assets/img/thumbnails/102.jpg', src: '/src/assets/video/10/2.mp4', dependencies: [], viewed: false, enabled: true },
        { title: '', img: '/src/assets/img/thumbnails/103.jpg', src: '/src/assets/video/10/3.mp4', dependencies: [], viewed: false, enabled: true }
      ] },
    { name: 'M. Teresa',
      current: -1,
      stories: [
        { title: '', img: '/src/assets/img/thumbnails/111.jpg', src: '/src/assets/video/11/1.mp4', dependencies: [], viewed: false, enabled: true },
        { title: '', img: '/src/assets/img/thumbnails/112.jpg', src: '/src/assets/video/11/2.mp4', dependencies: [], viewed: false, enabled: true },
        { title: '', img: '/src/assets/img/thumbnails/113.jpg', src: '/src/assets/video/11/3.mp4', dependencies: [], viewed: false, enabled: true },
        { title: '', img: '/src/assets/img/thumbnails/114.jpg', src: '/src/assets/video/11/4.mp4', dependencies: [], viewed: false, enabled: true },
        { title: '', img: '/src/assets/img/thumbnails/115.jpg', src: '/src/assets/video/11/5.mp4', dependencies: [], viewed: false, enabled: true },
        { title: '', img: '/src/assets/img/thumbnails/116.jpg', src: '/src/assets/video/11/6.mp4', dependencies: [], viewed: false, enabled: true },
        { title: '', img: '/src/assets/img/thumbnails/117.jpg', src: '/src/assets/video/11/7.mp4', dependencies: [], viewed: false, enabled: true }
      ] },
    { name: 'Cristina',
      current: -1,
      stories: [
        { title: '', img: '/src/assets/img/thumbnails/121.jpg', src: '/src/assets/video/12/1.mp4', dependencies: [], viewed: false, enabled: true },
        { title: '', img: '/src/assets/img/thumbnails/122.jpg', src: '/src/assets/video/12/2.mp4', dependencies: [], viewed: false, enabled: true },
        { title: '', img: '/src/assets/img/thumbnails/123.jpg', src: '/src/assets/video/12/3.mp4', dependencies: [], viewed: false, enabled: true },
        { title: '', img: '/src/assets/img/thumbnails/124.jpg', src: '/src/assets/video/12/4.mp4', dependencies: [], viewed: false, enabled: true }
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
    if (payload < 0) payload = 0
    else if (payload >= state.characters.length) payload = state.characters.length - 1
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
      if (ch.stories.find(el => { return el.viewed === false && el.enabled === true }) != undefined) news = true
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

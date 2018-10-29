import Vue from 'vue'
import * as types from '../types';

const state = {
  current: 0,
  episodes: [
    {
      id: '1',
      title: 'El aborto en Argentina' ,
      description: 'Tipificación del código penal y excepciones, Protocolo ILE, datos estadísticos, tratamiento legislativo del Proyecto IVE.',
      img: 'https://somosmafia.com/wp/wp-content/uploads/2018/06/vigiliatodo-2-1920x1280.jpg',
      audio: {
          src: '/src/assets/audio/sororas-1.1-aborto_en_argentina.mp4',
          duration: 58,
          currentTime: 0,
          paused: true
      },
      checkpoints: [ { time: 10, reached:false } ],
      listened: false
    },
    {
      id: '2',
      title: 'El dispositivo socorrista' ,
      description: 'Definición y orígenes de la práctica, surgimiento del movimiento Socorristas en Red, quiénes son las socorristas y por qué desarrollan esta práctica.',
      img: 'https://somosmafia.com/wp/wp-content/uploads/2018/06/vigiliatodo-18-1920x1280.jpg',
      audio: {
          src: '/src/assets/audio/sororas-1.1-aborto_en_argentina.mp4',
          duration: 58,
          currentTime: 0,
          paused: true
      },
      checkpoints: [ { time: 10, reached:false } ],
      listened: false
    },
    {
      id: '3',
      title: 'El dispositivo socorrista: La línea telefónica' ,
      description: '',
      img: 'https://somosmafia.com/wp/wp-content/uploads/2018/08/8a-2-1920x1280.jpg',
      audio: {
          src: '/src/assets/audio/sororas-1.1-aborto_en_argentina.mp4',
          duration: 58,
          currentTime: 0,
          paused: true
      },
      checkpoints: [ { time: 10, reached:false } ],
      listened: false
    },
    {
      id: '4',
      title: 'El dispositivo socorrista: Encuentros grupales cara a cara' ,
      description: '',
      img: 'https://instagram.faep10-1.fna.fbcdn.net/vp/0124d8cb86d8f867c81686c19a9dd8f1/5C6C501B/t51.2885-15/sh0.08/e35/s640x640/42002832_303900457078812_3131796752868044641_n.jpg',
      audio: {
          src: '/src/assets/audio/sororas-1.1-aborto_en_argentina.mp4',
          duration: 58,
          currentTime: 0,
          paused: true
      },
      checkpoints: [ { time: 10, reached:false } ],
      listened: false
    },
    {
      id: '5',
      title: 'El dispositivo socorrista: Seguimiento telefónico' ,
      description: '',
      img: 'https://instagram.faep10-1.fna.fbcdn.net/vp/477d85062279d05f8bad3c23937efca2/5C873CCA/t51.2885-15/sh0.08/e35/s640x640/42655770_741650506187905_1514331352315011531_n.jpg',
      audio: {
          src: '/src/assets/audio/sororas-1.1-aborto_en_argentina.mp4',
          duration: 58,
          currentTime: 0,
          paused: true
      },
      checkpoints: [ { time: 10, reached:false } ],
      listened: false
    },
    {
      id: '6',
      title: 'El dispositivo socorrista: Controles médicos post-aborto' ,
      description: '',
      img: 'https://instagram.faep10-1.fna.fbcdn.net/vp/d8ff53021106d74a20e91da95100c243/5C6BF6B3/t51.2885-15/sh0.08/e35/s640x640/41763806_252181448813996_7997080599414090320_n.jpg',
      audio: {
          src: '/src/assets/audio/sororas-1.1-aborto_en_argentina.mp4',
          duration: 58,
          currentTime: 0,
          paused: true
      },
      checkpoints: [ { time: 10, reached:false } ],
      listened: false
    }
  ]
}

export const actions = {
  [types.UPDATE_CURRENT_EPISODE]: ({commit}, payload) => {
    commit(types.MUTATE_UPDATE_CURRENT_EPISODE, payload)
  }
}

export const mutations = {
  [types.MUTATE_UPDATE_CURRENT_EPISODE]: (state, payload) => {
    state.episodes.forEach(ep => {
      if(ep.id !== payload) {
        ep.audio.paused = true
      }
    })
    state.current = payload;
  },
  [types.PLAY]: state => {
    if(state.current > 0) {
      state.episodes.find(el => { return el.id == state.current }).audio.paused = false
    }
  },
  [types.PAUSE]: state => {
    if(state.current > 0) {
      state.episodes.find(el => { return el.id == state.current }).audio.paused = true
    }
  },
  [types.UPDATE_DURATION]: (state, payload) => {
    if(state.current > 0) {
      state.episodes.find(el => { return el.id == state.current }).audio.duration = payload
    }
  },
  [types.UPDATE_TIME]: (state, payload) => {
    if(state.current > 0) {
      state.episodes.find(el => { return el.id == state.current }).audio.currentTime = payload
    }
  }
}

const getters = {
  [types.EPISODES]: state => {
    return state.episodes
  },
  [types.CURRENT_EPISODE]: state => {
    return state.current
  },
  [types.PAUSED]: state => {
    if(state.current <= 0) return true
    else return state.episodes.find(el => { return el.id == state.current }).audio.paused
  }
}

export default {
  state,
  actions,
  mutations,
  getters
}

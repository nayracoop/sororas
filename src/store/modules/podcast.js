import Vue from 'vue'
import * as types from '../types';

const state = {
  current: 0,
  audio: null,
  episodes: [
    {
      id: '1',
      title: 'El aborto en Argentina' ,
      description: 'Junto a la abogada Agustina Ramón Michel analizamos cuál es la situación del aborto en Argentina.',
      img: '/src/assets/img/sororas_1.jpg',
      audio: {
          src: '/src/assets/audio/sororas_1.mp3',
          duration: 702,
          currentTime: 0,
          paused: true
      },
      checkpoints: [ { time: 10, reached:false } ],
      listened: false
    },
    {
      id: '2',
      title: 'El dispositivo socorrista' ,
      description: 'Ruth Zurbriggen nos ayuda a definir qué es el socorrismo y cómo se integra esta práctica al movimiento feminista.',
      // img: '/src/assets/img/sororas_1.jpg',
      img: '/src/assets/img/sororas_2.jpg',
      audio: {
          src: '/src/assets/audio/sororas_2.mp3',
          duration: 732,
          currentTime: 0,
          paused: true
      },
      checkpoints: [ { time: 10, reached:false } ],
      listened: false
    },
    {
      id: '3',
      title: 'Contacto telefónico' ,
      description: 'Conversamos con Malena van Mamren para introducirnos en el primer momento del dispositivo socorrista.',
      // img: '/src/assets/img/sororas_1.jpg',
      img: '/src/assets/img/sororas_3.jpg',
      audio: {
          src: '/src/assets/audio/sororas_3.mp3',
          duration: 422,
          currentTime: 0,
          paused: true
      },
      checkpoints: [ { time: 10, reached:false } ],
      listened: false
    },
    {
      id: '4',
      title: 'Encuentros grupales' ,
      description: 'Belén Grosso nos cuenta cómo son los encuentros en los que las mujeres obtienen información sobre el uso de medicación para abortar.',
      img: '/src/assets/img/sororas_4.jpg',
      audio: {
          src: '/src/assets/audio/sororas_4.mp3',
          duration: 843,
          currentTime: 0,
          paused: true
      },
      checkpoints: [ { time: 10, reached:false } ],
      listened: false
    },
    {
      id: '5',
      title: 'Acompañamiento telefónico' ,
      description: 'Indagamos en el proceso de interrupción del embarazo mediante el uso de medicación desde la perspectiva de Nadia Mamaní.',
      img: '/src/assets/img/sororas_5.jpg',
      audio: {
          src: '/src/assets/audio/sororas_5.mp3',
          duration: 550,
          currentTime: 0,
          paused: true
      },
      checkpoints: [ { time: 10, reached:false } ],
      listened: false
    },
    {
      id: '6',
      title: 'Controles médicos post-aborto' ,
      description: 'La médica Mariana Lucero nos cuenta cómo articula con las socorristas para garantizar la implementación del Protocolo de Interrupción Legal del Embarazo.',
      img: '/src/assets/img/sororas_6.jpg',
      audio: {
          src: '/src/assets/audio/sororas_6.mp3',
          duration: 628,
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

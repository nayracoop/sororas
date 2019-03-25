<template>
  <header class="app-header">
    <b-button @click="toggleNav()" class="toggle-menu"><font-awesome-icon icon="bars" />Menú</b-button>
    <h1><router-link to="podcast">Sororas</router-link></h1>
    <p>Voces sobre aborto y socorrismo</p>
    <a target="_blank" href="https://somosmafia.com/" class="pic-credit"><font-awesome-icon icon="camera" /><abbr title="Movimiento Argentino de Fotógrafxs Independientes Autoconvocadxs">M.A.f.I.A.</abbr></a>
    <nav :class="{ active: active}" class="w-100">      
    <b-button @click="closeNav()" class="toggle-menu close-btn"><font-awesome-icon icon="times" /><span class="sr-only">Cerrar</span></b-button>
      <ul class="container m-auto">
        <li v-for="link in links">
          <a href="#" class="no-link" :class="{ active: opened, news:newStories }" v-if="link.action" @click.prevent="link.action">
            <span><font-awesome-icon :icon="link.icon" /></span>
            <span class="sr-only">{{ link.text }}</span>
          </a>
          <router-link exact active-class="active" v-else :to="{ name: link.path }">
            <span><font-awesome-icon :icon="link.icon" /></span>
            <span class="sr-only">{{ link.text }}</span>
          </router-link>
        </li>
      </ul>
    </nav>
  </header>
</template>

<script>
import { mapGetters } from 'vuex'
import { mapMutations } from 'vuex'
import * as types from '../store/types'

export default {
  data () {
    return {
      links: [
        { path: 'podcast', text: 'Socorristas', colSize: 3, icon: 'podcast' },
        { path: 'cards', text: 'Dispositivo Socorrista', colSize: 3, icon: ['far', 'list-alt'] },
        { path: 'stories', text: 'Historias', colSize: 3, icon: ['far', 'comment-dots'], action: this.toggleStories },
        { path: 'data', text: 'Datos', colSize: 3, icon: 'chart-bar' },
        { path: 'info', text: 'Información', colSize: 3, icon: 'info-circle' }
      ],
      active: true
    }
  },
  computed: {
    ...mapGetters({
      opened: types.VISIBLE,
      newStories: types.RELEASES
    })
  },
  mounted () {
    this.$parent.$on('toggleNav', () => {
      this.active = false
    })
    this.$parent.$on('closeNav', () => {
      this.active = true
    })
  },
  methods: {
    ...mapMutations({
      toggleStories: types.TOGGLE_STORIES
    }),
    toggleNav () {
      this.$parent.$emit('toggleNav')
    },
    closeNav () {
      this.$parent.$emit('closeNav')
    }/*,
    toggleStoriesNav () {
    } */
  }
}
</script>

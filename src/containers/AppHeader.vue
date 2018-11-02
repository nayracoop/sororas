<template>
  <header class="app-header">
    <h1>Sororas</h1>
    <p>Voces sobre aborto y socorrismo</p>
    <nav class="container">
      <ul>
        <li v-for="link in links">
          <a href="#" class="no-link" :class="{ active: opened }" v-if="link.action" @click.prevent="link.action">
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
import { mapGetters } from 'vuex';
import { mapMutations } from 'vuex';
import * as types from '../store/types';

export default {
  data () {
    return {
      links: [
          { path:'podcast', text:'Socorristas', colSize: 3, icon:'podcast' },
          { path:'cards', text:'Dispositivo Socorrista', colSize: 3, icon:['far', 'list-alt'] },
          { path:'stories', text:'Historias', colSize: 3, icon:['far', 'comment-dots'], action:this.toggleStories },
          { path:'data', text:'Datos', colSize: 3, icon:'chart-bar'  },
          { path:'info', text:'Información', colSize: 3, icon:'info-circle' },
      ]
    }
  },
  computed: {
    ...mapGetters({
      opened: types.IS_OPENED
    })
  },
  methods: {
    ...mapMutations({
      toggleStories: types.TOGGLE_STORIES,
    })
  }
}

</script>

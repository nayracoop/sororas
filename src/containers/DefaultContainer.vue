<template>
  <div class="app">
    <b-container fluid>
      <div class="cover-header" ref="header">
        <app-header />
      </div>
    </b-container>
    <b-container class="app-body">
      <main :class="{ 'menu-opened':storyMenuOpened }">
        <router-view></router-view>
        <app-stories />
      </main>
      <app-podcast-player />
    </b-container>
    <b-container>
      <app-footer />
    </b-container>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
import AppHeader from './AppHeader'
import AppFooter from './AppFooter'
import AppStories from '../views/Stories'
import AppPodcastPlayer from '../components/PodcastPlayer'
import * as types from '../store/types'

export default {
  components: {
    AppHeader,
    AppFooter,
    AppStories,
    AppPodcastPlayer
  },
  data () {
    return {

    }
  },
  computed: {
    ...mapGetters({
      storyMenuOpened: types.VISIBLE
    })
  },
  mounted () {
    this.$refs.header.style.height = (Math.max(document.documentElement.clientHeight, window.innerHeight || 0) - 106) + 'px'
  }
}
</script>

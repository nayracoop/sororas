<template>
  <div class="app">
    <b-container fluid>
      <div class="cover-header" ref="header">
        <app-header ref="headerMenu" />
      </div>
    </b-container>
    <div class="app-body">
      <app-podcast-player @opened="playerVisible" />
      <main :class="{ 'menu-opened':storyMenuOpened }">
        <router-view></router-view>
        <app-stories ref="stories" />
      </main>
    </div>
    <div class="cont-footer">
      <app-footer />
    </div>
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
      playerActive: false
    }
  },
  computed: {
    ...mapGetters({
      storyMenuOpened: types.VISIBLE
    })
  },
  mounted () {
    this.$refs.header.style.height = (Math.max(document.documentElement.clientHeight, window.innerHeight || 0) - 15) + 'px'
  },
  beforeRouteUpdate (to, from, next) {
    this.$refs.headerMenu.toggleNav()
    this.$refs.headerMenu.closeNav()
    next()
  },
  methods: {
    playerVisible (visible) {
      this.$refs.stories.move(visible)
    }
  }
}
</script>

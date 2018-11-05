<template>
  <div class="app">
    <b-container>
      <div class="cover-header" ref="header">
        <app-header />
      </div>
    </b-container>
    <b-container class="app-body">
      <main>
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

import AppHeader from './AppHeader'
import AppFooter from './AppFooter'
import AppStories from '../views/Stories'
import AppPodcastPlayer from '../components/PodcastPlayer'

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
  mounted () {
    this.$refs.header.style.height = (Math.max(document.documentElement.clientHeight, window.innerHeight || 0) - 106) + 'px';
  }
}

</script>

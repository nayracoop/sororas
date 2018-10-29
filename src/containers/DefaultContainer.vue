<template>
  <div class="app">
    <b-container class="cover-header">
      <app-header></app-header>
    </b-container>
    <b-container class="app-body">
      <main>
        <router-view></router-view>
      </main>
      <app-podcast-player />
    </b-container>
    <b-container>
      <app-footer></app-footer>
    </b-container>
  </div>
</template>

<script>

import AppHeader from './AppHeader'
import AppFooter from './AppFooter'
import AppPodcastPlayer from '../components/PodcastPlayer'

export default {
  components: {
    AppHeader,
    AppFooter,
    AppPodcastPlayer
  },
  data () {
    return {

    }
  }
}

</script>

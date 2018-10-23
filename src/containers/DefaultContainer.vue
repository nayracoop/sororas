<template>
  <div class="app">
    <b-container>
      <app-header></app-header>
    </b-container>
    <b-container class="app-body">
      <main>
        <router-view></router-view>
      </main>
    </b-container>
    <b-container>
      <app-footer></app-footer>
    </b-container>
  </div>
</template>

<script>

import AppHeader from './AppHeader'
import AppFooter from './AppFooter'

export default {
  components: {
    AppHeader,
    AppFooter
  },
  data () {
    return {

    }
  }
}

</script>

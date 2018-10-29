<template>
  <router-view></router-view>
</template>

<script>
  export default {
    name: 'app'
  }
</script>

<style lang="scss">
  $backgrounds-path: '~/src/assets/img/bg/';
  $font-path: '~/src/assets/fonts/';

  @import url('https://fonts.googleapis.com/css?family=Open+Sans:300,400,700');
  @import '../node_modules/bootstrap/dist/css/bootstrap.css';
  @import '../node_modules/bootstrap-vue/dist/bootstrap-vue.css';
  @import 'assets/scss/style';
</style>

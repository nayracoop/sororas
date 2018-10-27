<template>
  <router-view></router-view>
</template>

<script>
  export default {
    name: 'app'
  }
</script>

<style lang="scss">

  @import url('https://fonts.googleapis.com/css?family=Open+Sans:400,700');
  $font-path: '/src/assets/fonts/';
  @font-face{
    font-family: 'Xtreem Fat';
    src:  url($font-path + 'xtreemfat.woff2') format('woff2'),
          url($font-path + 'xtreemfat.woff') format('woff');
    font-style: normal;
    font-weight: normal;
    text-rendering: optimizeLegibility;
  }

  @import '../node_modules/bootstrap/dist/css/bootstrap.css';
  @import '../node_modules/bootstrap-vue/dist/bootstrap-vue.css';

  @import 'assets/scss/style';

</style>

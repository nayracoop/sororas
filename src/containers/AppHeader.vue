<template>
  <header class="app-header">
    <h1>Sororas</h1>
    <nav>
      <ul>
        <li v-for="link in links"><b-link :to="{ name: link.path }">{{ link.text }}</b-link></li>
      </ul>
    </nav>
  </header>
</template>

<script>

export default {
  data () {
    return {
      links: [
          { path:'podcast', text:'Socorristas' },
          { path:'stories', text:'Historias' },
          { path:'data', text:'Datos' },
          { path:'credits', text:'Créditos' },
      ]
    }
  }
}

</script>

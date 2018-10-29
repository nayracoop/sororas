<template>
  <header class="app-header">
    <h1>Sororas</h1>
    <p>Voces sobre aborto y socorrismo</p>
    <nav>
      <ul>
        <li v-for="link in links"><router-link exact active-class="active" :to="{ name: link.path }"><span><font-awesome-icon :icon="link.icon" /></span> <span class="sr-only">{{ link.text }}</span></router-link></li>
      </ul>
    </nav>
  </header>
</template>

<script>

export default {
  data () {
    return {
      links: [
          { path:'podcast', text:'Socorristas', colSize: 3, icon:'podcast' },
          { path:'cards', text:'Dispositivo Socorrista', colSize: 3, icon:['far', 'list-alt'] },
          { path:'stories', text:'Historias', colSize: 3, icon:['far', 'comment-dots'] },
          { path:'data', text:'Datos', colSize: 3, icon:'chart-bar'  },
          { path:'info', text:'Información', colSize: 3, icon:'info-circle' },
      ]
    }
  }
}

</script>

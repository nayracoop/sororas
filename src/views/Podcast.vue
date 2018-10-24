<template>
  <div class="podcast">
    <b-card v-for="episode in episodes" img-src="https://static1.squarespace.com/static/5a0432d9d74cff5fa58a616a/5afef9b26d2a73441ec14be3/5b7d5a69c2241bf31c648c91/1534941825801/la+mujer+del+torero.jpg?format=2500w"
      img-alt="Card image"
      img-top>
      <p class="card-text">
        {{ episode.title }}
      </p>
    </b-card>
  </div>
</template>

<script>

export default {

  data () {
    return {
      test: 'Hola podcast',
      episodes: [
        { 'title': 'Episodio 1. Situación del aborto en argentina: tipificación del código penal y excepciones, Protocolo ILE, datos estadísticos, tratamiento legislativo del Proyecto IVE.' },
        { 'title': 'Episodio 2. El dispositivo socorrista: definición y orígenes de la práctica, surgimiento del movimiento Socorristas en Red, quiénes son las socorristas y por qué desarrollan esta práctica.' },
        { 'title': 'Episodio 3. El dispositivo socorrista. La línea telefónica.' },
        { 'title': 'Episodio 4. El dispositivo socorrista. Los encuentros grupales cara a cara.' },
        { 'title': 'Episodio 5. El dispositivo socorrista. Seguimiento telefónico.' },
        { 'title': 'Episodio 6. El dispositivo socorrista. Controles médicos post-aborto.' },
      ]
    }
  }

}

</script>

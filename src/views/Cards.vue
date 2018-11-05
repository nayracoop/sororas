<template>
  <section class="cards">
    <header>
      <h2>El dispositivo socorrista</h2>
      <p>Las socorristas feministas han desarrollado un servicio de información y acompañamiento para abortar de manera segura y autogestiva a través del uso de medicación.</p>
      <p>Este dispositivo tiene al menos cuatro momentos:</p>
    </header>

    <b-carousel id="cards"

              indicators
              :interval="4000"
              img-width="1024"
              img-height="640"
              v-model="slide"
    >


      <!-- Slides with custom text -->
      <b-carousel-slide img-height="740" img-blank>
        <h2>1- Contacto telefónico</h2>
        <p>El primer contacto entre las socorristas feministas y las personas que necesitan abortar se realiza de manera telefónica mediante una línea que se difunde públicamente a través de pintadas en paredes, flyers, redes sociales, páginas web y otros medios. En esa llamada se analiza la situación de cada mujer y se pauta un encuentro presencial.</p>
      </b-carousel-slide>
      <b-carousel-slide img-height="740" img-blank>
        <h2>2- Encuentros grupales</h2>
        <p>Las mujeres se encuentran en espacios públicos para conversar sobre la situación que están atravesando, obtener información sobre los usos seguros de medicación para abortar y establecer cuándo iniciar el tratamiento. Además, se relevan datos que permiten generar información sobre quiénes son las mujeres que acuden a las socorristas para abortar.</p>
      </b-carousel-slide>
      <b-carousel-slide img-height="740" img-blank>
        <h2>3- Acompañamiento telefónico</h2>
        <p>Las socorristas realizan un acompañamiento telefónico personalizado a las mujeres durante el uso de la medicación y el proceso del aborto. De esta manera se calman ansiedades y se evacúa cualquier duda que pueda surgir.</p>
      </b-carousel-slide>
      <b-carousel-slide img-height="740" img-blank>
        <h2>4- Controles médicos post-aborto</h2>
        <p>El último momento del dispositivo socorrista consiste en la realización de controles médicos para asegurar que el aborto se haya realizado de manera efectiva. Esta estrategia es también una apuesta política por generar una mayor vinculación entre los efectores de salud y las mujeres que abortan.</p>
      </b-carousel-slide>

  </b-carousel>


</section>
</template>

<script>

export default {
  data () {
    return {
      test: 'Hola home'
    }
  },
  beforeRouteEnter (to, from, next) {
    if(from.name != null) {
      window.scrollTo({
        top: Math.max(document.documentElement.clientHeight, window.innerHeight || 0) - 32,
        left: 0,
        behavior: 'smooth'
      })
    }
    next()
  }
}

</script>

<style scoped>


</style>

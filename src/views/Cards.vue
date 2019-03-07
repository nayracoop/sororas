<template>
  <section class="cards">
    <header>
      <h2>El dispositivo socorrista</h2>
      <p>Las socorristas feministas han desarrollado un servicio de información y acompañamiento para abortar de manera segura y autogestiva a través del uso de medicación.</p>
      <p>Este dispositivo tiene al menos cuatro momentos:</p>
    </header>

    <div  @touchstart="onTouchStart" @touchmove="onTouchMove" @touchend="onTouchEnd">

    
    <b-carousel id="cards"

              indicators
              :interval="4000"
              img-width="1024"
              img-height="640"         
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
</div>

</section>
</template>

<script>

export default {
  data () {
    return {
      test: 'Hola home',
      swipedir: 'none',
      startX: null,
      startY: null,
      distX: null,
      distY: null,
      threshold: 150, // required min distance traveled to be considered swipe
      restraint: 100, // maximum distance allowed at the same time in perpendicular direction
      allowedTime: 300, // maximum time allowed to travel that distance
      elapsedTime: null,
      startTime: null
    }
  },
  beforeRouteEnter (to, from, next) {
    if (from.name != null) {
      window.scrollTo({
        top: Math.max(document.documentElement.clientHeight, window.innerHeight || 0) - 32,
        left: 0,
        behavior: 'smooth'
      })
    }
    next()
  },
  methods: {
    onTouchStart (e) {
      let touchobj = e.changedTouches[0]
      this.swipedir = 'none'
      this.dist = 0
      this.startX = touchobj.pageX
      this.startY = touchobj.pageY
      this.startTime = new Date().getTime() // record time when finger first makes contact with surface
      e.preventDefault()
    },
    onTouchMove (e) {
      e.preventDefault()
    },
    onTouchEnd (e) {
      let touchobj = e.changedTouches[0]
      this.distX = touchobj.pageX - this.startX // get horizontal dist traveled by finger while in contact with surface
      this.distY = touchobj.pageY - this.startY // get vertical dist traveled by finger while in contact with surface
      this.elapsedTime = new Date().getTime() - this.startTime // get time elapsed
      if (this.elapsedTime <= this.allowedTime) { // first condition for awipe met
        if (Math.abs(this.distX) >= this.threshold && Math.abs(this.distY) <= this.restraint) { // 2nd condition for horizontal swipe met
          this.swipedir = (this.distX < 0) ? 'left' : 'right' // if dist traveled is negative, it indicates left swipe
        } else if (Math.abs(this.distY) >= this.threshold && Math.abs(this.distX) <= this.restraint) { // 2nd condition for vertical swipe met
          this.swipedir = (this.distY < 0) ? 'up' : 'down' // if dist traveled is negative, it indicates up swipe
        }
      }
      console.log(this.swipedir)
      // handleswipe(this.swipedir)
      e.preventDefault()
    }
  }
}
</script>

<style scoped>


</style>

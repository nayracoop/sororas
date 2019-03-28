<template>
  <section class="info">
    <b-container>
    <header>
      <h2>Información</h2>
    </header>
    <div class="lists-cont"> 
      <article class="info-cont">
      <h3>Contacto socorrista en Argentina y Latinoamérica</h3>
      <ul>
        <li><a target="_blank" href="http://socorristasenred.org/">Socorristas en Red (feministas que abortamos)</a></li>
        <li><a target="_blank" href="http://comohacerseunaborto.com/">Cómo hacerse un aborto seguro.</a></li>
      </ul>
      </article>
      <article class="info-cont">
      <h3>Guías</h3>
      <ul>
        <li><a target="_blank" href="http://sincloset09.wixsite.com/aborto-medicamentos">¿Cómo hacerse un aborto con medicamentos?</a></li>
        <li><a target="_blank" href="https://www.yumpu.com/es/document/view/35359019/aborto-con-pastillas-red-nosotras-en-el-mundo">Todo lo que querés saber sobre cómo hacerte un aborto con pastillas.</a></li>
        <li><a target="_blank" href="https://drive.google.com/file/d/0ByRrbv2MLR22dTg4TlRWekZqeTA/view">Cuaderno de cuidados pre, durante y post aborto (con pastillas).</a></li>
        <li><a target="_blank" href="http://comohacerseunaborto.com/manuales/">Otras guías y manuales.</a></li>
      </ul>
      </article>
      <article class="info-cont">
      <h3>Otros</h3>
      <ul>
        <li><a target="_blank" href="https://donde.huesped.org.ar/#/">DÓNDE: Aplicación para encontrar servicios de salud sexual y reproductiva.</a></li>
        <li><a target="_blank" href="http://www.msal.gob.ar/images/stories/bes/graficos/0000000875cnt-protocolo_ile_octubre%202016.pdf">Protocolo para la atención integral de las personas con derecho a la interrupción legal del embarazo.</a></li>
      </ul>
      </article>
      <article class="info-cont websites">
      <h3>Sitios web</h3>
      <div>
      <h4>De Argentina</h4>
      <ul>
        <li><a target="_blank" href="http://socorristasenred.org/">Socorristas en Red.</a></li>
        <li><a target="_blank" href="http://comohacerseunaborto.com/">Cómo hacerse un aborto seguro.</a></li>
        <li><a target="_blank" href="http://www.abortolegal.com.ar/">Campaña Nacional por el Derecho al Aborto Legal Seguro y Gratuito.</a></li>
        <li><a target="_blank" href="http://abortosinbarreras.org/">Aborto Sin Barreras.</a></li>
        <li><a target="_blank" href="http://larevuelta.com.ar/">La Revuelta.</a></li>
        <li><a target="_blank" href="http://catolicas.org.ar/">Católicas por el Derecho a Decidir.</a></li>
        <li><a target="_blank" href="https://abortolegal.info/">Abortolegal.info.</a></li>
        <li><a target="_blank" href="http://www.redsaluddecidir.org/">Red de Profesionales de la Salud por el Derecho a Decidir.</a></li>
      </ul>
      </div>
      <div>
      <h4>Internacionales</h4>
      <ul>
        <li><a target="_blank" href="https://www.womenonweb.org/es/">Women on Web.</a></li>
        <li><a target="_blank" href="http://clacai.org/">Consorcio Latinoaméricano Contra el Aborto Inseguro.</a></li>
        <li><a target="_blank" href="https://www.womenonwaves.org/">Women on Waves.</a></li>
        <li><a target="_blank" href="http://www.who.int/mediacentre/factsheets/fs388/es/">Organización Mundial de la Salud.</a></li>
        <li><a target="_blank" href="https://womenhelp.org/">Women help Women.</a></li>
        <li><a target="_blank" href="https://safe2choose.org/es/">Safe2choose.</a></li>
      </ul>
      </div>
      </article>
    </div>
    </b-container>
    <b-container fluid class="cont-credits">
      <b-container>
      <article class="info-credits">
      <p><strong>Sororas es un documental web sobre la práctica del socorrismo realizado en el marco del Laboratorio I+DOC de la Maestría en Comunicación Digital Interactiva de la Universidad Nacional de Rosario.</strong></p>
      <div class="names">
        <div>
          <h4>Realizadores</h4>
          <ul>
            <li><span>Bergero Trpin, Tomás</span></li>
            <li><span>Contreras, Esteban</span></li>
            <li><span>Gagliardi, M. Victoria</span></li>
            <li><span>Guerra, Ignacio</span></li>
            <li><span>Silvera, Diego</span></li>
          </ul>
        </div>
        <div>
            <h4>Agradecimientos</h4>
            <ul>
              <li><span>Ruth Zurbriggen</span></li>
              <li><span>Belén Grosso</span></li>
              <li><span>Nadia Mamaní</span></li>
              <li><span>Malena Van Mameren</span></li>
              <li><span>Mariana Lucero</span></li>
              <li><span>Agustina Ramón Michel</span></li>
              <li><span>Eva Semino</span></li>
              <li><span>Socorristas en Red (feministas que abortamos)</span></li>
            </ul>
        </div>
     </div>
    </article>
    </b-container>
  </b-container>
  </section>
</template>

<script>
export default {
  beforeRouteEnter (to, from, next) {
    if (from.name != null) {
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

<style lang="css">
</style>

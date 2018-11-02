<template>
  <div class="data">
    <article>
      <iframe id="datawrapper-chart-fCpJo" src="//datawrapper.dwcdn.net/fCpJo/3/" scrolling="no"frameborder="0" allowtransparency="true" style="width: 0; min-width: 100% !important;"height="400"></iframe>
    </article>
    <article>
      <iframe id="datawrapper-chart-yDdOV" src="//datawrapper.dwcdn.net/yDdOV/3/" scrolling="no" frameborder="0" allowtransparency="true" style="width: 0; min-width: 100% !important;" height="319"></iframe>
    </article>
    </article>
    <article>
      <iframe id="datawrapper-chart-XlGbb" src="//datawrapper.dwcdn.net/XlGbb/2/" scrolling="no" frameborder="0" allowtransparency="true" style="width: 0; min-width: 100% !important;" height="400"></iframe>
    </article>
  </div>
</template>

<script>

export default {

  data () {
    return {
      test: 'Hola data'
    }
  },
  mounted() {
    // if("undefined"==typeof window.datawrapper)window.datawrapper={};window.datawrapper["fCpJo"]={},window.datawrapper["fCpJo"].embedDeltas={"100":400,"200":400,"300":400,"400":400,"500":400,"700":400,"800":400,"900":400,"1000":400},window.datawrapper["fCpJo"].iframe=document.getElementById("datawrapper-chart-fCpJo"),window.datawrapper["fCpJo"].iframe.style.height=window.datawrapper["fCpJo"].embedDeltas[Math.min(1e3,Math.max(100*Math.floor(window.datawrapper["fCpJo"].iframe.offsetWidth/100),100))]+"px",window.addEventListener("message",function(a){if("undefined"!=typeof a.data["datawrapper-height"])for(var b in a.data["datawrapper-height"])if("fCpJo"==b)window.datawrapper["fCpJo"].iframe.style.height=a.data["datawrapper-height"][b]+"px"});
  }

}

</script>

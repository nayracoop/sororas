<template>
  <section class="podcast">
    <header>
      <h2>Socorristas</h2>
      <p>Podcast de entrevistas a mujeres socorristas</p>
    </header>
    <b-row>
      <b-col sm="12" md="4" v-for="episode in podcastEpisodes" :key="episode.title">
        <app-podcast-episode :episode="episode.id" :cover-offset="scrollTop" :parallax="false" @played="updateCurrentEpisode"></app-podcast-episode>
      </b-col>
    </b-row>
  </section>
</template>

<script>
import AppPodcastEpisode from '../components/PodcastEpisode'
import { mapGetters } from 'vuex';
import { mapActions } from 'vuex';
// import { mapActions } from 'vuex';
import * as types from '../store/types';

export default {
  components: {
    AppPodcastEpisode
  },
  data () {
    return {
      scrollTop: 0,
      // episodes: [
      //   { 'title': 'El aborto en Argentina' ,
      //     'description': 'Tipificación del código penal y excepciones, Protocolo ILE, datos estadísticos, tratamiento legislativo del Proyecto IVE.',
      //     'img': 'https://somosmafia.com/wp/wp-content/uploads/2018/06/vigiliatodo-2-1920x1280.jpg',
      //     // 'img': 'https://instagram.faep10-1.fna.fbcdn.net/vp/fa82fab41c2d05044978e0a2bec89181/5C8A07C5/t51.2885-15/sh0.08/e35/s640x640/42171040_563478167421398_5503194955718350722_n.jpg',
      //     'audio': '/src/assets/audio/sororas-1.1-aborto_en_argentina.mp4',
      //   },
      //   { 'title': 'El dispositivo socorrista' ,
      //     'description': 'Definición y orígenes de la práctica, surgimiento del movimiento Socorristas en Red, quiénes son las socorristas y por qué desarrollan esta práctica.',
      //     'img': 'https://somosmafia.com/wp/wp-content/uploads/2018/06/vigiliatodo-18-1920x1280.jpg',
      //     // 'img': 'https://instagram.faep10-1.fna.fbcdn.net/vp/28c1e927c77705f563bab7420ab78521/5C8A6614/t51.2885-15/sh0.08/e35/s640x640/42664938_552253318567906_5087106969689134759_n.jpg',
      //     'audio': '/src/assets/audio/sororas-1.1-aborto_en_argentina.mp4',
      //   },
      //   { 'title': 'El dispositivo socorrista: La línea telefónica' ,
      //     'description': '',
      //     'img': 'https://somosmafia.com/wp/wp-content/uploads/2018/08/8a-2-1920x1280.jpg',
      //     // 'img': 'https://instagram.faep10-1.fna.fbcdn.net/vp/0af8ce9265351802c667a1df07e9ea80/5C561236/t51.2885-15/sh0.08/e35/s640x640/42003826_487152325132335_4428828813509256443_n.jpg',
      //     'audio': '/src/assets/audio/sororas-1.1-aborto_en_argentina.mp4',
      //   },
      //   { 'title': 'El dispositivo socorrista: Encuentros grupales cara a cara' ,
      //     'description': '',
      //     'img': 'https://instagram.faep10-1.fna.fbcdn.net/vp/0124d8cb86d8f867c81686c19a9dd8f1/5C6C501B/t51.2885-15/sh0.08/e35/s640x640/42002832_303900457078812_3131796752868044641_n.jpg',
      //     'audio': '/src/assets/audio/sororas-1.1-aborto_en_argentina.mp4',
      //   },
      //   { 'title': 'El dispositivo socorrista: Seguimiento telefónico' ,
      //     'description': '',
      //     'img': 'https://instagram.faep10-1.fna.fbcdn.net/vp/477d85062279d05f8bad3c23937efca2/5C873CCA/t51.2885-15/sh0.08/e35/s640x640/42655770_741650506187905_1514331352315011531_n.jpg',
      //     'audio': '/src/assets/audio/sororas-1.1-aborto_en_argentina.mp4',
      //   },
      //   { 'title': 'El dispositivo socorrista: Controles médicos post-aborto' ,
      //     'description': '',
      //     'img': 'https://instagram.faep10-1.fna.fbcdn.net/vp/d8ff53021106d74a20e91da95100c243/5C6BF6B3/t51.2885-15/sh0.08/e35/s640x640/41763806_252181448813996_7997080599414090320_n.jpg',
      //     'audio': '/src/assets/audio/sororas-1.1-aborto_en_argentina.mp4',
      //   }
      // ]
    }
  },
  computed: {
    ...mapGetters({
      podcastEpisodes: types.EPISODES
    })
  },
  methods: {
    ...mapActions({
      updateCurrentEpisode: types.UPDATE_CURRENT_EPISODE
    }),
    handleScroll () {
      this.scrollTop = window.scrollY;
    }
  },
  created () {
    window.addEventListener('scroll', this.handleScroll);
  },
  destroyed () {
    window.removeEventListener('scroll', this.handleScroll);
  }

}

</script>

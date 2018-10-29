<template>
  <article class="episode">
    <p class="label">Episodio #{{ episode }}</p>
    <b-card ref="card" no-body>
        <div @click="toggleAudio" class="player" :style="'background-image: url(' + (episodeContent.img || cover) + '); ' + (parallax ? 'background-position:center ' + offset + 'px' : '')">
          <!-- <audio ref="audio" :src="(episodeContent.audio.src || src)" @timeupdate="timeUpdated" @loadedmetadata="timeUpdated" @ended="audioEnded"></audio> -->
          <font-awesome-icon class="effect play" icon="play-circle" />
          <font-awesome-icon class="effect pause" icon="pause-circle" />
          <div class="progress">
            <div class="bar" :style="'width:' + progressBarWidth"></div>
          </div>
          <div class="controls">
            <b-button v-if="paused" variant="link"><font-awesome-icon icon="play-circle" /></b-button>
            <b-button v-else variant="link"><font-awesome-icon icon="pause-circle" /></b-button>
            <time>{{ time }}</time>
          </div>
        </div>
        <b-card-body>
          <p class="card-number">#{{ episode }}</p>
          <h3>{{ (episodeContent.title || title) }}</h3>
          <div class="description" v-if="(episodeContent.description || description)">
            <p>{{ (episodeContent.description || description) }}</p>
          </div>
        </b-card-body>
    </b-card>
  </article>
</template>

<script>
import { mapGetters } from 'vuex';
import * as types from '../store/types';

export default {
  data () {
    return {
      cardTop: 0,
      coverOffsetRange: 120,
      audio: null,
      episodeContent: null
    }
  },
  props: {
    episode: null,
    title: '',
    description: '',
    cover: '',
    src: '',
    coverOffset: 0,
    parallax: true
  },
  computed: {
    ...mapGetters({
      podcastEpisodes: types.EPISODES
    }),
    offset () {
      return this.coverOffsetRange * (this.coverOffset - this.cardTop) / Math.max(document.documentElement.clientHeight, window.innerHeight || 0)
      // return Math.max(document.documentElement.clientHeight, window.innerHeight || 0)
    },
    time () {
      if(this.episodeContent === null) return '00:00'
      else {
        let duration = this.episodeContent.audio.duration - this.episodeContent.audio.currentTime
        let seconds = ('0' + Math.floor(duration % 60)).slice(-2)
        let minutes = ('0' + Math.floor(duration / 60)).slice(-2)
        return minutes + ':' + seconds
      }
    },
    paused () {
      return this.episodeContent === null || this.episodeContent.audio.paused
    },
    progressBarWidth () {
      if(this.episodeContent === null) return '0%'
      else return (this.episodeContent.audio.currentTime / this.episodeContent.audio.duration * 100) + '%'
    }
  },
  methods: {
    toggleAudio () {
      this.episodeContent.audio.paused = !this.episodeContent.audio.paused
    }
  },
  watch: {
    paused (val) {
      if(val) {
        this.$refs.card.classList.remove('playing')
        this.$refs.card.classList.add('paused')
        // this.audio.pause()
        this.$emit('paused')
      } else {
        this.$refs.card.classList.add('playing')
        this.$refs.card.classList.remove('paused')
        // this.audio.play()
        this.$emit('played', this.episode)
      }
    }
  },
  beforeMount () {
    this.episodeContent = this.podcastEpisodes.find(el => { return el.id == this.episode })
  },
  mounted () {
    this.cardTop = this.$refs.card.getBoundingClientRect().top + window.scrollY
    // this.audio = this.$refs.audio
  }
}
</script>

<style lang="css">
</style>

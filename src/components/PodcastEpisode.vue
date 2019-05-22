<template>
  <article class="episode">
    <p class="label">Episodio #{{ episode }}</p>
    <b-card ref="card" :class="{ loading }" no-body>
      <span v-if="episodeContent.imgCredits.text" class="card-pic-credit">Ilustración: <a :href="episodeContent.imgCredits.url" target="_blank" :title="episodeContent.imgCredits.title" class="name">{{ episodeContent.imgCredits.text }}</a></span>
        <div @click="toggleAudio" class="player" :style="'background-image: url(' + (episodeContent.img || cover) + '); ' + (parallax ? 'background-position:center ' + offset + 'px' : '')">
          <!-- <audio ref="audio" :src="(episodeContent.audio.src || src)" @timeupdate="timeUpdated" @loadedmetadata="timeUpdated" @ended="audioEnded"></audio> -->
          <font-awesome-icon class="effect play" icon="play-circle" />
          <font-awesome-icon class="effect pause" icon="pause-circle" />
          <div class="progress">
            <div class="bar" :style="'width:' + progressBarWidth"></div>
          </div>
          <div class="controls">
            <b-button v-if="paused && !loading" variant="link"><font-awesome-icon icon="play-circle" /></b-button>
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
          <div class="dl-btn">
            <a :href="episodeContent.audio.src" title="Descargar episodio" download>
              <svg version="1.1" id="dl-btn-icon" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 22.9 30.9" style="enable-background:new 0 0 22.9 30.9;" xml:space="preserve" role="img">
              <g><line class="st0" x1="1.5" y1="29.8" x2="21.4" y2="29.8"/><path class="st1" d="M21.4,14.9c-0.4-0.4-1.1-0.4-1.5,0l-7.5,7.5V3.1h-2.1v19.3L2.9,15c-0.4-0.4-1-0.4-1.5,0c-0.4,0.4-0.4,1,0,1.5l9.3,9.3c0.4,0.4,1,0.4,1.5,0l9.1-9.4C21.8,16,21.8,15.3,21.4,14.9z"/><path class="st1" d="M12.5,2.2c0-0.6-0.5-1-1-1c-0.6,0-1,0.5-1,1v1h2.1V2.2z"/></g></svg>
              <span class="sr-only">Descargar episodio</span>
            </a>
          </div>
        </b-card-body>
    </b-card>
  </article>
</template>

<script>
import { mapGetters } from 'vuex'
import * as types from '../store/types'

export default {
  data () {
    return {
      cardTop: 0,
      coverOffsetRange: 120,
      audio: null,
      episodeContent: null,
      loading: false
    }
  },
  props: {
    episode: null,
    title: '',
    description: '',
    cover: '',
    src: '',
    coverOffset: 0,
    parallax: true,
    imgCredits: null
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
      if (this.episodeContent === null) return '00:00'
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
      if (this.episodeContent === null) return '0%'
      else return (this.episodeContent.audio.currentTime / this.episodeContent.audio.duration * 100) + '%'
    }
  },
  methods: {
    toggleAudio () {
      if (!this.episodeContent.audio.paused) {
        this.episodeContent.audio.el.pause()
        this.episodeContent.audio.paused = true
      } else {
        let promise = this.episodeContent.audio.el.play()
        let $this = this
        this.loading = true
        if (promise !== undefined) {
          promise.then(function() {
            $this.loading = false
            $this.episodeContent.audio.paused = false
          }).catch(function(error) { $this.loading = false })
        } else {
          this.loading = false
        }
      }
    }
  },
  watch: {
    paused (val) {
      if (val) {
        this.$refs.card.classList.remove('playing')
        this.$refs.card.classList.add('paused')
        // this.audio.pause()
        this.$emit('paused')
        this.loading = false
      } else {
        this.$refs.card.classList.add('playing')
        this.$refs.card.classList.remove('paused')
        // this.audio.play()
        this.$emit('played', this.episode)
      }
    }
  },
  beforeMount () {
    this.episodeContent = this.podcastEpisodes.find(el => { return el.id === this.episode })
  },
  mounted () {
    this.cardTop = this.$refs.card.getBoundingClientRect().top + window.scrollY
    // this.audio = this.$refs.audio
  }
}
</script>

<style lang="css">
</style>

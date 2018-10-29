<template>
  <div id="player" :class="{ visible:visible }">
    <div class="controls">
      <font-awesome-icon @click="play" v-if="paused" class="play" icon="play-circle" />
      <font-awesome-icon @click="pause" v-else class="pause" icon="pause-circle" />
    </div>
    <p class="title"><b>#{{ currentEpisode }}</b> {{ title }}</p>
    <div class="controls">
      <font-awesome-icon @click="close" icon="times" />
    </div>
  </div>
</template>
<script>
import { mapGetters } from 'vuex';
import { mapActions } from 'vuex';
import { mapMutations } from 'vuex';
import * as types from '../store/types';

export default {
  data () {
    return {
      visible: false,
      currentAudio: null,
      audios: []
    }
  },
  computed: {
    ...mapGetters({
      podcastEpisodes: types.EPISODES,
      currentEpisode: types.CURRENT_EPISODE,
      paused: types.PAUSED
    }),
    // paused () {
    //   if(this.podcastEpisodes === null) return true
    //   else return !this.podcastEpisodes.find(el => { return el.id == this.currentEpisode }).audio.paused
    // },
    title () {
      if(this.currentEpisode == 0 || this.podcastEpisodes === null) return ''
      return this.podcastEpisodes.find(el => { return el.id == this.currentEpisode }).title || ''
    }
  },
  watch: {
    currentEpisode (val, prev) {
      this.visible = val > 0
      if(prev > 0) this.audios[prev-1].pause()
      if(val > 0) {
        this.currentAudio = this.audios[val-1]
        this.currentAudio.play()
      }
    },
    paused (val) {
      if(this.currentEpisode > 0) {
        if(val) this.currentAudio.pause()
        else this.currentAudio.play()
      }
    }
  },
  methods: {
    ...mapActions({
      updateCurrentEpisode: types.UPDATE_CURRENT_EPISODE
    }),
    ...mapMutations({
      play: types.PLAY,
      pause: types.PAUSE,
      updateTime: types.UPDATE_TIME,
      updateDuration: types.UPDATE_DURATION
    }),
    close () {
      this.updateCurrentEpisode(0)
      this.visible = false
      // this.podcastEpisodes.find(el => { return el.audio.paused == false }).audio.paused = true
    },
    timeUpdated () {
      this.updateTime(this.currentAudio.currentTime)
      this.updateDuration(this.currentAudio.duration)
      // this.episodeContent.audio.currentTime = this.audio.currentTime
      // this.episodeContent.audio.duration = this.audio.duration
      // this.$refs.progress.style.width = (this.currentTime / this.duration * 100) + '%'
    },
    audioEnded () {
      this.pause()

      // this.episodeContent.audio.paused = true
      // this.episodeContent.audio.currentTime = 0
      // this.$emit('ended')
      // this.$refs.progress.style.width = '0'
    }
  },
  beforeMount () {
    this.audios = this.podcastEpisodes.map(episode => {
      let audio = new Audio(episode.audio.src)
      audio.addEventListener('ended', this.audioEnded)
      audio.addEventListener('timeupdate', this.timeUpdated)
      return audio
    })
  }
}
</script>

<style lang="css">
</style>

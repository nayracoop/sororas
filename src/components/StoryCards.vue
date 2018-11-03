<template>
  <div>
    <div v-for="(story, i) in storyList" v-show="i === currentStory">
      <video class="video-story" v-for="(part, j) in story.stories" :ref="'video-'+i+'-'+j" :src="part.src" v-show="j === currentVideo"></video>
    </div>
    <div class="story-timelines">
      <div class="single-timeline" v-for="(part, index) in list" :style="'width:'+100/list.length+'%'">
        <div class="progress"><div class="bar" ref="progressBar" :style="'width:' + ((index == currentVideo) ? progress : 100 * Number(index < currentVideo)) + '%'"></div></div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex';
import * as types from '../store/types';

export default {
  data () {
    return {
      video: null,
      progress: 0,
      currentStory: 0,
      currentVideo: 0,
      indexes: []
    }
  },
  computed: {
    ...mapGetters({
      storyList: types.STORY_LIST
    }),
    list () {
      let parts = []
      this.storyList[this.currentStory].stories.forEach(el => {
        if(el.enabled) parts.push(el)
      })
      return parts
    }
  },
  methods: {
    open (id) {
      this.progress = 0
      this.currentStory = id
      this.currentVideo = this.list.findIndex(el => { return el.viewed === false })
      if(this.currentVideo < 0) this.currentVideo = this.indexes[this.currentStory] //this.currentVideo = 0
      this.play()
    },
    play () {
      this.progress = 0
      if(this.currentVideo >= this.list.length) this.currentVideo = 0
      this.video = this.$refs['video-'+this.currentStory+'-'+this.currentVideo][0]
      this.list[this.currentVideo].viewed = true

      // this.video.addEventListener('canplay', this.canPlay)
      // this.video.currentTime = 0
      this.video.play()
    },
    stop() {
      this.video.pause()
      this.video.currentTime = 0;
      this.currentVideo++
      this.indexes[this.currentStory] = this.currentVideo
    },
    timeUpdated () {
      this.progress = this.video.currentTime / this.video.duration * 100
    },
    next () {
      this.currentVideo++
      if(this.currentVideo >= this.list.length)  this.$emit('ended')
      else this.play()
    }
  },
  mounted() {
    let videos = document.querySelectorAll('.video-story')
    videos.forEach(v => {
      v.addEventListener('ended', this.next)
      v.addEventListener('timeupdate', this.timeUpdated)
    })
    this.storyList.forEach(el => { this.indexes.push(0) })
  }
}
</script>

<style>
</style>

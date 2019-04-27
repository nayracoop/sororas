<template>
  <div class="stories">
    <b-container fluid class="menu" ref="menuContainer" :class="{ opened:visible, scrolleable:scrolleable}" :style="{ 'padding-bottom': paddingBottom + 'px' }">
      <div ref="storiesMenuContainer" class="slider-guide">
    <b-button class="stories-btn" @click="toggleStories()">
      <span><svg aria-hidden="true" data-prefix="far" data-icon="comment-dots" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" class="svg-inline--fa fa-comment-dots fa-w-16"><path fill="currentColor" d="M144 208c-17.7 0-32 14.3-32 32s14.3 32 32 32 32-14.3 32-32-14.3-32-32-32zm112 0c-17.7 0-32 14.3-32 32s14.3 32 32 32 32-14.3 32-32-14.3-32-32-32zm112 0c-17.7 0-32 14.3-32 32s14.3 32 32 32 32-14.3 32-32-14.3-32-32-32zM256 32C114.6 32 0 125.1 0 240c0 47.6 19.9 91.2 52.9 126.3C38 405.7 7 439.1 6.5 439.5c-6.6 7-8.4 17.2-4.6 26S14.4 480 24 480c61.5 0 110-25.7 139.1-46.3C192 442.8 223.2 448 256 448c141.4 0 256-93.1 256-208S397.4 32 256 32zm0 368c-26.7 0-53.1-4.1-78.4-12.1l-22.7-7.2-19.5 13.8c-14.3 10.1-33.9 21.4-57.5 29 7.3-12.1 14.4-25.7 19.9-40.2l10.6-28.1-20.6-21.8C69.7 314.1 48 282.2 48 240c0-88.2 93.3-160 208-160s208 71.8 208 160-93.3 160-208 160z" class=""></path></svg></span>
      <span class="btn-title">Historias</span>
    </b-button>
        <ul ref="storiesMenuContent" :style="'width:'+menuWidth+'px'">
          <app-story-bubble :title="character.name" :id="index" v-for="(character, index) in storyList" :key="character.name" @open="toggleFullscreen" />
        </ul>
      </div>
    </b-container>
    <app-story-cards ref="display" class="story-cards" :class="{ active:playing }" @ended="ended" />
  </div>
</template>

<script>
import AppStoryBubble from '../components/StoryBubble'
import AppStoryCards from '../components/StoryCards'
import { mapGetters } from 'vuex'
import { mapMutations } from 'vuex'
import * as types from '../store/types'

export default {
  components: {
    AppStoryBubble,
    AppStoryCards
  },
  data () {
    return {
      fullscreen: false,
      paddingBottom: 0,
      scrolleable: true
    }
  },
  computed: {
    ...mapGetters({
      storyList: types.STORY_LIST,
      visible: types.VISIBLE,
      playing: types.PLAYING
    }),
    menuWidth () {
      let count = 0
      this.storyList.forEach(el => {
        if (el.stories.find(st => { return st.enabled })) count++
      })
      return 66 * count
      // return 68*this.storyList.find(el => { return el.stories.find(st => { return st.enabled }) }).length
    }
  },
  methods: {
    ...mapMutations({
      hideVisor: types.HIDE_STORY
    }),
    ...mapMutations({
      toggleStories: types.TOGGLE_STORIES
    }),
    toggleFullscreen (id) {
      let el = this.$refs.display.$el
      if (el.requestFullscreen) el.requestFullscreen()
    	else if (el.msRequestFullscreen) el.msRequestFullscreen()
    	else if (el.mozRequestFullScreen) el.mozRequestFullScreen()
    	else if (el.webkitSupportsFullscreen) el.webkitEnterFullscreen()
    	else if (el.webkitRequestFullscreen) el.webkitRequestFullscreen()
      this.$refs.display.open(id)
      // this.fullscreen = !this.fullscreen;
    },
    updateFullscreenMode () {
      var mode = document.fullScreen || document.mozFullScreen || document.webkitIsFullScreen || document.MSFullscreen
    	if (!mode) {
        this.hideVisor()
        this.$refs.display.stop()
    	}
    },
    ended () {
      if (document.exitFullscreen) document.exitFullscreen()
    	else if (document.webkitExitFullscreen) document.webkitExitFullscreen()
    	else if (document.mozCancelFullScreen) document.mozCancelFullScreen()
    	else if (document.msExitFullscreen) document.msExitFullscreen()
    },
    move (val) {
      console.log(this.paddingBottom)
      this.paddingBottom = (val) ? 49 : 0
    },
    calcStoriesWidth () {
      let storiesWidth = this.$refs.storiesMenuContent.offsetWidth
      let guideWidth = this.$refs.storiesMenuContainer.offsetWidth
      if (storiesWidth > guideWidth) {
        this.scrolleable = true
      } else {
        this.scrolleable = false
      }
    }
    // toggleStoriesNav () {}
  },
  mounted () {
    document.addEventListener('fullscreenchange', this.updateFullscreenMode)
    document.addEventListener('webkitfullscreenchange', this.updateFullscreenMode)
    document.addEventListener('mozfullscreenchange', this.updateFullscreenMode)
    document.addEventListener('MSFullscreenChange', this.updateFullscreenMode)
    this.calcStoriesWidth()
    window.addEventListener('resize', this.calcStoriesWidth)
  },
  beforeDestroy () {
    window.removeEventListener('resize', this.calcStoriesWidth)
  }
}
</script>

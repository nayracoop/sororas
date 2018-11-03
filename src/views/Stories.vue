<template>
  <div class="stories">
    <b-container class="menu" :class="{ opened:visible }">
      <div class="slider-guide">
        <ul :style="'width:'+menuWidth+'px'">
          <app-story-bubble :title="character.name" :id="index" v-for="(character, index) in storyList" @open="toggleFullscreen" />
        </ul>
      </div>
    </b-container>
    <app-story-cards ref="display" class="story-cards" :class="{ active:playing }" @ended="ended" />
  </div>
</template>

<script>
import AppStoryBubble from '../components/StoryBubble'
import AppStoryCards from '../components/StoryCards'
import { mapGetters } from 'vuex';
import { mapMutations } from 'vuex';
import * as types from '../store/types';

export default {
  components: {
    AppStoryBubble,
    AppStoryCards
  },
  data () {
    return {
      fullscreen: false,
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
        if(el.stories.find(st => { return st.enabled })) count++
      })
      return 66*count
      // return 68*this.storyList.find(el => { return el.stories.find(st => { return st.enabled }) }).length
    }
  },
  methods: {
    ...mapMutations({
      hideVisor: types.HIDE_STORY
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
      var mode = document.fullScreen || document.mozFullScreen || document.webkitIsFullScreen || document.MSFullscreen;
    	if(!mode) {
        this.hideVisor()
        this.$refs.display.stop()
    	}
    },
    ended () {
      if (document.exitFullscreen) document.exitFullscreen();
    	else if (document.webkitExitFullscreen) document.webkitExitFullscreen();
    	else if (document.mozCancelFullScreen) document.mozCancelFullScreen();
    	else if (document.msExitFullscreen) document.msExitFullscreen();
    }
  },
  mounted () {
    document.addEventListener("fullscreenchange", this.updateFullscreenMode)
    document.addEventListener("webkitfullscreenchange", this.updateFullscreenMode)
    document.addEventListener("mozfullscreenchange", this.updateFullscreenMode)
    document.addEventListener("MSFullscreenChange", this.updateFullscreenMode)
  }

}

</script>

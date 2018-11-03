<template>
  <li :class="{ active:updated }" v-if="enabled">
    <article class="story">
      <div class="bubble"><a href="#" @click.prevent="openStory">{{ title }}</a></div>
      <!-- <div class="visor" ref="visor">
        <video v-for="part in parts" :src="part.src"></video>
      </div> -->
      <h3>{{ title }}</h3>
    </article>
  </li>
</template>

<script>
import { mapGetters } from 'vuex';
import { mapMutations } from 'vuex';
import * as types from '../store/types';

export default {
  props: {
    title: '',
    id: 0,
  },
  computed: {
    ...mapGetters({
      storyList: types.STORY_LIST
    }),
    updated () {

      return Boolean(this.storyList[this.id].stories.find(el => { return el.viewed === false && el.enabled === true }))
    },
    enabled () {
      this.storyList[this.id].stories.forEach(el => {
        if(el.enabled === false) {
          let checks = 0
          el.dependencies.forEach(dp => {
            if(this.storyList[dp[0]].stories[dp[1]].viewed) checks++
          })
          if(checks == el.dependencies.length) el.enabled = true
        }
      })
      return Boolean(this.storyList[this.id].stories.find(el => { return el.enabled === true }))
    }
  },
  methods: {
    ...mapMutations({
      show: types.SHOW_STORY,
      setStory: types.SET_CURRENT_STORY
    }),
    openStory () {
      this.show()
      this.setStory(this.id)
      this.$emit('open', this.id)
    }
  }
}
</script>

<style lang="css">
</style>

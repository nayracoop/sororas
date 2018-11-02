<template>
  <b-container class="stories" :class="{ opened:opened }">
    <div>
      <ul>
        <li v-for="story in storyList" class="active"><div class="bubble"><a href="#">{{ story.label }}</a></div></li>
      </ul>
    </div>
  </b-container>
</template>

<script>
import { mapGetters } from 'vuex';
import * as types from '../store/types';

export default {

  data () {
    return {
      stories: {
        groups:[
          { label:"M", el:null, current:-1, parts:[
            { title:"Embarazo", img:"", audio:"1-MABEL-quedaembarazada.mp3", dependencies:[], listened:false, enabled:true }
          ] },
          { label:"P", el:null, current:-1, parts:[
            { title:"Embarazo", img:"", audio:"1-PAOLA-quedaembaraza.mp3", dependencies:[ [0,0], [2,0] ], listened:false, enabled:false }
          ] },
          { label:"C", el:null, current:-1, parts:[
            { title:"Embarazo", img:"", audio:"2-CARLA-embarazo.mp3", dependencies:[ ], listened:false, enabled:true },
            { title:"Motivos", img:"", audio:"3-CARLA-noestabapreparada.mp3", dependencies:[ [1,0] ], listened:false, enabled:false }
          ] }
        ]
      }
    }
  },
  computed: {
    ...mapGetters({
      storyList: types.STORY_LIST,
      opened: types.IS_OPENED
    })
  }

}

</script>

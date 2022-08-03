<template>
  <LadderHeader />
  <div v-for="ladderitem in ladderData" :key="ladderData.id">
    <LadderItem 
      :position="ladderitem.stats.position"
      clubicon="./img/teams/blues.png"
      :clubname="ladderitem.short_name"
      :played="ladderitem.stats.played"
      :wins="ladderitem.stats.won"
      :losses="ladderitem.stats.lost"
      :draws="ladderitem.stats.drawn"
      :percentage="ladderitem.stats.percentage"
      :points="ladderitem.stats.points"
    />
  </div>
</template>
<script lang="ts">
import axios from 'axios';
import LadderHeader from './LadderHeader.vue';
import LadderItem from './LadderItem.vue';

export default {
  components: {
    LadderHeader,
    LadderItem
  },
  data() {
    return {
      ladderData: [],
      roundData: ''
    }
  },
  mounted() {
    axios.get('./data/dummy_data.json')
      .then(response => {
        console.log(response);
        this.ladderData = response.data.teams;
        this.roundData = response.data.round.name;
      })
      .catch(function (error) {
        console.log(error)
      })
  }
}
</script>

<template>
  <div v-for="fixtureItem in fixtureData" :key="fixtureItem.id">
    <FixtureItem 
      :clubData="clubData"
      day="Saturday"
      month="July"
      date="16"
      :venue="fixtureItem.score.venue.name"
      :teamHome="fixtureItem.score.team_A"
      :teamAway="fixtureItem.score.team_B"
    />
  </div>
  
</template>
<script lang="ts">
import FixtureItem from "./FixtureItem.vue"

export default {
  components: {
    FixtureItem
  },
  props: {
    fixtureData: {
      type: Object
    },
    clubData: {
      type: Object
    },
    roundName: {
      type: String
    },
    roundNumber: {
      type: Number
    }
  },
  data() {
    return {
      currentFixture: {}
    }
  }
}
</script>

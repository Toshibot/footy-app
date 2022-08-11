<template>
  <h2>Fixture - Round {{roundNumber}}</h2>
  <div class="fixture-item-container" v-for="fixtureItem in fixtureData" :key="fixtureItem.id">
    <FixtureItem 
      :clubData="clubData"
      :timestamp="fixtureItem.score.match_start_date"
      :venue="fixtureItem.score.venue.name"
      :gameStatus="fixtureItem.score.match_status_normalised"
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
<style scoped lang="scss">
  h2 {
    font-size: 24px;
    text-align: center;
    padding-bottom: 12.5px;
  }
  .fixture-item-container {
    display: inline-block;
    width: 32%;
    margin-bottom: 17px;
    margin-right: 1.5%;

    &:nth-child(4),
    &:nth-child(7),
    &:nth-child(10) {
      margin-right: 0;
    }
  }
</style>

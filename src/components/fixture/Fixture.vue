<template>
  <h2>Fixture - Round {{roundNumber}}</h2>
  <div class="fixture-container u-flex">
    <span class="fixture-item-container" v-for="fixtureItem in fixtureData" :key="fixtureItem.id" v-if="fixtureItem.">
      <FixtureItem 
        :clubData="clubData"
        :fixtureRoundNumber="fixtureItem.round.number"
        :roundNumber="roundNumber"
        :timestamp="fixtureItem.match_start_date"
        :venue="fixtureItem.venue.name"
        :gameStatus="fixtureItem.match_status_normalised"
        :matchStatus="fixtureItem.match_status"
        :matchTime="fixtureItem.match_time"
        :teamHome="fixtureItem.team_A"
        :teamAway="fixtureItem.team_B"
      />
    </span>
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
  }
}
</script>
<style scoped lang="scss">
  h2 {
    font-size: 24px;
    text-align: center;
    padding-bottom: 12.5px;

    @media screen and (max-width: $break-m) {
      margin-top: 25px;
    }
  }
  .fixture-container {
    justify-content: space-between;
    flex-wrap: wrap;
    column-gap: 18px;

    @media screen and (min-width: $break-m) {
      padding-right: $size-base;
    }
  }
  .fixture-item-container {
    min-width: 300px;
    flex: 1 1 auto;

    @media screen and (max-width: $break-m) {
      display: block;
      width: 100%;
      max-width: 100%;
    }

    @media screen and (max-width: $break-xs) {
      padding: 0 12.5px;
    }
  }
</style>

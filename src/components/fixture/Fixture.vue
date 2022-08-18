<template>
  <h2>Fixture - Round {{roundNumber}}</h2>
  <span class="fixture-item-container" v-for="fixtureItem in fixtureData" :key="fixtureItem.id">
    <FixtureItem 
      :clubData="clubData"
      :fixtureRoundNumber="fixtureItem.round.number"
      :roundNumber="getCurrentRound(roundData)"
      :timestamp="fixtureItem.match_start_date"
      :venue="fixtureItem.venue.name"
      :gameStatus="fixtureItem.match_status_normalised"
      :teamHome="fixtureItem.team_A"
      :teamAway="fixtureItem.team_B"
    />
  </span>
  
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
    roundData: {
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
      currentFixture: []
    }
  },
  methods: {
    getCurrentRound(roundData:any){
      let target_date = new Date();

      for (let i = 0; i < roundData.length; i++) {
          let round = roundData[i];
          let round_start = new Date(round.start);
          let round_end = new Date(round.end);

          if (round_start < target_date && target_date < round_end ) {
              return round.round;
          } 
      }
    }
  }
}
</script>
<style scoped lang="scss">
  h2 {
    font-size: 24px;
    text-align: center;
    padding-bottom: 12.5px;

    @media screen and (max-width: $break-s) {
      margin-top: 25px;
    }
  }
  .fixture-item-container {
    width: auto;
  }
</style>

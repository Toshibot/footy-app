<template>
{{firstQualifyingFinal.team_A}}
    <FinalsItem :teamHome="firstQualifyingFinal.team_A" />
    <!-- <FixtureItem 
      :clubData="clubData"
      :fixtureRoundNumber="roundNumber"
      :roundNumber="roundNumber"
      :timestamp="firstQualifyingFinal.match_start_date"
      :venue="firstQualifyingFinal.venue.name"
      :gameStatus="firstQualifyingFinal.match_status_normalised"
      :matchStatus="firstQualifyingFinal.match_status"
      :matchTime="firstQualifyingFinal.match_time"
      :teamHome="firstQualifyingFinal.team_A"
      :teamAway="firstQualifyingFinal.team_B"
    /> -->
</template>
<script lang="ts">
  import FixtureItem from "../fixture/FixtureItem.vue"
  import FinalsItem from "./FinalsItem.vue"

  export default {
    components: {
    FixtureItem,
    FinalsItem
},
    props: {
      fixtureData: {
        type: Object
      },
      clubData: {
        type: Object
      },
      firstQualifyingFinal: {
        type: Object
      },
      secondQualifyingFinal: {
        type: Object
      }
    }
  }
</script>

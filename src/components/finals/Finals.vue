<template>
  <div class="finals">
    <FinalsWeek_1 :clubData="clubData" :roundNumber="roundNumber" :firstQualifyingFinal="fixtureData[198]" :secondQualifyingFinal="fixtureData[199]" />
  </div>
</template>
<script lang="ts">
import FinalsWeek_1 from "./FinalsWeek_1.vue"

export default {
  components: {
  FinalsWeek_1
},
  props: {
    fixtureData: {
      type: Object
    },
    firstQualifyingFinal: {
      type: Object
    },
    clubData: {
      type: Object
    },
    fixtureRoundNumber: {
      type: Number
    },
    roundNumber: {
      type: Number
    }
  }
}
</script>
<style scoped lang="scss">
  .finals {
    text-align: center;
  }
</style>
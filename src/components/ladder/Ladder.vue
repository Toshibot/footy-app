<template>
  <h2>Ladder</h2>
  <LadderHeader />
  <div v-for="ladderitem in ladderData" :key="ladderitem.id">
    <LadderItem 
      :position="ladderitem.stats.position"
      :clubicon="'./img/teams/' + ladderitem.code + '.png'"
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
import LadderHeader from './LadderHeader.vue';
import LadderItem from './LadderItem.vue';

export default {
  components: {
    LadderHeader,
    LadderItem
  },
  props: {
    ladderData: {
      type: Object
    }
  }
}
</script>
<style scoped lang="scss">
  h2 {
    text-align: center;
    font-size: 24px;
    padding-bottom: 9.5px;
  }
</style>

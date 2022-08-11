<template>
  <div class="fixture-team">
    <IconKit :source="kitsource" :size="161" class="icon-kit" />
    <span class="fixture-team-name">{{teamname}}</span>
    <span class="fixture-team-score">
      {{goals}}.{{behinds}}.<span class="fixture-team-score-total">{{totalscore}}</span>
    </span>
  </div>
</template>
<script lang="ts">
import IconKit from "../icons/IconKit.vue";

export default {
    props: {
      kitsource: {
        type: String,
        required: true
      },
      teamname: {
        type: String,
        required: true
      },
      goals: {
        type: Number,
        required: false
      },
      behinds: {
        type: Number,
        required: false
      },
      totalscore: {
        type: Number,
        required: false
      }
    },
    components: { IconKit }
}
</script>
<style scoped lang="scss">
  .icon-kit {
    width: 80px;
    height: 80px;
  }
</style>

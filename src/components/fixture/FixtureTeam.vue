<template>
  <div class="fixture-team">
    <IconKit :source="kitsource" :size="161" />
    <span class="fixture-team-name">{{teamname}}</span>
    <span class="fixture-team-score">
      {{goals}}.{{behinds}}<span class="fixture-team-score-total">{{totalscore}}</span>
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
        type: String,
        required: false
      },
      behinds: {
        type: String,
        required: false
      },
      totalscore: {
        type: String,
        required: false
      }
    },
    components: { IconKit }
}
</script>

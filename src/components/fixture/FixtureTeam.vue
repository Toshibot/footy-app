<template>
  <div class="fixture-team">
    <IconKit :source="kitsource" :size="161" class="icon-kit" />
    <span class="fixture-team-name">{{teamname}}</span>
    <span v-if="gameStatus === 'pre'" class="fixture-team-score">
      -
    </span>
    <span v-else class="fixture-team-score">
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
      gameStatus: {
        type: String
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
  .fixture-team {
    display: inline-block;
    width: 80px;
    text-align: center;
    font-size: 12px;
    line-height: 16px;
  }
  .icon-kit {
    width: 80px;
    height: 80px;
    margin: 12.5px 0;
    text-align: center;
  }

  .fixture-team-score {
    display: block;
    font-size: 15px;
    padding-top: 6.25px;

    &-total {
      font-weight: 600;
    }
  }
</style>

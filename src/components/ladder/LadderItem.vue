<template>
  <div class="ladder-item">
    <div class="ladder-item-position">
      {{position}}
    </div>
    <div class="ladder-item-clubicon">
      <img :src="clubicon">
    </div>
    <div class="ladder-item-clubname">
      {{clubname}}
    </div>
    <div class="ladder-item-played">
      {{played}}
    </div>
    <div class="ladder-item-wins">
      {{wins}}
    </div>
    <div class="ladder-item-losses">
      {{losses}}
    </div>
    <div class="ladder-item-draws">
      {{draws}}
    </div>
    <div class="ladder-item-percentage">
      {{percentage}}
    </div>
    <div class="ladder-item-points">
      {{points}}
    </div>
  </div>
</template>
<style scoped lang="scss">
  .ladder-item {
    color: $color-white;

    div {
      display: inline-block;
    }

    &-clubicon {
      img {
        width: 41px;
        height: 41px;
        margin-bottom: -2px;
        background: $color-grey;
      }
    }
  }
</style>
<script lang="ts">

export default {
  props: {
    position: {
      type: Number
    },
    clubicon: {
      type: String
    },
    clubname: {
      type: String
    },
    played: {
      type: Number
    },
    wins: {
      type: Number
    },
    losses: {
      type: Number
    },
    draws: {
      type: Number
    },
    percentage: {
      type: Number
    },
    points: {
      type: Number
    }
  }
}
</script>

<template>
  <div :class="'ladder-item ladder-item-' + position">
    <div class="ladder-item-position">
      {{position}}
    </div>
    <div class="ladder-item-club">
      <img :src="clubicon">
      <span>{{clubname}}</span>
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
    display: flex;
    flex: 0 1 auto;
    flex-wrap: wrap;
    margin: 3px auto;
    position: relative;
    text-align: left;
    color: $color-white;
    background: $color-grey-dark;

    div {
      display: inline-block;
      height: 41px;
      line-height: 41px;

      &:nth-child(even) {
        background: rgba(0,0,0,0.05);
      }
    }

    &-club {
      flex-basis: 33.333%;
      max-width: 33.333%;
      text-align: left;

      @media screen and (max-width: $break-s) {
        flex-basis: 58.333%;
        max-width: 58.333%;
      }

      img {
        width: 41px;
        height: 41px;
        margin-bottom: -2px;
        background: $color-grey;
        @include boxShadow(2, $color-black);
      }

      span {
        padding-left: 12.5px;
        display: inline-block;
        vertical-align: top;
      }
    }

    &-position,
    &-played,
    &-wins,
    &-losses,
    &-draws,
    &-points {
      flex-basis: 8.333%;
      max-width: 8.333%;
      text-align: center;
    }

    &-percentage {
      flex-basis: 16.667%;
      max-width: 16.667%;
      text-align: center;
    }

    &-wins,
    &-losses,
    &-draws {
      @media screen and (max-width: $break-s) {
        display: none !important;
      }
    }

    &-1,
    &-2,
    &-3,
    &-4 {
      color: $color-black;
      background: $color-white;
    }

    &-5,
    &-6,
    &-7,
    &-8 {
      color: $color-black;
      background: $color-offwhite;
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

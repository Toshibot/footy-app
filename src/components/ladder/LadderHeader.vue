<template>
  <div class="ladder-header">
    <div class="ladder-header-position">
      Pos
    </div>
    <div class="ladder-header-club">
      Team
    </div>
    <div class="ladder-header-played">
      P
    </div>
    <div class="ladder-header-wins">
      W
    </div>
    <div class="ladder-header-losses">
      L
    </div>
    <div class="ladder-header-draws">
      D
    </div>
    <div class="ladder-header-percentage">
      %
    </div>
    <div class="ladder-header-points">
      Pts
    </div>
  </div>
</template>
<style scoped lang="scss">
  .ladder-header {
    display: flex;
    flex: 0 1 auto;
    flex-wrap: wrap;
    margin: 3px auto;
    position: relative;
    text-align: left;
    color: $color-white;
    background: $color-black;

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

      img {
        width: 41px;
        height: 41px;
        margin-bottom: -2px;
        background: $color-grey;
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
  }
</style>
<script lang="ts">

export default {
  
}
</script>

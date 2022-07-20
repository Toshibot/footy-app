<template>
  <div class="fixture-item">
    <div class="fixture-date">
      <span class="fixture-date-day">{{day}}</span>
      <span class="fixture-date-month">{{month}}</span>
      <span class="fixture-date-date">{{date}}</span>
      <span class="fixture-date-time">{{time}}</span>
    </div>
    <FixtureTeam 
      kitsource="./img/teams/cats-home.png"
      teamname="Geelong"
      totalscore="-"
    />
    <div class="fixture-vs">vs</div>
    <FixtureTeam 
      kitsource="./img/teams/blues-home.png"
      teamname="Carlton"
      totalscore="-"
    />
    <div class="fixture-venue">{{venue}}</div>
  </div>
</template>
<script lang="ts">
import FixtureTeam from './FixtureTeam.vue'

export default {
    props: {
      date: {
        type: String,
        required: false
      },
      day: {
        type: String,
        required: false
      },
      month: {
        type: String,
        required: false
      },
      time: {
        type: String,
        required: false
      },
      venue: {
        type: String,
        required: false
      }
    },
    components: { FixtureTeam }
}
</script>

<template>
  <div class="fixture-item">
    <div class="fixture-date">
      <span class="fixture-date-day">{{day}}</span>
      <span class="fixture-date-month">{{month}}</span>
      <span class="fixture-date-date">{{date}}</span>
      <span class="fixture-date-time">{{time}}</span>
    </div>
    <FixtureTeam 
      :kitsource="homeTeamKit(clubData, teamHome.code)"
      :teamname="teamHome.short_name"
      :goals="teamHome.goals"
      :behinds="teamHome.behinds"
      :totalscore="teamHome.score"
    />
    <div class="fixture-vs">vs</div>
    <FixtureTeam 
      :kitsource="awayTeamKit(clubData, teamHome.code, teamAway.code)"
      :teamname="teamAway.short_name"
      :goals="teamAway.goals"
      :behinds="teamAway.behinds"
      :totalscore="teamAway.score"
    />
    <div class="fixture-venue">{{venue}}</div>
  </div>
</template>
<script lang="ts">
import FixtureTeam from './FixtureTeam.vue'

export default {
    props: {
      clubData: {
        type: Object
      },
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
      },
      teamHome: {
        type: Object
      },
      teamAway: {
        type: Object
      }
    },
    components: { FixtureTeam },
    methods: {
      homeTeamKit(clubData:any, teamkey: any) {
        return clubData[teamkey].kit.home
      },
      awayTeamKit(clubData:any, hometeamkey: any, awayteamkey: any) {
        if (clubData[awayteamkey].kit.clash.teams.includes(hometeamkey)) {
          return clubData[awayteamkey].kit.clash.kit
        } else {
          return clubData[awayteamkey].kit.away
        }
      }
    }
}
</script>

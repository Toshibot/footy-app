<template>
  <div class="fixture-item" :class="[{current: fixtureRoundNumber === roundNumber, live: gameStatus === 'live', post: gameStatus === 'post'}]">
    <div class="fixture-date">
      <span v-if="gameStatus === 'pre' || gameStatus === 'post'">
        <span class="fixture-date-day">{{gameTime(timestamp).day}}</span>
        <span class="fixture-date-month">{{gameTime(timestamp).month}}</span>
        <span class="fixture-date-date">{{gameTime(timestamp).date}}</span>
      </span>
      <span v-if="gameStatus === 'pre'" class="fixture-date-time">{{gameTime(timestamp).time}}</span>
      <span v-else-if="gameStatus === 'post'" class="fixture-date-time">FT</span>
      <span v-else-if="gameStatus === 'live'" class="fixture-date-time">
        <span class="fixture-live">LIVE </span>
        {{matchStatus}} {{matchTime}}
      </span>
    </div>
    <FixtureTeam 
      :kitsource="homeTeamKit(clubData, teamHome.code)"
      :gameStatus="gameStatus"
      :teamname="clubData[teamHome.code].name"
      :goals="teamHome.goals"
      :behinds="teamHome.behinds"
      :totalscore="teamHome.score"
    />
    <div class="fixture-vs">vs</div>
    <FixtureTeam 
      :kitsource="awayTeamKit(clubData, teamHome.code, teamAway.code)"
      :gameStatus="gameStatus"
      :teamname="clubData[teamAway.code].name"
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
      gameStatus: {
        type: String
      },
      matchStatus: {
        type: String
      },
      matchTime: {
        type: String
      },
      fixtureRoundNumber: {
        type: Number
      },
      roundNumber: {
        type: Number
      },
      timestamp: {
        type: String
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
      },
      gameTime(timestamp:any) {
        let date = new Date(timestamp);
        let dayValue = date.getDay();
        let monthValue = date.getMonth();
        let dateValue = date.getDate();
        let hoursValue = date.getHours();
        let minutesValue = date.getMinutes();
        let pad = function(value:any) {
            if(value < 10) {
                return '0' + value;
            } else {
                return value;
            }
        };
        let daysOfTheWeek = [
          "Sunday", 
          "Monday", 
          "Tuesday", 
          "Wednesday", 
          "Thursday", 
          "Friday", 
          "Saturday"
        ];
        let monthsOfTheYear = [
          "January",
          "February",
          "March",
          "April",
          "May",
          "June",
          "July",
          "August",
          "September",
          "October",
          "November",
          "December"
        ];
        return {
          day: daysOfTheWeek[dayValue],
          month: monthsOfTheYear[monthValue],
          date: dateValue,
          time: pad(hoursValue) + ':' + pad(minutesValue)
        }
      }
    }
}
</script>
<style scoped lang="scss">
  .fixture-item {
    display: none;
    @include borderBox();
    background: $color-grey-dark;
    color: $color-white;
    text-align: center;

    &.live {
      background: $color-white;
      color: $color-black;
    }

    &.post {
      background: #444;
    }
    &.current {
      display: inline-block;
      padding: 0 17px;
      margin-bottom: 18px;
      width: 100%;

      @media screen and (max-width: $break-m) {
        width: 100%;
        margin: 0 0 17px;
      }
    }
  }

  .fixture-date {
    padding: 26px 0 3px;
    line-height: 1.5;
    font-weight: 600;

    &-day,
    &-month,
    &-date {
      margin-right: 5px; 
    }

    &-time {
      font-weight: 400;
    }
  }

  .fixture-live {
    color: $color-red;
    font-weight: 600;
  }

  .fixture-vs {
    display: inline-block;
    padding: 0 25px;
    vertical-align: top;
    margin-top: 50px;
  }

  .fixture-venue {
    padding: 20.5px 0 24px;
    font-size: 12px;
  }
</style>

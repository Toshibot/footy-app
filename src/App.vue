<script setup lang="ts">
  import IconKit from "./components/icons/IconKit.vue";
  import Fixture from "./components/fixture/Fixture.vue";
  import Ladder from "./components/ladder/Ladder.vue";
</script>

<template>
  <body id="Body" class="t-dark">
    <main class="o-main u-vert-center">
      <section v-if="getCurrentRound(roundData) < 24" class="o-section u-flex">
        <h1 class="o-section__title">Season 2022</h1>
        <article class="c-ladder__container u-col-5@lg u-col-12@md u-padding-col">
          <div class="js-ladder">
              <Ladder :ladderData="ladderData" :clubData="clubData" />
          </div>
        </article>
        <article class="u-col-7@lg u-col-12@md u-padding-col@md">
          <div class="c-fixture">
            <div class="js-fixture">
              <Fixture :fixtureData="fixtureData" :clubData="clubData" :roundNumber="getCurrentRound(roundData)" :roundName="roundName" />
            </div>
          </div>
        </article>
      </section>
      <section v-else class="o-section u-flex">
        <h1 class="o-section__title">Finals 2022</h1>
      </section>
    </main>
  </body>
</template>

<style scoped lang="scss">

</style>
<script lang="ts">
import axios from 'axios';

export default {
  data() {
    return {
      ladderData: [],
      roundData: [],
      roundName: '',
      roundNumber: 0,
      fixtureData: [],
      clubData: []
    }
  },
  mounted() {
    // Club Data - Hosted
    axios.get('./data/clubs.json')
      .then(response => {
        this.clubData = response.data;
      })
    // Fixture Dates - Hosted
    axios.get('./data/fixture.json')
      .then(response => {
        this.roundData = response.data;
      })
    // Ladder Data - Remote
    // axios.get('./data/dummy_data.json') // Test Data
    axios.get('https://statsapi.foxsports.com.au/3.0/api/sports/afl/series/1/seasons/126/ladder.json?userkey=6B2F4717-A97C-49F6-8514-3600633439B9')
      .then(response => {
        this.ladderData = response.data.teams;
        this.roundName = response.data.round.name;
      })
      .catch(function (error) {
        console.log(error)
      })
    // Fixture Data - Remote
    // axios.get('./data/data-fixture.json') // Test Data
    axios.get('https://statsapi.foxsports.com.au/3.0/api/sports/afl/series/1/seasons/126/fixturesandresults.json?userkey=6B2F4717-A97C-49F6-8514-3600633439B9')
      .then(response => {
        this.fixtureData = response.data;
      })
  },
  methods: {
    getCurrentRound(roundData:any){
      let target_date = new Date();

      for (let i = 0; i < roundData.length; i++) {
          let round = roundData[i];
          let round_start = new Date(round.start);
          let round_end = new Date(round.end);

          if (round_start < target_date && target_date < round_end ) {
              return round.round;
          } 
      }
    }
  }
}
</script>
<style scoped lang="scss">
  .hidden {
    display: none;
  }
  .o-section__title {
    width: 100%;
    text-align: center;
    font-size: 24px;
    padding: 12.5px 0;
    margin-bottom: 12.5px;
    background: $color-black-dark;
  }
  .c-ladder__container {
    @include flex-size($width-5);

    @media screen and (max-width: $break-m) {
      @include flex-size($width-12)
    }
  }
  .c-fixture {
    text-align: center;
  }
</style>


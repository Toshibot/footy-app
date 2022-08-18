<script setup lang="ts">
  import IconKit from "./components/icons/IconKit.vue";
  import Fixture from "./components/fixture/Fixture.vue";
  import Ladder from "./components/ladder/Ladder.vue";
</script>

<template>
  <body id="Body" class="t-dark">
    <main class="o-main u-vert-center">
      <section class="o-section u-flex">
        <h1 class="o-section__title">Season 2022</h1>
        <article class="c-ladder__container u-col-5@lg u-col-12@md u-padding-col">
          <div class="js-ladder">
              <Ladder :ladderData="ladderData" :clubData="clubData" />
          </div>
        </article>
        <article class="u-col-7@lg u-col-12@md u-padding-col@md">
          <div class="c-fixture">
            <div class="js-fixture">
              <Fixture :fixtureData="fixtureData" :clubData="clubData" :roundData="roundData" :roundNumber="roundNumber" :roundName="roundName" />
            </div>
          </div>
        </article>
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
    axios.get('./data/clubs.json')
      .then(response => {
        this.clubData = response.data;
      })
    axios.get('./data/fixture.json')
      .then(response => {
        this.roundData = response.data;
      })
      // Ladder Data
    // axios.get('./data/dummy_data.json')
    axios.get('https://statsapi.foxsports.com.au/3.0/api/sports/afl/series/1/seasons/126/ladder.json?userkey=6B2F4717-A97C-49F6-8514-3600633439B9')
      .then(response => {
        this.ladderData = response.data.teams;
        this.roundName = response.data.round.name;
        this.roundNumber = response.data.round.number +1;
      })
      .catch(function (error) {
        console.log(error)
      })
      // Fixture Data
    // axios.get('./data/data-fixture.json')
    axios.get('https://statsapi.foxsports.com.au/3.0/api/sports/afl/series/1/seasons/126/fixturesandresults.json?userkey=6B2F4717-A97C-49F6-8514-3600633439B9')
      .then(response => {
        this.fixtureData = response.data;
      })
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
    padding: 25px 0 12.5px;
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


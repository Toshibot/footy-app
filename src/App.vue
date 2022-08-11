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
              <Ladder :ladderData="ladderData" />
          </div>
        </article>
        <article class="u-col-7@lg u-col-12@md u-padding-col">
          <div class="c-fixture">
            <h2 class="c-fixture__round">Fixture - Round <span class="js-fixture-round"></span></h2>
            <div class="js-fixture">
              <Fixture :fixtureData="fixtureData" :clubData="clubData" :roundNumber="roundNumber" :roundName="roundName" />
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
      roundName: '',
      roundNumber: 0,
      fixtureData: [],
      clubData: []
    }
  },
  mounted() {
    axios.get('./data/clubs.json')
      .then(response => {
        console.log(response)
        this.clubData = response.data;
      })
    axios.get('./data/dummy_data.json')
      .then(response => {
        this.ladderData = response.data.teams;
        this.roundName = response.data.round.name;
        this.roundNumber = response.data.round.number;
      })
      .catch(function (error) {
        console.log(error)
      })
// https://statsapi.foxsports.com.au/3.0/api/scoreboard/profiles/foxsports_afl.json;masthead=foxsports?userkey=A00239D3-45F6-4A0A-810C-54A347F144C2
    axios.get('./data/data-fixture.json')
      .then(response => {
        this.fixtureData = response.data[0].series_scoreboards[0].scoreboards;
      })
  }
}
</script>


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
              <Ladder />
          </div>
        </article>
        <article class="u-col-7@lg u-col-12@md u-padding-col">
          <div class="c-fixture">
            <h2 class="c-fixture__round">Fixture - Round <span class="js-fixture-round"></span></h2>
            <div class="js-fixture">
              <Fixture />
            </div>
          </div>
        </article>
      </section>
    </main>
  </body>
</template>

<style scoped lang="scss">

</style>

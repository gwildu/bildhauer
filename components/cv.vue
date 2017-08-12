<template>
  <div class="bi-cv">
    <h2 class="bi-text__title bi-text__title--2">Lebenslauf</h2>
    <ul>
      <li>
        <bi-card
          no-padding="true"
          v-for="station in bi_cv_stations"
        >
          <bi-station :station="station"/>
        </bi-card>
      </li>
    </ul>
  </div>
</template>

<script>
  import { mapGetters } from 'vuex'
  import card from './card.vue'
  import station from './station.vue'

  export default {
    components: {
      'bi-card': card,
      'bi-station': station
    },
    computed: {
      ...mapGetters([
        'bi_cv_stations'
      ])
    }
  }
</script>

<style lang="scss">
  @import '../layouts/styles/variables';
</style>

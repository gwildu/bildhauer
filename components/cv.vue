<template>
  <div class="bi-cv">
    <h2 class="bi-text__title bi-text__title--3">Lebenslauf</h2>
    <ul>
      <li>
        <gwi-card
          v-if="bi_cv_stations"
          no-padding="true"
          :level="3"
          v-for="station in bi_cv_stations"
        >
          <bi-station :station="station"/>
        </gwi-card>
      </li>
    </ul>
  </div>
</template>

<script>
  import gwiCard from './card.vue'
  import biStation from './station.vue'
  import { mapGetters } from 'vuex'

  export default {
    props: ['stations'],
    components: {
      'gwi-card': gwiCard,
      'bi-station': biStation
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

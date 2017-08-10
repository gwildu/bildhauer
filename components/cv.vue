<template>
  <ul>
    <bi-card
      class="bi-station"
      v-for="station in bi_cv_stations"
    >
      <h4>{{station.title}}</h4>
      <div>{{station.from.year}} - {{station.to.year}}</div>
      <a v-if="station.company.link" :href="station.company.link" :title="station.company.title">{{station.company.title}}</a>
      <div v-else>{{station.company}}</div>
      <div>{{station.location}}</div>
      <div v-if="station.text">{{station.text}}</div>
    </bi-card>
  </ul>
</template>

<script>
  import { mapGetters } from 'vuex'
  import card from './card.vue'

  export default {
    components: {
      'bi-card': card
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

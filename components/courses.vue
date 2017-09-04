<template>
  <div>
    <gwi-collapsible
      :initialIsVisible="true"
      id="courses"
    >
    <h2
      slot="header"
      class="bi-text__title bi-text__title--2"
    >Kurse</h2>
    <span slot="toggleOn">Details einblenden...</span>
    <span slot="toggleOff">Details ausblenden...</span>
    <ul slot="content">
      <li v-for="course in bi_courses">
        <gwi-card level="3">
          <h3 class="bi-text__title bi-text__title--3">{{course.title}}</h3>
          <p>{{course.description}}</p>
          <bi-course-dates
            v-if="course.dates"
            :dates="course.dates"
            :additionalDescription="course.datesAdditionalDescription"
          ></bi-course-dates>
          <bi-course-costs
            v-if="course.costs"
            :costs="course.costs"
          ></bi-course-costs>
        </gwi-card>
      </li>
    </ul>
    <p>Kontaktieren Sie uns <a href="">hier</a> für weitere Informationen oder um Fragen zu klären</p>
    </gwi-collapsible>
  </div>
</template>

<script>
  import courseDates from './course-dates.vue'
  import courseCosts from './course-costs.vue'
  import gwiCollapsible from './collapsible.vue'
  import gwiCard from './card.vue'
  import { mapGetters } from 'vuex'

  export default {
    components: {
      'bi-course-dates': courseDates,
      'bi-course-costs': courseCosts,
      'gwi-collapsible': gwiCollapsible,
      'gwi-card': gwiCard
    },
    computed: {
      ...mapGetters([
        'bi_courses'
      ])
    }
  }
</script>

<style></style>

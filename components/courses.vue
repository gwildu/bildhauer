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
      <li v-for="course, index in bi_courses">
        <h3 class="bi-text__title bi-text__title--3">{{course.title}}</h3>
        <gwi-text-media :img="course.image" element-opacity=".6">
          <div class="bi-course gwi-text-media__element">
            <gwi-markdown :input="course.description" />
            <bi-course-dates
              v-if="course.dates"
              :dates="course.dates"
              :additionalDescription="course.datesAdditionalDescription"
            ></bi-course-dates>
            <bi-course-costs
              v-if="course.costs && course.costs.length"
              :costs="course.costs"
            ></bi-course-costs>
            <gwi-markdown :input="course.where" />
            <gwi-markdown :input="course.contact" />
          </div>

        </gwi-text-media>
      </li>
    </ul>
    </gwi-collapsible>
  </div>
</template>

<script>
  import courseDates from './course-dates.vue'
  import courseCosts from './course-costs.vue'
  import gwiCollapsible from './collapsible.vue'
  import gwiCard from './card.vue'
  import gwiTextMedia from './text-media.vue'
  import gwiMarkdown from './markdown.vue'
  import { mapGetters } from 'vuex'

  export default {
    components: {
      'bi-course-dates': courseDates,
      'bi-course-costs': courseCosts,
      'gwi-collapsible': gwiCollapsible,
      'gwi-card': gwiCard,
      'gwi-text-media': gwiTextMedia,
      'gwi-markdown': gwiMarkdown
    },
    computed: {
      ...mapGetters([
        'bi_courses'
      ])
    }
  }
</script>

<style lang="scss">
  .bi-course {
    &:last-child {
      margin-bottom: 0;
    }
    &--atelier {
      background-image: url('/media/atelier.jpg') !important;
      background-size: cover;
    }
  }
</style>

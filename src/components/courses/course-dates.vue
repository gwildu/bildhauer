<template>
  <div class="bi-course-dates">
    <h4 class="bi-text__title bi-text__title--4">Kursdaten</h4>
    <p>Der Kurs findet an folgenden Daten jeweils von 18:00 - 21:00 Uhr statt:</p>
    <ul
      class="bi-course-dates__list"
      v-if="dates && dates.length > 0"
    >
      <li
        class="bi-course-dates__date"
        v-for="date in dates"
        :key="date.key"
      >{{ formatDate(date) }}</li>
    </ul>
    <gwi-markdown :input="additionalDescription" />
  </div>
</template>

<script>
import GwiMarkdown from '../common/markdown.vue'
export default {
  components: {
    'gwi-markdown': GwiMarkdown
  },
  props: ['dates', 'additionalDescription'],
  methods: {
    formatDate (date) {
      const dateInstance = new Date(date.utcDate)
      const months = ['Januar', 'Februar', 'März', 'April', 'Mai', 'Juni', 'Juli', 'August', 'September', 'Oktober', 'November', 'Dezember']
      const day = dateInstance.getDate()
      const month = months[dateInstance.getMonth()]
      const year = dateInstance.getFullYear()
      return `${day}. ${month} ${year}`
    }
  }
}
</script>

<style lang="scss">

  .bi-course-dates {
    margin-bottom: 1em;

    &__list {
      margin-bottom: 1em;
    }

    &__date {
      line-height: 1.4;
    }
  }

</style>

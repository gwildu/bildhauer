<template>
  <div>
    <h4 class="bi-text__title bi-text__title--4">Kursdaten</h4>
    <ul
      class="bi-course-dates"
      v-if="dates.length > 0"
    >
      <li
        class="bi-course-dates__date"
        v-for="item in dates"
      >{{formatDate(item.date)}}</li>
    </ul>
    <p>{{additionalDescription}}</p>
  </div>
</template>

<script>
  export default {
    props: ['dates', 'additionalDescription'],
    methods: {
      formatDate (date) {
        if (!(date instanceof Date)) {
          date = new Date(date)
        }
        const months = ['Januar', 'Februar', 'März', 'April', 'Mai', 'Juni', 'Juli', 'August', 'September', 'Oktober', 'November', 'Dezember']
        const day = date.getDate()
        const month = months[date.getMonth()]
        const year = date.getFullYear()
        return `${day}. ${month} ${year}`
      }
    }
  }
</script>

<style lang="scss">

  .bi-course-dates {
    /*list-style-type: disc;*/
    /*padding-left: 20px;*/
    margin-bottom: 1em;

    &__date {
      line-height: 1.4;
    }
  }

</style>

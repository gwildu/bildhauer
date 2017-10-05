<template>
  <section id="content" class="bi-content">
    <h1 class="bi-text__title bi-text__title--1 bi-text--centered">Kurse<br/>Bildhauerei Rickenbacher</h1>
    <bi-courses></bi-courses>
    <bi-details></bi-details>
    <bi-course-instructor></bi-course-instructor>
  </section>
</template>

<script>
  import biCourseInstructor from '../components/course-instructor.vue'
  import biDetails from '../components/details.vue'
  import biCourses from '../components/courses.vue'

  export default {
    components: {
      'bi-course-instructor': biCourseInstructor,
      'bi-details': biDetails,
      'bi-courses': biCourses
    },
    head () {
      return {
        title: 'Kurse',
        meta: [
          { vmid: 'robots', name: 'robots', content: 'index, follow' },
          { vmid: 'viewport', name: 'viewport', content: 'width=device-width, maximum-scale=1.0, initial-scale=1.0, user-scalable=no' }
        ]
      }
    }
  }
</script>

<style>
</style>

<template>
  <section
    id="content"
    class="bi-content"
  >
    <h1 class="bi-text__title bi-text__title--1 bi-text--centered">Kurse<br>Bildhauerei Rickenbacher</h1>
    <bi-courses />
    <bi-details />
    <bi-course-instructor />
  </section>
</template>

<script>
import biCourseInstructor from '../components/courses/course-instructor.vue'
import biDetails from '../components/courses/details.vue'
import biCourses from '../components/courses/courses.vue'
import { mapActions } from 'vuex'

export default {
  name: 'Courses',
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
        { vmid: 'viewport', name: 'viewport', content: 'width=device-width, maximum-scale=1.0, initial-scale=1.0, user-scalable=no' },
        { vmid: 'google-site-verification', name: 'google-site-verification', content: 'ph2wPHUsnc0iTh8YSan2KiJermamTOrEVOGPPbthrYI' },
        { vmid: 'google-site-verification', name: 'google-site-verification', content: 'tTSnmLTcdG9pEpV8F-nw49dV3cn3uTZTAn5jYm6vqcQ' }
      ],
      link: [
        { vmid: 'hreflang-de', rel: 'alternate', hreflang: 'de', href: '/' },
        { vmid: 'canonical', rel: 'canonical', href: 'https://kurse.bildhauerei-rickenbacher.ch' }
      ]
    }
  },
  methods: {
    ...mapActions(['bindCourses'])
  },
  created () {
    this.bindCourses()
  }
}
</script>

<style scoped>

</style>

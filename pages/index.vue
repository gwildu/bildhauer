<template>
  <section id="content" class="bi-content">
    <div>
      <h1 class="bi-text__title bi-text__title--1 bi-text--centered">Kurse<br/>Bildhauerei Rickenbacher</h1>
      <h2 class="bi-text__title bi-text__title--2 bi-text--centered">comming soon...</h2>
      <p class="bi-text__paragraph bi-text--centered">
        Wir bieten Kurse für Bildhauerei und Steinmetzarbeiten an.
        <br/>Für Anfragen kontaktieren Sie uns bitte
        <a class="bi-text__link" href="http://www.bildhauer.sg/index.php/ueber-uns-28.html" title="Kontakt">hier</a>.
      </p>

      <h2>Lebenslauf</h2>
      <bi-cv></bi-cv>
    </div>
  </section>
</template>

<script>
  import cv from '../components/cv.vue'
  export default {
    components: {
      'bi-cv': cv
    },
    head () {
      return {
        title: 'Kurse',
        meta: [
          { vmid: 'robots', name: 'robots', content: 'noindex, nofollow' }
        ]
      }
    }
  }
</script>

<style>
</style>

<template>
  <div>
    <gwi-collapsible id="instructor">
      <h2
        slot="header"
        class="bi-text__title bi-text__title--2"
      >Kursleitung</h2>
      <span slot="toggleOn">Details einblenden...</span>
      <span slot="toggleOff">Details ausblenden...</span>
      <div slot="content">
        <p>Die Kurse werden von Andreas Rickenbacher durchgeführt</p>
        <bi-cv></bi-cv>
      </div>
    </gwi-collapsible>
  </div>
</template>

<script>
  import biCv from './cv.vue'
  import gwiCollapsible from './collapsible.vue'

  export default {
    components: {
      'bi-cv': biCv,
      'gwi-collapsible': gwiCollapsible
    }
  }
</script>

<style></style>

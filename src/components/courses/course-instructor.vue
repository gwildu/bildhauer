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
        <gwi-card
          no-padding="true"
          level="1"
          class="bi-instructor__intro">
          <p class="bi-intro__text">Die Kurse werden von Andreas Rickenbacher durchgeführt</p>
          <img
            class="bi-instructor__image"
            src="/img/instructor.jpg" >
        </gwi-card>
        <bi-cv/>
      </div>
    </gwi-collapsible>
  </div>
</template>

<script>
import biCv from './cv.vue'
import gwiCollapsible from '../common/collapsible.vue'
import gwiCard from '../common/card.vue'

export default {
  components: {
    'bi-cv': biCv,
    'gwi-collapsible': gwiCollapsible,
    'gwi-card': gwiCard
  }
}
</script>

<style lang="scss">
  .bi-instructor {

    &__intro {
      display: flex;
      align-items: center;
    }

    &__image {
      width: 35%;
      max-width: 500px;
      @media screen and (max-width: 600px) {
        width: 55%;
      }
    }
  }
  .bi-intro {
    &__text {
      padding: 40px;
      font-size: 24px;
      @media screen and (max-width: 600px) {
        padding: 5px;
        font-size: 18px;
      }
    }
  }
</style>

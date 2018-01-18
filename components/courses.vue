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
      <li>
        <h3 class="bi-text__title bi-text__title--3">Offenes Atelier</h3>
        <gwi-text-media :img="atelierImage" element-opacity=".6">
          <div class="bi-course gwi-text-media__element">
            <p>Erlebnis am Stein-3D Gestaltung mit Stein und Ton. Ideal um sich in das Thema einzuarbeiten und unverbindlich reinzuschnuppern. Je nach Vorkentnissen und Interessen erstellen wir individuell ein Programm ganz für Sie persönlich.  Der erste Abend ist gratis. Keine Anmeldung nötig.</p>
            <bi-course-dates :dates="openStudioDates" />
            <p>Juni bis August machen wir Pause. Im September werden wir wieder beginnen.</p>
            <bi-course-costs :costs="openStudioCosts" />
            <p>Der Kurs findet bei uns im Atelier statt. Die Adresse und einen Lageplan finden Sie <a href="http://www.bildhauer.sg/index.php/ueber-uns-28.html">hier</a>.</p>
            <p>Haben Sie offene Fragen? Nehmen Sie mit uns <a href="http://bildhauer.sg/index.php/ueber-uns-28#kontakt-formular">Kontakt</a> auf</p>
          </div>
        </gwi-text-media>
      </li>
      <li>
        <h3 class="bi-text__title bi-text__title--3">Workshop</h3>
        <gwi-text-media :img="workshopImage" element-opacity=".6">
          <div class="bi-course gwi-text-media__element">
            <p>Für Fortgeschrittene gibt es die Möglichkeit individuelle Kurszeiten und individuelle  Betreuung zu vereinbaren.</p>
            <p>Der Kurs findet bei uns im Atelier statt. Die Adresse und einen Lageplan finden Sie <a href="http://www.bildhauer.sg/index.php/ueber-uns-28.html">hier</a>.</p>
            <p>Haben Sie offene Fragen? Nehmen Sie mit uns <a href="http://bildhauer.sg/index.php/ueber-uns-28#kontakt-formular">Kontakt</a> auf</p>
          </div>
        </gwi-text-media>
      </li>
    </ul>
    </gwi-collapsible>
  </div>
</template>

<script>
  import { mapGetters } from 'vuex'
  import atelierImage from '~/assets/images/atelier.jpg'
  import workshopImage from '~/assets/images/workshop.jpg'
  import courseDates from './course-dates.vue'
  import courseCosts from './course-costs.vue'
  import gwiCollapsible from './collapsible.vue'
  import gwiCard from './card.vue'
  import gwiTextMedia from './text-media.vue'
  import gwiMarkdown from './markdown.vue'

  export default {
    data () {
      return {
        atelierImage,
        workshopImage
      }
    },
    components: {
      'bi-course-dates': courseDates,
      'bi-course-costs': courseCosts,
      'gwi-collapsible': gwiCollapsible,
      'gwi-card': gwiCard,
      'gwi-text-media': gwiTextMedia,
      'gwi-markdown': gwiMarkdown
    },
    computed: {
      ...mapGetters(
        {
          openStudioDates: 'bi_openStudioDates',
          openStudioCosts: 'bi_openStudioCosts'
        }
      )
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

<template>
  <div>
    <gwi-collapsible
      :initial-is-visible="true"
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
          <gwi-text-media
            :img="atelierImage"
            element-opacity=".6">
            <div class="bi-course gwi-text-media__element">
              <p>Erlebnis am Stein-3D Gestaltung mit Stein und Ton. Ideal um sich in das Thema einzuarbeiten und unverbindlich reinzuschnuppern. Je nach Vorkentnissen und Interessen erstellen wir individuell ein Programm ganz für Sie persönlich.  Der erste Abend ist gratis. Die Besucherzahl ist auf 5 Personen beschränkt. <a href="https://www.bildhauer-stein.ch/index.php/ueber-uns-28.html#f2">Anmeldung</a> ist obligatorisch</a></p>
              <bi-course-dates :dates="openStudioDates" />
              <bi-course-costs :costs="openStudioCosts" />
              <p>Der Kurs findet bei uns im Atelier statt. Die Adresse und einen Lageplan finden Sie <a href="http://www.bildhauer.sg/index.php/ueber-uns-28.html">hier</a>.</p>
              <p>Haben Sie offene Fragen? Nehmen Sie mit uns <a href="http://bildhauer.sg/index.php/ueber-uns-28#kontakt-formular">Kontakt</a> auf</p>
            </div>
          </gwi-text-media>
        </li>
        <li>
          <h3 class="bi-text__title bi-text__title--3">Workshop</h3>
          <gwi-text-media
            :img="workshopImage"
            element-opacity=".6">
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
import atelierImage from '../../../public/img/atelier.jpg'
import workshopImage from '../../../public/img/workshop.jpg'
import courseDates from './course-dates.vue'
import courseCosts from './course-costs.vue'
import gwiCollapsible from '../common/collapsible.vue'
import gwiCard from '../common/card.vue'
import gwiTextMedia from '../common/text-media.vue'
import gwiMarkdown from '../common/markdown.vue'

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
      background-image: url('<%= BASE_URL %>/img/atelier.jpg') !important;
      background-size: cover;
    }
  }

</style>

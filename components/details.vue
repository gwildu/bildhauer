<template>
  <div class="bi-details">
    <gwi-collapsible id="details">
      <h2
        slot="header"
        class="bi-text__title bi-text__title--2"
      >Details</h2>
      <span slot="toggleOn">Details einblenden...</span>
      <span slot="toggleOff">Details ausblenden...</span>
      <div slot="content">
        <gwi-text-media img="/media/details.jpg" element-opacity=".6">
          <p>Viele Menschen blicken mit Bewunderung auf Steinskulpturen, welche Bildhauer
            erschaffen haben und fragen sich, wie solche Werke entstehen.
            Steinbildhauen ist eine urzeitlich anmutende Tätigkeit und wir können mit Geduld
            und Vorstellungskraft eine neue Form entwickeln. Die Kurse sind für Neueinsteiger
            aber auch für Fortgeschrittene, die ihre eigenen gestalterischen Ideen mit unserer
            individuellen Begleitung verwirklichen wollen.
          </p>
          <p>
            Die erste Begegnung mit dem Stein, ist eine grossartige Erfahrung. In unserem
            Atelier erfahren Sie mehr über die Techniken der Steinbearbeitung und über
            das Wesen der Skulptur: Anfänger werden Schritt für Schritt so angeleitet, dass
            sie bereits nach relativ kurzer Zeit mit dem Werkzeug am Stein erste Erfolge
            erzielen können. Wir lassen Ihnen viel Raum für Ihre Gestaltungsvorstellungen
            und vermitteln schrittweise den Umgang mit dem Material, den Werkzeugen und
            verschiedenen Techniken. Dabei kann jeder Teilnehmer nach einem selbst gewählten
            Thema arbeiten. Teilnehmer mit Vorkenntnissen beraten wir der Situation angepasst.
          </p>

        </gwi-text-media>
        <h3 class="bi-text__title bi-text__title--3">Materialien</h3>
        <gwi-text-media img="/media/materials.jpg">
          <p>Es stehen verschiedene Materialien in unterschiedlichen Formaten zur Verfügung.
            Es kann auch auf individuelle Wünsche eingegangen werden. Gerne beraten wir sie
            und organisieren Ihnen wenn nötig ein geeignetes Material. Einfachere Materialien
            sind bereits ab ca. 100.-- Fr. möglich.
          </p>
        </gwi-text-media>
        <h3 class="bi-text__title bi-text__title--3 bi-tools__title">Werkzeuge</h3>
        <gwi-text-media
          class="bi-tools"
          img="/media/tools.jpg"
          hasPortrait="true"
        >
          <div class="bi-tools__text">
            <ul>
              <li>Geeignetes Werkzeug steht zur Verfügung</li>
              <li>Wir arbeiten vorwiegend mit handwerklichen Werkzeugen</li>
              <li>Punktuell können bei Bedarf auch elektrisch betriebene Maschinen eingesetzt werden</li>
              <li>Manche Kursteilnehmer bevorzugen eigenes Werkzeug. Gerne sind wir behilflich bei der Beschaffung von geeigneten Meisseln, Fäusteln und anderen Utensilien</li>
            </ul>
          </div>
        </gwi-text-media>
        <h3 class="bi-text__title bi-text__title--3">Diverses</h3>
        <p>
          Parkplätze stehen zur Verfügung. Das Atelier ist mit dem ÖV von Wil und Uzwil
          gut erreichbar (Haltestelle Post 200 m bis zum Atelier).
        </p>
        <p>
          Die Versicherung ist Sache des Teilnehmers. Bei minderjährigen Besuchern ist
          eine schriftliche Anmeldung der Eltern erforderlich.
        </p>
        <p>
          Gute Arbeitsschuhe und Arbeitskleider sind empfohlen. Schutzbrillen und
          Staubmasken sowie Gehörschütze stehen zur Verfügung.
        </p>
      </div>
    </gwi-collapsible>
  </div>
</template>

<script>
  import gwiCollapsible from './collapsible.vue'
  import gwiTextMedia from './text-media.vue'
  export default {
    components: {
      'gwi-collapsible': gwiCollapsible,
      'gwi-text-media': gwiTextMedia
    }
  }
</script>

<style lang="scss"></style>

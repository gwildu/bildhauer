'use strict'
import marked from 'marked'
import atelierImage from '~/assets/images/atelier.jpg'
import workshopImage from '~/assets/images/workshop.jpg'

export default {
  state: {
    courses: [
      {
        title: 'Offenes Atelier',
        description: marked('Erlebnis am Stein-3D Gestaltung mit Stein und Ton. Ideal um sich in das Thema einzuarbeiten und unverbindlich reinzuschnuppern. Je nach Vorkentnissen und Interessen erstellen wir individuell ein Programm ganz für Sie persönlich.  Der erste Abend ist gratis. Keine Anmeldung nötig.'),
        dates: [
          {date: new Date(2017, 8, 4)},
          {date: new Date(2017, 9, 2)},
          {date: new Date(2017, 10, 13)},
          {date: new Date(2017, 11, 4)},
          {date: new Date(2018, 0, 8)},
          {date: new Date(2018, 1, 5)},
          {date: new Date(2018, 2, 5)},
          {date: new Date(2018, 3, 9)},
          {date: new Date(2018, 4, 7)}
        ],
        datesAdditionalDescription: marked('Juni bis August machen wir Pause. Im September werden wir wieder beginnen.'),
        costs: [
          {
            description: 'Erster Abend',
            amount: 'Gratis'
          },
          {
            description: 'Kursgebühr pro weiteren Abend',
            amount: 45
          },
          {
            description: 'Gebühr für Handwerkzeug pro Abend',
            amount: 5
          },
          {
            description: 'Staubmasken',
            amount: 'Nach Bedarf'
          }
        ],
        where: marked('Der Kurs findet bei uns im Atelier statt. Die Adresse und einen Lageplan finden Sie [hier](http://www.bildhauer.sg/index.php/ueber-uns-28.html).'),
        contact: marked('Haben Sie offene Fragen? Nehmen Sie mit uns [Kontakt](http://bildhauer.sg/index.php/ueber-uns-28) auf'),
        image: atelierImage
      },
      {
        title: 'Workshop',
        description: marked('Für Fortgeschrittene gibt es die Möglichkeit individuelle Kurszeiten und individuelle  Betreuung zu vereinbaren.'),
        where: marked('Der Kurs findet bei uns im Atelier statt. Die Adresse und einen Lageplan finden Sie [hier](http://www.bildhauer.sg/index.php/ueber-uns-28.html).'),
        contact: marked('Haben Sie offene Fragen? Nehmen Sie mit uns [Kontakt](http://bildhauer.sg/index.php/ueber-uns-28#kontakt-formular) auf'),
        image: workshopImage
      }
    ]
  },
  getters: {
    bi_courses (state) {
      return state.courses
    }
  }
}

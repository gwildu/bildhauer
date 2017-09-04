'use strict'

export default {
  state: {
    courses: [
      {
        title: 'Offenes Atelier',
        description: 'Erlebnis am Stein-3D Gestaltung mit Stein und Ton. Ideal um sich in das Thema einzuarbeiten und unverbindlich reinzuschnuppern. Je nach Vorkentnissen und Interessen erstellen wir individuell ein Programm ganz für Sie persönlich.  Der erste Abend ist gratis. Keine Anmeldung nötig.',
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
        datesAdditionalDescription: 'Juni bis August machen wir Pause. Im September werden wir wieder beginnen.',
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
        ]
      },
      {
        title: 'Workshop',
        description: 'Für Fortgeschrittene gibt es die Möglichkeit individuelle Kurszeiten und individuelle  Betreuung zu vereinbaren.'
      }
    ]
  },
  getters: {
    bi_courses (state) {
      return state.courses
    }
  }
}

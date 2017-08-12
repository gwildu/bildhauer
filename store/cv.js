export default {
  state: {
    stations: [
      {
        from: {
          year: 1993
        },
        to: {
          year: 1997
        },
        title: 'Lehre als Steinbildhauer',
        company: {
          title: 'bauersteine',
          link: 'http://www.bauersteine.ch'
        },
        location: 'St. Galllen',
        text: 'Begleitend zur Lehre Besuch von Kursen in gegenständliches Zeichnen, figürliches Zeichnen, Gestalten mit Holz, Schmieden und Portrait modellieren,  gewerbliche Berufsschule Abteilung für Freifächer und Weiterbildung'
      },
      {
        from: {
          year: 1997
        },
        to: {
          year: 2000
        },
        title: 'Angestellter Steinbildhauer',
        company: {
          title: 'Atelier R. Stadelmann AG'
        },
        location: 'Hochdorf  LU'
      }
    ]
  },
  getters: {
    bi_cv_stations (state) {
      return state.stations
    }
  }
}

export default {
  state: {
    stations: [
      {
        from: {
          year: 2015
        },
        to: {
          year: 'jetzt'
        },
        title: 'Mitarbeit in verschiedenen Kommissionen zur Berufsreform'
      },
      {
        from: {
          year: 2014
        },
        to: {
          year: 'jetzt'
        },
        title: 'Chefexperte für Steinbildhauer und Steinmetze',
        text: 'Mitglied Kantonale Kommision Steinberufe, Mitglied Eidgenössische Kommission für Berufsentwicklung & Qualität Berufsfeld Steinbearbeitung, Projektleiter Arbeitsgruppen Steinbearbeitung in Zusammenarbeit mit dem Schweizerischen Dienstleistungszentrum Berufsbildung | Berufs-, Studien- und Laufbahnberatung'
      },
      {
        from: {
          year: 2011
        },
        to: {
          year: 2013
        },
        title: 'Prüfungsexpert für Steinbildhauer und Steinmetz'
      },
      {
        from: {
          year: 2009
        },
        to: {
          year: 'jetzt'
        },
        title: 'Jetzige Werkstatt',
        location: 'Schwarzenbach SG'
      },
      {
        from: {
          year: 2006
        },
        to: {
          year: 2009
        },
        title: 'Erste eigene Werkstatt',
        location: 'Niederuzwil SG'
      },
      {
        from: {
          year: 'ab'
        },
        to: {
          year: 2005
        },
        title: 'Erste selbständige Aufträge'
      },
      {
        from: {
          year: 2005
        },
        to: {
          year: 2006
        },
        title: 'Weiterbildung Restaurator im Steinmetz- und Steinbildhauerhandwerk',
        company: {
          title: 'Europäisches Fortbildungszentrum',
          link: 'http://www.efbz.de/'
        },
        location: 'Wunsiedel DE'
      },
      {
        from: {
          year: 2000
        },
        to: {
          year: 2008
        },
        title: 'Angesteller Steinbildhauer und Steinmetz',
        company: {
          title: 'Felix Hotz Bildhauer',
          link: 'http://www.hotzbildhauer.ch/'
        },
        location: 'Weinfelden TG'
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
      },
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
      }
    ]
  },
  getters: {
    bi_cv_stations (state) {
      return state.stations
    }
  }
}

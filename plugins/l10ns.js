const Vue = require('vue')
const localizationFactory = require('../dist/l10ns/all.js')

const url2localizationMap = {
  'de-ch': 'de-CH',
  'fr-ch': 'fr-CH'
}

let l10n = {
  install: function (Vue, options) {
    let factory = options.factory || function () {
      return function (key) { return key }
    }

    Vue.prototype.$translate = function (key, data) {
      let locale = url2localizationMap[this.$route.params.locale]
      if (!locale) {
        return key
      }

      let l = factory(locale)
      return l(key, data)
    }
  }
}

Vue.use(l10n, { factory: localizationFactory })

module.exports = {}

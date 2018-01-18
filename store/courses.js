'use strict'
import {bindContentFlamelink} from '../flamelink'
import {convertFirebaseListIntoArray, bindContentFirebase} from '../firebase'

export default {
  state: {
    openStudioDates: [],
    openStudioCosts: []
  },
  getters: {
    bi_openStudioDates: state => state.openStudioDates,
    bi_openStudioCosts: state => state.openStudioCosts
  },
  actions: {
    bindCourses ({commit, rootState}) {
      const bindContent = rootState.useFlamelink ? bindContentFlamelink : bindContentFirebase
      bindContent('openStudioDates', courseDates => {
        console.log('asdfasd')
        commit('SET_OPEN_STUDIO_DATES', convertFirebaseListIntoArray(courseDates, ['utcDate']))
      })
      bindContent('openStudioCosts', courseCosts => {
        console.log('asdfasd')
        commit('SET_OPEN_STUDIO_COSTS', convertFirebaseListIntoArray(courseCosts, ['description', 'amount']))
      })
    }
  },
  mutations: {
    SET_OPEN_STUDIO_DATES (state, newDates) {
      state.openStudioDates = newDates
    },
    SET_OPEN_STUDIO_COSTS (state, newCosts) {
      state.openStudioCosts = newCosts
    }
  }
}

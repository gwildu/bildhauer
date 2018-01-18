'use strict'
import Vuex from 'vuex'
import cv from './cv'
import courses from './courses'

const store = () => new Vuex.Store({
  modules: {
    cv,
    courses
  },
  state: {
    useFlamelink: true
  },
  getters: {},
  actions: {
    // fetchFeatureFlags ({commit}) {
    //
    // }
  },
  mutations: {}
})

export default store

'use strict'
import Vue from 'vue'
import Vuex from 'vuex'
import cv from './cv'
import courses from './courses'

Vue.use(Vuex)

export default new Vuex.Store({
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

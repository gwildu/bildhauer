import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home'
import AboutUs from './views/AboutUs'
import Downloads from './views/Downloads'
import Impressum from './views/Impressum'
import Contact from './views/Contact'
import Legal from './views/Legal'
import Links from './views/Links'
import Sitemap from './views/Sitemap'
import Courses from './views/Courses'

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/', name: 'home', component: Home
    },
    {
      path: '/restaurationen',
      component: () => import(/* webpackChunkName: "restorations" */ './views/Restorations/index'),
      children: [
        {
          path: '',
          name: 'restorations',
          component: () => import(/* webpackChunkName: "restorations" */ './views/Restorations/Restorations')
        },
        {
          path: 'referenzarbeiten',
          name: 'references',
          component: () => import(/* webpackChunkName: "restorations" */ './views/Restorations/References.vue')
        },
        {
          path: 'aktuelle-arbeiten',
          name: 'currentWork',
          component: () => import(/* webpackChunkName: "restorations" */ './views/Restorations/CurrentWork')
        },
        {
          path: 'leistungsspektrum',
          name: 'rangeOfServices',
          component: () => import(/* webpackChunkName: "restorations" */ './views/Restorations/RangeOfServices')
        },
        {
          path: 'unsere-grundsaetze',
          name: 'ourPrinciples',
          component: () => import(/* webpackChunkName: "restorations" */ './views/Restorations/OurPrinciples')
        }
      ]
    },
    {
      path: '/grabmale',
      component: () => import(/* webpackChunkName: "gravemarkers" */ './views/GraveMarkers'),
      children: [
        {
          path: '',
          name: 'graveMarkers',
          component: () => import(/* webpackChunkName: "gravemarkers" */ './views/GraveMarkers/GraveMarkers')
        },
        {
          path: 'entwuerfe-und-skizzen',
          name: 'sketches',
          component: () => import(/* webpackChunkName: "gravemarkers" */ './views/GraveMarkers/Sketches')
        },
        {
          path: 'aktuelle-lagersteine',
          name: 'CurrentStockStones',
          component: () => import(/* webpackChunkName: "gravemarkers" */ './views/GraveMarkers/CurrentStockStones')
        },
        {
          path: 'ausgefuehrte-arbeiten',
          name: 'References',
          component: () => import(/* webpackChunkName: "gravemarkers" */ './views/GraveMarkers/References')
        },
        {
          path: 'unsere-grundsaetze',
          name: 'OurPrinciples',
          component: () => import(/* webpackChunkName: "gravemarkers" */ './views/GraveMarkers/OurPrinciples')
        }
      ]
    },
    {
      path: '/deko-innen-gartengestaltung',
      component: () => import(/* webpackChunkName: "decorationInteriorGarden" */ './views/DecorationInteriorGarden'),
      children: [
        {
          path: '',
          name: 'DecorationInteriorGarden',
          component: () => import(/* webpackChunkName: "decorationInteriorGarden" */ './views/DecorationInteriorGarden/DecorationInteriorGarden')
        },
        {
          path: 'innengestaltung',
          name: 'InteriorDesign',
          component: () => import(/* webpackChunkName: "decorationInteriorGarden" */ './views/DecorationInteriorGarden/InteriorDesign')
        },
        {
          path: 'deko',
          name: 'decoration',
          component: () => import(/* webpackChunkName: "decorationInteriorGarden" */ './views/DecorationInteriorGarden/Decoration')
        },
        {
          path: 'gartengestaltung',
          name: 'LandscapeGardening',
          component: () => import(/* webpackChunkName: "decorationInteriorGarden" */ './views/DecorationInteriorGarden/LandscapeGardening')
        },
        {
          path: 'bastelmaterial',
          name: 'HandicraftMaterial',
          component: () => import(/* webpackChunkName: "decorationInteriorGarden" */ './views/DecorationInteriorGarden/HandicraftMaterial')
        }
      ]
    },
    {
      path: '/ueber-uns', name: 'AboutUs', component: AboutUs
    },
    {
      path: '/kontakt', name: 'Contact', component: Contact
    },
    {
      path: '/downloads', name: 'Downloads', component: Downloads
    },
    {
      path: '/impressum', name: 'Impressum', component: Impressum
    },
    {
      path: '/rechtliche-hinweise', name: 'Legal', component: Legal
    },
    {
      path: '/links', name: 'Links', component: Links
    },
    {
      path: '/sitemap', name: 'Sitemap', component: Sitemap
    },
    {
      path: '/kurse', name: 'Courses', component: Courses
    }
  ]
})

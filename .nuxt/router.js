import Vue from 'vue'
import Router from 'vue-router'
import { normalizeURL, decode } from 'ufo'
import { interopDefault } from './utils'
import scrollBehavior from './router.scrollBehavior.js'

const _0fc7e884 = () => interopDefault(import('../pages/page-404/index.vue' /* webpackChunkName: "pages/page-404/index" */))
const _5c61b758 = () => interopDefault(import('../pages/page-contact-5/index.vue' /* webpackChunkName: "pages/page-contact-5/index" */))
const _49806640 = () => interopDefault(import('../pages/page-contact-app/index.vue' /* webpackChunkName: "pages/page-contact-app/index" */))
const _6f6cc43a = () => interopDefault(import('../pages/Writeups/index.vue' /* webpackChunkName: "pages/Writeups/index" */))
const _ee504eca = () => interopDefault(import('../pages/index.vue' /* webpackChunkName: "pages/index" */))

const emptyFn = () => {}

Vue.use(Router)

export const routerOptions = {
  mode: 'history',
  base: '/',
  linkActiveClass: 'nuxt-link-active',
  linkExactActiveClass: 'nuxt-link-exact-active',
  scrollBehavior,

  routes: [{
    path: "/page-404",
    component: _0fc7e884,
    name: "page-404"
  }, {
    path: "/page-contact-5",
    component: _5c61b758,
    name: "page-contact-5"
  }, {
    path: "/page-contact-app",
    component: _49806640,
    name: "page-contact-app"
  }, {
    path: "/Writeups",
    component: _6f6cc43a,
    name: "Writeups"
  }, {
    path: "/",
    component: _ee504eca,
    name: "index"
  }],

  fallback: false
}

export function createRouter (ssrContext, config) {
  const base = (config._app && config._app.basePath) || routerOptions.base
  const router = new Router({ ...routerOptions, base  })

  // TODO: remove in Nuxt 3
  const originalPush = router.push
  router.push = function push (location, onComplete = emptyFn, onAbort) {
    return originalPush.call(this, location, onComplete, onAbort)
  }

  const resolve = router.resolve.bind(router)
  router.resolve = (to, current, append) => {
    if (typeof to === 'string') {
      to = normalizeURL(to)
    }
    return resolve(to, current, append)
  }

  return router
}

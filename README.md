# The best way to make layout for vue app
------

## Project setup
```
yarn install
```

### Compiles and hot-reloads for development
```
yarn serve
```

### The best way to make layout for vue app
- App.vue
```
<template>
  <div id="app">
    <component :is="layout">
      <router-view></router-view>
    </component>
  </div>
</template>

<script>
export default {
  name: 'App',
  computed: {
    layout() {
      const layout = this.$route.meta.layout
      return layout + '-layout'
    }
  },
}
</script>
```

- routes : declare an meta data name `layout`, something like this
```
import Vue from 'vue'
import VueRouter from 'vue-router'

import Home from './views/Home'
import About from './views/About'
import NonFooter from './views/NonFooter'

Vue.use(VueRouter)

const routes = [
  {
    name: 'Home',
    path: '/',
    component: Home,
    meta: {
      layout: 'default'
    }
  },
  {
    name: 'About',
    path: '/about',
    component: About,
    meta: {
      layout: 'default'
    }
  },
  {
    name: 'NonFooter',
    path: '/nonfooter',
    component: NonFooter,
    meta: {
      layout: 'nonfooter'
    }
  }
]

const router = new VueRouter({
  mode: 'history',
  routes,
  linkActiveClass: "active",
  linkExactActiveClass: "active"
})

router.beforeEach((to, from, next) => {
    next()
})

export default router
```

- create a layout file, with `<slot />` is the slot of content 
```
<template>
    <div>
        <Header />
        <div class="content" style="min-height:300px">
            <slot />
        </div>
        <Footer />
    </div>
</template>

<script>
    import Header from '../components/Header'
    import Footer from '../components/Footer'

    export default {
        components: {
            Header,
            Footer
        }
    }
</script>
```

- import on app.js or main.js file
```
import Vue from 'vue'
import App from './App.vue'

import VueRouter from 'vue-router'
import Routes from './routes'
import Default from './layouts/Default'
import LayoutNonFooter from './layouts/LayoutNonFooter'

Vue.router = Routes
Vue.use(VueRouter)

Vue.component('default-layout', Default)
Vue.component('nonfooter-layout', LayoutNonFooter)

Vue.config.productionTip = false

new Vue({
  router: Routes,
  render: h => h(App),
}).$mount('#app')
```
import { createRouter, createWebHistory } from 'vue-router'

const routes = [
  {
    path: '/',
    name: 'home',
    component: () => import('@/pages/HomePage.vue'),
    meta: { title: 'Accueil' }
  },
  {
    path: '/boutiques',
    name: 'shops',
    component: () => import('@/pages/ShopsPage.vue'),
    meta: { title: 'Boutiques' }
  },
  {
    path: '/messages',
    name: 'messages',
    component: () => import('@/pages/MessagesPage.vue'),
    meta: { title: 'Messages', requiresAuth: true }
  },
  {
    path: '/commandes',
    name: 'orders',
    component: () => import('@/pages/OrdersPage.vue'),
    meta: { title: 'Commandes', requiresAuth: true }
  },
  {
    path: '/compte',
    name: 'account',
    component: () => import('@/pages/AccountPage.vue'),
    meta: { title: 'Compte' }
  },
  {
    path: '/vendeur',
    name: 'seller',
    component: () => import('@/pages/SellerDashboard.vue'),
    meta: { title: 'Espace vendeur', requiresAuth: true }
  },
  {
    path: '/vitrine/:slug',
    name: 'showcase',
    component: () => import('@/pages/ShowcasePage.vue'),
    meta: { title: 'Boutique' }
  },
  {
    path: '/:pathMatch(.*)*',
    name: 'not-found',
    component: () => import('@/pages/NotFoundPage.vue'),
    meta: { title: 'Page introuvable' }
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes,
  scrollBehavior() {
    return { top: 0 }
  }
})

router.beforeEach((to, _from, next) => {
  document.title = to.meta.title
    ? `${to.meta.title} — Dukani`
    : 'Dukani'
  next()
})

export default router

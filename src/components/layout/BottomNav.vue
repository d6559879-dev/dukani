<template>
  <nav
    class="fixed bottom-0 inset-x-0 z-50 border-t border-gray-200 bg-white/95 backdrop-blur dark:border-gray-800 dark:bg-gray-900/95 pb-safe"
  >
    <div class="mx-auto flex max-w-lg items-center justify-around px-2 py-2">
      <RouterLink
        v-for="item in items"
        :key="item.name"
        :to="item.to"
        class="flex flex-col items-center gap-0.5 px-3 py-1.5 text-xs font-medium transition"
        :class="isActive(item.to)
          ? 'text-primary-600 dark:text-primary-400'
          : 'text-gray-500 dark:text-gray-400 hover:text-gray-800 dark:hover:text-gray-200'"
      >
        <component :is="item.icon" class="h-6 w-6" />
        <span>{{ t(item.label) }}</span>
      </RouterLink>
    </div>
  </nav>
</template>

<script setup>
import { useRoute } from 'vue-router'
import { useI18n } from 'vue-i18n'
import {
  HomeIcon,
  StoreIcon,
  ChatIcon,
  CartIcon,
  UserIcon
} from '@/components/ui/Icons.vue'

const route = useRoute()
const { t } = useI18n()

const items = [
  { name: 'home', to: '/', label: 'nav.home', icon: HomeIcon },
  { name: 'shops', to: '/boutiques', label: 'nav.shops', icon: StoreIcon },
  { name: 'messages', to: '/messages', label: 'nav.messages', icon: ChatIcon },
  { name: 'orders', to: '/commandes', label: 'nav.orders', icon: CartIcon },
  { name: 'account', to: '/compte', label: 'nav.account', icon: UserIcon }
]

function isActive(path) {
  if (path === '/') return route.path === '/'
  return route.path.startsWith(path)
}
</script>

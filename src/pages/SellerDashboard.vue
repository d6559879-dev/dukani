<template>
  <div class="mx-auto max-w-lg">
    <header class="sticky top-0 z-40 border-b border-gray-200 bg-white/90 px-4 py-3 backdrop-blur dark:border-gray-800 dark:bg-gray-900/90">
      <h1 class="text-xl font-bold">{{ t('seller.dashboard') }}</h1>
    </header>

    <div class="grid grid-cols-2 gap-3 px-4 py-6">
      <div
        v-for="item in menus"
        :key="item.label"
        class="card flex flex-col items-center gap-2 py-6 text-center active:scale-[0.98] transition"
      >
        <span class="text-2xl">{{ item.icon }}</span>
        <span class="text-sm font-medium">{{ t(item.label) }}</span>
      </div>
    </div>
  </div>
</template>

<script setup>
import { useI18n } from 'vue-i18n'

const { t } = useI18n()

const menus = [
  { label: 'seller.myShop', icon: '🏪' },
  { label: 'seller.products', icon: '📦' },
  { label: 'seller.orders', icon: '🛒' },
  { label: 'seller.ads', icon: '📢' },
  { label: 'seller.posts', icon: '📝' },
  { label: 'seller.arrivals', icon: '🆕' },
  { label: 'seller.stats', icon: '📊' }
]
</script>

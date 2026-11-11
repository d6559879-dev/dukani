<template>
  <div class="mx-auto max-w-lg">
    <header class="sticky top-0 z-40 border-b border-gray-200 bg-white/90 px-4 py-3 backdrop-blur dark:border-gray-800 dark:bg-gray-900/90">
      <h1 class="text-xl font-bold">{{ t('shops.title') }}</h1>
    </header>

    <div class="px-4 pt-4">
      <input
        v-model="recherche"
        type="search"
        class="input"
        :placeholder="t('home.searchPlaceholder')"
      />
    </div>

    <div class="flex gap-2 overflow-x-auto px-4 py-3">
      <button
        v-for="cat in categories"
        :key="cat.value"
        class="shrink-0 rounded-full px-3 py-1.5 text-sm font-medium transition"
        :class="categorieActive === cat.value
          ? 'bg-primary-600 text-white'
          : 'bg-gray-100 text-gray-700 dark:bg-gray-800 dark:text-gray-300'"
        @click="categorieActive = cat.value"
      >
        {{ t(cat.label) }}
      </button>
    </div>

    <div class="px-4 pb-6">
      <div class="card text-center text-gray-500">
        <p class="py-8">Liste des boutiques à venir</p>
      </div>

      <div class="card mt-4 text-center">
        <h2 class="text-lg font-semibold">{{ t('shops.becomeSeller') }}</h2>
        <p class="mt-1 text-sm text-gray-500">{{ t('shops.createShopDesc') }}</p>
        <RouterLink to="/vendeur" class="btn-primary mt-4 inline-flex">
          {{ t('shops.createShop') }}
        </RouterLink>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import { useI18n } from 'vue-i18n'

const { t } = useI18n()

const recherche = ref('')
const categorieActive = ref('')

const categories = [
  { value: '', label: 'shops.all' },
  { value: 'Mode', label: 'shops.fashion' },
  { value: 'Électronique', label: 'shops.electronics' },
  { value: 'Maison', label: 'shops.home' },
  { value: 'Alimentation', label: 'shops.food' },
  { value: 'Autre', label: 'shops.other' }
]
</script>

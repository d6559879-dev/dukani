<template>
  <div class="mx-auto max-w-lg">
    <header class="sticky top-0 z-40 flex items-center justify-between border-b border-gray-200 bg-white/90 px-4 py-3 backdrop-blur dark:border-gray-800 dark:bg-gray-900/90">
      <h1 class="text-xl font-bold tracking-tight text-primary-600">
        {{ t('app.name') }}
      </h1>
      <div class="flex items-center gap-2">
        <button class="btn-ghost rounded-full p-2" aria-label="Rechercher">
          <svg class="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
          </svg>
        </button>
      </div>
    </header>

    <div class="flex gap-2 px-4 py-3">
      <button
        v-for="filtre in filtres"
        :key="filtre.value"
        class="rounded-full px-4 py-1.5 text-sm font-medium transition"
        :class="filtreActif === filtre.value
          ? 'bg-primary-600 text-white'
          : 'bg-gray-100 text-gray-700 dark:bg-gray-800 dark:text-gray-300'"
        @click="filtreActif = filtre.value"
      >
        {{ t(filtre.label) }}
      </button>
    </div>

    <div class="px-4 pb-6">
      <div class="card text-center text-gray-500 dark:text-gray-400">
        <p class="py-12">{{ t('home.noPosts') }}</p>
        <p class="text-sm">Le fil de publications sera migré ici progressivement.</p>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import { useI18n } from 'vue-i18n'

const { t } = useI18n()

const filtreActif = ref('tous')
const filtres = [
  { value: 'tous', label: 'home.forYou' },
  { value: 'suivis', label: 'home.following' }
]
</script>

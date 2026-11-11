<template>
  <div class="mx-auto max-w-lg">
    <header class="sticky top-0 z-40 border-b border-gray-200 bg-white/90 px-4 py-3 backdrop-blur dark:border-gray-800 dark:bg-gray-900/90">
      <h1 class="text-xl font-bold">{{ t('nav.messages') }}</h1>
    </header>

    <div class="px-4 py-8 text-center text-gray-500">
      <p>Messagerie à migrer</p>
    </div>
  </div>
</template>

<script setup>
import { useI18n } from 'vue-i18n'
const { t } = useI18n()
</script>

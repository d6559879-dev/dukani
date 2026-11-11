<template>
  <div class="min-h-screen flex flex-col bg-gray-50 dark:bg-gray-900">
    <!-- Contenu principal -->
    <main class="flex-1 pb-20">
      <RouterView />
    </main>

    <!-- Barre de navigation inférieure (mobile first) -->
    <BottomNav />
  </div>
</template>

<script setup>
import { onMounted } from 'vue'
import { useAuthStore } from '@/stores/auth'
import BottomNav from '@/components/layout/BottomNav.vue'

const auth = useAuthStore()

onMounted(() => {
  auth.init()
})
</script>

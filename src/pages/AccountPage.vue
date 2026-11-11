<template>
  <div class="mx-auto max-w-lg">
    <header class="sticky top-0 z-40 border-b border-gray-200 bg-white/90 px-4 py-3 backdrop-blur dark:border-gray-800 dark:bg-gray-900/90">
      <h1 class="text-xl font-bold">{{ t('nav.account') }}</h1>
    </header>

    <div class="space-y-4 px-4 py-6">
      <div class="card">
        <div class="flex items-center gap-3">
          <div class="flex h-14 w-14 items-center justify-center rounded-full bg-primary-100 text-xl font-bold text-primary-700">
            {{ initiale }}
          </div>
          <div>
            <p class="font-semibold">{{ auth.profile?.nom || 'Invité' }}</p>
            <p class="text-sm text-gray-500">{{ auth.user?.email || 'Non connecté' }}</p>
          </div>
        </div>
      </div>

      <div class="card">
        <p class="mb-2 text-sm font-medium text-gray-500">{{ t('account.language') }}</p>
        <div class="flex gap-2">
          <button
            class="btn"
            :class="locale === 'fr' ? 'btn-primary' : 'btn-secondary'"
            @click="changerLangue('fr')"
          >
            Français
          </button>
          <button
            class="btn"
            :class="locale === 'en' ? 'btn-primary' : 'btn-secondary'"
            @click="changerLangue('en')"
          >
            English
          </button>
        </div>
      </div>

      <div class="card space-y-2">
        <RouterLink v-if="auth.isSeller" to="/vendeur" class="btn-secondary w-full justify-start">
          {{ t('seller.dashboard') }}
        </RouterLink>

        <button
          v-if="auth.isAuthenticated"
          class="btn-secondary w-full justify-start text-red-600"
          @click="deconnexion"
        >
          {{ t('auth.logout') }}
        </button>
        <button
          v-else
          class="btn-primary w-full"
          @click="ouvrirAuth"
        >
          {{ t('auth.login') }}
        </button>
      </div>
    </div>
  </div>
</template>

<script setup>
import { computed } from 'vue'
import { useI18n } from 'vue-i18n'
import { useAuthStore } from '@/stores/auth'
import { setLocale } from '@/i18n'

const { t, locale } = useI18n()
const auth = useAuthStore()

const initiale = computed(() => {
  const nom = auth.profile?.nom || auth.user?.email || '?'
  return nom.charAt(0).toUpperCase()
})

function changerLangue(lang) {
  setLocale(lang)
}

async function deconnexion() {
  await auth.signOut()
}

function ouvrirAuth() {
  alert('Modal de connexion à implémenter')
}
</script>

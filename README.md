# Dukani

Application de vente en ligne (marketplace sociale) — centrée sur la RDC avec ambition internationale.

## Stack

- **Frontend** : Vue 3 + Vite
- **État** : Pinia
- **Routing** : Vue Router
- **i18n** : vue-i18n (FR + EN dès le départ)
- **Styling** : Tailwind CSS
- **Backend** : Supabase

## Démarrage rapide

```bash
npm install
cp .env.example .env
# Éditer .env avec tes clés Supabase
npm run dev
```

## Structure

```
src/
├── components/     # Composants réutilisables
├── composables/    # Logique réutilisable
├── locales/        # Traductions (fr.json, en.json)
├── pages/          # Pages de l'application
├── router/         # Configuration Vue Router
├── services/       # Client Supabase + API
├── stores/         # Stores Pinia
├── styles/         # CSS global + Tailwind
└── utils/          # Fonctions utilitaires
```

## Internationalisation

Langue par défaut : **français**.  
Changer de langue depuis la page Compte.

## Licence

Projet privé — Dukani

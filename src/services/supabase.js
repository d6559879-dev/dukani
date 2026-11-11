import { createClient } from '@supabase/supabase-js'

const supabaseUrl = import.meta.env.VITE_SUPABASE_URL
const supabaseAnonKey = import.meta.env.VITE_SUPABASE_ANON_KEY

if (!supabaseUrl || !supabaseAnonKey) {
  console.warn(
    '[Dukani] Variables Supabase manquantes. Créez un fichier .env à partir de .env.example'
  )
}

export const supabase = createClient(
  supabaseUrl || 'https://placeholder.supabase.co',
  supabaseAnonKey || 'placeholder-key'
)

/**
 * Retourne l'URL publique d'un fichier stocké dans le bucket "produits"
 */
export function getPublicUrl(path) {
  if (!path) return null
  const { data } = supabase.storage.from('produits').getPublicUrl(path)
  return data?.publicUrl || null
}

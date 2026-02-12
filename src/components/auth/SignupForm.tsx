'use client'

import { useState } from 'react'
import { useRouter } from 'next/navigation'
import GoogleAuthButton from './GoogleAuthButton'
import createClient from '@/lib/supabase/client'

export default function SignupForm() {
  const supabase = createClient()

  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    password: '',
    confirmPassword: ''
  })
  
  const [error, setError] = useState<string | null>(null)
  const [loading, setLoading] = useState(false)
  const [acceptedTerms, setAcceptedTerms] = useState(false)
  const router = useRouter()

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  const handleSignup = async (e: React.FormEvent) => {
    e.preventDefault()
    setError(null)

    if (formData.password !== formData.confirmPassword) {
      setError('Les mots de passe ne correspondent pas')
      return
    }

    if (formData.password.length < 8) {
      setError('Le mot de passe doit contenir au moins 8 caractères')
      return
    }

    if (!acceptedTerms) {
      setError('Vous devez accepter les conditions d\'utilisation')
      return
    }

    setLoading(true)

    try {
      const { error } = await supabase.auth.signUp({
        email: formData.email,
        password: formData.password,

        options: {
           data: {
            full_name: formData.fullName,
          },
          emailRedirectTo: `${window.location.origin}/protected`,
        },
      });

      if (error) throw error;
      router.push("/sign-up-success");
    } catch (error: unknown) {
      setError(error instanceof Error ? error.message : "An error occurred");
    } finally {
      setLoading(false);
    }
  }

  return (
    <div className="bg-zinc-900 border border-zinc-800 rounded-2xl p-8 shadow-2xl">
      <form onSubmit={handleSignup} className="space-y-5">
        {error && (
          <div className="bg-red-500/10 border border-red-500/50 text-red-400 px-4 py-3 rounded-lg text-sm">
            {error}
          </div>
        )}

        <div>
          <label
            htmlFor="fullName"
            className="block text-sm font-medium text-gray-300 mb-2"
          >
            Nom complet
          </label>
          <input
            id="fullName"
            name="fullName"
            type="text"
            autoComplete="name"
            required
            value={formData.fullName}
            onChange={handleChange}
            className="w-full px-4 py-3 bg-black border border-zinc-800 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-white focus:border-transparent transition-all"
            placeholder="Jean Dupont"
          />
        </div>

        <div>
          <label
            htmlFor="email"
            className="block text-sm font-medium text-gray-300 mb-2"
          >
            Adresse email
          </label>
          <input
            id="email"
            name="email"
            type="email"
            autoComplete="email"
            required
            value={formData.email}
            onChange={handleChange}
            className="w-full px-4 py-3 bg-black border border-zinc-800 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-white focus:border-transparent transition-all"
            placeholder="vous@exemple.com"
          />
        </div>

        <div>
          <label
            htmlFor="password"
            className="block text-sm font-medium text-gray-300 mb-2"
          >
            Mot de passe
          </label>
          <input
            id="password"
            name="password"
            type="password"
            autoComplete="new-password"
            required
            value={formData.password}
            onChange={handleChange}
            className="w-full px-4 py-3 bg-black border border-zinc-800 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-white focus:border-transparent transition-all"
            placeholder="••••••••"
          />
          <p className="mt-1.5 text-xs text-gray-500">
            Minimum 8 caractères
          </p>
        </div>

        <div>
          <label
            htmlFor="confirmPassword"
            className="block text-sm font-medium text-gray-300 mb-2"
          >
            Confirmer le mot de passe
          </label>
          <input
            id="confirmPassword"
            name="confirmPassword"
            type="password"
            autoComplete="new-password"
            required
            value={formData.confirmPassword}
            onChange={handleChange}
            className="w-full px-4 py-3 bg-black border border-zinc-800 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-white focus:border-transparent transition-all"
            placeholder="••••••••"
          />
        </div>

        <div className="pt-2">
          <label className="flex items-start cursor-pointer group">
            <input
              type="checkbox"
              checked={acceptedTerms}
              onChange={(e) => setAcceptedTerms(e.target.checked)}
              className="w-4 h-4 mt-0.5 bg-black border-zinc-700 rounded focus:ring-2 focus:ring-white focus:ring-offset-0 focus:ring-offset-zinc-900 text-white cursor-pointer"
            />
            <span className="ml-2 text-sm text-gray-400 group-hover:text-gray-300 transition-colors">
              J'accepte les{' '}
              <a href="#" className="text-white hover:underline">
                conditions d'utilisation
              </a>
              {' '}et la{' '}
              <a href="#" className="text-white hover:underline">
                politique de confidentialité
              </a>
            </span>
          </label>
        </div>

        <button
          type="submit"
          disabled={loading}
          className="w-full py-3 px-4 bg-white text-black rounded-lg font-medium hover:bg-gray-200 focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-zinc-900 disabled:opacity-50 disabled:cursor-not-allowed transition-all cursor-pointer"
        >
          {loading ? (
            <span className="flex items-center justify-center">
              <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-black" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
              </svg>
              Création du compte...
            </span>
          ) : (
            'Créer mon compte'
          )}
        </button>
      </form>

      <div className="mt-8">
        <div className="relative">
          <div className="absolute inset-0 flex items-center">
            <div className="w-full border-t border-zinc-800" />
          </div>
          <div className="relative flex justify-center text-sm">
            <span className="px-4 bg-zinc-900 text-gray-500">Ou s'inscrire avec</span>
          </div>
        </div>

        <div className="mt-6">
          <GoogleAuthButton mode="signup" />
        </div>
      </div>
    </div>
  )
}

import LoginForm from '@/components/auth/LoginForm'
import Link from 'next/link'

export default function LoginPage() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-black">
      <div className="max-w-md w-full px-6">
        <div className="text-center mb-10">
          <h1 className="text-4xl font-bold text-white mb-2">
            Bienvenue
          </h1>
          <p className="text-gray-400">
            Connectez-vous pour continuer
          </p>
        </div>
        <LoginForm />
        <p className="mt-8 text-center text-sm text-gray-400">
          Pas encore de compte ?{' '}
          <Link 
            href="/signup" 
            className="font-medium text-white hover:text-gray-300 transition-colors"
          >
            Créer un compte
          </Link>
        </p>
      </div>
    </div>
  )
}
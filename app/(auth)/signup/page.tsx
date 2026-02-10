import SignupForm from '@/components/auth/SignupForm'
import Link from 'next/link'

export default function SignupPage() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-black py-12">
      <div className="max-w-md w-full px-6">
        <div className="text-center mb-10">
          <h1 className="text-4xl font-bold text-white mb-2">
            Créer un compte
          </h1>
          <p className="text-gray-400">
            Rejoignez-nous en quelques clics
          </p>
        </div>
        <SignupForm />
        <p className="mt-8 text-center text-sm text-gray-400">
          Vous avez déjà un compte ?{' '}
          <Link  href="/login" className="font-medium text-white hover:text-gray-300 transition-colors">
            Se connecter
          </Link>
        </p>
      </div>
    </div>
  )
}
import Link from 'next/link'

export default function LandingPage() {
  return (
    <div className="min-h-screen bg-black text-white">
  
      <nav className="fixed top-0 w-full bg-black/80 backdrop-blur-lg border-b border-zinc-800 z-50">
        <div className="max-w-7xl mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="text-2xl font-bold">
              Auth<span className="text-gray-400">App</span>
            </div>
            <div className="flex items-center gap-4">
              <Link  href="/login" className="text-gray-300 hover:text-white transition-colors">
                Se connecter
              </Link>
              <Link href="/signup" className="bg-white text-black px-5 py-2 rounded-lg font-medium hover:bg-gray-200 transition-all">
                Commencer
              </Link>
            </div>
          </div>
        </div>
      </nav>

      <section className="pt-32 pb-20 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="max-w-3xl mx-auto text-center">
            <div className="inline-block mb-6">
              <span className="bg-zinc-900 border border-zinc-800 text-gray-400 px-4 py-2 rounded-full text-sm">
                 Starter plateforme d'authentification
              </span>
            </div>
            
            <h1 className="text-6xl md:text-7xl font-bold mb-6 leading-tight">
              Gérez vos utilisateurs
              <span className="block text-gray-400 mt-2">en toute simplicité</span>
            </h1>
            
            <p className="text-xl text-gray-400 mb-10 max-w-2xl mx-auto">
              Une solution d'authentification moderne et sécurisée avec gestion des rôles, 
              OAuth Google et une interface élégante.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link  href="/signup" className="bg-white text-black px-8 py-4 rounded-lg font-medium text-lg hover:bg-gray-200 transition-all inline-flex items-center justify-center gap-2">
                Créer un compte
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                </svg>
              </Link>
              <Link href="/login" className="bg-zinc-900 border border-zinc-800 text-white px-8 py-4 rounded-lg font-medium text-lg hover:bg-zinc-800 transition-all">
                Se connecter
              </Link>
            </div>
          </div>
        </div>
      </section>

    
      <section className="py-20 px-6 bg-zinc-950/50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">Fonctionnalités principales</h2>
            <p className="text-gray-400 text-lg">
              Tout ce dont vous avez besoin pour gérer vos utilisateurs
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
          
            <div className="bg-zinc-900 border border-zinc-800 rounded-2xl p-8 hover:border-zinc-700 transition-all group">
              <div className="w-12 h-12 bg-white/10 rounded-lg flex items-center justify-center mb-6 group-hover:bg-white/20 transition-all">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-3">Authentification sécurisée</h3>
              <p className="text-gray-400">
                Protection avancée avec email/password et OAuth Google pour une sécurité optimale.
              </p>
            </div>

           
            <div className="bg-zinc-900 border border-zinc-800 rounded-2xl p-8 hover:border-zinc-700 transition-all group">
              <div className="w-12 h-12 bg-white/10 rounded-lg flex items-center justify-center mb-6 group-hover:bg-white/20 transition-all">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-3">Gestion des rôles</h3>
              <p className="text-gray-400">
                Différenciez facilement les utilisateurs standards et les administrateurs.
              </p>
            </div>

        
            <div className="bg-zinc-900 border border-zinc-800 rounded-2xl p-8 hover:border-zinc-700 transition-all group">
              <div className="w-12 h-12 bg-white/10 rounded-lg flex items-center justify-center mb-6 group-hover:bg-white/20 transition-all">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-3">Interface moderne</h3>
              <p className="text-gray-400">
                Design épuré et professionnel avec une expérience utilisateur optimale.
              </p>
            </div>
          </div>
        </div>
      </section>


      <section className="py-20 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="bg-linear-to-br from-zinc-900 to-black border border-zinc-800 rounded-2xl p-12">
            <div className="grid md:grid-cols-3 gap-12 text-center">
              <div>
                <div className="text-5xl font-bold mb-2">99.9%</div>
                <div className="text-gray-400">Disponibilité</div>
              </div>
              <div>
                <div className="text-5xl font-bold mb-2">&lt;100ms</div>
                <div className="text-gray-400">Temps de réponse</div>
              </div>
              <div>
                <div className="text-5xl font-bold mb-2">100%</div>
                <div className="text-gray-400">Sécurisé</div>
              </div>
            </div>
          </div>
        </div>
      </section>

 
      <section className="py-20 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Prêt à commencer ?
          </h2>
          <p className="text-xl text-gray-400 mb-10">
            Créez votre compte gratuitement et découvrez toutes les fonctionnalités.
          </p>
          <Link  href="/signup" className="bg-white text-black px-10 py-4 rounded-lg font-medium text-lg hover:bg-gray-200 transition-all inline-flex items-center justify-center gap-2">
            Créer un compte gratuit
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
            </svg>
          </Link>
        </div>
      </section>


      <footer className="border-t border-zinc-800 py-12 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-4 gap-8 mb-8">
            <div>
              <div className="text-xl font-bold mb-4">
                Auth<span className="text-gray-400">App</span>
              </div>
              <p className="text-gray-400 text-sm">
                Solution d'authentification moderne et sécurisée.
              </p>
            </div>
            
            <div>
              <h4 className="font-semibold mb-4">Produit</h4>
              <ul className="space-y-2 text-sm text-gray-400">
                <li><a href="#" className="hover:text-white transition-colors">Fonctionnalités</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Tarifs</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Documentation</a></li>
              </ul>
            </div>
            
            <div>
              <h4 className="font-semibold mb-4">Entreprise</h4>
              <ul className="space-y-2 text-sm text-gray-400">
                <li><a href="#" className="hover:text-white transition-colors">À propos</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Blog</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Carrières</a></li>
              </ul>
            </div>
            
            <div>
              <h4 className="font-semibold mb-4">Support</h4>
              <ul className="space-y-2 text-sm text-gray-400">
                <li><a href="#" className="hover:text-white transition-colors">Contact</a></li>
                <li><a href="#" className="hover:text-white transition-colors">FAQ</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Status</a></li>
              </ul>
            </div>
          </div>
          
          <div className="border-t border-zinc-800 pt-8 flex flex-col md:flex-row justify-between items-center text-sm text-gray-400">
            <p>© 2026 Felix Warano. Tous droits réservés.</p>
            <div className="flex gap-6 mt-4 md:mt-0">
              <a href="#" className="hover:text-white transition-colors">Confidentialité</a>
              <a href="#" className="hover:text-white transition-colors">Conditions</a>
              <a href="#" className="hover:text-white transition-colors">Cookies</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}
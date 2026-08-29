import { Link } from 'react-router-dom';
import { Home, ArrowLeft } from 'lucide-react';
import SEO from '../components/SEO';

export default function NotFound() {
  return (
    <div className="min-h-screen bg-slate-50 flex flex-col items-center justify-center px-4">
      <SEO 
        title="404 – Stránka nenalezena"
        description="Omlouváme se, ale požadovaná stránka nebyla nalezena."
        noindex={true}
      />
      <div className="text-center max-w-lg">
        <h1 className="text-9xl font-bold text-brand-600 mb-4">404</h1>
        <h2 className="text-3xl font-bold text-slate-900 mb-6">Stránka nenalezena</h2>
        <p className="text-lg text-slate-600 mb-8">
          Omlouváme se, ale stránka, kterou hledáte, neexistuje nebo byla přesunuta.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <button onClick={() => window.history.back()} className="inline-flex items-center justify-center px-6 py-3 border border-slate-300 text-base font-medium rounded-lg text-slate-700 bg-white hover:bg-slate-50 transition-colors">
            <ArrowLeft className="mr-2 w-5 h-5" />
            Zpět
          </button>
          <Link to="/" className="inline-flex items-center justify-center px-6 py-3 border border-transparent text-base font-medium rounded-lg text-white bg-brand-600 hover:bg-brand-700 transition-colors">
            <Home className="mr-2 w-5 h-5" />
            Na hlavní stranu
          </Link>
        </div>
      </div>
    </div>
  );
}

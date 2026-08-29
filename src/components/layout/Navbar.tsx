import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Phone, Mail } from 'lucide-react';
import { useState } from 'react';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const links = [
    { name: 'O nás', path: '/' },
    { name: 'Služby', path: '/sluzby' },
    { name: 'Náš tým', path: '/tym' },
    { name: 'Podcast', path: '/podcast' },
    { name: 'Blog', path: '/blog' },
    { name: 'Kariéra', path: '/kariera' },
    { name: 'Pro klienty', path: '/pro-klienty' },
  ];

  const isActive = (path: string) => {
    if (path === '/' && location.pathname !== '/') return false;
    return location.pathname.startsWith(path);
  };

  return (
    <header className="bg-white sticky top-0 z-50 border-b border-gray-100 shadow-sm">
      <nav aria-label="Hlavní navigace" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-20">
          <div className="flex items-center">
            <Link to="/" aria-label="ZFP Jagoš & Cábovi – domovská stránka" className="flex-shrink-0 flex items-center gap-2">
              <div className="w-10 h-10 bg-brand-600 rounded-lg flex items-center justify-center shadow-sm">
                <span className="text-white font-bold text-xl">ZFP</span>
              </div>
              <span className="font-semibold text-xl text-slate-900 hidden sm:block">ZFP Jagoš & Cábovi</span>
            </Link>
          </div>
          
          <div className="hidden md:flex md:items-center md:space-x-8">
            {links.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={`${
                  isActive(link.path)
                    ? 'text-brand-600 font-semibold border-b-2 border-brand-600 pb-0.5'
                    : 'text-slate-600 hover:text-slate-900 font-medium'
                } transition-colors duration-200 text-sm`}
              >
                {link.name}
              </Link>
            ))}
            <Link 
              to="/kontakt" 
              className="inline-flex items-center justify-center px-4 py-2 text-sm font-medium rounded-lg text-white bg-brand-600 hover:bg-brand-700 transition-colors shadow-sm"
            >
              Sjednat schůzku
            </Link>
          </div>

          <div className="flex items-center md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              aria-label={isOpen ? 'Zavřít menu' : 'Otevřít menu'}
              aria-expanded={isOpen}
              className="text-slate-500 hover:text-slate-900 p-2 focus:outline-none focus:ring-2 focus:ring-brand-500 rounded-md"
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile menu */}
      {isOpen && (
        <div className="md:hidden bg-white border-b border-gray-100 shadow-lg">
          <div className="px-3 pt-3 pb-3 space-y-1">
            {links.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                onClick={() => setIsOpen(false)}
                className={`${
                  isActive(link.path)
                    ? 'bg-brand-50 text-brand-600 font-semibold'
                    : 'text-slate-600 hover:bg-slate-50 hover:text-slate-900'
                } block px-3 py-2.5 rounded-lg text-base`}
              >
                {link.name}
              </Link>
            ))}
          </div>
          <div className="pt-4 pb-4 border-t border-gray-100 bg-slate-50/50">
            <div className="flex items-center px-5 space-x-3">
              <a href="tel:+420606084044" className="flex items-center text-slate-700 hover:text-brand-600 font-medium">
                <Phone className="h-4 w-4 mr-2.5 text-brand-600" />
                <span>+420 606 084 044</span>
              </a>
            </div>
            <div className="flex items-center px-5 space-x-3 mt-3">
              <a href="mailto:info@zfpjagos.cz" className="flex items-center text-slate-700 hover:text-brand-600 font-medium">
                <Mail className="h-4 w-4 mr-2.5 text-brand-600" />
                <span>info@zfpjagos.cz</span>
              </a>
            </div>
            <div className="px-5 mt-4">
              <Link
                to="/kontakt"
                onClick={() => setIsOpen(false)}
                className="flex items-center justify-center w-full px-4 py-3 text-base font-medium rounded-lg text-white bg-brand-600 hover:bg-brand-700 transition-colors shadow-sm"
              >
                Sjednat schůzku
              </Link>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}

import { Link } from 'react-router-dom';
import { Facebook, Instagram, Linkedin, Mail, Phone, MapPin, Youtube, Headphones, ShieldCheck } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-slate-950 text-slate-300 border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14 lg:py-18">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          
          <div>
            <div className="flex items-center gap-2.5 mb-6">
              <div className="w-10 h-10 bg-brand-600 rounded-xl flex items-center justify-center shadow-md">
                <span className="text-white font-extrabold text-xl tracking-tight">ZFP</span>
              </div>
              <span className="font-bold text-xl text-white">Jagoš & Cábovi</span>
            </div>
            <p className="text-slate-400 text-sm mb-6 leading-relaxed">
              Pomáháme rodinám i podnikatelům s jistotou budovat a chránit finanční majetek. Komplexní služby, hypotéky a investice pod jednou střechou. Člen skupiny ZFP Group, a.s.
            </p>
            <div className="flex flex-wrap gap-2.5">
              <a 
                href="https://open.spotify.com/show/7i18QORJT0w3adVnydRWA8" 
                target="_blank" 
                rel="noreferrer noopener" 
                aria-label="Spotify Podcast Finanční kompas" 
                className="w-10 h-10 rounded-xl bg-slate-900 border border-slate-800 flex items-center justify-center text-slate-400 hover:text-white hover:bg-[#1DB954] hover:border-[#1DB954] transition-all"
                title="Spotify Podcast"
              >
                <Headphones className="h-5 w-5" />
              </a>
              <a 
                href="https://www.youtube.com/@financnikompas" 
                target="_blank" 
                rel="noreferrer noopener" 
                aria-label="YouTube kanál Finanční kompas" 
                className="w-10 h-10 rounded-xl bg-slate-900 border border-slate-800 flex items-center justify-center text-slate-400 hover:text-white hover:bg-[#FF0000] hover:border-[#FF0000] transition-all"
                title="YouTube"
              >
                <Youtube className="h-5 w-5" />
              </a>
              <a 
                href="https://www.instagram.com/financni_kompas/" 
                target="_blank" 
                rel="noreferrer noopener" 
                aria-label="Instagram Podcast Finanční kompas" 
                className="w-10 h-10 rounded-xl bg-slate-900 border border-slate-800 flex items-center justify-center text-slate-400 hover:text-white hover:bg-[#E1306C] hover:border-[#E1306C] transition-all"
                title="Instagram"
              >
                <Instagram className="h-5 w-5" />
              </a>
              <a 
                href="https://www.facebook.com/profile.php?id=61567893967623" 
                target="_blank" 
                rel="noreferrer noopener" 
                aria-label="Facebook ZFP Jagoš & Cábovi" 
                className="w-10 h-10 rounded-xl bg-slate-900 border border-slate-800 flex items-center justify-center text-slate-400 hover:text-white hover:bg-[#1877F2] hover:border-[#1877F2] transition-all"
                title="Facebook"
              >
                <Facebook className="h-5 w-5" />
              </a>
            </div>
          </div>

          <div>
            <h3 className="text-white font-semibold mb-6 text-base tracking-wide">Rychlé odkazy</h3>
            <ul className="space-y-3.5 text-sm">
              <li><Link to="/" className="hover:text-white transition-colors">O nás</Link></li>
              <li><Link to="/sluzby" className="hover:text-white transition-colors">Naše služby</Link></li>
              <li><Link to="/tym" className="hover:text-white transition-colors">Náš tým</Link></li>
              <li><Link to="/podcast" className="hover:text-white transition-colors">Podcast Finanční kompas</Link></li>
              <li><Link to="/kariera" className="hover:text-white transition-colors">Kariéra u nás</Link></li>
              <li><Link to="/pro-klienty" className="hover:text-white transition-colors">Pro klienty</Link></li>
              <li><Link to="/blog" className="hover:text-white transition-colors">Blog a aktuality</Link></li>
            </ul>
          </div>

          <div>
            <h3 className="text-white font-semibold mb-6 text-base tracking-wide">Naše Služby</h3>
            <ul className="space-y-3.5 text-sm">
              <li><Link to="/sluzby#hypoteky" className="hover:text-white transition-colors">Bydlení a hypotéky</Link></li>
              <li><Link to="/sluzby#investice" className="hover:text-white transition-colors">Investice a spoření</Link></li>
              <li><Link to="/sluzby#zajisteni" className="hover:text-white transition-colors">Zajištění příjmů</Link></li>
              <li><Link to="/sluzby#kalkulacka" className="hover:text-white transition-colors">Investiční kalkulačka</Link></li>
              <li><Link to="/kontakt" className="hover:text-white transition-colors">Osobní konzultace</Link></li>
            </ul>
          </div>

          <div>
            <h3 className="text-white font-semibold mb-6 text-base tracking-wide">Kancelář & Kontakt</h3>
            <ul className="space-y-4 text-sm">
              <li className="flex items-start">
                <MapPin className="h-5 w-5 mr-3 mt-0.5 text-brand-400 shrink-0" />
                <span>Strukturní kancelář Hutník 1503<br />698 01 Veselí nad Moravou</span>
              </li>
              <li className="flex items-center">
                <Phone className="h-5 w-5 mr-3 text-brand-400 shrink-0" />
                <a href="tel:+420606084044" className="hover:text-white transition-colors font-medium">+420 606 084 044</a>
              </li>
              <li className="flex items-center">
                <Mail className="h-5 w-5 mr-3 text-brand-400 shrink-0" />
                <a href="mailto:info@zfpjagos.cz" className="hover:text-white transition-colors">info@zfpjagos.cz</a>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-slate-800 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center text-sm text-slate-500">
          <p>&copy; {new Date().getFullYear()} ZFP Jagoš & Cábovi. Všechna práva vyhrazena.</p>
          <div className="mt-4 md:mt-0 space-x-6">
            <Link to="/kontakt" className="hover:text-white transition-colors">Sjednat schůzku</Link>
            <Link to="/pro-klienty" className="hover:text-white transition-colors">Hlášení pojistných událostí</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}

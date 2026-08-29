import { motion } from 'motion/react';
import { Mic, Headphones, Play, ExternalLink, Sparkles, Youtube, Radio, CheckCircle2 } from 'lucide-react';
import SEO from '../components/SEO';
import AmbientBackground from '../components/animations/AmbientBackground';
import ScrollReveal from '../components/animations/ScrollReveal';

export default function Podcast() {
  const podcastSchema = {
    "@context": "https://schema.org",
    "@type": "PodcastSeries",
    "name": "Podcast Finanční kompas",
    "description": "Podcast Finanční Kompas — průvodce finanční džunglí s odbornými hosty, kteří vědí, o čem mluví.",
    "url": "https://linktr.ee/FIKOMPAS",
    "webFeed": "https://open.spotify.com/show/7i18QORJT0w3adVnydRWA8",
    "author": {
      "@type": "Organization",
      "name": "ZFP Jagoš & Cábovi",
      "url": "https://zfpjagos.cz"
    },
    "sameAs": [
      "https://open.spotify.com/show/7i18QORJT0w3adVnydRWA8?si=c215363f2f6248cb",
      "https://podcasts.apple.com/cz/podcast/finan%C4%8Dn%C3%AD-kompas/id1709173811",
      "https://www.youtube.com/@financnikompas",
      "https://www.instagram.com/financni_kompas/",
      "https://www.facebook.com/profile.php?id=61567893967623",
      "https://linktr.ee/FIKOMPAS"
    ],
    "inLanguage": "cs-CZ"
  };

  const platforms = [
    {
      name: 'Spotify',
      url: 'https://open.spotify.com/show/7i18QORJT0w3adVnydRWA8?si=c215363f2f6248cb',
      bgColor: 'bg-[#1DB954] hover:bg-[#1aa34a]',
      textColor: 'text-white',
      badge: 'Nejposlouchanější',
      icon: (
        <svg className="w-6 h-6 fill-current" viewBox="0 0 24 24">
          <path d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm5.485 17.306c-.215.353-.674.464-1.027.249-2.812-1.718-6.353-2.107-10.523-1.155-.403.092-.807-.16-.899-.562-.092-.403.16-.807.562-.899 4.568-1.044 8.487-.6 11.638 1.34.353.215.464.674.249 1.027zm1.464-3.26c-.27.441-.849.58-1.29.31-3.219-1.978-8.127-2.55-11.933-1.394-.499.151-1.028-.135-1.18-.633-.151-.498.135-1.028.633-1.18 4.354-1.321 9.774-.682 13.46 1.587.441.27.58.849.31 1.29zm.125-3.398C15.22 8.358 8.864 8.147 5.16 9.272c-.596.181-1.229-.16-1.41-.756-.181-.596.16-1.229.756-1.41 4.254-1.291 11.277-1.047 15.688 1.572.535.317.709 1.011.392 1.546-.317.534-1.011.708-1.512.024z"/>
        </svg>
      )
    },
    {
      name: 'Apple Podcasts',
      url: 'https://podcasts.apple.com/cz/podcast/finan%C4%8Dn%C3%AD-kompas/id1709173811',
      bgColor: 'bg-[#872EC4] hover:bg-[#7724b0]',
      textColor: 'text-white',
      badge: 'iOS & Mac',
      icon: (
        <svg className="w-6 h-6 fill-current" viewBox="0 0 24 24">
          <path d="M12 0C5.372 0 0 5.372 0 12c0 6.627 5.372 12 12 12s12-5.373 12-12c0-6.628-5.372-12-12-12zm0 3.692a8.31 8.31 0 0 1 8.308 8.308c0 3.324-1.947 6.195-4.757 7.508l-1.31-2.27a5.69 5.69 0 0 0 3.45-5.238 5.692 5.692 0 1 0-11.383 0c0 2.298 1.36 4.279 3.326 5.192l-1.31 2.27A8.307 8.307 0 0 1 3.692 12 8.31 8.31 0 0 1 12 3.692zm0 4.923a3.385 3.385 0 0 1 3.385 3.385c0 1.34-.78 2.502-1.91 3.05l-1.475 2.553-1.475-2.553a3.382 3.382 0 0 1-1.91-3.05A3.385 3.385 0 0 1 12 8.615z"/>
        </svg>
      )
    },
    {
      name: 'YouTube',
      url: 'https://www.youtube.com/@financnikompas',
      bgColor: 'bg-[#FF0000] hover:bg-[#e00000]',
      textColor: 'text-white',
      badge: 'Video & Epizody',
      icon: <Youtube className="w-6 h-6" />
    },
    {
      name: 'Instagram',
      url: 'https://www.instagram.com/financni_kompas/',
      bgColor: 'bg-gradient-to-r from-[#833ab4] via-[#fd1d1d] to-[#fcb045] hover:opacity-90',
      textColor: 'text-white',
      badge: 'Krátké reels & tipy',
      icon: (
        <svg className="w-6 h-6 fill-current" viewBox="0 0 24 24">
          <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
        </svg>
      )
    },
    {
      name: 'Facebook',
      url: 'https://www.facebook.com/profile.php?id=61567893967623',
      bgColor: 'bg-[#1877F2] hover:bg-[#166fe5]',
      textColor: 'text-white',
      badge: 'Komunita',
      icon: (
        <svg className="w-6 h-6 fill-current" viewBox="0 0 24 24">
          <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
        </svg>
      )
    },
  ];

  const topics = [
    {
      title: 'Jak zvládnout hypotéku a refinancování',
      desc: 'Praktické srovnání bankovních nabídek, fixací a strategií, jak na úvěru na bydlení ušetřit statisíce.',
    },
    {
      title: 'Investiční strategie a boj s inflací',
      desc: 'Jak efektivně diverzifikovat mezi nemovitostní fondy, akcie a drahé kovy i při menších měsíčních úložkách.',
    },
    {
      title: 'Zabezpečení rodinného rozpočtu',
      desc: 'Reálné životní situace, pojistné pasti a jak si postavit finanční polštář pro naprostý klid v rodině.',
    },
    {
      title: 'Rozhovory s předními experty',
      desc: 'Hosté z bankovního sektoru, realitní makléři a zkušení investoři bez zbytečných marketingových řečí.',
    },
  ];

  return (
    <div className="bg-white min-h-screen overflow-x-hidden">
      <SEO 
        title="Podcast Finanční kompas – Průvodce světem financí"
        description="Podcast Finanční Kompas — průvodce finanční džunglí s odbornými hosty, kteří vědí, o čem mluví. Poslouchejte na Spotify, Apple Podcasts a YouTube."
        canonical="/podcast"
        schema={podcastSchema}
      />
      
      {/* Hero */}
      <section className="bg-slate-900 py-24 lg:py-32 border-b border-slate-800 text-white overflow-hidden relative">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1590602847861-f357a9332bbc?auto=format&fit=crop&q=80&w=1200')] opacity-10 bg-cover bg-center" />
        <AmbientBackground variant="hero" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            className="w-24 h-24 bg-brand-600 rounded-3xl mx-auto flex items-center justify-center mb-8 rotate-3 shadow-xl shadow-brand-600/40"
          >
            <Mic className="w-12 h-12 text-white -rotate-3" />
          </motion.div>
          
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-5xl md:text-6xl font-bold mb-6 tracking-tight"
          >
            Finanční <span className="bg-gradient-to-r from-brand-400 to-amber-300 bg-clip-text text-transparent">kompas</span>
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-xl text-slate-300 max-w-3xl mx-auto mb-10 leading-relaxed"
          >
            Průvodce finanční džunglí s odbornými hosty, kteří vědí, o čem mluví. Složitý svět peněz, hypoték a investic vysvětlujeme srozumitelně a lidskou řečí.
          </motion.p>
          
          {/* Quick Platform Bar */}
          <div className="flex flex-wrap justify-center gap-3 max-w-3xl mx-auto">
            {platforms.map((platform) => (
              <a
                key={platform.name}
                href={platform.url}
                target="_blank"
                rel="noreferrer noopener"
                className={`inline-flex items-center gap-2.5 px-5 py-3 rounded-xl font-semibold text-sm transition-all shadow-md hover:scale-105 ${platform.bgColor} ${platform.textColor}`}
              >
                {platform.icon}
                <span>{platform.name}</span>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* Spotify Live Player & Topics */}
      <section className="py-24 bg-slate-50 border-b border-slate-100 relative overflow-hidden">
        <AmbientBackground variant="light" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
            
            {/* Embedded Spotify Widget */}
            <ScrollReveal direction="left" className="lg:col-span-6 bg-white p-6 sm:p-8 rounded-3xl shadow-xl border border-slate-200/80">
              <div className="flex items-center justify-between mb-6 pb-4 border-b border-slate-100">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-[#1DB954]/10 text-[#1DB954] flex items-center justify-center font-bold">
                    <Radio className="w-5 h-5" />
                  </div>
                  <div>
                    <h2 className="text-xl font-bold text-slate-900">Přehrávač epizod</h2>
                    <p className="text-xs text-slate-500">Oficiální Spotify kanál</p>
                  </div>
                </div>
                <a
                  href="https://open.spotify.com/show/7i18QORJT0w3adVnydRWA8?si=c215363f2f6248cb"
                  target="_blank"
                  rel="noreferrer noopener"
                  className="text-xs font-semibold text-[#1DB954] hover:underline flex items-center gap-1"
                >
                  Otevřít v aplikaci <ExternalLink className="w-3 h-3" />
                </a>
              </div>

              {/* Spotify Iframe */}
              <div className="w-full rounded-2xl overflow-hidden shadow-inner bg-slate-900">
                <iframe 
                  style={{ borderRadius: '16px' }} 
                  src="https://open.spotify.com/embed/show/7i18QORJT0w3adVnydRWA8?utm_source=generator&theme=0" 
                  width="100%" 
                  height="352" 
                  frameBorder="0" 
                  allowFullScreen 
                  allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" 
                  loading="lazy"
                  title="Podcast Finanční Kompas – Spotify přehrávač"
                />
              </div>

              <div className="mt-6 pt-4 border-t border-slate-100 flex items-center justify-between text-xs text-slate-500">
                <span>Autoři: Patrik Knotek & ZFP Jagoš & Cábovi</span>
                <a href="https://linktr.ee/FIKOMPAS" target="_blank" rel="noreferrer noopener" className="font-semibold text-brand-600 hover:underline">
                  linktr.ee/FIKOMPAS
                </a>
              </div>
            </ScrollReveal>

            {/* Topics & Info */}
            <ScrollReveal direction="right" delay={0.15} className="lg:col-span-6 flex flex-col justify-between h-full">
              <div>
                <div className="inline-flex items-center px-3.5 py-1.5 rounded-full bg-brand-50 text-brand-700 text-xs font-bold uppercase tracking-wider mb-4 border border-brand-100">
                  <Sparkles className="w-3.5 h-3.5 mr-1.5" /> O podcastu
                </div>
                <h2 className="text-3xl lg:text-4xl font-bold text-slate-900 mb-6 leading-tight">
                  Témata, která vám šetří peníze a otevírají oči
                </h2>
                <p className="text-lg text-slate-600 mb-8 leading-relaxed">
                  Finanční trh je plný složitých pojmů a chytáků. V podcastu Finanční kompas boříme mýty a ukazujeme lidem, jak si bezpečně tvořit a chránit majetek.
                </p>

                <div className="space-y-4">
                  {topics.map((topic, i) => (
                    <div key={i} className="flex items-start gap-4 p-4 rounded-2xl bg-white border border-slate-200/70 shadow-xs hover:border-brand-200 transition-colors">
                      <CheckCircle2 className="w-5 h-5 text-brand-600 shrink-0 mt-0.5" />
                      <div>
                        <h3 className="font-bold text-slate-900 text-base mb-1">{topic.title}</h3>
                        <p className="text-sm text-slate-500 leading-relaxed">{topic.desc}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <div className="mt-8 pt-8 border-t border-slate-200">
                <a 
                  href="https://linktr.ee/FIKOMPAS"
                  target="_blank"
                  rel="noreferrer noopener"
                  className="inline-flex items-center justify-center w-full px-8 py-4 rounded-xl text-white bg-slate-900 hover:bg-slate-800 font-semibold transition-all shadow-lg text-center group"
                >
                  <Headphones className="w-5 h-5 mr-3 group-hover:scale-110 transition-transform" />
                  Zobrazit všechny platformy na Linktree
                </a>
              </div>
            </ScrollReveal>

          </div>
        </div>
      </section>

      {/* Platform Cards Section */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <h2 className="text-3xl font-bold text-slate-900 tracking-tight mb-4">Vyberte si svou oblíbenou platformu</h2>
            <p className="text-slate-600">Sledujte nás a poslouchejte v autě, při sportu nebo doma na gauči.</p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {platforms.map((platform) => (
              <a
                key={platform.name}
                href={platform.url}
                target="_blank"
                rel="noreferrer noopener"
                className="p-6 rounded-2xl border border-slate-200 hover:border-brand-300 hover:shadow-xl transition-all duration-300 flex items-center justify-between group bg-white"
              >
                <div className="flex items-center gap-4">
                  <div className={`w-12 h-12 rounded-xl flex items-center justify-center ${platform.bgColor} ${platform.textColor} shadow-md`}>
                    {platform.icon}
                  </div>
                  <div>
                    <h3 className="font-bold text-slate-900 text-lg group-hover:text-brand-600 transition-colors">{platform.name}</h3>
                    <span className="text-xs text-slate-500 font-medium">{platform.badge}</span>
                  </div>
                </div>
                <ExternalLink className="w-5 h-5 text-slate-400 group-hover:text-brand-600 transition-colors" />
              </a>
            ))}

            {/* All links via Linktree */}
            <a
              href="https://linktr.ee/FIKOMPAS"
              target="_blank"
              rel="noreferrer noopener"
              className="p-6 rounded-2xl border border-brand-200 bg-brand-50/50 hover:bg-brand-50 hover:shadow-xl transition-all duration-300 flex items-center justify-between group"
            >
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-xl flex items-center justify-center bg-brand-600 text-white shadow-md">
                  <Headphones className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="font-bold text-slate-900 text-lg group-hover:text-brand-700 transition-colors">Linktree rozcestník</h3>
                  <span className="text-xs text-brand-600 font-semibold">Všechny odkazy pohromadě</span>
                </div>
              </div>
              <ExternalLink className="w-5 h-5 text-brand-600" />
            </a>
          </div>
        </div>
      </section>

    </div>
  );
}


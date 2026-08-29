import { motion, useScroll, useTransform, useSpring } from 'motion/react';
import { ArrowRight, ShieldCheck, TrendingUp, Home as HomeIcon, Phone, Mail, Linkedin, Instagram, Headphones, Mic, Sparkles, Award } from 'lucide-react';
import { Link } from 'react-router-dom';
import { teamMembers, getImageUrl } from '../data';
import { ImageWithFallback } from '../components/ImageWithFallback';
import SEO from '../components/SEO';
import AmbientBackground from '../components/animations/AmbientBackground';
import CountUp from '../components/animations/CountUp';
import ScrollReveal from '../components/animations/ScrollReveal';
import TrustBadges from '../components/home/TrustBadges';
import ProcessRoadmap from '../components/home/ProcessRoadmap';
import ReviewsSection from '../components/home/ReviewsSection';
import FaqSection from '../components/home/FaqSection';

export default function Home() {
  const { scrollY } = useScroll();
  const smoothScroll = useSpring(scrollY, { stiffness: 60, damping: 20 });
  
  // Parallax effects for Hero section
  const heroImageY = useTransform(smoothScroll, [0, 800], [0, 180]);
  const heroImageScale = useTransform(smoothScroll, [0, 800], [1, 1.12]);
  const heroTextY = useTransform(smoothScroll, [0, 800], [0, 90]);
  const heroOpacity = useTransform(smoothScroll, [0, 600], [1, 0.2]);

  const homeSchema = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "FinancialService",
        "@id": "https://zfpjagos.cz/#financial-service",
        "name": "ZFP Jagoš & Cábovi",
        "legalName": "ZFP Jagoš & Cábovi, strukturní kancelář ZFP Group, a.s.",
        "url": "https://zfpjagos.cz",
        "logo": "https://zfpjagos.cz/spolecna-2-scaled.webp",
        "image": "https://zfpjagos.cz/spolecna-2-scaled.webp",
        "description": "Přední poradenská kancelář pro komplexní finanční plánování, nezávislé hypotéky, zhodnocení investic a ochranu rodinných rozpočtů. Veselí nad Moravou & Brno.",
        "telephone": "+420606084044",
        "email": "info@zfpjagos.cz",
        "priceRange": "$$",
        "address": {
          "@type": "PostalAddress",
          "streetAddress": "Strukturní kancelář Hutník 1503",
          "addressLocality": "Veselí nad Moravou",
          "postalCode": "698 01",
          "addressCountry": "CZ"
        },
        "geo": {
          "@type": "GeoCoordinates",
          "latitude": "48.9534",
          "longitude": "17.3768"
        },
        "openingHoursSpecification": [
          {
            "@type": "OpeningHoursSpecification",
            "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
            "opens": "08:00",
            "closes": "17:00"
          }
        ],
        "founder": {
          "@type": "Person",
          "name": "Bc. Jaroslav Jagoš, EFA",
          "jobTitle": "Ředitel obchodního týmu a zakladatel",
          "honorificSuffix": "EFA"
        },
        "memberOf": {
          "@type": "Organization",
          "name": "ZFP Group, a.s.",
          "url": "https://www.zfpgroup.cz"
        },
        "sameAs": [
          "https://linktr.ee/FIKOMPAS",
          "https://open.spotify.com/show/7i18QORJT0w3adVnydRWA8",
          "https://www.youtube.com/@financnikompas",
          "https://www.instagram.com/financni_kompas/",
          "https://www.facebook.com/profile.php?id=61567893967623"
        ]
      },
      {
        "@type": "FAQPage",
        "@id": "https://zfpjagos.cz/#faq",
        "mainEntity": [
          {
            "@type": "Question",
            "name": "Proč řešit hypotéku nebo investice s vámi a ne přímo v bance?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Banka vám vždy nabídne pouze své vlastní produkty. My jako nezávislí poradci ZFP Jagoš & Cábovi porovnáme desítky bank a fondů na celém trhu, vyjednáme neveřejné sazby a ušetříme vám desítky hodin času i statisíce korun."
            }
          },
          {
            "@type": "Question",
            "name": "Kolik stojí vaše služby a jak jste odměňováni?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Vstupní konzultace, finanční audit, návrh strategie i sjednání hypotéky nebo investic jsou pro vás zcela bezplatné. Naše odměna je hrazena přímo finančními institucemi standardizovanou provizí."
            }
          },
          {
            "@type": "Question",
            "name": "Jak jsou mé investice chráněny a kde jsou uloženy peníze?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Peníze posíláte výhradně na své osobní účty u regulovaných depozitářů, licencovaných bank a fondů pod přísným dohledem České národní banky (ČNB)."
            }
          }
        ]
      }
    ]
  };

  const services = [
    {
      title: 'Bydlení a hypotéky',
      description: 'Zajistíme nejlepší úroky na trhu a provedeme vás celým procesem bez zbytečného stresu.',
      icon: HomeIcon,
    },
    {
      title: 'Investice a bohatství',
      description: 'Ochráníme vaše peníze před inflací a sestavíme strategii pro jejich dlouhodobý růst.',
      icon: TrendingUp,
    },
    {
      title: 'Ochrana příjmů a rodiny',
      description: 'Zabezpečíme vaši rodinu pro případ nečekaných událostí a výpadku financí.',
      icon: ShieldCheck,
    },
  ];

  const zfpProjects = [
    {
      name: 'Akademia',
      fullName: 'ZFP Akademie',
      logo: '/logo-akademia-web-781eb0c3.webp',
      description: 'Vzdělávání a kurzy finanční gramotnosti',
    },
    {
      name: 'Gold',
      fullName: 'ZFP Gold',
      logo: '/logo-gold-web-d7f7fe84.webp',
      description: 'Investiční zlato a drahé kovy',
    },
    {
      name: 'Hotely',
      fullName: 'ZFP Hotely',
      logo: '/logo-hotely-web-bc8a7acc.webp',
      description: 'Hotelové a kongresové resorty',
    },
    {
      name: 'Investments',
      fullName: 'ZFP Investments',
      logo: '/logo-investments-web-4a0d5d9c.webp',
      description: 'Realitní fond a správa investičních aktiv',
    },
    {
      name: 'Reality',
      fullName: 'ZFP Reality',
      logo: '/logo-reality-web-2-066e7c04.webp',
      description: 'Komplexní realitní zprostředkování',
    },
  ];

  return (
    <div className="bg-white min-h-screen font-sans overflow-x-hidden">
      <SEO 
        title="Komplexní finanční plánování, hypotéky a investice"
        description="Profesionální finanční služby, hypotéky, správa investic a ochrana příjmů pod vedením Bc. Jaroslava Jagoše. ZFP Jagoš & Cábovi – Veselí nad Moravou & Brno."
        canonical="/"
        schema={homeSchema}
      />

      {/* HERO SECTION */}
      <section className="relative bg-slate-950 pt-32 pb-24 lg:pt-48 lg:pb-32 overflow-hidden min-h-[95vh] flex flex-col justify-center border-b border-slate-800">
        {/* Parallax Hero Image */}
        <motion.div 
          style={{ y: heroImageY, scale: heroImageScale }} 
          className="absolute inset-0 will-change-transform"
        >
          <img 
            src="/spolecna-2-scaled.webp?v=1" 
            alt="Tým finančních poradců ZFP Jagoš & Cábovi" 
            className="w-full h-full object-cover object-top opacity-35"
            loading="eager"
            fetchPriority="high"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/60 to-slate-950/40" />
        </motion.div>

        {/* Ambient Moving Mesh Background */}
        <AmbientBackground variant="hero" />

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full mt-12 lg:mt-24 z-10">
          <div className="max-w-4xl mx-auto flex flex-col items-center text-center">
            <motion.div
              style={{ y: heroTextY, opacity: heroOpacity }}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
              className="flex flex-col items-center"
            >
              <Link 
                to="/podcast"
                className="inline-flex items-center px-4 py-2 rounded-full bg-white/10 text-white hover:bg-white/15 font-medium text-sm mb-6 border border-white/20 backdrop-blur-md transition-all hover:scale-105 shadow-lg group"
              >
                <Mic className="w-4 h-4 mr-2 text-brand-400 group-hover:animate-pulse" /> 
                <span>Podcast Finanční Kompas</span>
                <ArrowRight className="w-3.5 h-3.5 ml-2 text-slate-300 group-hover:translate-x-1 transition-transform" />
              </Link>

              <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold tracking-tight text-white leading-[1.08] mb-6">
                Naučíme vás rozumět <br className="hidden sm:inline" />
                <span className="bg-gradient-to-r from-brand-400 via-amber-300 to-orange-400 bg-clip-text text-transparent drop-shadow-sm">
                  vašim penězům
                </span>.
              </h1>

              <p className="text-lg sm:text-xl text-slate-300 mb-10 max-w-2xl leading-relaxed text-shadow-sm">
                ZFP Jagoš & Cábovi. Jsme jednou z největších vzdělávacích a zprostředkovatelských společností v oblasti financí. Zvyšujeme finanční gramotnost v ČR.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto">
                <Link
                  to="/kontakt"
                  className="inline-flex items-center justify-center px-8 py-4 text-base font-semibold rounded-xl text-slate-950 bg-gradient-to-r from-brand-400 to-amber-400 hover:from-brand-300 hover:to-amber-300 transition-all shadow-xl shadow-brand-500/25 hover:shadow-brand-500/40 hover:scale-[1.02] w-full sm:w-auto"
                >
                  Sjednat schůzku
                  <ArrowRight className="ml-2 w-5 h-5" />
                </Link>
                <Link
                  to="/tym"
                  className="inline-flex items-center justify-center px-8 py-4 border border-white/20 text-base font-semibold rounded-xl text-white bg-white/5 hover:bg-white/10 backdrop-blur-md transition-all hover:scale-[1.02] w-full sm:w-auto"
                >
                  Poznat náš tým
                </Link>
              </div>
              
              {/* Animated Stat Tickers */}
              <div className="grid grid-cols-2 md:grid-cols-4 gap-6 sm:gap-8 mt-16 pt-10 border-t border-white/10 w-full">
                <div className="bg-white/5 backdrop-blur-sm p-4 rounded-2xl border border-white/5">
                  <p className="text-3xl sm:text-4xl font-extrabold text-white">
                    <CountUp to={12500} suffix="+" />
                  </p>
                  <p className="text-xs sm:text-sm font-medium text-slate-300 mt-1">Spokojených klientů</p>
                </div>
                <div className="bg-white/5 backdrop-blur-sm p-4 rounded-2xl border border-white/5">
                  <p className="text-3xl sm:text-4xl font-extrabold text-white">
                    <CountUp to={350} suffix=" mil.+" />
                  </p>
                  <p className="text-xs sm:text-sm font-medium text-slate-300 mt-1">Kč ve správě</p>
                </div>
                <div className="bg-white/5 backdrop-blur-sm p-4 rounded-2xl border border-white/5">
                  <p className="text-3xl sm:text-4xl font-extrabold text-white">
                    <CountUp to={17} suffix=" let" />
                  </p>
                  <p className="text-xs sm:text-sm font-medium text-slate-300 mt-1">Praxe v oboru</p>
                </div>
                <div className="bg-white/5 backdrop-blur-sm p-4 rounded-2xl border border-white/5">
                  <p className="text-3xl sm:text-4xl font-extrabold text-white">
                    <CountUp to={30} suffix=" let" />
                  </p>
                  <p className="text-xs sm:text-sm font-medium text-slate-300 mt-1">Historie ZFP</p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* TRUST & CREDENTIALS BADGES */}
      <TrustBadges />

      {/* ABOUT ME SECTION */}
      <section id="o-mne" className="py-24 bg-slate-50 border-b border-slate-100 relative overflow-hidden">
        <AmbientBackground variant="light" />
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-stretch">
            <ScrollReveal direction="left" className="lg:col-span-5 flex flex-col justify-center">
              <span className="text-xs font-bold tracking-widest text-brand-600 uppercase mb-2">O našem týmu</span>
              <h2 className="text-4xl font-bold text-slate-900 tracking-tight mb-8">ZFP Jagoš & Cábovi</h2>
              <div className="space-y-6 text-lg text-slate-600 leading-relaxed">
                <p>
                  Věříme, že finanční plánování není o složitých tabulkách a nesrozumitelných grafech. Je to o vašich životních cílech, snech a o vaší rodině. Naším úkolem je vytvořit pro vás bezpečné prostředí, ve kterém mohou vaše finance stabilně růst, zatímco vy se věnujete tomu, co vás naplňuje.
                </p>
                <p>
                  Zakládáme si na spolehlivosti, profesionálním, ale především lidském přístupu. Díky našim dlouholetým zkušenostem hledáme na trhu řešení, která dávají smysl výhradně vám. Naše práce je postavena na naprosté transparentnosti a dlouhodobém partnerství s našimi klienty.
                </p>
                <p>
                  Náš tým ZFP Jagoš & Cábovi, coby hrdý člen skupiny ZFP Group, a.s., vám pomůže k tomu, abyste ze svých peněz měli opravdové maximum. Od hypoték, přes ochranu majetku, až po investice.
                </p>
              </div>
              <div className="mt-10 pt-8 border-t border-slate-200 mt-auto">
                <p className="text-xl font-bold text-slate-900">Bc. Jaroslav Jagoš, EFA</p>
                <p className="text-brand-600 font-medium">Ředitel obchodního týmu a zakladatel</p>
              </div>
            </ScrollReveal>

            <ScrollReveal direction="right" delay={0.2} className="lg:col-span-7 relative rounded-3xl overflow-hidden shadow-2xl min-h-[420px] group">
              <img 
                src={getImageUrl("/HRK 1/Jaroslav Jagoš/WEB/DSC_4937.webp")} 
                alt="Bc. Jaroslav Jagoš, EFA – ředitel obchodního týmu ZFP Jagoš & Cábovi" 
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" 
                loading="lazy"
                width="800"
                height="600"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950/70 via-transparent to-transparent" />
              <div className="absolute bottom-6 left-6 right-6 text-white p-4 rounded-2xl bg-slate-900/60 backdrop-blur-md border border-white/10">
                <p className="text-sm italic text-slate-200">"Kdo je připraven, není překvapen. Plánování je základem klidného života."</p>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* RELATED PROJECTS LOGOS */}
      <section className="py-20 bg-white border-b border-slate-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollReveal direction="up" className="text-center mb-12">
            <h3 className="text-xs font-bold tracking-widest text-brand-600 uppercase mb-2">Skupina ZFP Group</h3>
            <h2 className="text-3xl font-bold text-slate-900">Projekty skupiny ZFP Group, a.s.</h2>
            <p className="text-slate-500 text-sm mt-2 max-w-2xl mx-auto">
              Silné zázemí mateřské skupiny spojuje vzdělávání, investice, drahé kovy, reality i hotelnictví.
            </p>
          </ScrollReveal>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
            {zfpProjects.map((project, idx) => (
              <ScrollReveal 
                key={project.name}
                delay={idx * 0.08}
                direction="up"
                className="bg-slate-50/70 hover:bg-white rounded-2xl p-6 border border-slate-100 hover:border-brand-300 hover:shadow-xl transition-all duration-300 flex flex-col items-center text-center justify-between group hover:-translate-y-1.5"
              >
                <div className="h-16 w-full flex items-center justify-center mb-4">
                  <img 
                    src={project.logo} 
                    alt={project.fullName} 
                    width="140" 
                    height="50" 
                    loading="lazy" 
                    className="max-h-12 w-auto object-contain transition-transform duration-300 group-hover:scale-110" 
                  />
                </div>
                <div>
                  <h3 className="font-bold text-slate-900 text-base mb-1 group-hover:text-brand-600 transition-colors">{project.name}</h3>
                  <p className="text-xs text-slate-500 leading-relaxed">{project.description}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* SERVICES SECTION */}
      <section className="py-24 bg-white border-b border-slate-100 relative overflow-hidden">
        <AmbientBackground variant="light" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <ScrollReveal direction="up" className="text-center max-w-2xl mx-auto mb-16">
            <span className="text-xs font-bold tracking-widest text-brand-600 uppercase mb-2 block">Finanční servis</span>
            <h2 className="text-4xl font-bold text-slate-900 tracking-tight mb-4">Oblasti spolupráce</h2>
            <p className="text-lg text-slate-600">Komplexní přístup k vašim osobním i rodinným financím.</p>
          </ScrollReveal>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {services.map((service, i) => (
              <ScrollReveal
                key={i} 
                delay={i * 0.12}
                direction="up"
                className="group p-8 rounded-3xl bg-white border border-slate-200/80 hover:border-brand-300 hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 flex flex-col justify-between"
              >
                <div>
                  <div className="w-14 h-14 rounded-2xl bg-brand-50 border border-brand-100 flex items-center justify-center mb-6 group-hover:bg-brand-500 group-hover:text-white transition-all duration-300 shadow-sm group-hover:scale-110">
                    <service.icon className="h-7 w-7 text-brand-600 group-hover:text-white transition-colors" />
                  </div>
                  <h3 className="text-2xl font-bold text-slate-900 mb-3 group-hover:text-brand-600 transition-colors">{service.title}</h3>
                  <p className="text-slate-600 leading-relaxed mb-6">
                    {service.description}
                  </p>
                </div>
                <Link to="/sluzby" className="inline-flex items-center text-sm font-semibold text-brand-600 group-hover:text-brand-700">
                  Zjistit více <ArrowRight className="ml-1.5 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </Link>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* HOW WE WORK / PROCESS ROADMAP */}
      <ProcessRoadmap />

      {/* TEAM / GRID LAYOUT SECTION */}
      <section className="py-24 bg-slate-50 border-b border-slate-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollReveal direction="up" className="text-center max-w-2xl mx-auto mb-16">
            <span className="text-xs font-bold tracking-widest text-brand-600 uppercase mb-2 block">Naši specialisté</span>
            <h2 className="text-4xl font-bold text-slate-900 tracking-tight mb-4">Náš tým ZFP Jagoš & Cábovi</h2>
            <p className="text-lg text-slate-600">Spolehlivost, profesionální a lidský přístup, dlouholeté zkušenosti.</p>
          </ScrollReveal>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {teamMembers.map((member, idx) => (
              <ScrollReveal
                key={member.id} 
                delay={(idx % 3) * 0.1}
                direction="up"
                className="bg-white rounded-3xl p-6 border border-slate-200/80 hover:border-brand-300 hover:shadow-xl transition-all duration-300 flex flex-col justify-between hover:-translate-y-1.5"
              >
                <div>
                  <Link to={`/tym/${member.id}`} className="block aspect-[3/4] rounded-2xl overflow-hidden mb-6 bg-slate-100 group relative shadow-inner">
                    <ImageWithFallback 
                      src={getImageUrl(member.imageUrl)} 
                      alt={`Portrét: ${member.name}`} 
                      name={member.name} 
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" 
                      loading="lazy"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-900/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end p-4">
                      <span className="text-white text-xs font-semibold flex items-center">
                        Zobrazit profil <ArrowRight className="w-3.5 h-3.5 ml-1" />
                      </span>
                    </div>
                  </Link>
                  <Link to={`/tym/${member.id}`} className="block">
                    <h3 className="text-xl font-bold text-slate-900 mb-1 hover:text-brand-600 transition-colors">{member.name}</h3>
                  </Link>
                  <p className="text-brand-600 font-medium text-sm mb-4">{member.role}</p>
                  <p className="text-slate-500 text-sm line-clamp-3 mb-6 leading-relaxed">{member.bio}</p>
                </div>
                <div className="flex items-center gap-2 pt-6 border-t border-slate-50">
                  <a href={`tel:${member.phone?.replace(/\s+/g, '')}`} aria-label={`Zavolat: ${member.name}`} className="w-10 h-10 rounded-full bg-slate-50 hover:bg-brand-50 hover:text-brand-600 text-slate-500 flex items-center justify-center transition-colors" title="Zavolat">
                    <Phone className="w-4 h-4" />
                  </a>
                  <a href={`mailto:${member.email}`} aria-label={`Napsat e-mail: ${member.name}`} className="w-10 h-10 rounded-full bg-slate-50 hover:bg-brand-50 hover:text-brand-600 text-slate-500 flex items-center justify-center transition-colors" title="Napsat e-mail">
                    <Mail className="w-4 h-4" />
                  </a>
                  {member.socials?.linkedin && (
                    <a href={member.socials.linkedin} target="_blank" rel="noreferrer noopener" aria-label={`LinkedIn profil: ${member.name}`} className="w-10 h-10 rounded-full bg-slate-50 hover:bg-brand-50 hover:text-brand-600 text-slate-500 flex items-center justify-center transition-colors" title="LinkedIn">
                      <Linkedin className="w-4 h-4" />
                    </a>
                  )}
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* CLIENT REVIEWS / SOCIAL PROOF */}
      <ReviewsSection />

      {/* FREQUENTLY ASKED QUESTIONS */}
      <FaqSection />

      {/* QUICK LINKS / LINKTREE SECTION */}
      <section className="py-24 bg-slate-50 border-t border-slate-100">
        <div className="max-w-md mx-auto px-4 text-center">
          <div className="w-24 h-24 mx-auto rounded-full overflow-hidden mb-6 shadow-md border-4 border-white bg-slate-100">
            <img 
              src={getImageUrl("/HRK 1/Jaroslav Jagoš/WEB/DSC_4937.webp")} 
              alt="Bc. Jaroslav Jagoš, EFA" 
              className="w-full h-full object-cover" 
              width="96" 
              height="96" 
              loading="lazy"
            />
          </div>
          <h2 className="text-2xl font-bold text-slate-900 tracking-tight mb-1">Bc. Jaroslav Jagoš, EFA</h2>
          <p className="text-brand-600 mb-8 font-medium text-sm">ZFP Jagoš & Cábovi</p>
          
          <div className="space-y-3.5">
            <a 
              href="https://open.spotify.com/show/7i18QORJT0w3adVnydRWA8?si=c215363f2f6248cb" 
              target="_blank" 
              rel="noreferrer noopener" 
              className="flex items-center justify-between w-full py-3.5 px-6 rounded-2xl bg-[#1DB954] hover:bg-[#1aa34a] text-white font-semibold transition-all shadow-md hover:scale-[1.02]"
            >
              <div className="flex items-center">
                <svg className="w-5 h-5 fill-current mr-3" viewBox="0 0 24 24">
                  <path d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm5.485 17.306c-.215.353-.674.464-1.027.249-2.812-1.718-6.353-2.107-10.523-1.155-.403.092-.807-.16-.899-.562-.092-.403.16-.807.562-.899 4.568-1.044 8.487-.6 11.638 1.34.353.215.464.674.249 1.027zm1.464-3.26c-.27.441-.849.58-1.29.31-3.219-1.978-8.127-2.55-11.933-1.394-.499.151-1.028-.135-1.18-.633-.151-.498.135-1.028.633-1.18 4.354-1.321 9.774-.682 13.46 1.587.441.27.58.849.31 1.29zm.125-3.398C15.22 8.358 8.864 8.147 5.16 9.272c-.596.181-1.229-.16-1.41-.756-.181-.596.16-1.229.756-1.41 4.254-1.291 11.277-1.047 15.688 1.572.535.317.709 1.011.392 1.546-.317.534-1.011.708-1.512.024z"/>
                </svg>
                <span>Spotify – Finanční kompas</span>
              </div>
              <span className="text-xs bg-white/20 px-2 py-0.5 rounded-full">Přehrát</span>
            </a>

            <a 
              href="https://podcasts.apple.com/cz/podcast/finan%C4%8Dn%C3%AD-kompas/id1709173811" 
              target="_blank" 
              rel="noreferrer noopener" 
              className="flex items-center justify-between w-full py-3.5 px-6 rounded-2xl bg-[#872EC4] hover:bg-[#7724b0] text-white font-semibold transition-all shadow-md hover:scale-[1.02]"
            >
              <div className="flex items-center">
                <svg className="w-5 h-5 fill-current mr-3" viewBox="0 0 24 24">
                  <path d="M12 0C5.372 0 0 5.372 0 12c0 6.627 5.372 12 12 12s12-5.373 12-12c0-6.628-5.372-12-12-12zm0 3.692a8.31 8.31 0 0 1 8.308 8.308c0 3.324-1.947 6.195-4.757 7.508l-1.31-2.27a5.69 5.69 0 0 0 3.45-5.238 5.692 5.692 0 1 0-11.383 0c0 2.298 1.36 4.279 3.326 5.192l-1.31 2.27A8.307 8.307 0 0 1 3.692 12 8.31 8.31 0 0 1 12 3.692zm0 4.923a3.385 3.385 0 0 1 3.385 3.385c0 1.34-.78 2.502-1.91 3.05l-1.475 2.553-1.475-2.553a3.382 3.382 0 0 1-1.91-3.05A3.385 3.385 0 0 1 12 8.615z"/>
                </svg>
                <span>Apple Podcasts</span>
              </div>
              <span className="text-xs bg-white/20 px-2 py-0.5 rounded-full">Podcast</span>
            </a>

            <a 
              href="https://www.youtube.com/@financnikompas" 
              target="_blank" 
              rel="noreferrer noopener" 
              className="flex items-center justify-between w-full py-3.5 px-6 rounded-2xl bg-[#FF0000] hover:bg-[#e00000] text-white font-semibold transition-all shadow-md hover:scale-[1.02]"
            >
              <div className="flex items-center">
                <svg className="w-5 h-5 fill-current mr-3" viewBox="0 0 24 24">
                  <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
                </svg>
                <span>YouTube @financnikompas</span>
              </div>
              <span className="text-xs bg-white/20 px-2 py-0.5 rounded-full">Video</span>
            </a>

            <a 
              href="https://www.instagram.com/financni_kompas/" 
              target="_blank" 
              rel="noreferrer noopener" 
              className="flex items-center justify-between w-full py-3.5 px-6 rounded-2xl bg-gradient-to-r from-[#833ab4] via-[#fd1d1d] to-[#fcb045] hover:opacity-95 text-white font-semibold transition-all shadow-md hover:scale-[1.02]"
            >
              <div className="flex items-center">
                <svg className="w-5 h-5 fill-current mr-3" viewBox="0 0 24 24">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                </svg>
                <span>Instagram @financni_kompas</span>
              </div>
              <span className="text-xs bg-white/20 px-2 py-0.5 rounded-full">Reels</span>
            </a>

            <a 
              href="https://linktr.ee/FIKOMPAS" 
              target="_blank" 
              rel="noreferrer noopener" 
              className="flex items-center justify-between w-full py-3.5 px-6 rounded-2xl bg-white border border-slate-200 text-slate-800 hover:bg-slate-50 font-semibold transition-all shadow-xs hover:scale-[1.02]"
            >
              <div className="flex items-center">
                <Headphones className="w-5 h-5 text-brand-600 mr-3" />
                <span>Linktree – Všechny odkazy</span>
              </div>
              <ArrowRight className="w-4 h-4 text-slate-400" />
            </a>

            <Link 
              to="/kontakt" 
              className="flex items-center justify-center w-full py-3.5 px-6 rounded-2xl bg-slate-900 hover:bg-slate-800 text-white font-semibold transition-all shadow-md hover:scale-[1.02] mt-4"
            >
              <span>Sjednat nezávaznou konzultaci</span>
              <ArrowRight className="w-4 h-4 ml-2" />
            </Link>
          </div>
        </div>
      </section>

    </div>
  );
}

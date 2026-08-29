import { motion } from 'motion/react';
import { Link } from 'react-router-dom';
import { teamMembers, getImageUrl } from '../data';
import { ImageWithFallback } from '../components/ImageWithFallback';
import { ArrowRight, Users, Sparkles } from 'lucide-react';
import SEO from '../components/SEO';
import AmbientBackground from '../components/animations/AmbientBackground';
import ScrollReveal from '../components/animations/ScrollReveal';

export default function Team() {
  const teamSchema = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    "name": "Tým finančních specialistů ZFP Jagoš & Cábovi",
    "numberOfItems": teamMembers.length,
    "itemListElement": teamMembers.map((member, index) => ({
      "@type": "ListItem",
      "position": index + 1,
      "item": {
        "@type": "Person",
        "name": member.name,
        "jobTitle": member.role,
        "email": member.email,
        "telephone": member.phone,
        "url": `https://zfpjagos.cz/tym/${member.id}`
      }
    }))
  };

  return (
    <div className="bg-white min-h-screen overflow-x-hidden">
      <SEO 
        title="Náš tým finančních poradců a specialistů"
        description="Poznejte tým finančních profesionálů ZFP Jagoš & Cábovi. Osobní přístup, dlouholetá praxe a férové jednání ve Veselí nad Moravou, Brně a okolí."
        canonical="/tym"
        schema={teamSchema}
      />
      
      {/* Header */}
      <section className="bg-slate-900 py-24 lg:py-32 border-b border-slate-800 text-white relative overflow-hidden">
        <AmbientBackground variant="hero" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div className="inline-flex items-center px-4 py-1.5 rounded-full bg-brand-500/10 text-brand-400 font-semibold text-xs uppercase tracking-wider mb-6 border border-brand-500/20 backdrop-blur-sm">
              <Users className="w-3.5 h-3.5 mr-2" /> Specialisté ZFP Jagoš & Cábovi
            </div>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6 tracking-tight">
              Poznejte náš <span className="bg-gradient-to-r from-brand-400 to-amber-300 bg-clip-text text-transparent">tým</span>
            </h1>
            <p className="text-lg sm:text-xl text-slate-300 max-w-3xl mx-auto leading-relaxed">
              Jsme skupina profesionálů, kteří spojili své síly, aby vám poskytli ty nejlepší služby v oblasti financí. Zakládáme si na odbornosti a lidském přístupu.
            </p>
          </motion.div>
        </div>
      </section>

      <section className="py-24 relative overflow-hidden">
        <AmbientBackground variant="light" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {teamMembers.map((member, index) => (
              <ScrollReveal
                key={member.id}
                delay={(index % 3) * 0.1}
                direction="up"
                className="group flex flex-col bg-white p-6 rounded-3xl border border-slate-200/80 hover:border-brand-300 hover:shadow-xl transition-all duration-300 hover:-translate-y-1.5 justify-between"
              >
                <div>
                  <Link to={`/tym/${member.id}`} className="block relative overflow-hidden rounded-2xl aspect-[3/4] mb-6 bg-slate-100 shadow-inner">
                    <ImageWithFallback 
                      src={getImageUrl(member.imageUrl)} 
                      alt={member.name} 
                      name={member.name}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-slate-900/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-6">
                      <span className="text-white font-semibold text-sm flex items-center gap-2">
                        Zobrazit profil <ArrowRight className="w-4 h-4" />
                      </span>
                    </div>
                  </Link>
                  
                  <Link to={`/tym/${member.id}`} className="block">
                    <h2 className="text-2xl font-bold text-slate-900 mb-1 group-hover:text-brand-600 transition-colors">{member.name}</h2>
                  </Link>
                  <p className="text-brand-600 font-medium mb-4 text-sm">{member.role}</p>
                  
                  {member.quote && (
                    <div className="bg-slate-50 p-4 rounded-2xl relative border border-slate-100 mb-4">
                      <div className="absolute -top-3 left-4 text-3xl text-slate-300 font-serif leading-none">“</div>
                      <p className="text-slate-600 italic text-xs relative z-10 leading-relaxed pt-1">
                        {member.quote}
                      </p>
                    </div>
                  )}
                </div>
              </ScrollReveal>
            ))}
          </div>
          
          {/* Recruitment Callout */}
          <ScrollReveal direction="up" className="mt-32 bg-slate-900 rounded-3xl p-8 md:p-14 text-center text-white relative overflow-hidden border border-slate-800 shadow-2xl">
            <AmbientBackground variant="hero" />
            <div className="relative z-10 max-w-2xl mx-auto">
              <span className="text-xs font-bold tracking-widest text-brand-400 uppercase mb-3 block">Příležitost</span>
              <h2 className="text-3xl sm:text-4xl font-bold mb-4 tracking-tight">Hledáte novou kariérní výzvu?</h2>
              <p className="text-slate-300 mb-8 leading-relaxed">
                Stále rozšiřujeme náš tým ZFP Jagoš & Cábovi o lidi, kteří chtějí dělat finance jinak – poctivě, srozumitelně a s důrazem na dlouhodobý vztah s klientem.
              </p>
              <Link 
                to="/kariera" 
                className="inline-flex items-center justify-center px-8 py-4 text-base font-semibold rounded-xl text-slate-950 bg-brand-400 hover:bg-brand-300 transition-all shadow-lg hover:scale-105"
              >
                Kariéra u nás <ArrowRight className="ml-2 w-5 h-5" />
              </Link>
            </div>
          </ScrollReveal>
        </div>
      </section>
    </div>
  );
}

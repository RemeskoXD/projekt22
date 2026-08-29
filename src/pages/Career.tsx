import { motion } from 'motion/react';
import { Target, Users, BookOpen, Handshake, CheckCircle, AlertCircle, Sparkles, Briefcase } from 'lucide-react';
import React, { useState } from 'react';
import SEO from '../components/SEO';
import AmbientBackground from '../components/animations/AmbientBackground';
import ScrollReveal from '../components/animations/ScrollReveal';

export default function Career() {
  const [formData, setFormData] = useState({ name: '', email: '', phone: '', message: '' });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');
  const [errors, setErrors] = useState<Record<string, string>>({});

  const validate = () => {
    const newErrors: Record<string, string> = {};
    if (!formData.name.trim()) newErrors.name = 'Jméno je povinné';
    if (!formData.email.trim() || !/^\S+@\S+\.\S+$/.test(formData.email)) newErrors.email = 'Zadejte platný e-mail';
    if (!formData.phone.trim() || !/^(\+420)? ?[1-9][0-9]{2} ?[0-9]{3} ?[0-9]{3}$/.test(formData.phone)) newErrors.phone = 'Zadejte platné telefonní číslo';
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;
    
    setIsSubmitting(true);
    setSubmitStatus('idle');

    try {
      // Simulate network submission (ready for API integration)
      await new Promise(resolve => setTimeout(resolve, 1000));
      setSubmitStatus('success');
      setFormData({ name: '', email: '', phone: '', message: '' });
    } catch (err) {
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  const benefits = [
    {
      title: 'Svoboda a nezávislost',
      description: 'Pracujete pro sebe, ale nikdy nejste sami. Podporujeme vaši samostatnost s plným zázemím.',
      icon: Target,
    },
    {
      title: 'Vzdělávání',
      description: 'Zajistíme vám kompletní zaškolení, certifikace a pravidelný osobnostní i profesní růst.',
      icon: BookOpen,
    },
    {
      title: 'Týmová podpora',
      description: 'Zázemí zkušeného týmu, který vám pomůže v začátcích i při řešení složitých případů.',
      icon: Users,
    },
    {
      title: 'Férové podmínky',
      description: 'Transparentní systém odměňování a jasně daná pravidla spolupráce bez skrytých háčků.',
      icon: Handshake,
    },
  ];

  return (
    <div className="bg-white min-h-screen overflow-x-hidden">
      <SEO 
        title="Kariéra ve financích – Přidejte se k našemu týmu"
        description="Hledáte novou kariérní výzvu ve financích? Nabízíme špičkové zázemí, férové odměňování a systematické vzdělávání v týmu ZFP Jagoš & Cábovi."
        canonical="/kariera"
      />
      
      {/* Hero */}
      <section className="bg-slate-900 py-24 lg:py-32 border-b border-slate-800 text-white relative overflow-hidden">
        <AmbientBackground variant="hero" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div className="inline-flex items-center px-4 py-1.5 rounded-full bg-brand-500/10 text-brand-400 font-semibold text-xs uppercase tracking-wider mb-6 border border-brand-500/20 backdrop-blur-sm">
              <Briefcase className="w-3.5 h-3.5 mr-2" /> Kariérní růst a spolupráce
            </div>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6 tracking-tight">
              Přidejte se <span className="bg-gradient-to-r from-brand-400 to-amber-300 bg-clip-text text-transparent">k nám</span>
            </h1>
            <p className="text-lg sm:text-xl text-slate-300 max-w-3xl mx-auto leading-relaxed">
              Hledáme kolegy, kteří chtějí dělat finance jinak. Dlouhodobě, kvalitně a s důrazem na skutečné potřeby klienta.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Why join us */}
      <section className="py-24 relative overflow-hidden">
        <AmbientBackground variant="light" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-24">
            {benefits.map((benefit, index) => (
              <ScrollReveal
                key={benefit.title}
                delay={index * 0.1}
                direction="up"
                className="bg-white p-8 rounded-3xl border border-slate-200/80 shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-1.5 flex flex-col justify-between"
              >
                <div>
                  <div className="w-14 h-14 bg-brand-50 border border-brand-100 rounded-2xl flex items-center justify-center mb-6 text-brand-600 shadow-xs">
                    <benefit.icon className="w-7 h-7" />
                  </div>
                  <h2 className="text-xl font-bold text-slate-900 mb-3">{benefit.title}</h2>
                  <p className="text-slate-600 leading-relaxed text-sm">{benefit.description}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>

          {/* Form */}
          <ScrollReveal direction="up" className="max-w-3xl mx-auto bg-slate-900 rounded-3xl p-8 md:p-12 text-white shadow-2xl relative overflow-hidden border border-slate-800">
            <AmbientBackground variant="hero" />
            <div className="relative z-10">
            <div className="text-center mb-10">
              <h2 className="text-3xl font-bold mb-4">Dejte nám o sobě vědět</h2>
              <p className="text-slate-400">Vyplňte krátký formulář a my se vám ozveme ohledně nezávazné schůzky.</p>
            </div>
            
            <form className="space-y-6" onSubmit={handleSubmit}>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-slate-300 mb-2">Jméno a příjmení *</label>
                  <input 
                    type="text" 
                    id="name" 
                    value={formData.name}
                    onChange={(e) => setFormData({...formData, name: e.target.value})}
                    className={`w-full bg-slate-800 border ${errors.name ? 'border-red-500' : 'border-slate-700'} rounded-lg px-4 py-3 text-white focus:outline-none focus:ring-2 focus:ring-brand-500`} 
                    placeholder="Jan Novák" 
                  />
                  {errors.name && <p className="text-red-400 text-sm mt-1">{errors.name}</p>}
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-slate-300 mb-2">E-mail *</label>
                  <input 
                    type="email" 
                    id="email" 
                    value={formData.email}
                    onChange={(e) => setFormData({...formData, email: e.target.value})}
                    className={`w-full bg-slate-800 border ${errors.email ? 'border-red-500' : 'border-slate-700'} rounded-lg px-4 py-3 text-white focus:outline-none focus:ring-2 focus:ring-brand-500`} 
                    placeholder="jan@novak.cz" 
                  />
                  {errors.email && <p className="text-red-400 text-sm mt-1">{errors.email}</p>}
                </div>
              </div>
              
              <div>
                <label htmlFor="phone" className="block text-sm font-medium text-slate-300 mb-2">Telefon *</label>
                <input 
                  type="tel" 
                  id="phone" 
                  value={formData.phone}
                  onChange={(e) => setFormData({...formData, phone: e.target.value})}
                  className={`w-full bg-slate-800 border ${errors.phone ? 'border-red-500' : 'border-slate-700'} rounded-lg px-4 py-3 text-white focus:outline-none focus:ring-2 focus:ring-brand-500`} 
                  placeholder="+420 123 456 789" 
                />
                {errors.phone && <p className="text-red-400 text-sm mt-1">{errors.phone}</p>}
              </div>
              
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-slate-300 mb-2">Něco o vás (nepovinné)</label>
                <textarea 
                  id="message" 
                  rows={4} 
                  value={formData.message}
                  onChange={(e) => setFormData({...formData, message: e.target.value})}
                  className="w-full bg-slate-800 border border-slate-700 rounded-lg px-4 py-3 text-white focus:outline-none focus:ring-2 focus:ring-brand-500" 
                  placeholder="Napište nám pár vět..."
                ></textarea>
              </div>
              
              {submitStatus === 'success' && (
                <div className="bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 p-4 rounded-lg flex items-center">
                  <CheckCircle className="w-5 h-5 mr-3 shrink-0" />
                  Děkujeme! Váš zájem byl úspěšně odeslán. Brzy se vám ozveme.
                </div>
              )}

              {submitStatus === 'error' && (
                <div className="bg-red-500/10 border border-red-500/20 text-red-400 p-4 rounded-lg flex items-center">
                  <AlertCircle className="w-5 h-5 mr-3 shrink-0" />
                  Něco se pokazilo. Zkuste to prosím znovu nebo nám zavolejte.
                </div>
              )}

              <button 
                type="submit" 
                disabled={isSubmitting}
                className="w-full bg-brand-600 hover:bg-brand-700 disabled:opacity-50 disabled:cursor-not-allowed text-white font-medium py-4 px-6 rounded-lg transition-colors flex justify-center items-center"
              >
                {isSubmitting ? (
                  <>
                    <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                    </svg>
                    Odesílám...
                  </>
                ) : 'Odeslat nezávazný zájem'}
              </button>
            </form>
            </div>
          </ScrollReveal>
        </div>
      </section>

    </div>
  );
}

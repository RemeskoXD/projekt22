import React, { useState } from 'react';
import { motion } from 'motion/react';
import { Mail, Phone, MapPin, Clock, CheckCircle, AlertCircle, MessageSquare } from 'lucide-react';
import SEO from '../components/SEO';
import AmbientBackground from '../components/animations/AmbientBackground';
import ScrollReveal from '../components/animations/ScrollReveal';

export default function Contact() {
  const [formData, setFormData] = useState({ name: '', email: '', phone: '', message: '' });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');
  const [errors, setErrors] = useState<Record<string, string>>({});

  const validate = () => {
    const newErrors: Record<string, string> = {};
    if (!formData.name.trim()) newErrors.name = 'Jméno je povinné pole';
    if (!formData.email.trim() || !/^\S+@\S+\.\S+$/.test(formData.email)) newErrors.email = 'Zadejte platný e-mail';
    if (!formData.phone.trim() || !/^(\+420)? ?[1-9][0-9]{2} ?[0-9]{3} ?[0-9]{3}$/.test(formData.phone)) newErrors.phone = 'Zadejte platné telefonní číslo (např. +420 606 084 044)';
    if (!formData.message.trim()) newErrors.message = 'Napište nám prosím krátkou zprávu';
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;
    
    setIsSubmitting(true);
    setSubmitStatus('idle');

    try {
      // Simulate network request (ready for backend endpoint)
      await new Promise(resolve => setTimeout(resolve, 1000));
      setSubmitStatus('success');
      setFormData({ name: '', email: '', phone: '', message: '' });
    } catch (err) {
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  const contactSchema = {
    "@context": "https://schema.org",
    "@type": "ContactPage",
    "name": "Kontakt – ZFP Jagoš & Cábovi",
    "description": "Sjednejte si nezávaznou konzultaci s naším týmem finančních poradců.",
    "url": "https://zfpjagos.cz/kontakt",
    "mainEntity": {
      "@type": "FinancialService",
      "name": "ZFP Jagoš & Cábovi",
      "telephone": "+420606084044",
      "email": "info@zfpjagos.cz",
      "address": {
        "@type": "PostalAddress",
        "streetAddress": "Strukturní kancelář Hutník 1503",
        "addressLocality": "Veselí nad Moravou",
        "postalCode": "698 01",
        "addressCountry": "CZ"
      }
    }
  };

  return (
    <div className="bg-white min-h-screen overflow-x-hidden">
      <SEO 
        title="Kontakt a sjednání schůzky"
        description="Kontaktujte kancelář ZFP Jagoš & Cábovi ve Veselí nad Moravou. Telefon: +420 606 084 044, e-mail: info@zfpjagos.cz. Sjednejte si nezávaznou konzultaci."
        canonical="/kontakt"
        schema={contactSchema}
      />

      {/* Hero Section */}
      <section className="relative py-24 lg:py-32 bg-slate-900 overflow-hidden border-b border-slate-800 text-white">
        <div className="absolute inset-0">
          <img
            className="w-full h-full object-cover opacity-20"
            src="/jagosorez.webp?v=1"
            alt="Kancelář finančních poradců ZFP Jagoš & Cábovi"
            loading="eager"
            width="1200"
            height="400"
          />
          <div className="absolute inset-0 bg-slate-900/70" />
        </div>
        <AmbientBackground variant="hero" />

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div className="inline-flex items-center px-4 py-1.5 rounded-full bg-brand-500/10 text-brand-400 font-semibold text-xs uppercase tracking-wider mb-6 border border-brand-500/20 backdrop-blur-sm">
              <MessageSquare className="w-3.5 h-3.5 mr-2" /> Osobní i online konzultace
            </div>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-white mb-6">
              Sjednat <span className="bg-gradient-to-r from-brand-400 to-amber-300 bg-clip-text text-transparent">schůzku</span>
            </h1>
            <p className="text-lg sm:text-xl text-slate-300 max-w-2xl mx-auto leading-relaxed">
              Rádi se s vámi setkáme a nezávazně probereme vaše finanční plány a životní cíle.
            </p>
          </motion.div>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-24 relative">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
          {/* Contact Info */}
          <ScrollReveal direction="left">
            <h2 className="text-3xl font-bold text-slate-900 mb-8">Kde nás najdete</h2>
            <div className="space-y-6">
              <div className="flex items-start p-4 rounded-2xl bg-slate-50 border border-slate-100">
                <div className="w-12 h-12 rounded-xl bg-brand-50 text-brand-600 flex items-center justify-center shrink-0">
                  <MapPin className="h-6 w-6" aria-hidden="true" />
                </div>
                <div className="ml-4">
                  <h3 className="text-lg font-bold text-slate-900">Kancelář Veselí nad Moravou</h3>
                  <p className="mt-1 text-slate-600">
                    Strukturní kancelář Hutník 1503<br />
                    698 01 Veselí nad Moravou
                  </p>
                </div>
              </div>

              <div className="flex items-start p-4 rounded-2xl bg-slate-50 border border-slate-100">
                <div className="w-12 h-12 rounded-xl bg-brand-50 text-brand-600 flex items-center justify-center shrink-0">
                  <Phone className="h-6 w-6" aria-hidden="true" />
                </div>
                <div className="ml-4">
                  <h3 className="text-lg font-bold text-slate-900">Telefon</h3>
                  <p className="mt-1 text-slate-600">
                    <a href="tel:+420606084044" className="hover:text-brand-600 font-semibold transition-colors">+420 606 084 044</a>
                  </p>
                </div>
              </div>

              <div className="flex items-start p-4 rounded-2xl bg-slate-50 border border-slate-100">
                <div className="w-12 h-12 rounded-xl bg-brand-50 text-brand-600 flex items-center justify-center shrink-0">
                  <Mail className="h-6 w-6" aria-hidden="true" />
                </div>
                <div className="ml-4">
                  <h3 className="text-lg font-bold text-slate-900">E-mail</h3>
                  <p className="mt-1 text-slate-600">
                    <a href="mailto:info@zfpjagos.cz" className="hover:text-brand-600 font-semibold transition-colors">info@zfpjagos.cz</a>
                  </p>
                </div>
              </div>

              <div className="flex items-start p-4 rounded-2xl bg-slate-50 border border-slate-100">
                <div className="w-12 h-12 rounded-xl bg-brand-50 text-brand-600 flex items-center justify-center shrink-0">
                  <Clock className="h-6 w-6" aria-hidden="true" />
                </div>
                <div className="ml-4">
                  <h3 className="text-lg font-bold text-slate-900">Otevírací doba</h3>
                  <p className="mt-1 text-slate-600">
                    Pondělí – Pátek: 8:00 – 17:00<br />
                    <span className="text-xs text-slate-500">Osobní schůzky jsou možné i mimo běžnou dobu po předchozí domluvě.</span>
                  </p>
                </div>
              </div>
            </div>
          </ScrollReveal>

          {/* Contact Form */}
          <ScrollReveal direction="right" delay={0.15} className="bg-slate-50 rounded-3xl p-8 lg:p-10 shadow-xl border border-slate-200/80">
            <h3 className="text-2xl font-bold text-slate-900 mb-6">Napište nám</h3>
            
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-slate-700">Jméno a příjmení *</label>
                <input
                  type="text"
                  name="name"
                  id="name"
                  value={formData.name}
                  onChange={(e) => setFormData({...formData, name: e.target.value})}
                  className={`mt-1 block w-full rounded-md ${errors.name ? 'border-red-500' : 'border-slate-300'} shadow-sm focus:border-brand-500 focus:ring-brand-500 sm:text-sm px-4 py-3 border bg-white`}
                  placeholder="Jan Novák"
                />
                {errors.name && <p className="text-red-500 text-sm mt-1">{errors.name}</p>}
              </div>
              
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-slate-700">E-mail *</label>
                <input
                  type="email"
                  name="email"
                  id="email"
                  value={formData.email}
                  onChange={(e) => setFormData({...formData, email: e.target.value})}
                  className={`mt-1 block w-full rounded-md ${errors.email ? 'border-red-500' : 'border-slate-300'} shadow-sm focus:border-brand-500 focus:ring-brand-500 sm:text-sm px-4 py-3 border bg-white`}
                  placeholder="jan.novak@email.cz"
                />
                {errors.email && <p className="text-red-500 text-sm mt-1">{errors.email}</p>}
              </div>
              
              <div>
                <label htmlFor="phone" className="block text-sm font-medium text-slate-700">Telefon *</label>
                <input
                  type="tel"
                  name="phone"
                  id="phone"
                  value={formData.phone}
                  onChange={(e) => setFormData({...formData, phone: e.target.value})}
                  className={`mt-1 block w-full rounded-md ${errors.phone ? 'border-red-500' : 'border-slate-300'} shadow-sm focus:border-brand-500 focus:ring-brand-500 sm:text-sm px-4 py-3 border bg-white`}
                  placeholder="+420 606 084 044"
                />
                {errors.phone && <p className="text-red-500 text-sm mt-1">{errors.phone}</p>}
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-slate-700">Zpráva *</label>
                <textarea
                  id="message"
                  name="message"
                  rows={4}
                  value={formData.message}
                  onChange={(e) => setFormData({...formData, message: e.target.value})}
                  className={`mt-1 block w-full rounded-md ${errors.message ? 'border-red-500' : 'border-slate-300'} shadow-sm focus:border-brand-500 focus:ring-brand-500 sm:text-sm px-4 py-3 border bg-white`}
                  placeholder="Dobrý den, rád bych si sjednal schůzku ohledně hypotéky / investic..."
                />
                {errors.message && <p className="text-red-500 text-sm mt-1">{errors.message}</p>}
              </div>

              {submitStatus === 'success' && (
                <div className="bg-emerald-50 border border-emerald-200 text-emerald-700 p-4 rounded-lg flex items-center">
                  <CheckCircle className="w-5 h-5 mr-3 shrink-0" />
                  Děkujeme! Vaše zpráva byla úspěšně odeslána. Brzy se vám ozveme zpět.
                </div>
              )}

              {submitStatus === 'error' && (
                <div className="bg-red-50 border border-red-200 text-red-700 p-4 rounded-lg flex items-center">
                  <AlertCircle className="w-5 h-5 mr-3 shrink-0" />
                  Něco se pokazilo. Zkuste to prosím znovu nebo nám zavolejte na +420 606 084 044.
                </div>
              )}

              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full flex justify-center py-3.5 px-4 border border-transparent rounded-md shadow-sm text-base font-medium text-white bg-brand-600 hover:bg-brand-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-brand-500 transition-colors disabled:opacity-50 disabled:cursor-not-allowed cursor-pointer"
              >
                {isSubmitting ? 'Odesílám zprávu...' : 'Odeslat zprávu'}
              </button>
            </form>
          </ScrollReveal>
        </div>
      </div>
    </div>
  );
}

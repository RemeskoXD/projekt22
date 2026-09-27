import React, { useState } from 'react';
import { motion } from 'motion/react';
import { Mail, Phone, MapPin, Clock, CheckCircle, AlertCircle, MessageSquare, Send } from 'lucide-react';
import { Link } from 'react-router-dom';
import SEO from '../components/SEO';
import AmbientBackground from '../components/animations/AmbientBackground';
import ScrollReveal from '../components/animations/ScrollReveal';
import Breadcrumbs from '../components/Breadcrumbs';

export default function Contact() {
  const [formData, setFormData] = useState({ name: '', email: '', phone: '', message: '' });
  const [consent, setConsent] = useState(false);
  const [honeypot, setHoneypot] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');
  const [errorMessage, setErrorMessage] = useState('');
  const [errors, setErrors] = useState<Record<string, string>>({});

  const validate = () => {
    const newErrors: Record<string, string> = {};
    if (!formData.name.trim()) newErrors.name = 'Jméno je povinné pole';
    if (!formData.email.trim() || !/^\S+@\S+\.\S+$/.test(formData.email)) newErrors.email = 'Zadejte platný e-mail';
    if (!formData.phone.trim() || !/^(\+420)? ?[1-9][0-9]{2} ?[0-9]{3} ?[0-9]{3}$/.test(formData.phone)) newErrors.phone = 'Zadejte platné telefonní číslo (např. +420 606 084 044)';
    if (!formData.message.trim()) newErrors.message = 'Napište nám prosím krátkou zprávu';
    if (!consent) newErrors.consent = 'Pro odeslání je nutný souhlas se zpracováním osobních údajů';
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;
    
    setIsSubmitting(true);
    setSubmitStatus('idle');
    setErrorMessage('');

    try {
      const endpoint = import.meta.env.VITE_CONTACT_API_URL || '/api/contact';
      const response = await fetch(endpoint, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          ...formData,
          consent,
          honeypot
        })
      });

      const result = await response.json().catch(() => null);

      if (!response.ok || (result && result.success === false)) {
        throw new Error(result?.error || `Chyba při odesílání (${response.status})`);
      }

      setSubmitStatus('success');
      setFormData({ name: '', email: '', phone: '', message: '' });
      setConsent(false);
    } catch (err: any) {
      console.warn('Form submission error:', err);
      setErrorMessage(err?.message || 'Něco se pokazilo při odesílání.');
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  const contactSchema = {
    "@context": "https://schema.org",
    "@type": "ContactPage",
    "name": "Kontakt – ZFP Jagoš & partneři",
    "description": "Sjednejte si nezávaznou konzultaci s naším týmem finančních poradců.",
    "url": "https://zfpjagos.cz/kontakt",
    "mainEntity": {
      "@type": "FinancialService",
      "name": "ZFP Jagoš & partneři",
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
        description="Kontaktujte kancelář ZFP Jagoš & partneři ve Veselí nad Moravou. Telefon: +420 606 084 044, e-mail: info@zfpjagos.cz. Sjednejte si nezávaznou konzultaci."
        canonical="/kontakt"
        schema={contactSchema}
      />

      {/* Hero Section */}
      <section className="relative py-24 lg:py-32 bg-slate-900 overflow-hidden border-b border-slate-800 text-white">
        <div className="absolute inset-0">
          <img
            className="w-full h-full object-cover opacity-20"
            src="/jagosorez.webp?v=1"
            alt="Kancelář finančních poradců ZFP Jagoš & partneři"
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

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 lg:py-16 relative">
        <Breadcrumbs items={[{ label: 'Kontakt' }]} className="mb-8" />
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

              {/* Anti-spam honeypot */}
              <div className="hidden" aria-hidden="true">
                <label htmlFor="website">Nevyplňujte toto pole</label>
                <input
                  type="text"
                  id="website"
                  name="website"
                  tabIndex={-1}
                  autoComplete="off"
                  value={honeypot}
                  onChange={(e) => setHoneypot(e.target.value)}
                />
              </div>

              {/* GDPR Consent */}
              <div className="pt-2">
                <div className="flex items-start">
                  <input
                    id="consent"
                    name="consent"
                    type="checkbox"
                    checked={consent}
                    onChange={(e) => setConsent(e.target.checked)}
                    className="h-4 w-4 mt-1 rounded border-slate-300 text-brand-600 focus:ring-brand-500 cursor-pointer"
                  />
                  <label htmlFor="consent" className="ml-3 text-xs sm:text-sm text-slate-600 leading-relaxed cursor-pointer">
                    Souhlasím se zpracováním osobních údajů za účelem vyřízení poptávky a sjednání schůzky v souladu se{' '}
                    <Link to="/ochrana-osobnich-udaju" target="_blank" className="text-brand-600 hover:underline font-semibold">
                      Zásadami ochrany osobních údajů
                    </Link>
                    . *
                  </label>
                </div>
                {errors.consent && <p className="text-red-500 text-sm mt-1">{errors.consent}</p>}
              </div>

              {submitStatus === 'success' && (
                <div className="bg-emerald-50 border border-emerald-200 text-emerald-700 p-4 rounded-xl flex items-center">
                  <CheckCircle className="w-5 h-5 mr-3 shrink-0 text-emerald-600" />
                  <div>
                    <strong className="block font-semibold">Děkujeme! Vaše zpráva byla úspěšně odeslána.</strong>
                    <span className="text-xs text-emerald-800">Brzy se vám ozveme zpět s návrhem termínu.</span>
                  </div>
                </div>
              )}

              {submitStatus === 'error' && (
                <div className="bg-amber-50 border border-amber-200 text-amber-900 p-4 rounded-xl text-sm">
                  <div className="flex items-center gap-2 mb-2 font-bold text-amber-950">
                    <AlertCircle className="w-5 h-5 text-amber-600 shrink-0" />
                    <span>Odeslání přes formulář se nezdařilo</span>
                  </div>
                  <p className="text-xs text-amber-800 mb-3">
                    {errorMessage || 'Server je dočasně nedostupný.'} Můžete nám zprávu odeslat přímo e-mailem nebo nám rovnou zavolat:
                  </p>
                  <div className="flex flex-wrap gap-2">
                    <a
                      href={`mailto:info@zfpjagos.cz?subject=Poptávka ze zfpjagos.cz (${encodeURIComponent(formData.name || 'Klient')})&body=${encodeURIComponent(`Dobrý den,\n\nJméno: ${formData.name}\nTelefon: ${formData.phone}\nE-mail: ${formData.email}\n\nZpráva:\n${formData.message}`)}`}
                      className="inline-flex items-center px-3 py-1.5 rounded-lg bg-brand-600 text-white font-semibold text-xs hover:bg-brand-700 transition-colors"
                    >
                      <Send className="w-3.5 h-3.5 mr-1.5" /> Odeslat e-mailem (info@zfpjagos.cz)
                    </a>
                    <a
                      href="tel:+420606084044"
                      className="inline-flex items-center px-3 py-1.5 rounded-lg bg-slate-900 text-white font-semibold text-xs hover:bg-slate-800 transition-colors"
                    >
                      <Phone className="w-3.5 h-3.5 mr-1.5" /> Zavolat: +420 606 084 044
                    </a>
                  </div>
                </div>
              )}

              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full flex justify-center py-3.5 px-4 border border-transparent rounded-xl shadow-md text-base font-semibold text-white bg-brand-600 hover:bg-brand-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-brand-500 transition-colors disabled:opacity-50 disabled:cursor-not-allowed cursor-pointer"
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

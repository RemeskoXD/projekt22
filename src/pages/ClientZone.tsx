import { motion } from 'motion/react';
import { FileText, Link as LinkIcon, ShieldAlert, ExternalLink, Download } from 'lucide-react';
import SEO from '../components/SEO';

export default function ClientZone() {
  const providers = [
    { name: 'NN pojišťovna', onlineUrl: 'https://www.nn.cz/hlaseni-pojistne-udalosti/', formUrl: 'https://www.nn.cz' },
    { name: 'Kooperativa pojišťovna', onlineUrl: 'https://www.koop.cz/reseni-skod/nahlasit-udalost', formUrl: 'https://www.koop.cz' },
    { name: 'ČSOB Pojišťovna', onlineUrl: 'https://www.csobpoj.cz/nahlasit-skodu', formUrl: 'https://www.csobpoj.cz' },
  ];

  return (
    <div className="bg-white min-h-screen">
      <SEO 
        title="Klientská zóna – Hlášení pojistných událostí a dokumenty"
        description="Rychlé rozcestníky a formuláře pro hlášení pojistných událostí u pojišťoven NN, Kooperativa a ČSOB. Klientský servis ZFP Jagoš & Cábovi."
        canonical="/pro-klienty"
      />
      
      {/* Hero */}
      <section className="bg-slate-50 py-24 border-b border-slate-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-5xl font-bold text-slate-900 mb-6"
          >
            Pro klienty
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-xl text-slate-600 max-w-3xl mx-auto"
          >
            Níže naleznete potřebné dokumenty či odkazy. Stačí si vybrat ten nejvhodnější, který zrovna potřebujete.
          </motion.p>
        </div>
      </section>

      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            
            {/* Documents */}
            <div>
              <div className="flex items-center gap-3 mb-8">
                <div className="w-10 h-10 bg-brand-100 rounded-lg flex items-center justify-center">
                  <FileText className="w-5 h-5 text-brand-600" />
                </div>
                <h2 className="text-2xl font-bold text-slate-900">Hlášení pojistné události</h2>
              </div>
              
              <div className="space-y-8">
                {providers.map((provider, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.1 }}
                    className="p-6 rounded-2xl border border-slate-200 bg-white shadow-sm"
                  >
                    <h3 className="text-xl font-bold text-slate-900 mb-4">{provider.name}</h3>
                    <p className="text-slate-600 mb-4 text-sm">Kliknutím na jeden z odkazů si zvolte formu hlášení pojistné události.</p>
                    
                    <div className="flex flex-col sm:flex-row gap-4 mb-4">
                      <a href="#" className="inline-flex items-center justify-center px-4 py-2 border border-brand-200 rounded-lg text-brand-700 bg-brand-50 hover:bg-brand-100 transition-colors font-medium">
                        <ExternalLink className="w-4 h-4 mr-2" /> Online formulář
                      </a>
                      <a href="#" className="inline-flex items-center justify-center px-4 py-2 border border-slate-200 rounded-lg text-slate-700 bg-white hover:bg-slate-50 transition-colors font-medium">
                        <Download className="w-4 h-4 mr-2" /> Papírový formulář
                      </a>
                    </div>
                    
                    <p className="text-xs text-slate-500 italic">
                      Formulář vytisknete, vyplníte a společně s lékařskými zprávami odešlete doporučeně na adresu pojišťovny nebo dodejte na kancelář.
                    </p>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* Links & Info */}
            <div className="space-y-12">
              <div>
                <div className="flex items-center gap-3 mb-8">
                  <div className="w-10 h-10 bg-brand-100 rounded-lg flex items-center justify-center">
                    <LinkIcon className="w-5 h-5 text-brand-600" />
                  </div>
                  <h2 className="text-2xl font-bold text-slate-900">Ostatní odkazy</h2>
                </div>
                
                <div className="space-y-4">
                  <motion.a
                    href="https://zfpinvestments.com"
                    target="_blank"
                    rel="noreferrer noopener"
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    className="flex items-center justify-between p-4 rounded-xl border border-slate-200 hover:border-brand-300 hover:bg-brand-50/50 transition-colors group bg-white"
                  >
                    <div className="flex items-center gap-3">
                      <img 
                        src="/logo-investments-web-4a0d5d9c.webp" 
                        alt="ZFP Investments" 
                        className="h-8 w-auto object-contain"
                        width="100"
                        height="32"
                        loading="lazy"
                      />
                      <span className="font-semibold text-slate-900 group-hover:text-brand-700">ZFP Investments – Realitní fond</span>
                    </div>
                    <ExternalLink className="w-4 h-4 text-slate-400 group-hover:text-brand-600 shrink-0" />
                  </motion.a>
                </div>
              </div>

              <div className="bg-brand-50 border border-brand-100 rounded-2xl p-6 flex gap-4">
                <ShieldAlert className="w-8 h-8 text-brand-600 shrink-0" />
                <div>
                  <h4 className="font-bold text-brand-900 mb-2">Potřebujete poradit?</h4>
                  <p className="text-brand-800 text-sm">
                    Nevíte si s něčím rady? Neváhejte se na nás obrátit. Naši poradci vám s vyplněním formulářů nebo sjednáním schůzky rádi pomohou.
                  </p>
                </div>
              </div>

            </div>

          </div>
        </div>
      </section>
    </div>
  );
}

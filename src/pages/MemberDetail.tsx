import { useParams, Link } from 'react-router-dom';
import { motion } from 'motion/react';
import { teamMembers, getImageUrl } from '../data';
import { ImageWithFallback } from '../components/ImageWithFallback';
import { ArrowLeft, Mail, Phone, Facebook, Linkedin, Instagram } from 'lucide-react';
import SEO from '../components/SEO';

export default function MemberDetail() {
  const { id } = useParams<{ id: string }>();
  const member = teamMembers.find(m => m.id === id);

  if (!member) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-white">
        <SEO 
          title="Člen týmu nenalezen" 
          description="Požadovaný profil poradce nebyl nalezen."
          noindex={true}
        />
        <div className="text-center">
          <h1 className="text-2xl font-bold text-slate-900 mb-4">Člen týmu nenalezen</h1>
          <Link to="/tym" className="text-brand-600 hover:underline flex items-center justify-center gap-2">
            <ArrowLeft className="w-4 h-4" /> Zpět na tým
          </Link>
        </div>
      </div>
    );
  }

  const personSchema = {
    "@context": "https://schema.org",
    "@type": "Person",
    "name": member.name,
    "jobTitle": member.role,
    "description": member.bio,
    "email": member.email,
    "telephone": member.phone,
    "image": `https://zfpjagos.cz${member.imageUrl}`,
    "worksFor": {
      "@type": "FinancialService",
      "name": "ZFP Jagoš & Cábovi",
      "url": "https://zfpjagos.cz"
    },
    "sameAs": Object.values(member.socials || {}).filter(Boolean)
  };

  return (
    <div className="bg-white min-h-screen py-12 lg:py-24">
      <SEO 
        title={`${member.name} – ${member.role}`}
        description={`${member.name} (${member.role}). ${member.bio.slice(0, 150)}... Kontakt: ${member.phone}, ${member.email}.`}
        canonical={`/tym/${member.id}`}
        image={member.imageUrl}
        type="profile"
        schema={personSchema}
      />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <Link to="/tym" className="inline-flex items-center text-slate-500 hover:text-slate-900 transition-colors mb-12 font-medium">
          <ArrowLeft className="w-4 h-4 mr-2" />
          Zpět na přehled týmu
        </Link>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-24">
          
          {/* Photo and Contact */}
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="lg:col-span-5"
          >
            <div className="rounded-3xl overflow-hidden aspect-[3/4] mb-8 bg-slate-100 shadow-xl">
              <ImageWithFallback 
                src={getImageUrl(member.imageUrl)} 
                alt={member.name} 
                name={member.name}
                className="w-full h-full object-cover"
              />
            </div>
            
            <div className="bg-slate-50 rounded-2xl p-6 border border-slate-100">
              <h3 className="font-semibold text-slate-900 mb-4">Kontakt</h3>
              <ul className="space-y-4">
                <li>
                  <a href={`tel:${member.phone.replace(/\s+/g, '')}`} className="flex items-center text-slate-600 hover:text-brand-600 transition-colors">
                    <div className="w-10 h-10 rounded-full bg-white border border-slate-200 flex items-center justify-center mr-4">
                      <Phone className="w-4 h-4" />
                    </div>
                    {member.phone}
                  </a>
                </li>
                <li>
                  <a href={`mailto:${member.email}`} className="flex items-center text-slate-600 hover:text-brand-600 transition-colors">
                    <div className="w-10 h-10 rounded-full bg-white border border-slate-200 flex items-center justify-center mr-4">
                      <Mail className="w-4 h-4" />
                    </div>
                    {member.email}
                  </a>
                </li>
              </ul>
              
              {member.socials && (
                <div className="mt-8 pt-6 border-t border-slate-200">
                  <h3 className="font-semibold text-slate-900 mb-4">Sociální sítě</h3>
                  <div className="flex gap-4">
                    {member.socials.linkedin && (
                      <a href={member.socials.linkedin} target="_blank" rel="noreferrer" className="w-10 h-10 rounded-full bg-white border border-slate-200 flex items-center justify-center text-slate-600 hover:text-brand-600 hover:border-brand-200 transition-colors">
                        <Linkedin className="w-4 h-4" />
                      </a>
                    )}
                    {member.socials.facebook && (
                      <a href={member.socials.facebook} target="_blank" rel="noreferrer" className="w-10 h-10 rounded-full bg-white border border-slate-200 flex items-center justify-center text-slate-600 hover:text-brand-600 hover:border-brand-200 transition-colors">
                        <Facebook className="w-4 h-4" />
                      </a>
                    )}
                    {member.socials.instagram && (
                      <a href={member.socials.instagram} target="_blank" rel="noreferrer" className="w-10 h-10 rounded-full bg-white border border-slate-200 flex items-center justify-center text-slate-600 hover:text-brand-600 hover:border-brand-200 transition-colors">
                        <Instagram className="w-4 h-4" />
                      </a>
                    )}
                  </div>
                </div>
              )}
            </div>
          </motion.div>

          {/* Bio and Info */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="lg:col-span-7 flex flex-col justify-center"
          >
            <h1 className="text-4xl md:text-5xl font-bold text-slate-900 mb-4">{member.name}</h1>
            <p className="text-xl text-brand-600 font-medium mb-12">{member.role}</p>

            <div className="prose prose-lg text-slate-600 mb-12">
              <p>{member.bio}</p>
            </div>

            <div className="bg-slate-900 rounded-3xl p-8 md:p-10 text-white relative overflow-hidden">
              <div className="absolute -top-10 -left-6 text-9xl text-slate-800 font-serif opacity-50">"</div>
              <p className="text-xl md:text-2xl font-medium relative z-10 leading-relaxed italic">
                {member.quote}
              </p>
            </div>
            
            <div className="mt-16 pt-12 border-t border-slate-100">
              <h3 className="text-2xl font-bold text-slate-900 mb-6">Máte zájem o spolupráci?</h3>
              <p className="text-slate-600 mb-8">
                Rád se s vámi potkám na nezávazné schůzce u kávy, kde probereme vaše představy a možnosti.
              </p>
              <a 
                href={`mailto:${member.email}`}
                className="inline-flex items-center justify-center px-8 py-4 border border-transparent text-lg font-medium rounded-xl text-white bg-brand-600 hover:bg-brand-700 transition-colors"
              >
                Domluvit schůzku
              </a>
            </div>

          </motion.div>

        </div>
      </div>
    </div>
  );
}

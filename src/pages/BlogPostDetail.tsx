import { useParams, Link } from 'react-router-dom';
import { motion } from 'motion/react';
import { blogPosts } from '../data';
import { ArrowLeft, Calendar, User, Clock } from 'lucide-react';
import SEO from '../components/SEO';
import Breadcrumbs from '../components/Breadcrumbs';

export default function BlogPostDetail() {
  const { id } = useParams<{ id: string }>();

  // Backwards compatibility for legacy numeric ids
  const legacySlugMap: Record<string, string> = {
    '1': 'jak-se-pripravit-na-hypoteku-2026',
    '2': 'proc-je-dulezite-mit-financni-plan',
    '3': 'investovani-pro-zacatecniky-jak-ochranit-uspory',
  };
  const activeSlug = (id && legacySlugMap[id]) ? legacySlugMap[id] : id;
  const post = blogPosts.find(p => p.id === activeSlug);

  if (!post) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-white px-4">
        <SEO 
          title="Článek nenalezen" 
          description="Hledaný článek nebyl nalezen."
          noindex={true}
        />
        <div className="text-center">
          <h1 className="text-3xl font-bold text-slate-900 mb-4">Článek nenalezen</h1>
          <p className="text-slate-600 mb-6">Omlouváme se, ale požadovaný článek nebyl nalezen nebo byl přesunut.</p>
          <Link to="/blog" className="inline-flex items-center px-5 py-2.5 rounded-xl bg-brand-600 text-white font-semibold hover:bg-brand-700 transition-colors">
            <ArrowLeft className="w-4 h-4 mr-2" /> Zpět na přehled blogu
          </Link>
        </div>
      </div>
    );
  }

  const paragraphs = post.content.split('\n\n').filter(p => p.trim().length > 0);

  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    "headline": post.title,
    "description": post.excerpt,
    "image": `https://zfpjagos.cz${post.imageUrl}`,
    "datePublished": "2026-09-15T08:00:00+02:00",
    "dateModified": "2026-09-27T14:18:00+02:00",
    "author": {
      "@type": "Person",
      "name": "Bc. Jaroslav Jagoš, EFA",
      "jobTitle": "Ředitel obchodního týmu a zakladatel ZFP Jagoš & partneři"
    },
    "publisher": {
      "@type": "Organization",
      "name": "ZFP Jagoš & partneři",
      "logo": {
        "@type": "ImageObject",
        "url": "https://zfpjagos.cz/logo-zfp-jagos-partneri.png"
      }
    },
    "mainEntityOfPage": {
      "@type": "WebPage",
      "@id": `https://zfpjagos.cz/blog/${post.id}`
    }
  };

  return (
    <div className="bg-white min-h-screen py-8 lg:py-16">
      <SEO 
        title={post.title}
        description={post.excerpt}
        canonical={`/blog/${post.id}`}
        image={post.imageUrl}
        type="article"
        schema={articleSchema}
        datePublished="2026-09-15T08:00:00+02:00"
        dateModified="2026-09-27T14:18:00+02:00"
      />
      
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <Breadcrumbs 
          items={[
            { label: 'Blog a aktuality', href: '/blog' },
            { label: post.title }
          ]} 
          className="mb-6"
        />

        <Link to="/blog" className="inline-flex items-center text-sm text-slate-500 hover:text-brand-600 transition-colors mb-8 font-medium">
          <ArrowLeft className="w-4 h-4 mr-2" />
          Zpět na všechny články
        </Link>

        <motion.article
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
        >
          <header className="mb-10">
            <div className="flex flex-wrap items-center gap-4 text-xs sm:text-sm text-slate-500 mb-4 font-medium">
              <span className="inline-flex items-center px-2.5 py-1 rounded-full bg-brand-50 text-brand-700 font-semibold">
                Finanční vzdělávání
              </span>
              <div className="flex items-center">
                <Calendar className="w-4 h-4 mr-1.5 text-slate-400" />
                <time dateTime="2026-09-27">{post.date}</time>
              </div>
              <div className="flex items-center">
                <User className="w-4 h-4 mr-1.5 text-slate-400" />
                <span>Bc. Jaroslav Jagoš, EFA</span>
              </div>
              <div className="flex items-center">
                <Clock className="w-4 h-4 mr-1.5 text-slate-400" />
                <span>5 minut čtení</span>
              </div>
            </div>
            
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-950 leading-tight tracking-tight">
              {post.title}
            </h1>
          </header>

          <div className="aspect-[16/9] rounded-3xl overflow-hidden mb-12 shadow-lg border border-slate-100 bg-slate-100">
            <img 
              src={post.imageUrl} 
              alt={post.title} 
              className="w-full h-full object-cover"
              width="800"
              height="450"
              loading="eager"
            />
          </div>

          <div className="max-w-none text-slate-700 text-base sm:text-lg leading-relaxed space-y-6">
            <p className="lead text-lg sm:text-xl text-slate-900 font-medium leading-relaxed bg-slate-50 p-6 rounded-2xl border-l-4 border-brand-500">
              {post.excerpt}
            </p>
            {paragraphs.map((p, idx) => (
              <p key={idx} className="leading-relaxed">
                {p}
              </p>
            ))}
          </div>

          {/* Author Bio Box */}
          <div className="mt-16 p-8 bg-slate-50 rounded-3xl border border-slate-200 flex flex-col sm:flex-row items-center sm:items-start gap-6">
            <img 
              src="/team/jaroslav-jagos.webp" 
              alt="Bc. Jaroslav Jagoš, EFA" 
              className="w-20 h-20 rounded-2xl object-cover shrink-0 shadow"
              width="80"
              height="80"
            />
            <div>
              <h3 className="text-lg font-bold text-slate-900">Autor článku: Bc. Jaroslav Jagoš, EFA</h3>
              <p className="text-brand-600 text-xs font-semibold uppercase tracking-wider mb-2">Ředitel obchodního týmu a zakladatel ZFP Jagoš & partneři</p>
              <p className="text-sm text-slate-600 leading-relaxed">
                Působí ve financích od roku 2007. Je držitelem prestižního evropského titulu European Financial Advisor (EFA) a spoluzakladatelem autorského podcastu Finanční kompas.
              </p>
              <div className="mt-4 flex flex-wrap gap-4 text-xs font-semibold">
                <Link to="/kontakt" className="text-brand-600 hover:underline">Sjednat nezávaznou konzultaci &rarr;</Link>
                <Link to="/tym/jaroslav-jagos" className="text-slate-600 hover:text-slate-900">Zobrazit celý profil &rarr;</Link>
              </div>
            </div>
          </div>
        </motion.article>
      </div>
    </div>
  );
}

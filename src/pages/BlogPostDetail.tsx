import { useParams, Link } from 'react-router-dom';
import { motion } from 'motion/react';
import { blogPosts } from '../data';
import { ArrowLeft, Calendar } from 'lucide-react';
import SEO from '../components/SEO';

export default function BlogPostDetail() {
  const { id } = useParams<{ id: string }>();
  const post = blogPosts.find(p => p.id === id);

  if (!post) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-white">
        <SEO 
          title="Článek nenalezen" 
          description="Hledaný článek nebyl nalezen."
          noindex={true}
        />
        <div className="text-center">
          <h1 className="text-2xl font-bold text-slate-900 mb-4">Článek nenalezen</h1>
          <Link to="/blog" className="text-brand-600 hover:underline flex items-center justify-center gap-2">
            <ArrowLeft className="w-4 h-4" /> Zpět na blog
          </Link>
        </div>
      </div>
    );
  }

  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    "headline": post.title,
    "description": post.excerpt,
    "image": post.imageUrl,
    "datePublished": "2026-06-20",
    "author": {
      "@type": "Organization",
      "name": "ZFP Jagoš & Cábovi",
      "url": "https://zfpjagos.cz"
    },
    "publisher": {
      "@type": "Organization",
      "name": "ZFP Jagoš & Cábovi",
      "logo": {
        "@type": "ImageObject",
        "url": "https://zfpjagos.cz/ZFPJCLogo-2.webp"
      }
    },
    "mainEntityOfPage": {
      "@type": "WebPage",
      "@id": `https://zfpjagos.cz/blog/${post.id}`
    }
  };

  return (
    <div className="bg-white min-h-screen py-12 lg:py-24">
      <SEO 
        title={post.title}
        description={post.excerpt}
        canonical={`/blog/${post.id}`}
        image={post.imageUrl}
        type="article"
        schema={articleSchema}
      />
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <Link to="/blog" className="inline-flex items-center text-slate-500 hover:text-slate-900 transition-colors mb-12 font-medium">
          <ArrowLeft className="w-4 h-4 mr-2" />
          Zpět na přehled článků
        </Link>

        <motion.article
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
        >
          <div className="flex items-center text-sm text-slate-500 mb-6 font-medium">
            <Calendar className="w-4 h-4 mr-2" />
            {post.date}
          </div>
          
          <h1 className="text-4xl md:text-5xl font-bold text-slate-900 mb-8 leading-tight">
            {post.title}
          </h1>

          <div className="aspect-[16/9] rounded-2xl overflow-hidden mb-12 shadow-md">
            <img 
              src={post.imageUrl} 
              alt={post.title} 
              className="w-full h-full object-cover"
            />
          </div>

          <div className="prose prose-lg prose-slate max-w-none">
            <p className="lead text-xl text-slate-600 font-medium mb-8">
              {post.excerpt}
            </p>
            <p>
              {post.content}
            </p>
            {/* Placeholder for actual content */}
            <p>
              Tento obsah je zatím pouze demonstrativní. V reálném nasazení zde bude kompletní text článku rozdělený do odstavců, s možností vkládat nadpisy, další obrázky, citace a seznamy.
            </p>
          </div>
        </motion.article>

      </div>
    </div>
  );
}

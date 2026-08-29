import { motion } from 'motion/react';
import { blogPosts } from '../data';
import { ArrowRight, Calendar } from 'lucide-react';
import { Link } from 'react-router-dom';
import SEO from '../components/SEO';

export default function Blog() {
  const blogSchema = {
    "@context": "https://schema.org",
    "@type": "Blog",
    "name": "Blog a aktuality – ZFP Jagoš & Cábovi",
    "description": "Články a novinky z finančního trhu, hypoték a investic.",
    "url": "https://zfpjagos.cz/blog"
  };

  return (
    <div className="bg-white min-h-screen">
      <SEO 
        title="Blog a aktuality ze světa financí"
        description="Přečtěte si naše postřehy, novinky z finančního trhu, tipy k hypotékám a návody pro chytrou správu rodinných financí."
        canonical="/blog"
        schema={blogSchema}
      />
      
      {/* Hero */}
      <section className="bg-slate-50 py-24 border-b border-slate-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-5xl font-bold text-slate-900 mb-6"
          >
            Blog a aktuality
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-xl text-slate-600 max-w-3xl mx-auto"
          >
            Přečtěte si naše postřehy, novinky z finančního trhu a tipy pro lepší správu vašich peněz.
          </motion.p>
        </div>
      </section>

      {/* Posts */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {blogPosts.map((post, i) => (
              <motion.article
                key={post.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="group flex flex-col bg-white rounded-2xl border border-slate-200 overflow-hidden hover:shadow-xl transition-shadow duration-300"
              >
                <Link to={`/blog/${post.id}`} className="block aspect-[16/10] overflow-hidden bg-slate-100 relative">
                  <img 
                    src={post.imageUrl} 
                    alt={post.title} 
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-slate-900/10 group-hover:bg-transparent transition-colors" />
                </Link>
                
                <div className="p-6 flex flex-col flex-grow">
                  <div className="flex items-center text-sm text-slate-500 mb-4">
                    <Calendar className="w-4 h-4 mr-2" />
                    {post.date}
                  </div>
                  <Link to={`/blog/${post.id}`} className="block mb-3">
                    <h2 className="text-xl font-bold text-slate-900 group-hover:text-brand-600 transition-colors line-clamp-2">
                      {post.title}
                    </h2>
                  </Link>
                  <p className="text-slate-600 line-clamp-3 mb-6 flex-grow">
                    {post.excerpt}
                  </p>
                  <Link 
                    to={`/blog/${post.id}`}
                    className="inline-flex items-center text-brand-600 font-medium hover:text-brand-700 transition-colors"
                  >
                    Číst článek <ArrowRight className="ml-2 w-4 h-4" />
                  </Link>
                </div>
              </motion.article>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}

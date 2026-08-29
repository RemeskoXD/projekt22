import { Outlet } from 'react-router-dom';
import Navbar from './layout/Navbar';
import Footer from './layout/Footer';
import ScrollProgressBar from './animations/ScrollProgressBar';

export default function Layout() {
  return (
    <div className="min-h-screen flex flex-col font-sans bg-slate-50 relative selection:bg-brand-500 selection:text-white">
      <ScrollProgressBar />
      <a 
        href="#main-content" 
        className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 focus:z-50 focus:px-4 focus:py-2 focus:bg-brand-600 focus:text-white focus:rounded-md focus:shadow-lg focus:outline-none"
      >
        Přeskočit na hlavní obsah
      </a>
      <Navbar />
      <main id="main-content" className="flex-grow">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
}

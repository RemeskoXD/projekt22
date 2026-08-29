/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import Home from './pages/Home';
import Team from './pages/Team';
import MemberDetail from './pages/MemberDetail';
import Services from './pages/Services';
import Podcast from './pages/Podcast';
import Career from './pages/Career';
import ClientZone from './pages/ClientZone';
import Blog from './pages/Blog';
import BlogPostDetail from './pages/BlogPostDetail';
import Contact from './pages/Contact';
import NotFound from './pages/NotFound';
import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

// Scroll to top on route change
function ScrollToTop() {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
}

export default function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="sluzby" element={<Services />} />
          <Route path="tym" element={<Team />} />
          <Route path="tym/:id" element={<MemberDetail />} />
          <Route path="podcast" element={<Podcast />} />
          <Route path="kariera" element={<Career />} />
          <Route path="pro-klienty" element={<ClientZone />} />
          <Route path="blog" element={<Blog />} />
          <Route path="blog/:id" element={<BlogPostDetail />} />
          <Route path="kontakt" element={<Contact />} />
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

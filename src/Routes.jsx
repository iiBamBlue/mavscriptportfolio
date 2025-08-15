/** @format */

import { Routes, Route } from 'react-router-dom';
import Landing from './pages/components/Landing';
import Home from './pages/Home';
import About from './pages/About';
import Projects from './pages/Projects';
import Skills from './pages/Skills';
import WhoIsBlue from './pages/components/WhoIsBlue';
import NotFound from './pages/NotFound';
import Contact from './pages/Contact';

export default function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Landing />} />
      <Route path="/home" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/projects" element={<Projects />} />
      <Route path="/skills" element={<Skills />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="/whoisblue" element={<WhoIsBlue />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
}

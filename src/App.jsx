import { useState, useCallback } from 'react';
import Hero from './components/Hero';
import Features from './components/Features';
import CTA from './components/CTA';
import ServicesPopup from './components/ServicesPopup';

export default function App() {
  const [openServices, setOpenServices] = useState(false);

  const openServicesPopup = useCallback(() => setOpenServices(true), []);
  const closeServicesPopup = useCallback(() => setOpenServices(false), []);

  const scrollToContact = useCallback(() => {
    const el = document.getElementById('contact');
    if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' });
  }, []);

  return (
    <div className="bg-slate-950 text-white antialiased selection:bg-cyan-300/30 selection:text-white">
      <Hero onOpenServices={openServicesPopup} onPrimaryCta={scrollToContact} />
      <Features />
      <CTA id="contact" />

      <footer className="py-12 border-t border-white/10 bg-gradient-to-b from-transparent to-slate-950/40">
        <div className="container mx-auto px-6 max-w-6xl flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-3">
            <div className="h-9 w-9 rounded-xl bg-cyan-400/20 border border-cyan-300/30 grid place-items-center backdrop-blur-md">
              <span className="text-cyan-300 font-bold">D</span>
            </div>
            <div>
              <p className="font-semibold tracking-tight">Digitalphy Media</p>
              <p className="text-xs text-white/60">Performance-first digital marketing</p>
            </div>
          </div>
          <div className="text-sm text-white/60">© {new Date().getFullYear()} Digitalphy Media. All rights reserved.</div>
        </div>
      </footer>

      <ServicesPopup open={openServices} onClose={closeServicesPopup} onBookCall={scrollToContact} />
    </div>
  );
}

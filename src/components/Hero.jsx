import Spline from '@splinetool/react-spline';
import { Rocket, Phone, Star } from 'lucide-react';

export default function Hero({ onOpenServices, onPrimaryCta }) {
  return (
    <header className="relative min-h-[92vh] w-full overflow-hidden">
      <div className="absolute inset-0">
        <Spline scene="https://prod.spline.design/WCoEDSwacOpKBjaC/scene.splinecode" style={{ width: '100%', height: '100%' }} />
      </div>

      <div className="absolute inset-0 bg-gradient-to-b from-slate-950/30 via-slate-950/50 to-slate-950 pointer-events-none" />

      <nav className="relative z-10">
        <div className="container mx-auto px-6 max-w-7xl py-6 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="h-10 w-10 rounded-2xl bg-white/10 border border-white/20 grid place-items-center backdrop-blur-xl shadow-lg shadow-cyan-500/10">
              <span className="text-white font-bold">D</span>
            </div>
            <div className="leading-tight">
              <p className="font-semibold tracking-tight">Digitalphy Media</p>
              <p className="text-xs text-white/60">Growth. Performance. Scale.</p>
            </div>
          </div>
          <div className="flex items-center gap-3">
            <button onClick={onOpenServices} className="px-4 py-2 rounded-xl bg-white/10 hover:bg-white/15 text-sm border border-white/15 backdrop-blur-xl transition">Services</button>
            <button onClick={onPrimaryCta} className="px-4 py-2 rounded-xl bg-cyan-500/90 hover:bg-cyan-400 text-slate-900 text-sm font-semibold transition inline-flex items-center gap-2">
              <Phone size={16} /> Book a Call
            </button>
          </div>
        </div>
      </nav>

      <div className="relative z-10 container mx-auto px-6 max-w-7xl flex flex-col items-start justify-center min-h-[70vh] pt-10">
        <div className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/10 backdrop-blur-xl px-3 py-1 text-xs text-white/80">
          <Star size={14} className="text-yellow-300" /> High-conversion ad campaigns that scale
        </div>
        <h1 className="mt-5 text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight leading-[1.05]">
          Run ads that convert. Scale with confidence.
        </h1>
        <p className="mt-4 max-w-2xl text-white/80 text-lg">
          Digitalphy Media is a performance-driven digital marketing agency. We build high-converting funnels, data-driven ad strategies, and iterate fast to maximize ROAS.
        </p>

        <div className="mt-8 flex flex-wrap items-center gap-4">
          <button onClick={onPrimaryCta} className="group px-6 py-3 rounded-2xl bg-cyan-400/90 hover:bg-cyan-300 text-slate-900 font-semibold inline-flex items-center gap-2 shadow-lg shadow-cyan-500/20 transition">
            <Rocket size={18} /> Get Your Free Growth Plan
          </button>
          <button onClick={onOpenServices} className="px-6 py-3 rounded-2xl bg-white/10 hover:bg-white/15 text-white border border-white/15 backdrop-blur-xl transition">
            Explore Services
          </button>
        </div>

        <div className="mt-10 grid grid-cols-2 sm:grid-cols-4 gap-4 text-sm text-white/70">
          <div className="rounded-2xl bg-white/5 border border-white/10 px-4 py-3 backdrop-blur-xl">Avg. CTR +38%</div>
          <div className="rounded-2xl bg-white/5 border border-white/10 px-4 py-3 backdrop-blur-xl">CPL down 27%</div>
          <div className="rounded-2xl bg-white/5 border border-white/10 px-4 py-3 backdrop-blur-xl">ROAS 3.2x avg.</div>
          <div className="rounded-2xl bg-white/5 border border-white/10 px-4 py-3 backdrop-blur-xl">100+ campaigns</div>
        </div>
      </div>
    </header>
  );
}

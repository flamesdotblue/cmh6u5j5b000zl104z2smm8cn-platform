import { useState } from 'react';
import { CheckCircle2, ChevronRight, Mail, Phone } from 'lucide-react';

export default function CTA({ id }) {
  const [submitted, setSubmitted] = useState(false);

  const onSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <section id={id} className="relative py-20">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom,rgba(14,165,233,0.10),transparent_60%)] pointer-events-none" />
      <div className="container mx-auto px-6 max-w-7xl relative">
        <div className="grid lg:grid-cols-2 gap-10 items-center">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight">Get your free growth plan</h2>
            <p className="mt-3 text-white/70 max-w-xl">Tell us about your goals. We’ll audit your funnel, identify quick wins, and share a battle-tested roadmap to increase conversions and scale profitably.</p>
            <ul className="mt-6 space-y-3 text-white/80">
              <li className="flex items-start gap-2"><CheckCircle2 className="text-cyan-300 mt-0.5" size={18} />Custom media plan with budgets and projections</li>
              <li className="flex items-start gap-2"><CheckCircle2 className="text-cyan-300 mt-0.5" size={18} />Funnel and landing page conversion recommendations</li>
              <li className="flex items-start gap-2"><CheckCircle2 className="text-cyan-300 mt-0.5" size={18} />Creative and messaging angles to test first</li>
            </ul>
          </div>

          <div className="rounded-2xl p-6 bg-white/5 border border-white/10 backdrop-blur-xl">
            {submitted ? (
              <div className="text-center py-10">
                <div className="mx-auto h-14 w-14 rounded-full bg-emerald-400/20 border border-emerald-300/30 grid place-items-center">
                  <CheckCircle2 size={26} className="text-emerald-300" />
                </div>
                <h3 className="mt-4 text-2xl font-semibold">Request received!</h3>
                <p className="text-white/70 mt-1">Our team will reach out within one business day.</p>
              </div>
            ) : (
              <form onSubmit={onSubmit} className="grid grid-cols-1 gap-4">
                <div className="grid sm:grid-cols-2 gap-4">
                  <div>
                    <label className="text-sm text-white/70">Full name</label>
                    <input required type="text" placeholder="Alex Carter" className="mt-1 w-full px-3 py-2 rounded-xl bg-black/40 border border-white/10 focus:border-cyan-300/40 outline-none" />
                  </div>
                  <div>
                    <label className="text-sm text-white/70">Company</label>
                    <input type="text" placeholder="Acme Inc." className="mt-1 w-full px-3 py-2 rounded-xl bg-black/40 border border-white/10 focus:border-cyan-300/40 outline-none" />
                  </div>
                </div>

                <div className="grid sm:grid-cols-2 gap-4">
                  <div>
                    <label className="text-sm text-white/70">Email</label>
                    <div className="mt-1 flex items-center gap-2 px-3 py-2 rounded-xl bg-black/40 border border-white/10 focus-within:border-cyan-300/40">
                      <Mail size={16} className="text-white/60" />
                      <input required type="email" placeholder="you@company.com" className="w-full bg-transparent outline-none" />
                    </div>
                  </div>
                  <div>
                    <label className="text-sm text-white/70">Phone</label>
                    <div className="mt-1 flex items-center gap-2 px-3 py-2 rounded-xl bg-black/40 border border-white/10 focus-within:border-cyan-300/40">
                      <Phone size={16} className="text-white/60" />
                      <input type="tel" placeholder="+1 555 000 1234" className="w-full bg-transparent outline-none" />
                    </div>
                  </div>
                </div>

                <div className="grid sm:grid-cols-2 gap-4">
                  <div>
                    <label className="text-sm text-white/70">Monthly ad budget</label>
                    <select className="mt-1 w-full px-3 py-2 rounded-xl bg-black/40 border border-white/10 focus:border-cyan-300/40 outline-none">
                      <option>Under $5k</option>
                      <option>$5k - $15k</option>
                      <option>$15k - $50k</option>
                      <option>$50k+</option>
                    </select>
                  </div>
                  <div>
                    <label className="text-sm text-white/70">Primary goal</label>
                    <select className="mt-1 w-full px-3 py-2 rounded-xl bg-black/40 border border-white/10 focus:border-cyan-300/40 outline-none">
                      <option>Leads</option>
                      <option>Sales</option>
                      <option>App Installs</option>
                      <option>Awareness</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label className="text-sm text-white/70">Platforms</label>
                  <div className="mt-2 grid grid-cols-2 sm:grid-cols-4 gap-2 text-sm">
                    {['Google Ads','Meta (FB/IG)','LinkedIn','TikTok'].map((p) => (
                      <label key={p} className="flex items-center gap-2 px-3 py-2 rounded-xl bg-black/40 border border-white/10">
                        <input type="checkbox" className="accent-cyan-300" />
                        <span className="text-white/80">{p}</span>
                      </label>
                    ))}
                  </div>
                </div>

                <button type="submit" className="mt-2 inline-flex items-center justify-center gap-2 px-5 py-3 rounded-2xl bg-cyan-400/90 hover:bg-cyan-300 text-slate-900 font-semibold transition">
                  Request my plan <ChevronRight size={18} />
                </button>

                <p className="text-xs text-white/60">No spam. We’ll review your goals and send tailored recommendations.</p>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}

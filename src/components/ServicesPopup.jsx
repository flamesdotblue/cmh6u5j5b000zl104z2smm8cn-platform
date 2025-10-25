import { X, CheckCircle2, Rocket, BarChart3, Target, LineChart, Megaphone, Mail, Layers3, Globe2 } from 'lucide-react';

export default function ServicesPopup({ open, onClose, onBookCall }) {
  if (!open) return null;

  const services = [
    {
      title: 'Paid Ads Management',
      icon: <Megaphone size={18} className="text-cyan-300" />,
      items: ['Google Search & Performance Max', 'Meta (Facebook/Instagram)', 'LinkedIn Ads for B2B', 'TikTok & YouTube Ads', 'Retargeting & lifecycle ads']
    },
    {
      title: 'Funnel & CRO',
      icon: <Layers3 size={18} className="text-cyan-300" />,
      items: ['Landing page design (glass UI + speed)', 'A/B testing & experimentation', 'Offer strategy & positioning', 'Form optimization & lead routing']
    },
    {
      title: 'Analytics & Tracking',
      icon: <LineChart size={18} className="text-cyan-300" />,
      items: ['GA4 & Tag Manager setup', 'Server-side tracking (CAPI)', 'Attribution & dashboards', 'KPI architecture & QA']
    },
    {
      title: 'Email & Lifecycle',
      icon: <Mail size={18} className="text-cyan-300" />,
      items: ['Lead nurture & onboarding', 'Win-back & upsell flows', 'Deliverability optimization']
    },
    {
      title: 'SEO Foundations',
      icon: <Globe2 size={18} className="text-cyan-300" />,
      items: ['Technical audit & quick wins', 'High-intent content strategy', 'On-page optimization']
    },
    {
      title: 'Strategy & Creative',
      icon: <Target size={18} className="text-cyan-300" />,
      items: ['Go-to-market planning', 'Messaging & creative angles', 'Monthly growth roadmaps']
    }
  ];

  const outcomes = [
    'Higher conversion rates from the same traffic',
    'Lower CPL and CAC with better audience matching',
    'Predictable scaling with testing frameworks',
    'Crystal-clear measurement and insights'
  ];

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
      <div className="absolute inset-0 bg-slate-950/70 backdrop-blur-sm" onClick={onClose} />

      <div className="relative w-full max-w-5xl">
        <div className="rounded-3xl bg-gradient-to-br from-white/10 to-white/5 border border-white/15 backdrop-blur-2xl shadow-2xl overflow-hidden">
          <div className="flex items-center justify-between px-6 py-4 border-b border-white/10">
            <div className="flex items-center gap-3">
              <div className="h-9 w-9 rounded-xl bg-cyan-400/20 border border-cyan-300/30 grid place-items-center">
                <Rocket size={18} className="text-cyan-300" />
              </div>
              <div>
                <h3 className="font-semibold">All Digital Marketing Services</h3>
                <p className="text-xs text-white/60">Built to drive measurable growth</p>
              </div>
            </div>
            <button onClick={onClose} aria-label="Close" className="p-2 rounded-xl bg-white/10 hover:bg-white/15 border border-white/10">
              <X size={18} />
            </button>
          </div>

          <div className="p-6">
            <div className="grid md:grid-cols-3 gap-5">
              {services.map((s) => (
                <div key={s.title} className="rounded-2xl p-5 bg-white/5 border border-white/10">
                  <div className="flex items-center gap-2 mb-2">
                    {s.icon}
                    <h4 className="font-semibold">{s.title}</h4>
                  </div>
                  <ul className="space-y-2 text-sm text-white/80">
                    {s.items.map((it) => (
                      <li key={it} className="flex gap-2">
                        <CheckCircle2 size={16} className="text-cyan-300 mt-0.5" />
                        <span>{it}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>

            <div className="mt-6 grid md:grid-cols-2 gap-5">
              <div className="rounded-2xl p-5 bg-white/5 border border-white/10">
                <h4 className="font-semibold">What you can expect</h4>
                <ul className="mt-2 space-y-2 text-sm text-white/80">
                  {outcomes.map((o) => (
                    <li key={o} className="flex gap-2">
                      <CheckCircle2 size={16} className="text-cyan-300 mt-0.5" />
                      <span>{o}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="rounded-2xl p-5 bg-gradient-to-br from-cyan-400/15 to-blue-400/10 border border-cyan-300/20">
                <h4 className="font-semibold">Ready to scale with confidence?</h4>
                <p className="text-sm text-white/80 mt-1">Book a free strategy call and get a custom plan tailored to your goals.</p>
                <button onClick={() => { onClose(); onBookCall?.(); }} className="mt-4 inline-flex items-center gap-2 px-5 py-3 rounded-2xl bg-cyan-400/90 hover:bg-cyan-300 text-slate-900 font-semibold">
                  Book my strategy call
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

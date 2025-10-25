import { BarChart3, Target, BadgeCheck, Gauge } from 'lucide-react';

export default function Features() {
  const items = [
    {
      icon: <Target className="text-cyan-300" size={22} />,
      title: 'Laser-focused targeting',
      desc: 'Systematic audience testing across intent tiers to find scalable pockets of profit.'
    },
    {
      icon: <BarChart3 className="text-cyan-300" size={22} />,
      title: 'Creative that converts',
      desc: 'Hook-first ad creative with rapid iteration loops powered by insights, not guesses.'
    },
    {
      icon: <Gauge className="text-cyan-300" size={22} />,
      title: 'CRO + funnel optimization',
      desc: 'Landing pages with glassmorphism UI, speed, clarity, and compelling proof to lift CVR.'
    },
    {
      icon: <BadgeCheck className="text-cyan-300" size={22} />,
      title: 'Measurement done right',
      desc: 'Robust tracking, server-side events, and clean dashboards so decisions are data-backed.'
    }
  ];

  return (
    <section className="relative py-20">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(34,211,238,0.08),transparent_60%)] pointer-events-none" />
      <div className="container mx-auto px-6 max-w-7xl relative">
        <div className="max-w-2xl">
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight">Built for performance at every step</h2>
          <p className="mt-3 text-white/70">We map your ideal customer journey, align messaging, and optimize the full funnel for compounding gains.</p>
        </div>

        <div className="mt-10 grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {items.map((it, i) => (
            <div key={i} className="rounded-2xl p-5 bg-white/5 border border-white/10 backdrop-blur-xl hover:bg-white/7 transition group">
              <div className="h-10 w-10 rounded-xl bg-cyan-400/10 border border-cyan-300/20 grid place-items-center mb-3">
                {it.icon}
              </div>
              <h3 className="font-semibold">{it.title}</h3>
              <p className="text-sm text-white/70 mt-1">{it.desc}</p>
            </div>
          ))}
        </div>

        <div className="mt-12 grid md:grid-cols-3 gap-5">
          <StatCard label="Avg. Conversion Rate Lift" value="+42%" />
          <StatCard label="Cost Per Lead Reduction" value="-27%" />
          <StatCard label="Average ROAS" value="3.2x" />
        </div>
      </div>
    </section>
  );
}

function StatCard({ label, value }) {
  return (
    <div className="rounded-2xl p-6 bg-gradient-to-br from-white/8 to-white/3 border border-white/10 backdrop-blur-xl">
      <div className="text-sm text-white/60">{label}</div>
      <div className="text-3xl font-extrabold mt-1 tracking-tight">{value}</div>
    </div>
  );
}

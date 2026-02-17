const products = [
  {
    name: 'Agent Forge',
    tagline: 'Build, deploy, and monetize AI agents in minutes.',
    url: 'https://agent-forge.app',
    gradient: 'from-orange-500 to-amber-500',
    features: ['Visual Agent Builder', 'Voice-Enabled Agents', 'One-Click Deployment', 'Built-in Monetization'],
  },
  {
    name: 'Vigil',
    tagline: 'Enterprise AI business intelligence that never sleeps.',
    url: 'https://vigilplatform.ai',
    gradient: 'from-blue-500 to-sky-500',
    features: ['Real-Time Analytics', 'AI-Powered Insights', 'Enterprise Security', 'Custom Integrations'],
  },
  {
    name: 'Nexus Studio',
    tagline: 'AI-powered creative production suite.',
    url: '#',
    gradient: 'from-purple-500 to-violet-500',
    features: ['AI Video Editing', 'Text-to-Speech', 'Auto Captioning', 'Multi-Language Dubbing'],
    comingSoon: true,
  },
];

export default function HomePage() {
  return (
    <div className="min-h-screen">
      {/* Hero */}
      <header className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-zinc-900 to-zinc-950" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(255,255,255,0.05),transparent_70%)]" />
        <nav className="relative z-10 flex items-center justify-between px-6 py-5 max-w-6xl mx-auto">
          <span className="text-lg font-bold tracking-tight">
            SaaS Master<span className="text-zinc-500"> Enterprises</span>
          </span>
          <a
            href="mailto:dorrian@saas-master.com"
            className="text-sm text-zinc-400 hover:text-white transition"
          >
            Contact
          </a>
        </nav>
        <div className="relative z-10 text-center px-6 pt-24 pb-32">
          <h1 className="text-5xl sm:text-6xl font-bold tracking-tight leading-tight">
            We build AI platforms
            <br />
            <span className="bg-gradient-to-r from-amber-400 to-orange-500 bg-clip-text text-transparent">
              that mean business.
            </span>
          </h1>
          <p className="mt-6 text-lg text-zinc-400 max-w-2xl mx-auto">
            SaaS Master Enterprises creates enterprise-grade AI software
            that helps businesses automate, analyze, and accelerate.
          </p>
        </div>
      </header>

      {/* Products */}
      <section className="px-6 py-20 max-w-6xl mx-auto">
        <h2 className="text-sm font-semibold uppercase tracking-widest text-zinc-500 mb-12 text-center">
          Our Products
        </h2>
        <div className="grid md:grid-cols-3 gap-6">
          {products.map((p) => (
            <a
              key={p.name}
              href={p.url}
              target={p.comingSoon ? undefined : '_blank'}
              rel={p.comingSoon ? undefined : 'noopener noreferrer'}
              className="group relative rounded-2xl border border-zinc-800 bg-zinc-900/50 p-6 hover:border-zinc-700 transition-all hover:-translate-y-1"
            >
              {p.comingSoon && (
                <span className="absolute top-4 right-4 text-xs font-medium px-2 py-0.5 rounded-full bg-zinc-800 text-zinc-400">
                  Coming Soon
                </span>
              )}
              <h3 className={`text-xl font-bold bg-gradient-to-r ${p.gradient} bg-clip-text text-transparent`}>
                {p.name}
              </h3>
              <p className="mt-2 text-sm text-zinc-400">{p.tagline}</p>
              <ul className="mt-4 space-y-1.5">
                {p.features.map((f) => (
                  <li key={f} className="text-xs text-zinc-500 flex items-center gap-2">
                    <span className={`w-1 h-1 rounded-full bg-gradient-to-r ${p.gradient}`} />
                    {f}
                  </li>
                ))}
              </ul>
              {!p.comingSoon && (
                <span className="mt-4 inline-block text-xs text-zinc-500 group-hover:text-zinc-300 transition">
                  Visit site &rarr;
                </span>
              )}
            </a>
          ))}
        </div>
      </section>

      {/* About */}
      <section className="px-6 py-20 border-t border-zinc-800/50">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-2xl font-bold">Enterprise-grade AI, startup speed.</h2>
          <p className="mt-4 text-zinc-400 leading-relaxed">
            Founded in Woodbury, Minnesota, SaaS Master Enterprises builds
            AI-powered platforms that solve real business problems. We combine
            cutting-edge machine learning with production-ready engineering
            to deliver software that enterprises can trust.
          </p>
        </div>
      </section>

      {/* Footer */}
      <footer className="px-6 py-10 border-t border-zinc-800/50">
        <div className="max-w-6xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-zinc-500">
          <span>&copy; {new Date().getFullYear()} SaaS Master Enterprises. All rights reserved.</span>
          <div className="flex items-center gap-6">
            <a href="mailto:dorrian@saas-master.com" className="hover:text-white transition">
              dorrian@saas-master.com
            </a>
            <span>Woodbury, MN</span>
          </div>
        </div>
      </footer>
    </div>
  );
}

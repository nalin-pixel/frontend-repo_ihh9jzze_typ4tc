import React from "react";

const Hero = () => {
  return (
    <section className="relative pt-28 pb-14 overflow-hidden">
      {/* background */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(59,130,246,0.15),transparent_50%)]" />
      </div>

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-10 items-center">
          <div>
            <div className="inline-flex items-center gap-2 rounded-full border border-blue-500/30 bg-slate-800/40 px-3 py-1 text-xs text-blue-200/80 mb-5">
              <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 animate-pulse" />
              Built for disciplined index trading
            </div>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-white">
              The TradingView System Mads Uses Daily to Trade With Discipline and Protect Real Capital.
            </h1>
            <p className="mt-6 text-lg text-blue-100/90 leading-relaxed max-w-xl">
              Get the software, setup guides, and trading framework on Whop. Install it in minutes and learn to trade profitably without overleveraging.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <a
                href="https://whop.com/" target="_blank" rel="noreferrer"
                className="inline-flex items-center gap-2 rounded-lg bg-gradient-to-r from-blue-500 to-cyan-400 px-5 py-3 text-slate-900 font-semibold shadow-lg shadow-blue-500/30 hover:shadow-blue-500/50 transition"
              >
                Get the software
              </a>
              <a
                href="#features"
                className="inline-flex items-center gap-2 rounded-lg border border-white/10 px-5 py-3 text-white hover:bg-white/5 transition"
              >
                See how it works
              </a>
            </div>
            <p className="mt-4 text-sm text-blue-200/70">Works directly inside TradingView. No brokerage access required.</p>
          </div>

          <div className="relative">
            <div className="absolute -top-16 -right-16 w-72 h-72 bg-blue-500/20 blur-3xl rounded-full" />
            <div className="relative rounded-2xl border border-white/10 bg-slate-800/40 p-2 shadow-2xl">
              <div className="aspect-[16/10] overflow-hidden rounded-xl bg-slate-900">
                <img src="/hero-chart.png" alt="Trading chart preview" className="w-full h-full object-cover opacity-90" />
              </div>
              <div className="mt-3 grid grid-cols-3 gap-3 text-center">
                {[
                  { label: "Stop over-trading", value: "Discipline" },
                  { label: "Reduce leverage", value: "Risk Control" },
                  { label: "Clear entries", value: "Rules-Based" },
                ].map((stat) => (
                  <div key={stat.value} className="rounded-lg border border-white/10 bg-slate-800/60 px-3 py-2">
                    <div className="text-xs text-blue-200/70">{stat.label}</div>
                    <div className="text-sm font-semibold text-white">{stat.value}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;

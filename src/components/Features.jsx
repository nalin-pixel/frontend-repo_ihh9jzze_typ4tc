import React from "react";

const Feature = ({ title, description }) => (
  <div className="rounded-2xl border border-white/10 bg-slate-800/50 p-6 hover:bg-slate-800/70 transition">
    <h3 className="text-white font-semibold mb-2">{title}</h3>
    <p className="text-blue-200/80 text-sm leading-relaxed">{description}</p>
  </div>
);

const Features = () => {
  const items = [
    {
      title: "Disciplined Trade Execution",
      description:
        "Clear long/short rules to avoid impulse trades. Fixed risk templates help you size correctly every time.",
    },
    {
      title: "Risk & Leverage Control",
      description:
        "Risk overlays and alerts designed to stop overexposure before it happens, so your downside stays capped.",
    },
    {
      title: "Works on Major Indices",
      description:
        "Optimized for DAX, Nasdaq, FTSE100, Dow, and S&P500 with presets you can load in seconds.",
    },
    {
      title: "Fast, Friendly Setup",
      description:
        "Simple install via Whop with video guides and a step-by-step framework to get profitable faster.",
    },
  ];

  return (
    <section id="features" className="py-16">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-10">
          <h2 className="text-2xl sm:text-3xl font-bold text-white">What you get</h2>
          <p className="text-blue-200/80 mt-2">Tools and rules that help you trade without over-trading or over-leveraging.</p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {items.map((f) => (
            <Feature key={f.title} {...f} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;

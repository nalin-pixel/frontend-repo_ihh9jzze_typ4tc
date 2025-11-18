import React from "react";

const IndexCard = ({ name, description, color }) => (
  <div className="rounded-2xl border border-white/10 bg-slate-800/50 p-6 hover:bg-slate-800/70 transition">
    <div className="flex items-center justify-between mb-3">
      <h3 className="text-white font-semibold">{name}</h3>
      <span className={`w-2 h-2 rounded-full ${color}`} />
    </div>
    <p className="text-blue-200/80 text-sm leading-relaxed">{description}</p>
  </div>
);

const Indices = () => {
  const data = [
    { name: "DAX", description: "German blue-chip index. Volatile sessions with sharp European opens.", color: "bg-yellow-400" },
    { name: "Nasdaq", description: "US tech-heavy index. Momentum and trend continuations are common.", color: "bg-pink-400" },
    { name: "FTSE100", description: "UK large-cap index. Often mean-reverting with steady ranges.", color: "bg-green-400" },
    { name: "Dow", description: "US industrials. Cleaner rotational moves across sessions.", color: "bg-blue-400" },
    { name: "S&P500", description: "Broad US market. Excellent for structured, rules-based strategies.", color: "bg-red-400" },
  ];

  return (
    <section id="indices" className="py-16">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-10">
          <h2 className="text-2xl sm:text-3xl font-bold text-white">Built for major indices</h2>
          <p className="text-blue-200/80 mt-2">Presets and templates tuned for the markets you trade most.</p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {data.map((d) => (
            <IndexCard key={d.name} {...d} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Indices;

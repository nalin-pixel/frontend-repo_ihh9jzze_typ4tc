import React from "react";

const Step = ({ n, title, text }) => (
  <div className="flex gap-4 items-start">
    <div className="flex-shrink-0 w-8 h-8 rounded-lg bg-blue-500 text-slate-900 font-bold flex items-center justify-center shadow-lg shadow-blue-500/30">
      {n}
    </div>
    <div>
      <h4 className="text-white font-semibold">{title}</h4>
      <p className="text-blue-200/80 text-sm mt-1 leading-relaxed">{text}</p>
    </div>
  </div>
);

const Framework = () => {
  const steps = [
    { n: 1, title: "Install via Whop", text: "Access the toolkit, video guides, and presets in minutes." },
    { n: 2, title: "Load the template", text: "Add the strategy to your TradingView chart and select your index preset." },
    { n: 3, title: "Follow the rules", text: "Take only qualified setups, size with fixed risk, and respect the stop." },
    { n: 4, title: "Review & improve", text: "Log your trades and iterate with the included checklist and journal prompts." },
  ];

  return (
    <section id="framework" className="py-16">
      <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8 text-left">
        <h2 className="text-2xl sm:text-3xl font-bold text-white mb-8">A simple framework that enforces discipline</h2>
        <div className="space-y-6">
          {steps.map((s) => (
            <Step key={s.n} {...s} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Framework;

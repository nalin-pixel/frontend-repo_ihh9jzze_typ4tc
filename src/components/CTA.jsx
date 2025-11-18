import React from "react";

const CTA = () => {
  return (
    <section className="py-16">
      <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
        <div className="rounded-2xl border border-white/10 bg-gradient-to-br from-blue-600/20 to-cyan-500/10 p-8 text-center">
          <h3 className="text-2xl sm:text-3xl font-bold text-white">Trade with structure. Protect your capital.</h3>
          <p className="text-blue-200/85 mt-2">Join now and get the software, setup guides, and rules framework on Whop.</p>
          <a
            href="https://whop.com/" target="_blank" rel="noreferrer"
            className="mt-6 inline-flex items-center gap-2 rounded-lg bg-gradient-to-r from-blue-500 to-cyan-400 px-6 py-3 text-slate-900 font-semibold shadow-lg shadow-blue-500/30 hover:shadow-blue-500/50 transition"
          >
            Get the software
          </a>
        </div>
      </div>
    </section>
  );
};

export default CTA;

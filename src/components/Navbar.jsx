import React from "react";

const Navbar = () => {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 border-b border-white/10 bg-slate-900/60 backdrop-blur supports-[backdrop-filter]:bg-slate-900/50">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
        <a href="#" className="flex items-center gap-3">
          <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-blue-500 to-cyan-400 shadow-lg shadow-blue-500/30" />
          <span className="text-white font-semibold tracking-tight">Mads Trading System</span>
        </a>
        <nav className="hidden md:flex items-center gap-8 text-sm">
          <a href="#features" className="text-blue-100/80 hover:text-white transition">Features</a>
          <a href="#indices" className="text-blue-100/80 hover:text-white transition">Indices</a>
          <a href="#framework" className="text-blue-100/80 hover:text-white transition">Framework</a>
          <a href="#faq" className="text-blue-100/80 hover:text-white transition">FAQ</a>
        </nav>
        <a
          href="https://whop.com/" target="_blank" rel="noreferrer"
          className="inline-flex items-center gap-2 rounded-lg bg-gradient-to-r from-blue-500 to-cyan-400 px-4 py-2 text-slate-900 font-semibold shadow-lg shadow-blue-500/30 hover:shadow-blue-500/50 transition"
        >
          Get the software
        </a>
      </div>
    </header>
  );
};

export default Navbar;

import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Features from './components/Features';
import Indices from './components/Indices';
import Framework from './components/Framework';
import CTA from './components/CTA';

function App() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950 text-white">
      <Navbar />
      <main>
        <Hero />
        <Features />
        <Indices />
        <Framework />
        <CTA />
      </main>
      <footer id="faq" className="py-12 border-t border-white/10 bg-slate-950/60">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-3 gap-8 text-sm text-blue-200/80">
            <div>
              <h4 className="text-white font-semibold mb-2">What platforms are supported?</h4>
              <p>Runs on TradingView. You don’t need to connect your broker or deposit funds.</p>
            </div>
            <div>
              <h4 className="text-white font-semibold mb-2">Which markets does it suit?</h4>
              <p>Optimized for DAX, Nasdaq, FTSE100, Dow, and S&P500 with presets for each.</p>
            </div>
            <div>
              <h4 className="text-white font-semibold mb-2">How fast is setup?</h4>
              <p>Most traders install in minutes via Whop and follow the included video guides.</p>
            </div>
          </div>
          <div className="mt-10 text-center text-blue-300/60 text-xs">© {new Date().getFullYear()} Mads Trading System. All rights reserved.</div>
        </div>
      </footer>
    </div>
  );
}

export default App;

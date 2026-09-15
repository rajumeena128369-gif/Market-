/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { LineChart, TrendingUp, Target, BookOpen, Send, AlertTriangle, ShieldCheck, BarChart2, Activity } from 'lucide-react';

function TelegramButton({ className = "", text = "JOIN CHANNEL", iconSize = "w-3 h-3", href = "https://t.me/+B-nMOtLdTRtlMGJl" }) {
  return (
    <a 
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className={`group relative inline-flex items-center justify-center gap-1.5 font-bold text-white bg-[#0088cc] rounded-full overflow-hidden shadow-[0_0_15px_rgba(0,136,204,0.3)] hover:shadow-[0_0_20px_rgba(0,136,204,0.5)] transition-all active:scale-95 ${className}`}
    >
      <div className="absolute inset-0 bg-white/20 translate-y-full group-hover:translate-y-0 transition-transform duration-300 ease-out"></div>
      <Send className={`${iconSize} relative z-10 fill-white/20`} />
      <span className="relative z-10 tracking-wide text-[10px] sm:text-[11px]">{text}</span>
    </a>
  );
}

export default function App() {
  return (
    <div className="min-h-screen font-sans text-slate-300 bg-[#020408] flex flex-col items-center justify-center p-3 sm:p-4 selection:bg-blue-500/30 bg-[url('https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?q=80&w=2070&auto=format&fit=crop')] bg-cover bg-center bg-no-repeat bg-fixed bg-blend-overlay">
      
      {/* Main Mobile-Sized Container */}
      <div className="w-full max-w-[380px] bg-[#060a13]/95 backdrop-blur-3xl border border-white/10 rounded-2xl shadow-2xl overflow-hidden flex flex-col my-auto">
        
        {/* Top Bar */}
        <div className="flex items-center justify-between px-4 py-3 border-b border-white/5 bg-white/5">
          <div className="flex items-center gap-2">
            <div className="w-6 h-6 bg-blue-500/20 rounded-md flex items-center justify-center border border-blue-500/30 shrink-0">
              <BarChart2 className="w-3.5 h-3.5 text-blue-400" />
            </div>
            <span className="font-bold text-[13px] text-white tracking-tight">Equity Dynamo</span>
          </div>
          <TelegramButton className="px-3 py-1.5 shrink-0" text="JOIN" iconSize="w-2.5 h-2.5" />
        </div>

        <div className="p-4 relative">
          {/* Soft glow background */}
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[200px] h-[200px] bg-blue-600/20 blur-[70px] rounded-full pointer-events-none"></div>
          
          <div className="relative z-10 text-center flex flex-col items-center">
            
            <LiveTradingDashboard />

            <h1 className="text-[22px] font-black tracking-tight mb-1 text-transparent bg-clip-text bg-gradient-to-b from-white to-slate-400 leading-tight">
              NIFTY TRADING INSIGHTS
            </h1>
            <p className="text-[11px] text-slate-400 font-medium mb-4">
              Market को समझें <span className="text-blue-500 mx-1 opacity-70">•</span> Opportunities को पहचानें
            </p>

            {/* Primary Button */}
            <TelegramButton className="w-full px-5 py-3 mb-4" text="JOIN OFFICIAL TELEGRAM" iconSize="w-3.5 h-3.5" />

            {/* Credentials Badge */}
            <div className="w-full bg-[#0a0f1c]/80 rounded-xl p-3 border border-white/5 mb-4 flex flex-col gap-2 text-center">
              <div>
                <h2 className="text-[11px] font-bold text-white">Equity Dynamo Official Channel</h2>
              </div>
              <div className="flex items-center justify-center gap-1.5 text-[10px] bg-emerald-500/10 text-emerald-400 py-1.5 px-2 rounded-lg font-semibold border border-emerald-500/20 leading-tight break-words text-center">
                <ShieldCheck className="w-3.5 h-3.5 shrink-0" />
                <span>SEBI Reg: INH000016269</span>
              </div>
            </div>

            {/* Features Grid - Single Column for pure mobile look */}
            <div className="w-full flex flex-col gap-2 text-left">
              <FeatureItem icon={<TrendingUp className="w-3.5 h-3.5 text-blue-400 shrink-0" />} text="NIFTY Market Analysis" />
              <FeatureItem icon={<LineChart className="w-3.5 h-3.5 text-blue-400 shrink-0" />} text="Technical Insights" />
              <FeatureItem icon={<Target className="w-3.5 h-3.5 text-blue-400 shrink-0" />} text="Important Market Levels" />
              <FeatureItem icon={<BookOpen className="w-3.5 h-3.5 text-blue-400 shrink-0" />} text="Trading Education" />
            </div>
          </div>
        </div>

        {/* Bottom Footer Risk Info */}
        <div className="bg-[#03050a] p-4 border-t border-white/5 flex flex-col gap-3">
          <div className="flex items-start gap-2 text-left">
            <div className="p-1.5 bg-red-500/10 rounded-md border border-red-500/20 shrink-0 mt-0.5">
              <AlertTriangle className="w-3 h-3 text-red-500" />
            </div>
            <p className="text-[9px] leading-relaxed text-slate-500 break-words">
              <strong className="text-slate-400">Risk Warning:</strong> Trading involves risk. 
              Past performance is not indicative of future results. No assured returns are promised.
            </p>
          </div>
          <TelegramButton className="w-full px-4 py-2.5" text="JOIN NOW" iconSize="w-3 h-3" />
        </div>

      </div>
    </div>
  );
}

function FeatureItem({ icon, text }) {
  return (
    <div className="flex items-center gap-2.5 p-2.5 bg-white/5 rounded-lg border border-white/5 hover:bg-white/10 transition-colors">
      <div className="flex-shrink-0 w-6 h-6 flex items-center justify-center bg-blue-500/10 rounded-md border border-blue-500/20">
        {icon}
      </div>
      <span className="font-semibold text-[11px] text-slate-200">{text}</span>
    </div>
  );
}

function LiveTradingDashboard() {
  const [data, setData] = React.useState(Array.from({ length: 20 }, () => 24500 + Math.random() * 50));
  const [currentPrice, setCurrentPrice] = React.useState(24525.50);
  const [change, setChange] = React.useState(124.30);
  
  React.useEffect(() => {
    const interval = setInterval(() => {
      const tick = (Math.random() - 0.45) * 15; // Slightly bullish random tick
      setCurrentPrice(prev => {
        const newPrice = prev + tick;
        setData(currentData => [...currentData.slice(1), newPrice]);
        return newPrice;
      });
      setChange(prev => prev + tick);
    }, 1500);
    return () => clearInterval(interval);
  }, []);

  const isUp = change >= 0;
  const color = isUp ? "text-emerald-400" : "text-rose-400";
  const glowColor = isUp ? "shadow-[0_0_25px_rgba(16,185,129,0.15)]" : "shadow-[0_0_25px_rgba(244,63,94,0.15)]";
  const borderColor = isUp ? "border-emerald-500/30" : "border-rose-500/30";

  // Calculate SVG points
  const min = Math.min(...data);
  const max = Math.max(...data);
  const range = max - min || 1;
  const points = data.map((val, i) => `${(i / (data.length - 1)) * 100},${100 - ((val - min) / range) * 80 - 10}`).join(' ');

  return (
    <div className={`w-full bg-[#0a0f1c]/90 rounded-xl border ${borderColor} p-3 sm:p-4 mb-5 flex flex-col gap-2 relative overflow-hidden ${glowColor} transition-all duration-500`}>
      {/* Header */}
      <div className="flex justify-between items-center z-10">
        <span className="text-[10px] font-bold text-slate-300 tracking-widest uppercase">NIFTY 50 (Live)</span>
        <div className="flex items-center gap-1.5 px-2 py-0.5 rounded-full bg-red-500/10 border border-red-500/20">
          <span className="w-1.5 h-1.5 rounded-full bg-red-500 animate-pulse"></span>
          <span className="text-[8px] font-bold text-red-500 tracking-widest uppercase">Market Open</span>
        </div>
      </div>
      
      {/* Price & Chart Row */}
      <div className="flex items-end justify-between z-10">
        <div className="flex flex-col text-left">
          <span className={`text-2xl font-black tracking-tight ${color} transition-colors duration-300`}>
            {currentPrice.toLocaleString('en-IN', { minimumFractionDigits: 2, maximumFractionDigits: 2 })}
          </span>
          <span className={`text-[10px] font-bold ${color} transition-colors duration-300`}>
            {isUp ? "+" : ""}{change.toFixed(2)} ({(change / 24500 * 100).toFixed(2)}%)
          </span>
        </div>
        
        {/* Live SVG Sparkline Chart */}
        <div className="w-24 h-10 -mr-1">
           <svg viewBox="0 0 100 100" className="w-full h-full overflow-visible" preserveAspectRatio="none">
             <defs>
               <linearGradient id="chart-gradient" x1="0" x2="0" y1="0" y2="1">
                 <stop offset="0%" stopColor={isUp ? "#10b981" : "#f43f5e"} stopOpacity="0.3" />
                 <stop offset="100%" stopColor={isUp ? "#10b981" : "#f43f5e"} stopOpacity="0" />
               </linearGradient>
             </defs>
             <polygon 
               points={`0,100 ${points} 100,100`}
               fill="url(#chart-gradient)"
               className="transition-all duration-300"
             />
             <polyline 
               points={points} 
               fill="none" 
               stroke={isUp ? "#10b981" : "#f43f5e"} 
               strokeWidth="3" 
               strokeLinecap="round" 
               strokeLinejoin="round" 
               className="transition-all duration-300"
             />
           </svg>
        </div>
      </div>
      
      {/* Depth Bar */}
      <div className="w-full h-1 flex rounded-full overflow-hidden mt-1 opacity-70 z-10 bg-rose-500">
        <div 
          className="h-full bg-emerald-500 transition-all duration-500" 
          style={{ width: `${Math.max(20, Math.min(80, 50 + (change / 10)))}%` }}
        ></div>
      </div>
      <div className="flex justify-between text-[8px] text-slate-500 font-semibold uppercase mt-0.5 z-10">
        <span>Buyers</span>
        <span>Sellers</span>
      </div>
    </div>
  );
}



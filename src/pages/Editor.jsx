import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Sparkles, BrainCircuit, Wrench, Terminal, ArrowRight } from 'lucide-react';

export default function Editor() {
  const navigate = useNavigate();

  return (
    // 🎨 UNIFORM SKIN: Blended seamlessly into your pale sky-blue container matrix
    <div className="min-h-screen bg-sky-50/60 dark:bg-slate-950 text-slate-700 dark:text-slate-100 px-4 py-12 md:px-12 transition-colors duration-300 flex flex-col items-center justify-center relative overflow-hidden">
      
      {/* Backstage Ambient Studio Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[280px] h-[280px] md:w-[700px] md:h-[400px] bg-indigo-200/40 dark:bg-indigo-900/15 blur-[100px] md:blur-[150px] rounded-full pointer-events-none z-0"></div>

      {/* Main Framework Showcase Container Box */}
      <div className="max-w-2xl w-full bg-white dark:bg-slate-900 border-2 border-sky-100 dark:border-slate-800 rounded-[2.5rem] p-8 md:p-12 text-center shadow-xl dark:shadow-none relative z-10 space-y-6 animate-fadeIn">
        
        {/* Active R&D Indicator Badge */}
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-amber-500/10 text-amber-600 dark:text-amber-400 border border-amber-500/20 backdrop-blur-sm mx-auto shadow-sm">
          <BrainCircuit size={14} className="animate-spin [animation-duration:4s]" />
          <span className="text-[10px] md:text-xs font-black uppercase tracking-widest">Model Training In Progress</span>
        </div>

        {/* Dynamic Typography Header */}
        <div className="space-y-2">
          <h1 className="text-3xl md:text-5xl font-black tracking-tight text-slate-800 dark:text-white uppercase leading-none">
            AI Resume Editor
          </h1>
          <p className="text-xs md:text-sm font-bold uppercase tracking-wider text-slate-400">
            Design & Restructure Profiles with Real-Time Inference
          </p>
        </div>

        {/* Separator Divider Lines */}
        <div className="w-24 h-1 bg-gradient-to-r from-indigo-500 to-violet-500 rounded-full mx-auto"></div>

        {/* Transparent Core Reason Panel Card */}
        <div className="bg-sky-50/50 dark:bg-slate-950/50 border-2 border-sky-100 dark:border-slate-800/60 rounded-2xl p-6 text-left space-y-4 shadow-inner">
          <div className="flex items-center gap-2 text-indigo-600 dark:text-indigo-400 font-black text-xs uppercase tracking-wider">
            <Terminal size={14} strokeWidth={2.5} /> Technical Pipeline Report:
          </div>
          <p className="text-xs md:text-sm font-extrabold text-slate-500 dark:text-slate-400 leading-relaxed">
            Our underlying Natural Language Processing (NLP) pipeline and generative LLM models are currently undergoing deep fine-tuning on specialized datasets. While the architecture is 100% stable for structural keyword extraction, contextual calibration filters are being integrated to synthesize fluid, high-impact professional descriptions from raw terms.
          </p>
          <div className="text-[10px] font-black uppercase tracking-widest bg-white dark:bg-slate-900 border border-sky-100 dark:border-slate-800/80 p-2.5 rounded-lg text-slate-400 block text-center">
            🚀 Target Launch Vector: Coming Next Deployment Cycle
          </div>
        </div>

        {/* Informative Sub-Features Block Grid Preview */}
        <div className="grid grid-cols-2 gap-4 pt-2">
          <div className="p-4 bg-white dark:bg-slate-950/40 border border-sky-100 dark:border-slate-800/60 rounded-xl text-left shadow-sm">
            <Wrench size={16} className="text-indigo-600 mb-2" strokeWidth={2.5} />
            <h4 className="text-xs font-black uppercase tracking-tight text-slate-700 dark:text-slate-300">Semantic Rewrite</h4>
            <p className="text-[10px] font-bold text-slate-400 mt-1 uppercase leading-snug">Grammar logic auto synthesis blocks.</p>
          </div>
          <div className="p-4 bg-white dark:bg-slate-950/40 border border-sky-100 dark:border-slate-800/60 rounded-xl text-left shadow-sm">
            <Sparkles size={16} className="text-purple-500 mb-2" strokeWidth={2.5} />
            <h4 className="text-xs font-black uppercase tracking-tight text-slate-700 dark:text-slate-300">Tailored Suggestions</h4>
            <p className="text-[10px] font-bold text-slate-400 mt-1 uppercase leading-snug">Inference matches matching JD metrics.</p>
          </div>
        </div>

        {/* Action Route Redirect Link Back To Stability Sandbox */}
        <div className="pt-4">
          <button
            type="button"
            onClick={() => navigate('/analyze')}
            className="inline-flex items-center gap-2 bg-gradient-to-r from-indigo-600 to-violet-600 text-white font-black text-xs uppercase tracking-widest px-8 py-3.5 rounded-xl shadow-lg shadow-indigo-600/20 active:scale-95 transition"
          >
            Explore Live Analyzer Sandbox <ArrowRight size={14} strokeWidth={2.5} />
          </button>
        </div>

      </div>
    </div>
  );
}
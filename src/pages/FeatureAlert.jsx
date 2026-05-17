import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Construction, ArrowLeft, Terminal, ShieldAlert } from 'lucide-react';

export default function FeatureAlert() {
  const navigate = useNavigate();

  return (
    // 🎨 UNIFORM SKIN: Fully integrated into the pale sky-blue container framework
    <div className="min-h-screen bg-sky-50/60 dark:bg-slate-950 text-slate-700 dark:text-slate-100 px-4 py-12 flex flex-col items-center justify-center transition-colors duration-300 relative overflow-hidden">
      
      {/* Ambient Backdrop Studio Light Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[280px] h-[280px] md:w-[650px] md:h-[400px] bg-indigo-200/40 dark:bg-indigo-900/15 blur-[100px] md:blur-[150px] rounded-full pointer-events-none z-0"></div>

      {/* Main Container Box */}
      <div className="max-w-xl w-full bg-white dark:bg-slate-900 border-2 border-sky-100 dark:border-slate-800 rounded-[2.5rem] p-8 md:p-12 text-center shadow-xl dark:shadow-none relative z-10 space-y-6 animate-fadeIn">
        
        {/* R&D Active Operations Status Badge */}
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-indigo-500/10 text-indigo-600 dark:text-indigo-400 border border-indigo-500/20 backdrop-blur-sm mx-auto shadow-sm">
          <Construction size={14} className="animate-pulse" />
          <span className="text-[10px] md:text-xs font-black uppercase tracking-widest">Feature Under Construction</span>
        </div>

        {/* Header Typography */}
        <div className="space-y-2">
          <h1 className="text-2xl md:text-4xl font-black tracking-tight text-slate-800 dark:text-white uppercase leading-none">
            Module Under R&D
          </h1>
          <p className="text-xs md:text-sm font-bold uppercase tracking-wider text-slate-400">
            Authentication & Security Layer Deployment
          </p>
        </div>

        {/* Visual Structural Divider */}
        <div className="w-16 h-1 bg-gradient-to-r from-indigo-500 to-violet-500 rounded-full mx-auto"></div>

        {/* Corporate Status Informational Card */}
        <div className="bg-sky-50/50 dark:bg-slate-950/50 border-2 border-sky-100 dark:border-slate-800/60 rounded-2xl p-6 text-left space-y-3.5 shadow-inner">
          <div className="flex items-center gap-2 text-indigo-600 dark:text-indigo-400 font-black text-xs uppercase tracking-wider">
            <Terminal size={14} strokeWidth={2.5} /> Pipeline Status Message:
          </div>
          <p className="text-xs md:text-sm font-extrabold text-slate-500 dark:text-slate-400 leading-relaxed">
            We are actively fine-tuning our production data streaming protocols, secure OAuth configurations, and stateful verification loops. This module is undergoing structural compliance auditing and will be live in the upcoming engineering deployment cycle.
          </p>
        </div>

        {/* Action Trigger Backtrack Route Button */}
        <div className="pt-2">
          <button
            type="button"
            onClick={() => navigate(-1)} // Navigates safely back to the user's previous history view vectors
            className="inline-flex items-center gap-2 bg-gradient-to-r from-indigo-600 to-violet-600 text-white font-black text-xs uppercase tracking-widest px-8 py-3.5 rounded-xl shadow-lg shadow-indigo-600/20 active:scale-95 transition"
          >
            <ArrowLeft size={14} strokeWidth={2.5} /> Return to Sandbox Workspace
          </button>
        </div>

      </div>
    </div>
  );
}
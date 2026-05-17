import React from 'react';
import { Target, Zap, ShieldCheck, Cpu, Award } from 'lucide-react'; // 🔥 CLEANED: Removed unused icon token imports
import Testimonials from '../components/ui/Testimonials'; 
import CorporateTestimonials from '../components/ui/CorporateTestimonials';

export default function About() {
  
  // Enterprise-Grade Engineering Feature Mapping
  const features = [
    {
      icon: <Cpu className="w-6 h-6 text-indigo-500" strokeWidth={2.5} />,
      title: "Enterprise Multi-Core Multiprocessing",
      description: "Our core architecture leverages native Python process pooling to execute concurrent parsing blocks. It seamlessly evaluates 100+ resumes simultaneously in a single click without server degradation or performance throttling."
    },
    {
      icon: <Target className="w-6 h-6 text-emerald-500" strokeWidth={2.5} />,
      title: "Predictive ATS Scoring Engine",
      description: "Powered by advanced SpaCy NLP pipeline models, the core engine contextually intercepts technical vocabularies to generate an unbiased, weighted metric fitment index matching target job criteria."
    },
    {
      icon: <Zap className="w-6 h-6 text-blue-500" strokeWidth={2.5} />,
      title: "Alternative Path Recommendations",
      description: "When a profile falls short of a targeted benchmark, our algorithm mathematically cross-examines competency vectors against multiple standard engineering tracks, mapping alternate paths showing compatibility scores of 50% or above."
    },
    {
      icon: <ShieldCheck className="w-6 h-6 text-purple-500" strokeWidth={2.5} />,
      title: "100% Stateless Security Guardrail",
      description: "Engineered for absolute corporate data compliance. All document text parsing executes dynamically inside volatile RAM stream buffers and is instantly flushed upon response delivery—guaranteeing zero data retention."
    }
  ];

  // Global Analytical Statistics Blocks
  const stats = [
    { value: "99.2%", label: "ATS PARSING ACCURACY" },
    { value: "1-Click", label: "BULK HR SHORTLISTING" },
    { value: "Zero", label: "PERMANENT DATA RETENTION" },
    { value: "Less than 3s", label: "SINGLE CV ANALYSIS TIME" }
  ];

  return (
    // 🎨 UNIFORM SKIN: Fully integrated with the comfortable sky-blue tint background framework
    <div className="min-h-screen bg-sky-50/60 dark:bg-slate-950 text-slate-700 dark:text-slate-100 px-4 py-12 md:px-12 transition-colors duration-300">
      <div className="max-w-7xl mx-auto space-y-20 mt-8">
        
        {/* HERO MISSION HEADER */}
        <div className="text-center space-y-4 max-w-4xl mx-auto">
          <span className="text-xs font-black uppercase tracking-widest px-3 py-1.5 rounded-xl bg-indigo-500/10 text-indigo-600 dark:text-indigo-400 border-2 border-sky-100">
            Our Mission & Blueprint
          </span>
          <h1 className="text-4xl md:text-6xl font-black tracking-tight bg-gradient-to-r from-blue-600 via-indigo-500 to-purple-500 dark:from-blue-400 dark:via-violet-400 dark:to-indigo-400 bg-clip-text text-transparent leading-tight uppercase">
            Bridging the Gap Between Talent and Corporate Precision.
          </h1>
          <p className="text-sm md:text-base text-slate-500 dark:text-slate-400 font-extrabold max-w-3xl mx-auto leading-relaxed">
            ResuRanker is an intelligent, high-velocity Next-Gen Automated Tracking System (ATS) screening and candidate ranking pipeline designed to eliminate processing bottlenecks and build an entirely transparent workforce matching index.
          </p>
        </div>

        {/* STATISTICAL GRID (Sky blue uniform block system) */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-5">
          {stats.map((stat, idx) => (
            <div 
              key={idx} 
              className="bg-white dark:bg-slate-900 border-2 border-sky-100 dark:border-slate-800 p-6 rounded-2xl text-center shadow-md dark:shadow-none flex flex-col justify-center space-y-1.5"
            >
              <div className="text-3xl md:text-4xl font-mono font-black text-indigo-600 dark:text-indigo-400">{stat.value}</div>
              <div className="text-[10px] md:text-xs font-black tracking-wider text-slate-400 dark:text-slate-500 uppercase">{stat.label}</div>
            </div>
          ))}
        </div>

        {/* FEATURED CAPABILITIES GRID */}
        <div className="space-y-8">
          <div className="text-center md:text-left">
            <h2 className="text-xs font-black tracking-widest uppercase text-slate-400 dark:text-slate-500">Engine Architecture</h2>
            <p className="text-2xl font-black mt-1 uppercase text-slate-800 dark:text-slate-100">Core Scalability Vectors</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {features.map((feat, index) => (
              <div 
                key={index}
                className="bg-white dark:bg-slate-900 border-2 border-sky-100 dark:border-slate-800/80 p-6 rounded-2xl flex items-start gap-4 shadow-md dark:shadow-none hover:border-indigo-400 dark:hover:border-slate-700 transition duration-200 group"
              >
                <div className="p-3 bg-sky-50 dark:bg-slate-950 rounded-xl border-2 border-sky-100 dark:border-slate-800 group-hover:scale-110 transition-transform shrink-0">
                  {feat.icon}
                </div>
                <div className="space-y-1.5">
                  <h3 className="text-base md:text-lg font-black text-slate-800 dark:text-slate-100 tracking-tight uppercase">{feat.title}</h3>
                  <p className="text-xs md:text-sm font-extrabold text-slate-500 dark:text-slate-400 leading-relaxed">{feat.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* CORE CORPORATE VISION PANEL */}
        <div className="bg-white dark:bg-slate-900 border-2 border-sky-200 dark:border-slate-800 rounded-3xl p-8 md:p-12 shadow-md dark:shadow-none relative overflow-hidden group">
          <div className="absolute top-0 right-0 -translate-y-12 translate-x-12 w-96 h-96 bg-indigo-500/5 dark:bg-indigo-500/5 rounded-full blur-3xl pointer-events-none"></div>
          <div className="max-w-4xl space-y-4 relative z-10">
            <div className="inline-flex items-center gap-2 px-3 py-1 bg-indigo-500/10 dark:bg-indigo-500/20 text-indigo-600 dark:text-indigo-400 rounded-xl text-[10px] font-black uppercase tracking-wider border border-indigo-500/20">
              <Award size={12} /> Production-Ready Framework
            </div>
            <h2 className="text-xl md:text-3xl font-black tracking-tight leading-snug uppercase text-slate-800 dark:text-slate-100">
              Automating evaluation workflows for organizations while empowering candidates globally.
            </h2>
            <p className="text-xs md:text-sm font-extrabold text-slate-500 dark:text-slate-400 leading-relaxed max-w-3xl">
              Whether you are an engineer optimizing your technical resume for dynamic target domains, or a corporate talent strategist managing bulk screening operations across hundreds of profiles, ResuRanker provides a rock-solid parallel processing stack tailored to deliver accurate evaluation metrics in real time.
            </p>
          </div>
        </div>

        {/* REVIEWS GRID PIPELINES (Cleanly mounts separate scrolling channels) */}
        <div className="border-t-2 border-sky-100 dark:border-slate-800 pt-16 space-y-8">
          <div className="w-full">
            <Testimonials />
          </div>
          <div className="w-full">
            <CorporateTestimonials />
          </div>
        </div>

      </div>
    </div>
  );
}
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { 
  UploadCloud, Zap, Target, ArrowRight, FileText, X, 
  AlertTriangle, Star, Sparkles, Cpu, ShieldCheck, Layers,
  Wrench, LayoutDashboard, Info 
} from 'lucide-react';
import Testimonials from '../components/ui/Testimonials';

const Home = () => {
  const navigate = useNavigate();
  
  // --- States for File Upload ---
  const [file, setFile] = useState(null);
  const [error, setError] = useState(null);

  // --- Handlers ---
  const handleFileUpload = (e) => {
    setError(null);
    const uploadedFile = e.target.files[0] || (e.dataTransfer && e.dataTransfer.files[0]);

    if (uploadedFile) {
      const fileName = uploadedFile.name.toLowerCase();
      if (fileName.endsWith('.pdf') || fileName.endsWith('.txt')) {
        setFile(uploadedFile);
      } else {
        setError("Invalid format! Please upload only .PDF or .TXT files.");
        if (e.target) e.target.value = null; 
      }
    }
  };

  const removeFile = () => {
    setFile(null);
    setError(null);
  };

  const handleAnalyzeClick = () => {
    navigate('/analyze', { state: { uploadedResume: file } });
  };

  const onDragOver = (e) => e.preventDefault();
  const onDrop = (e) => {
    e.preventDefault();
    handleFileUpload(e);
  };

  return (
    <div className="flex flex-col items-center bg-sky-50/60 dark:bg-slate-950 text-slate-800 dark:text-slate-100 transition-colors duration-500 min-h-screen relative overflow-hidden">
      
      {/* 🔮 MULTI-ANGLE RADIAL LIGHT MATRIX GRID */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[320px] h-[320px] md:w-[900px] md:h-[500px] bg-indigo-200/50 dark:bg-indigo-900/20 blur-[100px] md:blur-[160px] rounded-full pointer-events-none z-0"></div>
      <div className="absolute top-[25%] -left-20 w-[250px] h-[250px] md:w-[600px] md:h-[600px] bg-sky-200/40 dark:bg-sky-900/10 blur-[90px] md:blur-[150px] rounded-full pointer-events-none z-0"></div>
      <div className="absolute bottom-[20%] -right-20 w-[280px] h-[280px] md:w-[700px] md:h-[700px] bg-purple-200/40 dark:bg-purple-900/10 blur-[110px] md:blur-[160px] rounded-full pointer-events-none z-0"></div>

      {/* --- Hero Section --- */}
      <section className="px-4 md:px-6 pt-20 md:pt-24 pb-12 md:pb-16 text-center max-w-6xl w-full relative z-10">
        <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/80 dark:bg-indigo-950/50 border-2 border-sky-100/80 dark:border-indigo-900/50 mb-6 md:mb-8 backdrop-blur-sm shadow-sm">
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-indigo-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-indigo-500"></span>
          </span>
          <span className="text-[10px] md:text-xs font-black text-indigo-600 dark:text-indigo-400 uppercase tracking-wider">New: AI Analysis v2.0</span>
        </div>

        <h1 className="text-4xl sm:text-5xl md:text-7xl lg:text-8xl font-black tracking-tight text-slate-800 dark:text-white leading-[1.1] md:leading-[1.1] uppercase">
          Optimize Your Career with <br className="hidden md:block"/> <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 to-violet-600 dark:from-indigo-400 dark:to-purple-400 drop-shadow-sm">AI Intelligence.</span>
        </h1>
        
        <p className="mt-6 md:mt-8 text-base md:text-lg text-slate-600 dark:text-slate-400 max-w-2xl mx-auto leading-relaxed font-extrabold px-2">
          Stop guessing why you aren't getting interviews. Get a professional ATS-score and AI-driven resume improvements in seconds.
        </p>

        {/* --- DYNAMIC UPLOAD ZONE --- */}
        <div className="mt-12 md:mt-16 w-full max-w-4xl mx-auto group px-2 md:px-0">
          
          {!file ? (
            <div className="flex flex-col items-center">
              <label 
                onDragOver={onDragOver} onDrop={onDrop}
                className={`relative flex flex-col items-center justify-center w-full min-h-[320px] py-10 rounded-[2.5rem] border-2 bg-white/80 dark:bg-slate-900/40 px-6 sm:px-12 transition-all duration-500 cursor-pointer backdrop-blur-xl shadow-xl dark:shadow-none
                  ${error ? 'border-rose-400 bg-rose-50/60 dark:bg-rose-900/20' : 'border-sky-100 dark:border-slate-800 hover:border-indigo-400 dark:hover:border-slate-700 hover:bg-white dark:hover:bg-slate-900/60'}`}
              >
                <div className="relative flex flex-col items-center gap-6 md:gap-8 w-full">
                  <div className={`rounded-3xl p-5 md:p-6 transition-transform duration-500 shadow-sm border-2 ${error ? 'bg-rose-100 border-rose-200 text-rose-500' : 'bg-sky-50 dark:bg-indigo-950/50 border-sky-100 dark:border-none text-indigo-600 dark:text-indigo-400 group-hover:scale-110'}`}>
                    <UploadCloud size={40} className="md:w-12 md:h-12" strokeWidth={2.5} />
                  </div>
                  
                  <div className="space-y-2 md:space-y-3 text-center">
                    <h3 className="text-2xl md:text-3xl font-black tracking-tight text-slate-800 dark:text-white uppercase">Upload your Resume</h3>
                    <p className="text-xs md:text-sm text-slate-400 dark:text-slate-500 font-black uppercase tracking-wider">Supported formats: PDF, TXT (Max 5MB)</p>
                  </div>

                  <div className="flex flex-col sm:flex-row w-full sm:w-auto justify-center gap-3 md:gap-4 mt-2">
                    <span className="inline-flex items-center justify-center bg-gradient-to-r from-indigo-600 to-violet-600 text-white w-full sm:w-auto px-10 md:px-14 py-4 rounded-xl md:rounded-2xl shadow-lg shadow-indigo-600/20 dark:shadow-none transition-all duration-300 font-black uppercase tracking-wider text-sm active:scale-95">
                      Choose File
                    </span>
                  </div>
                </div>
                <input type="file" className="hidden" accept=".pdf,.txt" onChange={handleFileUpload} />
              </label>

              {error && (
                <div className="mt-6 flex items-center justify-center gap-2 text-rose-600 dark:text-rose-400 bg-rose-50 dark:bg-rose-500/10 px-6 py-3 rounded-xl border-2 border-rose-500/20 font-black uppercase tracking-wide text-xs shadow-sm animate-fadeIn">
                  <AlertTriangle size={18} strokeWidth={2.5} />
                  {error}
                </div>
              )}
            </div>
          ) : (
            <div className="relative rounded-[2.5rem] border-2 border-sky-200 dark:border-slate-800 bg-white dark:bg-slate-900/60 p-8 sm:p-12 transition-all duration-500 backdrop-blur-xl shadow-xl dark:shadow-none animate-fadeIn text-center max-w-2xl mx-auto">
              <div className="flex justify-center mb-6">
                <div className="p-4 bg-sky-50 dark:bg-indigo-500/10 text-indigo-600 dark:text-indigo-400 rounded-2xl border-2 border-sky-100 dark:border-indigo-900/50">
                  <FileText size={40} strokeWidth={2} />
                </div>
              </div>

              <h3 className="text-2xl font-black text-slate-800 dark:text-white uppercase tracking-tight">Resume Selected</h3>
              
              <div className="flex items-center justify-between bg-sky-50/50 dark:bg-slate-800/50 p-4 rounded-xl mb-8 border-2 border-sky-100 dark:border-slate-700/50 mt-4 mx-auto max-w-md">
                <div className="flex items-center gap-3 overflow-hidden w-5/6 justify-start">
                  <FileText size={20} className="text-indigo-600 dark:text-indigo-400 shrink-0" strokeWidth={2.5} />
                  <span className="font-black text-slate-700 dark:text-slate-300 truncate text-sm">
                    {file.name}
                  </span>
                </div>
                <button onClick={removeFile} className="p-1.5 text-slate-400 hover:text-rose-500 hover:bg-rose-50 dark:hover:bg-rose-500/10 rounded-lg transition-colors shrink-0">
                  <X size={18} strokeWidth={2.5} />
                </button>
              </div>

              <button 
                onClick={handleAnalyzeClick}
                className="flex items-center justify-center gap-2 w-full max-w-md mx-auto bg-gradient-to-r from-indigo-600 to-violet-600 text-white px-8 py-4.5 rounded-2xl text-base md:text-lg font-black uppercase tracking-wider shadow-lg shadow-indigo-600/20 dark:shadow-none hover:-translate-y-0.5 transition-all duration-300 active:scale-95"
              >
                <Zap size={20} className="fill-white shrink-0" />
                Analyze Resume Now
              </button>
            </div>
          )}

        </div>
      </section>

      {/* --- Soft Features Grid Layout --- */}
      <section className="w-full max-w-7xl px-4 md:px-6 py-12 grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8 relative z-10">
        {[
          { icon: <Zap className="text-amber-500" strokeWidth={2.5} />, title: "Lightning Analysis", desc: "Powered by deep localized worker processes, get comprehensive algorithmic validation metrics on your profiling structure in micro-seconds." },
          { icon: <Target className="text-indigo-600 dark:text-indigo-400" strokeWidth={2.5} />, title: "Smart Keyword Match", desc: "Identify business-critical Must-Have framework nodes missing from your file that recruiters actively filter down." },
          { icon: <Sparkles className="text-emerald-500" strokeWidth={2.5} />, title: "Next-Step Roadmap", desc: "Receive automated compatibility vector alignment mappings, optimizing candidate density scores to 50% or above." }
        ].map((feature, i) => (
          <div key={i} className="group p-8 md:p-10 rounded-[2.5rem] border-2 border-sky-100 dark:border-slate-800 bg-white/95 dark:bg-slate-900/40 backdrop-blur-lg hover:border-sky-300 dark:hover:border-slate-700 hover:bg-white dark:hover:bg-slate-900 transition-all duration-300 shadow-md dark:shadow-none">
            <div className="mb-6 p-4 w-fit rounded-2xl bg-sky-50 dark:bg-slate-800 group-hover:scale-110 transition-transform shadow-sm border border-sky-100 dark:border-none">
              {feature.icon}
            </div>
            <h4 className="text-lg md:text-xl font-black text-slate-800 dark:text-white mb-3 uppercase tracking-tight">{feature.title}</h4>
            <p className="text-xs md:text-sm font-extrabold text-slate-600 dark:text-slate-400 leading-relaxed">
              {feature.desc}
            </p>
          </div>
        ))}
      </section>

      {/* --- 🧭 🔥 BRAND NEW: WORKSPACE QUICK NAVIGATION MATRIX HUB --- */}
      {/* Placed perfectly right below the features description block for high-scannability workspace jumps */}
      <section className="w-full max-w-7xl px-4 md:px-6 py-12 relative z-10">
        <div className="bg-white/40 dark:bg-slate-900/20 border-2 border-sky-100 dark:border-slate-800/80 p-8 md:p-10 rounded-[2.5rem] backdrop-blur-xl space-y-6">
          <div className="text-center md:text-left">
            <span className="text-[10px] font-black uppercase tracking-widest text-indigo-600 dark:text-indigo-400 bg-indigo-500/10 px-3 py-1 rounded-lg border border-indigo-500/20">
              Platform Directory
            </span>
            <h3 className="text-xl md:text-2xl font-black text-slate-800 dark:text-white uppercase tracking-tight mt-2">
              Accelerate Integration Jumps
            </h3>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 w-full">
            {[
              { path: '/analyze', label: 'AI Analyzer Sandbox', desc: 'Execute real-time metric evaluations.', icon: <Target size={16} className="text-indigo-600" /> },
              { path: '/editor', label: 'Inference Profile Editor', desc: 'Tune structural resume text layers.', icon: <Wrench size={16} className="text-amber-500" /> },
              { path: '/company', label: 'Corporate Dashboard', desc: 'Manage bulk recruitment matrix queues.', icon: <LayoutDashboard size={16} className="text-emerald-500" /> },
              { path: '/about', label: 'System Architecture', desc: 'Inspect core stateless protocols.', icon: <Info size={16} className="text-blue-500" /> }
            ].map((navCard, index) => (
              <button
                key={index}
                type="button"
                onClick={() => navigate(navCard.path)}
                className="group/nav bg-white dark:bg-slate-900 border-2 border-sky-100 dark:border-slate-800 p-5 rounded-2xl text-left shadow-sm hover:border-indigo-400 dark:hover:border-slate-700 transition duration-200 flex flex-col justify-between items-start h-32 active:scale-[0.98]"
              >
                <div className="flex w-full items-center justify-between">
                  <div className="p-2 bg-sky-50 dark:bg-slate-950 rounded-xl border border-sky-100 dark:border-none">
                    {navCard.icon}
                  </div>
                  <ArrowRight size={14} className="text-slate-300 group-hover/nav:text-indigo-600 group-hover/nav:translate-x-1 transition-all" strokeWidth={2.5} />
                </div>
                <div>
                  <h4 className="text-xs font-black text-slate-800 dark:text-white uppercase tracking-wide">{navCard.label}</h4>
                  <p className="text-[10px] font-bold text-slate-400 mt-0.5 uppercase tracking-normal leading-tight">{navCard.desc}</p>
                </div>
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* --- 🏢 ENTERPRISE SCALABILITY PROTOCOLS GRID --- */}
      <section className="w-full max-w-7xl px-4 md:px-6 py-12 grid grid-cols-1 lg:grid-cols-12 gap-8 relative z-10 items-center">
        <div className="lg:col-span-5 space-y-4 text-center lg:text-left">
          <span className="text-xs font-black uppercase tracking-widest px-3 py-1.5 rounded-xl bg-indigo-500/10 text-indigo-600 dark:text-indigo-400 border border-indigo-500/20">
            Enterprise Deployment Stack
          </span>
          <h3 className="text-3xl md:text-5xl font-black text-slate-800 dark:text-white uppercase tracking-tight leading-none">
            High Volume Core Matrix For Recruiting Teams
          </h3>
          <p className="text-xs md:text-sm font-extrabold text-slate-500 dark:text-slate-400 leading-relaxed uppercase tracking-wide">
            Automate screening hierarchies and parse bulk profiles concurrently without data retainment vectors.
          </p>
        </div>

        <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-4 w-full">
          {[
            { icon: <Cpu className="text-indigo-500" strokeWidth={2.5} />, title: "Process Pooling", desc: "Native Python multiprocessing structures evaluating 100+ resumes simultaneously in a single click." },
            { icon: <ShieldCheck className="text-purple-500" strokeWidth={2.5} />, title: "Stateless Security", desc: "Document execution processed purely within volatile RAM stream buffers and instantly flushed." },
            { icon: <Layers className="text-emerald-500" strokeWidth={2.5} />, title: "Alternate Pathing", desc: "Algorithmic competency vector mapping tracking auxillary paths scoring 50% or above." },
            { icon: <Zap className="text-blue-500" strokeWidth={2.5} />, title: "Real-Time Shortlists", desc: "Instantaneous Candidate shortlisting grids built dynamically matching target mandatory parameters." }
          ].map((ent, idx) => (
            <div key={idx} className="p-5 rounded-2xl bg-white dark:bg-slate-900 border-2 border-sky-100 dark:border-slate-800 shadow-sm flex flex-col justify-between space-y-2">
              <div className="p-2.5 w-fit bg-sky-50 dark:bg-slate-950 rounded-xl border border-sky-100 dark:border-none">
                {ent.icon}
              </div>
              <div className="space-y-1">
                <h4 className="text-sm font-black uppercase tracking-tight text-slate-800 dark:text-white">{ent.title}</h4>
                <p className="text-[11px] font-bold text-slate-400 dark:text-slate-500 leading-normal uppercase">{ent.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* --- 🔥 PREMIUM CTA SECTION 🔥 --- */}
      <section className="w-full max-w-7xl mx-auto px-4 md:px-6 py-10 md:py-16 relative z-10">
        <div className="relative rounded-[2.5rem] md:rounded-[3.5rem] overflow-hidden bg-gradient-to-br from-sky-100 via-rose-50 to-indigo-100/60 dark:from-slate-900 dark:via-slate-900 dark:to-indigo-950/50 border-2 border-sky-200 dark:border-slate-800 px-4 py-14 sm:px-8 md:p-24 text-center shadow-xl dark:shadow-none transition-colors duration-300">
          
          <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
            <div className="absolute -top-24 -left-24 w-64 md:w-96 h-64 md:h-96 bg-indigo-300/10 dark:bg-white/5 blur-3xl rounded-full"></div>
            <div className="absolute top-1/2 right-0 md:right-10 w-48 md:w-64 h-48 md:h-64 bg-rose-300/10 dark:bg-violet-400/5 blur-3xl rounded-full"></div>
          </div>

          <div className="relative z-10 flex flex-col items-center w-full">
            {/* Soft Contrast Badge */}
            <div className="flex flex-col sm:flex-row items-center gap-2 sm:gap-3 bg-white/80 dark:bg-white/10 backdrop-blur-md px-5 py-2 rounded-full mb-6 md:mb-8 border border-sky-200 dark:border-white/20 shadow-sm max-w-full">
              <div className="flex gap-1 shrink-0">
                {[1,2,3,4,5].map(i => <Star key={i} size={12} className="text-yellow-400 fill-yellow-400" />)}
              </div>
              <span className="text-xs font-black text-indigo-700 dark:text-indigo-200 tracking-wider uppercase">Loved by 10,000+ job seekers</span>
            </div>

            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black text-slate-800 dark:text-white mb-4 md:mb-6 tracking-tight w-full break-words uppercase leading-none">
              Ready to land your <br className="hidden sm:block"/> 
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 to-violet-600 dark:from-amber-200 dark:to-yellow-400">dream job?</span>
            </h2>
            
            <p className="text-slate-600 dark:text-indigo-100/90 mb-8 md:mb-12 max-w-xl mx-auto font-extrabold text-xs sm:text-sm md:text-base leading-relaxed px-2">
              Don't let a bad resume hold you back. Let our AI optimize your profile and get you past the ATS filters.
            </p>
            
            <button 
              onClick={() => navigate('/analyze')} 
              className="flex items-center justify-center gap-2 md:gap-3 w-full sm:w-auto bg-gradient-to-r from-indigo-600 to-violet-600 text-white dark:bg-white dark:text-slate-950 dark:from-transparent dark:to-transparent px-10 py-4.5 rounded-2xl text-base font-black uppercase tracking-wider shadow-xl dark:shadow-none transition-all duration-300 hover:opacity-95 active:scale-95"
            >
              <Sparkles size={18} strokeWidth={2.5} className="text-white dark:text-indigo-600 shrink-0" />
              Start Your Free Analysis
            </button>
            
          </div>
        </div>
      </section>

      {/* --- REVIEWS SECTION --- */}
      <div className="mb-20 w-full relative z-10">
        <Testimonials />
      </div>

    </div>
  );
};

export default Home;
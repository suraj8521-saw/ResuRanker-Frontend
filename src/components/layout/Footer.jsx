import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  // Common typography styles for footer column links
  const footerLinkClass = "text-xs font-extrabold text-slate-500 dark:text-slate-400 hover:text-indigo-600 dark:hover:text-white transition-colors duration-150 uppercase tracking-wide";

  return (
    // 🔥 FIXED: Swapped background layout to soft bg-sky-50/80 and border-sky-200/60 to perfectly synchronize with the rest of the application
    <footer className="border-t border-sky-200/60 dark:border-slate-900 bg-sky-50/80 dark:bg-slate-950 py-12 mt-auto backdrop-blur-xl transition-colors duration-300">
      <div className="mx-auto max-w-7xl px-6 space-y-10">
        
        {/* 📋 UPPER REGION: Multi-Column Structural Matrix */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 pb-8 border-b border-sky-200/40 dark:border-slate-900/60">
          
          {/* Brand/Product Core Column Block */}
          <div className="md:col-span-5 space-y-4">
            <Link to="/" className="flex items-center gap-2 w-fit active:scale-95 transition-transform">
              <div className="flex h-7 w-7 items-center justify-center rounded-xl bg-primary text-white text-xs font-black shadow-sm">R</div>
              <span className="text-lg font-black tracking-tight text-slate-800 dark:text-white uppercase">ResuRanker</span>
            </Link>
            <p className="text-xs font-extrabold text-slate-400 dark:text-slate-500 leading-relaxed max-w-sm">
              Next-Gen Automated Tracking System (ATS) optimization pipeline. Engineered with multi-threaded multiprocessing stacks to deliver precision fitment screening metrics in real time.
            </p>
          </div>

          {/* Column 2: Product Vectors */}
          <div className="md:col-span-2 space-y-3">
            <h4 className="text-[10px] font-black tracking-widest text-slate-400 dark:text-slate-600 uppercase">Product Core</h4>
            <ul className="space-y-2 flex flex-col">
              <li><Link to="/analyze" className={footerLinkClass}>AI CV Analyzer</Link></li>
              <li><Link to="/editor" className={footerLinkClass}>Resume Editor</Link></li>
              <li><Link to="/company" className={footerLinkClass}>Enterprise Hub</Link></li>
            </ul>
          </div>

          {/* Column 3: Corporate Insights */}
          <div className="md:col-span-2 space-y-3">
            <h4 className="text-[10px] font-black tracking-widest text-slate-400 dark:text-slate-600 uppercase">Company</h4>
            <ul className="space-y-2 flex flex-col">
              <li><Link to="/about" className={footerLinkClass}>Our Blueprint</Link></li>
              <li><a href="#" className={footerLinkClass}>System Specs</a></li>
              <li><a href="#" className={footerLinkClass}>Contact Support</a></li>
            </ul>
          </div>

          {/* Column 4: Compliance Guardrails */}
          <div className="md:col-span-3 space-y-3">
            <h4 className="text-[10px] font-black tracking-widest text-slate-400 dark:text-slate-600 uppercase">Compliance Guardrails</h4>
            <ul className="space-y-2 flex flex-col">
              <li><a href="#" className={footerLinkClass}>Stateless Data SLA</a></li>
              <li><a href="#" className={footerLinkClass}>Privacy Framework</a></li>
              <li><a href="#" className={footerLinkClass}>Terms of Operations</a></li>
            </ul>
          </div>

        </div>

        {/* 📊 LOWER REGION: Copyright Footnotes Division */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-xs text-slate-400 dark:text-slate-500 font-black uppercase tracking-wider text-center sm:text-left">
            &copy; {currentYear} RESURANKER SYSTEM LABS. ALL RIGHTS RESERVED.
          </p>
          <div className="flex items-center gap-1.5 text-xs text-slate-400 dark:text-slate-500 font-bold uppercase tracking-wide">
            <span>Built for developers by</span>
            <span className="font-black text-indigo-600 dark:text-indigo-400 bg-indigo-500/5 px-2 py-0.5 rounded-md border border-indigo-500/10">SURAJ KUMAR</span>
          </div>
        </div>
        
      </div>
    </footer>
  );
};

export default Footer;
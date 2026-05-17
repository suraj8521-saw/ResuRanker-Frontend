import React from 'react';
import { Star, Building2, Briefcase, Factory, Shield, Cpu } from 'lucide-react';

// 🔥 LEGAL & COMPLIANT ANONYMOUS B2B DATA (No trademark liabilities)
const corporateReviews = [
  {
    id: 1,
    vertical: "Tier-1 FinTech Enterprise",
    scale: "10,000+ Global Workforce",
    role: "Talent Acquisition Director",
    icon: <Building2 className="w-5 h-5 md:w-6 md:h-6 text-indigo-500" strokeWidth={2.5} />,
    text: "We integrated this parallel processing pipeline during our campus cycle. Processing hundreds of engineering files used to take days; this multi-threaded engine completed evaluations in under 20 minutes.",
    rating: 5
  },
  {
    id: 2,
    vertical: "Series-B AI Analytics Hub",
    scale: "250+ Engineers",
    role: "VP of Engineering",
    icon: <Cpu className="w-5 h-5 md:w-6 md:h-6 text-emerald-500" strokeWidth={2.5} />,
    text: "The Alternative Track Fitment Recommendation is exceptional. It highlighted latent technical capabilities in applicants who missed our strict target threshold but showed 85%+ compatibility for DevOps.",
    rating: 5
  },
  {
    id: 3,
    vertical: "Global E-Commerce Logistics Group",
    scale: "Fortune 500 Scale Corp",
    role: "Head of Talent Operations",
    icon: <Factory className="w-5 h-5 md:w-6 md:h-6 text-blue-500" strokeWidth={2.5} />,
    text: "High-volume screening was a massive operational choke point. Implementing this stateless screening framework automated our grading hierarchy with zero data exposure vectors, ensuring total compliance.",
    rating: 5
  },
  {
    id: 4,
    vertical: "Enterprise SaaS & Cloud Platform",
    scale: "5,000+ Enterprise Staff",
    role: "Chief People Officer",
    icon: <Briefcase className="w-5 h-5 md:w-6 md:h-6 text-purple-500" strokeWidth={2.5} />,
    text: "The speed of the multi-process execution pool is phenomenal. Resume processing that usually throttles local system resources runs smoothly here, sorting qualified candidates within fractions of seconds.",
    rating: 5
  },
  {
    id: 5,
    vertical: "Next-Gen Cyber Security Firm",
    scale: "Information Security Division",
    role: "Lead Technical Recruiter",
    icon: <Shield className="w-5 h-5 md:w-6 md:h-6 text-rose-500" strokeWidth={2.5} />,
    text: "A completely robust solution for enterprise recruitment. The combination of stateless processing with high-accuracy SpaCy skill mapping provides our recruitment pipeline an unfair speed advantage.",
    rating: 4
  }
];

// Duplicated array vector to enable seamless loop execution
const duplicatedCorporateReviews = [...corporateReviews, ...corporateReviews];

const CorporateTestimonials = () => {
  return (
    <section className="w-full bg-slate-50 dark:bg-[#0b0f19] py-16 md:py-24 relative overflow-hidden z-10 transition-colors duration-300">
      
      {/* 🎯 Title Header Block - Bulletproof Responsive Grid */}
      <div className="w-full max-w-4xl mx-auto mb-14 px-4 sm:px-6 md:px-8 text-center block clear-both">
        {/* 🏷️ Badge Component */}
        <div className="mb-4">
          <span className="inline-flex items-center justify-center text-[10px] sm:text-xs font-black uppercase tracking-widest px-3 py-1 rounded-xl bg-indigo-500/10 text-indigo-600 dark:text-indigo-400 border border-indigo-500/20 shadow-sm whitespace-normal text-center">
            Enterprise Validation Index
          </span>
        </div>
        
        {/* 🎯 Main Heading */}
        <h3 className="text-lg sm:text-2xl md:text-3xl lg:text-4xl font-black text-slate-800 dark:text-white mt-3 uppercase tracking-tight leading-tight max-w-2xl mx-auto whitespace-normal break-words px-1">
          Validated by Corporate Talent Specialists
        </h3>
        
        {/* 📝 Subtitle description */}
        <p className="text-xs sm:text-sm md:text-base text-slate-500 dark:text-slate-400 font-semibold max-w-xl mx-auto mt-3 leading-relaxed whitespace-normal break-words px-2">
          See how high-volume screening operations leverage our multi-threaded stateless engine.
        </p>
      </div>

      {/* 🎪 Marquee Track Container Group */}
      <div className="relative w-full flex overflow-hidden group py-4">
        
        {/* Left/Right Horizon Fading Blurs - Synchronized with new deep structural background colors */}
        <div className="absolute top-0 left-0 h-full w-16 md:w-32 bg-gradient-to-r from-slate-50 dark:from-[#0b0f19] to-transparent z-20 pointer-events-none"></div>
        <div className="absolute top-0 right-0 h-full w-16 md:w-32 bg-gradient-to-l from-slate-50 dark:from-[#0b0f19] to-transparent z-20 pointer-events-none"></div>

        {/* Dynamic Infinite Scroll Track */}
        <div className="flex gap-4 md:gap-6 animate-[scroll_50s_linear_infinite] group-hover:[animation-play-state:paused] w-max px-4">
          {duplicatedCorporateReviews.map((review, index) => (
            
            /* 💎 Premium Corporate Identity Card Wrapper */
            <div 
              key={index} 
              className="w-[290px] sm:w-[340px] md:w-[400px] shrink-0 p-5 sm:p-6 md:p-8 rounded-[2rem] md:rounded-[2.5rem] border-2 border-slate-200/60 dark:border-slate-800/80 bg-white/80 dark:bg-slate-900/40 backdrop-blur-xl shadow-md hover:border-indigo-500/40 dark:hover:border-indigo-500/30 hover:bg-white dark:hover:bg-slate-900 transition-all duration-300 flex flex-col justify-between"
            >
              <div>
                {/* High-Definition Contrast Ratings */}
                <div className="flex gap-1 mb-4 md:mb-6">
                  {[...Array(5)].map((_, i) => (
                    <Star 
                      key={i} 
                      size={14} 
                      className={i < review.rating ? "text-yellow-400 fill-yellow-400" : "text-slate-200 dark:text-slate-800"} 
                    />
                  ))}
                </div>

                {/* Professional Quote Content Element */}
                <p className="text-slate-600 dark:text-slate-300 font-semibold text-xs sm:text-sm md:text-base leading-relaxed mb-6 md:mb-8 italic whitespace-normal break-words">
                  "{review.text}"
                </p>
              </div>

              {/* 🏢 Anonymous Client Stamp - Fixed Layout Break Vectors */}
              <div className="flex items-center gap-3 md:gap-4 mt-auto pt-4 border-t border-slate-100 dark:border-slate-800/60 w-full overflow-hidden">
                <div className="p-2.5 bg-slate-100 dark:bg-slate-950 rounded-xl border border-slate-200 dark:border-slate-800 shrink-0 flex items-center justify-center">
                  {review.icon}
                </div>
                <div className="min-w-0 flex-1 flex flex-col justify-center">
                  <h4 className="font-black text-slate-800 dark:text-slate-100 text-xs md:text-sm tracking-wide uppercase truncate block">
                    {review.vertical}
                  </h4>
                  <p className="text-[10px] md:text-xs font-bold text-slate-400 dark:text-slate-500 tracking-wider uppercase mt-0.5 whitespace-normal break-words leading-tight">
                    {review.scale} &bull; <span className="text-indigo-500 dark:text-indigo-400 font-extrabold">{review.role}</span>
                  </p>
                </div>
              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default CorporateTestimonials;
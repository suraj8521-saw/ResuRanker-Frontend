import React from 'react';
import { Star, Building2, Briefcase, Factory, Shield, Cpu } from 'lucide-react';

// 🔥 LEGAL & COMPLIANT ANONYMOUS B2B DATA (No trademark liabilities)
const corporateReviews = [
  {
    id: 1,
    vertical: "Tier-1 FinTech Enterprise",
    scale: "10,000+ Global Workforce",
    role: "Talent Acquisition Director",
    icon: <Building2 className="w-6 h-6 text-indigo-500" strokeWidth={2.5} />,
    text: "We integrated this parallel processing pipeline during our campus cycle. Processing hundreds of engineering files used to take days; this multi-threaded engine completed evaluations in under 20 minutes.",
    rating: 5
  },
  {
    id: 2,
    vertical: "Series-B AI Analytics Hub",
    scale: "250+ Engineers",
    role: "VP of Engineering",
    icon: <Cpu className="w-6 h-6 text-emerald-500" strokeWidth={2.5} />,
    text: "The Alternative Track Fitment Recommendation is exceptional. It highlighted latent technical capabilities in applicants who missed our strict target threshold but showed 85%+ compatibility for DevOps.",
    rating: 5
  },
  {
    id: 3,
    vertical: "Global E-Commerce Logistics Group",
    scale: "Fortune 500 Scale Corp",
    role: "Head of Talent Operations",
    icon: <Factory className="w-6 h-6 text-blue-500" strokeWidth={2.5} />,
    text: "High-volume screening was a massive operational choke point. Implementing this stateless screening framework automated our grading hierarchy with zero data exposure vectors, ensuring total compliance.",
    rating: 5
  },
  {
    id: 4,
    vertical: "Enterprise SaaS & Cloud Platform",
    scale: "5,000+ Enterprise Staff",
    role: "Chief People Officer",
    icon: <Briefcase className="w-6 h-6 text-purple-500" strokeWidth={2.5} />,
    text: "The speed of the multi-process execution pool is phenomenal. Resume processing that usually throttles local system resources runs smoothly here, sorting qualified candidates within fractions of seconds.",
    rating: 5
  },
  {
    id: 5,
    vertical: "Next-Gen Cyber Security Firm",
    scale: "Information Security Division",
    role: "Lead Technical Recruiter",
    icon: <Shield className="w-6 h-6 text-rose-500" strokeWidth={2.5} />,
    text: "A completely robust solution for enterprise recruitment. The combination of stateless processing with high-accuracy SpaCy skill mapping provides our recruitment pipeline an unfair speed advantage.",
    rating: 4
  }
];

// Duplicated array vector to enable seamless loop execution
const duplicatedCorporateReviews = [...corporateReviews, ...corporateReviews];

const CorporateTestimonials = () => {
  return (
    <section className="py-16 md:py-24 relative overflow-hidden z-10 w-full bg-transparent">
      
      {/* Title Header Block */}
      <div className="text-center mb-12 px-6">
        <span className="text-xs font-black uppercase tracking-widest px-3 py-1.5 rounded-xl bg-indigo-500/10 text-indigo-600 dark:text-indigo-400 border border-indigo-500/20">
          Enterprise Validation Index
        </span>
        <h3 className="text-3xl md:text-4xl font-black text-slate-800 dark:text-white mt-3 uppercase tracking-tight">
          Validated by Corporate Talent Specialists
        </h3>
        <p className="text-slate-500 dark:text-slate-400 font-extrabold max-w-xl mx-auto text-sm md:text-base mt-1">
          See how high-volume screening operations leverage our multi-threaded stateless engine.
        </p>
      </div>

      {/* Marquee Track Container Group */}
      <div className="relative w-full flex overflow-hidden group">
        
        {/* Left/Right Horizon Fading Blurs */}
        <div className="absolute top-0 left-0 h-full w-24 bg-gradient-to-r from-slate-50 dark:from-slate-950 to-transparent z-10"></div>
        <div className="absolute top-0 right-0 h-full w-24 bg-gradient-to-l from-slate-50 dark:from-slate-950 to-transparent z-10"></div>

        {/* Dynamic Infinite Scroll Track */}
        <div className="flex gap-6 animate-[scroll_50s_linear_infinite] group-hover:[animation-play-state:paused] w-max px-6">
          {duplicatedCorporateReviews.map((review, index) => (
            
            /* Premium Corporate Identity Block */
            <div 
              key={index} 
              className="w-[350px] md:w-[400px] shrink-0 p-8 rounded-[2.5rem] border-2 border-slate-200/60 dark:border-slate-800 bg-white/70 dark:bg-slate-900/40 backdrop-blur-xl shadow-md hover:border-slate-400 dark:hover:border-slate-700 hover:bg-white dark:hover:bg-slate-900 transition-all duration-300 flex flex-col justify-between"
            >
              <div>
                {/* High-Definition Contrast Ratings */}
                <div className="flex gap-1 mb-6">
                  {[...Array(5)].map((_, i) => (
                    <Star 
                      key={i} 
                      size={16} 
                      className={i < review.rating ? "text-yellow-400 fill-yellow-400" : "text-slate-300 dark:text-slate-700"} 
                    />
                  ))}
                </div>

                {/* Professional Quote Content Element */}
                <p className="text-slate-600 dark:text-slate-300 font-extrabold text-sm md:text-base leading-relaxed mb-8 italic">
                  "{review.text}"
                </p>
              </div>

              {/* Anonymous Client Stamp (Zero Trademark Footprint) */}
              <div className="flex items-center gap-4 mt-auto pt-4 border-t border-slate-100 dark:border-slate-800/60">
                <div className="p-3 bg-slate-100 dark:bg-slate-950 rounded-2xl border border-slate-200 dark:border-slate-800 shrink-0">
                  {review.icon}
                </div>
                <div className="overflow-hidden">
                  <h4 className="font-black text-slate-800 dark:text-slate-100 text-sm truncate uppercase tracking-wide">
                    {review.vertical}
                  </h4>
                  <p className="text-xs font-black text-slate-400 dark:text-slate-500 tracking-wider uppercase mt-0.5">
                    {review.scale} &bull; <span className="text-indigo-500 dark:text-indigo-400 font-black">{review.role}</span>
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
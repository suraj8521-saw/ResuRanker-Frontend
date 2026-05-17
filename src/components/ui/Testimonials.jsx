import React from 'react';
import { Star } from 'lucide-react';

// Fake Data for Reviews
const reviews = [
  {
    id: 1,
    name: "Rahul Sharma",
    role: "Frontend Developer",
    img: "https://i.pravatar.cc/150?img=11",
    text: "ResuRanker's AI analysis exactly told me what keywords were missing. Landed my dream job at Amazon!",
    rating: 5
  },
  {
    id: 2,
    name: "Priya Patel",
    role: "Product Manager",
    img: "https://i.pravatar.cc/150?img=5",
    text: "The ATS scoring is so accurate. It completely transformed how I format my resume.",
    rating: 5
  },
  {
    id: 3,
    name: "Amit Kumar",
    role: "Data Scientist",
    img: "https://i.pravatar.cc/150?img=14",
    text: "I loved the Next-Step Roadmap. It didn't just give a score, it told me exactly how to fix it.",
    rating: 4
  },
  {
    id: 4,
    name: "Neha Singh",
    role: "UX Designer",
    img: "https://i.pravatar.cc/150?img=9",
    text: "Beautiful UI and lightning-fast analysis. Best resume tool I've ever used on the internet.",
    rating: 5
  },
  {
    id: 5,
    name: "Vikas Verma",
    role: "Backend Engineer",
    img: "https://i.pravatar.cc/150?img=33",
    text: "Was struggling to get callbacks for months. One week after using ResuRanker, I got 3 interviews.",
    rating: 5
  }
];

// Array ko double kiya taaki infinite loop seamless lage
const duplicatedReviews = [...reviews, ...reviews];

const Testimonials = () => {
  return (
    <section className="w-full bg-slate-50 dark:bg-[#0b0f19] py-16 md:py-24 relative overflow-hidden z-10 transition-colors duration-300">
      <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* 🎯 Title Header Container - Nested Section Tag Fixed */}
        <div className="w-full max-w-3xl mx-auto text-center mb-12 block clear-both">
          <h3 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-slate-800 dark:text-white mb-3 tracking-tight leading-snug whitespace-normal break-words">
            Don't just take our word for it
          </h3>
          <p className="text-xs sm:text-sm md:text-base text-slate-500 dark:text-slate-400 font-medium max-w-xl mx-auto leading-relaxed whitespace-normal break-words px-2">
            See what other professionals are saying about their success.
          </p>
        </div>

      </div>

      {/* 🎪 Marquee Container */}
      <div className="relative w-full flex overflow-hidden group py-2">
        
        {/* Left/Right Fading Gradients (Synchronized with section background) */}
        <div className="absolute top-0 left-0 h-full w-16 md:w-32 bg-gradient-to-r from-slate-50 dark:from-[#0b0f19] to-transparent z-20 pointer-events-none"></div>
        <div className="absolute top-0 right-0 h-full w-16 md:w-32 bg-gradient-to-l from-slate-50 dark:from-[#0b0f19] to-transparent z-20 pointer-events-none"></div>

        {/* Scrolling Track */}
        <div className="flex gap-4 md:gap-6 animate-[scroll_50s_linear_infinite] group-hover:[animation-play-state:paused] w-max px-4">
          {duplicatedReviews.map((review, index) => (
            
            /* 💎 Premium Review Card - Fully Responsive Sizes */
            <div 
              key={index} 
              className="w-[290px] sm:w-[340px] md:w-[400px] shrink-0 p-6 md:p-8 rounded-[2rem] border-2 border-slate-200/60 dark:border-slate-800/80 bg-white/80 dark:bg-slate-900/40 backdrop-blur-xl shadow-md hover:border-indigo-500/40 dark:hover:border-indigo-500/30 hover:bg-white dark:hover:bg-slate-900 transition-all duration-300 flex flex-col justify-between"
            >
              <div>
                {/* Star Rating */}
                <div className="flex gap-1 mb-4 md:mb-6">
                  {[...Array(5)].map((_, i) => (
                    <Star 
                      key={i} 
                      size={14} 
                      className={i < review.rating ? "text-yellow-400 fill-yellow-400" : "text-slate-200 dark:text-slate-800"} 
                    />
                  ))}
                </div>

                {/* Review Text with wrap protection */}
                <p className="text-slate-600 dark:text-slate-300 font-medium text-sm md:text-base leading-relaxed mb-6 md:mb-8 whitespace-normal break-words">
                  "{review.text}"
                </p>
              </div>

              {/* User Profile Footer */}
              <div className="flex items-center gap-3 md:gap-4 mt-auto pt-4 border-t border-slate-100 dark:border-slate-800/60 w-full overflow-hidden">
                <img 
                  src={review.img} 
                  alt={review.name} 
                  className="w-10 h-10 md:w-12 md:h-12 rounded-full object-cover border-2 border-indigo-100 dark:border-indigo-900/50 shrink-0"
                />
                <div className="min-w-0 flex-1">
                  <h4 className="font-bold text-slate-800 dark:text-slate-100 text-xs md:text-sm truncate block">
                    {review.name}
                  </h4>
                  <p className="text-[11px] md:text-xs font-medium text-slate-500 dark:text-slate-400 truncate mt-0.5">
                    {review.role}
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

export default Testimonials;
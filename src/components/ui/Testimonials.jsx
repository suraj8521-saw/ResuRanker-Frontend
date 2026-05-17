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
    <section className="py-16 md:py-24 relative overflow-hidden z-10 w-full">
      
      {/* Title Section */}
      <div className="text-center mb-12 px-6">
        <h3 className="text-3xl md:text-4xl font-bold text-slate-800 dark:text-white mb-4">
          Don't just take our word for it
        </h3>
        <p className="text-slate-500 dark:text-slate-400 font-medium">
          See what other professionals are saying about their success.
        </p>
      </div>

      {/* Marquee Container */}
      <div className="relative w-full flex overflow-hidden group">
        
        {/* Left/Right Fading Gradients (For smooth entry/exit effect) */}
        <div className="absolute top-0 left-0 h-full w-24 bg-gradient-to-r from-slate-50 dark:from-slate-950 to-transparent z-10"></div>
        <div className="absolute top-0 right-0 h-full w-24 bg-gradient-to-l from-slate-50 dark:from-slate-950 to-transparent z-10"></div>

        {/* Scrolling Track */}
        {/* ✅ Nayi Slow Line (45 seconds rotation loop) */}
<div className="flex gap-6 animate-[scroll_50s_linear_infinite] group-hover:[animation-play-state:paused] w-max px-6">
          {duplicatedReviews.map((review, index) => (
            
            /* Premium Review Card */
            <div 
              key={index} 
              className="w-[350px] md:w-[400px] shrink-0 p-8 rounded-[2rem] border border-white/60 dark:border-slate-800 bg-white/50 dark:bg-slate-900/40 backdrop-blur-lg shadow-lg shadow-slate-200/20 dark:shadow-none hover:bg-white/80 dark:hover:bg-slate-800/60 transition-all duration-300"
            >
              {/* Star Rating */}
              <div className="flex gap-1 mb-6">
                {[...Array(5)].map((_, i) => (
                  <Star 
                    key={i} 
                    size={18} 
                    className={i < review.rating ? "text-yellow-400 fill-yellow-400" : "text-slate-300 dark:text-slate-700"} 
                  />
                ))}
              </div>

              {/* Review Text */}
              <p className="text-slate-600 dark:text-slate-300 font-medium text-lg leading-relaxed mb-8 line-clamp-3">
                "{review.text}"
              </p>

              {/* User Profile */}
              <div className="flex items-center gap-4 mt-auto">
                <img 
                  src={review.img} 
                  alt={review.name} 
                  className="w-12 h-12 rounded-full object-cover border-2 border-indigo-100 dark:border-indigo-900/50"
                />
                <div>
                  <h4 className="font-bold text-slate-800 dark:text-white">{review.name}</h4>
                  <p className="text-sm font-medium text-slate-500 dark:text-slate-400">{review.role}</p>
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
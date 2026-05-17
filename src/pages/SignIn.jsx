import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom'; // 🔥 SECURED: Explicitly routing imports
import { Mail, Lock, Eye, EyeOff, Zap } from 'lucide-react';

export default function SignIn() {
  const navigate = useNavigate(); // 🔥 INITIALIZED: Prevents the blank screen crash
  const [showPassword, setShowPassword] = useState(false);
  const [formData, setFormData] = useState({ email: '', password: '' });

  const handleInputChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    // Redirects directly to the customized feature under construction module
    navigate('/alert');
  };

  return (
    <div className="min-h-screen bg-sky-50/60 dark:bg-slate-950 text-slate-700 dark:text-slate-100 px-4 py-12 flex flex-col items-center justify-center transition-colors duration-300 relative overflow-hidden">
      
      {/* Background Ambient Studio Light Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[300px] h-[300px] md:w-[700px] md:h-[400px] bg-indigo-200/40 dark:bg-indigo-900/15 blur-[100px] md:blur-[150px] rounded-full pointer-events-none z-0"></div>

      {/* Main Structural Sign In Card */}
      <div className="max-w-md w-full bg-white dark:bg-slate-900 border-2 border-sky-100 dark:border-slate-800 rounded-[2.5rem] p-8 shadow-xl dark:shadow-none relative z-10 space-y-6 animate-fadeIn">
        
        {/* Branding Title Module */}
        <div className="text-center space-y-2">
          <div className="inline-flex h-10 w-10 items-center justify-center rounded-2xl bg-gradient-to-br from-indigo-600 to-violet-600 text-white font-black shadow-md mx-auto">
            R
          </div>
          <h2 className="text-2xl md:text-3xl font-black tracking-tight text-slate-800 dark:text-white uppercase leading-none">
            Welcome Back
          </h2>
          <p className="text-xs font-bold text-slate-400 uppercase tracking-wider">
            Access your secure corporate dashboard pipeline
          </p>
        </div>

        <form onSubmit={handleFormSubmit} className="space-y-4">
          
          {/* Email Address Input Block */}
          <div className="space-y-1.5">
            <label className="block text-xs font-black uppercase tracking-wider text-slate-400">Corporate Email Address</label>
            <div className="relative">
              <span className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400 dark:text-slate-500">
                <Mail size={16} strokeWidth={2.5} />
              </span>
              <input
                type="email"
                name="email"
                required
                value={formData.email}
                onChange={handleInputChange}
                placeholder="name@company.com"
                className="w-full pl-11 pr-4 py-3.5 text-sm rounded-xl bg-white dark:bg-slate-800 border-2 border-sky-200 dark:border-slate-700 text-slate-900 dark:text-white font-black focus:outline-none focus:ring-2 focus:ring-indigo-500 shadow-inner transition"
              />
            </div>
          </div>

          {/* Password Input Block */}
          <div className="space-y-1.5">
            <div className="flex justify-between items-center">
              <label className="block text-xs font-black uppercase tracking-wider text-slate-400">Security Password</label>
              <button 
                type="button" 
                onClick={() => navigate('/alert')}
                className="text-[10px] font-black uppercase text-indigo-600 dark:text-indigo-400 hover:underline tracking-wide"
              >
                Forgot Password?
              </button>
            </div>
            <div className="relative">
              <span className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400 dark:text-slate-500">
                <Lock size={16} strokeWidth={2.5} />
              </span>
              <input
                type={showPassword ? "text" : "password"}
                name="password"
                required
                value={formData.password}
                onChange={handleInputChange}
                placeholder="&bull;&bull;&bull;&bull;&bull;&bull;&bull;&bull;"
                className="w-full pl-11 pr-12 py-3.5 text-sm rounded-xl bg-white dark:bg-slate-800 border-2 border-sky-200 dark:border-slate-700 text-slate-900 dark:text-white font-black focus:outline-none focus:ring-2 focus:ring-indigo-500 shadow-inner transition"
              />
              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="absolute right-4 top-1/2 -translate-y-1/2 text-slate-400 dark:text-slate-500 hover:text-indigo-600 dark:hover:text-white transition"
              >
                {showPassword ? <EyeOff size={16} strokeWidth={2.5} /> : <Eye size={16} strokeWidth={2.5} />}
              </button>
            </div>
          </div>

          {/* Remember Me System Validation */}
          <div className="flex items-center gap-2 pt-1">
            <input
              type="checkbox"
              id="remember"
              className="w-4 h-4 rounded-md border-2 border-sky-200 dark:border-slate-700 bg-white dark:bg-slate-800 text-indigo-600 focus:ring-0 focus:ring-offset-0 cursor-pointer shadow-inner"
            />
            <label htmlFor="remember" className="text-xs font-black uppercase text-slate-400 tracking-wide select-none cursor-pointer">
              Keep this device authorized
            </label>
          </div>

          {/* Action Submission Button Container */}
          <div className="pt-2">
            <button
              type="submit"
              className="w-full flex items-center justify-center gap-2 py-4 bg-gradient-to-r from-indigo-600 to-violet-600 text-white font-black text-sm uppercase tracking-wider rounded-xl shadow-lg shadow-indigo-600/20 active:scale-[0.99] transition duration-200"
            >
              <Zap size={16} className="fill-white" /> Sign In to Sandbox
            </button>
          </div>

        </form>

        {/* Footnote Alternation Link Mapping */}
        <div className="border-t border-sky-50 dark:border-slate-800 pt-4 text-center">
          <p className="text-xs font-extrabold text-slate-400 tracking-wide uppercase">
            New to the platform?{' '}
            <Link to="/signup" className="text-indigo-600 dark:text-indigo-400 font-black hover:underline tracking-normal normal-case">
              Create a free account
            </Link>
          </p>
        </div>

      </div>
    </div>
  );
}
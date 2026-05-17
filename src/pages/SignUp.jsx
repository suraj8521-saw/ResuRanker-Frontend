import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom'; // 🔥 SECURED: Added clean explicit hooks
import { User, Mail, Lock, Eye, EyeOff, Sparkles } from 'lucide-react';

export default function SignUp() {
  const navigate = useNavigate(); // 🔥 INITIALIZED: Binds navigation pipelines cleanly
  const [showPassword, setShowPassword] = useState(false);
  const [formData, setFormData] = useState({ name: '', email: '', password: '', confirmPassword: '' });
  const [validationError, setValidationError] = useState('');

  const handleInputChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
    setValidationError('');
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    if (formData.password !== formData.confirmPassword) {
      setValidationError("Passcodes do not match target configurations.");
      return;
    }
    // Route execution directly to feature update block
    navigate('/alert');
  };

  return (
    <div className="min-h-screen bg-sky-50/60 dark:bg-slate-950 text-slate-700 dark:text-slate-100 px-4 py-12 flex flex-col items-center justify-center transition-colors duration-300 relative overflow-hidden">
      
      {/* Background Ambient Studio Light Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[300px] h-[300px] md:w-[700px] md:h-[400px] bg-purple-200/30 dark:bg-purple-900/10 blur-[100px] md:blur-[150px] rounded-full pointer-events-none z-0"></div>

      {/* Main Structural Sign Up Card */}
      <div className="max-w-md w-full bg-white dark:bg-slate-900 border-2 border-sky-100 dark:border-slate-800 rounded-[2.5rem] p-8 shadow-xl dark:shadow-none relative z-10 space-y-5 animate-fadeIn">
        
        {/* Branding Title Module */}
        <div className="text-center space-y-2">
          <div className="inline-flex h-10 w-10 items-center justify-center rounded-2xl bg-gradient-to-br from-indigo-600 to-violet-600 text-white font-black shadow-md mx-auto">
            R
          </div>
          <h2 className="text-2xl md:text-3xl font-black tracking-tight text-slate-800 dark:text-white uppercase leading-none">
            Get Started
          </h2>
          <p className="text-xs font-bold text-slate-400 uppercase tracking-wider">
            Generate your secure ATS optimization profile
          </p>
        </div>

        <form onSubmit={handleFormSubmit} className="space-y-3.5">
          
          {/* User Full Name Input Block */}
          <div className="space-y-1">
            <label className="block text-xs font-black uppercase tracking-wider text-slate-400">Full Structural Name</label>
            <div className="relative">
              <span className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400 dark:text-slate-500">
                <User size={16} strokeWidth={2.5} />
              </span>
              <input
                type="text"
                name="name"
                required
                value={formData.name}
                onChange={handleInputChange}
                placeholder="John Doe"
                className="w-full pl-11 pr-4 py-3 text-sm rounded-xl bg-white dark:bg-slate-800 border-2 border-sky-200 dark:border-slate-700 text-slate-900 dark:text-white font-black focus:outline-none focus:ring-2 focus:ring-indigo-500 shadow-inner transition"
              />
            </div>
          </div>

          {/* Email Address Input Block */}
          <div className="space-y-1">
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
                className="w-full pl-11 pr-4 py-3 text-sm rounded-xl bg-white dark:bg-slate-800 border-2 border-sky-200 dark:border-slate-700 text-slate-900 dark:text-white font-black focus:outline-none focus:ring-2 focus:ring-indigo-500 shadow-inner transition"
              />
            </div>
          </div>

          {/* Password Input Block */}
          <div className="space-y-1">
            <label className="block text-xs font-black uppercase tracking-wider text-slate-400">Define Security Passcode</label>
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
                className="w-full pl-11 pr-12 py-3 text-sm rounded-xl bg-white dark:bg-slate-800 border-2 border-sky-200 dark:border-slate-700 text-slate-900 dark:text-white font-black focus:outline-none focus:ring-2 focus:ring-indigo-500 shadow-inner transition"
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

          {/* Confirm Password Input Block */}
          <div className="space-y-1">
            <label className="block text-xs font-black uppercase tracking-wider text-slate-400">Re-Enter Passcode verification</label>
            <div className="relative">
              <span className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400 dark:text-slate-500">
                <Lock size={16} strokeWidth={2.5} />
              </span>
              <input
                type={showPassword ? "text" : "password"}
                name="confirmPassword"
                required
                value={formData.confirmPassword}
                onChange={handleInputChange}
                placeholder="&bull;&bull;&bull;&bull;&bull;&bull;&bull;&bull;"
                className="w-full pl-11 pr-4 py-3 text-sm rounded-xl bg-white dark:bg-sky-50 dark:bg-slate-800 border-2 border-sky-200 dark:border-slate-700 text-slate-900 dark:text-white font-black focus:outline-none focus:ring-2 focus:ring-indigo-500 shadow-inner transition"
              />
            </div>
          </div>

          {/* Error Message Module */}
          {validationError && (
            <div className="p-3 text-xs font-black text-rose-600 bg-rose-50 border border-rose-500/20 rounded-xl uppercase">
              {validationError}
            </div>
          )}

          {/* Terms & Operational Agreements */}
          <div className="flex items-start gap-2 pt-1">
            <input
              type="checkbox"
              id="terms"
              required
              className="w-4 h-4 mt-0.5 rounded-md border-2 border-sky-200 dark:border-slate-700 bg-white dark:bg-slate-800 text-indigo-600 focus:ring-0 focus:ring-offset-0 cursor-pointer shadow-inner"
            />
            <label htmlFor="terms" className="text-[10px] font-extrabold uppercase text-slate-400 tracking-wide leading-normal select-none cursor-pointer">
              I agree to the standard{' '}
              <a href="#" className="text-indigo-600 dark:text-indigo-400 hover:underline normal-case font-black">
                Privacy Framework
              </a>{' '}
              and operational parameters.
            </label>
          </div>

          {/* Action Submission Button */}
          <div className="pt-2">
            <button
              type="submit"
              className="w-full flex items-center justify-center gap-2 py-4 bg-gradient-to-r from-indigo-600 to-violet-600 text-white font-black text-sm uppercase tracking-wider rounded-xl shadow-lg shadow-indigo-600/20 active:scale-[0.99] transition duration-200"
            >
              <Sparkles size={16} strokeWidth={2.5} /> Generate Profile Account
            </button>
          </div>

        </form>

        {/* Footnote Alternation Link Mapping */}
        <div className="border-t border-sky-50 dark:border-slate-800 pt-4 text-center">
          <p className="text-xs font-extrabold text-slate-400 tracking-wide uppercase">
            Already authorized?{' '}
            <Link to="/signin" className="text-indigo-600 dark:text-indigo-400 font-black hover:underline tracking-normal normal-case">
              Sign In natively
            </Link>
          </p>
        </div>

      </div>
    </div>
  );
}
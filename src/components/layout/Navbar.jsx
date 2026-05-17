import React, { useState } from 'react';
import { Sun, Moon, Menu, X, ChevronRight } from 'lucide-react';
import { NavLink, Link, useNavigate } from 'react-router-dom'; // 🔥 FIXED: Integrated useNavigate for button routing
import { useDarkMode } from '../../hooks/useDarkMode'; 
import Button from '../ui/Button';

const Navbar = () => {
  const navigate = useNavigate(); // Hook initialized for clean routing transitions
  const [isDark, setIsDark] = useDarkMode();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const closeMenu = () => setIsMenuOpen(false);

  // Premium desktop link state definitions synced with the new palette
  const desktopLinkClass = ({ isActive }) =>
    `text-xs font-black uppercase tracking-wider transition-colors duration-200 ${
      isActive
        ? "text-indigo-600 dark:text-indigo-400 font-black"
        : "text-slate-600 dark:text-slate-400 hover:text-indigo-600 dark:hover:text-white"
    }`;

  // Premium mobile link configuration handler
  const mobileLinkClass = ({ isActive }) =>
    `relative flex items-center justify-center px-4 py-3.5 rounded-2xl text-base font-black uppercase tracking-wide transition-all duration-200 ${
      isActive
        ? "bg-indigo-100/70 dark:bg-indigo-500/10 text-indigo-600 dark:text-indigo-400"
        : "text-slate-600 dark:text-slate-300 hover:bg-sky-100/60 dark:hover:bg-slate-800/50 hover:text-slate-900 dark:hover:text-white"
    }`;

  return (
    <nav className="fixed top-0 left-0 w-full z-50 border-b border-sky-200/60 dark:border-slate-800/50 bg-sky-50/80 dark:bg-slate-950/70 backdrop-blur-xl transition-colors duration-300">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
        
        {/* 🏢 LOGO HOME LINK */}
        <Link 
          to="/" 
          onClick={closeMenu}
          className="flex items-center gap-2 z-50 relative cursor-pointer select-none active:scale-95 transition-transform duration-150"
        >
          <div className="flex h-8 w-8 items-center justify-center rounded-xl bg-primary text-white font-black shadow-sm">R</div>
          <span className="text-xl font-black tracking-tight text-slate-800 dark:text-white uppercase">ResuRanker</span>
        </Link>

        {/* 💻 Desktop Links */}
        <div className="hidden md:flex items-center gap-8">
          <NavLink to="/" className={desktopLinkClass}>Home</NavLink>
          <NavLink to="/analyze" className={desktopLinkClass}>Analyze</NavLink>
          <NavLink to="/editor" className={desktopLinkClass}>Editor</NavLink>
          <NavLink to="/company" className={desktopLinkClass}>Enterprise</NavLink>
          <NavLink to="/about" className={desktopLinkClass}>About</NavLink>
        </div>

        {/* Right Side Actions */}
        <div className="flex items-center gap-3 md:gap-4 z-50 relative">
          
          {/* Theme Switcher Button Control */}
          <button 
            onClick={() => setIsDark(!isDark)}
            className="p-2.5 rounded-xl bg-sky-100/70 dark:bg-slate-800 text-indigo-600 dark:text-slate-300 hover:ring-2 ring-indigo-500/30 transition-all"
            aria-label="Toggle Dark Mode"
          >
            {isDark ? <Sun size={18} strokeWidth={2.5} /> : <Moon size={18} strokeWidth={2.5} />}
          </button>
          
          {/* 🔥 FIXED: Desktop Sign In button now actively routes to the login sandbox */}
          <Button 
            variant="secondary" 
            onClick={() => { closeMenu(); navigate('/signin'); }}
            className="hidden md:block shadow-md font-black uppercase text-xs tracking-wider hover:-translate-y-0.5 transition-transform"
          >
            Sign In
          </Button>

          {/* Premium Animated Hamburger Button */}
          <button 
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden relative w-10 h-10 flex items-center justify-center rounded-xl bg-sky-100/70 dark:bg-slate-800 text-indigo-600 dark:text-slate-300 transition-all active:scale-95"
            aria-label="Toggle Mobile Menu"
          >
            <Menu className={`absolute transition-all duration-300 ease-in-out ${isMenuOpen ? 'opacity-0 rotate-90 scale-50' : 'opacity-100 rotate-0 scale-100'}`} size={20} strokeWidth={2.5} />
            <X className={`absolute transition-all duration-300 ease-in-out ${isMenuOpen ? 'opacity-100 rotate-0 scale-100' : 'opacity-0 -rotate-90 scale-50'}`} size={20} strokeWidth={2.5} />
          </button>

        </div>
      </div>

      {/* --- Premium Mobile Dropdown Menu --- */}
      <div 
        className={`md:hidden absolute top-full left-0 w-full overflow-hidden transition-all duration-400 ease-in-out ${
          isMenuOpen 
            ? "max-h-[600px] opacity-100 shadow-[0_30px_60px_-15px_rgba(15,23,42,0.08)] dark:shadow-[0_30px_60px_-15px_rgba(0,0,0,0.5)] border-b border-sky-200/60 dark:border-slate-800/50" 
            : "max-h-0 opacity-0 pointer-events-none"
        }`}
      >
        <div className="bg-sky-50/95 dark:bg-slate-950/95 backdrop-blur-2xl px-6 py-6 flex flex-col gap-2 text-center">
          
          <NavLink to="/" onClick={closeMenu} className={mobileLinkClass}>
            {({ isActive }) => (
              <>
                <span>Home</span>
                {isActive && <ChevronRight size={18} strokeWidth={2.5} className="absolute right-4 text-indigo-600 opacity-80" />}
              </>
            )}
          </NavLink>
          
          <NavLink to="/analyze" onClick={closeMenu} className={mobileLinkClass}>
             {({ isActive }) => (
              <>
                <span>Analyze</span>
                {isActive && <ChevronRight size={18} strokeWidth={2.5} className="absolute right-4 text-indigo-600 opacity-80" />}
              </>
            )}
          </NavLink>
          
          <NavLink to="/editor" onClick={closeMenu} className={mobileLinkClass}>
             {({ isActive }) => (
              <>
                <span>Editor</span>
                {isActive && <ChevronRight size={18} strokeWidth={2.5} className="absolute right-4 text-indigo-600 opacity-80" />}
              </>
            )}
          </NavLink>

          <NavLink to="/company" onClick={closeMenu} className={mobileLinkClass}>
             {({ isActive }) => (
              <>
                <span>Enterprise</span>
                {isActive && <ChevronRight size={18} strokeWidth={2.5} className="absolute right-4 text-indigo-600 opacity-80" />}
              </>
            )}
          </NavLink>
          
          <NavLink to="/about" onClick={closeMenu} className={mobileLinkClass}>
             {({ isActive }) => (
              <>
                <span>About</span>
                {isActive && <ChevronRight size={18} strokeWidth={2.5} className="absolute right-4 text-indigo-600 opacity-80" />}
              </>
            )}
          </NavLink>

          {/* 🔥 FIXED: Mobile Sign In button now gracefully clears state triggers and routes to authentication page */}
          <div className="pt-5 mt-2 border-t-2 border-sky-200/60 dark:border-slate-800/60">
            <Button 
              variant="secondary" 
              onClick={() => { closeMenu(); navigate('/signin'); }}
              className="w-full text-base font-black uppercase tracking-wider py-4 rounded-xl shadow-md hover:scale-[1.01] transition-transform"
            >
              Sign In to Account
            </Button>
          </div>
          
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
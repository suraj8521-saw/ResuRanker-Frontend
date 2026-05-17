import React from 'react';

const Button = ({ children, variant = 'primary', className = '', ...props }) => {
  const baseStyles = 'rounded-lg px-6 py-2.5 text-sm font-bold transition-all shadow-sm active:scale-95 disabled:opacity-50';
  
  const variants = {
    primary: 'bg-indigo-600 text-white hover:bg-indigo-700',
    secondary: 'bg-slate-900 text-white hover:bg-slate-800',
    outline: 'border border-slate-200 text-slate-600 hover:bg-slate-50',
    ghost: 'text-indigo-600 hover:bg-indigo-50 shadow-none'
  };

  return (
    <button 
      className={`${baseStyles} ${variants[variant]} ${className}`} 
      {...props}
    >
      {children}
    </button>
  );
};

// YEH LINE SABSE IMPORTANT HAI 🚨
export default Button;
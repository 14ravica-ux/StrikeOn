import React from 'react';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'outline' | 'white';
  fullWidth?: boolean;
  size?: 'sm' | 'md' | 'lg';
}

export const Button: React.FC<ButtonProps> = ({ 
  children, 
  variant = 'primary', 
  fullWidth = false, 
  size = 'md',
  className = '',
  ...props 
}) => {
  const baseStyles = "inline-flex items-center justify-center font-bold transition-all duration-200 rounded-md focus:outline-none focus:ring-2 focus:ring-offset-2";
  
  const variants = {
    // Updated to use brand-navy text for better contrast on lime, and darkLime on hover
    primary: "bg-brand-lime text-brand-navy hover:bg-brand-darkLime hover:text-white focus:ring-brand-lime shadow-lg hover:shadow-xl",
    // Secondary uses the new deep navy
    secondary: "bg-brand-navy text-white hover:bg-slate-800 focus:ring-brand-navy border border-transparent",
    // Outline uses deep navy
    outline: "border-2 border-brand-navy text-brand-navy hover:bg-brand-navy hover:text-white",
    // White variant
    white: "bg-white text-brand-navy hover:bg-gray-50 shadow-md hover:text-brand-lime"
  };

  const sizes = {
    sm: "px-4 py-2 text-sm",
    md: "px-6 py-3 text-base",
    lg: "px-8 py-4 text-lg"
  };

  const widthStyle = fullWidth ? "w-full" : "";

  return (
    <button 
      className={`${baseStyles} ${variants[variant]} ${sizes[size]} ${widthStyle} ${className}`}
      {...props}
    >
      {children}
    </button>
  );
};
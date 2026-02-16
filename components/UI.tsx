import React, { useEffect, useRef, useState } from 'react';

// --- BUTTON ---
interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'outline';
  fullWidth?: boolean;
}

export const Button: React.FC<ButtonProps> = ({ 
  children, 
  variant = 'primary', 
  fullWidth = false, 
  className = '', 
  ...props 
}) => {
  const baseStyles = "inline-flex items-center justify-center px-8 py-4 text-sm uppercase tracking-widest font-bold transition-all duration-300 rounded-sm focus:outline-none focus:ring-2 focus:ring-offset-2";
  
  const variants = {
    primary: "bg-teal-900 text-stone-50 hover:bg-teal-800 focus:ring-teal-900 shadow-sm hover:shadow-md",
    secondary: "bg-stone-200 text-stone-800 hover:bg-stone-300 focus:ring-stone-400",
    outline: "border border-stone-800 text-stone-800 hover:bg-stone-800 hover:text-white focus:ring-stone-800"
  };

  const widthClass = fullWidth ? "w-full" : "";

  return (
    <button 
      className={`${baseStyles} ${variants[variant]} ${widthClass} ${className}`} 
      {...props}
    >
      {children}
    </button>
  );
};

// --- FADE IN ANIMATION ---
interface FadeInProps {
  children: React.ReactNode;
  delay?: number; // ms
  direction?: 'up' | 'none';
  className?: string;
}

export const FadeIn: React.FC<FadeInProps> = ({ 
  children, 
  delay = 0, 
  direction = 'up',
  className = ''
}) => {
  const [isVisible, setIsVisible] = useState(false);
  const domRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      });
    }, { threshold: 0.1, rootMargin: "0px 0px -50px 0px" });

    const current = domRef.current;
    if (current) {
      observer.observe(current);
    }

    return () => {
      if (current) {
        observer.unobserve(current);
      }
    };
  }, []);

  const translateClass = direction === 'up' ? 'translate-y-8' : '';
  const visibleClass = isVisible ? 'opacity-100 translate-y-0' : `opacity-0 ${translateClass}`;

  return (
    <div
      ref={domRef}
      className={`transition-all duration-1000 ease-out ${visibleClass} ${className}`}
      style={{ transitionDelay: `${delay}ms` }}
    >
      {children}
    </div>
  );
};

// --- SECTION WRAPPER ---
interface SectionProps {
  id?: string;
  className?: string;
  children: React.ReactNode;
}

export const Section: React.FC<SectionProps> = ({ id, className = "bg-stone-50", children }) => {
  return (
    <section id={id} className={`py-20 md:py-28 px-6 md:px-12 lg:px-24 overflow-hidden ${className}`}>
      <div className="max-w-6xl mx-auto">
        {children}
      </div>
    </section>
  );
};
import React from 'react';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
  className?: string;
  size?: 'sm' | 'md' | 'lg' | 'icon';
  variant?: 'default' | 'outline' | 'ghost';
}

export const Button: React.FC<ButtonProps> = ({ 
  children, 
  className = '', 
  size = 'md',
  variant = 'default',
  ...props 
}) => {
  const sizeClasses = {
    sm: 'px-3 py-1.5 text-sm',
    md: 'px-4 py-2',
    lg: 'px-6 py-3 text-lg',
    icon: 'p-2 w-10 h-10'
  };

  const variantClasses = {
    default: 'bg-primary hover:bg-primary/90 text-primary-foreground',
    outline: 'border border-border bg-transparent hover:bg-muted',
    ghost: 'bg-transparent hover:bg-muted'
  };

  return (
    <button 
      className={`rounded-md font-medium transition-colors focus:outline-none focus:ring-2 focus:ring-primary/20 ${sizeClasses[size]} ${variantClasses[variant]} ${className}`}
      {...props}
    >
      {children}
    </button>
  );
}; 
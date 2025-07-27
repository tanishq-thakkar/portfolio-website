import React from 'react';

interface AvatarProps {
  children: React.ReactNode;
  className?: string;
}

interface AvatarImageProps {
  src: string | { src: string };
  alt: string;
  className?: string;
}

interface AvatarFallbackProps {
  children: React.ReactNode;
  className?: string;
}

export const Avatar: React.FC<AvatarProps> = ({ children, className = '' }) => {
  return (
    <div className={`relative inline-block rounded-full overflow-hidden ${className}`}>
      {children}
    </div>
  );
};

export const AvatarImage: React.FC<AvatarImageProps> = ({ src, alt, className = '' }) => {
  const imageSrc = typeof src === 'string' ? src : src.src;
  
  return (
    <img 
      src={imageSrc} 
      alt={alt} 
      className={`w-full h-full object-cover ${className}`}
    />
  );
};

export const AvatarFallback: React.FC<AvatarFallbackProps> = ({ children, className = '' }) => {
  return (
    <div className={`w-full h-full flex items-center justify-center bg-muted text-muted-foreground ${className}`}>
      {children}
    </div>
  );
}; 
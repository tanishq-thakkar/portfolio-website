import { useState } from 'react';

interface ToastOptions {
  title: string;
  description?: string;
}

export const useToast = () => {
  const [toasts, setToasts] = useState<ToastOptions[]>([]);

  const toast = (options: ToastOptions) => {
    // Simple implementation - just log to console for now
    console.log('Toast:', options.title, options.description);
    
    // In a real app, you'd add this to a toast queue
    setToasts(prev => [...prev, options]);
    
    // Remove toast after 3 seconds
    setTimeout(() => {
      setToasts(prev => prev.filter(t => t !== options));
    }, 3000);
  };

  return { toast, toasts };
}; 
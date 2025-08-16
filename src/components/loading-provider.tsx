// src/components/loading-provider.tsx
"use client";

import { useState, useEffect } from 'react';
import { LoadingPage } from './loading';

interface LoadingProviderProps {
  children: React.ReactNode;
}

export function LoadingProvider({ children }: LoadingProviderProps) {
  const [isLoading, setIsLoading] = useState(true);

  // Optional: Add actual loading logic here
  useEffect(() => {
    // You can add real loading logic here
    // For example: preloading images, fonts, etc.
    
    // Minimum loading time to show the animation
    const minLoadTime = 3000; // 3 seconds
    
    const timer = setTimeout(() => {
      // You can add additional loading completion logic here
    }, minLoadTime);

    return () => clearTimeout(timer);
  }, []);

  const handleLoadingComplete = () => {
    setIsLoading(false);
  };

  if (isLoading) {
    return <LoadingPage onLoadingComplete={handleLoadingComplete} />;
  }

  return <>{children}</>;
}

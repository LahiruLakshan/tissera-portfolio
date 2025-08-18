"use client";

import React, { useEffect, useRef } from 'react';
import { motion, useMotionValue, useSpring } from 'framer-motion';

export function CustomCursor() {
  // Use motion values for better performance
  const cursorX = useMotionValue(-100);
  const cursorY = useMotionValue(-100);
  
  // Apply spring physics for smooth movement
  const springX = useSpring(cursorX, { 
    stiffness: 500, 
    damping: 28,
    mass: 0.5
  });
  const springY = useSpring(cursorY, { 
    stiffness: 500, 
    damping: 28,
    mass: 0.5
  });

  const isHoveringRef = useRef(false);
  const cursorRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Use RAF for smoother updates
    let rafId: number;
    
    const updateMousePosition = (e: MouseEvent) => {
      if (rafId) {
        cancelAnimationFrame(rafId);
      }
      
      rafId = requestAnimationFrame(() => {
        cursorX.set(e.clientX);
        cursorY.set(e.clientY);
      });
    };

    const handleMouseEnter = () => {
      isHoveringRef.current = true;
      if (cursorRef.current) {
        cursorRef.current.style.transform = 'scale(1.5)';
        cursorRef.current.style.borderColor = 'rgb(34 197 94)';
        cursorRef.current.style.backgroundColor = 'rgba(34, 197, 94, 0.2)';
      }
    };

    const handleMouseLeave = () => {
      isHoveringRef.current = false;
      if (cursorRef.current) {
        cursorRef.current.style.transform = 'scale(1)';
        cursorRef.current.style.borderColor = 'rgba(34, 197, 94, 0.6)';
        cursorRef.current.style.backgroundColor = 'transparent';
      }
    };

    // Passive listeners for better performance
    document.addEventListener('mousemove', updateMousePosition, { passive: true });

    // Use delegation for better performance
    const handleDelegatedMouseEnter = (e: MouseEvent) => {
      const target = e.target as Element;
      if (target.matches('a, button, [role="button"], input, textarea, select')) {
        handleMouseEnter();
      }
    };

    const handleDelegatedMouseLeave = (e: MouseEvent) => {
      const target = e.target as Element;
      if (target.matches('a, button, [role="button"], input, textarea, select')) {
        handleMouseLeave();
      }
    };

    document.addEventListener('mouseover', handleDelegatedMouseEnter, { passive: true });
    document.addEventListener('mouseout', handleDelegatedMouseLeave, { passive: true });

    return () => {
      if (rafId) {
        cancelAnimationFrame(rafId);
      }
      document.removeEventListener('mousemove', updateMousePosition);
      document.removeEventListener('mouseover', handleDelegatedMouseEnter);
      document.removeEventListener('mouseout', handleDelegatedMouseLeave);
    };
  }, [cursorX, cursorY]);

  return (
    <>
      <style jsx global>{`
        * {
          cursor: none !important;
        }
        @media (hover: none) and (pointer: coarse) {
          * {
            cursor: auto !important;
          }
        }
        @media (max-width: 768px) {
          * {
            cursor: auto !important;
          }
        }
      `}</style>

      <motion.div
        ref={cursorRef}
        className="fixed pointer-events-none z-[9999] w-6 h-6 hidden md:block will-change-transform"
        style={{
          translateX: springX,
          translateY: springY,
          translateZ: 0, // Force GPU acceleration
        }}
      >
        <div 
          className="w-full h-full rounded-full border-2 transition-colors duration-150 ease-out"
          style={{
            borderColor: 'rgba(34, 197, 94, 0.6)',
            backgroundColor: 'transparent',
          }}
        />
        <div 
          className="absolute top-1/2 left-1/2 w-1 h-1 bg-green-600 rounded-full"
          style={{
            transform: 'translate(-50%, -50%)',
          }}
        />
      </motion.div>
    </>
  );
}

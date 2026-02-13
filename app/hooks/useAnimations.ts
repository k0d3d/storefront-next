'use client'

import { useEffect, useRef } from 'react'

export const useAnimations = () => {
  const animatedCounters = useRef<Set<HTMLElement>>(new Set());

  useEffect(() => {
    // A1: Fade-In on Scroll
    const fadeInObserver = new IntersectionObserver(
      (entries, observer) => {
        entries.forEach((entry, index) => {
          if (entry.isIntersecting) {
            const target = entry.target as HTMLElement;
            // Apply stagger if the parent has the class
            if (target.parentElement?.classList.contains('stagger-children')) {
              const delay = (parseInt(target.dataset.staggerIndex || '0', 10) || index) * 100;
              target.style.transitionDelay = `${delay}ms`;
            }
            target.classList.add('visible');
            observer.unobserve(target);
          }
        });
      },
      { threshold: 0.3 }
    );

    const fadeInElements = document.querySelectorAll('.fade-in');
    fadeInElements.forEach((el, index) => {
        (el as HTMLElement).dataset.staggerIndex = String(index);
        fadeInObserver.observe(el);
    });

    // A2: Counter Animation
    const animateCounter = (element: HTMLElement, target: number, duration = 2000) => {
      if (animatedCounters.current.has(element)) return; // Prevent re-animating
      animatedCounters.current.add(element);

      const start = 0;
      const increment = target / (duration / 16);
      let current = start;

      const timer = setInterval(() => {
        current += increment;
        if (current >= target) {
          current = target;
          clearInterval(timer);
        }
        element.textContent = Math.floor(current).toLocaleString();
      }, 16);
    };

    const counterObserver = new IntersectionObserver(
      (entries, observer) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            const element = entry.target as HTMLElement;
            const target = parseInt(element.dataset.target || '0', 10);
            animateCounter(element, target);
            observer.unobserve(element);
          }
        });
      },
      { threshold: 0.5 }
    );

    const counterElements = document.querySelectorAll('.counter');
    counterElements.forEach(el => counterObserver.observe(el));

    // A3: Smooth Parallax Scroll
    const handleScroll = () => {
      if (window.innerWidth < 768) return; // Disable on mobile
      const scrolled = window.pageYOffset;
      const parallaxElements = document.querySelectorAll<HTMLElement>('.parallax-bg');
      parallaxElements.forEach(el => {
        const speed = 0.4;
        el.style.transform = `translateY(${scrolled * speed}px)`;
      });
    };

    window.addEventListener('scroll', handleScroll);

    // Cleanup function
    return () => {
      fadeInElements.forEach(el => fadeInObserver.unobserve(el));
      counterElements.forEach(el => counterObserver.unobserve(el));
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);
};

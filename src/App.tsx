import React, { useState, useEffect } from 'react';
import { ThemeToggle } from './components/ThemeToggle';
import { Hero } from './components/Hero';
import { Features } from './components/Features';
import { Screenshots } from './components/Screenshots';
import { Testimonials } from './components/Testimonials';
import { Footer } from './components/Footer';

function App() {
  const [isDark, setIsDark] = useState(false);

  useEffect(() => {
    if (isDark) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [isDark]);

  return (
    <div className="min-h-screen bg-white dark:bg-gray-900 transition-colors duration-300">
      <ThemeToggle isDark={isDark} onToggle={() => setIsDark(!isDark)} />
      <Hero />
      <Features />
      <Screenshots />
      <Testimonials />
      <Footer />
    </div>
  );
}

export default App;
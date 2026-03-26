import { motion } from 'framer-motion';
import { useState, useEffect } from 'react';

const navItems = [
  { name: 'Experience', href: '#experience' },
  { name: 'Skills', href: '#skills' },
  { name: 'Certifications', href: '#certifications' },
  { name: 'Projects', href: '#projects' },
  { name: 'Contact', href: '#contact' }
];

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    const target = document.querySelector(href);
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'py-4 bg-black/60 backdrop-blur-xl border-b border-white/10 shadow-lg shadow-black/50' : 'py-6 bg-transparent'
      }`}
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 flex justify-between items-center">
        {/* Logo / Initials */}
        <a 
          href="#" 
          onClick={(e) => { e.preventDefault(); window.scrollTo({ top: 0, behavior: 'smooth' }); }}
          className="text-2xl font-black tracking-tighter bg-clip-text text-transparent bg-gradient-to-r from-primary to-secondary hover:opacity-80 transition-opacity"
        >
          HP.
        </a>
        
        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center gap-8">
          {navItems.map((item) => (
            <a
              key={item.name}
              href={item.href}
              onClick={(e) => handleClick(e, item.href)}
              className="text-sm font-medium text-gray-300 hover:text-white transition-colors relative after:absolute after:bottom-0 after:left-0 after:h-[2px] after:w-0 hover:after:w-full after:bg-primary after:transition-all after:duration-300 pb-1"
            >
              {item.name}
            </a>
          ))}
          <a
            href="/Harsh_Pandey_Resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="px-5 py-2 rounded-xl bg-primary/20 hover:bg-primary/40 text-white border border-primary/30 transition-all text-sm font-semibold flex items-center gap-2"
          >
            Resume
          </a>
        </div>
        
        {/* Mobile Navigation (Scrollable row) */}
        <div className="md:hidden flex items-center overflow-x-auto gap-4 [scrollbar-width:none] [-ms-overflow-style:none] [&::-webkit-scrollbar]:hidden py-2">
          {navItems.map((item) => (
            <a
              key={item.name}
              href={item.href}
              onClick={(e) => handleClick(e, item.href)}
              className="text-xs font-medium text-gray-300 hover:text-white whitespace-nowrap px-3 py-1.5 bg-white/5 rounded-full border border-white/10"
            >
              {item.name}
            </a>
          ))}
          <a
            href="/Harsh_Pandey_Resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="text-xs font-medium text-white whitespace-nowrap px-4 py-1.5 bg-primary/20 rounded-full border border-primary/30"
          >
            Resume
          </a>
        </div>
      </div>
    </motion.nav>
  );
}

import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion } from 'motion/react';
import { ArrowLeftRight, Menu, X, User } from 'lucide-react';
import { cn } from '../../lib/utils';

export default function Navbar() {
  const [isOpen, setIsOpen] = React.useState(false);
  const location = useLocation();

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'Dashboard', path: '/dashboard' },
    { name: 'Matching', path: '/matching' },
    { name: 'Tasks', path: '/tasks' },
    { name: 'Impact', path: '/analytics' },
    { name: 'About', path: '/about' },
  ];

  const isHome = location.pathname === '/';

  return (
    <nav className={cn(
      "fixed top-0 left-0 right-0 z-50 transition-all duration-300 px-6 py-4",
      isHome && !isOpen ? "bg-transparent" : "bg-brand-paper/80 backdrop-blur-md border-bottom border-brand-ink/10"
    )}>
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        <Link to="/" className="flex items-center gap-2 group">
          <div className="w-10 h-10 rounded-full premium-gradient flex items-center justify-center text-white shadow-lg group-hover:scale-105 transition-transform">
            <ArrowLeftRight size={24} />
          </div>
          <span className="font-serif text-2xl font-bold tracking-tight text-brand-green-900">
            SevaBridge
          </span>
        </Link>

        {/* Desktop Links */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <Link 
              key={link.path} 
              to={link.path}
              className={cn(
                "text-sm font-medium tracking-wide transition-colors hover:text-brand-gold",
                location.pathname === link.path ? "text-brand-gold" : "text-brand-ink/70"
              )}
            >
              {link.name}
            </Link>
          ))}
          <Link 
            to="/auth" 
            className="flex items-center gap-2 px-5 py-2.5 rounded-full premium-gradient text-white text-sm font-semibold shadow-md hover:shadow-xl hover:-translate-y-0.5 transition-all"
          >
            <User size={16} />
            <span>Sign In</span>
          </Link>
        </div>

        {/* Mobile Toggle */}
        <button 
          className="md:hidden text-brand-ink p-2"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <motion.div 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="absolute top-full left-0 right-0 bg-brand-paper border-b border-brand-ink/10 p-6 flex flex-col gap-4 md:hidden shadow-2xl"
        >
          {navLinks.map((link) => (
            <Link 
              key={link.path} 
              to={link.path}
              onClick={() => setIsOpen(false)}
              className="text-lg font-medium text-brand-ink/80 hover:text-brand-gold"
            >
              {link.name}
            </Link>
          ))}
          <Link 
            to="/auth" 
            onClick={() => setIsOpen(false)}
            className="mt-2 py-3 rounded-xl bg-brand-green-900 text-white text-center font-bold"
          >
            Sign In
          </Link>
        </motion.div>
      )}
    </nav>
  );
}

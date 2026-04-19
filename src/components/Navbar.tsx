import { motion } from 'motion/react';
import { Sparkles, Menu, X } from 'lucide-react';
import { useState } from 'react';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <motion.nav 
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className="fixed top-0 left-0 right-0 z-50 px-6 py-4"
    >
      <div className="max-w-7xl mx-auto flex items-center justify-between glass rounded-full px-6 py-3">
        <div className="flex items-center gap-2">
          <Sparkles className="w-6 h-6 text-nebula-accent" />
          <span className="font-display font-medium text-lg tracking-tight">Nebula</span>
        </div>

        <div className="hidden md:flex items-center gap-8 text-sm font-medium text-nebula-muted">
          <a href="#" className="hover:text-nebula-white transition-colors">Features</a>
          <a href="#" className="hover:text-nebula-white transition-colors">Showcase</a>
          <a href="#" className="hover:text-nebula-white transition-colors">Process</a>
          <a href="#" className="hover:text-nebula-white transition-colors">Pricing</a>
        </div>

        <div className="flex items-center gap-4">
          <button className="hidden md:block text-sm font-medium hover:text-nebula-accent transition-colors">Log In</button>
          <button className="bg-nebula-white text-nebula-black px-5 py-2 rounded-full text-sm font-semibold hover:bg-nebula-accent hover:text-nebula-white transition-all cursor-pointer">
            Get Started
          </button>
          <button 
            className="md:hidden"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {isOpen && (
        <motion.div 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="md:hidden mt-4 glass rounded-3xl p-6 flex flex-col gap-4 text-center"
        >
          <a href="#" className="text-lg font-medium">Features</a>
          <a href="#" className="text-lg font-medium">Showcase</a>
          <a href="#" className="text-lg font-medium">Process</a>
          <a href="#" className="text-lg font-medium">Pricing</a>
          <hr className="border-white/10" />
          <button className="text-nebula-accent font-semibold">Get Started</button>
        </motion.div>
      )}
    </motion.nav>
  );
}

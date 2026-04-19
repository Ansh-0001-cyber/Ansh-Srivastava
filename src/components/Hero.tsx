import { motion } from 'motion/react';
import { ArrowRight, Play } from 'lucide-react';

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center pt-32 pb-20 overflow-hidden">
      {/* Background Orbs */}
      <div className="absolute top-1/4 -left-20 w-96 h-96 bg-nebula-accent/20 blur-[120px] rounded-full animate-float" />
      <div className="absolute bottom-1/4 -right-20 w-[500px] h-[500px] bg-nebula-accent/10 blur-[150px] rounded-full animate-float" style={{ animationDelay: '-3s' }} />

      <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-12 items-center">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-white/10 bg-white/5 text-xs font-mono uppercase tracking-widest text-nebula-accent mb-8">
            <span className="w-2 h-2 rounded-full bg-nebula-accent animate-pulse" />
            Next Gen Intelligence
          </div>
          
          <h1 className="text-6xl md:text-8xl font-display font-bold leading-[0.9] mb-8 text-gradient">
            Creation Without <br />
            <span className="text-nebula-accent">Limits.</span>
          </h1>
          
          <p className="text-lg md:text-xl text-nebula-muted font-sans max-w-lg mb-10 leading-relaxed">
            Nebula empowers creators with autonomous AI that understands context, 
            style, and intent. Build the impossible in seconds.
          </p>

          <div className="flex flex-wrap gap-4">
            <button className="px-8 py-4 bg-nebula-white text-nebula-black rounded-full font-bold flex items-center gap-2 hover:bg-nebula-accent hover:text-nebula-white transition-all group cursor-pointer">
              Start Building
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </button>
            <button className="px-8 py-4 rounded-full border border-white/10 hover:bg-white/5 transition-all flex items-center gap-2 cursor-pointer font-medium">
              <Play className="w-4 h-4 fill-current" />
              Watch Demo
            </button>
          </div>

          <div className="mt-16 flex items-center gap-6">
            <div className="flex -space-x-3">
              {[1, 2, 3, 4].map((i) => (
                <div key={i} className="w-10 h-10 rounded-full border-2 border-nebula-black bg-white/10 overflow-hidden">
                  <img src={`https://picsum.photos/seed/user${i}/100/100`} alt="User" referrerPolicy="no-referrer" />
                </div>
              ))}
            </div>
            <div className="text-sm font-medium">
              <span className="text-nebula-white">1,200+</span> creators joined this week
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, ease: 'easeOut' }}
          viewport={{ once: true }}
          className="relative"
        >
          <div className="aspect-square glass rounded-[60px] overflow-hidden relative group">
            <img 
              src="https://picsum.photos/seed/nebula-hero/1200/1200" 
              alt="AI Visualization" 
              className="w-full h-full object-cover opacity-60 group-hover:scale-105 transition-transform duration-700" 
              referrerPolicy="no-referrer"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-nebula-black via-transparent to-transparent" />
            
            {/* Floating UI Elements */}
            <motion.div 
              animate={{ y: [0, -10, 0] }}
              transition={{ repeat: Infinity, duration: 4 }}
              className="absolute top-12 right-12 glass p-4 rounded-2xl w-48 shadow-2xl"
            >
              <div className="h-2 w-12 bg-nebula-accent rounded-full mb-3" />
              <div className="h-2 w-full bg-white/10 rounded-full mb-2" />
              <div className="h-2 w-4/5 bg-white/10 rounded-full" />
            </motion.div>

            <motion.div 
              animate={{ y: [0, 10, 0] }}
              transition={{ repeat: Infinity, duration: 5 }}
              className="absolute bottom-12 left-12 glass p-4 rounded-2xl w-56 shadow-2xl"
            >
              <div className="flex items-center gap-3 mb-3">
                <div className="w-8 h-8 rounded-full bg-nebula-accent/20 flex items-center justify-center">
                  <Sparkles className="w-4 h-4 text-nebula-accent" />
                </div>
                <div className="h-2 w-16 bg-white/20 rounded-full" />
              </div>
              <div className="grid grid-cols-4 gap-2">
                {[1, 2, 3, 4].map(i => <div key={i} className="aspect-square rounded-md bg-white/5" />)}
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
import { Sparkles } from 'lucide-react';

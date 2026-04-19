/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Features from './components/Features';
import Showcase from './components/Showcase';
import Footer from './components/Footer';
import { motion, useScroll, useSpring } from 'motion/react';

export default function App() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  return (
    <div className="min-h-screen selection:bg-nebula-accent selection:text-white">
      {/* Custom Progress Bar */}
      <motion.div
        className="fixed top-0 left-0 right-0 h-1 bg-nebula-accent z-[60] origin-left"
        style={{ scaleX }}
      />

      <Navbar />
      
      <main>
        <Hero />
        
        {/* Social Proof Strip */}
        <section className="py-12 border-y border-white/5 bg-white/[0.02]">
          <div className="max-w-7xl mx-auto px-6">
            <div className="flex flex-wrap justify-between items-center gap-8 opacity-40 grayscale hover:grayscale-0 hover:opacity-100 transition-all duration-500">
              {['Microsoft', 'Antigravity', 'Linear', 'OpenAI', 'Vercel'].map((brand) => (
                <span key={brand} className="text-xl font-display font-bold tracking-tighter">
                  {brand}
                </span>
              ))}
            </div>
          </div>
        </section>

        <Features />
        <Showcase />

        {/* CTA Section */}
        <section className="py-32 px-6">
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="max-w-5xl mx-auto glass-accent rounded-[60px] p-12 md:p-24 text-center relative overflow-hidden"
          >
            {/* Background Grain */}
            <div className="absolute inset-0 opacity-[0.03] pointer-events-none" style={{ backgroundImage: 'url("https://grainy-gradients.vercel.app/noise.svg")' }} />
            
            <h2 className="text-4xl md:text-7xl font-display font-bold mb-8 leading-tight">
              Ready to witness the <br />
              <span className="italic font-serif">future?</span>
            </h2>
            <p className="text-xl text-nebula-white/60 mb-12 max-w-xl mx-auto leading-relaxed">
              Join thousands of creators who are already redefining their 
              creative boundaries with Nebula.
            </p>
            <div className="flex flex-wrap justify-center gap-6">
              <button className="px-10 py-5 bg-nebula-white text-nebula-black rounded-full font-bold text-lg hover:bg-nebula-accent hover:text-nebula-white transition-all cursor-pointer">
                Get Started for Free
              </button>
              <button className="px-10 py-5 glass rounded-full font-bold text-lg hover:bg-white/10 transition-all cursor-pointer">
                Contact Sales
              </button>
            </div>
          </motion.div>
        </section>
      </main>

      <Footer />
    </div>
  );
}

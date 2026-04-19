import { motion } from 'motion/react';
import { Activity, Terminal, Code2, Workflow } from 'lucide-react';

export default function Showcase() {
  return (
    <section className="py-24 bg-nebula-white text-nebula-black overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <span className="font-mono text-sm tracking-tighter text-nebula-accent mb-4 block uppercase font-bold">Showcase / 01</span>
            <h2 className="text-5xl md:text-7xl font-display font-bold leading-tight mb-8">
              Visualizing the <br /> 
              <span className="italic font-serif">Invisible.</span>
            </h2>
            <p className="text-gray-600 mb-10 max-w-md leading-relaxed">
              Our interface doesn't just show data—it maps the thought process of the AI, 
              giving you full transparency and control over every inference.
            </p>

            <div className="space-y-6">
              {[
                { title: 'Live Inference Map', icon: Activity },
                { title: 'Deterministic Control', icon: Terminal },
                { title: 'API Integration', icon: Code2 },
                { title: 'Custom Workflows', icon: Workflow }
              ].map((item, i) => (
                <div key={i} className="flex items-center gap-4 p-4 rounded-2xl border border-gray-200 hover:bg-gray-50 transition-colors cursor-pointer group">
                  <div className="w-10 h-10 rounded-xl bg-nebula-black text-white flex items-center justify-center group-hover:bg-nebula-accent transition-colors">
                    <item.icon className="w-5 h-5" />
                  </div>
                  <span className="font-bold">{item.title}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="relative">
            <motion.div 
              initial={{ rotate: 10, scale: 0.9, opacity: 0 }}
              whileInView={{ rotate: -5, scale: 1, opacity: 1 }}
              transition={{ duration: 1 }}
              viewport={{ once: true }}
              className="bg-nebula-black rounded-[40px] p-8 shadow-3xl text-nebula-white font-mono text-xs overflow-hidden relative"
            >
              <div className="absolute top-0 left-0 w-full h-8 bg-gray-900 flex items-center px-4 gap-2 border-b border-white/5">
                <div className="w-2 h-2 rounded-full bg-red-400" />
                <div className="w-2 h-2 rounded-full bg-yellow-400" />
                <div className="w-2 h-2 rounded-full bg-green-400" />
                <span className="ml-4 opacity-40">nebula_engine_v4.2.ts</span>
              </div>

              <div className="mt-8 space-y-2 opacity-80">
                <p className="text-nebula-accent">Ready: Connection Established</p>
                <p>{'>'} initializing creative_core...</p>
                <p className="text-nebula-muted">... mapping neural clusters [7.4b params]</p>
                <p>{'>'} analyzing stylistic intent: "Minimalism"</p>
                <p>{'>'} prompt perceived: "Build a futuristic UI"</p>
                <div className="h-2 w-full bg-white/5 rounded-full my-4">
                  <motion.div 
                    initial={{ width: 0 }}
                    whileInView={{ width: '85%' }}
                    transition={{ duration: 2, delay: 0.5 }}
                    className="h-full bg-nebula-accent rounded-full" 
                  />
                </div>
                <p className="text-green-400">Success: Model Response Generated [84ms]</p>
                <p className="text-nebula-muted mt-4 font-sans text-sm italic">"The interface should breathe with light..."</p>
              </div>

              <div className="mt-8 grid grid-cols-2 gap-4">
                <div className="aspect-video rounded-xl bg-white/5 border border-white/10" />
                <div className="aspect-video rounded-xl bg-white/5 border border-white/10" />
              </div>
            </motion.div>

            {/* Decorative Element */}
            <div className="absolute -z-10 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] bg-nebula-accent/10 blur-[100px] rounded-full" />
          </div>
        </div>
      </div>
    </section>
  );
}

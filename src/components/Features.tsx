import { motion } from 'motion/react';
import { Cpu, Zap, Shield, Globe, Layers, Eye } from 'lucide-react';

const features = [
  {
    title: 'Neural Processing',
    desc: 'Powered by the latest transformer architecture for deep context understanding.',
    icon: Cpu,
    span: 'md:col-span-2 md:row-span-2',
    color: 'bg-blue-500/10 text-blue-500'
  },
  {
    title: 'Real-time Sync',
    desc: 'Instant collaboration across all devices and platforms.',
    icon: Zap,
    span: 'md:col-span-1 md:row-span-1',
    color: 'bg-yellow-500/10 text-yellow-500'
  },
  {
    title: 'Secure by Design',
    desc: 'Enterprise-grade encryption and privacy controls.',
    icon: Shield,
    span: 'md:col-span-1 md:row-span-1',
    color: 'bg-green-500/10 text-green-500'
  },
  {
    title: 'Global Delivery',
    desc: 'Edge-optimized infrastructure for lightning fast responses anywhere.',
    icon: Globe,
    span: 'md:col-span-1 md:row-span-2',
    color: 'bg-purple-500/10 text-purple-500'
  },
  {
    title: 'Layered Creation',
    desc: 'Stack multiple AI agents and models for complex workflows.',
    icon: Layers,
    span: 'md:col-span-1 md:row-span-1',
    color: 'bg-pink-500/10 text-pink-500'
  },
  {
    title: 'Visionary Insights',
    desc: 'Advanced computer vision and pattern recognition.',
    icon: Eye,
    span: 'md:col-span-1 md:row-span-1',
    color: 'bg-cyan-500/10 text-cyan-500'
  }
];

export default function Features() {
  return (
    <section className="py-20 px-6 max-w-7xl mx-auto">
      <div className="text-center mb-16">
        <h2 className="text-4xl md:text-6xl font-bold mb-4 font-display">Engineered for Excellence.</h2>
        <p className="text-nebula-muted max-w-2xl mx-auto">
          We've distilled the complexity of advanced intelligence into 
          powerful tools that work exactly how you think.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-4 md:grid-rows-3 gap-6">
        {features.map((f, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.1 }}
            viewport={{ once: true }}
            className={`glass p-8 rounded-[40px] flex flex-col group hover:border-nebula-accent/50 transition-colors ${f.span}`}
          >
            <div className={`w-12 h-12 rounded-2xl ${f.color} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform`}>
              <f.icon className="w-6 h-6" />
            </div>
            <h3 className="text-xl font-bold mb-3">{f.title}</h3>
            <p className="text-nebula-muted text-sm leading-relaxed">{f.desc}</p>
            
            {i === 0 && (
              <div className="mt-8 relative h-48 rounded-2xl overflow-hidden border border-white/5">
                <img 
                  src="https://picsum.photos/seed/process/800/400" 
                  alt="Neural Map" 
                  className="w-full h-full object-cover grayscale opacity-30 group-hover:grayscale-0 group-hover:opacity-60 transition-all duration-700"
                  referrerPolicy="no-referrer"
                />
              </div>
            )}
          </motion.div>
        ))}
      </div>
    </section>
  );
}

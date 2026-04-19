import { Sparkles, Twitter, Github, Linkedin, ArrowUpRight } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="py-20 px-6 border-t border-white/5">
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-4 gap-12 mb-20">
          <div className="col-span-2">
            <div className="flex items-center gap-2 mb-6">
              <Sparkles className="w-8 h-8 text-nebula-accent" />
              <span className="font-display font-medium text-2xl tracking-tight">Nebula</span>
            </div>
            <p className="text-nebula-muted max-w-sm text-lg leading-relaxed mb-8">
              Redefining the boundary between human creativity and autonomous intelligence.
            </p>
            <div className="flex gap-4">
              {[Twitter, Github, Linkedin].map((Icon, i) => (
                <a key={i} href="#" className="w-10 h-10 rounded-full glass flex items-center justify-center hover:bg-nebula-accent hover:text-white transition-all">
                  <Icon className="w-5 h-5" />
                </a>
              ))}
            </div>
          </div>

          <div>
            <h4 className="font-bold mb-6 uppercase text-xs tracking-widest text-nebula-muted">Platform</h4>
            <ul className="space-y-4 font-medium">
              <li><a href="#" className="hover:text-nebula-accent transition-colors">Features</a></li>
              <li><a href="#" className="hover:text-nebula-accent transition-colors">Showcase</a></li>
              <li><a href="#" className="hover:text-nebula-accent transition-colors flex items-center gap-1">API <ArrowUpRight className="w-3 h-3" /></a></li>
              <li><a href="#" className="hover:text-nebula-accent transition-colors">Enterprise</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold mb-6 uppercase text-xs tracking-widest text-nebula-muted">Company</h4>
            <ul className="space-y-4 font-medium">
              <li><a href="#" className="hover:text-nebula-accent transition-colors">About Us</a></li>
              <li><a href="#" className="hover:text-nebula-accent transition-colors">Carrers</a></li>
              <li><a href="#" className="hover:text-nebula-accent transition-colors">Journal</a></li>
              <li><a href="#" className="hover:text-nebula-accent transition-colors">Privacy</a></li>
            </ul>
          </div>
        </div>

        <div className="flex flex-col md:flex-row justify-between items-center gap-6 pt-12 border-t border-white/5 text-sm text-nebula-muted font-medium">
          <p>© {new Date().getFullYear()} Nebula Intelligence. All rights reserved.</p>
          <div className="flex gap-8">
            <a href="#" className="hover:text-nebula-white">Terms of Service</a>
            <a href="#" className="hover:text-nebula-white">Privacy Policy</a>
            <a href="#" className="hover:text-nebula-white">Cookie Settings</a>
          </div>
        </div>
      </div>
    </footer>
  );
}

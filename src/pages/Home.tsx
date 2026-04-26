import React from 'react';
import { motion } from 'motion/react';
import { 
  ArrowRight, 
  Map, 
  Users, 
  ClipboardCheck, 
  Activity, 
  Target, 
  ShieldCheck,
  Search,
  Zap
} from 'lucide-react';
import { cn } from '../lib/utils';
import { Link } from 'react-router-dom';

const stats = [
  { label: 'Communities Served', value: '1,200+' },
  { label: 'Volunteers Matched', value: '45,000+' },
  { label: 'Needs Resolved', value: '89%' },
  { label: 'Impact Data Points', value: '2.4M' },
];

const features = [
  {
    title: "Intelligence-First Matching",
    description: "Our proprietary algorithm considers skills, proximity, availability, and past impact for perfect volunteer-to-task alignment.",
    icon: Target,
    color: "bg-blue-500/10 text-blue-600"
  },
  {
    title: "Field Data Collection",
    description: "Convert scattered paper surveys and field reports into organized, actionable intelligence using our unified data engine.",
    icon: ClipboardCheck,
    color: "bg-emerald-500/10 text-emerald-600"
  },
  {
    title: "Impact Heatmaps",
    description: "Visualize urgent community issues on interactive maps. Identify priority clusters before they become crises.",
    icon: Map,
    color: "bg-amber-500/10 text-amber-600"
  }
];

export default function Home() {
  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="relative min-h-[90vh] flex items-center justify-center pt-20 overflow-hidden">
        {/* Background Decorative Elements */}
        <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
          <div className="absolute top-[-10%] right-[-5%] w-[600px] h-[600px] rounded-full bg-brand-green-900/5 blur-[120px]" />
          <div className="absolute bottom-[-10%] left-[-5%] w-[500px] h-[500px] rounded-full bg-brand-gold/5 blur-[120px]" />
        </div>

        <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center relative z-10">
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-brand-green-900/10 text-brand-green-900 text-xs font-bold uppercase tracking-widest mb-6">
              <Zap size={14} className="fill-current" />
              <span>The Next Generation of Civic Tech</span>
            </div>
            
            <h1 className="font-serif text-6xl md:text-7xl lg:text-8xl leading-[0.9] text-brand-green-900 mb-8 font-bold tracking-tighter">
              Bridging <span className="italic text-brand-gold font-normal">Service</span> <br />
              with <span className="underline decoration-brand-gold/30 underline-offset-8">Intelligence.</span>
            </h1>
            
            <p className="text-xl text-brand-ink/70 max-w-lg mb-10 leading-relaxed font-medium">
              SevaBridge transforms raw community data into targeted social impact. We empower NGOs to identify urgent needs and match them with the perfect volunteers, instantly.
            </p>
            
            <div className="flex flex-wrap gap-4">
              <Link 
                to="/dashboard" 
                className="px-8 py-4 rounded-full premium-gradient text-white font-bold text-lg shadow-xl hover:shadow-brand-green-900/20 hover:-translate-y-1 transition-all flex items-center gap-2 group"
              >
                <span>Explore the Platform</span>
                <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
              </Link>
              <Link 
                to="/about" 
                className="px-8 py-4 rounded-full border-2 border-brand-green-900/20 text-brand-green-900 font-bold text-lg hover:bg-brand-green-900/5 transition-all text-center"
              >
                View Case Studies
              </Link>
            </div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.2 }}
            className="relative"
          >
            <div className="relative z-10 transform lg:translate-x-10 rounded-2xl overflow-hidden glass-card shadow-2xl p-2 border border-white/50">
               <img 
                 src="https://images.unsplash.com/photo-1593113598332-cd288d6444f1?auto=format&fit=crop&q=80&w=2070" 
                 alt="Community Impact" 
                 className="rounded-xl w-full h-auto object-cover aspect-[4/3] grayscale-[30%] hover:grayscale-0 transition-all duration-700"
               />
               
               {/* Floating Dashboard Elements */}
               <motion.div 
                 animate={{ y: [0, -10, 0] }}
                 transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                 className="absolute -top-6 -right-6 p-4 rounded-xl bg-white shadow-xl border border-brand-ink/5 flex items-center gap-3"
               >
                 <div className="p-2 rounded-lg bg-emerald-500/10 text-emerald-600">
                   <Activity size={20} />
                 </div>
                 <div>
                   <div className="text-[10px] uppercase font-bold text-brand-ink/50 tracking-wider">Live Urgency</div>
                   <div className="text-lg font-bold text-brand-green-900 leading-none">89% Resolved</div>
                 </div>
               </motion.div>

               <motion.div 
                 animate={{ y: [0, 10, 0] }}
                 transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
                 className="absolute -bottom-6 -left-6 p-4 rounded-xl bg-brand-green-900 shadow-xl border border-white/10 flex items-center gap-3 text-white"
               >
                 <div className="p-2 rounded-lg bg-white/20">
                   <Users size={20} />
                 </div>
                 <div>
                   <div className="text-[10px] uppercase font-bold text-white/50 tracking-wider">New Volunteers</div>
                   <div className="text-lg font-bold leading-none">+124 This Week</div>
                 </div>
               </motion.div>
            </div>
            
            {/* Background Shape */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] border-2 border-brand-gold/10 rounded-full pointer-events-none" />
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[130%] h-[130%] border border-brand-green-900/5 rounded-full pointer-events-none" />
          </motion.div>
        </div>
      </section>

      {/* Stats Bar */}
      <section className="bg-brand-green-900 py-16 px-6">
        <div className="max-w-7xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-12 text-center">
          {stats.map((stat, idx) => (
            <div key={idx} className="flex flex-col gap-1">
              <span className="text-brand-gold text-4xl font-bold tracking-tighter">{stat.value}</span>
              <span className="text-white/60 text-sm font-medium uppercase tracking-widest">{stat.label}</span>
            </div>
          ))}
        </div>
      </section>

      {/* Features Section */}
      <section className="py-24 px-6 relative overflow-hidden">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-20">
            <h2 className="text-4xl md:text-5xl font-serif font-bold text-brand-green-900 mb-6">Built for Radical Impact</h2>
            <p className="text-brand-ink/60 max-w-2xl mx-auto text-lg">
              Generic NGO tools aren't enough. SevaBridge provides the technical backbone for organizations that demand precision and scalability.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {features.map((feature, idx) => (
              <motion.div 
                key={idx}
                whileHover={{ y: -8 }}
                className="p-10 rounded-2xl bg-white border border-brand-ink/5 shadow-sm hover:shadow-xl transition-all"
              >
                <div className={cn("w-14 h-14 rounded-xl flex items-center justify-center mb-8", feature.color)}>
                  <feature.icon size={28} />
                </div>
                <h3 className="text-2xl font-serif font-bold text-brand-green-900 mb-4">{feature.title}</h3>
                <p className="text-brand-ink/60 leading-relaxed font-medium">
                  {feature.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Mission Section / Social Proof */}
      <section className="py-24 bg-brand-gold/5 relative">
        <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row gap-20 items-center">
          <div className="flex-1">
            <div className="font-serif text-3xl italic text-brand-gold mb-4">"The platform we've been waiting for."</div>
            <p className="text-2xl md:text-3xl text-brand-green-900 font-serif font-bold leading-tight mb-8">
              "Before SevaBridge, we were losing weeks in manual data entry. Now, our matching happens in real-time, and our field reach has doubled."
            </p>
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 rounded-full bg-brand-green-900/10 overflow-hidden">
                <img src="https://i.pravatar.cc/150?u=ngo1" alt="Avatar" />
              </div>
              <div>
                <div className="font-bold text-brand-green-900">Dr. Sarah Mendez</div>
                <div className="text-sm text-brand-ink/60">Executive Director, Global Impact Group</div>
              </div>
            </div>
          </div>
          <div className="flex-1 grid grid-cols-2 gap-4">
            <div className="space-y-4">
              <div className="h-40 rounded-2xl bg-brand-green-900 p-8 flex items-center justify-center">
                 <ShieldCheck className="text-white w-12 h-12 opacity-50" />
              </div>
              <div className="h-56 rounded-2xl bg-brand-gold p-8 flex items-end">
                <div className="text-brand-green-900 font-serif text-5xl font-bold">98%</div>
              </div>
            </div>
            <div className="space-y-4 pt-12">
              <div className="h-56 rounded-2xl bg-white border border-brand-ink/10 p-8 flex items-center justify-center">
                 <Users className="text-brand-green-900 w-12 h-12 opacity-20" />
              </div>
              <div className="h-40 rounded-2xl bg-brand-paper border border-brand-ink/10 p-8">
                 <div className="w-12 h-2 rounded-full bg-brand-gold/30 mb-2" />
                 <div className="w-8 h-2 rounded-full bg-brand-gold/30" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 px-6">
        <div className="max-w-4xl mx-auto rounded-3xl premium-gradient p-12 md:p-20 text-center text-white relative overflow-hidden shadow-2xl">
          <div className="absolute top-0 right-0 w-64 h-64 bg-white/5 rounded-full -translate-y-1/2 translate-x-1/2 blur-3xl" />
          <div className="relative z-10">
            <h2 className="text-4xl md:text-6xl font-serif font-bold mb-8 tracking-tight">Ready to Bridge the <br />Gap in Your Community?</h2>
            <p className="text-white/80 text-xl mb-12 max-w-xl mx-auto">
              Join 500+ NGOs who are scaling their impact with data-driven volunteer management.
            </p>
            <div className="flex flex-wrap justify-center gap-6">
              <Link to="/auth" className="px-10 py-5 rounded-full bg-white text-brand-green-900 font-bold text-xl hover:bg-brand-paper transition-all">
                Get Started for Free
              </Link>
              <Link to="/contact" className="px-10 py-5 rounded-full border border-white/30 text-white font-bold text-xl hover:bg-white/10 transition-all">
                Schedule a Demo
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

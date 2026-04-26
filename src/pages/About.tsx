import React from 'react';
import { motion } from 'motion/react';
import { ArrowLeftRight, Target, Heart, Shield, Award, Users, Globe } from 'lucide-react';
import { cn } from '../lib/utils';

const values = [
  { title: 'Radical Transparency', icon: Shield, desc: 'We believe that social impact depends on verifiable, data-driven trust.' },
  { title: 'Community First', icon: Heart, desc: 'All tools are designed to amplify local voices and empower grassroots leaders.' },
  { title: 'Strategic Intelligence', icon: Target, desc: 'Impact is not an accident. We use logic and data to match resources where they matter most.' },
];

export default function About() {
  return (
    <div className="pt-24 pb-12 bg-brand-paper">
      {/* Editorial Header */}
      <section className="px-6 py-20 bg-brand-green-900 text-white relative overflow-hidden">
        <div className="absolute inset-0 z-0 opacity-10 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')]" />
        <div className="max-w-4xl mx-auto relative z-10 text-center">
          <motion.div 
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            className="w-20 h-20 rounded-full bg-white mx-auto mb-10 flex items-center justify-center text-brand-green-900 shadow-2xl"
          >
            <ArrowLeftRight size={40} />
          </motion.div>
          <h1 className="text-5xl md:text-7xl font-serif font-bold mb-8 tracking-tighter">The SevaBridge <span className="italic font-normal text-brand-gold">Story.</span></h1>
          <p className="text-xl md:text-2xl text-white/70 leading-relaxed font-medium">
            Born from the field, built for the future. We are redefining how NGOs and community groups orchestrate human kindness through data intelligence.
          </p>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-24 px-6 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-20 items-center">
          <div className="p-2 border border-brand-ink/5 rounded-3xl bg-white shadow-xl">
             <img 
               src="https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?auto=format&fit=crop&q=80&w=2070" 
               alt="NGO Field Work" 
               className="rounded-2xl"
             />
          </div>
          <div>
            <div className="text-brand-gold font-bold uppercase tracking-widest text-xs mb-4">Our Mission</div>
            <h2 className="text-4xl md:text-5xl font-serif font-bold text-brand-green-900 mb-8">From Manual Entries to <span className="italic text-brand-gold font-normal">Real-Time</span> Magic.</h2>
            <div className="space-y-6 text-brand-ink/70 text-lg font-medium leading-relaxed">
              <p>
                For too long, community impact was hindered by scattered data. Paper surveys gathered dust, urgent needs went unnoticed, and volunteers roles were often misaligned. 
              </p>
              <p>
                SevaBridge was founded on a simple premise: If we can optimize global shipping and high-frequency trading with data, we can—and must—do the same for human service.
              </p>
              <p>
                Our platform provides the necessary bridge between raw community intelligence and the dedicated volunteers who can turn that intelligence into transformation.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-24 px-6 bg-brand-ink/5 overflow-hidden">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-20">
            <h2 className="text-4xl md:text-5xl font-serif font-bold text-brand-green-900 mb-6">Our Core Philosophy</h2>
            <p className="text-brand-ink/60 max-w-2xl mx-auto font-medium">
              We don't just build software; we build systems of trust that sustain long-term community resilience.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {values.map((v, i) => (
              <motion.div 
                key={i}
                whileHover={{ y: -8 }}
                className="p-12 rounded-3xl bg-white border border-brand-ink/5 shadow-sm hover:shadow-xl transition-all"
              >
                <div className="w-16 h-16 rounded-2xl bg-brand-green-900/5 text-brand-green-900 flex items-center justify-center mb-8">
                  <v.icon size={32} />
                </div>
                <h3 className="text-2xl font-serif font-bold text-brand-green-900 mb-4">{v.title}</h3>
                <p className="text-brand-ink/60 leading-relaxed font-medium">
                  {v.desc}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Team / Global Impact */}
      <section className="py-24 px-6 max-w-7xl mx-auto text-center">
        <h2 className="text-4xl font-serif font-bold text-brand-green-900 mb-16">Global Network, Local <span className="italic font-normal text-brand-gold">Heart.</span></h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-12">
            {[
               { icon: Globe, label: 'Countries Active', value: '42' },
               { icon: Users, label: 'NGO Partners', value: '500+' },
               { icon: Award, label: 'Awards Won', value: '12' },
               { icon: ArrowLeftRight, label: 'Bridges Built', value: '8,000+' },
            ].map((s, i) => (
              <div key={i} className="flex flex-col items-center">
                 <s.icon className="text-brand-gold mb-4" size={32} />
                 <div className="text-3xl font-bold text-brand-green-900 mb-1">{s.value}</div>
                 <div className="text-[10px] uppercase font-bold text-brand-ink/40 tracking-widest">{s.label}</div>
              </div>
            ))}
        </div>
      </section>
    </div>
  );
}

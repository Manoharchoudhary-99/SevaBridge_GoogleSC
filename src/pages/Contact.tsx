import React from 'react';
import { motion } from 'motion/react';
import { Mail, Phone, MapPin, Send, MessageCircle } from 'lucide-react';

export default function Contact() {
  return (
    <div className="pt-24 pb-12 bg-brand-paper">
      <section className="px-6 py-20 bg-brand-gold text-brand-green-900 relative overflow-hidden">
        <div className="max-w-4xl mx-auto relative z-10 text-center">
          <h1 className="text-5xl md:text-7xl font-serif font-bold mb-8 tracking-tighter">Get in <span className="italic font-normal">Touch.</span></h1>
          <p className="text-xl md:text-2xl text-brand-green-900/70 leading-relaxed font-medium">
            Whether you're an NGO looking to scale or a volunteer ready to serve, we're here to bridge the gap.
          </p>
        </div>
      </section>

      <section className="py-24 px-6 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20">
          <div>
            <h2 className="text-4xl font-serif font-bold text-brand-green-900 mb-10">Contact Information</h2>
            <div className="space-y-8">
              <div className="flex items-start gap-6">
                <div className="p-4 rounded-2xl bg-brand-green-900/5 text-brand-green-900">
                  <Mail size={24} />
                </div>
                <div>
                  <div className="text-sm font-bold text-brand-ink/40 uppercase tracking-widest mb-1">Email Us</div>
                  <div className="text-xl font-bold text-brand-green-900 font-serif">support@sevabridge.org</div>
                </div>
              </div>

              <div className="flex items-start gap-6">
                <div className="p-4 rounded-2xl bg-brand-green-900/5 text-brand-green-900">
                  <Phone size={24} />
                </div>
                <div>
                  <div className="text-sm font-bold text-brand-ink/40 uppercase tracking-widest mb-1">Call Us</div>
                  <div className="text-xl font-bold text-brand-green-900 font-serif">+1 (800) SEVA-BRG</div>
                </div>
              </div>

              <div className="flex items-start gap-6">
                <div className="p-4 rounded-2xl bg-brand-green-900/5 text-brand-green-900">
                  <MapPin size={24} />
                </div>
                <div>
                  <div className="text-sm font-bold text-brand-ink/40 uppercase tracking-widest mb-1">Visit Us</div>
                  <div className="text-xl font-bold text-brand-green-900 font-serif whitespace-pre-line">
                    Civic Tech Plaza, 4th Floor{"\n"}
                    San Francisco, CA 94103
                  </div>
                </div>
              </div>
            </div>

            <div className="mt-16 p-8 rounded-3xl premium-gradient text-white">
              <h3 className="text-2xl font-serif font-bold mb-4">Urgent Field Support?</h3>
              <p className="text-white/70 mb-6 font-medium">Our emergency coordination team is available 24/7 for field coordinators.</p>
              <button className="flex items-center gap-2 px-6 py-3 rounded-xl bg-white text-brand-green-900 font-bold hover:scale-105 transition-transform">
                <MessageCircle size={20} />
                <span>Live WhatsApp Support</span>
              </button>
            </div>
          </div>

          <div className="p-10 rounded-3xl bg-white border border-brand-ink/5 shadow-2xl relative">
            <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-[10px] uppercase font-bold text-brand-ink/40 tracking-widest">Full Name</label>
                  <input 
                    type="text" 
                    placeholder="John Doe"
                    className="w-full px-5 py-4 rounded-xl bg-brand-ink/5 border border-transparent focus:bg-white focus:border-brand-gold/30 focus:outline-none transition-all font-medium"
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-[10px] uppercase font-bold text-brand-ink/40 tracking-widest">Email Address</label>
                  <input 
                    type="email" 
                    placeholder="john@example.com"
                    className="w-full px-5 py-4 rounded-xl bg-brand-ink/5 border border-transparent focus:bg-white focus:border-brand-gold/30 focus:outline-none transition-all font-medium"
                  />
                </div>
              </div>

              <div className="space-y-2">
                <label className="text-[10px] uppercase font-bold text-brand-ink/40 tracking-widest">Subject</label>
                <select className="w-full px-5 py-4 rounded-xl bg-brand-ink/5 border border-transparent focus:bg-white focus:border-brand-gold/30 focus:outline-none transition-all font-medium">
                  <option>NGO Partnership</option>
                  <option>Volunteer Inquiry</option>
                  <option>Sponsorship</option>
                  <option>Technical Support</option>
                  <option>Other</option>
                </select>
              </div>

              <div className="space-y-2">
                <label className="text-[10px] uppercase font-bold text-brand-ink/40 tracking-widest">Message</label>
                <textarea 
                  rows={5}
                  placeholder="How can we help your community?"
                  className="w-full px-5 py-4 rounded-xl bg-brand-ink/5 border border-transparent focus:bg-white focus:border-brand-gold/30 focus:outline-none transition-all font-medium resize-none"
                />
              </div>

              <button className="w-full py-4 rounded-xl premium-gradient text-white font-bold text-lg shadow-xl hover:-translate-y-1 transition-all flex items-center justify-center gap-2">
                <span>Send Message</span>
                <Send size={20} />
              </button>
            </form>
          </div>
        </div>
      </section>
    </div>
  );
}

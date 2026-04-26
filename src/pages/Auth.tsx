import React, { useState } from 'react';
import { motion } from 'motion/react';
import { ArrowLeftRight, Mail, Lock, ArrowRight, Github, Chrome } from 'lucide-react';
import { cn } from '../lib/utils';
import { Link } from 'react-router-dom';

export default function Auth() {
  const [isLogin, setIsLogin] = useState(true);

  return (
    <div className="min-h-screen flex">
      {/* Visual Side */}
      <div className="hidden lg:flex flex-col justify-between w-1/2 premium-gradient p-16 text-white relative overflow-hidden">
        <div className="absolute inset-0 z-0 opacity-10 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')]" />
        <div className="relative z-10">
          <Link to="/" className="flex items-center gap-2 mb-20 group">
            <div className="w-12 h-12 rounded-full bg-white flex items-center justify-center text-brand-green-900 shadow-xl group-hover:scale-105 transition-transform">
              <ArrowLeftRight size={28} />
            </div>
            <span className="font-serif text-3xl font-bold tracking-tight text-white">SevaBridge</span>
          </Link>
          
          <div className="max-w-md">
            <h2 className="text-5xl font-serif font-bold mb-8 leading-tight">Scale your impact with confidence.</h2>
            <p className="text-white/70 text-lg leading-relaxed font-medium">
              Join a global network of NGOs using data intelligence to transform communities. One bridge at a time.
            </p>
          </div>
        </div>

        <div className="relative z-10 pt-20 border-t border-white/10 flex items-center justify-between">
           <div className="text-sm font-medium text-white/50">Used by leading humanitarian groups worldwide.</div>
           <div className="flex gap-4 opacity-50 grayscale brightness-200">
             {/* Mock Partner Logos */}
             <div className="w-8 h-8 rounded bg-white" />
             <div className="w-8 h-8 rounded bg-white" />
             <div className="w-8 h-8 rounded bg-white" />
           </div>
        </div>
      </div>

      {/* Form Side */}
      <div className="flex-1 flex items-center justify-center p-8 bg-brand-paper">
        <div className="w-full max-w-md">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="mb-10 text-center lg:text-left"
          >
            <h1 className="text-4xl font-serif font-bold text-brand-green-900 mb-3">
              {isLogin ? 'Welcome Back' : 'Join SevaBridge'}
            </h1>
            <p className="text-brand-ink/50 font-medium">
              {isLogin ? 'Continue your mission with smart intelligence.' : 'Start your journey towards data-driven impact today.'}
            </p>
          </motion.div>

          <div className="space-y-6">
             <div className="grid grid-cols-2 gap-4">
               <button className="flex items-center justify-center gap-2 py-3 px-4 rounded-xl border border-brand-ink/10 bg-white hover:bg-brand-ink/5 transition-all font-bold text-sm">
                 <Chrome size={18} />
                 <span>Google</span>
               </button>
               <button className="flex items-center justify-center gap-2 py-3 px-4 rounded-xl border border-brand-ink/10 bg-white hover:bg-brand-ink/5 transition-all font-bold text-sm">
                 <Github size={18} />
                 <span>GitHub</span>
               </button>
             </div>

             <div className="relative flex items-center justify-center py-2">
               <div className="absolute inset-0 flex items-center"><div className="w-full border-t border-brand-ink/10"></div></div>
               <span className="relative z-10 bg-brand-paper px-4 text-[10px] uppercase font-bold text-brand-ink/30 tracking-widest">Or Continue with Email</span>
             </div>

             <form className="space-y-4" onSubmit={e => e.preventDefault()}>
               {!isLogin && (
                 <div>
                   <label className="block text-xs font-bold text-brand-ink/60 uppercase tracking-widest mb-2">Organization Name</label>
                   <input 
                     type="text" 
                     className="w-full px-5 py-4 rounded-xl bg-white border border-brand-ink/10 focus:outline-none focus:ring-2 focus:ring-brand-gold/20 transition-all font-medium" 
                     placeholder="e.g. Global Reach NGO"
                   />
                 </div>
               )}
               <div>
                 <label className="block text-xs font-bold text-brand-ink/60 uppercase tracking-widest mb-2">Email Address</label>
                 <div className="relative">
                   <Mail className="absolute left-4 top-1/2 -translate-y-1/2 text-brand-ink/30" size={20} />
                   <input 
                     type="email" 
                     className="w-full pl-12 pr-5 py-4 rounded-xl bg-white border border-brand-ink/10 focus:outline-none focus:ring-2 focus:ring-brand-gold/20 transition-all font-medium" 
                     placeholder="name@organization.org"
                   />
                 </div>
               </div>
               <div>
                 <label className="block text-xs font-bold text-brand-ink/60 uppercase tracking-widest mb-2">Password</label>
                 <div className="relative">
                   <Lock className="absolute left-4 top-1/2 -translate-y-1/2 text-brand-ink/30" size={20} />
                   <input 
                     type="password" 
                     className="w-full pl-12 pr-5 py-4 rounded-xl bg-white border border-brand-ink/10 focus:outline-none focus:ring-2 focus:ring-brand-gold/20 transition-all font-medium" 
                     placeholder="••••••••"
                   />
                 </div>
               </div>
               
               <button className="w-full py-4 rounded-xl premium-gradient text-white font-bold text-lg shadow-lg shadow-brand-green-900/20 hover:-translate-y-0.5 transition-all flex items-center justify-center gap-2">
                 <span>{isLogin ? 'Sign In to Dashboard' : 'Create Admin Account'}</span>
                 <ArrowRight size={20} />
               </button>
             </form>

             <div className="text-center pt-6">
                <button 
                  onClick={() => setIsLogin(!isLogin)}
                  className="text-sm font-bold text-brand-green-900 hover:text-brand-gold transition-colors"
                >
                  {isLogin ? "Don't have an account? Sign Up" : "Already have an account? Sign In"}
                </button>
             </div>
          </div>
        </div>
      </div>
    </div>
  );
}

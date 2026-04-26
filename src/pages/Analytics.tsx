import React from 'react';
import { motion } from 'motion/react';
import { 
  BarChart, 
  Bar, 
  XAxis, 
  YAxis, 
  CartesianGrid, 
  Tooltip, 
  ResponsiveContainer, 
  PieChart, 
  Pie, 
  Cell,
  AreaChart,
  Area
} from 'recharts';
import { Download, Share2, Calendar, Filter, Users, TrendingUp, Handshake, Heart } from 'lucide-react';
import { cn } from '../lib/utils';

const impactData = [
  { month: 'Jan', resolved: 45, reported: 55 },
  { month: 'Feb', resolved: 52, reported: 48 },
  { month: 'Mar', resolved: 68, reported: 72 },
  { month: 'Apr', resolved: 85, reported: 90 },
  { month: 'May', resolved: 110, reported: 105 },
  { month: 'Jun', resolved: 145, reported: 130 },
];

const categoryData = [
  { name: 'Health', value: 400, color: '#064e3b' },
  { name: 'Education', value: 300, color: '#B45309' },
  { name: 'Infrastructure', value: 200, color: '#065f46' },
  { name: 'Sanitation', value: 150, color: '#fbbf24' },
];

export default function Analytics() {
  return (
    <div className="pt-24 pb-12 px-6 bg-brand-paper min-h-screen">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div>
            <h1 className="text-4xl font-serif font-bold text-brand-green-900 mb-2">Impact Analytics</h1>
            <p className="text-brand-ink/60 font-medium">Measuring quantitative and qualitative transformation across sectors.</p>
          </div>
          <div className="flex gap-3">
            <button className="px-5 py-2.5 rounded-xl border border-brand-ink/10 bg-white text-brand-ink font-semibold flex items-center gap-2 hover:bg-brand-ink/5 transition-all">
              <Download size={18} />
              <span>Export PDF</span>
            </button>
            <button className="px-5 py-2.5 rounded-xl premium-gradient text-white font-semibold flex items-center gap-2 shadow-lg shadow-brand-green-900/20 hover:-translate-y-0.5 transition-all">
              <Share2 size={18} />
              <span>Share Impact</span>
            </button>
          </div>
        </div>

        {/* Global Stats */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-12">
           {[
             { label: 'Total Volunteers', value: '4,521', icon: Users, change: '+12%' },
             { label: 'Interventions', value: '12,842', icon: Handshake, change: '+45%' },
             { label: 'Lives Impacted', value: '250k+', icon: Heart, change: '+18%' },
             { label: 'Efficiency Rate', value: '94%', icon: TrendingUp, change: '+5%' },
           ].map((stat, i) => (
             <motion.div 
               key={i}
               initial={{ opacity: 0, scale: 0.95 }}
               animate={{ opacity: 1, scale: 1 }}
               transition={{ delay: i * 0.1 }}
               className="p-8 rounded-2xl bg-white border border-brand-ink/5 shadow-sm"
             >
               <div className="flex items-center gap-4 mb-4">
                 <div className="p-3 rounded-xl bg-brand-green-900/5 text-brand-green-900">
                   <stat.icon size={24} />
                 </div>
                 <div className="text-xs font-bold text-brand-ink/40 uppercase tracking-widest">{stat.label}</div>
               </div>
               <div className="text-4xl font-bold text-brand-green-900 mb-2">{stat.value}</div>
               <div className="text-xs font-bold text-emerald-600">{stat.change} vs last year</div>
             </motion.div>
           ))}
        </div>

        {/* Chart Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
           {/* Growth Chart */}
           <div className="p-8 rounded-3xl bg-white border border-brand-ink/5 shadow-sm">
             <div className="flex items-center justify-between mb-8">
               <h3 className="text-xl font-serif font-bold text-brand-green-900">Intervention Growth</h3>
               <div className="flex items-center gap-2 text-xs font-bold text-brand-ink/40">
                 <span className="flex items-center gap-1"><div className="w-2 h-2 rounded-full bg-brand-green-900" /> Resolved</span>
                 <span className="flex items-center gap-1"><div className="w-2 h-2 rounded-full bg-brand-ink/20" /> Reported</span>
               </div>
             </div>
             <div className="h-[300px]">
               <ResponsiveContainer width="100%" height="100%">
                 <AreaChart data={impactData}>
                   <defs>
                     <linearGradient id="colorResolved" x1="0" y1="0" x2="0" y2="1">
                       <stop offset="5%" stopColor="#064e3b" stopOpacity={0.8}/>
                       <stop offset="95%" stopColor="#064e3b" stopOpacity={0}/>
                     </linearGradient>
                   </defs>
                   <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#f0f0f0" />
                   <XAxis dataKey="month" axisLine={false} tickLine={false} tick={{fontSize: 12, fill: '#9ca3af'}} dy={10} />
                   <YAxis axisLine={false} tickLine={false} tick={{fontSize: 12, fill: '#9ca3af'}} />
                   <Tooltip />
                   <Area type="monotone" dataKey="resolved" stroke="#064e3b" fillOpacity={1} fill="url(#colorResolved)" strokeWidth={3} />
                   <Area type="monotone" dataKey="reported" stroke="#d1d5db" fill="transparent" strokeWidth={2} strokeDasharray="5 5" />
                 </AreaChart>
               </ResponsiveContainer>
             </div>
           </div>

           {/* Distribution Chart */}
           <div className="p-8 rounded-3xl bg-white border border-brand-ink/5 shadow-sm">
             <h3 className="text-xl font-serif font-bold text-brand-green-900 mb-8">Needs Distribution</h3>
             <div className="flex items-center gap-12">
               <div className="flex-1 h-[300px]">
                 <ResponsiveContainer width="100%" height="100%">
                    <PieChart>
                      <Pie
                        data={categoryData}
                        cx="50%"
                        cy="50%"
                        innerRadius={60}
                        outerRadius={100}
                        paddingAngle={5}
                        dataKey="value"
                      >
                        {categoryData.map((entry, index) => (
                          <Cell key={`cell-${index}`} fill={entry.color} />
                        ))}
                      </Pie>
                      <Tooltip />
                    </PieChart>
                 </ResponsiveContainer>
               </div>
               <div className="space-y-4">
                 {categoryData.map((cat, i) => (
                   <div key={i} className="flex items-center gap-3">
                     <div className="w-3 h-3 rounded-full" style={{ backgroundColor: cat.color }} />
                     <div>
                       <div className="text-xs font-bold text-brand-ink/40 uppercase tracking-widest">{cat.name}</div>
                       <div className="text-lg font-bold text-brand-green-900">{cat.value} Cases</div>
                     </div>
                   </div>
                 ))}
               </div>
             </div>
           </div>
        </div>

        {/* Recent Impacts Feed */}
        <div className="p-8 rounded-3xl bg-brand-green-900 text-white shadow-2xl relative overflow-hidden">
           <div className="absolute top-0 right-0 w-96 h-96 bg-brand-gold/10 rounded-full blur-[100px] pointer-events-none" />
           <div className="relative z-10">
             <div className="flex items-center justify-between mb-12">
               <h3 className="text-3xl font-serif font-bold">Latest Transformations</h3>
               <button className="text-brand-gold font-bold text-sm hover:underline">View Global Map</button>
             </div>
             
             <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
               {[
                 { location: 'South Ridge', title: 'Solar Grid Online', body: 'Power restored to 40 households within 48 hours of report.', tag: 'Infrastructure' },
                 { location: 'West Village', title: 'Water Filtration Success', body: 'Community well upgraded. 85% reduction in local waterborne reports.', tag: 'Health' },
                 { location: 'East Bank', title: 'Vocational Training', body: '15 youth completed the first digital literacy module.', tag: 'Education' },
               ].map((item, i) => (
                 <div key={i} className="p-6 rounded-2xl bg-white/5 border border-white/10 hover:bg-white/10 transition-all cursor-default">
                    <div className="text-brand-gold font-serif italic mb-2">{item.location}</div>
                    <h4 className="text-xl font-bold mb-3">{item.title}</h4>
                    <p className="text-white/60 text-sm leading-relaxed mb-4">{item.body}</p>
                    <span className="text-[10px] font-bold uppercase tracking-widest px-2 py-1 rounded bg-white/10">{item.tag}</span>
                 </div>
               ))}
             </div>
           </div>
        </div>
      </div>
    </div>
  );
}

import React from 'react';
import { motion } from 'motion/react';
import { 
  AlertCircle, 
  CheckCircle2, 
  Clock, 
  MapPin, 
  Filter, 
  Plus, 
  ArrowUpRight,
  TrendingUp,
  Map as MapIcon,
  Search
} from 'lucide-react';
import { cn } from '../lib/utils';
import { UrgencyLevel, NeedCategory, Status } from '../types';

const mockNeeds = [
  {
    id: '1',
    title: 'Clean Water Initiative',
    location: 'North Sector, Area 4',
    urgency: UrgencyLevel.CRITICAL,
    category: NeedCategory.SANITATION,
    status: Status.PENDING,
    priorityScore: 92,
    collectedAt: '2026-04-25T10:00:00Z'
  },
  {
    id: '2',
    title: 'Textbook Distribution',
    location: 'West Village',
    urgency: UrgencyLevel.HIGH,
    category: NeedCategory.EDUCATION,
    status: Status.ASSIGNED,
    priorityScore: 84,
    collectedAt: '2026-04-24T14:30:00Z'
  },
  {
    id: '3',
    title: 'Emergency Medical Camp',
    location: 'Central Hill',
    urgency: UrgencyLevel.CRITICAL,
    category: NeedCategory.HEALTH,
    status: Status.PENDING,
    priorityScore: 98,
    collectedAt: '2026-04-26T08:00:00Z'
  },
  {
    id: '4',
    title: 'Solar Panel Maintenance',
    location: 'South Ridge',
    urgency: UrgencyLevel.MEDIUM,
    category: NeedCategory.INFRASTRUCTURE,
    status: Status.IN_PROGRESS,
    priorityScore: 65,
    collectedAt: '2026-04-23T09:00:00Z'
  }
];

export default function Dashboard() {
  return (
    <div className="pt-24 pb-12 px-6 bg-brand-paper min-h-screen">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div>
            <h1 className="text-4xl font-serif font-bold text-brand-green-900 mb-2">Impact Dashboard</h1>
            <p className="text-brand-ink/60 font-medium">Real-time surveillance of community needs and intervention progress.</p>
          </div>
          <div className="flex gap-3">
            <button className="px-5 py-2.5 rounded-xl border border-brand-ink/10 bg-white text-brand-ink font-semibold flex items-center gap-2 hover:bg-brand-ink/5 transition-all">
              <Filter size={18} />
              <span>Filters</span>
            </button>
            <button className="px-5 py-2.5 rounded-xl premium-gradient text-white font-semibold flex items-center gap-2 shadow-lg shadow-brand-green-900/20 hover:-translate-y-0.5 transition-all">
              <Plus size={18} />
              <span>New Entry</span>
            </button>
          </div>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {[
            { label: 'Unassigned Needs', value: '14', icon: AlertCircle, color: 'text-brand-gold', trend: '+2 since yesterday' },
            { label: 'Active Assignments', value: '42', icon: Clock, color: 'text-blue-500', trend: '85% on schedule' },
            { label: 'Impact Score', value: '8.4', icon: TrendingUp, color: 'text-emerald-500', trend: '+0.2 this month' },
            { label: 'Resolved (YTD)', value: '312', icon: CheckCircle2, color: 'text-brand-green-900', trend: 'Goal: 500' },
          ].map((stat, i) => (
            <motion.div 
              key={i}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
              className="p-6 rounded-2xl bg-white border border-brand-ink/5 shadow-sm hover:shadow-md transition-all"
            >
              <div className="flex justify-between items-start mb-4">
                <div className={cn("p-2 rounded-lg bg-opacity-10", stat.color.replace('text', 'bg'))}>
                  <stat.icon className={stat.color} size={24} />
                </div>
                <div className="text-xs font-bold text-brand-ink/40 uppercase tracking-wider">{stat.label}</div>
              </div>
              <div className="text-4xl font-bold text-brand-green-900 mb-1 tracking-tight">{stat.value}</div>
              <div className="text-[10px] font-bold text-brand-ink/50 uppercase tracking-widest">{stat.trend}</div>
            </motion.div>
          ))}
        </div>

        {/* Main Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Issue Ranking / Needs List */}
          <div className="lg:col-span-2 space-y-6">
            <div className="flex items-center justify-between">
              <h2 className="text-2xl font-serif font-bold text-brand-green-900">Urgent Needs Ranking</h2>
              <div className="relative">
                <Search size={16} className="absolute left-3 top-1/2 -translate-y-1/2 text-brand-ink/30" />
                <input 
                  type="text" 
                  placeholder="Search needs..." 
                  className="pl-10 pr-4 py-2 rounded-lg border border-brand-ink/10 bg-white text-sm focus:outline-none focus:ring-2 focus:ring-brand-gold/20"
                />
              </div>
            </div>

            <div className="space-y-4">
              {mockNeeds.map((need, idx) => (
                <motion.div 
                  key={need.id}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.4 + (idx * 0.1) }}
                  className="group p-5 rounded-2xl bg-white border border-brand-ink/5 shadow-sm hover:shadow-lg hover:border-brand-gold/20 transition-all cursor-pointer"
                >
                  <div className="flex items-center gap-6">
                    <div className="flex flex-col items-center">
                      <div className={cn(
                        "text-2xl font-bold",
                        need.urgency === UrgencyLevel.CRITICAL ? "text-red-500" : "text-brand-gold"
                      )}>
                        {need.priorityScore}
                      </div>
                      <div className="text-[10px] uppercase font-bold text-brand-ink/40 tracking-widest">Priority</div>
                    </div>

                    <div className="flex-1">
                      <div className="flex items-center gap-2 mb-1">
                        <span className={cn(
                          "text-[10px] uppercase font-bold px-2 py-0.5 rounded",
                          need.urgency === UrgencyLevel.CRITICAL ? "bg-red-50 text-red-600" : "bg-brand-gold/10 text-brand-gold"
                        )}>
                          {need.urgency}
                        </span>
                        <span className="text-[10px] uppercase font-bold px-2 py-0.5 rounded bg-brand-ink/5 text-brand-ink/60">
                          {need.category}
                        </span>
                      </div>
                      <h3 className="text-xl font-bold text-brand-green-900 group-hover:text-brand-gold transition-colors">{need.title}</h3>
                      <div className="flex items-center gap-4 text-sm text-brand-ink/50 mt-1">
                        <span className="flex items-center gap-1"><MapPin size={14} /> {need.location}</span>
                        <span className="flex items-center gap-1"><Clock size={14} /> Reported 2h ago</span>
                      </div>
                    </div>

                    <div className="flex flex-col items-end gap-2">
                      <button className="px-4 py-2 rounded-xl bg-brand-green-900 text-white text-sm font-bold shadow-md hover:shadow-brand-green-900/20 active:scale-95 transition-all">
                        Match Volunteer
                      </button>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
            
            <button className="w-full py-4 rounded-2xl border-2 border-dashed border-brand-ink/10 text-brand-ink/40 font-bold hover:border-brand-gold/40 hover:text-brand-gold transition-all">
              View All 124 Collected Needs
            </button>
          </div>

          {/* Visualization / Map Side */}
          <div className="space-y-6">
            <div className="p-6 rounded-2xl bg-brand-green-900 text-white shadow-xl relative overflow-hidden h-[400px] flex flex-col">
              <div className="absolute inset-0 z-0 opacity-20 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')]" />
              <div className="relative z-10 flex flex-col h-full">
                <div className="flex items-center justify-between mb-6">
                  <h3 className="text-xl font-serif font-bold">Priority Heatmap</h3>
                  <MapIcon size={20} className="text-brand-gold" />
                </div>
                
                <div className="flex-1 flex items-center justify-center relative">
                   {/* Mock Heatmap Visualization */}
                   <div className="w-48 h-48 rounded-full bg-brand-gold/20 animate-pulse flex items-center justify-center">
                     <div className="w-32 h-32 rounded-full bg-brand-gold/40 animate-pulse flex items-center justify-center">
                        <div className="w-16 h-16 rounded-full bg-brand-gold animate-pulse shadow-[0_0_40px_rgba(180,83,9,0.5)]" />
                     </div>
                   </div>
                   
                   <div className="absolute top-10 left-10 w-4 h-4 rounded-full bg-red-500 shadow-[0_0_15px_rgba(239,68,68,0.8)]" />
                   <div className="absolute bottom-20 right-10 w-4 h-4 rounded-full bg-red-500 shadow-[0_0_15px_rgba(239,68,68,0.8)]" />
                </div>

                <div className="bg-white/10 backdrop-blur-md rounded-xl p-4 mt-auto">
                  <div className="text-xs font-bold uppercase tracking-widest text-white/50 mb-2">Hottest Intervention Zone</div>
                  <div className="text-lg font-bold">North Sector, Area 4</div>
                  <div className="text-sm text-white/70">12 Critical Needs Pending</div>
                </div>
              </div>
            </div>

            {/* Volunteer Stream */}
            <div className="p-6 rounded-2xl bg-white border border-brand-ink/5 shadow-sm">
              <h3 className="text-lg font-serif font-bold text-brand-green-900 mb-6">Available Experts</h3>
              <div className="space-y-4">
                {[
                  { name: 'Alex Rivera', skill: 'Health', distance: '1.2km' },
                  { name: 'Priya Shah', skill: 'Educator', distance: '3.5km' },
                  { name: 'David Chen', skill: 'Eng', distance: '0.8km' },
                ].map((v, i) => (
                  <div key={i} className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full bg-brand-ink/5 overflow-hidden">
                      <img src={`https://i.pravatar.cc/150?u=${v.name}`} alt={v.name} />
                    </div>
                    <div className="flex-1">
                      <div className="text-sm font-bold text-brand-green-900">{v.name}</div>
                      <div className="text-[10px] uppercase font-bold text-brand-ink/40 tracking-wider">
                         {v.skill} • {v.distance} away
                      </div>
                    </div>
                    <ArrowUpRight size={16} className="text-brand-ink/20" />
                  </div>
                ))}
              </div>
              <button className="w-full mt-6 py-2 rounded-lg bg-brand-ink/5 text-brand-ink/60 font-bold text-xs hover:bg-brand-ink/10 transition-all uppercase tracking-widest">
                View All Volunteers
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

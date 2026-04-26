import React from 'react';
import { motion } from 'motion/react';
import { 
  CheckCircle2, 
  Clock, 
  MapPin, 
  User, 
  Calendar, 
  ChevronRight,
  Filter,
  Search,
  MessageSquare,
  MoreVertical
} from 'lucide-react';
import { cn } from '../lib/utils';
import { Status, UrgencyLevel, NeedCategory } from '../types';

const mockTasks = [
  {
    id: 't1',
    title: 'Clean Water Initiative',
    volunteer: 'Robert Chen',
    status: Status.IN_PROGRESS,
    urgency: UrgencyLevel.CRITICAL,
    deadline: '2026-05-01',
    location: 'North Sector, Area 4'
  },
  {
    id: 't2',
    title: 'Textbook Distribution',
    volunteer: 'Maria Garcia',
    status: Status.ASSIGNED,
    urgency: UrgencyLevel.HIGH,
    deadline: '2026-05-05',
    location: 'West Village'
  },
  {
    id: 't3',
    title: 'Solar Panel Maintenance',
    volunteer: 'David Chen',
    status: Status.COMPLETED,
    urgency: UrgencyLevel.MEDIUM,
    deadline: '2026-04-20',
    location: 'South Ridge'
  }
];

export default function Tasks() {
  return (
    <div className="pt-24 pb-12 px-6 bg-brand-paper min-h-screen">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div>
            <h1 className="text-4xl font-serif font-bold text-brand-green-900 mb-2">Tasks & Missions</h1>
            <p className="text-brand-ink/60 font-medium">Tracking the operational execution of community interventions.</p>
          </div>
          <div className="flex gap-3">
             <div className="relative">
                <Search size={18} className="absolute left-3 top-1/2 -translate-y-1/2 text-brand-ink/30" />
                <input 
                  type="text" 
                  placeholder="Filter tasks..." 
                  className="pl-10 pr-4 py-2.5 rounded-xl border border-brand-ink/10 bg-white text-sm focus:outline-none focus:ring-2 focus:ring-brand-gold/20"
                />
             </div>
             <button className="p-2.5 rounded-xl border border-brand-ink/10 bg-white hover:bg-brand-ink/5 transition-all">
                <Filter size={18} />
             </button>
          </div>
        </div>

        <div className="space-y-4">
          <div className="grid grid-cols-12 px-6 py-3 text-[10px] uppercase font-bold text-brand-ink/40 tracking-widest bg-brand-ink/5 rounded-t-xl mb-2">
            <div className="col-span-4">Project / Mission</div>
            <div className="col-span-3">Assigned Volunteer</div>
            <div className="col-span-2">Status</div>
            <div className="col-span-2">Deadline</div>
            <div className="col-span-1 text-right">Actions</div>
          </div>

          {mockTasks.map((task, idx) => (
            <motion.div 
               key={task.id}
               initial={{ opacity: 0, y: 10 }}
               animate={{ opacity: 1, y: 0 }}
               transition={{ delay: idx * 0.1 }}
               className="grid grid-cols-12 items-center px-6 py-5 rounded-2xl bg-white border border-brand-ink/5 shadow-sm hover:shadow-md transition-all group"
            >
              <div className="col-span-4 flex flex-col">
                <div className="flex items-center gap-2 mb-1">
                   <span className={cn(
                     "text-[9px] font-bold px-1.5 py-0.5 rounded uppercase",
                     task.urgency === UrgencyLevel.CRITICAL ? "bg-red-50 text-red-600" : "bg-brand-gold/10 text-brand-gold"
                   )}>
                     {task.urgency}
                   </span>
                   <span className="text-xs font-bold text-brand-ink/50 flex items-center gap-1">
                     <MapPin size={10} /> {task.location}
                   </span>
                </div>
                <h4 className="text-lg font-bold text-brand-green-900 group-hover:text-brand-gold transition-colors">{task.title}</h4>
              </div>

              <div className="col-span-3 flex items-center gap-3">
                <div className="w-8 h-8 rounded-full bg-brand-ink/5 overflow-hidden border border-brand-ink/10">
                   <img src={`https://i.pravatar.cc/150?u=${task.volunteer}`} alt={task.volunteer} />
                </div>
                <div className="text-sm font-bold text-brand-green-900">{task.volunteer}</div>
              </div>

              <div className="col-span-2">
                <div className={cn(
                  "inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold",
                  task.status === Status.COMPLETED ? "bg-emerald-50 text-emerald-600" :
                  task.status === Status.IN_PROGRESS ? "bg-blue-50 text-blue-600" : "bg-brand-gold/10 text-brand-gold"
                )}>
                  {task.status === Status.COMPLETED ? <CheckCircle2 size={12} /> : <Clock size={12} />}
                  {task.status}
                </div>
              </div>

              <div className="col-span-2">
                 <div className="flex items-center gap-2 text-sm font-bold text-brand-ink/60">
                   <Calendar size={14} />
                   {task.deadline}
                 </div>
              </div>

              <div className="col-span-1 flex justify-end gap-2 outline-none">
                 <button className="p-2 rounded-lg hover:bg-brand-ink/5 text-brand-ink/30 hover:text-brand-green-900 transition-colors">
                    <MessageSquare size={18} />
                 </button>
                 <button className="p-2 rounded-lg hover:bg-brand-ink/5 text-brand-ink/30 hover:text-brand-green-900 transition-colors">
                    <MoreVertical size={18} />
                 </button>
              </div>
            </motion.div>
          ))}
        </div>
        
        <div className="mt-12 p-10 rounded-3xl premium-gradient text-white flex flex-col md:flex-row items-center justify-between gap-8 shadow-2xl relative overflow-hidden">
           <div className="absolute top-0 right-0 w-64 h-64 bg-white/5 rounded-full blur-[80px] -translate-y-1/2 translate-x-1/2" />
           <div className="flex-1">
             <h3 className="text-3xl font-serif font-bold mb-3 italic">"Visibility is the first step to impact."</h3>
             <p className="text-white/60 font-medium">Keep your teams aligned and your community informed with real-time status tracking.</p>
           </div>
           <button className="px-8 py-3 rounded-xl bg-white text-brand-green-900 font-bold shadow-lg hover:scale-105 active:scale-95 transition-all">
              Launch Task Board
           </button>
        </div>
      </div>
    </div>
  );
}

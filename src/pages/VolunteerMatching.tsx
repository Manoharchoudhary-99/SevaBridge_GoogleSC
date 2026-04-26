import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  Search, 
  MapPin, 
  Handshake, 
  Star, 
  ChevronRight, 
  Info,
  CheckCircle,
  AlertTriangle
} from 'lucide-react';
import { cn } from '../lib/utils';
import { UrgencyLevel, NeedCategory, Volunteer } from '../types';

const mockVolunteers: Volunteer[] = [
  {
    userId: 'v1',
    name: 'Dr. James Wilson',
    email: 'james@example.com',
    skills: ['Health', 'Emergency Response'],
    location: 'North Sector',
    availability: 'Mondays, 9am - 5pm',
    experienceLevel: 'Expert',
    activeWorkload: 0,
    joinedAt: '2025-01-10T00:00:00Z',
    matchScore: 98
  },
  {
    userId: 'v2',
    name: 'Maria Garcia',
    email: 'maria@example.com',
    skills: ['Education', 'Child Care'],
    location: 'West Village',
    availability: 'Weekends',
    experienceLevel: 'Experienced',
    activeWorkload: 1,
    joinedAt: '2025-03-15T00:00:00Z',
    matchScore: 82
  },
  {
    userId: 'v3',
    name: 'Robert Chen',
    email: 'robert@example.com',
    skills: ['Infrastructure', 'Plumbing'],
    location: 'South Ridge',
    availability: 'All days',
    experienceLevel: 'Expert',
    activeWorkload: 3,
    joinedAt: '2024-11-20T00:00:00Z',
    matchScore: 75
  }
];

export default function VolunteerMatching() {
  const [selectedNeed, setSelectedNeed] = useState<any>(null);
  const [matchingResults, setMatchingResults] = useState(mockVolunteers);

  return (
    <div className="pt-24 pb-12 px-6 bg-brand-paper min-h-screen">
      <div className="max-w-7xl mx-auto">
        <div className="mb-12">
          <h1 className="text-4xl font-serif font-bold text-brand-green-900 mb-2">Smart Volunteer Matching</h1>
          <p className="text-brand-ink/60 font-medium">Algorithmic alignment of skills, location, and urgency.</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          {/* Left: Need Selection */}
          <div className="lg:col-span-4 space-y-6">
            <h3 className="text-sm font-bold uppercase tracking-widest text-brand-ink/40">1. Select Target Need</h3>
            <div className="space-y-3">
              {[
                { id: '1', title: 'Emergency Medical Camp', cat: 'Health', urg: 'Critical' },
                { id: '2', title: 'Library Renovation', cat: 'Education', urg: 'Medium' },
                { id: '3', title: 'Flood Relief Shelter', cat: 'Infrastructure', urg: 'High' },
              ].map((need) => (
                <div 
                  key={need.id}
                  onClick={() => setSelectedNeed(need)}
                  className={cn(
                    "p-4 rounded-xl border cursor-pointer transition-all",
                    selectedNeed?.id === need.id 
                      ? "bg-brand-green-900 text-white border-brand-green-900 shadow-lg" 
                      : "bg-white border-brand-ink/5 hover:border-brand-gold/30 hover:bg-brand-gold/5"
                  )}
                >
                  <div className="text-[10px] uppercase font-bold opacity-60 mb-1">{need.cat} • {need.urg}</div>
                  <div className="font-bold">{need.title}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Right: Matching Results */}
          <div className="lg:col-span-8 space-y-6">
            <div className="flex items-center justify-between">
              <h3 className="text-sm font-bold uppercase tracking-widest text-brand-ink/40">
                {selectedNeed ? `2. High-Confidence Matches for "${selectedNeed.title}"` : '2. All Available Volunteers'}
              </h3>
              <div className="flex gap-2">
                 <button className="p-2 rounded-lg bg-white border border-brand-ink/10 hover:bg-brand-gold/5 transition-colors">
                   <Filter size={16} />
                 </button>
              </div>
            </div>

            <div className="space-y-4">
              <AnimatePresence mode="wait">
                {matchingResults.map((volunteer, idx) => (
                  <motion.div 
                    key={volunteer.userId}
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -20 }}
                    transition={{ delay: idx * 0.1 }}
                    className="p-6 rounded-2xl bg-white border border-brand-ink/5 shadow-sm hover:shadow-md transition-all"
                  >
                    <div className="flex items-center gap-6">
                      <div className="relative">
                        <div className="w-16 h-16 rounded-full bg-brand-ink/5 overflow-hidden border-2 border-brand-green-900/10">
                          <img src={`https://i.pravatar.cc/150?u=${volunteer.userId}`} alt={volunteer.name} />
                        </div>
                        <div className="absolute -bottom-1 -right-1 bg-brand-green-900 text-white rounded-full p-1 border-2 border-white">
                          <CheckCircle size={12} />
                        </div>
                      </div>

                      <div className="flex-1">
                        <div className="flex items-center gap-3 mb-1">
                          <h4 className="text-xl font-bold text-brand-green-900">{volunteer.name}</h4>
                          <span className="text-[10px] font-bold px-2 py-0.5 rounded bg-brand-green-900/10 text-brand-green-900 uppercase">
                            {volunteer.experienceLevel}
                          </span>
                        </div>
                        <div className="flex flex-wrap gap-2 mb-3">
                          {volunteer.skills.map(skill => (
                            <span key={skill} className="text-[10px] font-bold text-brand-ink/50 border border-brand-ink/10 px-2 py-0.5 rounded">
                              {skill}
                            </span>
                          ))}
                        </div>
                        <div className="flex items-center gap-4 text-xs text-brand-ink/50">
                          <span className="flex items-center gap-1"><MapPin size={12} /> {volunteer.location}</span>
                          <span className="flex items-center gap-1"><Info size={12} /> {volunteer.availability}</span>
                          <span className={cn(
                            "flex items-center gap-1",
                            volunteer.activeWorkload > 2 ? "text-amber-600" : "text-emerald-600"
                          )}>
                            {volunteer.activeWorkload > 2 ? <AlertTriangle size={12} /> : <CheckCircle size={12} />}
                            Workload: {volunteer.activeWorkload} active
                          </span>
                        </div>
                      </div>

                      <div className="text-right">
                        <div className="flex flex-col items-end mb-4">
                          <div className="text-4xl font-serif font-black text-brand-green-900">{volunteer.matchScore}%</div>
                          <div className="text-[10px] uppercase font-bold text-brand-ink/40 tracking-wider">Match Score</div>
                        </div>
                        <button className="px-6 py-2.5 rounded-xl premium-gradient text-white font-bold text-sm shadow-md flex items-center gap-2 hover:-translate-y-0.5 transition-all">
                          <Handshake size={16} />
                          Assign Mission
                        </button>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </AnimatePresence>
            </div>
            
            {!selectedNeed && (
              <div className="p-8 rounded-2xl bg-brand-ink/5 border-2 border-dashed border-brand-ink/10 text-center">
                 <p className="text-brand-ink/40 font-medium">Select a community need on the left to see confidence scores.</p>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

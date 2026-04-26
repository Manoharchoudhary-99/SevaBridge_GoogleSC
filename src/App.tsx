import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/layout/Navbar';
import Home from './pages/Home';
import Dashboard from './pages/Dashboard';
import VolunteerMatching from './pages/VolunteerMatching';
import Tasks from './pages/Tasks';
import Analytics from './pages/Analytics';
import About from './pages/About';
import Auth from './pages/Auth';

export default function App() {
  return (
    <Router>
      <div className="min-h-screen bg-brand-paper selection:bg-brand-gold/30">
        <Navbar />
        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/matching" element={<VolunteerMatching />} />
            <Route path="/tasks" element={<Tasks />} />
            <Route path="/analytics" element={<Analytics />} />
            <Route path="/about" element={<About />} />
            <Route path="/auth" element={<Auth />} />
          </Routes>
        </main>
        
        {/* Simple Footer */}
        <footer className="bg-brand-green-900 text-white/70 py-12 px-6 mt-20">
          <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-12">
            <div className="col-span-1 md:col-span-2">
              <h2 className="font-serif text-3xl font-bold text-white mb-4">SevaBridge</h2>
              <p className="max-w-md text-balance">
                Empowering NGOs with data-driven insights to bridge the gap between community needs and the spirit of service.
              </p>
            </div>
            <div>
              <h4 className="text-white font-bold mb-4">Platform</h4>
              <ul className="space-y-2 text-sm">
                <li><a href="#" className="hover:text-brand-gold-light transition-colors">Needs Dashboard</a></li>
                <li><a href="#" className="hover:text-brand-gold-light transition-colors">Matching Logic</a></li>
                <li><a href="#" className="hover:text-brand-gold-light transition-colors">Impact Reporting</a></li>
              </ul>
            </div>
            <div>
              <h4 className="text-white font-bold mb-4">Connect</h4>
              <ul className="space-y-2 text-sm">
                <li><a href="#" className="hover:text-brand-gold-light transition-colors">Contact Support</a></li>
                <li><a href="#" className="hover:text-brand-gold-light transition-colors">NGO Partnership</a></li>
                <li><a href="#" className="hover:text-brand-gold-light transition-colors">Volunteer portal</a></li>
              </ul>
            </div>
          </div>
          <div className="max-w-7xl mx-auto border-t border-white/10 mt-12 pt-8 flex flex-col md:row justify-between items-center gap-4 text-xs">
            <p>© 2026 SevaBridge. All rights reserved.</p>
            <div className="flex gap-6">
              <a href="#" className="hover:text-white">Privacy Policy</a>
              <a href="#" className="hover:text-white">Terms of Service</a>
            </div>
          </div>
        </footer>
      </div>
    </Router>
  );
}

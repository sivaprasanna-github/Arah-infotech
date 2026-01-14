import React from "react";
import { Users, Briefcase, FileText, Building2 } from "lucide-react";

export default function Overview() {
  return (
    <div>
      {/* Welcome Banner */}
      <div className="bg-gradient-to-r from-blue-500 to-cyan-400 rounded-2xl p-8 text-white mb-8 shadow-lg shadow-blue-500/20 relative overflow-hidden z-10">
        <div className="relative z-10">
          <h1 className="text-3xl font-bold mb-2">Welcome back, Sanjay!</h1>
          <p className="text-blue-50 opacity-90 font-medium">Here's your admin dashboard overview for today.</p>
        </div>
        <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full -translate-y-1/2 translate-x-1/4 blur-2xl"></div>
        <div className="absolute bottom-0 left-20 w-32 h-32 bg-blue-400/20 rounded-full translate-y-1/2 blur-xl"></div>
      </div>

      {/* Stats Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
        {[
          { label: "Total Candidates", val: "18", sub: "On bench", icon: Users, color: "text-blue-600", bg: "bg-blue-50" },
          { label: "Active Jobs", val: "28", sub: "Active this week", icon: Briefcase, color: "text-cyan-600", bg: "bg-cyan-50" },
          { label: "Bench Requests", val: "0", sub: "Awaiting approval", icon: FileText, color: "text-indigo-600", bg: "bg-indigo-50" },
          { label: "Partner Companies", val: "2", sub: "Actively hiring", icon: Building2, color: "text-violet-600", bg: "bg-violet-50" },
        ].map((stat, i) => (
          <div key={i} className="bg-white p-6 rounded-2xl border border-slate-100 shadow-sm hover:shadow-md transition-all hover:-translate-y-1">
            <div className="flex justify-between items-start mb-4">
                <div className={`p-3 rounded-xl ${stat.bg} ${stat.color}`}>
                  <stat.icon size={22} />
                </div>
                <span className="text-[10px] font-bold text-green-600 bg-green-100 px-2 py-1 rounded-full">+12%</span>
            </div>
            <h3 className="text-3xl font-black text-slate-800 mb-1">{stat.val}</h3>
            <p className="text-sm font-bold text-slate-600">{stat.label}</p>
            <p className="text-xs text-slate-400 mt-1">{stat.sub}</p>
          </div>
        ))}
      </div>

      {/* Bottom Row */}
      <div className="grid md:grid-cols-3 gap-6">
          {[
            { val: "0", label: "Colleges Connected", icon: Building2 },
            { val: "31", label: "Interviews Scheduled", icon: Users },
            { val: "3", label: "Placements Done", icon: Briefcase }
          ].map((item, index) => (
          <div key={index} className="bg-white p-6 rounded-2xl border border-slate-100 shadow-sm flex items-end justify-between hover:shadow-md transition-shadow">
              <div>
                <h4 className="text-4xl font-black text-slate-800 mb-1">{item.val}</h4>
                <p className="text-sm text-slate-500 font-bold">{item.label}</p>
              </div>
              <item.icon className="text-slate-200 mb-2" size={32} />
          </div>
          ))}
      </div>
    </div>
  );
}
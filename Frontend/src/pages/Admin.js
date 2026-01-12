import React, { useState } from "react";
import { 
  ShieldCheck, LayoutDashboard, Users, Activity, 
  MessageSquare, Briefcase, Search, Filter, MoreHorizontal,
  CheckCircle, Clock, XCircle
} from "lucide-react";

export default function Admin() {
  // --- MOCK DATA (Replace with API calls later) ---
  const [activeTab, setActiveTab] = useState("overview");

  const stats = [
    { label: "Total Enquiries", value: "142", change: "+12%", icon: MessageSquare, color: "text-blue-500", bg: "bg-blue-50" },
    { label: "Job Applications", value: "84", change: "+5%", icon: Briefcase, color: "text-purple-500", bg: "bg-purple-50" },
    { label: "Active Projects", value: "12", change: "0%", icon: LayoutDashboard, color: "text-emerald-500", bg: "bg-emerald-50" },
    { label: "Site Visits", value: "24.5k", change: "+18%", icon: Activity, color: "text-orange-500", bg: "bg-orange-50" },
  ];

  const recentMessages = [
    { id: 1, name: "John Doe", company: "Tech Corp", type: "Web Dev", date: "2 hrs ago", status: "New" },
    { id: 2, name: "Sarah Smith", company: "Design Studio", type: "AI Model", date: "5 hrs ago", status: "Pending" },
    { id: 3, name: "Michael Brown", company: "Startup Inc", type: "Mobile App", date: "1 day ago", status: "Resolved" },
    { id: 4, name: "Emma Wilson", company: "FinTech Ltd", type: "Consulting", date: "2 days ago", status: "New" },
  ];

  return (
    <div className="pt-28 pb-12 px-6 min-h-screen bg-slate-50">
      <div className="max-w-7xl mx-auto">
        
        {/* 1. HEADER */}
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-8">
          <div>
            <h1 className="text-3xl font-black text-slate-900 flex items-center gap-3">
              <ShieldCheck className="text-blue-600" /> Admin Console
            </h1>
            <p className="text-slate-500 text-sm mt-1">Welcome back, Administrator.</p>
          </div>
          <div className="flex gap-3">
             <button className="px-4 py-2 bg-white border border-slate-200 text-slate-600 rounded-lg text-sm font-bold hover:bg-slate-50 transition-colors">
               Export Data
             </button>
             <button className="px-4 py-2 bg-slate-900 text-white rounded-lg text-sm font-bold hover:bg-blue-600 transition-colors">
               + New Project
             </button>
          </div>
        </div>

        {/* 2. STATS GRID */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          {stats.map((stat, index) => (
            <div key={index} className="bg-white p-6 rounded-2xl border border-slate-100 shadow-sm hover:shadow-md transition-shadow">
              <div className="flex justify-between items-start mb-4">
                <div className={`p-3 rounded-xl ${stat.bg} ${stat.color}`}>
                  <stat.icon size={24} />
                </div>
                <span className="text-xs font-bold text-green-600 bg-green-50 px-2 py-1 rounded-full">
                  {stat.change}
                </span>
              </div>
              <h3 className="text-3xl font-black text-slate-800">{stat.value}</h3>
              <p className="text-slate-500 text-xs font-bold uppercase tracking-wider mt-1">{stat.label}</p>
            </div>
          ))}
        </div>

        {/* 3. MAIN CONTENT AREA */}
        <div className="grid lg:grid-cols-3 gap-8">
          
          {/* LEFT: Recent Enquiries Table */}
          <div className="lg:col-span-2 bg-white rounded-3xl shadow-sm border border-slate-100 overflow-hidden">
            <div className="p-6 border-b border-slate-100 flex justify-between items-center">
              <h2 className="text-lg font-bold text-slate-900">Recent Enquiries</h2>
              <div className="flex gap-2">
                <button className="p-2 hover:bg-slate-50 rounded-lg text-slate-400"><Search size={18} /></button>
                <button className="p-2 hover:bg-slate-50 rounded-lg text-slate-400"><Filter size={18} /></button>
              </div>
            </div>
            
            <div className="overflow-x-auto">
              <table className="w-full text-left">
                <thead className="bg-slate-50 text-slate-500 text-xs uppercase tracking-wider font-bold">
                  <tr>
                    <th className="px-6 py-4">Client</th>
                    <th className="px-6 py-4">Service</th>
                    <th className="px-6 py-4">Date</th>
                    <th className="px-6 py-4">Status</th>
                    <th className="px-6 py-4"></th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-50">
                  {recentMessages.map((msg) => (
                    <tr key={msg.id} className="hover:bg-slate-50/50 transition-colors">
                      <td className="px-6 py-4">
                        <p className="font-bold text-slate-900">{msg.name}</p>
                        <p className="text-xs text-slate-500">{msg.company}</p>
                      </td>
                      <td className="px-6 py-4">
                        <span className="px-3 py-1 bg-blue-50 text-blue-600 rounded-full text-xs font-bold">
                          {msg.type}
                        </span>
                      </td>
                      <td className="px-6 py-4 text-sm text-slate-500 font-medium">
                        {msg.date}
                      </td>
                      <td className="px-6 py-4">
                        <div className="flex items-center gap-2">
                          {msg.status === "New" && <span className="w-2 h-2 rounded-full bg-blue-500"></span>}
                          {msg.status === "Pending" && <span className="w-2 h-2 rounded-full bg-orange-500"></span>}
                          {msg.status === "Resolved" && <span className="w-2 h-2 rounded-full bg-green-500"></span>}
                          <span className="text-sm font-bold text-slate-700">{msg.status}</span>
                        </div>
                      </td>
                      <td className="px-6 py-4 text-right">
                        <button className="text-slate-400 hover:text-blue-600 transition-colors">
                          <MoreHorizontal size={20} />
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            
            <div className="p-4 border-t border-slate-100 text-center">
              <button className="text-sm font-bold text-blue-600 hover:text-blue-700">View All Messages</button>
            </div>
          </div>

          {/* RIGHT: System Status & Quick Actions */}
          <div className="space-y-6">
            
            {/* System Health */}
            <div className="bg-slate-900 text-white rounded-3xl p-6 relative overflow-hidden">
               <div className="absolute top-0 right-0 w-32 h-32 bg-blue-500/20 rounded-full blur-3xl -mr-10 -mt-10"></div>
               <h3 className="font-bold mb-4 relative z-10">System Status</h3>
               <div className="space-y-4 relative z-10">
                 <div className="flex items-center justify-between">
                   <div className="flex items-center gap-2 text-sm text-slate-300">
                     <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div> Database
                   </div>
                   <span className="text-green-400 text-xs font-bold bg-green-500/10 px-2 py-1 rounded">Operational</span>
                 </div>
                 <div className="flex items-center justify-between">
                   <div className="flex items-center gap-2 text-sm text-slate-300">
                     <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div> API Gateway
                   </div>
                   <span className="text-green-400 text-xs font-bold bg-green-500/10 px-2 py-1 rounded">Operational</span>
                 </div>
                 <div className="flex items-center justify-between">
                   <div className="flex items-center gap-2 text-sm text-slate-300">
                     <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div> Email Server
                   </div>
                   <span className="text-green-400 text-xs font-bold bg-green-500/10 px-2 py-1 rounded">Operational</span>
                 </div>
               </div>
            </div>

            {/* Quick Tasks */}
            <div className="bg-white rounded-3xl border border-slate-100 p-6">
              <h3 className="font-bold text-slate-900 mb-4">Pending Tasks</h3>
              <div className="space-y-3">
                <div className="flex items-start gap-3 p-3 bg-slate-50 rounded-xl">
                  <Clock className="text-orange-500 mt-1" size={16} />
                  <div>
                    <p className="text-sm font-bold text-slate-800">Review FinTech Proposal</p>
                    <p className="text-xs text-slate-500">Due in 2 hours</p>
                  </div>
                </div>
                <div className="flex items-start gap-3 p-3 bg-slate-50 rounded-xl">
                  <Clock className="text-orange-500 mt-1" size={16} />
                  <div>
                    <p className="text-sm font-bold text-slate-800">Update Privacy Policy</p>
                    <p className="text-xs text-slate-500">Due Tomorrow</p>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>

      </div>
    </div>
  );
}
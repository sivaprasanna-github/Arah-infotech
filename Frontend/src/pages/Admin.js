// --- FILE: src/pages/Admin.js ---
import React, { useState } from "react";
import { 
  User, Lock, LogOut, LayoutDashboard, Users, 
  Briefcase, FileText, Building2, Menu, Bell, Search, ChevronDown, Settings 
} from "lucide-react";

export default function Admin() {
  // --- STATE ---
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [error, setError] = useState("");
  const [activeTab, setActiveTab] = useState("Dashboard");
  
  // New State for Profile Dropdown
  const [showProfileMenu, setShowProfileMenu] = useState(false);

  // --- LOGIN LOGIC ---
  const handleLogin = (e) => {
    e.preventDefault();
    if (username === "sanjay" && password === "arah123") {
      setIsLoggedIn(true);
      setError("");
    } else {
      setError("Invalid Access. Try: sanjay / arah123");
    }
  };

  const handleLogout = () => {
    setIsLoggedIn(false);
    setUsername("");
    setPassword("");
    setShowProfileMenu(false);
  };

  // --- DASHBOARD VIEW ---
  if (isLoggedIn) {
    return (
      <div className="flex min-h-screen bg-slate-50 font-sans pt-24 pb-10">
        
        {/* SIDEBAR */}
        <aside className="w-64 bg-white border-r border-slate-200 hidden md:flex flex-col ml-6 rounded-2xl shadow-sm h-[calc(100vh-8rem)] sticky top-24">
          <div className="p-6 border-b border-slate-100 flex items-center gap-3">
            <img src="https://arahinfotech.net/assets/img/logo1.png" width="40" height="40" alt="logo" />
            <h2 className="text-lg font-bold text-slate-800 tracking-tight">Arah Infotech</h2>
          </div>

          <nav className="flex-1 p-4 space-y-2">
            {[
              { name: "Dashboard", icon: LayoutDashboard },
              { name: "Interviews", icon: Users },
              { name: "Bench Management", icon: Briefcase },
              { name: "Candidates", icon: User },
              { name: "Jobs & Companies", icon: Building2 },
              { name: "Requests", icon: FileText },
            ].map((item) => (
              <button
                key={item.name}
                onClick={() => setActiveTab(item.name)}
                className={`w-full flex items-center gap-3 px-4 py-3 text-sm font-medium rounded-lg transition-all ${
                  activeTab === item.name 
                    ? "bg-blue-600 text-white shadow-md shadow-blue-500/20" 
                    : "text-slate-500 hover:bg-slate-100 hover:text-slate-900"
                }`}
              >
                <item.icon size={18} />
                {item.name}
              </button>
            ))}
          </nav>

          <div className="p-4 border-t border-slate-100">
            <button 
              onClick={handleLogout}
              className="w-full flex items-center gap-3 px-4 py-3 text-sm font-bold text-red-500 hover:bg-red-50 rounded-lg transition-colors"
            >
              <LogOut size={18} /> Logout
            </button>
          </div>
        </aside>

        {/* MAIN CONTENT AREA */}
        <main className="flex-1 px-6 md:px-8">
          
          {/* --- TOP HEADER --- */}
          <div className="flex justify-between items-center mb-8 bg-white p-4 rounded-2xl shadow-sm border border-slate-100 relative z-20">
             
             {/* Left: Mobile Menu Trigger & Title */}
             <div className="flex items-center gap-4">
                <button className="md:hidden text-slate-500 hover:bg-slate-50 p-2 rounded-lg">
                  <Menu size={20} />
                </button>
                <h2 className="hidden md:block text-lg font-bold text-slate-700">Overview</h2>
             </div>
             
             {/* Right: Search + Profile Section */}
             <div className="flex items-center gap-6">
                
                {/* Search Bar */}
                <div className="relative hidden md:block group">
                   <Search className="absolute left-3 top-2.5 text-slate-400 group-focus-within:text-blue-500 transition-colors" size={16} />
                   <input 
                    type="text" 
                    placeholder="Search..." 
                    className="bg-slate-50 pl-10 pr-4 py-2.5 rounded-full text-sm outline-none focus:ring-2 ring-blue-100 w-64 transition-all border-transparent border focus:bg-white" 
                   />
                </div>

                {/* Divider */}
                <div className="h-8 w-px bg-slate-200 hidden md:block"></div>

                <div className="flex items-center gap-4">
                  {/* Notification Bell */}
                  <button className="relative p-2 text-slate-400 hover:text-blue-600 transition-colors rounded-full hover:bg-blue-50">
                    <Bell size={20} />
                    <span className="absolute top-1.5 right-2 w-2 h-2 bg-red-500 rounded-full border-2 border-white"></span>
                  </button>
                  
                  {/* --- PROFILE DROPDOWN START --- */}
                  <div className="relative">
                    <button 
                      onClick={() => setShowProfileMenu(!showProfileMenu)}
                      className="flex items-center gap-3 cursor-pointer hover:bg-slate-50 p-1.5 pr-3 rounded-full transition-colors border border-transparent hover:border-slate-100 focus:outline-none"
                    >
                       {/* User Icon (Sanjay) */}
                       <div className="w-9 h-9 bg-slate-100 rounded-full flex items-center justify-center border border-slate-200 text-slate-600">
                          <User size={20} />
                       </div>
                       
                       {/* Name Display */}
                       <div className="hidden md:block text-left">
                          <p className="text-sm font-bold text-slate-700 leading-none">Sanjay</p>
                       </div>

                       <ChevronDown size={14} className={`text-slate-400 hidden md:block transition-transform ${showProfileMenu ? "rotate-180" : ""}`} />
                    </button>

                    {/* Dropdown Menu */}
                    {showProfileMenu && (
                      <div className="absolute right-0 top-12 w-48 bg-white border border-slate-100 rounded-xl shadow-xl overflow-hidden animate-in fade-in slide-in-from-top-2">
                        <div className="p-3 border-b border-slate-50">
                          <p className="text-sm font-bold text-slate-800">Sanjay</p>
                          <p className="text-xs text-slate-400">Administrator</p>
                        </div>
                        <div className="p-1">
                          <button className="w-full text-left flex items-center gap-2 px-3 py-2 text-sm text-slate-600 hover:bg-slate-50 rounded-lg">
                            <Settings size={16} /> Settings
                          </button>
                          <button 
                            onClick={handleLogout}
                            className="w-full text-left flex items-center gap-2 px-3 py-2 text-sm text-red-500 hover:bg-red-50 rounded-lg font-medium"
                          >
                            <LogOut size={16} /> Logout
                          </button>
                        </div>
                      </div>
                    )}
                  </div>
                  {/* --- PROFILE DROPDOWN END --- */}

                </div>
             </div>
          </div>

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

        </main>
      </div>
    );
  }

  // --- LOGIN FORM ---
  return (
    <div className="min-h-screen bg-slate-950 flex items-center justify-center p-6 relative overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-blue-900/20 via-slate-950 to-slate-950"></div>
      
      <div className="bg-white w-full max-w-md p-10 rounded-3xl shadow-2xl relative z-10">
        <div className="text-center mb-10">
          <div className="inline-flex justify-center items-center w-20 h-20 bg-blue-50 rounded-full mb-6 text-blue-600 border-4 border-white shadow-lg">
             {/* LOGIN SCREEN ICON - SANJAY */}
            <User size={32} />
          </div>
          <h2 className="text-3xl font-black text-slate-900">Admin Login</h2>
          <p className="text-slate-500 mt-2 text-sm">Welcome back, Sanjay</p>
        </div>

        <form onSubmit={handleLogin} className="space-y-6">
          <div>
            <label className="block text-xs font-bold text-slate-500 uppercase mb-2">Username</label>
            <input 
              type="text" 
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              className="w-full px-4 py-3 bg-slate-50 border-2 border-slate-100 rounded-xl focus:outline-none focus:border-blue-600 font-bold text-slate-900"
              placeholder="sanjay"
            />
          </div>

          <div>
            <label className="block text-xs font-bold text-slate-500 uppercase mb-2">Password</label>
            <input 
              type="password" 
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full px-4 py-3 bg-slate-50 border-2 border-slate-100 rounded-xl focus:outline-none focus:border-blue-600 font-bold text-slate-900"
              placeholder="••••••"
            />
          </div>

          {error && (
            <div className="p-3 bg-red-50 text-red-500 text-xs font-bold rounded-lg text-center">
              {error}
            </div>
          )}

          <button 
            type="submit"
            className="w-full bg-slate-900 text-white py-4 rounded-xl font-bold uppercase tracking-widest hover:bg-blue-600 transition-all shadow-lg hover:shadow-blue-500/30"
          >
            Enter Dashboard
          </button>
        </form>
      </div>
    </div>
  );
}
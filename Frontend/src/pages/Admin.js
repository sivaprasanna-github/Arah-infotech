import React, { useState } from "react";
import { User, Lock, ArrowRight, ShieldCheck, LogOut, LayoutDashboard, Users, Activity } from "lucide-react";

export default function Admin() {
  // --- SEED STATE ---
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [error, setError] = useState("");

  // --- SEED AUTHENTICATION LOGIC ---
  const handleLogin = (e) => {
    e.preventDefault();
    // HARDCODED CREDENTIALS (Change these for your real app)
    if (username === "admin" && password === "arah123") {
      setIsLoggedIn(true);
      setError("");
    } else {
      setError("Invalid Access. Try: admin / arah123");
    }
  };

  const handleLogout = () => {
    setIsLoggedIn(false);
    setUsername("");
    setPassword("");
  };

  // --- VIEW 1: DASHBOARD (Shown when logged in) ---
  if (isLoggedIn) {
    return (
      <div className="pt-28 pb-12 px-6 min-h-screen">
        <div className="max-w-6xl mx-auto bg-white rounded-3xl shadow-2xl overflow-hidden">
          {/* Dashboard Header */}
          <div className="bg-slate-900 text-white p-8 flex justify-between items-center">
            <div>
              <h1 className="text-2xl font-bold flex items-center gap-2">
                <ShieldCheck className="text-blue-500" /> Admin Console
              </h1>
              <p className="text-slate-400 text-sm">Arah Infotech Control Panel</p>
            </div>
            <button 
              onClick={handleLogout}
              className="bg-red-500/10 text-red-400 px-4 py-2 rounded-full text-xs font-bold uppercase tracking-wider hover:bg-red-500 hover:text-white transition-all flex items-center gap-2"
            >
              <LogOut size={14} /> Logout
            </button>
          </div>

          {/* Dashboard Content */}
          <div className="p-8">
            <div className="grid md:grid-cols-3 gap-6 mb-8">
              {/* Stat Cards */}
              {[
                { label: "Total Visits", val: "12,450", icon: Activity },
                { label: "Active Users", val: "840", icon: Users },
                { label: "Projects", val: "24", icon: LayoutDashboard },
              ].map((stat, i) => (
                <div key={i} className="bg-slate-50 border border-slate-100 p-6 rounded-2xl">
                  <div className="flex justify-between items-start">
                    <div>
                      <p className="text-slate-500 text-xs font-bold uppercase tracking-wider">{stat.label}</p>
                      <h3 className="text-3xl font-black text-slate-800 mt-2">{stat.val}</h3>
                    </div>
                    <stat.icon className="text-blue-600 opacity-20" size={40} />
                  </div>
                </div>
              ))}
            </div>

            <div className="bg-blue-50 border border-blue-100 rounded-xl p-6">
              <h3 className="font-bold text-blue-900 mb-2">Seed Code Active</h3>
              <p className="text-blue-800/80 text-sm">
                You are successfully authenticated. Connect your database here to manage content dynamically.
              </p>
            </div>
          </div>
        </div>
      </div>
    );
  }

  // --- VIEW 2: LOGIN FORM (Shown by default) ---
  return (
    <div className="pt-32 pb-12 px-6 min-h-screen flex items-center justify-center">
      <div className="bg-white w-full max-w-md p-8 md:p-10 rounded-3xl shadow-2xl relative z-10">
        <div className="text-center mb-8">
          <div className="inline-flex justify-center items-center w-16 h-16 bg-blue-50 rounded-full mb-4 text-blue-600">
            <Lock size={28} />
          </div>
          <h2 className="text-2xl font-black text-slate-900 uppercase tracking-tight">Restricted Access</h2>
          <p className="text-slate-500 text-sm mt-2">Enter administrative credentials</p>
        </div>

        <form onSubmit={handleLogin} className="space-y-5">
          <div>
            <label className="block text-xs font-bold text-slate-500 uppercase tracking-wider mb-2">Username</label>
            <div className="relative group">
              <User className="absolute left-4 top-3.5 text-slate-400 group-focus-within:text-blue-600 transition-colors" size={18} />
              <input 
                type="text" 
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                className="w-full pl-12 pr-4 py-3 bg-slate-50 border-2 border-slate-100 rounded-xl focus:outline-none focus:border-blue-600 text-slate-900 font-bold transition-all"
                placeholder="admin"
              />
            </div>
          </div>

          <div>
            <label className="block text-xs font-bold text-slate-500 uppercase tracking-wider mb-2">Password</label>
            <div className="relative group">
              <Lock className="absolute left-4 top-3.5 text-slate-400 group-focus-within:text-blue-600 transition-colors" size={18} />
              <input 
                type="password" 
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full pl-12 pr-4 py-3 bg-slate-50 border-2 border-slate-100 rounded-xl focus:outline-none focus:border-blue-600 text-slate-900 font-bold transition-all"
                placeholder="•••••••"
              />
            </div>
          </div>

          {error && (
            <div className="bg-red-50 text-red-500 text-xs font-bold p-3 rounded-lg text-center border border-red-100">
              {error}
            </div>
          )}

          <button 
            type="submit"
            className="w-full bg-slate-900 text-white py-4 rounded-xl font-bold uppercase tracking-widest hover:bg-blue-600 transition-all shadow-lg hover:shadow-blue-500/30 flex justify-center items-center gap-2 group"
          >
            Access Dashboard <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
          </button>
        </form>
      </div>
    </div>
  );
}
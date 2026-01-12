import React, { useState } from "react";
import { motion } from "framer-motion";
import { User, Lock, ArrowRight, ShieldCheck, LogOut } from "lucide-react";

export default function AdminLogin() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [error, setError] = useState("");

  // --- MOCK AUTHENTICATION LOGIC ---
  const handleLogin = (e) => {
    e.preventDefault();
    // SEED CODE: Hardcoded credentials for demonstration
    // In a real app, replace this with an API call to your backend
    if (username === "admin" && password === "arah123") {
      setIsLoggedIn(true);
      setError("");
    } else {
      setError("Invalid credentials. Try: admin / arah123");
    }
  };

  const handleLogout = () => {
    setIsLoggedIn(false);
    setUsername("");
    setPassword("");
  };

  // --- VIEW: ADMIN DASHBOARD (Protected) ---
  if (isLoggedIn) {
    return (
      <div className="min-h-screen bg-slate-50 pt-28 px-6">
        <div className="max-w-4xl mx-auto">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="bg-white rounded-2xl shadow-xl border border-slate-100 p-8"
          >
            <div className="flex justify-between items-center mb-8 border-b border-slate-100 pb-4">
              <div>
                <h1 className="text-2xl font-black text-slate-900 uppercase tracking-tight flex items-center gap-2">
                  <ShieldCheck className="text-blue-600" /> Admin Dashboard
                </h1>
                <p className="text-slate-500 text-sm mt-1">Welcome back, Administrator.</p>
              </div>
              <button 
                onClick={handleLogout}
                className="flex items-center gap-2 text-sm font-bold text-red-500 hover:text-red-700 transition-colors"
              >
                <LogOut size={16} /> Logout
              </button>
            </div>

            <div className="grid md:grid-cols-3 gap-6">
              {/* Dummy Data Cards */}
              {["Total Users", "Active Projects", "New Messages"].map((item, index) => (
                <div key={index} className="bg-slate-50 p-6 rounded-xl border border-slate-200 hover:border-blue-300 transition-colors">
                  <h3 className="text-slate-500 text-xs font-bold uppercase tracking-widest">{item}</h3>
                  <p className="text-3xl font-black text-slate-900 mt-2">{Math.floor(Math.random() * 100)}</p>
                </div>
              ))}
            </div>
            
            <div className="mt-8 p-6 bg-blue-50 rounded-xl border border-blue-100">
              <p className="text-blue-800 font-medium">
                This is the seed dashboard. You can add your CRUD operations (Create, Read, Update, Delete) here.
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    );
  }

  // --- VIEW: LOGIN FORM ---
  return (
    <div className="min-h-screen bg-slate-50 flex items-center justify-center px-4">
      <motion.div 
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        className="bg-white w-full max-w-md p-8 rounded-2xl shadow-2xl border border-slate-100"
      >
        <div className="text-center mb-8">
          <h2 className="text-2xl font-black text-slate-900 uppercase tracking-widest">Admin Access</h2>
          <p className="text-slate-500 text-sm mt-2">Enter your credentials to continue</p>
        </div>

        <form onSubmit={handleLogin} className="space-y-6">
          <div>
            <label className="block text-xs font-bold text-slate-600 uppercase tracking-wider mb-2">Username</label>
            <div className="relative">
              <User className="absolute left-3 top-3 text-slate-400" size={18} />
              <input 
                type="text" 
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                className="w-full pl-10 pr-4 py-2.5 bg-slate-50 border border-slate-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600 text-slate-900 font-medium transition-all"
                placeholder="Enter username"
              />
            </div>
          </div>

          <div>
            <label className="block text-xs font-bold text-slate-600 uppercase tracking-wider mb-2">Password</label>
            <div className="relative">
              <Lock className="absolute left-3 top-3 text-slate-400" size={18} />
              <input 
                type="password" 
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full pl-10 pr-4 py-2.5 bg-slate-50 border border-slate-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600 text-slate-900 font-medium transition-all"
                placeholder="Enter password"
              />
            </div>
          </div>

          {error && (
            <p className="text-red-500 text-xs font-bold bg-red-50 p-2 rounded text-center">
              {error}
            </p>
          )}

          <button 
            type="submit"
            className="w-full bg-slate-900 text-white py-3 rounded-full font-bold uppercase tracking-widest hover:bg-blue-600 transition-all shadow-lg hover:shadow-xl hover:-translate-y-0.5 flex justify-center items-center gap-2"
          >
            Login <ArrowRight size={16} />
          </button>
        </form>
      </motion.div>
    </div>
  );
}
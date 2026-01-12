import React, { useState } from "react";
import { motion } from "framer-motion";
import { User, Lock, ArrowRight, ShieldCheck } from "lucide-react";

export default function Login({ onLoginSuccess }) {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    // Validate credentials
    if (username === "admin" && password === "arah123") {
      onLoginSuccess(); // This triggers the parent to switch to Dashboard
    } else {
      setError("Invalid credentials. Try: admin / arah123");
    }
  };

  return (
    <div className="fixed inset-0 z-50 bg-slate-50 flex items-center justify-center px-4">
      <motion.div 
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        className="bg-white w-full max-w-md p-8 rounded-2xl shadow-2xl border border-slate-100"
      >
        <div className="text-center mb-8">
          <div className="inline-flex p-3 bg-blue-50 rounded-full mb-4 text-blue-600">
             <ShieldCheck size={32} />
          </div>
          <h2 className="text-2xl font-black text-slate-900 uppercase tracking-widest">Admin Access</h2>
          <p className="text-slate-500 text-sm mt-2">Enter your credentials to continue</p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <label className="block text-xs font-bold text-slate-600 uppercase tracking-wider mb-2">Username</label>
            <div className="relative">
              <User className="absolute left-3 top-3 text-slate-400" size={18} />
              <input 
                type="text" 
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                className="w-full pl-10 pr-4 py-2.5 bg-slate-50 border border-slate-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600 font-medium"
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
                className="w-full pl-10 pr-4 py-2.5 bg-slate-50 border border-slate-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600 font-medium"
                placeholder="Enter password"
              />
            </div>
          </div>
          {error && <p className="text-red-500 text-xs font-bold bg-red-50 p-2 rounded text-center">{error}</p>}
          <button type="submit" className="w-full bg-slate-900 text-white py-3 rounded-full font-bold uppercase tracking-widest hover:bg-blue-600 transition-all shadow-lg flex justify-center items-center gap-2">
            Login <ArrowRight size={16} />
          </button>
        </form>
      </motion.div>
    </div>
  );
}
import React, { useState } from "react";
import { User } from "lucide-react";

export default function Login({ onLogin }) {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    // In a real app, this would call an API
    if (username === "sanjay" && password === "arah123") {
      onLogin(true);
    } else {
      setError("Invalid Access. Try: sanjay / arah123");
    }
  };

  return (
    <div className="min-h-screen bg-slate-950 flex items-center justify-center p-6 relative overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-blue-900/20 via-slate-950 to-slate-950"></div>
      
      <div className="bg-white w-full max-w-md p-10 rounded-3xl shadow-2xl relative z-10">
        <div className="text-center mb-10">
          <div className="inline-flex justify-center items-center w-20 h-20 bg-blue-50 rounded-full mb-6 text-blue-600 border-4 border-white shadow-lg">
            <User size={32} />
          </div>
          <h2 className="text-3xl font-black text-slate-900">Admin Login</h2>
          <p className="text-slate-500 mt-2 text-sm">Welcome back, Sanjay</p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-6">
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
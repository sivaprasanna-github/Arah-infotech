import React, { useState, useEffect } from "react";
import { AnimatePresence } from "framer-motion";
import { Search, Bell, ShieldCheck, LogOut } from "lucide-react";

// --- IMPORTS FROM YOUR ADMIN FOLDER ---
// We go up one folder (..) then into the admin folder
import Login from "../admin/components/Login"; 
import Sidebar from "../admin/components/Sidebar";

// Imports for the Dashboard sub-pages
import Overview from "../admin/pages/Overview";
import Users from "../admin/pages/Users";
import Projects from "../admin/pages/Projects";
import Settings from "../admin/pages/Settings";

export default function Admin() {
  // 1. STATE MANAGEMENT
  // Starts as false -> shows Login screen
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  
  // Starts as 'overview' -> shows Overview Dashboard after login
  const [activeTab, setActiveTab] = useState("overview");

  // Enable scrolling when dashboard is active
  useEffect(() => {
    if (isLoggedIn) {
      document.body.style.overflow = "auto";
    }
  }, [isLoggedIn]);

  // Handler: Switches view from Login to Dashboard
  const handleLoginSuccess = () => {
    setIsLoggedIn(true);
  };

  // Handler: Switches view from Dashboard back to Login
  const handleLogout = () => {
    setIsLoggedIn(false);
    setActiveTab("overview");
  };

  // --- VIEW 1: LOGIN SCREEN ---
  if (!isLoggedIn) {
    return <Login onLoginSuccess={handleLoginSuccess} />;
  }

  // --- VIEW 2: DASHBOARD (OVERVIEW) ---
  return (
    <div className="fixed inset-0 z-50 bg-slate-50 flex font-sans text-slate-900 overflow-y-auto">
      
      {/* Sidebar Navigation */}
      <Sidebar 
        activeTab={activeTab} 
        setActiveTab={setActiveTab} 
        onLogout={handleLogout} 
      />

      {/* Mobile Header (Hidden on large screens) */}
      <div className="md:hidden fixed w-full bg-slate-900 text-white z-40 p-4 flex justify-between items-center shadow-md">
        <span className="font-bold flex items-center gap-2">
          <ShieldCheck className="text-blue-500"/> ADMIN
        </span>
        <button onClick={handleLogout}><LogOut size={20} /></button>
      </div>

      {/* Main Content Area */}
      <main className="flex-1 md:ml-64 p-6 md:p-12 pt-20 md:pt-12 w-full transition-all">
        
        {/* Top Header */}
        <header className="flex flex-col md:flex-row md:justify-between md:items-center mb-10 gap-4">
          <div>
            <h1 className="text-3xl font-black text-slate-900 capitalize tracking-tight">{activeTab}</h1>
            <p className="text-slate-500 text-sm mt-1">Welcome back, Administrator.</p>
          </div>
          <div className="flex gap-4">
             <button className="p-2.5 bg-white rounded-full border border-slate-200 text-slate-500 hover:text-blue-600 shadow-sm">
               <Search size={20}/>
             </button>
             <button className="p-2.5 bg-white rounded-full border border-slate-200 text-slate-500 hover:text-blue-600 shadow-sm">
               <Bell size={20}/>
             </button>
          </div>
        </header>

        {/* DYNAMIC CONTENT - Default is Overview */}
        <div className="max-w-6xl mx-auto">
          <AnimatePresence mode="wait">
            {activeTab === "overview" && <Overview key="overview" />}
            {activeTab === "users" && <Users key="users" />}
            {activeTab === "projects" && <Projects key="projects" />}
            {activeTab === "settings" && <Settings key="settings" />}
          </AnimatePresence>
        </div>
      </main>
    </div>
  );
}
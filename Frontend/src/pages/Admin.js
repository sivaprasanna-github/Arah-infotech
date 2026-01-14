import React, { useState } from "react";
import { 
  Menu, Bell, Search, ChevronDown, User, Settings as SettingsIcon, LogOut 
} from "lucide-react";

// Import Modular Components
import Login from "../admin/components/Login";
import Sidebar from "../admin/components/Sidebar";

// Import Pages
import Overview from "../admin/pages/Overview";
import ContactMessages from "../admin/pages/ContactMessages"; 
import JobApplications from "../admin/pages/JobApplications"; // IMPORT NEW COMPONENT
import Settings from "../admin/pages/Settings";

// Note: You can keep Users.js for "Interviews" or remove it if unused
import Users from "../admin/pages/JobApplications"; 

export default function Admin() {
  // --- STATE ---
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [activeTab, setActiveTab] = useState("Dashboard");
  const [showProfileMenu, setShowProfileMenu] = useState(false);

  // --- LOGIC ---
  const handleLogin = (status) => {
    setIsLoggedIn(status);
  };

  const handleLogout = () => {
    setIsLoggedIn(false);
    setShowProfileMenu(false);
    setActiveTab("Dashboard");
  };

  // --- CONTENT SWITCHER ---
  const renderContent = () => {
    switch (activeTab) {
      case "Dashboard": return <Overview />;
      
      // Mapped "Contact Messages" to its component
      case "Contact Messages": return <ContactMessages />; 
      
      // Mapped "Candidates" to the new JobApplications component
      case "Candidates": return <JobApplications />; 

      // Mapped "Interviews" to Users (or create a specific Interview component later)
      case "Interviews": return <Users />; 
      
      case "Settings": return <Settings />;
      
      default: return <Overview />; 
    }
  };

  // --- RENDER ---
  if (!isLoggedIn) {
    return <Login onLogin={handleLogin} />;
  }

  return (
    <div className="flex min-h-screen bg-slate-50 font-sans pt-24 pb-10">
      
      {/* SIDEBAR COMPONENT */}
      <Sidebar 
        activeTab={activeTab} 
        setActiveTab={setActiveTab} 
        onLogout={handleLogout} 
      />

      {/* MAIN CONTENT AREA */}
      <main className="flex-1 px-6 md:px-8">
        
        {/* --- TOP HEADER --- */}
        <div className="flex justify-between items-center mb-8 bg-white p-4 rounded-2xl shadow-sm border border-slate-100 relative z-20">
            
            {/* Left: Mobile Menu Trigger & Title */}
            <div className="flex items-center gap-4">
              <button className="md:hidden text-slate-500 hover:bg-slate-50 p-2 rounded-lg">
                <Menu size={20} />
              </button>
              <h2 className="hidden md:block text-lg font-bold text-slate-700">{activeTab}</h2>
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
                
                {/* --- PROFILE DROPDOWN --- */}
                <div className="relative">
                  <button 
                    onClick={() => setShowProfileMenu(!showProfileMenu)}
                    className="flex items-center gap-3 cursor-pointer hover:bg-slate-50 p-1.5 pr-3 rounded-full transition-colors border border-transparent hover:border-slate-100 focus:outline-none"
                  >
                      <div className="w-9 h-9 bg-slate-100 rounded-full flex items-center justify-center border border-slate-200 text-slate-600">
                        <User size={20} />
                      </div>
                      
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
                        <button 
                          onClick={() => { setActiveTab("Settings"); setShowProfileMenu(false); }}
                          className="w-full text-left flex items-center gap-2 px-3 py-2 text-sm text-slate-600 hover:bg-slate-50 rounded-lg"
                        >
                          <SettingsIcon size={16} /> Settings
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
              </div>
            </div>
        </div>

        {/* Dynamic Content Render */}
        <div className="animate-in fade-in slide-in-from-bottom-4 duration-500">
          {renderContent()}
        </div>

      </main>
    </div>
  );
}
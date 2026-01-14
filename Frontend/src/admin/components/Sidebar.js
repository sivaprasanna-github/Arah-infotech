import React from "react";
import { 
  LayoutDashboard, Users, MessageSquare, User, 
  Building2, FileText, LogOut 
} from "lucide-react";

export default function Sidebar({ activeTab, setActiveTab, onLogout }) {
  const menuItems = [
    { name: "Dashboard", icon: LayoutDashboard },
    { name: "Interviews", icon: Users },
    { name: "Contact Messages", icon: MessageSquare }, // Renamed here
    { name: "Candidates", icon: User },
    { name: "Jobs & Companies", icon: Building2 },
    { name: "Requests", icon: FileText },
  ];

  return (
    <aside className="w-64 bg-white border-r border-slate-200 hidden md:flex flex-col ml-6 rounded-2xl shadow-sm h-[calc(100vh-8rem)] sticky top-24">
      <div className="p-6 border-b border-slate-100 flex items-center gap-3">
        <img src="https://arahinfotech.net/assets/img/logo1.png" width="40" height="40" alt="logo" />
        <h2 className="text-lg font-bold text-slate-800 tracking-tight">Arah Infotech</h2>
      </div>

      <nav className="flex-1 p-4 space-y-2">
        {menuItems.map((item) => (
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
          onClick={onLogout}
          className="w-full flex items-center gap-3 px-4 py-3 text-sm font-bold text-red-500 hover:bg-red-50 rounded-lg transition-colors"
        >
          <LogOut size={18} /> Logout
        </button>
      </div>
    </aside>
  );
}
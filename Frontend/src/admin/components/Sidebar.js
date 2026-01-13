import React from "react";
import { LogOut, LayoutDashboard, Users, FolderKanban, Settings, ShieldCheck } from "lucide-react";

export default function Sidebar({ activeTab, setActiveTab, onLogout }) {
  const menuItems = [
    { id: "overview", label: "Overview", icon: LayoutDashboard },
    { id: "users", label: "Users", icon: Users },
    { id: "projects", label: "Projects", icon: FolderKanban },
    { id: "settings", label: "Settings", icon: Settings },
  ];

  return (
    <aside className="w-64 bg-slate-900 text-white fixed h-full flex flex-col justify-between z-30 hidden md:flex shadow-2xl">
      <div>
        <div className="p-8 flex items-center gap-3">
          <ShieldCheck className="text-blue-500" size={28} />
          <span className="text-xl font-black tracking-tight">ADMIN<span className="text-blue-500">.</span></span>
        </div>
        <nav className="px-4 space-y-2">
          {menuItems.map((item) => (
            <button
              key={item.id}
              onClick={() => setActiveTab(item.id)}
              className={`w-full flex items-center gap-3 px-4 py-3 rounded-xl transition-all font-medium text-sm ${
                activeTab === item.id ? "bg-blue-600 text-white shadow-lg translate-x-1" : "text-slate-400 hover:bg-slate-800 hover:text-white"
              }`}
            >
              <item.icon size={20} /> {item.label}
            </button>
          ))}
        </nav>
      </div>
      <div className="p-4 border-t border-slate-800">
        <button onClick={onLogout} className="w-full flex items-center gap-3 px-4 py-3 rounded-xl text-red-400 hover:bg-red-500/10 transition-colors font-medium text-sm">
          <LogOut size={20} /> Logout
        </button>
      </div>
    </aside>
  );
}
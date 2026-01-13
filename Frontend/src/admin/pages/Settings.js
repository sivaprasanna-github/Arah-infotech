import React from "react";
import { motion } from "framer-motion";

export default function Settings() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      className="bg-white p-8 rounded-2xl shadow-sm border border-slate-100 max-w-3xl"
    >
      <h3 className="text-xl font-bold text-slate-900 mb-6">General Settings</h3>
      <form className="space-y-6">
        <div className="grid md:grid-cols-2 gap-6">
          <div>
            <label className="block text-xs font-bold text-slate-500 uppercase mb-2">Site Name</label>
            <input type="text" defaultValue="Admin Panel" className="w-full p-3 bg-slate-50 rounded-lg border border-slate-200 focus:border-blue-500 outline-none" />
          </div>
          <div>
            <label className="block text-xs font-bold text-slate-500 uppercase mb-2">Support Email</label>
            <input type="email" defaultValue="admin@arah.com" className="w-full p-3 bg-slate-50 rounded-lg border border-slate-200 focus:border-blue-500 outline-none" />
          </div>
        </div>
        <div className="pt-4 border-t border-slate-100">
          <button type="button" className="bg-slate-900 text-white px-8 py-3 rounded-xl font-bold hover:bg-slate-800 transition-all">Save Changes</button>
        </div>
      </form>
    </motion.div>
  );
}
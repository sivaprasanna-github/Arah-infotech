import React from "react";
import { motion } from "framer-motion";
import { FolderKanban, Calendar } from "lucide-react";

export default function Projects() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      className="grid md:grid-cols-2 gap-6"
    >
      {[1, 2, 3, 4].map((i) => (
        <div key={i} className="bg-white p-6 rounded-2xl border border-slate-200 hover:border-blue-400 hover:shadow-lg transition-all group cursor-pointer relative overflow-hidden">
          <div className="flex justify-between items-start mb-4">
            <div className="p-2 bg-blue-50 rounded-lg text-blue-600 group-hover:bg-blue-600 group-hover:text-white transition-colors">
              <FolderKanban size={20} />
            </div>
            <span className="text-[10px] font-bold uppercase tracking-wider bg-slate-100 px-2 py-1 rounded text-slate-500">In Progress</span>
          </div>
          <h3 className="text-lg font-bold text-slate-900 group-hover:text-blue-600 transition-colors">System Upgrade Phase {i}</h3>
          <p className="text-slate-500 text-sm mt-2">Updating the main backend infrastructure to support new API endpoints.</p>
          <div className="mt-6 pt-4 border-t border-slate-100 flex justify-between items-center text-xs font-bold text-slate-400">
            <div className="flex items-center gap-1"><Calendar size={14} /> <span>Oct {10 + i}, 2024</span></div>
          </div>
        </div>
      ))}
    </motion.div>
  );
}
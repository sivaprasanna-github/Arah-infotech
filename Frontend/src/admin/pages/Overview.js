import React from "react";
import { motion } from "framer-motion";

export default function Overview() {
  const stats = [
    { title: "Total Revenue", val: "$124,500", color: "text-blue-600", bg: "bg-blue-50" },
    { title: "Active Users", val: "1,240", color: "text-emerald-600", bg: "bg-emerald-50" },
    { title: "Pending Projects", val: "12", color: "text-orange-600", bg: "bg-orange-50" }
  ];

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      className="space-y-6"
    >
      <div className="grid md:grid-cols-3 gap-6">
        {stats.map((item, i) => (
          <div key={i} className="bg-white p-6 rounded-2xl shadow-sm border border-slate-100 hover:shadow-lg transition-shadow duration-300">
            <h3 className="text-slate-500 text-xs font-bold uppercase tracking-widest">{item.title}</h3>
            <div className="flex justify-between items-end mt-2">
              <p className={`text-3xl font-black ${item.color}`}>{item.val}</p>
              <div className={`h-2 w-2 rounded-full ${item.bg}`}></div>
            </div>
          </div>
        ))}
      </div>
      <div className="bg-white p-8 rounded-2xl shadow-sm border border-slate-100 h-96 flex flex-col items-center justify-center text-slate-400 border-dashed border-2">
        <p className="font-medium">Analytics Chart Area</p>
      </div>
    </motion.div>
  );
}
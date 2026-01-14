import React, { useEffect, useState } from "react";
import { 
  Briefcase, User, Calendar, ExternalLink, 
  MapPin, GraduationCap, Clock, X, Loader2, AlertCircle, Eye 
} from "lucide-react";

export default function JobApplications() {
  const [applications, setApplications] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const [selectedApp, setSelectedApp] = useState(null); // For Modal

  // Matches backend route: /api/career
  const API_URL = "http://localhost:5000/api/career"; 

  useEffect(() => {
    fetchApplications();
  }, []);

  const fetchApplications = async () => {
    setLoading(true);
    try {
      const response = await fetch(API_URL);
      const result = await response.json();

      if (result.success) {
        setApplications(result.data);
      } else {
        setError("Failed to load applications.");
      }
    } catch (err) {
      setError("Error connecting to server. Is Backend Running?");
    } finally {
      setLoading(false);
    }
  };

  if (loading) return <div className="flex h-96 items-center justify-center"><Loader2 className="animate-spin text-blue-600" size={40} /></div>;
  
  if (error) return (
    <div className="bg-red-50 p-6 rounded-xl border border-red-100 flex items-center gap-3 text-red-600">
      <AlertCircle size={24} /> <span className="font-bold">{error}</span>
    </div>
  );

  return (
    <div className="bg-white rounded-2xl shadow-sm border border-slate-100 overflow-hidden min-h-[500px]">
      <div className="p-6 border-b border-slate-100 flex justify-between items-center bg-slate-50/50">
        <div>
            <h3 className="font-bold text-lg text-slate-800">Job Applications</h3>
            <p className="text-sm text-slate-500">Talent pool from the Careers page.</p>
        </div>
        <button onClick={fetchApplications} className="text-sm text-blue-600 font-bold hover:underline">Refresh</button>
      </div>

      <div className="overflow-x-auto">
        <table className="w-full text-left text-sm text-slate-600">
          <thead className="bg-slate-50 uppercase text-xs font-bold text-slate-500">
            <tr>
              <th className="px-6 py-4">Candidate</th>
              <th className="px-6 py-4">Role Applied</th>
              <th className="px-6 py-4">Experience</th>
              <th className="px-6 py-4">Date</th>
              <th className="px-6 py-4 text-right">Action</th>
            </tr>
          </thead>
          <tbody>
            {applications.length === 0 ? (
                <tr>
                    <td colSpan="5" className="px-6 py-12 text-center text-slate-400 italic">No applications received yet.</td>
                </tr>
            ) : (
                applications.map((app) => (
                <tr key={app._id} className="border-b border-slate-50 hover:bg-blue-50/30 transition-colors">
                    <td className="px-6 py-4">
                        <div className="flex items-center gap-3">
                            <div className="w-8 h-8 bg-blue-100 text-blue-600 rounded-full flex items-center justify-center font-bold">
                                {app.firstName.charAt(0)}
                            </div>
                            <div>
                                <p className="font-bold text-slate-900">{app.firstName} {app.lastName}</p>
                                <p className="text-xs text-slate-500">{app.email}</p>
                            </div>
                        </div>
                    </td>
                    <td className="px-6 py-4 font-medium text-slate-700">{app.jobTitle}</td>
                    <td className="px-6 py-4">{app.experience} Years</td>
                    <td className="px-6 py-4 text-xs font-mono">{new Date(app.date).toLocaleDateString()}</td>
                    <td className="px-6 py-4 text-right">
                        <button 
                            onClick={() => setSelectedApp(app)}
                            className="bg-blue-50 text-blue-600 hover:bg-blue-600 hover:text-white p-2 rounded-lg transition-colors flex items-center gap-1 ml-auto text-xs font-bold"
                        >
                            <Eye size={16} /> View
                        </button>
                    </td>
                </tr>
                ))
            )}
          </tbody>
        </table>
      </div>

      {/* --- DETAIL MODAL --- */}
      {selectedApp && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50 backdrop-blur-sm" onClick={() => setSelectedApp(null)}>
            <div className="bg-white w-full max-w-2xl rounded-2xl shadow-2xl overflow-hidden max-h-[90vh] overflow-y-auto" onClick={e => e.stopPropagation()}>
                
                {/* Header */}
                <div className="bg-slate-900 text-white p-6 flex justify-between items-start">
                    <div>
                        <span className="bg-cyan-500/20 text-cyan-400 border border-cyan-500/30 px-2 py-1 rounded text-xs font-bold uppercase tracking-wider mb-2 inline-block">
                            {selectedApp.jobTitle}
                        </span>
                        <h2 className="text-2xl font-bold">{selectedApp.firstName} {selectedApp.lastName}</h2>
                        <div className="flex flex-wrap gap-4 mt-2 text-sm text-slate-400">
                             <span className="flex items-center gap-1"><MapPin size={14} /> {selectedApp.address}</span>
                             <span className="flex items-center gap-1"><Clock size={14} /> NP: {selectedApp.noticePeriod}</span>
                        </div>
                    </div>
                    <button onClick={() => setSelectedApp(null)} className="text-white/50 hover:text-white"><X size={24} /></button>
                </div>

                {/* Body */}
                <div className="p-6 space-y-6">
                    
                    {/* Contact Info */}
                    <div className="grid grid-cols-2 gap-4 bg-slate-50 p-4 rounded-xl border border-slate-100">
                        <div>
                            <p className="text-xs font-bold text-slate-400 uppercase">Email</p>
                            <p className="font-medium text-slate-800">{selectedApp.email}</p>
                        </div>
                        <div>
                            <p className="text-xs font-bold text-slate-400 uppercase">Mobile</p>
                            <p className="font-medium text-slate-800">{selectedApp.mobile}</p>
                        </div>
                    </div>

                    {/* Education */}
                    <div>
                        <h4 className="flex items-center gap-2 font-bold text-slate-800 mb-3 pb-2 border-b border-slate-100">
                            <GraduationCap size={18} className="text-blue-500" /> Education History
                        </h4>
                        <div className="space-y-3 text-sm">
                            <div className="flex justify-between">
                                <span className="text-slate-500">Graduation:</span>
                                <span className="font-semibold text-slate-900">{selectedApp.graduation}</span>
                            </div>
                            <div className="flex justify-between">
                                <span className="text-slate-500">12th / Diploma:</span>
                                <span className="font-semibold text-slate-900">{selectedApp.higherSecondary}</span>
                            </div>
                            <div className="flex justify-between">
                                <span className="text-slate-500">10th Standard:</span>
                                <span className="font-semibold text-slate-900">{selectedApp.secondary}</span>
                            </div>
                        </div>
                    </div>

                    {/* Links */}
                    <div>
                        <h4 className="flex items-center gap-2 font-bold text-slate-800 mb-3 pb-2 border-b border-slate-100">
                            <Briefcase size={18} className="text-purple-500" /> Professional Links
                        </h4>
                        <div className="flex gap-4">
                            {selectedApp.linkedin && (
                                <a href={selectedApp.linkedin} target="_blank" rel="noreferrer" className="flex items-center gap-2 text-blue-600 bg-blue-50 px-4 py-2 rounded-lg font-bold text-sm hover:bg-blue-100">
                                    <ExternalLink size={16} /> LinkedIn
                                </a>
                            )}
                            {selectedApp.github && (
                                <a href={selectedApp.github} target="_blank" rel="noreferrer" className="flex items-center gap-2 text-slate-700 bg-slate-100 px-4 py-2 rounded-lg font-bold text-sm hover:bg-slate-200">
                                    <ExternalLink size={16} /> GitHub
                                </a>
                            )}
                            {!selectedApp.linkedin && !selectedApp.github && <p className="text-slate-400 text-sm italic">No links provided</p>}
                        </div>
                    </div>

                </div>
            </div>
        </div>
      )}

    </div>
  );
}
import React, { useEffect, useState } from "react";
import { Mail, Calendar, User, AlertCircle, Loader2 } from "lucide-react";

export default function ContactMessages() {
  const [messages, setMessages] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  // Update this to your deployed backend URL in production
  const API_URL = "http://localhost:5000/api/contact"; 

  useEffect(() => {
    fetchMessages();
  }, []);

  const fetchMessages = async () => {
    setLoading(true);
    try {
      const response = await fetch(API_URL);
      const result = await response.json();

      if (result.success) {
        setMessages(result.data);
      } else {
        setError("Failed to load messages.");
      }
    } catch (err) {
      setError("Error connecting to server. Is Backend Running on Port 5000?");
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  if (loading) {
    return (
      <div className="flex h-96 items-center justify-center">
        <Loader2 className="animate-spin text-blue-600" size={40} />
      </div>
    );
  }

  if (error) {
    return (
      <div className="bg-red-50 p-6 rounded-xl border border-red-100 flex items-center gap-3 text-red-600">
        <AlertCircle size={24} />
        <span className="font-bold">{error}</span>
        <button onClick={fetchMessages} className="ml-auto underline text-sm">Retry</button>
      </div>
    );
  }

  return (
    <div className="bg-white p-8 rounded-2xl shadow-sm border border-slate-100 min-h-[500px]">
      <div className="flex justify-between items-center mb-6">
        <div>
            <h2 className="text-2xl font-bold text-slate-800">Contact Messages</h2>
            <p className="text-slate-500 text-sm">Inquiries from the website contact form.</p>
        </div>
        <button onClick={fetchMessages} className="text-blue-600 text-sm font-bold hover:underline">
            Refresh List
        </button>
      </div>
      
      {messages.length === 0 ? (
        <div className="mt-8 border-2 border-dashed border-slate-200 rounded-xl p-12 flex flex-col items-center justify-center text-center">
            <Mail className="text-slate-300 mb-3" size={48} />
            <p className="text-slate-500 font-medium">No messages found yet.</p>
        </div>
      ) : (
        <div className="grid gap-4 max-h-[600px] overflow-y-auto pr-2">
            {messages.map((msg) => (
                <div key={msg._id} className="p-5 border border-slate-100 rounded-xl hover:shadow-md transition-shadow bg-slate-50/50 group">
                    <div className="flex flex-col md:flex-row justify-between md:items-start gap-4 mb-3">
                        <div className="flex items-start gap-3">
                            <div className="w-10 h-10 bg-blue-100 text-blue-600 rounded-full flex items-center justify-center shrink-0">
                                <User size={20} />
                            </div>
                            <div>
                                <h3 className="font-bold text-slate-800 text-lg">{msg.name}</h3>
                                <p className="text-slate-500 text-sm flex items-center gap-1">
                                    <Mail size={12} /> {msg.email}
                                </p>
                            </div>
                        </div>
                        <div className="flex items-center gap-2 text-xs font-bold text-slate-400 bg-white px-2 py-1 rounded border border-slate-100">
                            <Calendar size={12} />
                            {new Date(msg.date).toLocaleDateString()} • {new Date(msg.date).toLocaleTimeString()}
                        </div>
                    </div>
                    
                    <div className="pl-13 md:pl-14 border-t border-slate-100 pt-3 mt-2">
                        <h4 className="text-sm font-bold text-slate-700 uppercase tracking-wide mb-1">
                            {msg.subject || "General Inquiry"}
                        </h4>
                        <div className="text-slate-600 text-sm leading-relaxed whitespace-pre-wrap font-mono bg-white p-3 rounded-lg border border-slate-100 mt-2">
                            {msg.message}
                        </div>
                    </div>
                </div>
            ))}
        </div>
      )}
    </div>
  );
}
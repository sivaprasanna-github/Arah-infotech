import React, { useState } from "react";
import { Mail, MapPin, Phone, CheckCircle, ArrowRight } from "lucide-react";
import { motion } from "framer-motion";

export default function Contact() {
  const [formStatus, setFormStatus] = useState("idle"); // idle, submitting, success

  const handleSubmit = (e) => {
    e.preventDefault();
    setFormStatus("submitting");
    // Simulate network request
    setTimeout(() => {
      setFormStatus("success");
    }, 1500);
  };

  return (
    <div className="pt-28 pb-20 px-6 bg-slate-950 min-h-screen text-white selection:bg-cyan-500/30">
      <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-16">
        
        {/* LEFT SIDE: Contact Information */}
        <motion.div 
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
        >
          <span className="text-cyan-400 font-bold tracking-widest uppercase text-sm mb-2 block">
            Get in Touch
          </span>
          <h1 className="text-5xl md:text-6xl font-black mb-6 leading-tight">
            Let's Build the <br/>
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-600">Future Together.</span>
          </h1>
          <p className="text-xl text-slate-400 mb-12 max-w-lg leading-relaxed">
            Ready to start your project? Fill out the form or visit our Madhapur HQ to discuss how we can engineer your vision.
          </p>

          <div className="space-y-8">
            <div className="flex items-start gap-6 group">
              <div className="p-4 bg-slate-900 border border-slate-800 rounded-2xl text-cyan-400 group-hover:border-cyan-500/50 transition-colors">
                <MapPin size={24} />
              </div>
              <div>
                <h3 className="text-xl font-bold mb-1 text-white">Visit our Office</h3>
                <p className="text-slate-400 leading-relaxed">
                  Ayyappa Society, Madhapur,<br />
                  Hyderabad, Telangana 500081
                </p>
              </div>
            </div>

            <div className="flex items-start gap-6 group">
              <div className="p-4 bg-slate-900 border border-slate-800 rounded-2xl text-cyan-400 group-hover:border-cyan-500/50 transition-colors">
                <Mail size={24} />
              </div>
              <div>
                <h3 className="text-xl font-bold mb-1 text-white">Email Us</h3>
                <p className="text-slate-400">ops@arahinfotech.net</p>
                <p className="text-slate-500 text-sm">Response within 24 hours.</p>
              </div>
            </div>

            <div className="flex items-start gap-6 group">
              <div className="p-4 bg-slate-900 border border-slate-800 rounded-2xl text-cyan-400 group-hover:border-cyan-500/50 transition-colors">
                <Phone size={24} />
              </div>
              <div>
                <h3 className="text-xl font-bold mb-1 text-white">Call Us</h3>
                <p className="text-slate-400">+91 89198 01095</p>
                <p className="text-slate-500 text-sm">Mon-Fri, 9am - 6pm IST</p>
              </div>
            </div>
          </div>
        </motion.div>

        {/* RIGHT SIDE: Project Inquiry Form */}
        <motion.div 
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="bg-slate-900/50 backdrop-blur-sm p-8 md:p-10 rounded-[2rem] border border-white/10 shadow-2xl relative overflow-hidden"
        >
          {/* Decorative background blur */}
          <div className="absolute top-0 right-0 w-64 h-64 bg-cyan-500/10 rounded-full blur-3xl -mr-20 -mt-20 pointer-events-none"></div>

          {formStatus === "success" ? (
            <div className="h-full flex flex-col items-center justify-center text-center py-20">
              <div className="w-20 h-20 bg-green-500/20 rounded-full flex items-center justify-center mb-6">
                <CheckCircle className="text-green-500 w-10 h-10" />
              </div>
              <h3 className="text-3xl font-bold mb-2">Message Sent!</h3>
              <p className="text-slate-400 max-w-xs">
                Thank you for contacting Arah Infotech. Our engineering team will review your requirements and get back to you shortly.
              </p>
              <button 
                onClick={() => setFormStatus("idle")} 
                className="mt-8 text-cyan-400 font-bold hover:text-white transition-colors"
              >
                Send another message
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-6 relative z-10">
              <h3 className="text-2xl font-bold mb-6">Tell us about your project</h3>
              
              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-xs font-bold uppercase tracking-wider text-slate-500">Your Name</label>
                  <input 
                    required 
                    type="text" 
                    className="w-full bg-slate-950 border border-slate-800 rounded-xl p-4 text-white focus:border-cyan-500 focus:ring-1 focus:ring-cyan-500 focus:outline-none transition-all" 
                    placeholder="John Doe" 
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-xs font-bold uppercase tracking-wider text-slate-500">Company Name</label>
                  <input 
                    type="text" 
                    className="w-full bg-slate-950 border border-slate-800 rounded-xl p-4 text-white focus:border-cyan-500 focus:ring-1 focus:ring-cyan-500 focus:outline-none transition-all" 
                    placeholder="Tech Corp Ltd." 
                  />
                </div>
              </div>

              <div className="space-y-2">
                <label className="text-xs font-bold uppercase tracking-wider text-slate-500">Email Address</label>
                <input 
                  required 
                  type="email" 
                  className="w-full bg-slate-950 border border-slate-800 rounded-xl p-4 text-white focus:border-cyan-500 focus:ring-1 focus:ring-cyan-500 focus:outline-none transition-all" 
                  placeholder="john@example.com" 
                />
              </div>

              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-xs font-bold uppercase tracking-wider text-slate-500">Service Type</label>
                  <div className="relative">
                    <select className="w-full bg-slate-950 border border-slate-800 rounded-xl p-4 text-white focus:border-cyan-500 focus:ring-1 focus:ring-cyan-500 focus:outline-none appearance-none transition-all cursor-pointer">
                      <option>Full-Stack Web Dev</option>
                      <option>Mobile App (iOS/Android)</option>
                      <option>AI / Machine Learning</option>
                      <option>Cyber Security Audit</option>
                      <option>Cloud Infrastructure</option>
                    </select>
                    <div className="absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none text-slate-500">▼</div>
                  </div>
                </div>
                <div className="space-y-2">
                  <label className="text-xs font-bold uppercase tracking-wider text-slate-500">Project Budget</label>
                  <div className="relative">
                    <select className="w-full bg-slate-950 border border-slate-800 rounded-xl p-4 text-white focus:border-cyan-500 focus:ring-1 focus:ring-cyan-500 focus:outline-none appearance-none transition-all cursor-pointer">
                      <option>$1,000 - $5,000</option>
                      <option>$5,000 - $10,000</option>
                      <option>$10,000 - $25,000</option>
                      <option>$25,000+</option>
                      <option>Undisclosed</option>
                    </select>
                    <div className="absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none text-slate-500">▼</div>
                  </div>
                </div>
              </div>

              <div className="space-y-2">
                <label className="text-xs font-bold uppercase tracking-wider text-slate-500">Project Details</label>
                <textarea 
                  rows="4" 
                  className="w-full bg-slate-950 border border-slate-800 rounded-xl p-4 text-white focus:border-cyan-500 focus:ring-1 focus:ring-cyan-500 focus:outline-none transition-all resize-none" 
                  placeholder="Briefly describe your project goals, timeline, and current challenges..."
                ></textarea>
              </div>

              <button 
                type="submit" 
                disabled={formStatus === "submitting"}
                className="w-full bg-gradient-to-r from-blue-600 to-cyan-500 hover:from-blue-500 hover:to-cyan-400 text-white font-bold py-4 rounded-xl transition-all shadow-lg hover:shadow-cyan-500/25 flex justify-center items-center gap-2 disabled:opacity-70 disabled:cursor-not-allowed"
              >
                {formStatus === "submitting" ? (
                  "Sending Request..." 
                ) : (
                  <>Send Proposal Request <ArrowRight size={18} /></>
                )}
              </button>
            </form>
          )}
        </motion.div>

      </div>
    </div>
  );
}
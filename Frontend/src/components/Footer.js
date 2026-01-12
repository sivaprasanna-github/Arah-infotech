import React from "react";
import { motion } from "framer-motion";
import { 
  Mail, Phone, MapPin, Linkedin, 
  Twitter, Github, ChevronRight, ArrowUp,
  Cpu, ShieldCheck, Globe
} from "lucide-react";

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const footerLinks = {
    useful: ["Home", "About", "Services", "Careers", "Contact"],
    services: [
      "Web Development", 
      "App Development", 
      "Artificial Intelligence", 
      "Machine Learning", 
      "Cloud Security"
    ],
    tech: ["React / Next.js", "Python / AI", "Node.js", "AWS Cloud", "DevOps"]
  };

  return (
    <footer className="bg-slate-950 text-white pt-20 pb-10 px-6 border-t border-white/5 relative overflow-hidden">
      {/* Decorative Background Glow */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-full h-1 bg-cyan-500/20 blur-[100px]" />

      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          
          {/* 1. BRAND & MISSION */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <div className="flex items-center gap-2">
              <img src="https://arahinfotech.net/assets/img/logo1.png" width="40" height="40" alt="logo" />
              <h2 className="text-2xl font-black tracking-tighter">ARAH <span className="text-blue-500">INFOTECH</span></h2>
            </div>
            <p className="text-slate-400 text-sm leading-relaxed">
              Engineering the future of enterprise intelligence. Based in the heart of Hyderabad's tech hub, we build software that scales with your ambition.
            </p>
            <div className="flex gap-4">
              {[Linkedin, Twitter, Github].map((Icon, i) => (
                <a key={i} href="#" className="p-2 bg-slate-900 rounded-lg hover:bg-blue-600 transition-colors">
                  <Icon size={18} />
                </a>
              ))}
            </div>
          </motion.div>

          {/* 2. SERVICES LIST */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
          >
            <h3 className="text-sm font-bold uppercase tracking-widest text-cyan-500 mb-6">Expertise</h3>
            <ul className="space-y-4">
              {footerLinks.services.map((item, i) => (
                <li key={i} className="flex items-center gap-2 text-slate-400 text-sm hover:text-white transition-colors cursor-pointer group">
                  <ChevronRight size={14} className="group-hover:translate-x-1 transition-transform" /> {item}
                </li>
              ))}
            </ul>
          </motion.div>

          {/* 3. TECH STACK (Software Relatable Data) */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
          >
            <h3 className="text-sm font-bold uppercase tracking-widest text-cyan-500 mb-6">Our Stack</h3>
            <div className="flex flex-wrap gap-2">
              {footerLinks.tech.map((item, i) => (
                <span key={i} className="px-3 py-1 bg-slate-900 border border-white/5 rounded-md text-[10px] font-bold text-slate-500 uppercase">
                  {item}
                </span>
              ))}
            </div>
            <div className="mt-8 space-y-3">
              <div className="flex items-center gap-3 text-xs text-slate-400">
                <ShieldCheck size={16} className="text-emerald-500" /> ISO 2026 Standards
              </div>
              <div className="flex items-center gap-3 text-xs text-slate-400">
                <Cpu size={16} className="text-blue-500" /> AI-Driven Architecture
              </div>
            </div>
          </motion.div>

          {/* 4. OFFICIAL CONTACT & LOCATION */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
            className="space-y-6"
          >
            <h3 className="text-sm font-bold uppercase tracking-widest text-cyan-500 mb-6">Address</h3>
            <div className="space-y-4">
              <div className="flex gap-4">
                <MapPin className="text-blue-500 shrink-0" size={20} />
                <p className="text-xs text-slate-400 leading-relaxed">
                  Arah Infotech Pvt Ltd, 2nd Floor, Spline Arcade, <br/>
                  Ayyappa Society Main Rd, Sri Sai Nagar, Madhapur, <br/>
                  Hyderabad, Telangana-500081
                </p>
              </div>
              <div className="flex gap-4">
                <Phone className="text-blue-500 shrink-0" size={20} />
                <div className="text-xs text-slate-400">
                  <p>+91 89198 01095</p>
                  <p>+91 63042 44117</p>
                </div>
              </div>
              <div className="flex gap-4">
                <Mail className="text-blue-500 shrink-0" size={20} />
                <p className="text-xs text-slate-400">ops@arahinfotech.net</p>
              </div>
            </div>
          </motion.div>

        </div>

        {/* BOTTOM SECTION */}
        <div className="pt-10 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="text-center md:text-left">
            <p className="text-[10px] text-slate-500 uppercase tracking-widest font-bold">
              © Copyright 2026 Arah Infotech. All Rights Reserved.
            </p>
            <div className="flex gap-4 mt-2">
              <span className="text-[10px] text-slate-600 hover:text-white cursor-pointer">Privacy Policy</span>
              <span className="text-[10px] text-slate-600 hover:text-white cursor-pointer">Terms of Service</span>
            </div>
          </div>

          {/* Back to Top */}
          <motion.button 
            whileHover={{ y: -5 }}
            onClick={scrollToTop}
            className="bg-slate-900 p-4 rounded-2xl border border-white/10 hover:border-cyan-500 transition-colors group"
          >
            <ArrowUp size={20} className="text-cyan-500 group-hover:animate-bounce" />
          </motion.button>
          
          <div className="flex items-center gap-2">
            <Globe size={14} className="text-slate-500" />
            <span className="text-[10px] font-bold text-slate-500 tracking-widest uppercase">Hybrid Cloud Enabled</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
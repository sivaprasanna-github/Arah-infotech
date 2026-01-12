import React from "react";
import { Link } from "react-router-dom"; // IMPORT LINK
import { motion } from "framer-motion";
import { 
  Cpu, Globe, ShieldCheck, Layers, ArrowRight, CheckCircle2 
} from "lucide-react";
import hero from "../assets/hero.jpg"; 

export default function Home() {
  return (
    <div className="bg-slate-950 text-white selection:bg-cyan-500/30">
      
      {/* 1. HERO SECTION */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        <motion.img
          initial={{ scale: 1.1 }}
          animate={{ scale: 1 }}
          transition={{ duration: 10, repeat: Infinity, repeatType: "reverse" }}
          src={hero}
          alt="Arah Infotech Hero"
          className="absolute inset-0 w-full h-full object-cover opacity-40"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-slate-950/20 via-slate-950/80 to-slate-950" />
        
        <div className="relative z-10 text-center px-6 max-w-5xl">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <span className="px-4 py-2 rounded-full border border-cyan-500/30 bg-cyan-500/10 text-cyan-400 text-sm font-medium mb-6 inline-block">
              AI-Powered Software Excellence in Madhapur
            </span>
            <h1 className="text-6xl md:text-8xl font-extrabold mb-6 tracking-tight">
              We Code the <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-600">Future.</span>
            </h1>
            <p className="text-xl text-slate-400 mb-10 max-w-2xl mx-auto">
              Arah Infotech delivers bespoke AI solutions and high-performance web systems for modern enterprises.
            </p>
            
            {/* UPDATED BUTTONS WITH LINKS */}
            <div className="flex flex-col md:flex-row gap-4 justify-center">
              <Link 
                to="/contact" 
                className="bg-cyan-500 hover:bg-cyan-400 text-slate-950 px-8 py-4 rounded-full font-bold transition-all flex items-center justify-center gap-2 group"
              >
                Start Your Project <ArrowRight className="group-hover:translate-x-1 transition-transform" />
              </Link>
              
              <Link 
                to="/work" 
                className="px-8 py-4 rounded-full border border-slate-700 hover:bg-slate-800 transition-all font-bold flex items-center justify-center"
              >
                View Case Studies
              </Link>
            </div>

          </motion.div>
        </div>
      </section>

      {/* 2. LIVE STATS SECTION */}
      <section className="py-20 border-y border-white/5 bg-slate-900/50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {[
              { label: "Projects Delivered", value: "150+" },
              { label: "AI Models Deployed", value: "40+" },
              { label: "Happy Clients", value: "85+" },
              { label: "Lines of Code", value: "2M+" },
            ].map((stat, i) => (
              <motion.div 
                key={i}
                whileInView={{ opacity: 1, scale: 1 }}
                initial={{ opacity: 0, scale: 0.8 }}
                className="text-center"
              >
                <h2 className="text-4xl md:text-5xl font-bold text-white mb-2">{stat.value}</h2>
                <p className="text-slate-500 uppercase tracking-widest text-xs font-bold">{stat.label}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* 3. SERVICES BENTO GRID */}
      <section className="py-32 max-w-7xl mx-auto px-6">
        <div className="mb-16">
          <h2 className="text-4xl font-bold mb-4">Our Core Capabilities</h2>
          <p className="text-slate-400">Engineering solutions that scale with your vision.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Large Card: AI */}
          <motion.div 
            whileHover={{ y: -10 }}
            className="md:col-span-2 bg-gradient-to-br from-blue-600/20 to-cyan-600/5 border border-white/10 p-10 rounded-[3rem] relative overflow-hidden group"
          >
            <Cpu className="text-cyan-400 mb-6 w-12 h-12" />
            <h3 className="text-3xl font-bold mb-4">Generative AI & ML</h3>
            <p className="text-slate-400 max-w-md mb-6">
              Integrating LLMs and predictive analytics into your existing workflow to automate 70% of manual tasks.
            </p>
            <div className="flex gap-2">
              <span className="px-3 py-1 bg-white/5 rounded-full text-xs">PyTorch</span>
              <span className="px-3 py-1 bg-white/5 rounded-full text-xs">OpenAI</span>
              <span className="px-3 py-1 bg-white/5 rounded-full text-xs">TensorFlow</span>
            </div>
          </motion.div>

          {/* Web Card */}
          <motion.div 
            whileHover={{ y: -10 }}
            className="bg-slate-900 border border-white/10 p-10 rounded-[3rem] hover:border-cyan-500/50 transition-colors"
          >
            <Globe className="text-blue-400 mb-6 w-10 h-10" />
            <h3 className="text-2xl font-bold mb-4">Full-Stack Web</h3>
            <p className="text-slate-400 text-sm">
              Scalable architectures using MERN & Next.js for high-traffic apps.
            </p>
          </motion.div>

          {/* Security Card */}
          <motion.div 
             whileHover={{ y: -10 }}
            className="bg-slate-900 border border-white/10 p-10 rounded-[3rem] hover:border-purple-500/50 transition-colors"
          >
            <ShieldCheck className="text-purple-400 mb-6 w-10 h-10" />
            <h3 className="text-2xl font-bold mb-4">Cyber Security</h3>
            <p className="text-slate-400 text-sm">
              Enterprise-grade data protection and cloud security audits.
            </p>
          </motion.div>

          {/* App Dev Card */}
          <motion.div 
            whileHover={{ y: -10 }}
            className="md:col-span-2 bg-slate-900 border border-white/10 p-10 rounded-[3rem] flex flex-col md:flex-row items-center gap-10"
          >
            <div className="flex-1">
              <Layers className="text-orange-400 mb-6 w-10 h-10" />
              <h3 className="text-2xl font-bold mb-4">Mobile Ecosystems</h3>
              <p className="text-slate-400 text-sm mb-4">
                Native and Cross-platform mobile solutions for iOS and Android.
              </p>
              <ul className="space-y-2">
                <li className="flex items-center gap-2 text-sm text-slate-300"><CheckCircle2 size={16} className="text-cyan-500" /> React Native Expertise</li>
                <li className="flex items-center gap-2 text-sm text-slate-300"><CheckCircle2 size={16} className="text-cyan-500" /> Flutter High-Performance</li>
              </ul>
            </div>
            <div className="flex-1 bg-gradient-to-t from-cyan-500/20 to-transparent h-full w-full rounded-2xl border border-white/5 min-h-[150px] flex items-center justify-center">
               <span className="text-5xl font-bold opacity-20 italic">MOBILE 2026</span>
            </div>
          </motion.div>
        </div>
      </section>

      {/* 4. CTA SECTION */}
      <section className="py-32 px-6">
        <div className="max-w-5xl mx-auto bg-gradient-to-r from-blue-700 to-cyan-600 rounded-[3rem] p-12 text-center relative overflow-hidden">
          <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full blur-3xl -mr-20 -mt-20"></div>
          <h2 className="text-4xl md:text-5xl font-bold mb-8 relative z-10">Ready to transform your <br />digital presence?</h2>
          <p className="text-white/80 mb-10 text-lg relative z-10">Visit us at our Madhapur lab or schedule a virtual consultation today.</p>
          <Link 
            to="/contact" 
            className="bg-white text-blue-700 px-10 py-4 rounded-full font-bold hover:scale-105 transition-transform relative z-10 inline-block"
          >
            Contact Arah Infotech
          </Link>
        </div>
      </section>
    </div>
  );
}
import React from "react";
import { motion } from "framer-motion";
import { 
  Globe, Smartphone, BrainCircuit, 
  LineChart, ShieldAlert, CloudCog, 
  ArrowUpRight, Check 
} from "lucide-react";

const servicesData = [
  {
    title: "Web Engineering",
    desc: "Building ultra-fast, SEO-optimized web applications using Next.js 15 and Micro-services architecture.",
    icon: <Globe className="text-blue-400" />,
    features: ["PWA Development", "Real-time Dashboards", "E-commerce Hubs"],
    metric: "99.9% Uptime",
    color: "blue"
  },
  {
    title: "Mobile Ecosystems",
    desc: "Cross-platform mobile apps (React Native/Flutter) that provide a native-feel with 60FPS performance.",
    icon: <Smartphone className="text-cyan-400" />,
    features: ["iOS & Android", "Offline Syncing", "Biometric Security"],
    metric: "4.8/5 Avg Rating",
    color: "cyan"
  },
  {
    title: "Generative AI & ML",
    desc: "Custom LLM integrations and predictive models that automate decision-making processes.",
    icon: <BrainCircuit className="text-purple-400" />,
    features: ["Natural Language Processing", "Computer Vision", "Auto-ML"],
    metric: "60% Task Automation",
    color: "purple"
  },
  {
    title: "Cloud & DevOps",
    desc: "Architecting resilient AWS/Azure infrastructures with automated CI/CD pipelines.",
    icon: <CloudCog className="text-emerald-400" />,
    features: ["Kubernetes Scaling", "Serverless Architecture", "Cost Optimization"],
    metric: "< 2s Deployment",
    color: "emerald"
  },
  {
    title: "Cyber Security",
    desc: "Enterprise-grade threat detection and data encryption to keep your digital assets safe.",
    icon: <ShieldAlert className="text-red-400" />,
    features: ["Penetration Testing", "Identity Management", "Data Privacy"],
    metric: "Zero Breach Record",
    color: "red"
  },
  {
    title: "Digital Growth",
    desc: "Data-driven marketing strategies that leverage AI to find your target audience with precision.",
    icon: <LineChart className="text-orange-400" />,
    features: ["AI Copywriting", "Predictive SEO", "Conversion Optimization"],
    metric: "3x Lead Gen",
    color: "orange"
  }
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.15 }
  }
};

const cardVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } }
};

export default function Services() {
  return (
    <div className="bg-slate-950 text-white min-h-screen pt-24 pb-20 px-6">
      <div className="max-w-7xl mx-auto">
        
        {/* Header Content */}
        <div className="mb-16 text-center md:text-left">
          <motion.h2 
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="text-cyan-500 font-bold uppercase tracking-[0.3em] text-sm mb-4"
          >
            Our Expertise
          </motion.h2>
          <motion.h1 
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.1 }}
            className="text-4xl md:text-6xl font-black mb-6"
          >
            Solutions that <span className="text-slate-500 italic">Scale.</span>
          </motion.h1>
          <p className="text-slate-400 max-w-2xl text-lg">
            We don't just build software; we build the technical foundations for the next 
            generation of businesses in the AI era.
          </p>
        </div>

        {/* Dynamic Grid */}
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {servicesData.map((service, index) => (
            <motion.div
              key={index}
              variants={cardVariants}
              whileHover={{ y: -10, transition: { duration: 0.2 } }}
              className="bg-slate-900/50 border border-white/5 p-8 rounded-[2rem] backdrop-blur-sm relative group hover:border-cyan-500/50 transition-colors shadow-2xl"
            >
              <div className="flex justify-between items-start mb-6">
                <div className="p-3 bg-slate-800 rounded-2xl group-hover:scale-110 transition-transform">
                  {service.icon}
                </div>
                <div className="text-xs font-mono text-cyan-500 bg-cyan-500/10 px-3 py-1 rounded-full">
                  {service.metric}
                </div>
              </div>

              <h3 className="text-2xl font-bold mb-4 flex items-center gap-2">
                {service.title}
                <ArrowUpRight className="opacity-0 group-hover:opacity-100 transition-opacity text-slate-500" size={18} />
              </h3>
              
              <p className="text-slate-400 text-sm leading-relaxed mb-6">
                {service.desc}
              </p>

              <div className="space-y-3 border-t border-white/5 pt-6">
                {service.features.map((feature, idx) => (
                  <div key={idx} className="flex items-center gap-2 text-xs text-slate-300">
                    <Check size={14} className="text-cyan-500" />
                    {feature}
                  </div>
                ))}
              </div>
              
              {/* Subtle background glow effect */}
              <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity rounded-[2rem]" />
            </motion.div>
          ))}
        </motion.div>

        {/* 2026 Tech Stack Container */}
        <motion.div 
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-32 p-12 bg-gradient-to-r from-slate-900 to-slate-800 rounded-[3rem] border border-white/5 text-center"
        >
          <h3 className="text-2xl font-bold mb-8 italic text-slate-400">Powered by Modern Tech</h3>
          <div className="flex flex-wrap justify-center gap-8 opacity-50 grayscale hover:grayscale-0 transition-all">
            <span className="font-bold text-xl">React 19</span>
            <span className="font-bold text-xl">Node.js</span>
            <span className="font-bold text-xl">Python</span>
            <span className="font-bold text-xl">AWS</span>
            <span className="font-bold text-xl">TensorFlow</span>
            <span className="font-bold text-xl">TypeScript</span>
          </div>
        </motion.div>

      </div>
    </div>
  );
}
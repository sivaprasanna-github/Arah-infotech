import React from "react";
import { ArrowUpRight } from "lucide-react";

const projects = [
  {
    id: 1,
    client: "FinTech Corp",
    title: "AI-Driven Fraud Detection",
    category: "Machine Learning",
    description: "Developed a real-time anomaly detection system processing 50k transactions per second.",
    stats: "99.8% Accuracy",
    stack: ["Python", "TensorFlow", "AWS"],
    color: "from-blue-600 to-cyan-500"
  },
  {
    id: 2,
    client: "HealthPlus",
    title: "Telemedicine Platform",
    category: "Web & Mobile",
    description: "Built a secure HIPAA-compliant video consultation app connecting doctors and patients.",
    stats: "2M+ Active Users",
    stack: ["React Native", "Node.js", "WebRTC"],
    color: "from-emerald-500 to-teal-400"
  },
  {
    id: 3,
    client: "RetailGiants",
    title: "E-Commerce Re-Architecture",
    category: "Full Stack",
    description: "Migrated a legacy monolith to microservices, improving load times by 60% during Black Friday.",
    stats: "60% Faster Load",
    stack: ["Next.js", "GoLang", "Kubernetes"],
    color: "from-orange-500 to-red-500"
  }
];

export default function Work() {
  return (
    <div className="pt-28 pb-20 px-6 min-h-screen bg-slate-950 text-white">
      <div className="max-w-7xl mx-auto">
        
        {/* Header */}
        <div className="mb-20">
          <h1 className="text-6xl font-black mb-6">Our Work</h1>
          <p className="text-xl text-slate-400 max-w-2xl">
            We don't just write code. We engineer results. Here is a selection of enterprise systems delivered by Arah Infotech.
          </p>
        </div>

        {/* Project List */}
        <div className="space-y-20">
          {projects.map((project) => (
            <div key={project.id} className="group relative">
              <div className={`absolute inset-0 bg-gradient-to-r ${project.color} opacity-5 rounded-3xl -z-10 blur-xl group-hover:opacity-10 transition-opacity`}></div>
              
              <div className="bg-slate-900/50 border border-white/10 rounded-3xl p-8 md:p-12 hover:border-white/20 transition-all">
                <div className="flex flex-col md:flex-row gap-10">
                  
                  {/* Left: Content */}
                  <div className="flex-1">
                    <div className="flex items-center gap-3 mb-4">
                      <span className="text-xs font-bold uppercase tracking-widest text-slate-500">{project.client}</span>
                      <span className="w-1 h-1 bg-slate-500 rounded-full"></span>
                      <span className="text-xs font-bold uppercase tracking-widest text-cyan-400">{project.category}</span>
                    </div>
                    
                    <h2 className="text-4xl font-bold mb-4">{project.title}</h2>
                    <p className="text-slate-400 text-lg mb-8 leading-relaxed">
                      {project.description}
                    </p>

                    <div className="flex flex-wrap gap-3">
                      {project.stack.map((tech) => (
                        <span key={tech} className="px-4 py-2 bg-slate-800 rounded-full text-xs font-bold text-slate-300 border border-white/5">
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Right: Stats & Action */}
                  <div className="md:w-1/3 flex flex-col justify-between border-l border-white/5 md:pl-10">
                    <div>
                       <p className="text-slate-500 text-sm font-bold uppercase mb-2">Key Result</p>
                       <p className={`text-4xl font-black bg-clip-text text-transparent bg-gradient-to-r ${project.color}`}>
                         {project.stats}
                       </p>
                    </div>
                    
                    <button className="mt-8 flex items-center gap-2 text-white font-bold hover:text-cyan-400 transition-colors">
                      View Case Study <ArrowUpRight size={18} />
                    </button>
                  </div>

                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </div>
  );
}
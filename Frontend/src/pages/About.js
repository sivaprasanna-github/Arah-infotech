import { motion } from "framer-motion";
import {
  Users,
  Target,
  Eye,
  Zap,
  Shield,
  MapPin,
  Award,
  Database,
  Cpu
} from "lucide-react";

const fadeIn = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8 } }
};

const About = () => {
  const values = [
    {
      icon: <Cpu className="text-cyan-400" />,
      title: "AI-First Approach",
      desc: "Every line of code we write is optimized for the machine learning age."
    },
    {
      icon: <Shield className="text-purple-400" />,
      title: "Security by Design",
      desc: "Zero-trust architecture integrated into every enterprise solution."
    },
    {
      icon: <Zap className="text-orange-400" />,
      title: "Hyper-Scalability",
      desc: "Systems designed to grow from 1,000 to 10 million users seamlessly."
    }
  ];

  return (
    <div className="bg-slate-950 text-white min-h-screen pt-24 pb-20 overflow-hidden">

      {/* HERO */}
      <section className="px-8 max-w-7xl mx-auto mb-32 relative">
        <div className="absolute top-0 right-0 w-96 h-96 bg-blue-600/10 rounded-full blur-[120px] -z-10" />

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeIn}
          className="max-w-3xl"
        >
          <h2 className="text-cyan-500 font-bold tracking-widest uppercase text-sm mb-4">
            Our DNA
          </h2>
          <h1 className="text-5xl md:text-7xl font-extrabold mb-8 leading-tight">
            Engineering <span className="text-slate-500">Intelligence.</span><br />
            Building{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-400">
              Trust.
            </span>
          </h1>
          <p className="text-xl text-slate-400 leading-relaxed mb-6">
            Founded in May 2025, Arah Infotech was born out of a simple realization:
            the gap between standard software and AI-driven intelligence was widening.
            We stepped in to bridge it.
          </p>
        </motion.div>
      </section>

      {/* MISSION & VISION */}
      <section className="px-8 max-w-7xl mx-auto mb-32 grid md:grid-cols-2 gap-8">

        <motion.div whileHover={{ scale: 1.02 }}
          className="bg-slate-900 border border-white/5 p-10 rounded-[2.5rem] relative">
          <Target className="w-12 h-12 text-cyan-500 mb-6" />
          <h3 className="text-3xl font-bold mb-4">The Mission</h3>
          <p className="text-slate-400 text-lg">
            To deliver intelligent, scalable, and user-centric solutions that empower enterprises.
          </p>
        </motion.div>

        <motion.div whileHover={{ scale: 1.02 }}
          className="bg-gradient-to-br from-blue-600/20 to-transparent border border-white/10 p-10 rounded-[2.5rem]">
          <Eye className="w-12 h-12 text-blue-400 mb-6" />
          <h3 className="text-3xl font-bold mb-4">The Vision</h3>
          <p className="text-slate-400 text-lg">
            To be the global benchmark for AI-integrated software engineering.
          </p>
        </motion.div>

      </section>

      {/* STATS */}
      <section className="bg-white text-slate-950 py-24">
        <div className="max-w-7xl mx-auto px-8 grid md:grid-cols-3 gap-16">

          <div>
            <Database className="w-8 h-8 text-blue-600" />
            <h4 className="text-4xl font-black">99.99%</h4>
            <p className="text-slate-600">Uptime guarantee</p>
          </div>

          <div>
            <Award className="w-8 h-8 text-blue-600" />
            <h4 className="text-4xl font-black">500k+</h4>
            <p className="text-slate-600">Daily users</p>
          </div>

          <div>
            <Users className="w-8 h-8 text-blue-600" />
            <h4 className="text-4xl font-black">20+</h4>
            <p className="text-slate-600">AI Engineers</p>
          </div>

        </div>
      </section>

      {/* PHILOSOPHY */}
      <section className="py-32 px-8 max-w-7xl mx-auto">
        <div className="grid md:grid-cols-3 gap-12">
          {values.map((v, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.2 }}
              className="text-center"
            >
              <div className="w-16 h-16 bg-slate-900 rounded-2xl flex items-center justify-center mx-auto mb-6">
                {v.icon}
              </div>
              <h4 className="text-xl font-bold mb-3">{v.title}</h4>
              <p className="text-slate-500">{v.desc}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* LOCATION */}
      <section className="px-8 max-w-7xl mx-auto pt-20 border-t border-white/5">
        <div className="flex items-center gap-2 text-cyan-500 mb-4">
          <MapPin size={20} />
          <span className="font-bold uppercase text-sm">Madhapur Hub</span>
        </div>
        <h3 className="text-4xl font-bold mb-6">Rooted in Hyderabad</h3>
        <p className="text-slate-400 text-lg">
          Based in Ayyappa Society, Madhapur — the heart of Hyderabad’s tech ecosystem.
        </p>
      </section>

    </div>
  );
};

export default About;

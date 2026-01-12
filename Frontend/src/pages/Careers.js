import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { 
  Briefcase, Coffee, Zap, Users, 
  Code, Sparkles, MapPin, ArrowRight, 
  GraduationCap, Laptop, X, Loader2, CheckCircle 
} from "lucide-react";
import { applyForJob } from "../api"; // Import API function

const perks = [
  { icon: <Laptop className="text-cyan-400" />, title: "Hybrid Work", desc: "Work from our Madhapur lab or your home office." },
  { icon: <Zap className="text-yellow-400" />, title: "Skill Stipend", desc: "We pay for your AI/ML certifications and courses." },
  { icon: <Coffee className="text-orange-400" />, title: "Unlimited Fuel", desc: "Premium coffee and snacks to keep the code flowing." },
  { icon: <Users className="text-blue-400" />, title: "Tech Talks", desc: "Weekly internal workshops on emerging tech trends." }
];

const jobs = [
  {
    title: "AI Engineer (Associate)",
    type: "Full-Time",
    location: "Madhapur, Hyderabad",
    skills: ["Python", "PyTorch", "NLP"],
    salary: "Competitive"
  },
  {
    title: "Full Stack Developer",
    type: "Full-Time",
    location: "Hybrid / Hyderabad",
    skills: ["Next.js", "Node.js", "AWS"],
    salary: "Performance-Based"
  },
  {
    title: "UI/UX Product Designer",
    type: "Remote / Hybrid",
    location: "Hyderabad",
    skills: ["Figma", "Design Systems", "Framer"],
    salary: "Standard"
  },
  {
    title: "Software Intern (2026 Batch)",
    type: "Internship",
    location: "Office (Ayyappa Society)",
    skills: ["JS Basics", "React", "Passion"],
    salary: "Stipend Provided"
  }
];

export default function Careers() {
  const [selectedJob, setSelectedJob] = useState(null); // Controls Modal
  const [formStatus, setFormStatus] = useState("idle"); // idle | loading | success | error

  // Form State
  const [formData, setFormData] = useState({
    firstName: "", lastName: "", email: "", mobile: "",
    address: "", graduation: "", higherSecondary: "", secondary: "",
    experience: "", noticePeriod: "", linkedin: "", github: ""
  });

  const handleInputChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setFormStatus("loading");

    try {
      // Combine job title with form data
      const payload = { ...formData, jobTitle: selectedJob.title };
      await applyForJob(payload);
      
      setFormStatus("success");
      setTimeout(() => {
        setFormStatus("idle");
        setSelectedJob(null); // Close modal
        setFormData({ // Reset form
          firstName: "", lastName: "", email: "", mobile: "",
          address: "", graduation: "", higherSecondary: "", secondary: "",
          experience: "", noticePeriod: "", linkedin: "", github: ""
        });
      }, 3000);
    } catch (error) {
      console.error(error);
      setFormStatus("error");
    }
  };

  return (
    <div className="bg-slate-950 text-white min-h-screen pt-24 pb-20 relative">
      
      {/* 1. HERO SECTION */}
      <section className="max-w-7xl mx-auto px-6 mb-32">
        <div className="flex flex-col md:flex-row items-center gap-12">
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            className="flex-1"
          >
            <div className="inline-flex items-center gap-2 bg-blue-500/10 border border-blue-500/20 px-4 py-2 rounded-full mb-6">
              <Sparkles className="w-4 h-4 text-blue-400" />
              <span className="text-xs font-bold text-blue-400 uppercase tracking-widest">We are Hiring</span>
            </div>
            <h1 className="text-5xl md:text-7xl font-black mb-8 leading-tight">
              Build What <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-600">Matters.</span>
            </h1>
            <p className="text-slate-400 text-lg mb-8 max-w-lg">
              At Arah Infotech, we don't just hire employees; we recruit innovators. 
              Join a team where your code impacts thousands of lives in the AI era.
            </p>
          </motion.div>
          
          <motion.div 
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            className="flex-1 bg-gradient-to-tr from-blue-600/20 to-purple-600/20 border border-white/5 p-8 rounded-[3rem] relative overflow-hidden"
          >
            <div className="relative z-10">
               <h3 className="text-2xl font-bold mb-4">Engineering Culture</h3>
               <div className="space-y-4">
                  <div className="flex items-center gap-4 bg-slate-900/80 p-4 rounded-2xl border border-white/5">
                    <Code className="text-cyan-500" />
                    <div>
                      <p className="text-sm font-bold">Clean Code Policy</p>
                      <p className="text-xs text-slate-500">We prioritize quality over speed.</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-4 bg-slate-900/80 p-4 rounded-2xl border border-white/5">
                    <GraduationCap className="text-purple-500" />
                    <div>
                      <p className="text-sm font-bold">Continuous Learning</p>
                      <p className="text-xs text-slate-500">2 hours every Friday dedicated to learning.</p>
                    </div>
                  </div>
               </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* 2. PERKS SECTION */}
      <section className="bg-slate-900/50 py-24 border-y border-white/5">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-3xl font-bold mb-16 text-center">Beyond the Paycheck</h2>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {perks.map((perk, i) => (
              <motion.div 
                key={i}
                whileHover={{ y: -5 }}
                className="p-8 bg-slate-950 border border-white/5 rounded-3xl text-center"
              >
                <div className="mb-4 flex justify-center">{perk.icon}</div>
                <h4 className="font-bold mb-2">{perk.title}</h4>
                <p className="text-sm text-slate-500 leading-relaxed">{perk.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* 3. OPEN POSITIONS LIST */}
      <section className="max-w-5xl mx-auto px-6 py-32">
        <div className="flex justify-between items-end mb-16">
          <div>
            <h2 className="text-4xl font-bold mb-4">Open Positions</h2>
            <p className="text-slate-400">Current opportunities in our Hyderabad Lab.</p>
          </div>
        </div>

        <div className="space-y-4">
          {jobs.map((job, i) => (
            <motion.div 
              key={i}
              whileHover={{ scale: 1.01 }}
              className="group bg-slate-900/40 border border-white/5 p-6 md:p-8 rounded-3xl flex flex-col md:flex-row justify-between items-start md:items-center gap-6 hover:bg-slate-900 hover:border-cyan-500/30 transition-all cursor-pointer"
            >
              <div>
                <h4 className="text-xl font-bold mb-2 group-hover:text-cyan-400 transition-colors">{job.title}</h4>
                <div className="flex flex-wrap gap-4 text-xs text-slate-500">
                  <span className="flex items-center gap-1"><Briefcase size={14}/> {job.type}</span>
                  <span className="flex items-center gap-1"><MapPin size={14}/> {job.location}</span>
                </div>
                <div className="flex gap-2 mt-4">
                   {job.skills.map((skill, idx) => (
                     <span key={idx} className="bg-white/5 px-3 py-1 rounded-md text-[10px] uppercase font-bold text-slate-400">
                       {skill}
                     </span>
                   ))}
                </div>
              </div>
              <button 
                onClick={() => setSelectedJob(job)} 
                className="w-full md:w-auto bg-slate-800 group-hover:bg-cyan-500 group-hover:text-slate-950 px-6 py-3 rounded-2xl font-bold text-sm transition-all flex items-center justify-center gap-2"
              >
                Apply Now <ArrowRight size={16} />
              </button>
            </motion.div>
          ))}
        </div>
      </section>

      {/* 4. HIRING PROCESS SECTION */}
      <section className="max-w-7xl mx-auto px-6 py-20">
         <div className="bg-gradient-to-r from-cyan-600/20 to-blue-600/20 rounded-[3rem] p-12 border border-white/10">
            <h3 className="text-3xl font-bold mb-12 text-center">Our Hiring Process</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
               {[
                 { step: "1", name: "Application Review", detail: "We look at your GitHub & projects." },
                 { step: "2", name: "Tech Challenge", detail: "A real-world coding task for you." },
                 { step: "3", name: "The Lab Interview", detail: "Meet the team in Madhapur." }
               ].map((step, i) => (
                 <div key={i} className="text-center relative">
                    <div className="w-12 h-12 bg-white text-slate-950 rounded-full flex items-center justify-center font-black mx-auto mb-4">{step.step}</div>
                    <h5 className="font-bold mb-2">{step.name}</h5>
                    <p className="text-sm text-slate-400">{step.detail}</p>
                 </div>
               ))}
            </div>
         </div>
      </section>

      {/* ================================== */}
      {/*        MODAL / POPUP FORM          */}
      {/* ================================== */}
      <AnimatePresence>
        {selectedJob && (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm"
            onClick={() => setSelectedJob(null)} // Close on background click
          >
            <motion.div 
              initial={{ scale: 0.9, y: 50 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.9, y: 50 }}
              onClick={(e) => e.stopPropagation()} // Prevent close on form click
              className="bg-slate-900 border border-white/10 w-full max-w-4xl max-h-[90vh] overflow-y-auto rounded-3xl p-8 relative shadow-2xl"
            >
              {/* Close Button */}
              <button 
                onClick={() => setSelectedJob(null)}
                className="absolute top-6 right-6 p-2 bg-white/5 rounded-full hover:bg-red-500/20 hover:text-red-500 transition-colors"
              >
                <X size={20} />
              </button>

              <div className="mb-8">
                <span className="text-cyan-400 text-xs font-bold tracking-widest uppercase">Applying For</span>
                <h2 className="text-3xl font-bold">{selectedJob.title}</h2>
                <p className="text-slate-500 text-sm">{selectedJob.location} • {selectedJob.type}</p>
              </div>

              {formStatus === "success" ? (
                 <div className="text-center py-20">
                    <CheckCircle className="mx-auto text-green-500 mb-4" size={64} />
                    <h3 className="text-2xl font-bold text-white">Application Received!</h3>
                    <p className="text-slate-400">We will review your profile and get back to you soon.</p>
                 </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  {/* Personal Details */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <InputGroup label="First Name" name="firstName" value={formData.firstName} onChange={handleInputChange} />
                    <InputGroup label="Last Name" name="lastName" value={formData.lastName} onChange={handleInputChange} />
                    <InputGroup label="Email" type="email" name="email" value={formData.email} onChange={handleInputChange} />
                    <InputGroup label="Mobile Number" type="tel" name="mobile" value={formData.mobile} onChange={handleInputChange} />
                  </div>
                  
                  <InputGroup label="Full Address" name="address" value={formData.address} onChange={handleInputChange} />

                  {/* Education */}
                  <h4 className="text-lg font-bold text-slate-300 pt-4 border-t border-white/5">Education</h4>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    <InputGroup label="Graduation (Degree & Year & CGPA)" name="graduation" placeholder="e.g. B.Tech CSE 2024" value={formData.graduation} onChange={handleInputChange} />
                    <InputGroup label="12th / Diploma" name="higherSecondary" placeholder="School Name & CGPA" value={formData.higherSecondary} onChange={handleInputChange} />
                    <InputGroup label="10th Standard" name="secondary" placeholder="School Name & CGPA" value={formData.secondary} onChange={handleInputChange} />
                  </div>

                  {/* Professional */}
                  <h4 className="text-lg font-bold text-slate-300 pt-4 border-t border-white/5">Professional Details</h4>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <InputGroup label="Experience (Years)" name="experience" placeholder="e.g. Fresher or 2 Years" value={formData.experience} onChange={handleInputChange} />
                    <InputGroup label="Notice Period" name="noticePeriod" placeholder="e.g. Immediate or 30 Days" value={formData.noticePeriod} onChange={handleInputChange} />
                    <InputGroup label="LinkedIn Profile" name="linkedin" placeholder="https://linkedin.com/in/..." value={formData.linkedin} onChange={handleInputChange} required={false} />
                    <InputGroup label="GitHub / Portfolio" name="github" placeholder="https://github.com/..." value={formData.github} onChange={handleInputChange} required={false} />
                  </div>

                  {/* Submit Button */}
                  <div className="pt-6 border-t border-white/5">
                    <button 
                      type="submit" 
                      disabled={formStatus === "loading"}
                      className="w-full bg-cyan-500 text-slate-950 font-bold py-4 rounded-xl hover:bg-cyan-400 transition-colors flex items-center justify-center gap-2"
                    >
                      {formStatus === "loading" ? <Loader2 className="animate-spin" /> : "Submit Application"}
                    </button>
                    {formStatus === "error" && <p className="text-red-500 text-center mt-3 text-sm">Submission failed. Please try again.</p>}
                  </div>
                </form>
              )}
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

    </div>
  );
}

// Helper Component for Inputs to keep code clean
const InputGroup = ({ label, type = "text", name, value, onChange, placeholder, required = true }) => (
  <div>
    <label className="block text-xs font-bold text-slate-400 uppercase mb-2 ml-1">{label} {required && "*"}</label>
    <input 
      type={type} 
      name={name}
      value={value}
      onChange={onChange}
      required={required}
      placeholder={placeholder}
      className="w-full bg-slate-950 border border-white/10 rounded-xl p-3 text-white focus:outline-none focus:border-cyan-500 transition-colors placeholder:text-slate-600"
    />
  </div>
);
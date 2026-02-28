/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  Github, 
  Linkedin, 
  Mail, 
  ExternalLink, 
  Code2, 
  Cpu, 
  Globe, 
  Layers, 
  ChevronRight,
  Menu,
  X,
  ArrowUpRight
} from 'lucide-react';

// ==========================================
// CUSTOMIZE YOUR DATA HERE
// ==========================================
const USER_DATA = {
  name: "ELECTRICAL",
  lastName: "CP",
  role: "Professional Electrical Engineer",
  email: "sabianpriya27@gmail.com",
  github: "https://github.com",
  linkedin: "https://linkedin.com",
  about: "I am an Electrical Engineer specializing in power systems and industrial automation. My work focuses on creating resilient energy infrastructure and smart grid solutions to support Indonesia's transition to sustainable power.",
  experienceYears: "8+",
  projects: [
    {
      id: 1,
      title: "Smart Microgrid Implementation",
      description: "Design and simulation of a 500kW solar-hybrid microgrid for a remote mining site, reducing fuel consumption by 40%.",
      tags: ["ETAP", "HOMER Pro", "Renewables"],
      image: "https://www.singaporetech.edu.sg/sitlearn/sites/sitlearn/files/2024-03/Course-SmartGridsMasterclass-banner.jpg"
    },
    {
      id: 2,
      title: "IoT Transformer Monitor",
      description: "Developed a low-power LoRaWAN sensor node for real-time thermal and load monitoring of distribution transformers.",
      tags: ["Altium", "ESP32", "LoRaWAN"],
      image: "https://www.nextmsc.com/nextmsc-stg/images/news-transformer-monitoring-market-header-image_1756212523.jpeg"
    },
    {
      id: 4,
      title: "EV Fast-Charging Network",
      description: "Electrical infrastructure design and load flow analysis for a city-wide network of 15 DC fast-charging stations.",
      tags: ["Load Analysis", "EVSE", "Power Distribution"],
      image: "https://assets.new.siemens.com/siemens/assets/api/uuid:dfbfc449-5ff4-4a05-8452-a1dc61d7453e/width:1024/quality:HIGH/dfbfc449-5ff4-4a05-8452-a1dc61d7453e-high.webp"
    },
    
  ],
  skills: [
    { name: "Power System Analysis", icon: <Globe className="w-5 h-5 text-[#d4af37]" />, level: 94 },
    { name: "Circuit & PCB Design", icon: <Layers className="w-5 h-5 text-[#d4af37]" />, level: 92 },
    { name: "Renewable Energy", icon: <Code2 className="w-5 h-5 text-[#d4af37]" />, level: 90 },
  ]
};

// --- Types ---
interface Project {
  id: number;
  title: string;
  description: string;
  tags: string[];
  image: string;
}

interface Skill {
  name: string;
  icon: React.ReactNode;
  level: number;
}

interface ProjectCardProps {
  project: Project;
  index: number;
  key?: React.Key;
}

// --- Components ---

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${scrolled ? 'py-4 glass' : 'py-8'}`}>
      <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="text-xl font-serif font-bold tracking-tighter"
          >
            {USER_DATA.name}<span className="text-[#d4af37]">.</span>
          </motion.div>

          {/* Desktop Nav */}
          <div className="hidden md:flex gap-8 items-center">
            {['About', 'Work', 'Skills', 'Contact'].map((item) => (
              <motion.a
                key={item}
                href={`#${item.toLowerCase()}`}
                whileHover={{ y: -2 }}
                className="text-sm uppercase tracking-widest font-serif font-bold opacity-60 hover:opacity-100 transition-opacity"
              >
                {item}
              </motion.a>
            ))}
            <motion.a
              href={`https://mail.google.com/mail/?view=cm&fs=1&to=${USER_DATA.email}`}
              target="_blank"
              rel="noreferrer"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-5 py-2 rounded-full bg-[#d4af37] text-black text-xs font-bold uppercase tracking-widest inline-block"
            >
              Hire Me
            </motion.a>
          </div>

        {/* Mobile Toggle */}
        <button className="md:hidden" onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <X /> : <Menu />}
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden glass border-t border-white/5 overflow-hidden"
          >
            <div className="flex flex-col p-6 gap-4">
              {['About', 'Work', 'Skills', 'Contact'].map((item) => (
                <a 
                  key={item} 
                  href={`#${item.toLowerCase()}`} 
                  onClick={() => setIsOpen(false)}
                  className="text-lg font-medium opacity-70 hover:opacity-100"
                >
                  {item}
                </a>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

const Hero = () => {
  return (
    <section id="about" className="min-h-screen flex flex-col justify-center pt-32 pb-20 px-6 relative overflow-hidden">
      {/* Background Decor */}
      <div className="absolute top-1/4 -right-20 w-96 h-96 bg-amber-500/5 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-1/4 -left-20 w-96 h-96 bg-red-500/5 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto w-full">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="flex flex-col items-center text-center"
        >
          <div className="mb-8">
            <span className="text-[#d4af37] font-serif text-sm tracking-[0.5em] uppercase block mb-4">Professional Profile</span>
          </div>

          <h1 className="text-6xl md:text-8xl lg:text-9xl font-serif font-bold tracking-tighter mb-12 uppercase leading-[0.85]">
            ELECTRICAL <br /> <span className="text-gradient">CP</span>
          </h1>
          
          <div className="flex flex-col gap-12 items-center">
            <p className="max-w-3xl text-xl text-white/70 leading-relaxed font-serif italic">
              {USER_DATA.about}
            </p>
            
            <div className="flex flex-wrap gap-8 justify-center items-center">
              <motion.button
                onClick={() => window.dispatchEvent(new CustomEvent('open-projects-modal'))}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-16 py-5 rounded-full bg-[#d4af37] text-black font-bold uppercase tracking-widest text-xs flex items-center justify-center shadow-2xl"
              >
                Explore Projects
              </motion.button>
              <div className="flex gap-6 items-center">
                <a href={USER_DATA.github} target="_blank" rel="noreferrer" className="p-4 rounded-full border border-white/10 hover:bg-[#d4af37]/10 hover:border-[#d4af37]/50 transition-all">
                  <Github className="w-6 h-6 opacity-60 hover:opacity-100 transition-opacity" />
                </a>
                <a href={USER_DATA.linkedin} target="_blank" rel="noreferrer" className="p-4 rounded-full border border-white/10 hover:bg-[#d4af37]/10 hover:border-[#d4af37]/50 transition-all">
                  <Linkedin className="w-6 h-6 opacity-60 hover:opacity-100 transition-opacity" />
                </a>
              </div>
            </div>
          </div>
        </motion.div>
      </div>

    </section>
  );
};

const ProjectCard = ({ project, index }: ProjectCardProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.1 }}
      className="group relative"
    >
      <div className="relative aspect-[4/3] overflow-hidden rounded-2xl mb-6">
        <img 
          src={project.image} 
          alt={project.title}
          className="object-cover w-full h-full transition-transform duration-700 group-hover:scale-110"
          referrerPolicy="no-referrer"
        />
      </div>
      
      <div className="flex justify-between items-start">
        <div>
          <h3 className="text-2xl font-serif font-bold mb-2">{project.title}</h3>
          <p className="text-white/50 text-sm mb-4 max-w-xs">{project.description}</p>
          <div className="flex gap-2 flex-wrap">
            {project.tags.map(tag => (
              <span key={tag} className="text-[10px] uppercase tracking-wider px-2 py-1 border border-white/10 rounded-full opacity-60">
                {tag}
              </span>
            ))}
          </div>
        </div>
      </div>
    </motion.div>
  );
};

const Skills = () => {
  return (
    <section id="skills" className="py-32 px-6 bg-[#0a0a0a]">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
          <div>
            <span className="text-[#d4af37] font-serif text-sm tracking-widest uppercase mb-4 block">Core Expertise</span>
            <h2 className="text-5xl md:text-7xl font-serif font-bold mb-8 tracking-tighter">
              The Art of <br /> Engineering.
            </h2>
            <p className="text-white/60 text-lg max-w-md leading-relaxed mb-12 font-serif italic">
              Combining technical precision with creative problem solving to build robust electrical systems.
            </p>
            
            <div className="space-y-8">
              {USER_DATA.skills.map((skill, idx) => (
                <div key={skill.name}>
                  <div className="flex justify-between items-center mb-2">
                    <div className="flex items-center gap-3">
                      <span className="p-2 rounded-lg bg-white/5 text-[#d4af37]">{skill.icon}</span>
                      <span className="font-serif font-bold uppercase tracking-widest text-sm">{skill.name}</span>
                    </div>
                    <span className="font-mono text-xs opacity-60">{skill.level}%</span>
                  </div>
                  <div className="h-[2px] w-full bg-white/10 overflow-hidden">
                    <motion.div 
                      initial={{ width: 0 }}
                      whileInView={{ width: `${skill.level}%` }}
                      viewport={{ once: true }}
                      transition={{ duration: 1, delay: idx * 0.1 }}
                      className="h-full bg-[#d4af37]"
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>
          
          <div className="relative">
            <div className="aspect-square glass rounded-3xl p-12 flex items-center justify-center relative overflow-hidden border-ornate">
              <div className="absolute inset-0 opacity-10">
                <div className="grid grid-cols-10 h-full w-full">
                  {Array.from({ length: 100 }).map((_, i) => (
                    <div key={i} className="border-[0.5px] border-white/20" />
                  ))}
                </div>
              </div>
              <motion.div 
                animate={{ rotate: 360 }}
                transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                className="w-64 h-64 border border-dashed border-[#d4af37]/30 rounded-full flex items-center justify-center"
              >
                <div className="w-48 h-48 border border-dashed border-white/20 rounded-full flex items-center justify-center">
                  <div className="w-32 h-32 bg-[#d4af37]/10 rounded-full blur-2xl" />
                </div>
              </motion.div>
              <div className="absolute text-center">
                <span className="text-6xl font-serif font-bold text-white">{USER_DATA.experienceYears}</span>
                <p className="text-[10px] uppercase tracking-[0.3em] opacity-60 font-serif">Years Exp.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

const Contact = () => {
  return (
    <section id="contact" className="py-32 px-6 bg-black text-white relative overflow-hidden">
      {/* Background Decor */}
      <div className="absolute top-0 left-0 w-full h-full opacity-5 pointer-events-none">
        <div className="absolute top-0 left-1/4 w-px h-full bg-gradient-to-b from-transparent via-[#d4af37] to-transparent" />
        <div className="absolute top-0 right-1/4 w-px h-full bg-gradient-to-b from-transparent via-[#d4af37] to-transparent" />
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <span className="text-[#d4af37] font-serif text-sm tracking-[0.4em] uppercase mb-6 block">Get in touch</span>
            <h2 className="text-6xl md:text-7xl font-serif font-bold mb-8 tracking-tighter leading-tight">
              Let's build <br /> <span className="text-gradient">something great.</span>
            </h2>
            <p className="text-white/50 text-lg max-w-md leading-relaxed mb-12 font-serif italic">
              Whether you seek to build a new project or require professional consultation, my gates are always open.
            </p>

            <div className="space-y-8">
              <div className="flex items-center gap-6 group cursor-pointer">
                <div className="w-12 h-12 rounded-full border border-[#d4af37]/30 flex items-center justify-center group-hover:bg-[#d4af37] group-hover:text-black transition-all duration-500">
                  <Mail className="w-5 h-5" />
                </div>
                <div>
                  <p className="text-[10px] uppercase tracking-widest opacity-40 mb-1">Direct Email</p>
                  <a href={`https://mail.google.com/mail/?view=cm&fs=1&to=${USER_DATA.email}`} target="_blank" rel="noreferrer" className="text-xl font-serif font-bold hover:text-[#d4af37] transition-colors">
                    {USER_DATA.email}
                  </a>
                </div>
              </div>

              <div className="flex items-center gap-6 group cursor-pointer">
                <div className="w-12 h-12 rounded-full border border-[#d4af37]/30 flex items-center justify-center group-hover:bg-[#d4af37] group-hover:text-black transition-all duration-500">
                  <Linkedin className="w-5 h-5" />
                </div>
                <div>
                  <p className="text-[10px] uppercase tracking-widest opacity-40 mb-1">Professional Network</p>
                  <a href={USER_DATA.linkedin} target="_blank" rel="noreferrer" className="text-xl font-serif font-bold hover:text-[#d4af37] transition-colors">
                    Sabian Priya
                  </a>
                </div>
              </div>

              <div className="flex items-center gap-6 group cursor-pointer">
                <div className="w-12 h-12 rounded-full border border-[#d4af37]/30 flex items-center justify-center group-hover:bg-[#d4af37] group-hover:text-black transition-all duration-500">
                  <Github className="w-5 h-5" />
                </div>
                <div>
                  <p className="text-[10px] uppercase tracking-widest opacity-40 mb-1">GitHub Profile</p>
                  <a href={USER_DATA.github} target="_blank" rel="noreferrer" className="text-xl font-serif font-bold hover:text-[#d4af37] transition-colors">
                    sabiancp
                  </a>
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="border-ornate p-12 bg-white/5 backdrop-blur-sm"
          >
            <h3 className="text-2xl font-serif font-bold mb-8 text-center uppercase tracking-widest">Contact Form</h3>
            <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
              <div className="space-y-2">
                <label className="text-[10px] uppercase tracking-[0.3em] opacity-40 ml-1">Your Name</label>
                <input type="text" className="w-full bg-transparent border-b border-white/10 py-3 px-1 outline-none focus:border-[#d4af37] transition-colors font-serif" placeholder="Enter your name" />
              </div>
              <div className="space-y-2">
                <label className="text-[10px] uppercase tracking-[0.3em] opacity-40 ml-1">Your Message</label>
                <textarea className="w-full bg-transparent border-b border-white/10 py-3 px-1 outline-none focus:border-[#d4af37] transition-colors font-serif h-32 resize-none" placeholder="Speak your mind..." />
              </div>
              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="w-full py-5 bg-[#d4af37] text-black font-bold uppercase tracking-[0.3em] text-xs shadow-xl"
              >
                Send Message
              </motion.button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

const Footer = () => {
  return (
    <footer className="py-12 px-6 border-t border-white/5">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-8">
        <div className="text-sm opacity-40">
          © {new Date().getFullYear()} {USER_DATA.name}. All rights reserved.
        </div>
        <div className="flex gap-8 text-[10px] uppercase tracking-widest font-bold opacity-40">
          <a href="#" className="hover:opacity-100 transition-opacity">Privacy</a>
          <a href="#" className="hover:opacity-100 transition-opacity">Terms</a>
          <a href="#" className="hover:opacity-100 transition-opacity">Twitter</a>
        </div>
      </div>
    </footer>
  );
};

const ProjectsModal = ({ onClose }: { onClose: () => void }) => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 z-[150] bg-black/95 backdrop-blur-xl flex items-center justify-center p-6"
    >
      <motion.div
        initial={{ scale: 0.9, opacity: 0, y: 20 }}
        animate={{ scale: 1, opacity: 1, y: 0 }}
        exit={{ scale: 0.9, opacity: 0, y: 20 }}
        className="max-w-6xl w-full max-h-[90vh] overflow-y-auto custom-scrollbar"
      >
        <div className="flex justify-between items-center mb-12 sticky top-0 bg-black/0 backdrop-blur-sm py-4 z-10">
          <div>
            <span className="text-[#d4af37] font-mono text-[10px] uppercase tracking-[0.5em] block mb-2">Portfolio</span>
            <h2 className="text-4xl font-serif font-bold text-white">Featured Engineering Projects</h2>
          </div>
          <button 
            onClick={onClose}
            className="p-4 rounded-full bg-white/5 hover:bg-white/10 transition-colors"
          >
            <X className="w-6 h-6 text-white" />
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {USER_DATA.projects.map((project, idx) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: idx * 0.1 }}
              className="group relative bg-white/5 rounded-3xl overflow-hidden border border-white/10 hover:border-[#d4af37]/50 transition-all duration-500"
            >
              <div className="aspect-[16/10] overflow-hidden">
                <img 
                  src={project.image} 
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  referrerPolicy="no-referrer"
                />
              </div>
              <div className="p-8">
                <div className="flex gap-2 mb-4">
                  {project.tags.map(tag => (
                    <span key={tag} className="text-[8px] uppercase tracking-widest px-2 py-1 bg-[#d4af37]/10 text-[#d4af37] rounded-full border border-[#d4af37]/20">
                      {tag}
                    </span>
                  ))}
                </div>
                <h3 className="text-xl font-serif font-bold mb-3 text-white group-hover:text-[#d4af37] transition-colors">{project.title}</h3>
                <p className="text-sm text-white/50 leading-relaxed line-clamp-2">{project.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </motion.div>
  );
};

export default function App() {
  const [showProjectsModal, setShowProjectsModal] = useState(false);

  useEffect(() => {
    const handleOpenModal = () => setShowProjectsModal(true);

    window.addEventListener('open-projects-modal', handleOpenModal);

    return () => {
      window.removeEventListener('open-projects-modal', handleOpenModal);
    };
  }, []);

  return (
    <div className="relative">
      <AnimatePresence>
        {showProjectsModal && (
          <ProjectsModal 
            onClose={() => setShowProjectsModal(false)} 
          />
        )}
      </AnimatePresence>

      <Navbar />
      
      <main>
        <Hero />
        
        <section id="work" className="py-32 px-6">
          <div className="max-w-7xl mx-auto">
            <div className="flex justify-between items-end mb-20">
              <div>
                <span className="text-[#d4af37] font-serif text-sm tracking-widest uppercase mb-4 block">Selected Works</span>
                <h2 className="text-5xl md:text-6xl font-serif font-bold">Featured <br />Projects.</h2>
              </div>
              <div className="hidden md:block text-right max-w-xs text-white/40 text-sm italic font-serif">
                "Design is not just what it looks like and feels like. Design is how it works."
              </div>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
              {USER_DATA.projects.map((project, idx) => (
                <ProjectCard key={project.id} project={project} index={idx} />
              ))}
            </div>
          </div>
        </section>

        <Skills />
        
        <Contact />
      </main>
      
      <Footer />
    </div>
  );
}

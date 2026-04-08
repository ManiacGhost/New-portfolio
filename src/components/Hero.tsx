import { motion } from 'framer-motion';
import { FiGithub as Github, FiLinkedin as Linkedin, FiMail as Mail } from 'react-icons/fi';

export default function Hero() {
  return (
    <section className="min-h-screen flex flex-col justify-center items-center relative overflow-hidden">
      <div className="z-10 text-center max-w-4xl px-4 mt-20">
        <motion.div 
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="inline-block px-4 py-1.5 rounded-full border border-white/10 bg-white/5 backdrop-blur-md mb-8"
        >
          <span className="text-sm font-medium text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary tracking-wider">
             AVAILABLE FOR NEW OPPORTUNITIES
          </span>
        </motion.div>
        <motion.h1 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="text-5xl md:text-7xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-white to-gray-400"
        >
          Harsh Pandey
        </motion.h1>
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.15 }}
          className="text-2xl md:text-3xl font-medium mb-6 text-gray-300"
        >
          Product Engineer & Full Stack Developer
        </motion.h2>
        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="text-lg md:text-xl text-gray-400 mb-10 max-w-2xl mx-auto leading-relaxed"
        >
          Full-Stack Engineer with experience building enterprise-grade backend systems, AI-powered applications, and scalable microservices. Specialized in <strong>Java</strong>, <strong>Spring Boot</strong>, <strong>Python</strong>, and <strong>LLM integrations</strong>.
        </motion.p>
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="flex justify-center gap-6"
        >
          <a href="https://github.com/ManiacGhost" target="_blank" rel="noreferrer" className="p-4 glass rounded-full hover:scale-110 hover:bg-white/10 transition-all duration-300 group">
            <Github className="w-6 h-6 text-gray-400 group-hover:text-white" />
          </a>
          <a href="https://linkedin.com/in/harsh-pandey-581a16214" target="_blank" rel="noreferrer" className="p-4 glass rounded-full hover:scale-110 hover:bg-white/10 transition-all duration-300 group">
            <Linkedin className="w-6 h-6 text-gray-400 group-hover:text-[#0a66c2]" />
          </a>
          <a href="mailto:harshpandey6754@gmail.com" className="p-4 glass rounded-full hover:scale-110 hover:bg-white/10 transition-all duration-300 group">
            <Mail className="w-6 h-6 text-gray-400 group-hover:text-primary" />
          </a>
        </motion.div>
      </div>

      <motion.div 
        initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 1, duration: 1 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center animate-bounce"
      >
        <span className="text-xs text-gray-500 uppercase tracking-widest mb-2">Scroll</span>
        <div className="w-[1px] h-8 bg-gradient-to-b from-gray-500 to-transparent"></div>
      </motion.div>
    </section>
  );
}

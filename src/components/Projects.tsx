import { motion, AnimatePresence } from 'framer-motion';
import { useState } from 'react';
import ProjectModal from './ProjectModal';
import { FiGithub as Github, FiExternalLink as ExternalLink, FiActivity as Activity } from 'react-icons/fi';

const projects = [
  {
    id: "spring-batch",
    title: "High-Performance Spring Batch Processing",
    description: "High-performance chunk-based processing for large-scale data migration, optimized for reliability and fault tolerance.",
    tech: ["Spring Boot 3", "Spring Batch", "PostgreSQL", "Java"],
    github: "https://github.com/ManiacGhost/SpringBatch-Chunk-based-processing-and-PostGreSQL-connectivity",
    metrics: "Reduced latency by 80%"
  },
  {
    id: "sms-engine",
    title: "SMS Routing Engine",
    description: "High-performance messaging system with provider auto-switching logic to ensure reliability under high traffic.",
    tech: ["NestJS", "Node.js", "Redis", "MongoDB"],
    github: "https://github.com/ManiacGhost/SMS-Routing-Engine",
    metrics: "Auto-Switches on failure"
  },
  {
    id: "ai-curriculum",
    title: "AI Curriculum Generator",
    description: "Leveraged Gemini APIs to automate lesson creation, eliminating 100% of manual content preparation.",
    tech: ["React.js", "NestJS", "Gemini API"],
    metrics: "100% Automation"
  },
  {
    id: "appraisal",
    title: "Automated Faculty Appraisal System",
    description: "Digital appraisal system with automated API-score calculation, reducing manual evaluation time.",
    tech: ["React.js", "Node.js", "Django"],
    metrics: "60% Time Saved"
  }
];

export default function Projects() {
  const [selectedProject, setSelectedProject] = useState<string | null>(null);

  return (
    <>
      <section className="py-24 px-4 max-w-6xl mx-auto relative z-10" id="projects">
      <motion.div 
        initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
        className="mb-16 text-center"
      >
        <h2 className="text-3xl md:text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-secondary to-primary inline-block">
          Featured Projects
        </h2>
        <p className="text-gray-400 mt-4 max-w-2xl mx-auto">
          Deep dives into architecture, technical challenges, and automated workflows.
        </p>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {projects.map((proj, idx) => (
          <motion.div
            key={proj.id}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: idx * 0.1 }}
            className="glass rounded-2xl flex flex-col group overflow-hidden border border-white/10 hover:border-secondary/50 transition-all duration-300"
          >
            <div className="p-8 flex-grow">
              <div className="flex justify-between items-start mb-6 w-full">
                <div className="bg-primary/20 p-3 rounded-xl">
                  <Activity className="text-primary w-6 h-6" />
                </div>
                {proj.github && (
                  <a href={proj.github} target="_blank" rel="noreferrer" className="text-gray-400 hover:text-white transition-colors">
                    <Github className="w-5 h-5" />
                  </a>
                )}
              </div>
              <h3 className="text-2xl font-bold text-white mb-3 group-hover:text-secondary transition-colors">{proj.title}</h3>
              <p className="text-gray-400 mb-6 line-clamp-3 leading-relaxed">{proj.description}</p>
              
              <div className="flex flex-wrap gap-2 mb-8 mt-auto">
                {proj.tech.map(t => (
                  <span key={t} className="px-3 py-1 bg-white/5 border border-white/10 rounded-md text-xs font-medium text-gray-300">
                    {t}
                  </span>
                ))}
              </div>
            </div>

            <div className="p-1 px-1 pb-1">
               <button 
                onClick={() => setSelectedProject(proj.id)}
                className="w-full py-4 bg-gradient-to-r from-primary/20 to-secondary/20 hover:from-primary hover:to-secondary text-white font-medium rounded-xl transition-all duration-300 flex items-center justify-center gap-2 group/btn"
               >
                 <span>View Architecture Flow</span>
                 <ExternalLink className="w-4 h-4 group-hover/btn:translate-x-1 group-hover/btn:-translate-y-1 transition-transform" />
               </button>
            </div>
          </motion.div>
        ))}
      </div>

      </section>

      <AnimatePresence>
        {selectedProject && (
          <ProjectModal 
            projectId={selectedProject} 
            onClose={() => setSelectedProject(null)} 
          />
        )}
      </AnimatePresence>
    </>
  );
}

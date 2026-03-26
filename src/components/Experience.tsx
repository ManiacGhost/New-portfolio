import { motion, AnimatePresence } from 'framer-motion';
import { useState } from 'react';
import ProjectModal from './ProjectModal';
import { FiExternalLink as ExternalLink } from 'react-icons/fi';

const experiences = [
  {
    company: "Freelance",
    role: "Full-Stack Developer",
    period: "2025 – Present",
    location: "Remote",
    metrics: [
      { label: "Deployment", value: "Docker" },
      { label: "Security", value: "RBAC" }
    ],
    description: [
      "Designed and deployed production-grade web applications and backend systems focusing on scalability and clean architecture.",
      "Architected REST APIs, implemented authentication and database design, and optimized performance for real-world usage.",
      "Implemented role-based access control (RBAC), input validation, and secure session management to ensure application security.",
      "Containerized and deployed applications using Docker and managed hosting environments for reliable production delivery.",
      "Live project: mediumblue-finch-130496.hostingersite.com"
    ],
    tech: ["REST APIs", "Docker", "RBAC", "Authentication"]
  },
  {
    company: "Effigo Global Pvt. Ltd.",
    role: "Product Engineer",
    period: "Aug 2024 – Aug 2025",
    location: "Hyderabad",
    metrics: [
      { label: "Latency", value: "↓80%" },
      { label: "Manual Steps", value: "↓50%" },
      { label: "Refactoring", value: "40%+" }
    ],
    description: [
      "Developed scalable batch-processing pipelines using Spring Batch, reducing latency by 80%.",
      "Engineered a dynamic workflow engine with role-based permissions, cutting manual steps by 50%.",
      "Refactored 40-50% of legacy codebase using clean architecture principles.",
      "Implemented Kafka-driven event pipelines for high-volume asynchronous processing."
    ],
    tech: ["Spring Boot", "Kafka", "PostgreSQL", "Java"]
  },
  {
    company: "AST Consulting Pvt. Ltd.",
    role: "Full Stack Developer Intern",
    period: "Jan 2024 – Aug 2024",
    location: "Noida",
    metrics: [
      { label: "Automation", value: "100%" }
    ],
    description: [
      "Built scalable REST APIs with NestJS and responsive React.js interfaces.",
      "Created an AI-powered curriculum generator using Gemini APIs, automating 100% of content preparation.",
      "Designed a high-performance SMS routing engine with provider auto-switching for high reliability.",
      "Integrated Node.js microservices with MongoDB and Redis for fast data retrieval."
    ],
    tech: ["NestJS", "React.js", "Node.js", "MongoDB", "Redis", "Gemini API"]
  }
];

export default function Experience() {
  const [selectedFlow, setSelectedFlow] = useState<string | null>(null);

  return (
    <section className="py-24 px-4 max-w-5xl mx-auto relative z-10" id="experience">
      <motion.div 
        initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
        className="mb-16"
      >
        <h2 className="text-3xl md:text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-primary to-secondary inline-block">
          Work Experience
        </h2>
        <div className="h-1 w-20 bg-primary mt-4 rounded-full"></div>
      </motion.div>

      <div className="space-y-12">
        {experiences.map((exp, idx) => (
          <motion.div 
            key={idx}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.5, delay: idx * 0.1 }}
            className="glass p-8 rounded-2xl relative overflow-hidden group hover:border-primary/30 transition-colors duration-500"
          >
            <div className="absolute top-0 left-0 w-1 h-full bg-gradient-to-b from-primary to-secondary opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            
            <div className="flex flex-col lg:flex-row justify-between items-start mb-8 gap-6">
              <div>
                <h3 className="text-2xl font-bold text-white mb-1">{exp.role}</h3>
                <p className="text-lg text-primary font-medium">{exp.company}</p>
                <div className="flex items-center gap-4 mt-3 text-sm text-gray-400">
                  <span className="flex items-center gap-1">🗓️ {exp.period}</span>
                  <span className="flex items-center gap-1">📍 {exp.location}</span>
                </div>
              </div>

              {/* Metrics Pills */}
              <div className="flex flex-wrap gap-3">
                {exp.metrics.map((metric, i) => (
                  <div key={i} className="flex flex-col items-center justify-center p-3 rounded-xl bg-white/5 border border-white/10 min-w-[90px]">
                    <span className="text-xl font-bold text-white">{metric.value}</span>
                    <span className="text-[10px] uppercase tracking-wider text-gray-500">{metric.label}</span>
                  </div>
                ))}
              </div>
            </div>

            <ul className="space-y-4 mb-8">
              {exp.description.map((desc, i) => (
                <li key={i} className="flex items-start text-gray-300 leading-relaxed">
                  <span className="text-primary mr-3 mt-1.5 text-xs">◆</span>
                  <span>{desc}</span>
                </li>
              ))}
            </ul>

            <div className="flex flex-wrap gap-2 pt-6 border-t border-white/10">
              {exp.tech.map((t, i) => (
                <span key={i} className="px-4 py-1.5 bg-secondary/10 border border-secondary/20 rounded-full text-xs font-medium text-secondary">
                  {t}
                </span>
              ))}
            </div>

            {exp.company === "Freelance" && (
              <div className="mt-6 pt-6 border-t border-white/10">
                <button 
                  onClick={() => setSelectedFlow('rbac-flow')}
                  className="w-full sm:w-auto px-6 py-3 bg-gradient-to-r from-primary/20 to-secondary/20 hover:from-primary hover:to-secondary text-white font-medium rounded-xl transition-all duration-300 flex items-center justify-center gap-2 group/btn"
                >
                  <span>View RBAC Architecture Flow</span>
                  <ExternalLink className="w-4 h-4 group-hover/btn:translate-x-1 group-hover/btn:-translate-y-1 transition-transform" />
                </button>
              </div>
            )}
          </motion.div>
        ))}
      </div>

      <AnimatePresence>
        {selectedFlow && (
          <ProjectModal 
            projectId={selectedFlow} 
            onClose={() => setSelectedFlow(null)} 
          />
        )}
      </AnimatePresence>
    </section>
  );
}

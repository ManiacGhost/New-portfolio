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
      { label: "Deployment", value: "AWS" },
      { label: "Security", value: "RBAC" }
    ],
    description: [
      "Designed and deployed enterprise-grade web applications integrating LLM APIs and automation workflows.",
      "Built AI-powered features using prompt engineering, response parsing, and structured output handling.",
      "Architected secure REST APIs with OAuth2, JWT, and RBAC, ensuring enterprise-level security standards.",
      "Deployed and managed applications on AWS EC2, ensuring high availability and scalable backend services.",
      "Utilized AWS S3 for secure file storage and media handling, implementing access control using IAM roles and bucket policies."
    ],
    tech: ["AWS EC2/S3", "LLM APIs", "RBAC", "OAuth2"]
  },
  {
    company: "Effigo Global Pvt. Ltd.",
    role: "Product Engineer",
    period: "Aug 2024 – Aug 2025",
    location: "Hyderabad",
    metrics: [
      { label: "Latency", value: "↓80%" },
      { label: "Architecture", value: "Kafka" }
    ],
    description: [
      "Developed scalable batch-processing pipelines using Spring Batch, enabling enterprise data workflows and reducing latency by 80%.",
      "Built a workflow orchestration engine supporting multi-level approvals, aligning with enterprise process automation use cases.",
      "Designed backend services following microservices and clean architecture principles, improving system scalability and maintainability.",
      "Implemented event-driven architecture using Kafka for asynchronous enterprise integrations.",
      "Optimized APIs and database layers ensuring high availability, performance, and reliability."
    ],
    tech: ["Spring Batch", "Kafka", "Microservices", "Java"]
  },
  {
    company: "AST Consulting Pvt. Ltd.",
    role: "Full Stack Developer Intern",
    period: "Jan 2024 – Aug 2024",
    location: "Noida",
    metrics: [
      { label: "AI Backend", value: "Gemini" }
    ],
    description: [
      "Developed an AI-powered curriculum generator using LLM APIs (Gemini), implementing prompt engineering, structured outputs, and response validation.",
      "Built backend services using Node.js microservices with MongoDB and Redis for scalable data handling.",
      "Worked with AWS S3 and IAM to manage storage, access permissions, and secure handling of generated AI content.",
      "Integrated multiple REST APIs and designed modular services for extensibility and maintainability.",
      "Designed systems aligned with RAG-style architectures for dynamic content generation."
    ],
    tech: ["Node.js", "MongoDB", "AWS S3", "Gemini API", "RAG"]
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

import { motion, AnimatePresence } from 'framer-motion';
import { useState, useEffect } from 'react';
import { createPortal } from 'react-dom';
import { FiAward, FiEye, FiX } from 'react-icons/fi';

const certifications = [
  {
    title: "Generative AI Certification",
    issuer: "Udemy",
    year: "2026",
    description: "Covered LLM fundamentals, embeddings, vector databases, and production-level AI integrations.",
    pdf: "/certs/gen-ai-cert.pdf"
  },
  {
    title: "Spring Boot Advanced",
    issuer: "Udemy",
    year: "2024",
    description: "Focused on practical implementation, architecture concepts, and real-world development workflows.",
    pdf: "/certs/spring-boot-cert.pdf"
  }
];

export default function Certifications() {
  const [previewPdf, setPreviewPdf] = useState<string | null>(null);

  useEffect(() => {
    if (previewPdf) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [previewPdf]);

  return (
    <section className="py-24 px-4 max-w-5xl mx-auto relative z-10" id="certifications">
      <motion.div 
        initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
        className="mb-16 text-center"
      >
        <h2 className="text-3xl md:text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-secondary to-primary inline-block">
          Certifications
        </h2>
        <div className="h-1 w-20 bg-secondary mt-4 rounded-full mx-auto"></div>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {certifications.map((cert, idx) => (
          <motion.div
            key={idx}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: idx * 0.1 }}
            className="glass p-8 rounded-2xl border border-white/10 hover:border-secondary/50 transition-colors flex flex-col items-start h-full"
          >
            <div className="p-4 bg-secondary/10 rounded-2xl mb-6">
              <FiAward className="w-8 h-8 text-secondary" />
            </div>
            <div className="flex-grow">
              <h3 className="text-2xl font-bold text-white mb-2">{cert.title}</h3>
              <p className="text-primary font-medium mb-4">{cert.issuer} • {cert.year}</p>
              <p className="text-gray-400 leading-relaxed mb-6">{cert.description}</p>
            </div>
            
            <button 
              onClick={() => setPreviewPdf(cert.pdf)}
              className="mt-auto px-6 py-2.5 bg-secondary/10 hover:bg-secondary/30 text-secondary border border-secondary/20 rounded-xl transition-all duration-300 font-medium flex items-center gap-2 group/btn"
            >
              <FiEye className="w-5 h-5 group-hover/btn:scale-110 transition-transform" /> 
              <span>Preview Certificate</span>
            </button>
          </motion.div>
        ))}
      </div>

      {typeof document !== 'undefined' && createPortal(
        <AnimatePresence>
          {previewPdf && (
           <motion.div 
            initial={{ opacity: 0 }} 
            animate={{ opacity: 1 }} 
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm"
          >
            <motion.div 
              initial={{ scale: 0.95, y: 20 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.95, y: 20 }}
              className="bg-surface w-full max-w-4xl h-[85vh] rounded-2xl border border-white/10 overflow-hidden flex flex-col relative"
            >
              <div className="flex justify-between items-center p-6 border-b border-white/10">
                <h3 className="text-xl font-bold text-white">Certificate Preview</h3>
                <button 
                  onClick={() => setPreviewPdf(null)}
                  className="p-2 hover:bg-white/10 rounded-full transition-colors"
                >
                  <FiX className="w-6 h-6 text-gray-400" />
                </button>
              </div>
              
              <div 
                className="flex-grow bg-[#1a1a1a] relative select-none"
                onContextMenu={(e) => e.preventDefault()}
              >
                {/* Transparent overlay blocks clicking, downloading, or interacting with the PDF entirely */}
                <div className="absolute inset-0 z-10" title="Certificate Preview (Download Disabled)"></div>
                
                {/* PDF iframe with toolbar disabled natively */}
                <iframe 
                  src={`${previewPdf}#toolbar=0&navpanes=0&scrollbar=0`} 
                  className="w-full h-full border-0 pointer-events-none"
                  title="Certificate Preview"
                />
              </div>
            </motion.div>
          </motion.div>
        )}
        </AnimatePresence>,
        document.body
      )}
    </section>
  );
}

import { motion } from 'framer-motion';

const skills = {
  "Languages": ["Java", "Python", "TypeScript", "JavaScript", "C++", "Kotlin"],
  "Frameworks": ["Spring Boot 3", "React.js", "Node.js", "NestJS", "FastAPI", "Express.js"],
  "Databases": ["PostgreSQL", "MongoDB", "MySQL", "Redis"],
  "Tools & Cloud": ["Docker", "Git", "Kafka", "GCP", "Firebase", "Heroku"]
};

export default function Skills() {
  return (
    <section className="py-24 px-4 max-w-5xl mx-auto relative z-10" id="skills">
      <motion.div 
        initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
        className="mb-16 text-center"
      >
        <h2 className="text-3xl md:text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-primary to-secondary inline-block">
          Technical Prowess
        </h2>
        <div className="h-1 w-20 bg-primary mt-4 rounded-full mx-auto"></div>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {Object.entries(skills).map(([category, items], idx) => (
          <motion.div
            key={category}
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: idx * 0.1 }}
            className="glass p-8 rounded-2xl border border-white/10 hover:border-primary/30 transition-colors"
          >
            <h3 className="text-xl font-bold text-white mb-6 flex items-center gap-3">
              <span className="w-2 h-2 rounded-full bg-secondary"></span>
              {category}
            </h3>
            <div className="flex flex-wrap gap-3">
              {items.map(item => (
                <span key={item} className="px-4 py-2 bg-white/5 rounded-lg text-sm font-medium text-gray-300 border border-white/5 hover:bg-white/10 hover:text-white transition-colors cursor-default">
                  {item}
                </span>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}

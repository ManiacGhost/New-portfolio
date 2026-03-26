import { motion } from 'framer-motion';
import { useState } from 'react';
import { FiSend, FiCheckCircle } from 'react-icons/fi';

export default function Contact() {
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    
    try {
      await fetch("https://formsubmit.co/ajax/harshpandey6754@gmail.com", {
        method: "POST",
        headers: { 
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        },
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          message: formData.message,
          _subject: `New Portfolio Lead from ${formData.name}`,
          _autoresponse: `Hi ${formData.name},\n\nThank you for reaching out! I have successfully received your message and will review it as soon as I can. Please give me some time to respond back.\n\nBest regards,\nHarsh Pandey\nProduct Engineer & Full Stack Developer`
        })
      });
      
      setSubmitted(true);
      setFormData({ name: '', email: '', message: '' });
      setTimeout(() => setSubmitted(false), 8000);
    } catch (error) {
      console.error(error);
      alert("Failed to send message. Please try contacting via email directly.");
    } finally {
      setLoading(false);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({ ...prev, [e.target.name]: e.target.value }));
  };

  return (
    <section className="py-24 px-4 max-w-3xl mx-auto relative z-10" id="contact">
      <motion.div 
        initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
        className="mb-12 text-center"
      >
        <h2 className="text-3xl md:text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-secondary to-primary inline-block">
          Get In Touch
        </h2>
        <p className="text-gray-400 mt-4">Have a project in mind or want to explore an opportunity? Let's talk.</p>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="glass p-8 rounded-3xl border border-white/10"
      >
        {submitted ? (
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }}
            className="text-center py-12"
          >
            <FiCheckCircle className="w-16 h-16 text-green-400 mx-auto mb-6" />
            <h3 className="text-2xl font-bold text-white mb-2">Message Sent!</h3>
            <p className="text-gray-400">
              Thank you for reaching out. I have successfully received your message and will review it as soon as I can. Please give me some time to respond back!
            </p>
          </motion.div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <label className="text-sm font-medium text-gray-300">Your Name</label>
                <input required type="text" name="name" value={formData.name} onChange={handleChange} className="w-full bg-black/50 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-primary transition-colors" placeholder="John Doe" />
              </div>
              <div className="space-y-2">
                <label className="text-sm font-medium text-gray-300">Email Address</label>
                <input required type="email" name="email" value={formData.email} onChange={handleChange} className="w-full bg-black/50 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-primary transition-colors" placeholder="john@example.com" />
              </div>
            </div>
            <div className="space-y-2">
              <label className="text-sm font-medium text-gray-300">Message</label>
              <textarea required rows={5} name="message" value={formData.message} onChange={handleChange} className="w-full bg-black/50 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-primary transition-colors resize-none" placeholder="How can I help you?"></textarea>
            </div>
            <button type="submit" disabled={loading} className="w-full py-4 bg-primary hover:bg-primary/90 disabled:opacity-50 text-white rounded-xl font-medium transition-colors flex items-center justify-center gap-2">
              <span>{loading ? "Sending..." : "Send Message"}</span>
              {!loading && <FiSend />}
            </button>
          </form>
        )}
      </motion.div>
    </section>
  );
}

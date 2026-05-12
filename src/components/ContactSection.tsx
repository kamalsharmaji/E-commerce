import { Mail, Phone, MapPin, Send, CheckCircle, AlertCircle, Linkedin, Github, Instagram } from 'lucide-react';
import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const ContactSection = () => {
  const [formState, setFormState] = useState<'idle' | 'sending' | 'success' | 'error'>('idle');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setFormState('sending');
    
    // Simulate form submission
    setTimeout(() => {
      setFormState('success');
      // Reset after 3 seconds
      setTimeout(() => setFormState('idle'), 3000);
    }, 1500);
  };

  return (
    <section id="contact" className="py-24 lg:py-32 bg-background relative overflow-hidden">
      {/* Background Decorative Blobs */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-accent/5 rounded-full blur-3xl -mr-48 -mt-48" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl -ml-48 -mb-48" />

      <div className="section-container relative z-10">
        {/* Section Header */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <p className="text-accent font-semibold mb-3 tracking-widest uppercase text-sm">Contact</p>
          <h2 className="font-display text-4xl md:text-5xl font-bold text-primary">
            Get In Touch
          </h2>
          <div className="w-24 h-1.5 bg-accent mx-auto mt-6 rounded-full" />
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-16 items-start">
          {/* Left - Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h3 className="font-display text-3xl font-bold text-foreground mb-6">
              Let's Talk About Your <span className="text-accent">Project</span>
            </h3>
            <p className="text-muted-foreground text-lg leading-relaxed mb-12">
              Whether you have a question or just want to say hi, I'll try my best to get back to you! 
              I am always open to discussing new projects, creative ideas, or opportunities to be part of your visions.
            </p>

            <div className="space-y-8 mb-12">
              {[
                { 
                  icon: <Mail size={24} />, 
                  title: 'Email', 
                  content: 'sharmakamal11601@gmail.com',
                  link: 'mailto:sharmakamal11601@gmail.com'
                },
                { 
                  icon: <Phone size={24} />, 
                  title: 'Phone', 
                  content: '+91 7357510281',
                  link: 'tel:+917357510281'
                },
                { 
                  icon: <MapPin size={24} />, 
                  title: 'Location', 
                  content: 'Jaipur, Rajasthan, India',
                  link: '#'
                }
              ].map((item, index) => (
                <motion.a
                  key={index}
                  href={item.link}
                  whileHover={{ x: 10 }}
                  className="flex items-start gap-6 group"
                >
                  <div className="p-4 rounded-2xl bg-accent/10 text-accent group-hover:bg-accent group-hover:text-white transition-all duration-300 shadow-sm">
                    {item.icon}
                  </div>
                  <div>
                    <h4 className="font-display text-xl font-bold text-foreground mb-1 group-hover:text-accent transition-colors">
                      {item.title}
                    </h4>
                    <p className="text-muted-foreground text-lg">{item.content}</p>
                  </div>
                </motion.a>
              ))}
            </div>

            {/* Social Links */}
            <div className="flex gap-4">
              {[
                { icon: <Linkedin size={22} />, href: 'https://www.linkedin.com/in/kamal-sharma-aa3450324/' },
                { icon: <Github size={22} />, href: '#' },
                { icon: <Instagram size={22} />, href: '#' }
              ].map((social, index) => (
                <motion.a
                  key={index}
                  whileHover={{ scale: 1.2, y: -5 }}
                  whileTap={{ scale: 0.9 }}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-4 bg-secondary text-foreground hover:bg-accent hover:text-white rounded-2xl transition-all duration-300 shadow-sm"
                >
                  {social.icon}
                </motion.a>
              ))}
            </div>
          </motion.div>

          {/* Right - Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="bg-card p-10 lg:p-12 rounded-3xl shadow-2xl shadow-accent/5 border border-border/50 relative"
          >
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid sm:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label htmlFor="name" className="text-sm font-bold text-foreground/80 ml-1">Full Name</label>
                  <input
                    type="text"
                    id="name"
                    required
                    className="w-full px-6 py-4 bg-secondary/50 border-border/50 border-2 rounded-2xl focus:border-accent focus:bg-background transition-all outline-none"
                    placeholder="John Doe"
                  />
                </div>
                <div className="space-y-2">
                  <label htmlFor="email" className="text-sm font-bold text-foreground/80 ml-1">Email Address</label>
                  <input
                    type="email"
                    id="email"
                    required
                    className="w-full px-6 py-4 bg-secondary/50 border-border/50 border-2 rounded-2xl focus:border-accent focus:bg-background transition-all outline-none"
                    placeholder="john@example.com"
                  />
                </div>
              </div>
              <div className="space-y-2">
                <label htmlFor="subject" className="text-sm font-bold text-foreground/80 ml-1">Subject</label>
                <input
                  type="text"
                  id="subject"
                  required
                  className="w-full px-6 py-4 bg-secondary/50 border-border/50 border-2 rounded-2xl focus:border-accent focus:bg-background transition-all outline-none"
                  placeholder="Inquiry about web development"
                />
              </div>
              <div className="space-y-2">
                <label htmlFor="message" className="text-sm font-bold text-foreground/80 ml-1">Your Message</label>
                <textarea
                  id="message"
                  required
                  rows={5}
                  className="w-full px-6 py-4 bg-secondary/50 border-border/50 border-2 rounded-2xl focus:border-accent focus:bg-background transition-all outline-none resize-none"
                  placeholder="How can I help you?"
                ></textarea>
              </div>

              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                type="submit"
                disabled={formState !== 'idle'}
                className={`w-full py-5 rounded-2xl font-black text-xl flex items-center justify-center gap-3 transition-all duration-300 shadow-xl ${
                  formState === 'success' 
                    ? 'bg-green-500 text-white shadow-green-500/20' 
                    : 'bg-accent text-white shadow-accent/30 hover:shadow-accent/40'
                }`}
              >
                <AnimatePresence mode="wait">
                  {formState === 'idle' && (
                    <motion.div 
                      key="idle"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      exit={{ opacity: 0 }}
                      className="flex items-center gap-2"
                    >
                      Send Message <Send size={22} />
                    </motion.div>
                  )}
                  {formState === 'sending' && (
                    <motion.div 
                      key="sending"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      exit={{ opacity: 0 }}
                      className="flex items-center gap-2"
                    >
                      Sending... <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                    </motion.div>
                  )}
                  {formState === 'success' && (
                    <motion.div 
                      key="success"
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0 }}
                      className="flex items-center gap-2"
                    >
                      Message Sent! <CheckCircle size={22} />
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;

import { Mail, Phone, MapPin, Linkedin, Heart, Github, Instagram, ArrowUp } from 'lucide-react';
import { motion } from 'framer-motion';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  return (
    <footer className="bg-navy text-white py-20 relative overflow-hidden">
      {/* Background Decorative Elements */}
      <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-accent to-transparent opacity-30" />
      
      <div className="section-container relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          {/* Brand Column */}
          <div className="lg:col-span-2">
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="flex items-center gap-3 mb-6"
            >
              <div className="w-10 h-10 rounded-lg bg-accent flex items-center justify-center font-display text-xl font-black text-white">
                KS
              </div>
              <h2 className="font-display text-2xl font-bold tracking-tight">
                Kamlesh Kumar <span className="text-accent">Sharma</span>
              </h2>
            </motion.div>
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-white/60 text-lg leading-relaxed max-w-md mb-8"
            >
              Transforming ideas into digital reality. Specialized in building exceptional 
              digital experiences that are fast, accessible, and visually stunning.
            </motion.p>
            <div className="flex gap-4">
              {[
                { icon: <Linkedin size={20} />, href: 'https://www.linkedin.com/in/kamal-sharma-aa3450324/' },
                { icon: <Github size={20} />, href: '#' },
                { icon: <Instagram size={20} />, href: '#' }
              ].map((social, index) => (
                <motion.a
                  key={index}
                  whileHover={{ scale: 1.1, backgroundColor: 'hsl(var(--accent))' }}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-lg bg-white/5 flex items-center justify-center text-white/80 hover:text-white transition-all"
                >
                  {social.icon}
                </motion.a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-display text-xl font-bold mb-6 text-white">Quick Links</h3>
            <ul className="space-y-4">
              {['Home', 'About', 'Experience', 'Projects', 'Skills'].map((link) => (
                <li key={link}>
                  <a 
                    href={`#${link.toLowerCase()}`}
                    className="text-white/60 hover:text-accent transition-colors flex items-center gap-2 group"
                  >
                    <span className="w-1.5 h-1.5 rounded-full bg-accent opacity-0 group-hover:opacity-100 transition-opacity" />
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="font-display text-xl font-bold mb-6 text-white">Contact Info</h3>
            <ul className="space-y-4">
              <li className="flex items-center gap-3 text-white/60">
                <Mail size={18} className="text-accent" />
                <a href="mailto:sharmakamal11601@gmail.com" className="hover:text-white transition-colors">
                  sharmakamal11601@gmail.com
                </a>
              </li>
              <li className="flex items-center gap-3 text-white/60">
                <Phone size={18} className="text-accent" />
                <span>+91 7357510281</span>
              </li>
              <li className="flex items-center gap-3 text-white/60">
                <MapPin size={18} className="text-accent" />
                <span>Jaipur, Rajasthan, India</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="pt-12 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-6">
          <p className="text-white/40 text-sm flex items-center gap-1">
            © {currentYear} Kamlesh Kumar Sharma. Made with <Heart size={14} className="text-red-500 fill-red-500" /> in India.
          </p>
          
          <motion.button
            whileHover={{ y: -5 }}
            onClick={scrollToTop}
            className="group flex items-center gap-2 text-white/60 hover:text-white transition-colors"
          >
            <span className="text-sm font-bold uppercase tracking-widest">Back to top</span>
            <div className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center group-hover:bg-accent transition-all">
              <ArrowUp size={20} />
            </div>
          </motion.button>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

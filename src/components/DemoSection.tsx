import { Github, ExternalLink } from 'lucide-react';
import { motion } from 'framer-motion';
import carifyDemo from '@/assets/carify-demo.png';
import carifyMobile from '@/assets/carify-mobile.png';
import atsDemo from '@/assets/ats-demo.png';

const demos = [
  {
    title: 'ATS Global Tech',
    image: atsDemo,
    description: 'Company website with modern UI and responsive design',
    link: 'https://atsglobaltech.in/',
  },
  {
    title: 'Carify Dashboard',
    image: carifyDemo,
    description: 'Vehicle inspection ERP dashboard with analytics',
    link: 'https://carify-p42v.vercel.app/dashboard/inspection',
  },
  {
    title: 'Carify Mobile View',
    image: carifyMobile,
    description: 'Fully responsive mobile-first design',
    link: 'https://carify-p42v.vercel.app/dashboard/inspection',
  },
];

const DemoSection = () => {
  return (
    <section id="demos" className="py-24 lg:py-32 bg-background relative overflow-hidden">
      <div className="section-container relative z-10">
        {/* Section Header */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <p className="text-accent font-semibold mb-3 tracking-widest uppercase text-sm">Gallery</p>
          <h2 className="font-display text-4xl md:text-5xl font-bold text-primary">
            Project Visuals
          </h2>
          <div className="w-24 h-1.5 bg-accent mx-auto mt-6 rounded-full" />
          <p className="text-muted-foreground mt-8 max-w-2xl mx-auto text-lg leading-relaxed">
            A visual showcase of the user interfaces and experiences I've crafted recently.
          </p>
        </motion.div>

        {/* Demo Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">
          {demos.map((demo, index) => (
            <motion.a
              key={index}
              href={demo.link}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ y: -10 }}
              className="group bg-card rounded-3xl overflow-hidden shadow-xl border border-border/50 hover:border-accent/30 transition-all duration-300"
            >
              {/* Image */}
              <div className="relative overflow-hidden aspect-video">
                <img
                  src={demo.image}
                  alt={demo.title}
                  className="w-full h-full object-cover object-top transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-accent/80 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                  <motion.div
                    initial={{ scale: 0 }}
                    whileInView={{ scale: 1 }}
                    className="p-4 bg-white rounded-full text-accent shadow-2xl"
                  >
                    <ExternalLink size={24} />
                  </motion.div>
                </div>
              </div>

              {/* Content */}
              <div className="p-8">
                <h3 className="font-display text-xl font-bold text-foreground mb-2 group-hover:text-accent transition-colors">
                  {demo.title}
                </h3>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  {demo.description}
                </p>
              </div>
            </motion.a>
          ))}
        </div>

        {/* GitHub Link */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-20 text-center"
        >
          <motion.a
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            href="https://github.com/kamalsharmaji"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-4 px-10 py-5 bg-foreground text-background rounded-2xl font-black text-lg hover:bg-foreground/90 transition-all shadow-xl group"
          >
            <Github size={28} />
            <span>View Work History</span>
            <ExternalLink size={20} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
};

export default DemoSection;

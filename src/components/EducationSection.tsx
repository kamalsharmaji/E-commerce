import { GraduationCap, Calendar, MapPin } from 'lucide-react';
import { motion } from 'framer-motion';

const education = [
  {
    degree: 'Bachelor of Computer Applications',
    year: '2024',
    institution: 'Shree Jain College, Kekri, Ajmer (Raj)',
    description: 'Specialized in computer applications and modern software development.',
  },
  {
    degree: 'Senior Secondary (RBSE)',
    year: '2021',
    institution: 'GSSS, Malpura, Tonk',
    description: 'Higher secondary education with a focus on science and mathematics.',
  },
  {
    degree: 'Secondary (RBSE)',
    year: '2019',
    institution: 'GSSS, Uniara Khurd, Tonk',
    description: 'Foundational schooling with excellence.',
  },
];

const EducationSection = () => {
  return (
    <section id="education" className="py-24 lg:py-32 bg-secondary/30 relative overflow-hidden">
      <div className="section-container relative z-10">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <p className="text-accent font-semibold mb-3 tracking-widest uppercase text-sm">Background</p>
          <h2 className="font-display text-4xl md:text-5xl font-bold text-primary">
            Academic Journey
          </h2>
          <div className="w-24 h-1.5 bg-accent mx-auto mt-6 rounded-full" />
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {education.map((edu, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              whileHover={{ y: -10 }}
              className="bg-card p-10 rounded-3xl shadow-xl border border-border/50 hover:border-accent/30 hover:shadow-teal transition-all duration-300 relative group"
            >
              <div className="flex items-center gap-4 mb-8">
                <div className="p-4 rounded-2xl bg-accent/10 text-accent group-hover:bg-accent group-hover:text-white transition-all duration-300">
                  <GraduationCap size={32} />
                </div>
                <div>
                  <h3 className="font-display text-xl font-bold text-foreground group-hover:text-accent transition-colors leading-tight">
                    {edu.degree}
                  </h3>
                  <p className="text-muted-foreground font-bold text-sm mt-1">{edu.institution}</p>
                </div>
              </div>

              <div className="space-y-4 mb-8">
                <div className="flex items-center gap-3 text-muted-foreground text-base">
                  <Calendar size={18} className="text-accent" />
                  <span>{edu.year}</span>
                </div>
                <div className="flex items-center gap-3 text-muted-foreground text-base">
                  <MapPin size={18} className="text-accent" />
                  <span>Rajasthan, India</span>
                </div>
              </div>

              <p className="text-muted-foreground text-base leading-relaxed border-t border-border/50 pt-6">
                {edu.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default EducationSection;

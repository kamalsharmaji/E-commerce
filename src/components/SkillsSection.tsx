import { motion } from 'framer-motion';

const skills = [
  { name: 'HTML5', category: 'Frontend' },
  { name: 'CSS3', category: 'Frontend' },
  { name: 'Tailwind CSS', category: 'Frontend' },
  { name: 'JavaScript', category: 'Frontend' },
  { name: 'React.js', category: 'Frontend' },
  { name: 'Basic TypeScript', category: 'Frontend' },
  { name: 'Basic C#', category: 'Backend' },
  { name: '.NET', category: 'Backend' },
  { name: 'MySQL', category: 'Database' },
  { name: 'CRUD Operations', category: 'Backend' },
  { name: 'REST APIs', category: 'Backend' },
  { name: 'Git & GitHub', category: 'Tools' },
  { name: 'Figma to UI', category: 'Tools' },
  { name: 'Responsive Design', category: 'Frontend' },
];

const SkillsSection = () => {
  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.05
      }
    }
  };

  const item = {
    hidden: { opacity: 0, scale: 0.8, y: 10 },
    show: { opacity: 1, scale: 1, y: 0 }
  };

  return (
    <section id="skills" className="py-24 lg:py-32 bg-secondary/30 relative overflow-hidden">
      <div className="section-container relative z-10">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <p className="text-accent font-semibold mb-3 tracking-widest uppercase text-sm">Expertise</p>
          <h2 className="font-display text-4xl md:text-5xl font-bold text-primary">
            Technical Arsenal
          </h2>
          <div className="w-24 h-1.5 bg-accent mx-auto mt-6 rounded-full" />
        </motion.div>

        <motion.div 
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="max-w-5xl mx-auto mb-20"
        >
          <div className="flex flex-wrap justify-center gap-4 lg:gap-6">
            {skills.map((skill, index) => (
              <motion.div
                key={index}
                variants={item}
                whileHover={{ 
                  scale: 1.1, 
                  backgroundColor: 'hsl(var(--accent))', 
                  color: 'white',
                  boxShadow: '0 10px 25px -5px rgba(20, 184, 166, 0.4)'
                }}
                className="skill-tag cursor-default px-6 py-3 text-lg font-bold transition-all duration-300 bg-card border border-border shadow-sm"
              >
                {skill.name}
              </motion.div>
            ))}
          </div>
        </motion.div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {[
            { title: 'Frontend', count: 7, color: 'bg-accent', delay: 0 },
            { title: 'Backend', count: 4, color: 'bg-primary', delay: 0.1 },
            { title: 'Database', count: 1, color: 'bg-teal-dark', delay: 0.2 },
            { title: 'Tools', count: 2, color: 'bg-navy-light', delay: 0.3 },
          ].map((category, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: category.delay }}
              whileHover={{ y: -5 }}
              className="bg-card rounded-2xl p-8 text-center shadow-lg border border-border/50 hover:border-accent/30 transition-all duration-300"
            >
              <div className={`w-16 h-16 ${category.color} rounded-2xl mx-auto mb-6 flex items-center justify-center text-primary-foreground font-bold text-2xl shadow-lg`}>
                {category.count}+
              </div>
              <h4 className="font-display text-xl font-bold text-foreground mb-2">{category.title}</h4>
              <p className="text-muted-foreground text-sm font-medium uppercase tracking-wider">Technologies</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;

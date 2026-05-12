import { Briefcase, Calendar } from 'lucide-react';
import { motion } from 'framer-motion';

const experiences = [
  {
    role: 'Frontend Web Developer',
    company: 'ATS Global Tech, Jaipur',
    period: '10/2025 – Current',
    description: [
      'Developed responsive and user-friendly web interfaces using React.js, HTML, CSS, and Tailwind CSS.',
      'Converted UI/UX designs into pixel-perfect functional web pages.',
      'Integrated frontend components with REST APIs.',
      'Fixed UI bugs and improved performance across devices.',
      'Collaborated with team members and followed Git/GitHub version control.'
    ],
  },
  {
    role: 'Backend Developer',
    company: 'Pace Infotech, Jaipur',
    period: '03/2025 – 09/2025',
    description: [
      'Worked with C# and .NET Framework.',
      'Performed CRUD operations using Entity Framework.',
      'Managed MySQL and SQL Server databases.',
      'Implemented REST APIs using HTTP methods.'
    ],
  },
  {
    role: 'Internship Training',
    company: 'Pace Infotech, Jaipur',
    period: '05/2024 – 02/2025',
    description: [
      'Hands-on training in HTML5, CSS3, JavaScript, and React.js.',
      'Built responsive and mobile-friendly UIs.',
      'Practiced component-based architecture and hooks.',
      'Used Git & GitHub for version control.'
    ],
  },
];

const ExperienceSection = () => {
  return (
    <section id="experience" className="py-24 lg:py-32 bg-background relative overflow-hidden">
      <div className="section-container relative z-10">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <p className="text-accent font-semibold mb-3 tracking-widest uppercase text-sm">Resume</p>
          <h2 className="font-display text-4xl md:text-5xl font-bold text-primary">
            Work Experience
          </h2>
          <div className="w-24 h-1.5 bg-accent mx-auto mt-6 rounded-full" />
        </motion.div>

        <div className="max-w-4xl mx-auto">
          {experiences.map((exp, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              className="relative pl-8 pb-16 last:pb-0 group"
            >
              <div className="absolute left-0 top-0 bottom-0 w-px bg-border group-last:bg-transparent group-hover:bg-accent transition-colors duration-500" />
              <div className="absolute left-[-8px] top-0 w-4 h-4 rounded-full bg-card border-2 border-accent group-hover:bg-accent group-hover:scale-125 transition-all duration-300 shadow-lg shadow-accent/20" />

              <div className="bg-card p-8 rounded-3xl shadow-lg border border-border/50 hover:border-accent/30 hover:shadow-teal transition-all duration-300">
                <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-6">
                  <div>
                    <h3 className="font-display text-2xl font-bold text-foreground group-hover:text-accent transition-colors">
                      {exp.role}
                    </h3>
                    <div className="flex items-center gap-2 text-accent font-semibold mt-1">
                      <Briefcase size={18} />
                      <span>{exp.company}</span>
                    </div>
                  </div>
                  <div className="flex items-center gap-2 px-4 py-2 bg-secondary rounded-xl text-muted-foreground font-bold text-sm border border-border/50">
                    <Calendar size={16} className="text-accent" />
                    <span>{exp.period}</span>
                  </div>
                </div>

                <ul className="space-y-4">
                  {exp.description.map((item, i) => (
                    <li key={i} className="flex items-start gap-4 text-muted-foreground text-lg leading-relaxed">
                      <div className="mt-2.5 w-2 h-2 rounded-full bg-accent/30 group-hover:bg-accent transition-colors flex-shrink-0" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;

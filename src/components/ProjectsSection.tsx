import { ExternalLink, Globe, Users, Car, Building2, Github, ShoppingCart } from 'lucide-react';
import { motion } from 'framer-motion';
import atsDemo from '@/assets/ats-demo.png';
import carifyDemo from '@/assets/carify-demo.png';

const projects = [
  {
    title: 'ATS Global Tech Website',
    description: 'Lead developer for UI updates and enhancements based on company requirements. Focused on responsive design and modern UI patterns.',
    icon: Globe,
    image: atsDemo,
    tags: ['React.js', 'Tailwind CSS', 'Responsive'],
    status: 'Completed',
    link: 'https://atsglobaltech.in/',
    github: '#'
  },
  {
    title: 'HRMS – Human Resource Management',
    description: 'Comprehensive UI design for HR management screens including employee dashboards, leave management, and reporting modules.',
    icon: Users,
    image: '/placeholder.svg',
    tags: ['React.js', 'UI/UX', 'Dashboard'],
    status: 'Completed',
    link: null,
    github: '#'
  },
  {
    title: 'HRMS – Hotel & Restaurant Management',
    description: 'Collaborative team project featuring dashboard & management UI screens for hotel and restaurant operations.',
    icon: Building2,
    image: '/placeholder.svg',
    tags: ['React.js', 'Team Project', 'CRUD'],
    status: 'Completed',
    link: 'https://hms-five-xi.vercel.app/',
    github: '#'
  },
  {
    title: 'Carify – PDI ERP Model',
    description: 'ERP-based UI Design with vehicle inspection and management modules. Building scalable frontend architecture.',
    icon: Car,
    image: carifyDemo,
    tags: ['React.js', 'ERP', 'Tailwind CSS'],
    status: 'In Progress',
    link: 'https://carify-p42v.vercel.app/dashboard/inspection',
    github: '#'
  },
  {
    title: 'E-commerce Platform',
    description: 'A feature-rich e-commerce application with a modern UI, product filtering, and a seamless shopping experience.',
    icon: ShoppingCart,
    image: '/placeholder.svg',
    tags: ['React.js', 'Vite', 'Tailwind CSS', 'State Management'],
    status: 'Completed',
    link: 'https://e-commercee-flame.vercel.app/',
    github: '#'
  },
];

const ProjectsSection = () => {
  return (
    <section id="projects" className="py-24 lg:py-32 bg-secondary/30 relative">
      <div className="section-container">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <p className="text-accent font-semibold mb-3 tracking-widest uppercase text-sm">Portfolio</p>
          <h2 className="font-display text-4xl md:text-5xl font-bold text-primary">
            Featured Projects
          </h2>
          <div className="w-24 h-1.5 bg-accent mx-auto mt-6 rounded-full" />
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8 lg:gap-12">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ y: -10 }}
              className="group bg-card rounded-2xl overflow-hidden shadow-lg border border-border/50 hover:border-accent/30 hover:shadow-teal transition-all duration-300 relative"
            >
              <div className="h-64 overflow-hidden relative">
                <img 
                  src={project.image} 
                  alt={project.title} 
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
                
                <div className="absolute top-6 right-6">
                  <span
                    className={`px-4 py-1.5 text-xs font-bold rounded-full uppercase tracking-wider ${
                      project.status === 'In Progress'
                        ? 'bg-amber-100/90 text-amber-700 backdrop-blur-sm'
                        : 'bg-green-100/90 text-green-700 backdrop-blur-sm'
                    }`}
                  >
                    {project.status}
                  </span>
                </div>

                <div className="absolute bottom-6 left-8 right-8">
                   <div className="flex items-center gap-3 mb-2">
                      <div className="p-2 bg-accent rounded-lg text-white">
                        <project.icon size={20} />
                      </div>
                      <h3 className="font-display text-2xl font-bold text-white">
                        {project.title}
                      </h3>
                   </div>
                </div>
              </div>

              <div className="p-8">
                <p className="text-muted-foreground text-lg mb-8 leading-relaxed line-clamp-3">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-2.5 mb-10">
                  {project.tags.map((tag, i) => (
                    <span
                      key={i}
                      className="px-4 py-1.5 text-sm font-semibold bg-secondary text-secondary-foreground rounded-lg border border-border/50 group-hover:border-accent/20 transition-colors"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                <div className="flex items-center gap-6">
                  {project.link ? (
                    <motion.a
                      whileHover={{ scale: 1.05, x: 5 }}
                      href={project.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 text-accent font-bold text-lg hover:text-accent/80 transition-all"
                    >
                      <span>View Live</span>
                      <ExternalLink size={20} />
                    </motion.a>
                  ) : (
                    <div className="flex items-center gap-2 text-muted-foreground font-bold text-lg">
                      <span>In Development</span>
                    </div>
                  )}
                  
                  <motion.a
                    whileHover={{ scale: 1.05 }}
                    href={project.github}
                    className="text-muted-foreground hover:text-accent transition-colors ml-auto"
                    aria-label="GitHub Repository"
                  >
                    <Github size={24} />
                  </motion.a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;

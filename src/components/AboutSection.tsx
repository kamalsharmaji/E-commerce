import { MapPin, Mail, Phone, Linkedin, Code2, Users, Zap } from 'lucide-react';
import { motion } from 'framer-motion';

const AboutSection = () => {
  const fadeIn = {
    initial: { opacity: 0, y: 20 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true },
    transition: { duration: 0.6 }
  };

  return (
    <section id="about" className="py-24 lg:py-32 bg-background relative overflow-hidden">
      {/* Decorative background elements */}
      <div className="absolute top-0 right-0 w-64 h-64 bg-accent/5 rounded-full -mr-32 -mt-32 blur-3xl" />
      <div className="absolute bottom-0 left-0 w-64 h-64 bg-primary/5 rounded-full -ml-32 -mb-32 blur-3xl" />

      <div className="section-container relative z-10">
        {/* Section Header */}
        <motion.div 
          {...fadeIn}
          className="text-center mb-20"
        >
          <p className="text-accent font-semibold mb-3 tracking-widest uppercase text-sm">About Me</p>
          <h2 className="font-display text-4xl md:text-5xl font-bold text-primary">
            Know Me Better
          </h2>
          <div className="w-24 h-1.5 bg-accent mx-auto mt-6 rounded-full" />
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-16 items-start">
          {/* Left - About Text */}
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h3 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-8 leading-tight">
              I'm <span className="text-accent">Kamlesh Kumar Sharma</span>,<br />
              a passionate Frontend Developer
            </h3>
            <div className="space-y-6 text-muted-foreground text-lg leading-relaxed mb-10">
              <p>
                Frontend Web Developer experienced in <strong className="text-foreground font-semibold">React.js, JavaScript, HTML, CSS, and Tailwind CSS</strong> with basic backend knowledge of <strong className="text-foreground font-semibold">C# and .NET</strong>.
              </p>
              <p>
                Proven ability to build responsive UIs, integrate APIs, fix bugs, and collaborate in team-based projects. Dedicated to creating pixel-perfect, user-friendly experiences.
              </p>
            </div>

            {/* Contact Info Cards */}
            <div className="grid sm:grid-cols-2 gap-6">
              {[
                { icon: <MapPin size={20} />, text: 'Jaipur, India – 302003', link: '#' },
                { icon: <Mail size={20} />, text: 'sharmakamal11601@gmail.com', link: 'mailto:sharmakamal11601@gmail.com' },
                { icon: <Phone size={20} />, text: '+91 7357510281', link: 'tel:+917357510281' },
                { icon: <Linkedin size={20} />, text: 'LinkedIn Profile', link: 'https://www.linkedin.com/in/kamal-sharma-aa3450324/' },
              ].map((item, index) => (
                <motion.a
                  key={index}
                  href={item.link}
                  target={item.link.startsWith('http') ? "_blank" : "_self"}
                  rel="noopener noreferrer"
                  whileHover={{ x: 5 }}
                  className="flex items-center gap-4 text-muted-foreground hover:text-accent transition-colors p-3 rounded-lg hover:bg-accent/5 border border-transparent hover:border-accent/10"
                >
                  <div className="p-2 rounded-md bg-accent/10 text-accent">
                    {item.icon}
                  </div>
                  <span className="text-sm font-medium truncate">{item.text}</span>
                </motion.a>
              ))}
            </div>
          </motion.div>

          {/* Right - Stats/Highlights */}
          <div className="space-y-8">
            {[
              {
                icon: <Code2 size={32} />,
                title: '6Month+ Experience',
                desc: 'Specialized in building scalable, component-based UIs with React and modern state management.'
              },
              {
                icon: <Users size={32} />,
                title: 'Team Player',
                desc: 'Adept at working in Agile environments, utilizing Git/GitHub for seamless collaboration and version control.'
              },
              {
                icon: <Zap size={32} />,
                title: 'Performance Oriented',
                desc: 'Committed to building pixel-perfect designs with optimized assets and lightning-fast load times.'
              }
            ].map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                className="group bg-card rounded-2xl p-8 shadow-sm border border-border/50 hover:border-accent/30 hover:shadow-teal transition-all duration-300"
              >
                <div className="flex items-start gap-6">
                  <div className="p-4 rounded-2xl bg-accent/10 text-accent group-hover:bg-accent group-hover:text-white transition-colors duration-300">
                    {stat.icon}
                  </div>
                  <div>
                    <h4 className="font-display text-2xl font-bold text-foreground mb-2">
                      {stat.title}
                    </h4>
                    <p className="text-muted-foreground text-lg leading-relaxed">
                      {stat.desc}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;

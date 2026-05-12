import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, Globe, Linkedin, Github, Download, FileText, Printer } from 'lucide-react';

const Resume = () => {
  return (
    <div className="min-h-screen bg-slate-100 py-12 px-4 sm:px-6 lg:px-8 print:bg-white print:py-0 print:px-0">
      {/* Action Bar - Hidden during print */}
      <div className="max-w-4xl mx-auto mb-8 flex flex-col sm:flex-row items-center justify-between gap-4 bg-white p-6 rounded-2xl shadow-xl border border-accent/20 print:hidden">
        <div>
          <h2 className="text-2xl font-black text-primary flex items-center gap-2">
            <FileText className="text-accent" /> Professional Resume
          </h2>
          <p className="text-muted-foreground font-medium text-sm">Preview and download your portfolio-synced resume</p>
        </div>
        <div className="flex gap-4">
          <button 
            onClick={() => window.print()}
            className="flex items-center gap-2 px-8 py-4 bg-accent text-white font-black text-lg rounded-xl hover:bg-accent-dark transition-all shadow-lg shadow-accent/30 hover:scale-105 active:scale-95"
          >
            <Printer size={20} /> Print / Save as PDF
          </button>
        </div>
      </div>

      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="max-w-4xl mx-auto bg-white shadow-2xl p-8 sm:p-16 print:shadow-none print:p-0 rounded-3xl"
      >
        {/* Header */}
        <header className="border-b-4 border-accent pb-10 mb-10">
          <h1 className="text-5xl sm:text-6xl font-black text-gray-900 mb-6 tracking-tight">Kamlesh Kumar Sharma</h1>
          <div className="flex flex-wrap gap-y-4 gap-x-8 text-gray-600 text-base sm:text-lg font-bold">
            <span className="flex items-center gap-2"><MapPin size={20} className="text-accent" /> Jaipur, India 302003</span>
            <span className="flex items-center gap-2"><Phone size={20} className="text-accent" /> +91 7357501281</span>
            <span className="flex items-center gap-2"><Mail size={20} className="text-accent" /> sharmakamal11601@gmail.com</span>
          </div>
        </header>

        {/* Summary */}
        <section className="mb-12">
          <h2 className="text-2xl font-black uppercase tracking-[0.2em] text-accent mb-6 flex items-center gap-3">
             Summary
          </h2>
          <p className="text-gray-700 leading-relaxed text-xl font-medium">
            Frontend Web Developer experienced in <span className="text-gray-900 font-bold underline decoration-accent/30 underline-offset-4">React.js, JavaScript, HTML, CSS, and Tailwind CSS</span> with basic backend
            knowledge of <span className="text-gray-900 font-bold">C# and .NET</span>. Proven ability to build responsive UIs, integrate APIs, fix bugs, and collaborate in
            team-based projects.
          </p>
        </section>

        {/* Experience */}
        <section className="mb-12">
          <h2 className="text-2xl font-black uppercase tracking-[0.2em] text-accent mb-8">Experience</h2>
          <div className="space-y-12">
            <div>
              <div className="flex flex-col sm:flex-row justify-between items-start mb-2 gap-2">
                <h3 className="text-2xl font-black text-gray-900">Frontend Web Developer</h3>
                <span className="bg-slate-100 px-4 py-1 rounded-full text-slate-600 font-black text-sm border border-slate-200 uppercase tracking-wider">10/2025 – Current</span>
              </div>
              <p className="text-accent font-black text-lg mb-4">ATS Global Tech, Jaipur</p>
              <ul className="list-none space-y-3 text-gray-700 text-lg">
                {[
                  'Developed responsive and user-friendly web interfaces using React.js, HTML, CSS, and Tailwind CSS.',
                  'Converted UI/UX designs into pixel-perfect functional web pages.',
                  'Integrated frontend components with REST APIs.',
                  'Fixed UI bugs and improved performance across devices.',
                  'Collaborated with team members and followed Git/GitHub version control.'
                ].map((item, i) => (
                  <li key={i} className="flex gap-3">
                    <span className="text-accent mt-1.5 flex-shrink-0">●</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <div className="flex flex-col sm:flex-row justify-between items-start mb-2 gap-2">
                <h3 className="text-2xl font-black text-gray-900">Backend Developer</h3>
                <span className="bg-slate-100 px-4 py-1 rounded-full text-slate-600 font-black text-sm border border-slate-200 uppercase tracking-wider">03/2025 – 09/2025</span>
              </div>
              <p className="text-accent font-black text-lg mb-4">Pace Infotech, Jaipur</p>
              <ul className="list-none space-y-3 text-gray-700 text-lg">
                {[
                  'Worked with C# and .NET Framework.',
                  'Performed CRUD operations using Entity Framework.',
                  'Managed MySQL and SQL Server databases.',
                  'Implemented REST APIs using HTTP methods.'
                ].map((item, i) => (
                  <li key={i} className="flex gap-3">
                    <span className="text-accent mt-1.5 flex-shrink-0">●</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <div className="flex flex-col sm:flex-row justify-between items-start mb-2 gap-2">
                <h3 className="text-2xl font-black text-gray-900">Internship Training</h3>
                <span className="bg-slate-100 px-4 py-1 rounded-full text-slate-600 font-black text-sm border border-slate-200 uppercase tracking-wider">05/2024 – 02/2025</span>
              </div>
              <p className="text-accent font-black text-lg mb-4">Pace Infotech, Jaipur</p>
              <ul className="list-none space-y-3 text-gray-700 text-lg">
                {[
                  'Hands-on training in HTML5, CSS3, JavaScript, and React.js.',
                  'Built responsive and mobile-friendly UIs.',
                  'Practiced component-based architecture and hooks.',
                  'Used Git & GitHub for version control.'
                ].map((item, i) => (
                  <li key={i} className="flex gap-3">
                    <span className="text-accent mt-1.5 flex-shrink-0">●</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </section>

        {/* Skills */}
        <section className="mb-12">
          <h2 className="text-2xl font-black uppercase tracking-[0.2em] text-accent mb-6">Skills</h2>
          <div className="flex flex-wrap gap-3">
            {[
              'HTML5', 'CSS3', 'Tailwind CSS', 'JavaScript', 'React.js', 
              'Basic TypeScript', 'Basic C#', '.NET', 'MySQL', 'CRUD Operations'
            ].map((skill, i) => (
              <span key={i} className="bg-slate-50 px-4 py-2 border border-slate-200 text-gray-800 font-bold rounded-lg text-lg">
                {skill}
              </span>
            ))}
          </div>
        </section>

        {/* Projects */}
        <section className="mb-12">
          <h2 className="text-2xl font-black uppercase tracking-[0.2em] text-accent mb-6">Projects</h2>
          <ul className="list-none space-y-4 text-gray-700 text-lg">
            {[
              { name: 'E-commerce Platform', desc: 'Modern web application with product filtering and seamless UI.' },
              { name: 'ATS Global Tech Website', desc: 'UI updates based on company requirements' },
              { name: 'HRMS – Human Resource Management System', desc: '(UI Design)' },
              { name: 'HRMS – Hotel & Restaurant Management System', desc: '(Team Project)' },
              { name: 'Carify ERP', desc: 'UI design & working modules' }
            ].map((proj, i) => (
              <li key={i} className="flex gap-3">
                <span className="text-accent mt-1.5 flex-shrink-0">■</span>
                <span><strong className="text-gray-900">{proj.name}</strong> – {proj.desc}</span>
              </li>
            ))}
          </ul>
        </section>

        {/* Education */}
        <section>
          <h2 className="text-2xl font-black uppercase tracking-[0.2em] text-accent mb-6 text-left">Education</h2>
          <div className="grid sm:grid-cols-2 gap-8">
            <div className="border-l-4 border-slate-100 pl-6">
              <h3 className="text-xl font-black text-gray-900 leading-tight mb-1">Bachelor of Computer Applications</h3>
              <p className="text-accent font-bold mb-1">Shree Jain College, Kekri (2024)</p>
              <p className="text-gray-500 font-medium italic">Rajasthan University</p>
            </div>
            <div className="border-l-4 border-slate-100 pl-6">
              <h3 className="text-xl font-black text-gray-900 leading-tight mb-1">Senior Secondary (RBSE)</h3>
              <p className="text-accent font-bold mb-1">GSSS, Malpura (2021)</p>
              <p className="text-gray-500 font-medium italic">85% Aggregate</p>
            </div>
          </div>
        </section>

        <div className="mt-20 text-center border-t border-slate-100 pt-10 text-slate-400 font-bold text-sm uppercase tracking-widest print:hidden">
          Generated via Professional Portfolio System
        </div>
      </motion.div>
    </div>
  );
};

export default Resume;

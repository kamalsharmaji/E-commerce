import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, Globe, Linkedin, Github } from 'lucide-react';

const Resume = () => {
  return (
    <div className="min-h-screen bg-gray-50 py-12 px-4 sm:px-6 lg:px-8 print:bg-white print:py-0 print:px-0">
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="max-w-4xl mx-auto bg-white shadow-2xl p-8 sm:p-12 print:shadow-none"
      >
        {/* Header */}
        <header className="border-b-2 border-accent pb-8 mb-8">
          <h1 className="text-4xl sm:text-5xl font-black text-gray-900 mb-4">Kamlesh Kumar Sharma</h1>
          <div className="flex flex-wrap gap-4 text-gray-600 text-sm sm:text-base">
            <span className="flex items-center gap-1"><MapPin size={16} className="text-accent" /> Jaipur, India 302003</span>
            <span className="flex items-center gap-1"><Phone size={16} className="text-accent" /> +91 7357501281</span>
            <span className="flex items-center gap-1"><Mail size={16} className="text-accent" /> sharmakamal11601@gmail.com</span>
          </div>
        </header>

        {/* Summary */}
        <section className="mb-10">
          <h2 className="text-xl font-black uppercase tracking-widest text-accent mb-4">Summary</h2>
          <p className="text-gray-700 leading-relaxed text-lg">
            Frontend Web Developer experienced in React.js, JavaScript, HTML, CSS, and Tailwind CSS with basic backend
            knowledge of C# and .NET. Proven ability to build responsive UIs, integrate APIs, fix bugs, and collaborate in
            team-based projects.
          </p>
        </section>

        {/* Experience */}
        <section className="mb-10">
          <h2 className="text-xl font-black uppercase tracking-widest text-accent mb-4">Experience</h2>
          <div className="space-y-8">
            <div>
              <div className="flex justify-between items-start mb-2">
                <h3 className="text-xl font-bold text-gray-900">Frontend Web Developer</h3>
                <span className="text-gray-500 font-bold">10/2025 – Current</span>
              </div>
              <p className="text-accent font-bold mb-3">ATS Global Tech, Jaipur</p>
              <ul className="list-disc list-outside ml-5 space-y-2 text-gray-700">
                <li>Developed responsive and user-friendly web interfaces using React.js, HTML, CSS, and Tailwind CSS.</li>
                <li>Converted UI/UX designs into pixel-perfect functional web pages.</li>
                <li>Integrated frontend components with REST APIs.</li>
                <li>Fixed UI bugs and improved performance across devices.</li>
                <li>Collaborated with team members and followed Git/GitHub version control.</li>
              </ul>
            </div>
            <div>
              <div className="flex justify-between items-start mb-2">
                <h3 className="text-xl font-bold text-gray-900">Backend Developer</h3>
                <span className="text-gray-500 font-bold">03/2025 – 09/2025</span>
              </div>
              <p className="text-accent font-bold mb-3">Pace Infotech, Jaipur</p>
              <ul className="list-disc list-outside ml-5 space-y-2 text-gray-700">
                <li>Worked with C# and .NET Framework.</li>
                <li>Performed CRUD operations using Entity Framework.</li>
                <li>Managed MySQL and SQL Server databases.</li>
                <li>Implemented REST APIs using HTTP methods.</li>
              </ul>
            </div>
            <div>
              <div className="flex justify-between items-start mb-2">
                <h3 className="text-xl font-bold text-gray-900">Internship Training</h3>
                <span className="text-gray-500 font-bold">05/2024 – 02/2025</span>
              </div>
              <p className="text-accent font-bold mb-3">Pace Infotech, Jaipur</p>
              <ul className="list-disc list-outside ml-5 space-y-2 text-gray-700">
                <li>Hands-on training in HTML5, CSS3, JavaScript, and React.js.</li>
                <li>Built responsive and mobile-friendly UIs.</li>
                <li>Practiced component-based architecture and hooks.</li>
                <li>Used Git & GitHub for version control.</li>
              </ul>
            </div>
          </div>
        </section>

        {/* Skills */}
        <section className="mb-10">
          <h2 className="text-xl font-black uppercase tracking-widest text-accent mb-4">Skills</h2>
          <p className="text-gray-700 leading-relaxed font-medium">
            HTML5, CSS3, Tailwind CSS, JavaScript, React.js, Basic TypeScript, Basic C# & .NET, MySQL, CRUD Operations
          </p>
        </section>

        {/* Education */}
        <section className="mb-10">
          <h2 className="text-xl font-black uppercase tracking-widest text-accent mb-4">Education</h2>
          <div className="space-y-6">
            <div>
              <div className="flex justify-between items-start mb-1">
                <h3 className="text-lg font-bold text-gray-900">Bachelor of Computer Applications</h3>
                <span className="text-gray-500 font-bold">2024</span>
              </div>
              <p className="text-gray-600">Shree Jain College, Kekri, Ajmer (Raj)</p>
            </div>
            <div>
              <div className="flex justify-between items-start mb-1">
                <h3 className="text-lg font-bold text-gray-900">Senior Secondary (RBSE)</h3>
                <span className="text-gray-500 font-bold">2021</span>
              </div>
              <p className="text-gray-600">GSSS, Malpura, Tonk</p>
            </div>
            <div>
              <div className="flex justify-between items-start mb-1">
                <h3 className="text-lg font-bold text-gray-900">Secondary (RBSE)</h3>
                <span className="text-gray-500 font-bold">2019</span>
              </div>
              <p className="text-gray-600">GSSS, Uniara Khurd, Tonk</p>
            </div>
          </div>
        </section>

        {/* Projects */}
        <section>
          <h2 className="text-xl font-black uppercase tracking-widest text-accent mb-4">Projects</h2>
          <ul className="list-disc list-outside ml-5 space-y-2 text-gray-700">
            <li><strong>E-commerce Platform</strong> – Modern web application with product filtering and seamless UI.</li>
            <li><strong>ATS Global Tech Website</strong> – UI updates based on company requirements</li>
            <li><strong>HRMS – Human Resource Management System</strong> (UI Design)</li>
            <li><strong>HRMS – Hotel & Restaurant Management System</strong> (Team Project)</li>
            <li><strong>Carify ERP</strong> – UI design & working modules</li>
          </ul>
        </section>

        <div className="mt-12 text-center print:hidden">
          <button 
            onClick={() => window.print()}
            className="btn-primary"
          >
            Save as PDF
          </button>
        </div>
      </motion.div>
    </div>
  );
};

export default Resume;

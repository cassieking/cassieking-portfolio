
import { Mail, Linkedin, ChevronRight, Briefcase, GraduationCap, Server, Award } from 'lucide-react';

function App() {
  return (
    <div className="min-h-screen bg-gray-950 text-gray-300 font-sans selection:bg-fuchsia-900 selection:text-fuchsia-50">
      {/* Navigation */}
      <nav className="sticky top-0 z-50 backdrop-blur-md bg-gray-950/80 border-b border-gray-800">
        <div className="max-w-5xl mx-auto px-6 py-4 flex justify-between items-center">
          <a href="#" className="text-3xl font-extrabold text-gray-100 tracking-wider">
            CASSIE <span className="text-fuchsia-500">KING</span>
          </a>
          <div className="space-x-6 text-sm font-medium hidden sm:block">
            <a href="#about" className="hover:text-fuchsia-400 transition-colors">About</a>
            <a href="#skills" className="hover:text-fuchsia-400 transition-colors">Skills</a>
            <a href="#experience" className="hover:text-fuchsia-400 transition-colors">Experience</a>
            <a href="#credentials" className="hover:text-fuchsia-400 transition-colors">Credentials</a>
            <a href="#contact" className="hover:text-fuchsia-400 transition-colors">Contact</a>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <header className="max-w-5xl mx-auto px-6 py-24 md:py-32">
        <h1 className="text-5xl md:text-7xl font-extrabold text-gray-100 tracking-tight mb-6">
          Hospitality Operations & <br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-fuchsia-500 to-blue-500">
            Event Management
          </span>
        </h1>
        <p className="text-xl text-gray-400 max-w-2xl leading-relaxed mb-10">
          Running the operation, orchestrating big moments, and solving problems for guests. A proven record of directing high-volume environments and team leadership.
        </p>
        <div className="flex space-x-4">
          <a href="#contact" className="bg-fuchsia-600 hover:bg-fuchsia-700 text-white px-6 py-3 rounded-md font-semibold transition-colors shadow-[0_0_15px_rgba(192,38,211,0.3)]">
            Get in Touch
          </a>
          <a href="#experience" className="border border-gray-700 hover:border-fuchsia-500 hover:text-fuchsia-400 text-gray-300 px-6 py-3 rounded-md font-semibold transition-all">
            View Experience
          </a>
        </div>
      </header>

      {/* Professional Summary */}
      <section id="about" className="max-w-5xl mx-auto px-6 py-16">
        <h2 className="text-2xl font-bold text-gray-100 mb-6 flex items-center">
          <span className="bg-gray-800 p-2 rounded-lg mr-4 text-fuchsia-500">
            <Briefcase size={24} />
          </span>
          Professional Summary
        </h2>
        <div className="bg-gray-900 border border-gray-800 p-8 rounded-xl shadow-lg">
          <p className="text-gray-400 leading-relaxed text-lg mb-4">
            Operations leader and management professional with 4+ years of progressive experience in high-volume hospitality environments. Proven track record in bar management, shift leadership, team development, and orchestrating large-party service. Excels at running the floor, coordinating complex logistics, and resolving guest issues under pressure.
          </p>
          <p className="text-gray-400 leading-relaxed text-lg">
            Currently pursuing advanced credentials in project management and hospitality supervision to further transition into broader operations and event leadership roles.
          </p>
        </div>
      </section>

      {/* Core Skills */}
      <section id="skills" className="max-w-5xl mx-auto px-6 py-16">
        <h2 className="text-2xl font-bold text-gray-100 mb-6 flex items-center">
          <span className="bg-gray-800 p-2 rounded-lg mr-4 text-blue-500">
            <Server size={24} />
          </span>
          Core Skills
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {[
            "Operations Management & Shift Leadership",
            "Staff Training, Onboarding, and Development",
            "Event Coordination & Banquet Logistics",
            "Guest Services Management & Problem Resolution",
            "Inventory Management, Purchasing, and Cost Control",
            "High-Volume Dining & Bar Operations",
            "Vendor Relations & Facility Coordination",
            "Team Scheduling and Daily Workflow Execution"
          ].map((skill, index) => (
            <div key={index} className="flex items-start p-4 bg-gray-900 border border-gray-800 rounded-lg hover:border-fuchsia-900 transition-colors">
              <ChevronRight className="text-fuchsia-500 mr-3 mt-1 shrink-0" size={18} />
              <span className="text-gray-300">{skill}</span>
            </div>
          ))}
        </div>
      </section>

      {/* Experience */}
      <section id="experience" className="max-w-5xl mx-auto px-6 py-16">
        <h2 className="text-2xl font-bold text-gray-100 mb-8 flex items-center">
          <span className="bg-gray-800 p-2 rounded-lg mr-4 text-purple-500">
            <GraduationCap size={24} />
          </span>
          Professional Experience
        </h2>
        <div className="space-y-8 relative before:absolute before:inset-0 before:ml-5 before:-translate-x-px md:before:mx-auto md:before:translate-x-0 before:h-full before:w-0.5 before:bg-gradient-to-b before:from-transparent before:via-gray-800 before:to-transparent">
          
          {/* Fogo de Chao */}
          <div className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group is-active">
            <div className="flex items-center justify-center w-10 h-10 rounded-full border-4 border-gray-950 bg-fuchsia-600 text-gray-100 shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2 shadow-[0_0_10px_rgba(192,38,211,0.5)] z-10">
              <Briefcase size={16} />
            </div>
            <div className="w-[calc(100%-4rem)] md:w-[calc(50%-2.5rem)] p-6 rounded-xl bg-gray-900 border border-gray-800 hover:border-fuchsia-600/50 transition-colors shadow-lg">
              <div className="flex flex-col md:flex-row md:justify-between md:items-baseline mb-2">
                <h3 className="text-xl font-bold text-gray-100">Fogo de Chao</h3>
                <span className="text-sm text-fuchsia-400 font-medium">Nov 2025 – Present</span>
              </div>
              <h4 className="text-md text-gray-400 mb-4 font-medium uppercase tracking-wide">Server Trainer & Bartender</h4>
              <ul className="list-disc list-outside ml-4 space-y-2 text-gray-400 text-sm">
                <li>Direct daily floor operations and team workflow in a high-end Brazilian steakhouse, ensuring seamless execution during peak volume.</li>
                <li>Lead comprehensive onboarding and training programs for new staff, elevating service consistency and operational standards.</li>
                <li>Coordinate logistics and execution for large parties and events, managing pacing, special requests, and VIP guest experiences.</li>
              </ul>
            </div>
          </div>

          {/* Eggspectation */}
          <div className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group is-active">
            <div className="flex items-center justify-center w-10 h-10 rounded-full border-4 border-gray-950 bg-gray-800 text-gray-400 shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2 z-10">
              <Briefcase size={16} />
            </div>
            <div className="w-[calc(100%-4rem)] md:w-[calc(50%-2.5rem)] p-6 rounded-xl bg-gray-900 border border-gray-800 hover:border-purple-600/50 transition-colors shadow-lg">
              <div className="flex flex-col md:flex-row md:justify-between md:items-baseline mb-2">
                <h3 className="text-xl font-bold text-gray-100">Eggspectation</h3>
                <span className="text-sm text-purple-400 font-medium">Mar 2023 – Jun 2024</span>
              </div>
              <h4 className="text-md text-gray-400 mb-4 font-medium uppercase tracking-wide">Bar Manager</h4>
              <ul className="list-disc list-outside ml-4 space-y-2 text-gray-400 text-sm">
                <li>Managed end-to-end bar operations, including staff scheduling, inventory control, ordering, and opening/closing procedures.</li>
                <li>Orchestrated service for large banquets and private events, functioning as the primary point of contact for execution and flow.</li>
                <li>Developed and executed promotional strategies that successfully drove business growth and increased guest retention.</li>
              </ul>
            </div>
          </div>

          {/* Ida Claire */}
          <div className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group is-active">
            <div className="flex items-center justify-center w-10 h-10 rounded-full border-4 border-gray-950 bg-gray-800 text-gray-400 shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2 z-10">
              <Briefcase size={16} />
            </div>
            <div className="w-[calc(100%-4rem)] md:w-[calc(50%-2.5rem)] p-6 rounded-xl bg-gray-900 border border-gray-800 hover:border-blue-600/50 transition-colors shadow-lg">
              <div className="flex flex-col md:flex-row md:justify-between md:items-baseline mb-2">
                <h3 className="text-xl font-bold text-gray-100">Ida Claire</h3>
                <span className="text-sm text-blue-400 font-medium">Oct 2024 – Oct 2025</span>
              </div>
              <h4 className="text-md text-gray-400 mb-4 font-medium uppercase tracking-wide">Beverage Trainer & High-Volume Operations</h4>
              <ul className="list-disc list-outside ml-4 space-y-2 text-gray-400 text-sm">
                <li>Managed exceptionally high production volume in a fast-paced environment, streamlining workflow to maximize efficiency and output.</li>
                <li>Acted as primary trainer for the beverage team, enforcing operational standards, safety procedures, and quality control.</li>
                <li>Maintained robust ticket organization and team coordination under extreme pressure during peak service windows.</li>
              </ul>
            </div>
          </div>

          {/* Bovinos Brazilian Steakhouse */}
          <div className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group is-active">
            <div className="flex items-center justify-center w-10 h-10 rounded-full border-4 border-gray-950 bg-gray-800 text-gray-400 shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2 z-10">
              <Briefcase size={16} />
            </div>
            <div className="w-[calc(100%-4rem)] md:w-[calc(50%-2.5rem)] p-6 rounded-xl bg-gray-900 border border-gray-800 hover:border-purple-600/50 transition-colors shadow-lg">
              <div className="flex flex-col md:flex-row md:justify-between md:items-baseline mb-2">
                <h3 className="text-xl font-bold text-gray-100">Bovinos Brazilian Steakhouse</h3>
                <span className="text-sm text-purple-400 font-medium">Mar 2022 – Oct 2022</span>
              </div>
              <h4 className="text-md text-gray-400 mb-4 font-medium uppercase tracking-wide">Head Server & Floor Supervisor</h4>
              <ul className="list-disc list-outside ml-4 space-y-2 text-gray-400 text-sm">
                <li>Advanced rapidly from host to leadership position based on strong operational execution and reliability.</li>
                <li>Supervised daily floor functions, team deployment, and new hire training to ensure consistent service standards.</li>
              </ul>
            </div>
          </div>

        </div>
      </section>

      {/* Credentials */}
      <section id="credentials" className="max-w-5xl mx-auto px-6 py-16">
        <h2 className="text-2xl font-bold text-gray-100 mb-8 flex items-center">
          <span className="bg-gray-800 p-2 rounded-lg mr-4 text-emerald-500">
            <Award size={24} />
          </span>
          Credentials & Certifications
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="bg-gray-900 border border-emerald-900/50 p-6 rounded-xl shadow-lg hover:border-emerald-500/50 transition-colors">
            <h3 className="text-lg font-bold text-gray-100 mb-2">Active Certifications</h3>
            <ul className="space-y-3">
              <li className="flex items-start">
                <ChevronRight className="text-emerald-500 mr-2 shrink-0 mt-0.5" size={16} />
                <span className="text-gray-300 text-sm">Food Manager's Certification (Texas)</span>
              </li>
              <li className="flex items-start">
                <ChevronRight className="text-emerald-500 mr-2 shrink-0 mt-0.5" size={16} />
                <span className="text-gray-300 text-sm">TABC Certification (Texas)</span>
              </li>
              <li className="flex items-start">
                <ChevronRight className="text-emerald-500 mr-2 shrink-0 mt-0.5" size={16} />
                <span className="text-gray-300 text-sm">Food Handler's Certification (Texas)</span>
              </li>
            </ul>
          </div>
          
          <div className="bg-gray-900 border border-blue-900/50 p-6 rounded-xl shadow-lg hover:border-blue-500/50 transition-colors">
            <h3 className="text-lg font-bold text-gray-100 mb-2">In Progress</h3>
            <ul className="space-y-3">
              <li className="flex items-start">
                <ChevronRight className="text-blue-500 mr-2 shrink-0 mt-0.5" size={16} />
                <span className="text-gray-300 text-sm">Google Project Management Certificate <br/><span className="text-gray-500 text-xs">Coursera</span></span>
              </li>
              <li className="flex items-start">
                <ChevronRight className="text-blue-500 mr-2 shrink-0 mt-0.5" size={16} />
                <span className="text-gray-300 text-sm">Certified Hospitality Supervisor (CHS) <br/><span className="text-gray-500 text-xs">AHLEI</span></span>
              </li>
            </ul>
          </div>


        </div>
      </section>

      {/* Contact */}
      <section id="contact" className="max-w-5xl mx-auto px-6 py-16 mb-16">
        <div className="bg-gradient-to-r from-gray-900 to-gray-950 border border-gray-800 rounded-2xl p-10 text-center shadow-2xl relative overflow-hidden">
          <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-fuchsia-500 via-purple-500 to-blue-500"></div>
          <h2 className="text-3xl font-bold text-gray-100 mb-4">Let's Connect</h2>
          <p className="text-gray-400 mb-8 max-w-xl mx-auto">
            Currently open for new management and operations opportunities. Whether you have a question or just want to say hi, my inbox is always open!
          </p>
          <div className="flex flex-col sm:flex-row justify-center items-center gap-4">
            <a href="mailto:opportunities@cassieking.org" className="flex items-center gap-2 bg-fuchsia-600 hover:bg-fuchsia-700 text-white px-8 py-4 rounded-lg font-semibold transition-all shadow-[0_0_20px_rgba(192,38,211,0.2)]">
              <Mail size={20} />
              opportunities@cassieking.org
            </a>
            <a href="#" className="flex items-center gap-2 bg-gray-800 hover:bg-gray-700 text-white px-8 py-4 rounded-lg font-semibold transition-colors border border-gray-700">
              <Linkedin size={20} />
              LinkedIn Profile <span className="text-xs text-gray-400 font-normal ml-1">(Coming Soon)</span>
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-gray-900 bg-gray-950 py-8 text-center text-gray-500 text-sm">
        <p>&copy; {new Date().getFullYear()} Cassie King. All Rights Reserved.</p>
        <p className="mt-2">cassieking.org</p>
      </footer>
    </div>
  );
}

export default App;
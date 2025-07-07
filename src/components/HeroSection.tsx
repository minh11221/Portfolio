import { Mail, MapPin, Briefcase } from "lucide-react";

const HeroSection = () => {
  return (
    <section className="min-h-screen flex items-center bg-gradient-to-br from-slate-50 to-gray-100 px-4 py-20">
      <div className="max-w-7xl mx-auto w-full">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Side - Text Content */}
          <div className="text-center lg:text-left animate-fade-in">
            <h1 className="text-5xl md:text-7xl font-bold text-gray-900 mb-6">
              Hi. I'm Minh!
            </h1>
            <p className="text-xl md:text-2xl text-gray-600 mb-8 leading-relaxed">
              I'm a recent graduate from NCSU that specializes in full-stack web development.
              When I'm not coding, you can find me exploring local hiking trails, cooking, or simply playing commander magic with my friends.
              I'm available for jobs and internships opportunities, feels free to reach out via the links below!
            </p>

            {/* Main Call-to-Action Buttons + Location + LinkedIn */}
            <div className="flex flex-wrap justify-center lg:justify-start gap-4 mb-6 animate-fade-in" style={{animationDelay: '0.2s'}}>
              <a 
                href="https://github.com/minh11221" 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex items-center justify-center px-4 py-2 bg-white rounded-lg shadow-md hover:shadow-lg transition-all duration-300 hover:scale-105 text-gray-700 hover:text-green-600 border border-gray-200 w-12 h-12"
              >
                <img src="/github-mark.svg" alt="GitHub" className="w-6 h-6" />
              </a>
              <a 
                href="mailto:minhtri22124@gmail.com"
                className="flex items-center justify-center px-4 py-2 bg-white rounded-lg shadow-md hover:shadow-lg transition-all duration-300 hover:scale-105 text-gray-700 hover:text-green-600 border border-gray-200 w-12 h-12"
              >
                <Mail size={24} />
              </a>
              <a
                href="https://www.linkedin.com/in/minhtripham0024/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center px-4 py-2 bg-white rounded-lg shadow-md hover:shadow-lg transition-all duration-300 hover:scale-105 text-blue-700 hover:text-blue-900 w-12 h-12"
              >
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
                  <path d="M19 0h-14c-2.76 0-5 2.24-5 5v14c0 2.76 2.24 5 5 5h14c2.76 0 5-2.24 5-5v-14c0-2.76-2.24-5-5-5zm-11 19h-3v-10h3v10zm-1.5-11.28c-.97 0-1.75-.79-1.75-1.75s.78-1.75 1.75-1.75 1.75.79 1.75 1.75-.78 1.75-1.75 1.75zm13.5 11.28h-3v-5.6c0-1.34-.03-3.07-1.87-3.07-1.87 0-2.16 1.46-2.16 2.97v5.7h-3v-10h2.89v1.36h.04c.4-.75 1.38-1.54 2.84-1.54 3.04 0 3.6 2 3.6 4.59v5.59z"/>
                </svg>
              </a>
            </div>

            {/* Contact Information - Job Availability */}
            <div className="flex flex-wrap justify-center lg:justify-start gap-4 animate-fade-in" style={{animationDelay: '0.4s'}}>
              <div className="flex items-center gap-2 px-4 py-2 bg-green-50 border border-green-200 rounded-lg shadow-md text-green-700">
                <Briefcase size={18} />
                <span className="font-medium">Looking for jobs / internships</span>
              </div>
            </div>
          </div>

          {/* Right Side - Photo */}
          <div className="flex justify-end items-center" style={{animationDelay: '0.6s', minHeight: '60vh'}}>
            <div className="relative w-[70vw] max-w-[700px] h-[70vh] min-h-[400px] flex items-center" style={{ transform: 'translateX(20%)' }}>
              <img 
                src="/IMG_6077.jpg" 
                alt="Minh Tri Pham"
                className="w-full h-full object-cover object-center shadow-2xl rounded-3xl"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;

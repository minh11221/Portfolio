import { Mail, MapPin, Phone, Briefcase } from "lucide-react";

const HeroSection = () => {
  return (
    <section className="min-h-screen flex flex-col justify-center items-center bg-gradient-to-br from-slate-50 to-gray-100 px-4">
      <div className="text-center max-w-4xl mx-auto">
        <h1 className="text-5xl md:text-7xl font-bold text-gray-900 mb-6 animate-fade-in">
          Personal Portfolio
        </h1>
        <p className="text-xl md:text-2xl text-gray-600 mb-16 animate-fade-in">
          Crafting digital experiences with passion and precision
        </p>
        
        {/* Main Call-to-Action Buttons - Now styled like contact info */}
        <div className="flex flex-wrap justify-center gap-4 md:gap-6 mb-12 animate-fade-in">
          <a 
            href="https://github.com/minh11221" 
            target="_blank" 
            rel="noopener noreferrer"
            className="flex items-center gap-2 px-4 py-2 bg-white rounded-lg shadow-md hover:shadow-lg transition-all duration-300 hover:scale-105 text-gray-700 hover:text-green-600 border border-gray-200"
          >
            <img src="/github-mark.svg" alt="GitHub" className="w-5 h-5" />
            <span className="font-medium">GitHub</span>
          </a>
          
          <a 
            href="mailto:minhtri22124@gmail.com"
            className="flex items-center gap-2 px-4 py-2 bg-white rounded-lg shadow-md hover:shadow-lg transition-all duration-300 hover:scale-105 text-gray-700 hover:text-green-600 border border-gray-200"
          >
            <Mail size={18} />
            <span className="font-medium">Get in Touch</span>
          </a>
        </div>

        {/* Secondary Contact Information */}
        <div className="flex flex-wrap justify-center gap-4 md:gap-6 animate-fade-in">
          <div className="flex items-center gap-2 px-4 py-2 bg-white rounded-lg shadow-md text-gray-700">
            <MapPin size={18} />
            <span className="font-medium">Raleigh, NC</span>
          </div>
          
          <a 
            href="tel:+17044212316"
            className="flex items-center gap-2 px-4 py-2 bg-white rounded-lg shadow-md hover:shadow-lg transition-all duration-300 hover:scale-105 text-gray-700 hover:text-green-600"
          >
            <Phone size={18} />
            <span className="font-medium">+1 (704) 421-2316</span>
          </a>

          <a
            href="https://www.linkedin.com/in/minhtripham0024/"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 px-4 py-2 bg-white rounded-lg shadow-md hover:shadow-lg transition-all duration-300 hover:scale-105 text-blue-700 hover:text-blue-900"
          >
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4">
              <path d="M19 0h-14c-2.76 0-5 2.24-5 5v14c0 2.76 2.24 5 5 5h14c2.76 0 5-2.24 5-5v-14c0-2.76-2.24-5-5-5zm-11 19h-3v-10h3v10zm-1.5-11.28c-.97 0-1.75-.79-1.75-1.75s.78-1.75 1.75-1.75 1.75.79 1.75 1.75-.78 1.75-1.75 1.75zm13.5 11.28h-3v-5.6c0-1.34-.03-3.07-1.87-3.07-1.87 0-2.16 1.46-2.16 2.97v5.7h-3v-10h2.89v1.36h.04c.4-.75 1.38-1.54 2.84-1.54 3.04 0 3.6 2 3.6 4.59v5.59z"/>
            </svg>
            <span className="font-medium">LinkedIn</span>
          </a>

          <div className="flex items-center gap-2 px-4 py-2 bg-green-50 border border-green-200 rounded-lg shadow-md text-green-700">
            <Briefcase size={18} />
            <span className="font-medium">Available for jobs/internships</span>
          </div>
        </div>
      </div>
      
      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-gray-400 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-gray-400 rounded-full mt-2 animate-pulse"></div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;

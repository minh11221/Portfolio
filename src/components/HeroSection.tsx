
import { Github, Linkedin, MapPin, Phone } from "lucide-react";

const HeroSection = () => {
  return (
    <section className="min-h-screen flex flex-col justify-center items-center bg-gradient-to-br from-slate-50 to-gray-100 px-4">
      <div className="text-center max-w-4xl mx-auto">
        <h1 className="text-5xl md:text-7xl font-bold text-gray-900 mb-6 animate-fade-in">
          Personal Portfolio
        </h1>
        <p className="text-xl md:text-2xl text-gray-600 mb-12 animate-fade-in">
          Crafting digital experiences with passion and precision
        </p>
        
        {/* Contact Information */}
        <div className="flex flex-wrap justify-center gap-6 md:gap-8 animate-fade-in">
          <a 
            href="https://github.com" 
            target="_blank" 
            rel="noopener noreferrer"
            className="flex items-center gap-2 px-4 py-2 bg-white rounded-lg shadow-md hover:shadow-lg transition-all duration-300 hover:scale-105 text-gray-700 hover:text-gray-900"
          >
            <Github size={20} />
            <span className="font-medium">GitHub</span>
          </a>
          
          <a 
            href="https://linkedin.com" 
            target="_blank" 
            rel="noopener noreferrer"
            className="flex items-center gap-2 px-4 py-2 bg-white rounded-lg shadow-md hover:shadow-lg transition-all duration-300 hover:scale-105 text-gray-700 hover:text-blue-600"
          >
            <Linkedin size={20} />
            <span className="font-medium">LinkedIn</span>
          </a>
          
          <div className="flex items-center gap-2 px-4 py-2 bg-white rounded-lg shadow-md text-gray-700">
            <MapPin size={20} />
            <span className="font-medium">San Francisco, CA</span>
          </div>
          
          <a 
            href="tel:+1234567890"
            className="flex items-center gap-2 px-4 py-2 bg-white rounded-lg shadow-md hover:shadow-lg transition-all duration-300 hover:scale-105 text-gray-700 hover:text-green-600"
          >
            <Phone size={20} />
            <span className="font-medium">+1 (234) 567-8900</span>
          </a>
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

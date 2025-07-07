
import ProjectCard from "./ProjectCard";

const ProjectsSection = () => {
  const personalProjects = [
    {
      title: "CofeeMaker",
      description: "A full-stack web portal for managing a smart coffee maker system.",
      technologies: ["Angular JS", "JAVA", "Spring Boot", "REST API", "MySQL", "Bootstrap", "Junit5", "Git", "Maven"],
      imageUrl: "oak-bond-coffee-co-D-ePjGt2xe8-unsplash.jpg",
      projectUrl: "#",
      githubUrl: "#"
    },
    {
      title: "PackExchange ",
      description: "A modern e-commerce fullstack web application, combines a Node/Express API, SQL data layer, and a Bootstrap-based PWA front-end, deliver an online campus marketplace with search, sell.",
      technologies: ["Node.js", "Express.js", "REST API", "Mariadb", "Bootstrap", "JWT", "Docker"],
      imageUrl: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=800",
      projectUrl: "#",
      githubUrl: "#"
    },
    {
      title: "Weather Forecast App",
      description: "Interactive weather application with location-based forecasts, beautiful visualizations, and offline support. Integrates multiple weather APIs for accurate predictions.",
      technologies: ["React Native", "TypeScript", "Weather API", "Redux"],
      imageUrl: "https://images.unsplash.com/photo-1504608524841-42fe6f032b4b?w=800",
      projectUrl: "#",
      githubUrl: "#"
    }
  ];

  return (
    <div className="bg-white py-20">
      <section className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Projects showcase
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Passion projects that demonstrate creativity and problem-solving skills
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {personalProjects.map((project, index) => (
            <div key={index} className="animate-fade-in" style={{animationDelay: `${index * 0.1}s`}}>
              <ProjectCard {...project} />
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default ProjectsSection;

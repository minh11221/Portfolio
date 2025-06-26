
import ProjectCard from "./ProjectCard";

const ProjectsSection = () => {
  const personalProjects = [
    {
      title: "Task Management App",
      description: "A full-stack productivity application with real-time collaboration features, drag-and-drop interface, and advanced filtering options. Built with modern web technologies.",
      technologies: ["React", "Node.js", "MongoDB", "Socket.io"],
      imageUrl: "https://images.unsplash.com/photo-1611224923853-80b023f02d71?w=800",
      projectUrl: "https://example.com",
      githubUrl: "https://github.com"
    },
    {
      title: "E-Commerce Platform",
      description: "Complete e-commerce solution with payment integration, inventory management, user authentication, and responsive design. Features include shopping cart, order tracking, and admin dashboard.",
      technologies: ["Next.js", "Stripe", "Tailwind CSS", "Prisma"],
      imageUrl: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=800",
      projectUrl: "https://example.com",
      githubUrl: "https://github.com"
    },
    {
      title: "Weather Forecast App",
      description: "Interactive weather application with location-based forecasts, beautiful visualizations, and offline support. Integrates multiple weather APIs for accurate predictions.",
      technologies: ["React Native", "TypeScript", "Weather API", "Redux"],
      imageUrl: "https://images.unsplash.com/photo-1504608524841-42fe6f032b4b?w=800",
      projectUrl: "https://example.com",
      githubUrl: "https://github.com"
    }
  ];

  return (
    <div className="bg-white py-20">
      <section className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            My Projects
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

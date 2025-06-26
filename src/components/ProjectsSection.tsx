
import ProjectCard from "./ProjectCard";

const ProjectsSection = () => {
  const academicProjects = [
    {
      title: "Machine Learning Classifier",
      description: "Developed a neural network model to classify handwritten digits with 98% accuracy using TensorFlow and Python. Implemented data preprocessing, model training, and evaluation pipelines.",
      technologies: ["Python", "TensorFlow", "NumPy", "Matplotlib"],
      imageUrl: "https://images.unsplash.com/photo-1555949963-aa79dcee981c?w=800",
      githubUrl: "https://github.com"
    },
    {
      title: "Database Management System",
      description: "Built a comprehensive database system for university course management with advanced querying capabilities, indexing optimization, and transaction management.",
      technologies: ["SQL", "PostgreSQL", "Java", "JDBC"],
      imageUrl: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=800",
      githubUrl: "https://github.com"
    },
    {
      title: "Computer Graphics Renderer",
      description: "Created a 3D graphics rendering engine from scratch implementing ray tracing algorithms, lighting models, and texture mapping for realistic scene rendering.",
      technologies: ["C++", "OpenGL", "GLSL", "Linear Algebra"],
      imageUrl: "https://images.unsplash.com/photo-1518709268805-4e9042af2176?w=800",
      githubUrl: "https://github.com"
    }
  ];

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
      {/* Academic Projects */}
      <section className="max-w-7xl mx-auto px-4 mb-20">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Academic Projects
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Showcasing technical skills developed through coursework and research
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {academicProjects.map((project, index) => (
            <div key={index} className="animate-fade-in" style={{animationDelay: `${index * 0.1}s`}}>
              <ProjectCard {...project} />
            </div>
          ))}
        </div>
      </section>

      {/* Personal Projects */}
      <section className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Personal Projects
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

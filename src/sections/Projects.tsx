interface Project {
  title: string;
  description: string;
  technologies: string[];
  link: string;
  image?: string;
}

const projects: Project[] = [
  {
    title: "Sales Performance Dashboard",
    description: "Built an interactive Power BI dashboard for retail analytics, tracking KPIs, sales trends, and regional performance metrics with drill-down capabilities.",
    technologies: ["Power BI", "DAX", "SQL"],
    link: "https://github.com/logesh418/sales-dashboard"
  },
  {
    title: "Customer Segmentation Analysis",
    description: "Implemented K-means clustering on customer data using Python, identifying key segments and creating visualizations for marketing strategy.",
    technologies: ["Python", "Scikit-learn", "Pandas", "Seaborn"],
    link: "https://github.com/logesh418/customer-segmentation"
  },
  {
    title: "Churn Prediction Model",
    description: "Developed a machine learning model achieving 85% accuracy in predicting customer churn, helping optimize retention strategies.",
    technologies: ["Python", "TensorFlow", "SQL", "Matplotlib"],
    link: "https://github.com/logesh418/churn-prediction"
  }
];

const Projects = () => {
  return (
    <section className="bg-white py-16 px-6" id="projects">
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-4xl font-bold mb-6 text-gray-800">Projects</h2>
        <p className="text-gray-600 mb-12">
          Some of the data analysis and visualization projects I've worked on recently.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div 
              key={index}
              className="bg-gray-50 p-6 rounded-2xl shadow-md hover:shadow-xl transition duration-300 flex flex-col"
            >
              <h3 className="text-xl font-semibold text-blue-600 mb-2">
                {project.title}
              </h3>
              <p className="text-gray-700 text-sm mb-4 flex-grow">
                {project.description}
              </p>
              <div className="mb-4">
                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech, techIndex) => (
                    <span 
                      key={techIndex}
                      className="px-2 py-1 bg-blue-100 text-blue-600 rounded-full text-xs font-medium"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
              <a 
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center text-blue-500 font-medium hover:text-blue-600 transition-colors"
              >
                View Project
                <svg 
                  className="ml-2 w-4 h-4" 
                  fill="none" 
                  stroke="currentColor" 
                  viewBox="0 0 24 24"
                >
                  <path 
                    strokeLinecap="round" 
                    strokeLinejoin="round" 
                    strokeWidth={2} 
                    d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                  />
                </svg>
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;

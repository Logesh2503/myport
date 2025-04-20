// src/sections/Certifications.tsx

const certifications = [
  {
    title: "Google Data Analytics Professional Certificate",
    issuer: "Coursera",
    year: "2023",
    link: "https://www.coursera.org/professional-certificates/google-data-analytics",
  },
  {
    title: "Microsoft Excel Expert Certification",
    issuer: "Microsoft",
    year: "2022",
    link: "https://learn.microsoft.com/en-us/certifications/excel-expert/",
  },
  {
    title: "Tableau Desktop Specialist",
    issuer: "Tableau",
    year: "2022",
    link: "https://www.tableau.com/learn/certification/desktop-specialist",
  },
];

const Certifications = () => {
  return (
    <section className="py-16 bg-gray-50" id="certifications">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-4xl font-bold text-center text-gray-800 mb-6">
          My Certifications
        </h2>
        <p className="text-lg text-center text-gray-700 mb-12">
          Here are some of the certifications I've earned to strengthen my data analysis skills.
        </p>
        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {certifications.map((cert, index) => (
            <div 
              key={index} 
              className="bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 p-6 flex flex-col"
            >
              <h3 className="text-xl font-bold text-gray-800 mb-3">{cert.title}</h3>
              <p className="text-gray-600 mb-2">{cert.issuer}</p>
              <p className="text-gray-500 text-sm mb-4">{cert.year}</p>
              <a
                href={cert.link}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-auto inline-flex items-center text-blue-600 hover:text-blue-700 font-medium transition-colors"
              >
                View Certificate
                <svg 
                  className="ml-2 w-4 h-4" 
                  fill="none" 
                  stroke="currentColor" 
                  viewBox="0 0 24 24" 
                  xmlns="http://www.w3.org/2000/svg"
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

export default Certifications;

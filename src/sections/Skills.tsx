const skills = [
    "Data Analysis",
    "Data Visualization",
    "SQL",
    "Python",
    "Excel",
    "Machine Learning",
    "Power BI",
    "Tableau",
    "Data Cleaning",
  ];
  
  const Skills = () => {
    return (
      <section className="py-16 bg-gray-100" id="skills">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-extrabold text-center text-gray-900">
            My Skills
          </h2>
          <p className="mt-4 text-lg text-center text-gray-600">
            I have developed a diverse set of skills throughout my data analysis career.
          </p>
          <div className="mt-8 grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-4">
            {skills.map((skill, index) => (
              <div key={index} className="flex items-center justify-center p-4 bg-white rounded-lg shadow-md">
                <span className="text-xl font-semibold text-gray-800">{skill}</span>
              </div>
            ))}
          </div>
        </div>
      </section>
    );
  };
  
  export default Skills;

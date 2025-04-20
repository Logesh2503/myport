const About = () => {
  return (
    <section className="bg-gray-50 py-16 px-6" id="about">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-4xl font-bold text-center text-gray-800 mb-6">About Me</h2>
        <div className="space-y-6 text-gray-700">
          <p className="text-lg leading-relaxed">
            I'm <strong>Logeshkumar</strong>, a passionate Data Analyst who loves uncovering insights hidden in data.
            With a keen eye for detail and a drive for excellence, I specialize in transforming complex datasets into
            actionable business insights.
          </p>
          
          <p className="text-lg leading-relaxed">
            My expertise lies in building interactive dashboards, creating compelling visualizations, and conducting
            in-depth data analysis to drive informed decision-making. I'm proficient with industry-standard tools including:
          </p>

          <ul className="grid grid-cols-2 sm:grid-cols-3 gap-4 py-4">
            <li className="flex items-center space-x-2">
              <span className="text-blue-600">▹</span>
              <span>Python (Pandas, Scikit-learn)</span>
            </li>
            <li className="flex items-center space-x-2">
              <span className="text-blue-600">▹</span>
              <span>SQL & Database Management</span>
            </li>
            <li className="flex items-center space-x-2">
              <span className="text-blue-600">▹</span>
              <span>Power BI</span>
            </li>
            <li className="flex items-center space-x-2">
              <span className="text-blue-600">▹</span>
              <span>Microsoft Excel</span>
            </li>
            <li className="flex items-center space-x-2">
              <span className="text-blue-600">▹</span>
              <span>Matplotlib & Seaborn</span>
            </li>
            <li className="flex items-center space-x-2">
              <span className="text-blue-600">▹</span>
              <span>Statistical Analysis</span>
            </li>
          </ul>

          <p className="text-lg leading-relaxed">
            I'm always eager to take on new challenges and contribute to projects that require 
            data-driven solutions. Whether it's optimizing business processes, predicting trends, 
            or discovering patterns in complex datasets, I'm committed to delivering valuable insights.
          </p>
        </div>
      </div>
    </section>
  );
};

export default About;

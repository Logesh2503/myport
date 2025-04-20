import Button from '../components/Button';

const Hero = () => {
  return (
    <section className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-100 via-white to-blue-200 px-4 text-center">
      <div className="max-w-2xl">
        <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-gray-800 mb-4">
          Hi, I'm <span className="text-blue-600">Logeshkumar</span>
        </h1>
        <p className="text-lg sm:text-xl text-gray-700 mb-6">
          A passionate <strong>Data Analyst</strong> who transforms data into insights and builds engaging dashboards.
        </p>
        <div className="flex justify-center gap-4">
          <Button href="#projects" variant="primary">View Projects</Button>
          <Button href="/resume.pdf" variant="secondary">Download Resume</Button>
        </div>
      </div>
    </section>
  );
};

export default Hero;
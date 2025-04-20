const Navbar = () => {
  return (
    <nav className="fixed top-0 left-0 w-full bg-white shadow z-50">
      <div className="max-w-6xl mx-auto px-4 py-3 flex justify-between items-center">
        <h1 className="text-xl font-bold text-blue-600">Logeshkumar</h1>
        <ul className="flex space-x-6 text-gray-700 font-medium">
          <li>
            <a href="#about" className="hover:text-blue-600 transition">About</a>
          </li>
          <li>
            <a href="#projects" className="hover:text-blue-600 transition">Projects</a>
          </li>
          <li>
            <a href="#contact" className="hover:text-blue-600 transition">Contact</a>
          </li>
          <li>
            <a href="#certifications" className="hover:text-blue-600 transition">Certifications</a>
          </li>
          <li>
            <a href="/Resume.pdf" target="_blank" rel="noopener noreferrer" className="hover:text-blue-600 transition">Resume</a>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;

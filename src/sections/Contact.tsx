import { FaGithub, FaLinkedin } from 'react-icons/fa';
import { MdEmail } from 'react-icons/md';

const Contact = () => {
  return (
    <section id="contact" className="bg-white py-16 px-6">
      <div className="max-w-3xl mx-auto text-center">
        <h2 className="text-4xl font-bold text-gray-800 mb-6">Contact Me</h2>
        <p className="text-gray-700 text-lg mb-8">
          Interested in working together or have any questions? I'd love to hear from you!
        </p>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <a
            href="mailto:lokeshlok418@email.com"
            className="inline-flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-6 rounded-lg transition"
          >
            <MdEmail className="text-xl" />
            Send Email
          </a>
          <a
            href="https://www.linkedin.com/in/logeshm418/"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-[#0077b5] hover:bg-[#006399] text-white font-semibold py-3 px-6 rounded-lg transition"
          >
            <FaLinkedin className="text-xl" />
            LinkedIn
          </a>
          <a
            href="https://github.com/logesh418"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-gray-800 hover:bg-gray-900 text-white font-semibold py-3 px-6 rounded-lg transition"
          >
            <FaGithub className="text-xl" />
            GitHub
          </a>
        </div>
      </div>
    </section>
  );
};

export default Contact;

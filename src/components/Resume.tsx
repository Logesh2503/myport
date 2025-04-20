const Resume = () => {
  return (
    <section id="resume" className="min-h-screen px-4 py-16 bg-white text-center">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl font-bold text-gray-800 mb-8">My Resume</h2>

        <div className="flex flex-col items-center gap-6">
          <div className="w-full max-w-4xl bg-gray-50 rounded-lg shadow-lg overflow-hidden">
            <iframe
              src="/Resume.pdf"
              className="w-full h-[600px] border-0"
              title="Resume Preview"
            />
          </div>

          <div className="flex gap-4">
            <a
              href="/Resume.pdf"
              download="Logeshkumar_Resume.pdf"
              className="inline-flex items-center gap-2 bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition"
            >
              <svg 
                className="w-5 h-5" 
                fill="none" 
                stroke="currentColor" 
                viewBox="0 0 24 24"
              >
                <path 
                  strokeLinecap="round" 
                  strokeLinejoin="round" 
                  strokeWidth={2} 
                  d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4"
                />
              </svg>
              Download Resume
            </a>
            
            <a
              href="/Resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-gray-100 text-gray-700 px-6 py-3 rounded-lg hover:bg-gray-200 transition"
            >
              <svg 
                className="w-5 h-5" 
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
              Open in New Tab
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Resume;

import profileImage from '../assets/myimage.jpeg';
import { SOCIAL_LINKS, PERSONAL_INFO, RESUME_PATH, RESUME_FILENAME } from '../config/constants';

export function Hero() {
  const handleDownloadResume = () => {
    const link = document.createElement("a");
    link.href = RESUME_PATH;
    link.download = RESUME_FILENAME;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <section className="section bg-white">
      <div className="container-max">
        <div className="py-20 flex flex-col md:flex-row items-center gap-12">
          {/* Photo */}
          <div className="flex-shrink-0">
            <div className="w-40 h-40 md:w-48 md:h-48 rounded-full overflow-hidden border-4 border-blue-600 shadow-lg">
              <img
                src={profileImage}
                alt="Rukaiya Khan"
                className="w-full h-full object-cover"
              />
            </div>
          </div>

          {/* Content */}
          <div className="flex-1 text-center md:text-left">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-2">
              {PERSONAL_INFO.name}
            </h1>
            <p className="text-xl text-blue-600 font-semibold mb-2">
              {PERSONAL_INFO.title}
            </p>
            <p className="text-gray-600 mb-4">
              {PERSONAL_INFO.location} | {PERSONAL_INFO.phone}
            </p>
            <p className="text-lg text-gray-700 mb-8 leading-relaxed">
              Building enterprise-scale solutions with React, Node.js, and AI/LLM technologies.
              Specialized in RAG systems, agentic architectures, and cloud-native serverless applications.
            </p>
            <div className="flex gap-4 justify-center md:justify-start flex-wrap">
              <button
                onClick={handleDownloadResume}
                className="btn-primary"
              >
                ⬇ Download Resume
              </button>
              <a href={`mailto:${SOCIAL_LINKS.email}`} className="btn-secondary">
                ✉ Get in Touch
              </a>
              <a href={SOCIAL_LINKS.linkedin} target="_blank" rel="noopener noreferrer" className="btn-secondary">
                💼 LinkedIn
              </a>
              <a href={SOCIAL_LINKS.github} target="_blank" rel="noopener noreferrer" className="btn-secondary">
                🐙 GitHub
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

import { RESUME_PATH, RESUME_FILENAME } from '../config/constants';

export function Resume() {
  const handleDownloadResume = () => {
    const link = document.createElement("a");
    link.href = RESUME_PATH;
    link.download = RESUME_FILENAME;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <section id="resume" className="section bg-gradient-to-r from-blue-600 to-blue-800">
      <div className="container-max text-center">
        <h2 className="text-4xl font-bold text-white mb-6">
          Want to Know More?
        </h2>
        <p className="text-xl text-blue-100 mb-8">
          Download my resume to see the full picture of my experience and skills
        </p>
        <button
          onClick={handleDownloadResume}
          className="inline-flex items-center gap-2 px-8 py-3 bg-white text-blue-600 font-semibold rounded-lg hover:bg-gray-100 transition"
        >
          ⬇ Download Resume
        </button>
      </div>
    </section>
  );
}

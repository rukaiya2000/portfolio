export function Certifications() {
  const certifications = [
    {
      title: "AWS Certified Solutions Architect",
      issuer: "Amazon Web Services",
      date: "2024",
      link: "https://aws.amazon.com",
      emoji: "☁️",
    },
    {
      title: "React Advanced Patterns",
      issuer: "Frontend Masters",
      date: "2023",
      link: "https://frontendmasters.com",
      emoji: "⚛️",
    },
    {
      title: "Full Stack JavaScript",
      issuer: "The Odin Project",
      date: "2023",
      link: "https://theodinproject.com",
      emoji: "💻",
    },
  ];

  return (
    <section id="certifications" className="section bg-white">
      <div className="container-max">
        <h2 className="text-4xl font-bold text-gray-900 mb-12 text-center">
          Certifications
        </h2>
        <div className="grid md:grid-cols-3 gap-8">
          {certifications.map((cert, index) => (
            <a
              key={index}
              href={cert.link}
              target="_blank"
              rel="noopener noreferrer"
              className="group bg-gradient-to-br from-blue-50 to-white p-8 rounded-lg border border-blue-200 hover:border-blue-600 hover:shadow-lg transition cursor-pointer"
            >
              <div className="text-5xl mb-4 group-hover:scale-110 transition">
                {cert.emoji}
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-blue-600 transition">
                {cert.title}
              </h3>
              <p className="text-gray-600 mb-3">{cert.issuer}</p>
              <p className="text-sm text-gray-500">{cert.date}</p>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}

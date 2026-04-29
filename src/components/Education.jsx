export function Education() {
  const education = [
    {
      degree: "Master of Science in Computer Science",
      school: "University of Florida",
      location: "Gainesville, Florida",
      period: "August 2025 - May 2027",
      details: [],
    },
    {
      degree: "Bachelor of Science in Computer Science",
      school: "C.V. Raman Global University",
      location: "Bhubaneswar, India",
      period: "August 2019 - May 2023",
      details: ["CGPA: 9.0/10.0"],
    },
  ];

  return (
    <section id="education" className="section bg-white">
      <div className="container-max">
        <h2 className="text-4xl font-bold text-gray-900 mb-12 text-center">
          Education
        </h2>
        <div className="space-y-8">
          {education.map((edu, index) => (
            <div
              key={index}
              className="bg-gradient-to-r from-blue-50 to-white p-8 rounded-lg border-l-4 border-blue-600 shadow-sm hover:shadow-md transition"
            >
              <div className="flex justify-between items-start mb-2">
                <div>
                  <h3 className="text-2xl font-bold text-gray-900">
                    {edu.degree}
                  </h3>
                  <p className="text-blue-600 font-semibold">{edu.school}</p>
                  <p className="text-gray-600 text-sm">{edu.location}</p>
                </div>
                <span className="text-gray-600 text-sm font-medium bg-gray-100 px-4 py-2 rounded whitespace-nowrap">
                  {edu.period}
                </span>
              </div>
              {edu.details.length > 0 && (
                <ul className="mt-4 space-y-2">
                  {edu.details.map((detail, idx) => (
                    <li key={idx} className="text-gray-700 flex items-start gap-2">
                      <span className="text-blue-600 font-bold">→</span>
                      {detail}
                    </li>
                  ))}
                </ul>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

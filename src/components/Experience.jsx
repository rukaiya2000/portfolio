export function Experience() {
  const experiences = [
    {
      title: "Software Developer",
      company: "Ncompass",
      period: "January 2023 - August 2025",
      location: "Chennai, India",
      achievements: [
        "Architected multi-tenancy support for global e-commerce platform handling 30+ tenants and 20k+ customers per tenant with isolated databases",
        "Led Node.js migrations (v14 → v16 → v20) ensuring zero downtime and full compatibility",
        "Automated client onboarding workflows using AWS Step Functions, reducing processing times by 80%",
        "Redesigned document verification module to generate tenant-specific documents dynamically, reducing verification time by 60%",
        "Optimized API performance with Redis caching, improving response times by 90%",
      ],
    },
    {
      title: "Software Developer Intern",
      company: "Xaltam Technologies",
      period: "May 2020 - December 2020",
      location: "New Delhi, India",
      achievements: [
        "Developed and maintained front-end websites with responsive design and user-friendly interfaces",
        "Collaborated with design team on multiple client deliverables",
      ],
    },
  ];

  return (
    <section id="experience" className="section bg-gray-50">
      <div className="container-max">
        <h2 className="text-4xl font-bold text-gray-900 mb-12 text-center">
          Experience
        </h2>
        <div className="space-y-8">
          {experiences.map((exp, index) => (
            <div
              key={index}
              className="bg-white p-8 rounded-lg border-l-4 border-blue-600 shadow-sm hover:shadow-md transition"
            >
              <div className="flex justify-between items-start mb-4">
                <div>
                  <h3 className="text-2xl font-bold text-gray-900">
                    {exp.title}
                  </h3>
                  <p className="text-blue-600 font-semibold">{exp.company}</p>
                  <p className="text-gray-600 text-sm">{exp.location}</p>
                </div>
                <span className="text-gray-600 text-sm font-medium bg-gray-100 px-4 py-2 rounded">
                  {exp.period}
                </span>
              </div>
              <ul className="space-y-2">
                {exp.achievements.map((achievement, idx) => (
                  <li key={idx} className="text-gray-700 flex items-start gap-3">
                    <span className="text-blue-600 font-bold mt-1">→</span>
                    {achievement}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

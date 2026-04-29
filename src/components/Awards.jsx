export function Awards() {
  const awards = [
    {
      title: "Published Patent: AI-Powered Virtual Campus Exploration",
      issuer: "Ministry of Education's Innovation Cell",
      date: "February 2022",
      description: "Interactive virtual campus exploration system integrating geotagging on Bharat Map with minimal-equipment VR tours of educational institutions",
      patentId: "Application ID: 202531060664",
      emoji: "🏆",
    },
    {
      title: "Smart India Hackathon Finalist",
      issuer: "Ministry of Education's Innovation Cell",
      date: "February 2022",
      description: "Selected as finalist among thousands of participants across India",
      emoji: "🥇",
    },
    {
      title: "Published Patent: Automated Crop Disease Detection",
      issuer: "Ministry of Education's Innovation Cell",
      date: "January 2022 - May 2023",
      description: "AI-powered solution that detects crop diseases and provides management recommendations to support precision agriculture",
      patentId: "Application ID: 202531061085",
      emoji: "🌾",
    },
    {
      title: "Google Developer Student Clubs Lead",
      issuer: "GDSC - C.V. Raman Global University",
      date: "July 2021 - July 2022",
      description: "Grew community to 800+ members, organized 8+ events, and mentored peers in technology and development",
      emoji: "🎓",
    },
  ];

  return (
    <section id="awards" className="section bg-gray-50">
      <div className="container-max">
        <h2 className="text-4xl font-bold text-gray-900 mb-12 text-center">
          Awards & Activities
        </h2>
        <div className="grid md:grid-cols-2 gap-8">
          {awards.map((award, index) => (
            <div
              key={index}
              className="bg-white p-8 rounded-lg border border-gray-200 hover:border-blue-400 hover:shadow-lg transition"
            >
              <div className="text-4xl mb-4">{award.emoji}</div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">
                {award.title}
              </h3>
              <p className="text-blue-600 font-semibold text-sm mb-2">
                {award.issuer}
              </p>
              <p className="text-gray-600 text-sm mb-3">{award.date}</p>
              <p className="text-gray-700 leading-relaxed mb-3">
                {award.description}
              </p>
              {award.patentId && (
                <p className="text-gray-600 text-xs italic">
                  {award.patentId}
                </p>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

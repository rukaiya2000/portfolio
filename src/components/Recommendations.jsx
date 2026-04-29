export function Recommendations() {
  const recommendations = [
    {
      author: "John Smith",
      role: "Senior Manager at Tech Corp",
      text: "Rukaiya is an exceptional developer with strong problem-solving skills and attention to detail. Highly recommend!",
      emoji: "⭐",
    },
    {
      author: "Sarah Johnson",
      role: "Product Manager at StartUp Inc",
      text: "Great communication and technical skills. Delivered high-quality work on time and exceeded expectations.",
      emoji: "💼",
    },
    {
      author: "Mike Chen",
      role: "Lead Developer at Digital Agency",
      text: "Outstanding code quality and ability to learn quickly. A valuable team member who contributes significantly.",
      emoji: "👨‍💻",
    },
  ];

  return (
    <section id="recommendations" className="section bg-gray-50">
      <div className="container-max">
        <h2 className="text-4xl font-bold text-gray-900 mb-12 text-center">
          Recommendations
        </h2>
        <div className="grid md:grid-cols-3 gap-8">
          {recommendations.map((rec, index) => (
            <div
              key={index}
              className="bg-white p-8 rounded-lg shadow-md hover:shadow-lg transition border-t-4 border-blue-600"
            >
              <div className="text-3xl mb-4">{rec.emoji}</div>
              <p className="text-gray-700 mb-6 italic leading-relaxed">
                "{rec.text}"
              </p>
              <div>
                <p className="font-semibold text-gray-900">{rec.author}</p>
                <p className="text-sm text-gray-600">{rec.role}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

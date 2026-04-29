export function Hobbies() {
  const hobbies = [
    {
      title: "Running",
      description: "Love hitting the trails and staying active",
      image: "https://images.unsplash.com/photo-1552674605-5defe6aa44bb?w=400&h=300&fit=crop",
    },
    {
      title: "Cooking",
      description: "Experimenting with new recipes and cuisines",
      image: "https://images.unsplash.com/photo-1495521821757-a1efb6729352?w=400&h=300&fit=crop",
    },
    {
      title: "Photography",
      description: "Capturing moments and exploring creative perspectives",
      image: "https://images.unsplash.com/photo-1606986628025-35d57e735ae0?w=400&h=300&fit=crop",
    },
  ];

  return (
    <section id="hobbies" className="section bg-white">
      <div className="container-max">
        <h2 className="text-4xl font-bold text-gray-900 mb-12 text-center">
          When I'm Not Coding
        </h2>
        <div className="grid md:grid-cols-3 gap-8">
          {hobbies.map((hobby) => (
            <div
              key={hobby.title}
              className="rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition"
            >
              <div className="relative h-64 overflow-hidden bg-gray-200">
                <img
                  src={hobby.image}
                  alt={hobby.title}
                  className="w-full h-full object-cover hover:scale-105 transition"
                />
              </div>
              <div className="p-6 bg-gradient-to-b from-gray-50 to-white">
                <h3 className="text-xl font-semibold text-gray-900 mb-2">
                  {hobby.title}
                </h3>
                <p className="text-gray-600">{hobby.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

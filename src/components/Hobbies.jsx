import runningImage from '../assets/run.jpg';
import badmintonImage from '../assets/badminton.png';
import Charcuterie from '../assets/board.png';

export function Hobbies() {
  const hobbies = [
    {
      title: "Running",
      description: "Love hitting the trails and staying active",
      image: runningImage,
    },
    {
      title: "Making Charcuterie Boards",
      description: "Enjoy crafting delicious and visually appealing charcuterie boards for friends",
      image: Charcuterie,
    },
    {
      title: "Playing Badminton",
      description: "Enjoying the game and improving my skills",
      image: badmintonImage,
    }
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

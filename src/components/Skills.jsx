export function Skills() {
  const skills = [
    {
      category: "Languages",
      items: ["Java", "Python", "JavaScript (ES6+)", "TypeScript"]
    },
    {
      category: "Frontend & UI",
      items: ["Next.js", "React.js", "React Hooks", "Redux", "HTML", "CSS", "Tailwind", "SCSS/SASS"]
    },
    {
      category: "Backend & APIs",
      items: ["Node.js", "Express.js", "Nest.js", "REST APIs", "GraphQL", "WebSockets"]
    },
    {
      category: "Databases",
      items: ["MySQL", "PostgreSQL", "MongoDB", "Firebase", "Redis", "Vector Databases (FAISS, Pinecone, Chroma)"]
    },
    {
      category: "LLM & AI Engineering",
      items: ["RAG Systems", "LangChain", "LangGraph", "MCP", "Prompt Engineering", "Agentic Systems", "Tool Calling", "Vector Search"]
    },
    {
      category: "Cloud & DevOps",
      items: ["AWS Serverless", "Docker", "Git", "GitHub Actions", "CI/CD", "Linux", "CloudWatch"]
    },
  ];

  return (
    <section id="skills" className="section bg-white">
      <div className="container-max">
        <h2 className="text-4xl font-bold text-gray-900 mb-12 text-center">
          Skills
        </h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skills.map((skillGroup) => (
            <div
              key={skillGroup.category}
              className="p-6 bg-gray-50 rounded-xl border border-gray-200"
            >
              <h3 className="text-xl font-semibold text-gray-900 mb-4">
                {skillGroup.category}
              </h3>
              <ul className="space-y-2">
                {skillGroup.items.map((skill) => (
                  <li
                    key={skill}
                    className="text-gray-700 flex items-center gap-2"
                  >
                    <span className="w-2 h-2 bg-blue-600 rounded-full"></span>
                    {skill}
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

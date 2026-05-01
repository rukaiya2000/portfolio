export function Projects() {
  const projects = [
    {
      title: "NewsNER — Named Entity Recognition Pipeline",
      description: "Production-grade NLP system that automatically extracts structured entities (organizations, people, locations, monetary values, dates) from text sources with confidence scoring, human expert review, and inter-annotator agreement metrics.",
      metrics: "85+ entities/sec, 100% test pass rate",
      technologies: ["Python 3.9+", "Flask", "spaCy 3.7+", "REST APIs", "pytest", "HTML5/CSS3", "JavaScript"],
      highlights: [
        "Full-stack Flask app with responsive web dashboard for entity extraction",
        "Real-time extraction with confidence scoring (0-100%) and progress visualization",
        "Cohen's Kappa inter-annotator agreement metrics for quality validation",
        "REST API with 4 endpoints and structured JSON responses",
        "13 unit tests (100% pass rate), ruff linting, mypy type checking",
        "Domain-agnostic architecture for financial, biomedical, or custom NER tasks"
      ],
      github: "https://github.com/rukaiya2000/newsner",
    },
    {
      title: "Opinion Intelligence System",
      description: "Chrome extension paired with FastAPI backend that analyzes Reddit discussions in real-time. Extracts consensus, debates, viewpoints with sentiment, and surfaces structured insights directly on Reddit.",
      metrics: "Real-time analysis",
      technologies: ["Chrome Extension", "FastAPI", "LLMs", "Sentiment Analysis", "Reddit API"],
      highlights: [
        "AI pipeline extracts consensus from Reddit discussions",
        "Inline 'Analyze' button on Reddit posts",
        "Sentiment analysis of different viewpoints",
        "Persistent results in extension popup for later review"
      ],
      github: "https://github.com/rukaiya2000/opinion-intelligence-system",
    },
    {
      title: "FinanceAI Dashboard",
      description: "Responsive finance dashboard with animated visualizations, AI-powered chat panel, and real-time transaction insights",
      metrics: "<350ms page transitions",
      technologies: ["React", "Recharts", "Framer Motion", "OpenAI API", "React Router"],
      highlights: [
        "Animated stat cards with count-up numbers",
        "Interactive Recharts visualizations (area, donut, bar)",
        "Context-aware AI chat with GPT-3.5 LiteLLM proxy",
        "Dark/light theme system with CSS variables"
      ],
      github: "https://github.com/rukaiya2000/finance-dashboard",
      hosted: "https://finance-dashboard-xi-murex-88.vercel.app/",
    },
    {
      title: "Source-Grounded Enterprise RAG System",
      description: "Enterprise document intelligence system for policy and compliance analysis with source citations",
      metrics: "85% Precision@5, >90% faithfulness, <3s latency",
      technologies: ["LangChain", "MCP Pipelines", "Vector Databases", "LLMs"],
      highlights: [
        "Source-grounded responses with cited evidence",
        "Policy and compliance document analysis",
        "0.78 F1 score in conflict detection"
      ],
    },
    {
      title: "Incident Intelligence & Root Cause Analysis Platform",
      description: "Real-time incident analysis system using MCP pipelines and RAG to analyze logs and alerts",
      metrics: "82% Precision@5, 35% MTTR reduction, <2.5s latency",
      technologies: ["LangGraph", "MCP Pipelines", "Embeddings", "RAG"],
      highlights: [
        "Similar incident retrieval with 82% precision",
        "Automated root cause suggestions",
        "Source-grounded incident summaries with evidence"
      ],
    },
  ];

  return (
    <section id="projects" className="section bg-white">
      <div className="container-max">
        <h2 className="text-4xl font-bold text-gray-900 mb-12 text-center">
          Featured Projects
        </h2>
        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project) => (
            <div
              key={project.title}
              className="bg-gradient-to-br from-gray-50 to-white p-8 rounded-lg border border-gray-200 hover:border-blue-400 transition shadow-sm hover:shadow-lg"
            >
              <h3 className="text-2xl font-bold text-gray-900 mb-2">
                {project.title}
              </h3>
              <p className="text-blue-600 text-sm font-semibold mb-3">
                {project.metrics}
              </p>
              <p className="text-gray-700 mb-6 leading-relaxed">
                {project.description}
              </p>

              {project.highlights && (
                <ul className="mb-6 space-y-1">
                  {project.highlights.map((highlight, idx) => (
                    <li key={idx} className="text-gray-700 text-sm flex items-start gap-2">
                      <span className="text-blue-600 font-bold mt-0.5">•</span>
                      {highlight}
                    </li>
                  ))}
                </ul>
              )}

              <div className="mb-6">
                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="px-3 py-1 bg-blue-100 text-blue-700 rounded-full text-xs font-medium"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              <div className="border-t pt-4 space-y-2">
                {project.github && (
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-block text-blue-600 hover:text-blue-700 font-medium text-sm transition"
                  >
                    → GitHub Repository
                  </a>
                )}
                {project.hosted && (
                  <div>
                    <a
                      href={project.hosted}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-block text-green-600 hover:text-green-700 font-medium text-sm transition"
                    >
                      → View Live Site
                    </a>
                  </div>
                )}
                {project.youtube && (
                  <div>
                    <a
                      href={project.youtube}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-block text-red-600 hover:text-red-700 font-medium text-sm transition"
                    >
                      ▶ YouTube Demo
                    </a>
                  </div>
                )}
                {project.walkthrough && (
                  <div>
                    <a
                      href={project.walkthrough}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-block text-blue-600 hover:text-blue-700 font-medium text-sm transition"
                    >
                      → Project Walkthrough
                    </a>
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

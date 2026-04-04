import { PROJECTS } from "@/constants";

export default function Projects() {
  return (
    <section id="projects" className="py-24">
      <div className="container mx-auto px-6 max-w-7xl">
        <div className="flex items-baseline gap-4 mb-12 border-b border-gray-200/50 pb-4">
          <h2 className="text-3xl font-bold text-gray-900">All Projects</h2>
          <span className="text-gray-500 text-lg">2 Products, 4 Projects</span>
        </div>

        <div className="space-y-12">
          {PROJECTS.map((project, index) => (
            <div key={index} className="bg-glass rounded-3xl p-8 md:p-12 shadow-sm hover:shadow-md transition-all">
              <div className="flex flex-col md:flex-row gap-12">
                {/* Left Column: Project Info */}
                <div className="w-full md:w-1/3">
                  <p className="text-sm text-blue-600 font-medium mb-2">{project.client}</p>
                  <h3 className="text-2xl font-bold text-gray-900 mb-2 whitespace-pre-line leading-tight">
                    {project.title}
                  </h3>
                  <p className="text-gray-500 text-sm mb-6 font-mono">{project.period}</p>

                  <div className="mb-6">
                    <p className="text-sm text-gray-500 mb-1">Role</p>
                    <p className="text-sm font-medium text-gray-700">{project.contribution}</p>
                  </div>

                  <div className="flex flex-wrap gap-2">
                    {project.tags.map((tag, idx) => (
                      <span key={idx} className="px-3 py-1 bg-white/50 border border-white/60 text-blue-600 text-xs font-bold rounded-lg">
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Right Column: Results & Activities */}
                <div className="w-full md:w-2/3">
                  {/* Project Results */}
                  <div className="mb-12">
                    <h4 className="font-bold text-lg text-gray-900 mb-4 border-b border-gray-200/50 pb-2">프로젝트 성과</h4>
                    <div className="space-y-6">
                      {project.results.map((result, rIdx) => (
                        <div key={rIdx} className="flex gap-3">
                          <div className="flex-shrink-0 w-5 h-5 rounded-full bg-gradient-to-br from-blue-500 to-indigo-600 text-white flex items-center justify-center text-xs font-bold mt-0.5 shadow-sm">
                            {rIdx + 1}
                          </div>
                          <div>
                            <p className="font-bold text-gray-900 mb-1">{result.title}</p>
                            <ul className="list-disc list-outside pl-4 space-y-1">
                              {result.items.map((item, iIdx) => (
                                <li key={iIdx} className="text-gray-700 text-sm leading-relaxed">
                                  {item}
                                </li>
                              ))}
                            </ul>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Key Activities */}
                  <div>
                    <h4 className="font-bold text-lg text-gray-900 mb-4 border-b border-gray-200/50 pb-2 flex items-center gap-2">
                      <span className="w-5 h-5 bg-gray-500 rounded flex items-center justify-center text-white text-xs">✓</span>
                      주요 업무 내용
                    </h4>
                    <div className="space-y-6">
                      {project.activities.map((activity, aIdx) => (
                        <div key={aIdx}>
                          <h5 className="font-bold text-gray-800 mb-2 flex items-start gap-2">
                            <span className="text-gray-400">▶</span>
                            {activity.title}
                          </h5>
                          <ul className="list-disc list-outside pl-8 space-y-1">
                            {activity.items.map((item, iIdx) => (
                              <li key={iIdx} className="text-gray-600 text-sm leading-relaxed">
                                {item}
                              </li>
                            ))}
                          </ul>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

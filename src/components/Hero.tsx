import { motion } from "motion/react";
import { PROFILE, EXPERIENCE_SUMMARY_ITEMS, PROFESSIONAL_SUMMARY } from "@/constants";
import { Mail, Phone } from "lucide-react";

export default function Hero() {
  return (
    <section id="home" className="pt-32 pb-16">
      <div className="container mx-auto px-6 max-w-7xl">
        {/* Top Section: Header & Keywords */}
        <div className="flex flex-col gap-8 mb-8 pb-8">
          {/* Content */}
          <div className="w-full">
            <h2 className="text-2xl font-bold mb-6 text-gradient inline-block">안녕하세요!</h2>
            
            {/* Keywords Grid */}
            <div className="flex flex-wrap gap-3 mb-8">
              {PROFILE.keywords.map((keyword, idx) => (
                <span 
                  key={idx} 
                  className="px-4 py-2 rounded-full bg-glass border border-white/60 text-blue-600 font-bold text-sm shadow-sm hover:scale-105 transition-transform cursor-default"
                >
                  {keyword}
                </span>
              ))}
            </div>

            <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6 leading-tight">
              경험이 있는 4년차 기획자 금보경입니다.
            </h1>
            
            <p className="text-gray-700 leading-relaxed whitespace-pre-line mb-8">
              {PROFILE.introduction}
            </p>

            {/* Experience Summary Box */}
            <div className="mt-12">
              <h3 className="text-3xl font-bold mb-8 text-gray-900">Experience Summary</h3>
              <div className="bg-glass-strong rounded-2xl p-8">
                <ul className="space-y-3">
                  {EXPERIENCE_SUMMARY_ITEMS.map((item, idx) => (
                    <li key={idx} className="flex items-start gap-3 text-sm md:text-base text-gray-800">
                      <span className="text-xl flex-shrink-0">{item.icon}</span>
                      <span className="leading-relaxed">{item.text}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>

        {/* Professional Summary Section */}
        <div id="summary" className="bg-glass rounded-3xl p-8 md:p-12 shadow-sm">
          <div className="flex items-baseline gap-4 mb-8 border-b border-gray-200/50 pb-4">
            <h2 className="text-3xl font-bold text-gray-900">Professional Summary</h2>
            <span className="text-gray-500 text-lg">정규직 경력 만 3년</span>
          </div>

          <div className="flex flex-col md:flex-row gap-12">
            {/* Left: Company Info */}
            <div className="w-full md:w-1/3">
              <h3 className="text-2xl font-bold text-blue-600 mb-2">{PROFESSIONAL_SUMMARY.company}</h3>
              <p className="text-gray-500 mb-6">{PROFESSIONAL_SUMMARY.period}<br/>{PROFESSIONAL_SUMMARY.role}</p>
              
              <p className="font-bold text-gray-900 mb-6 whitespace-pre-line leading-relaxed">
                {PROFESSIONAL_SUMMARY.description}
              </p>

              <ul className="space-y-2 text-sm text-gray-600">
                {PROFESSIONAL_SUMMARY.details.map((detail, idx) => (
                  <li key={idx} className="flex items-start gap-2">
                    <span className="text-gray-400">•</span>
                    {detail}
                  </li>
                ))}
              </ul>
            </div>

            {/* Right: Project List */}
            <div className="w-full md:w-2/3 space-y-8">
              {PROFESSIONAL_SUMMARY.projects.map((project, idx) => (
                <div key={idx} className="p-4 rounded-xl hover:bg-white/40 transition-colors">
                  <div className="flex justify-between items-start mb-1">
                    <h4 className="font-bold text-gray-900 text-lg flex-1">{project.title}</h4>
                    <span className="text-gray-400 text-sm whitespace-nowrap ml-4">{project.period}</span>
                  </div>
                  {project.highlight && (
                    <p className="text-blue-600 text-sm font-medium mb-1 bg-blue-50/80 inline-block px-2 py-0.5 rounded">
                      {project.highlight}
                    </p>
                  )}
                  <p className="text-gray-600 text-sm whitespace-pre-line leading-relaxed">
                    {project.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

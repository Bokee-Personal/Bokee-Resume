import { motion } from "motion/react";
import { OTHER_INFO } from "@/constants";

export default function SkillsEducation() {
  return (
    <section id="other-info" className="py-24">
      <div className="container mx-auto px-6 max-w-7xl">
        <h2 className="text-3xl font-bold text-gray-900 mb-12 border-b border-gray-200/50 pb-4">Other information</h2>

        <div className="grid gap-8">
          {/* Education */}
          <div className="bg-glass rounded-3xl p-8 md:p-10">
            <div className="flex flex-col md:flex-row gap-8">
              <div className="w-full md:w-1/4">
                <h3 className="text-xl font-bold text-gray-900 flex items-center gap-2">
                  <span className="w-1.5 h-6 bg-blue-500 rounded-full"></span>
                  학력
                </h3>
              </div>
              <div className="w-full md:w-3/4 space-y-6">
                {OTHER_INFO.education.map((edu, idx) => (
                  <div key={idx} className="flex justify-between items-start border-b border-gray-100/50 pb-4 last:border-0 last:pb-0">
                    <div>
                      <h4 className="font-bold text-gray-900 text-lg mb-1">{edu.name}</h4>
                      <p className="text-gray-600">{edu.major}</p>
                    </div>
                    <span className="text-gray-500 text-sm bg-white/50 px-3 py-1 rounded-full">{edu.period}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Certifications */}
          <div className="bg-glass rounded-3xl p-8 md:p-10">
            <div className="flex flex-col md:flex-row gap-8">
              <div className="w-full md:w-1/4">
                <h3 className="text-xl font-bold text-gray-900 flex items-center gap-2">
                  <span className="w-1.5 h-6 bg-purple-500 rounded-full"></span>
                  자격증
                </h3>
              </div>
              <div className="w-full md:w-3/4 space-y-6">
                {OTHER_INFO.certifications.map((cert, idx) => (
                  <div key={idx} className="flex justify-between items-start border-b border-gray-100/50 pb-4 last:border-0 last:pb-0">
                    <div>
                      <h4 className="font-bold text-blue-600 text-lg mb-1">{cert.name}</h4>
                      <p className="text-gray-400 text-sm">{cert.issuer}</p>
                    </div>
                    <span className="text-blue-600 font-medium bg-blue-50/50 px-3 py-1 rounded-full">{cert.date}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Awards */}
          <div className="bg-glass rounded-3xl p-8 md:p-10">
            <div className="flex flex-col md:flex-row gap-8">
              <div className="w-full md:w-1/4">
                <h3 className="text-xl font-bold text-gray-900 flex items-center gap-2">
                  <span className="w-1.5 h-6 bg-pink-500 rounded-full"></span>
                  수상 및 활동
                </h3>
              </div>
              <div className="w-full md:w-3/4 space-y-6">
                {OTHER_INFO.awards.map((award, idx) => (
                  <div key={idx} className="flex justify-between items-start border-b border-gray-100/50 pb-4 last:border-0 last:pb-0">
                    <div>
                      <h4 className="font-bold text-gray-900 text-lg mb-1">{award.name}</h4>
                      <p className="text-gray-400 text-sm mb-1">{award.issuer}</p>
                      <p className="text-gray-600 text-sm">{award.detail}</p>
                    </div>
                    <span className="text-gray-500 text-sm bg-white/50 px-3 py-1 rounded-full">{award.date}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

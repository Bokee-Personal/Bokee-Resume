import { motion } from "motion/react";
import { JOURNEY } from "@/constants";

export default function Experience() {
  return (
    <section id="journey" className="py-32 bg-slate-50 relative z-20 border-t border-slate-200/60 shadow-[0_-20px_50px_-12px_rgba(0,0,0,0.02)]">
      <div className="container mx-auto px-6 max-w-7xl">
        <div className="mb-16 border-b border-gray-200/50 pb-8">
          <p className="text-gray-500 mb-2">And More...</p>
          <h2 className="text-3xl font-bold text-gray-900">Experience Journey</h2>
        </div>

        <div className="bg-glass-strong rounded-3xl p-8 md:p-12 mb-20 border border-blue-100/50">
          <h3 className="text-xl font-bold text-blue-800 mb-2">{JOURNEY.subtitle}</h3>
          <p className="text-blue-900/80 whitespace-pre-line leading-relaxed">
            {JOURNEY.description}
          </p>
        </div>

        {/* Horizontal Timeline Container */}
        <div className="relative">
          {/* Horizontal Line (Background) with Flowing Animation */}
          <div className="absolute top-8 left-0 right-0 h-1 hidden md:block overflow-hidden rounded-full">
            <motion.div 
              initial={{ scaleX: 0 }}
              whileInView={{ scaleX: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 1.5, ease: "easeInOut" }}
              className="w-full h-full bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 origin-left relative"
            >
              {/* Flowing light effect */}
              <div className="absolute inset-0 bg-[length:200%_100%] bg-gradient-to-r from-transparent via-white/40 to-transparent animate-flow-line"></div>
            </motion.div>
          </div>

          <div className="flex flex-col md:flex-row gap-8 md:gap-0 overflow-x-auto pb-12 snap-x scrollbar-hide">
            {JOURNEY.steps.map((step, index) => (
              <motion.div 
                key={index} 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.15 }}
                className="relative flex-shrink-0 w-full md:w-[320px] snap-center group px-4"
              >
                {/* Node (Dot) */}
                <div className="hidden md:flex absolute top-6 left-0 w-5 h-5 rounded-full border-4 border-white bg-gradient-to-br from-blue-500 to-purple-500 shadow-lg z-10 transition-all group-hover:scale-150 group-hover:shadow-blue-200/50"></div>
                
                {/* Mobile Vertical Line */}
                <div className="md:hidden absolute left-4 top-0 bottom-0 w-0.5 bg-blue-200"></div>
                <div className="md:hidden absolute left-2 top-0 w-4 h-4 rounded-full border-4 border-white bg-blue-500 shadow-sm z-10"></div>

                <div className="pl-12 md:pl-0 md:pt-16">
                  {/* Title */}
                  <h4 className="font-bold text-gray-900 text-lg mb-4 h-auto md:h-14 flex items-center group-hover:text-blue-600 transition-colors">
                    {step.title}
                  </h4>

                  {/* Content Box */}
                  <div className={`
                    ${step.type === 'end' ? 'bg-gradient-to-br from-yellow-50 to-orange-50 border-yellow-200' : 'bg-white border-white/60'} 
                    border rounded-2xl p-6 shadow-sm group-hover:shadow-xl group-hover:-translate-y-1 transition-all relative backdrop-blur-md
                  `}>
                    {/* Arrow for Desktop */}
                    <div className={`hidden md:block absolute -top-2 left-2 w-4 h-4 rotate-45 border-l border-t 
                      ${step.type === 'end' ? 'bg-yellow-50 border-yellow-200' : 'bg-white border-white/60'}`}>
                    </div>

                    <p className={`whitespace-pre-line leading-relaxed text-sm ${step.type === 'end' ? 'font-bold text-gray-900' : 'text-gray-600'}`}>
                      {step.desc}
                    </p>

                    {step.linkText && (
                      <div className="mt-4 pt-4 border-t border-dashed border-gray-300/50">
                        <p className="text-blue-600 font-medium text-xs whitespace-pre-line">
                          {step.linkText}
                        </p>
                      </div>
                    )}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

import { motion } from "motion/react";
import { PROFILE } from "@/constants";

export default function Contact() {
  return (
    <section id="contact" className="py-32 relative overflow-hidden min-h-[80vh] flex flex-col justify-center bg-slate-50 z-20 border-t border-slate-100">
      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-5xl mx-auto text-center">
          {/* Top Labels - Removed as requested */}
          <div className="mb-24"></div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <h3 className="text-2xl md:text-3xl font-light text-gray-600 mb-8 tracking-tight">
              No Excuses, Just Progress!
            </h3>
            
            <h2 className="text-5xl md:text-7xl font-bold mb-6 leading-tight text-gray-900">
              <span className="text-blue-600">Bokee</span> Make It Happen.
            </h2>
            
            <h2 className="text-5xl md:text-7xl font-bold mb-20 text-gray-900">
              Thank you!
            </h2>

            {/* Bottom Info Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 pt-12 border-t border-gray-200/50 max-w-xl mx-auto text-gray-500 text-sm font-medium">
              <a href={`mailto:${PROFILE.email}`} className="hover:text-blue-600 transition-colors">
                {PROFILE.email}
              </a>
              <div>{PROFILE.phone}</div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Subtle Background Accents */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full -z-10 pointer-events-none">
        <div className="absolute top-1/2 left-1/4 w-96 h-96 bg-blue-100/30 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-purple-100/30 rounded-full blur-3xl"></div>
      </div>
    </section>
  );
}

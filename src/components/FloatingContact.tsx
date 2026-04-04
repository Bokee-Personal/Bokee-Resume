import { Mail, Phone } from "lucide-react";
import { PROFILE } from "@/constants";

export default function FloatingContact() {
  return (
    <div className="hidden 3xl:flex fixed left-1/2 top-[35%] -translate-y-1/2 -ml-[950px] z-40 flex-col gap-4">
      <div className="bg-glass p-5 rounded-2xl shadow-lg border border-white/40 backdrop-blur-xl flex flex-col gap-5 transition-all hover:scale-105 w-[220px]">
        <h3 className="text-xs font-bold text-gray-400 uppercase tracking-widest text-center mb-1">
          Contact
        </h3>
        
        <div className="flex flex-col gap-5">
          <a 
            href={`mailto:${PROFILE.email}`}
            className="group flex flex-col items-center text-center gap-2"
            title="Email Me"
          >
            <div className="w-10 h-10 rounded-full bg-blue-50 flex items-center justify-center text-blue-600 group-hover:bg-blue-600 group-hover:text-white transition-colors shadow-sm">
              <Mail size={18} />
            </div>
            <div className="flex flex-col">
              <span className="text-xs font-medium text-gray-700 group-hover:text-blue-600 transition-colors break-all">{PROFILE.email}</span>
            </div>
          </a>

          <div className="group flex flex-col items-center text-center gap-2">
            <div className="w-10 h-10 rounded-full bg-purple-50 flex items-center justify-center text-purple-600 group-hover:bg-purple-600 group-hover:text-white transition-colors shadow-sm">
              <Phone size={18} />
            </div>
            <div className="flex flex-col">
              <span className="text-xs font-medium text-gray-700 group-hover:text-purple-600 transition-colors">{PROFILE.phone}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

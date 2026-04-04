/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Experience from "@/components/Experience";
import Projects from "@/components/Projects";
import SkillsEducation from "@/components/SkillsEducation";
import Contact from "@/components/Contact";
import FloatingContact from "@/components/FloatingContact";

export default function App() {
  return (
    <div className="min-h-screen font-sans text-gray-900 selection:bg-blue-100 selection:text-blue-900 relative overflow-hidden">
      {/* Animated Background */}
      <div className="fixed inset-0 -z-10 bg-gradient-to-br from-blue-50 via-white to-purple-50"></div>
      <div className="fixed inset-0 -z-10 overflow-hidden pointer-events-none">
        <div className="absolute -top-24 -left-24 w-[500px] h-[500px] bg-blue-200 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob"></div>
        <div className="absolute top-1/4 -right-24 w-[500px] h-[500px] bg-purple-200 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-2000"></div>
        <div className="absolute bottom-1/4 -left-24 w-[600px] h-[600px] bg-pink-200 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-4000"></div>
        <div className="absolute -bottom-24 right-1/4 w-[500px] h-[500px] bg-blue-100 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob"></div>
      </div>

      <Header />
      <FloatingContact />
      <main className="relative z-10">
        <Hero />
        <Projects />
        <SkillsEducation />
        <Experience />
        <Contact />
      </main>
    </div>
  );
}

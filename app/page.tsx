import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Projects from "@/components/Projects";
import SkillsEducation from "@/components/SkillsEducation";

export default function Home() {
  return (
    <main className="min-h-screen bg-slate-950 text-slate-100 selection:bg-emerald-500 selection:text-slate-950">
      <Navbar />
      <Hero />
      <Projects />
      <SkillsEducation />
    </main>
  );
}
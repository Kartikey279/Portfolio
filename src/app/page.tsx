import Sidebar from "@/components/Sidebar";
import HeroSection from "@/components/HeroSection";
import ExperienceSection from "@/components/ExperienceSection";
import EducationSection from "@/components/EducationSection";
import AwardsSection from "@/components/AwardsSection";
import SkillsSection from "@/components/SkillsSection";
import ProjectsSection from "@/components/ProjectsSection";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <div className="max-w-[1400px] mx-auto min-h-screen p-4 lg:p-8 lg:pl-28">
      <Sidebar />
      <main className="flex flex-col gap-6 lg:gap-8 pt-0">
        <HeroSection />
        <ExperienceSection />
        <EducationSection />
        <SkillsSection />
        <ProjectsSection />
        <AwardsSection />
        <Footer />
      </main>
    </div>
  );
}

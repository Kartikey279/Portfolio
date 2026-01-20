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
    <div className="max-w-[1600px] mx-auto min-h-screen grid grid-cols-1 lg:grid-cols-[300px_1fr] xl:grid-cols-[340px_1fr] gap-6 lg:gap-10 p-4 lg:p-8">
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

import { HeroSection } from "@/components/sections/hero-section";
import { AboutSection } from "@/components/sections/about-section";
import { ProjectsSection } from "@/components/sections/projects-section";
import { EducationSection } from "@/components/sections/education-section";
import { ContactSection } from "@/components/sections/contact-section";
import { AppHeader } from "@/components/layout/header";
import { AppFooter } from "@/components/layout/footer";

export default function Home() {
  return (
    <div className="flex min-h-screen w-full flex-col bg-background">
      <AppHeader />
      <main className="flex-1">
        <HeroSection />
        <AboutSection />
        <ProjectsSection />
        <EducationSection />
        <ContactSection />
      </main>
      <AppFooter />
    </div>
  )
}

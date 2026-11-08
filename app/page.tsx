import { resumeData } from "@/data/resumeData";
import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
import { DotsGrid } from "@/components/DotsGrid";
import { FocusSection } from "@/components/FocusSection";
import { ProjectsSection } from "@/components/ProjectsSection";
import { AboutSection } from "@/components/AboutSection";
import { ContactSection } from "@/components/ContactSection";
import { Footer } from "@/components/Footer";

export default function Home() {
  return (
    <div className="wrap">
      <Header name={resumeData.name} />

      <main className="frame" id="top">
        <Hero
          year={resumeData.year}
          role={resumeData.role}
          headline={resumeData.headline}
          lede={resumeData.lede}
        />

        <DotsGrid
          topLabel={resumeData.focusTagline}
          bottomLabel={resumeData.focusBottomTagline}
          total={resumeData.dotMatrix.total}
          filledIndices={resumeData.dotMatrix.filledIndices}
          accentIndices={resumeData.dotMatrix.accentIndices}
        />

        <FocusSection areas={resumeData.focusAreas} />

        <ProjectsSection projects={resumeData.projects} />

        <AboutSection
          paragraphs={resumeData.about.paragraphs}
          facts={resumeData.about.facts}
        />

        <ContactSection
          email={resumeData.email}
          links={resumeData.socialLinks}
        />
      </main>

      <Footer
        copyright={resumeData.footer.copyright}
        note={resumeData.footer.note}
      />
    </div>
  );
}

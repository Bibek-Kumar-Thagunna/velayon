import {
  GridBackground,
  Navigation,
  Footer,
  HeroSection,
  ApproachSection,
  WorkSection,
  ProcessSection,
  NotesSection,
  ContactCTA,
} from "@/components";

export default function Home() {
  return (
    <GridBackground>
      <Navigation />

      <main>
        <HeroSection />
        <WorkSection />
        <ApproachSection />
        <ProcessSection />
        <NotesSection />
        <ContactCTA />
      </main>

      <Footer />
    </GridBackground>
  );
}

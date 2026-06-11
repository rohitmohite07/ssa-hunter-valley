import AboutSection from "./components/AboutSection";
import CoachesAndEvents from "./components/CoachesAndEvents";
import Facilities from "./components/Facilities";
import FeaturesAndPrograms from "./components/FeaturesAndPrograms";
import Footer from "./components/Footer";
import HeroSection from "./components/Hero";
import LocationHighlights from "./components/LocationHighlights";
import TaglineTicker from "./components/TaglineTicker";
import Team from "./components/Team";
import VisionBanner from "./components/VisionBanner";

export default function Home() {
  return (
    <>
      <HeroSection />
      <AboutSection />
      <VisionBanner />
      <FeaturesAndPrograms />
      <TaglineTicker />
      <LocationHighlights />
      <Team />
      <Facilities />
      <CoachesAndEvents />
    </>
  );
}

import AboutSection from "./components/AboutSection";
import FeaturesAndPrograms from "./components/FeaturesAndPrograms";
import HeroSection from "./components/Hero";
import TaglineTicker from "./components/TaglineTicker";
import VisionBanner from "./components/VisionBanner";

export default function Home() {
  return (
    <>
      <HeroSection />
      <AboutSection />
      <VisionBanner />
      <FeaturesAndPrograms />
      <TaglineTicker />
    </>
  );
}


import Hero from "./sections/Hero";
import ShowcaseSection from "./sections/ShowcaseSection";
import NavBar from "./components/NavBar";
import LogoSection from "./components/LogoSection";
import FeatureCards from "./sections/FeatureCards";
import ExperienceSection from "./sections/ExperienceSection";

const App = () => (
  <>
    <NavBar />
    <Hero />
    <ShowcaseSection/>
    <LogoSection />
    <FeatureCards/>
    <ExperienceSection/>
  </>
);

export default App;


import Hero from "./sections/Hero";
import ShowcaseSection from "./sections/ShowcaseSection";
import NavBar from "./components/NavBar";
import LogoSection from "./components/LogoSection";
import FeatureCards from "./sections/FeatureCards";
import ExperienceSection from "./sections/ExperienceSection";
import TechStack from "./sections/TechStack";
import Testimonials from "./sections/Testimonials";

const App = () => (
  <>
    <NavBar />
    <Hero />
    <ShowcaseSection/>
    <LogoSection />
    <FeatureCards/>
    <ExperienceSection/>
    <TechStack />
    <Testimonials/>
  </>
);

export default App;

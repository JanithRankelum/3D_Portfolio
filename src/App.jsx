
import Hero from "./sections/Hero";
import ShowcaseSection from "./sections/ShowcaseSection";
import NavBar from "./components/NavBar";
import LogoSection from "./components/LogoSection";
import FeatureCards from "./sections/FeatureCards";

const App = () => (
  <>
    <NavBar />
    <Hero />
    <ShowcaseSection/>
    <LogoSection />
    <FeatureCards/>
  </>
);

export default App;

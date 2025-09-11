import { useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import { useNavigate } from "react-router-dom"; // For navigation

gsap.registerPlugin(ScrollTrigger);

const AppShowcase = () => {
  const sectionRef = useRef(null);
  const rydeRef = useRef(null);
  const libraryRef = useRef(null);
  const ycDirectoryRef = useRef(null);
  const navigate = useNavigate(); // Hook for navigation

  useGSAP(() => {
    gsap.fromTo(sectionRef.current, { opacity: 0 }, { opacity: 1, duration: 1.5 });

    const cards = [rydeRef.current, libraryRef.current, ycDirectoryRef.current];

    cards.forEach((card, index) => {
      gsap.fromTo(
        card,
        { y: 50, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 1,
          delay: 0.3 * (index + 1),
          scrollTrigger: { trigger: card, start: "top bottom-=100" },
        }
      );
    });
  }, []);

  return (
    <div id="work" ref={sectionRef} className="app-showcase">
      <div className="w-full">
        <div className="showcaselayout">
          <div ref={rydeRef} className="first-project-wrapper">
            <div className="image-wrapper">
              <img src="/images/project1.png" alt="Ryde App Interface" />
            </div>
            <div className="text-content">
              <h2>
                Empowering Smarter Driving Through Real-Time Monitoring & Predictive Maintenance, User-Friendly App
                called DR. VEHICLE
              </h2>
              <p className="text-white-50 md:text-xl">
                 Created a vehicle maintenance app with OBD2 connectivity for real-time diagnostics, fuel monitoring, and
                 service reminders, enhancing vehicle efficiency and reducing repair expenses.
              </p>
            </div>
          </div>

          <div className="project-list-wrapper overflow-hidden">
            <div className="project" ref={libraryRef}>
              <div className="image-wrapper bg-[#FFEFDB]">
                <img
                  src="/images/project2.png"
                  alt="Library Management Platform"
                />
              </div>
              <h2>Machine-Learning and Snowflake Powered Price Prediction for Rice Economy</h2>
            </div>

            <div className="project" ref={ycDirectoryRef}>
              <div className="image-wrapper bg-[#FFE7EB]">
                <img src="/images/project3.png" alt="YC Directory App" />
              </div>
              <h2>E - Commerce Platform Web App</h2>
            </div>
          </div>

         {/* See More Button */}
<div className="mt-8 text-center">
  <button
    onClick={() => navigate('../src/sections/projects')}
    className="relative px-8 py-3 rounded-xl font-semibold text-white 
               bg-gradient-to-r from-yellow-500 to-orange-600 
               shadow-lg shadow-yellow-500/30
               hover:scale-105 hover:shadow-yellow-500/50
               transition-all duration-300 ease-in-out"
  >
    <span className="relative z-10">🚀 See More</span>
    <span className="absolute inset-0 rounded-xl bg-gradient-to-r 
                     from-yellow-400 to-orange-500 blur opacity-30"></span>
  </button>
</div>

        </div>
      </div>
    </div>
  );
};

export default AppShowcase;

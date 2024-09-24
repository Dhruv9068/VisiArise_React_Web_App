import AboutVisiarise from "./About_Components.jsx/AboutVisiARise";
import FutureGoalsSection from "./About_Components.jsx/FeatureGoals";
import OurMotiveSection from "./About_Components.jsx/OurMotive";
import ProblemSection from "./About_Components.jsx/ProblemSection";
import ServicesSection from "./About_Components.jsx/ServicesSection";
import SolutionSection from "./About_Components.jsx/Solution";
import Footer from "./Footer";

const About = () => {
    return (
      <>
       <AboutVisiarise />
        <ServicesSection />
        <ProblemSection />
        <SolutionSection />
        <OurMotiveSection />
        <FutureGoalsSection />
        <Footer/>
        </>
    );
  };
  
  export default About;

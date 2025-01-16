import {React,useState,useEffect} from 'react';
import { Routes, Route } from 'react-router-dom'; // Import Routes and Route
import Navbar from './components/Navbar';
import Landing from './components/Landing';
import CompanyOverview from './components/CompanyOverview';
import Services from './components/Services';
import ContactUs from './components/ContactUs';
import CustomCursor from './components/CustomCursor';
import Model3DPage from './components/Model3DPage';
import Animation3DPage from './components/Animation3DPage';
import PrivacyPolicy from './components/PrivacyPolicy';
import TermsAndConditions from './components/TermsAndConditions';
import Disclaimer from './components/Disclaimer';
import HomePage from './components/HomePage';
import Mob from './components/Mob';
import AboutUs from './components/AboutUs';
import AugumentedReality from './components/AugumentedReality';
import FAQ from './components/FAQ';
import Careers from './components/Careers';


const App = () => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    // Function to check screen width
    const handleResize = () => {
      setIsMobile(window.innerWidth < 600);  // 600px breakpoint for mobile
    };

    // Initial check on mount
    handleResize();

    // Add event listener for window resize
    window.addEventListener('resize', handleResize);

    // Cleanup event listener on unmount
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);  // Empty dependency array to run only once when the component mounts

  return (
    <>
      <CustomCursor />
      {isMobile ? <Mob /> : <Navbar />}
      <Routes>
        <Route path="/" element={<HomePage />} />

        {/* Other Pages */}
        <Route path="/PrivacyPolicy" element={<PrivacyPolicy />} />
        <Route path="/TermsAndConditions" element={<TermsAndConditions />} />
        <Route path="/Disclaimer" element={<Disclaimer />} />
        <Route path="/AboutUs" element={<AboutUs />} />
        <Route path="/3DModel" element={<Model3DPage />} />
        <Route path="/3DAnimation" element={<Animation3DPage />} />
        <Route path="/AugumentedReality" element={<AugumentedReality />} />
        <Route path="/FAQ" element={<FAQ />} />
        <Route path="/Careers" element={<Careers />} />
  

      </Routes>
    </>
  );
};

export default App;

import React from 'react';
import { Routes, Route } from 'react-router-dom'; // Import Routes and Route
import Navbar from './components/Navbar';
import Landing from './components/Landing';
import CompanyOverview from './components/CompanyOverview';
import Services from './components/Services';
import ContactUs from './components/ContactUs';
import CustomCursor from './components/CustomCursor';
import Model3DPage from './components/Model3DPage';
import Animation3DPage from './components/Animation3DPage';

const App = () => {
  return (
    <>
    
      <CustomCursor />
    <Routes>
      {/* Route for the main page */}
      <Route
        path="/"
        element={
          <>
            <Navbar />
            <div id="home">
              <Landing />
            </div>
            <div id="company-overview">
              <CompanyOverview />
            </div>
            <div id="services">
              <Services />
            </div>
            <div id="contact-us">
              <ContactUs />
            </div>
          </>
        }
      />

      {/* Route for the separate page */}
      <Route path="/3DModel" element={<Model3DPage />} />
      <Route path="/3DAnimation" element={<Animation3DPage />} />
    </Routes>
    </>
  );
};

export default App;

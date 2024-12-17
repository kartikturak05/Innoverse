import React from 'react';
import Navbar from './components/Navbar';
import Landing from './components/Landing';
import CompanyOverview from './components/CompanyOverview';
import Services from './components/Services';
import ContactUs from './components/ContactUs';
import CustomCursor from "./components/CustomCursor";

const App = () => {
  return (
      <div>
        <CustomCursor />
        <Navbar />
          <div id='home'><Landing /></div> 
          <div id='company-overview'> <CompanyOverview /> /</div>
          <div id='services'> <Services /> </div>
          <div id='contact-us'><ContactUs /></div> 
      </div>  
  );
}

export default App;

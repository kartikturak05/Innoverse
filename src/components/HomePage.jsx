import React from 'react';
import Landing from './Landing';
import CompanyOverview from './CompanyOverview';
import Services from './Services';
import ContactUs from './ContactUs';
import OurClients from './OurClients';

const HomePage = () => {
  return (
    <div>
      <section id="home">
        {/* <h1>Welcome to Home</h1> */}
        {/* Home content */}
        <Landing />
      </section>

      <section id="company-overview">
        {/* <h1>Company Overview</h1> */}
        {/* Products content */}
        <CompanyOverview/>
      </section>

      <section id="services">
        {/* <h1>Our Services</h1> */}
        {/* Services content */}
        <Services/>
      </section>

      <section id="OurClients">
        {/* <h1>Our Services</h1> */}
        {/* Services content */}
        <OurClients/>
      </section>

      <section id="contact-us">
        {/* <h1>Contact Us</h1> */}
        {/* Contact Us content */}
        <ContactUs/>
      </section>
    </div>
  );
};

export default HomePage;

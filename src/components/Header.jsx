import React from "react";
import logo from './../assets/images/SunWest43YearsofTrust-Blue.png';
import callUs from './../assets/images/Callus.png';

const Header = () => {
     return (
     <>
          <header className="header-top">
               <img className="sunwest-header-logo" src={logo} alt="sunwest-logo" />
               <section className="greeting-section">
                    <h1 className="greeting-title">Welcome!</h1>
                         <p className="greeting-description">We are here to assist you with any questions</p>
                         <p className="greeting-description">you may have about your mortgage</p>
                    <p className="greeting-description descr-cta">Let's start with something simple.</p>
               </section>
          </header>
          <img className="call-to-action" src={callUs} alt="chatbot" height="70" width="80" />
     </>
  )
};

export default Header;

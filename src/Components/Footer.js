import React from 'react';
import { NavLink } from 'react-router-dom'; // Import NavLink from react-router-dom

const Footer = () => {
  return (
    <section>
      <div className="contact" id="contact">
        <div className="sociallinks">
          <NavLink to="/"><i className="fa-solid fa-house"></i></NavLink>
          <NavLink to="/about"><i className="fa-solid fa-user"></i></NavLink>
          <NavLink to="/edu"><i className="fa-solid fa-school"></i></NavLink> {/* Close the NavLink tag */}
          <NavLink to="/projects"><i className="fa-solid fa-list-check"></i></NavLink> {/* Close the NavLink tag */}
          <NavLink to="/contact"><i className="fa-solid fa-phone"></i></NavLink>
        </div>

        <div className='copynone'><i className="fa-regular fa-copyright"></i> 2023 Mahanthi Vikas </div>
      </div>
    </section>
  );
}

export default Footer;

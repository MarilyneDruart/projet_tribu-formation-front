import React from 'react';
import { NavLink } from 'react-router-dom';

// Imports locaux
import '../../styles/styles.scss';

function Footer() {
  return (
    <div className="footer">
      <NavLink to="/a-propos">A propos</NavLink>
      <NavLink to="/mentions-legales">Mentions légales</NavLink>
      <NavLink to="/contact">Nous Contacter</NavLink>
    </div>
  );
}

export default Footer;

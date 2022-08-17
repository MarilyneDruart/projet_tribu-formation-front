import React from 'react';
import { NavLink } from 'react-router-dom';

// Imports locaux
import '../../styles/styles.scss';

function Footer() {
  const classNames = ({ isActive }) => `Footer_NavLink ${isActive ? 'Footer_NavLink--active' : ''}`;

  return (
    <div className="Footer">
      <NavLink to="/a-propos" className={classNames}>A propos</NavLink>
      <NavLink to="/mentions-legales" className={classNames}>Mentions légales</NavLink>
      <NavLink to="/contact" className={classNames}>Nous Contacter</NavLink>
    </div>
  );
}

export default Footer;

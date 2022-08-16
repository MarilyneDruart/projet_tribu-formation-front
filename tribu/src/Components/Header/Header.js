import React from 'react';

// Imports locaux
import '../../styles/styles.scss';
import logo from '../../assets/images/logo.jpg';

function Header() {
  return (
    <div id="header">
      <img src={logo} className="header-logo" alt="Logo Tribu" />
      Meet, Visit, Share it, Repeat
    </div>
  );
}

export default Header;

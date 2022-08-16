import React from 'react';

// Imports locaux
import '../../styles/styles.scss';
import logo from '../../assets/images/logo.jpg';

function Header() {
  return (
    <div id="header">
      <img src={logo} className="header-logo" alt="Logo Tribu" />
      <h1>Meet, Visit, Share it, Repeat</h1>
      <button
        type="button"
        className="connection-button"
      >
        Connexion
      </button>

    </div>
  );
}

export default Header;

import React from 'react';
import { Link } from 'react-router-dom';

// Imports locaux
import '../../styles/styles.scss';
import plane from '../../assets/images/plane3.png';

function NotFound() {
  return (
    <div className="NotFound">
      <div className="sky">
        <Link to="/">
          <img src={plane} alt="avion" />
        </Link>
      </div>
      <div className="NotFound_text">
        <p>
          Mauvaise destination...
        </p>
        <p>
          Attrape l&apos;avion pour un atterissage sur l&apos;accueil
        </p>
      </div>
    </div>
  );
}

export default NotFound;

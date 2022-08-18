import React from 'react';
import MainImage from '../MainImage/MainImage';
import '../../styles/styles.scss';

function Home() {
  return (
    <div className="Home">
      <MainImage />
      {/* On veut afficher les villes de notre BDD
          On map sur notre tableau de villes
          et on affiche chaque ville sous forme de card cliquable (liens)
          on récupère les noms des villes et leur image avec une requête axios GET */}
    </div>
  );
}

export default Home;

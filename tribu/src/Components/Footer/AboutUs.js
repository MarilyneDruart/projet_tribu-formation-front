/* eslint-disable max-len */
import React from 'react';
import MainImage from '../MainImage/MainImage';
import image from '../../assets/images/aboutus.jpg';

import '../../styles/styles.scss';

function AboutUS() {
  return (
    <div className="AboutUs">
      <MainImage image={image} />
      <h1 className="AboutUs_title">
        <span className="AboutUs_tribu">TRIBU !</span>
        {' '}
        Mais… qu’est-ce que c’est ???
      </h1>

      <div className="AboutUs_content">
        <p className="AboutUs_first-paragraph">
          Partir vivre à l’étranger, c’est un rêve qui peut se compliquer lorsqu’on ne connaît pas bien les bons plans du coin ou que l’on se sent seul.
        </p>

        <p>
          <span className="AboutUs_tribu">TRIBU</span>
          {' '}
          est LE réseau social pour les français expatriés.
        </p>

        <p>
          Avec cette appli, pas de prise de tête ! Tu pourras trouver où partager des lieux d’intérêts, échanger des conseils et rencontrer d’autres français expatriés dans ta nouvelle ville.
        </p>

        <p>
          Alors n’hésite pas à ajouter tes restos préférés, créer des événements et les partager, participer à des sorties proposées pour trouver tes marques et peut-être à ton tour accueillir un jour de nouveaux arrivants.
        </p>

        <p>
          Démarre ta nouvelle vie !
        </p>

        <p>
          Rejoins la
          {' '}
          <span className="AboutUs_tribu">TRIBU</span>
        </p>
      </div>
    </div>
  );
}

export default AboutUS;

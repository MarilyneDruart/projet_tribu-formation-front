/* eslint-disable max-len */
import React from 'react';
import MainImage from '../MainImage/MainImage';
import image from '../../assets/images/legal_mentions.jpg';

// Imports locaux
import '../../styles/styles.scss';

function LegalNotice() {
  return (
    <div className="LegalNotice">
      <MainImage title="Mentions légales" image={image} />
      <div className="LegalNotice_content">
        <div className="LegalNotice_text">
          <p>Tout comme nos formateurs, nous sommes conscients que cette page sera lue par peu de lecteurs, voir personne.</p>
          <p>Pour autant, nous y avons mis tout notre coeur car nous savons à quel point sa place est importante ♥ (obligatoire en fait).</p>
          <p>Vous trouverez donc sur cette page les informations obligatoires concernant l’école, nous en fait, on n’est pas vraiment concernés mais on aime bien tout faire comme il faut.</p>
          <p>Si jamais vous vous êtes égarés sur cette page, pour vous remercier de votre passage, voici quelques savoirs inutiles pour briller en société (source Topito) :</p>
          <ul className="LegalNotice_ul">
            <li className="LegalNotice_li">Il est impossible d’éternuer pendant le sommeil</li>
            <li className="LegalNotice_li">Jouer à Tetris diminue les fringales</li>
            <li className="LegalNotice_li">Le son de démarrage de Windows 95 a été composé par le musicien et producteur Brian Eno (U2)</li>
            <li className="LegalNotice_li">Les traits de Yoda ont été inspirés par le visage d’Einstein</li>
            <li className="LegalNotice_li">L’entreprise Nintendo a été fondée en 1889</li>
            <li className="LegalNotice_li">La banane possède plus de gènes que l’homme</li>
            <li className="LegalNotice_li">L’inventeur de la police de caractère Comic Sans s’appelle Vincent Connare</li>
            <li className="LegalNotice_li">85 % des e-mails échangés chaque jour sont des spams</li>
            <li className="LegalNotice_li">Le jeu PacMan, sorti en 1980, s’appelait initialement Puckman.</li>
            <li className="LegalNotice_li">Le premier nom de Google était BackRub (qui signifie massage de dos)</li>
          </ul>

          <h3 className="LegalNotice_h3">Voici les mentions légales de notre école préférée:</h3>

          <h4 className="LegalNotice_h4">Editeur</h4>
          <p>Ecole O’clock, SAS au capital de 1 680 026 € ayant son siège social au 10 rue de Penthievre à Paris (75008), immatriculée sous le numéro 818 614 588 au RCS de Paris.</p>

          <h4 className="LegalNotice_h4">Directeur de la publication</h4>
          <p> Anthony Marais</p>

          <h4 className="LegalNotice_h4">Contacter O’clock</h4>
          <p>hey@oclock.io - 09.74.76.80.67</p>

          <h4 className="LegalNotice_h4">Hébergeur du site</h4>
          <p>Gandi SAS au capital de 800 000 € ayant son siège social au 63-65 boulevard Massena à Paris (75013), immatriculée sous le numéro 423 093 459 au RCS de Paris.</p>

          <h4 className="LegalNotice_h4">Déclaration CNIL</h4>
          <p>Conformément à la loi N°78-17 du 6 janvier 1978 relative à l’informatique, aux fichiers et aux libertés, la société O’clock a fait l’objet d’une déclaration auprès de la CNIL sous le numéro d’enregistrement 2027779</p>
        </div>
      </div>
    </div>
  );
}

export default LegalNotice;

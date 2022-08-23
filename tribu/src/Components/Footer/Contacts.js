import React from 'react';

// Imports locaux
import '../../styles/styles.scss';
import laurent from '../../assets/images/laurent.png';

function Contacts() {
  return (
    <div className="Contacts">
      <h1 className="Contacts_title">Contacts</h1>
      <div className="box">

        <div className="card">
          <div className="imgBx">
            <img src="" alt="personne1" />
          </div>
          <div className="details">
            <h2>
              Lola Costa
              <span>
                Front-end / Product Owner
              </span>
            </h2>
          </div>
        </div>

        <div className="card">
          <div className="imgBx">
            <img src="" alt="personne1" />
          </div>
          <div className="details">
            <h2>
              Maryline Druart
              <span>
                Back-end / Scrum Master
              </span>
            </h2>
          </div>
        </div>

        <div className="card">
          <div className="imgBx">
            <img src="" alt="personne1" />
          </div>
          <div className="details">
            <h2>
              Svitlana Burlak
              <span>
                Back-end / Git Master
              </span>
            </h2>
          </div>
        </div>

        <div className="card">
          <div className="imgBx">
            <img src="" alt="personne1" />
          </div>
          <div className="details">
            <h2>
              Pierre-Henri Kocan
              <span>
                Back-end / Lead Dev Back
              </span>
            </h2>
          </div>
        </div>

        <div className="card">
          <div className="imgBx">
            <img src={laurent} alt="personne1" />
          </div>
          <div className="details">
            <h2>
              Laurent Arcos
              <span>
                Front-end / Lead Dev Front
              </span>
            </h2>
          </div>
        </div>

      </div>
    </div>
  );
}

export default Contacts;

import React from 'react';

// Imports locaux
import '../../styles/styles.scss';
import lola from '../../assets/images/lola.png';
import marilyne from '../../assets/images/marilyne.png';
import svitlana from '../../assets/images/svitlana.png';
import pierrehenri from '../../assets/images/pierrehenri.png';
import laurent from '../../assets/images/laurent.png';

function Contacts() {
  return (
    <div className="Contacts">
      <div className="box">

        <a href="https://www.linkedin.com/in/lolacosta1/" target="_blank" rel="noopener noreferrer">
          <div className="card">
            <div className="imgBx">
              <img src={lola} alt="Lola Costa" />
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
        </a>

        <a href="https://www.linkedin.com/in/marilyne-druart/" target="_blank" rel="noopener noreferrer">
          <div className="card">
            <div className="imgBx">
              <img src={marilyne} alt="Marilyne Druart" />
            </div>
            <div className="details">
              <h2>
                Marilyne Druart
                <span>
                  Back-end / Scrum Master
                </span>
              </h2>
            </div>
          </div>
        </a>

        <a href="https://www.linkedin.com/in/svitlana-burlak/" target="_blank" rel="noopener noreferrer">
          <div className="card">
            <div className="imgBx">
              <img src={svitlana} alt="Svitlana Burlak" />
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
        </a>

        <a href="https://www.linkedin.com/in/pierre-henri-kocan/" target="_blank" rel="noopener noreferrer">
          <div className="card">
            <div className="imgBx">
              <img src={pierrehenri} alt="Pierre-Henri Kocan" />
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
        </a>

        <a href="https://www.linkedin.com/in/laurentarcos/" target="_blank" rel="noopener noreferrer">
          <div className="card">
            <div className="imgBx">
              <img src={laurent} alt="Laurent Arcos" />
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
        </a>

      </div>
    </div>
  );
}

export default Contacts;

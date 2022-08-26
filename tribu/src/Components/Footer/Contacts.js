import React from 'react';

// Imports locaux
import '../../styles/styles.scss';
import laurent from '../../assets/images/laurent.png';

function Contacts() {
  return (
    <div className="Contacts">
      <h1 className="Contacts_title">Contacts</h1>
      <div className="box">

        <a href="https://www.linkedin.com/in/lolacosta1/">
          <div className="card">
            <div className="imgBx">
              <img src="" alt="Lola Costa" />
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

        <a href="https://www.linkedin.com/in/marilyne-druart/">
          <div className="card">
            <div className="imgBx">
              <img src="" alt="Marilyne Druart" />
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

        <a href="https://www.linkedin.com/in/svitlana-burlak/">
          <div className="card">
            <div className="imgBx">
              <img src="" alt="Svitlana Burlak" />
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

        <a href="https://www.linkedin.com/in/pierre-henri-kocan/">
          <div className="card">
            <div className="imgBx">
              <img src="" alt="Pierre-Henri Kocan" />
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

        <a href="https://www.linkedin.com/in/laurentarcos/">
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

import React from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

import '../../styles/styles.scss';
import MainImage from '../MainImage/MainImage';

function Home() {
  const citiesList = useSelector((state) => state.cities.list);

  return (
    <div className="Home">
      <MainImage />
      <h2 className="Home_title">Choisis ta ville </h2>
      <div className="Home_cards-list">
        {citiesList.map((city) => (
          <article className="Home_card" key={city.id}>
            <Link to={`/city/${city.slug}`} className="Home_city-card-link">
              <img className="Home_card-image" src={city.image} alt={city.name} />
              <div className="Home_city-card-content">
                <h2 className="Home_card-name">{city.name}</h2>
                <p className="Home_card-country">{city.country}</p>
              </div>
            </Link>
          </article>
        ))}
      </div>
    </div>
  );
}

export default Home;

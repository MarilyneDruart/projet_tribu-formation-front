import React from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

import MainImage from '../MainImage/MainImage';
import '../../styles/styles.scss';

function Home() {
  const citiesList = useSelector((state) => state.cities.list);

  return (
    <div className="Home">
      <MainImage />
      {citiesList.map((city) => (
        <article className="Home_city-card" key={city.id}>
          <Link to={`/${city.slug}`} className="Home_city-card-link">
            <img className="Home_city-card_img" src={city.image} alt={city.name} />
            <div className="Home_city-card-content">
              <h2 className="Home_city-card-name">{city.name}</h2>
              <p className="Home_city-card-country">{city.country}</p>
            </div>
          </Link>
        </article>
      ))}
    </div>
  );
}

export default Home;

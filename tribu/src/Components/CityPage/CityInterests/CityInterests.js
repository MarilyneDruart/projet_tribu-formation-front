import { React } from 'react';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import PropTypes from 'prop-types';
import '../../../styles/styles.scss';

function CityInterests({ name }) {
  const interestsList = useSelector((state) => state.interests.list);

  return (
    <div className="CityInterests">
      <h2>
        Intérêts partagés par la communauté pour
      </h2>
      <h2>{name}</h2>
      {interestsList.map((interests) => (
        <article className="Home_interests-card" key={interests.id}>
          <Link to={`/${interests.slug}`} className="Home_interests-card-link">
            <img className="Home_interests-card_img" src={interests.image} alt={interests.name} />
            <div className="Home_interests-card-content">
              <h2 className="Home_interests-card-name">{interests.name}</h2>
              <p className="Home_interests-card-country">{interests.country}</p>
            </div>
          </Link>
        </article>
      ))}
    </div>
  );
}

CityInterests.propTypes = {
  name: PropTypes.string.isRequired,
};

export default CityInterests;

import { React } from 'react';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import PropTypes from 'prop-types';
import '../../../styles/styles.scss';

function CityInterests({ id, name }) {
  const interestsListObject = useSelector((state) => state.interests.list);
  console.log(interestsListObject);

  // const interestsListArray = (
  //   Object.keys(interestsListObject).map((key) => [key, interestsListObject[key]]));

  // console.log(interestsListArray);

  return (
    <div className="CityInterests">
      <h2>
        Intérêts partagés par la communauté pour
      </h2>
      <h2>
        {name}
        n°
        {id}
      </h2>
      {interestsListObject.map((interests) => (
        <article className="Home_interests-card" key={interests.id}>
          <Link to={`/${interests.id}`} className="Home_interests-card-link">
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
  id: PropTypes.number.isRequired,
  name: PropTypes.string.isRequired,
};

export default CityInterests;

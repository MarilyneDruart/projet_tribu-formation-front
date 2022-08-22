import { React } from 'react';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import PropTypes from 'prop-types';
import '../../../styles/styles.scss';

function CityInterests({ id, name }) {
  const interestsList = useSelector((state) => state.interests.list);
  console.log(interestsList);

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
      {interestsList.map((interests) => (
        <article className="CityInterests_card" key={interests.id}>
          <Link to={`/${interests.id}`} className="CityInterests_card_link">
            <img className="CityInterests_card_img" src={interests.image} alt={interests.name} />
            <div className="CityInterests_card-content">
              <h2 className="CityInterests_card-title">{interests.title}</h2>
              <p className="CityInterests_card-description">{interests.content}</p>
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

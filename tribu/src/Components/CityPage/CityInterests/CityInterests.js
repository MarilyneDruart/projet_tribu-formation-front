import { React, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import PropTypes from 'prop-types';
import '../../../styles/styles.scss';
import axios from 'axios';
import { setInterestsList } from '../../../actions/interests';

function CityInterests({ id, name }) {
  const dispatch = useDispatch();

  useEffect(() => {
    axios
      .get(`http://pierre-henri-kocan-server.eddi.cloud/projet-reseau-social-back/public/api/cities/${id}`)
      .then((response) => {
        dispatch(setInterestsList(response.data.posts));
      })
      .catch((error) => {
        console.error(error);
      });
  }, []);

  const interestsList = useSelector((state) => state.interests.list);
  console.log(interestsList);

  return (
    <div className="CityInterests">
      <h2>
        Intérêts partagés par la communauté pour
      </h2>
      <h2>
        {name}
      </h2>
      {interestsList.map((interests) => (
        <article className="CityInterests_card" key={interests.id}>
          <Link to={`/ville/${interests.id}`} className="CityInterests_card_link">
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

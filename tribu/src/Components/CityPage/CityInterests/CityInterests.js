import { React, useEffect } from 'react';
import { Link, Navigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import PropTypes from 'prop-types';
import '../../../styles/styles.scss';
import axios from 'axios';
import { setInterestsList } from '../../../actions/interests';

function CityInterests({ id, name, slug }) {
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

  if (interestsList.length === 0) {
    return <Navigate to="/error" replace />;
  }

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
          <Link to={`/ville/${slug}/${id}`}>
            <div className="CityInterests_header">
              <img src={interests.image} alt={interests.name} />
            </div>
            <div className="CityInterests_content">
              <span className="CityInterests_tag CityInterests_tag--category">Catégorie</span>
              <h4 className="CityInterests_title">{interests.title}</h4>
              <p className="CityInterests_content">{interests.content}</p>
              <div className="CityInterests_user">
                <img className="CityInterests_user-img" src="#" alt="Nom du user à dynamiser" />
                <div className="CityInterests_user-info">
                  <h5>Nom du user</h5>
                  <small>Date de publication</small>
                </div>
              </div>
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
  slug: PropTypes.string.isRequired,
};

export default CityInterests;

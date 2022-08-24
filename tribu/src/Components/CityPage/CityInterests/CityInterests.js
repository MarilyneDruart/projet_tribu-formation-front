import { React, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import PropTypes from 'prop-types';
import '../../../styles/styles.scss';
import axios from 'axios';
import { setInterestsList } from '../../../actions/interests';
import Loading from '../../Loading/Loading';

function CityInterests({ id, name, slug }) {
  const dispatch = useDispatch();
  const interestsLoading = useSelector((state) => state.interests.loading);

  useEffect(() => {
    axios
      .get(`http://lola-costa.vpnuser.lan:8000/api/cities/${id}`)
      .then((response) => {
        dispatch(setInterestsList(response.data.posts));
      })
      .catch((error) => {
        console.error(error);
      });
  }, []);

  const interestsList = useSelector((state) => state.interests.list);
  console.log(interestsList);

  if (interestsLoading) {
    return <Loading />;
  }

  return (
    <div className="CityInterests">
      <h2>
        Intérêts partagés par la communauté pour
        {' '}
        {name}
      </h2>
      <div className="container">
        {interestsList.map((interests) => (
          <article className="CityInterests_card" key={interests.id}>
            <Link to={`/ville/${slug}/${interests.id}`}>
              <div className="CityInterests_header">
                <img src={interests.image} alt={interests.title} />
              </div>
              <div className="CityInterests_content">
                <span className={`CityInterests_tag CityInterests_tag--${interests.category.name}`}>{interests.category.name}</span>
                <h4 className="CityInterests_title">{interests.title}</h4>
                <p className="CityInterests_content">{interests.content}</p>
                <div className="CityInterests_user">
                  <img className="CityInterests_user-img" src="#" alt="" />
                  <div className="CityInterests_user-info">
                    <h5>
                      {interests.user.firstname}
                      {' '}
                      {interests.user.lastname}
                    </h5>
                    <small>{interests.createdAt}</small>
                  </div>
                </div>
              </div>
            </Link>
          </article>
        ))}
      </div>
    </div>
  );
}

CityInterests.propTypes = {
  id: PropTypes.number.isRequired,
  name: PropTypes.string.isRequired,
  slug: PropTypes.string.isRequired,
};

export default CityInterests;

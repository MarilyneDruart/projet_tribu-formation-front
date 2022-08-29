import { React, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import '../../../styles/styles.scss';

import { fetchInterests } from '../../../actions/interests';
import Loading from '../../Loading/Loading';

function CityInterests() {
  const dispatch = useDispatch();
  const interestsLoading = useSelector((state) => state.interests.loading);
  const { name, slug } = useSelector((state) => state.cities.city);

  useEffect(() => {
    dispatch(fetchInterests());
  }, []);

  const interestsList = useSelector((state) => state.interests.list);
  console.log(interestsList);

  if (interestsLoading) {
    return <Loading />;
  }

  return (
    <div className="CityInterests">
      <h2 className="CityInterests_bigtitle">
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
                <div className="CityInterests_category">
                  {interests.category.map((category) => (
                    <span
                      className={`CityInterests_category_tag ${category.name}`}
                      key={category.id}
                    >
                      {category.name}
                    </span>
                  ))}
                </div>
                <h4 className="CityInterests_title">{interests.title}</h4>
                <p className="CityInterests_description">{interests.content}</p>
                <Link to={`/ville/${slug}/${interests.id}`} className="CityInterests_readmore">
                  Voir plus
                </Link>
                <div className="CityInterests_user">
                  {/* <img className="CityInterests_user-img" src="#" alt="auteur du post" /> */}
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

export default CityInterests;

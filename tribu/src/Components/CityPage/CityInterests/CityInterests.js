import { React } from 'react';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import '../../../styles/styles.scss';

import Loading from '../../Loading/Loading';
import { convertDate } from '../../../utils/functions';

function CityInterests() {
  const interestsLoading = useSelector((state) => state.interests.loading);
  const {
    name,
    slug,
    id,
  } = useSelector((state) => state.cities.city);

  // first get the interests list of all cities
  const interestsList = useSelector((state) => state.interests.list);

  // then filter the interests list to get only the interests list of one city with the id
  const cityInterestsList = interestsList.filter((interests) => interests.city.id === id);
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
        {cityInterestsList.map((interests) => (
          <div>
            <article className={`CityInterests_card CityInterests_card-status${interests.status}`} key={interests.id}>
              <Link to={`/ville/${slug}/${interests.id}`}>
                <div className="CityInterests_header">
                  <img className={`CityInterests_header-status${interests.status}`} src={interests.image} alt={interests.title} />
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
                  <p className="CityInterests_readmore">
                    Voir plus
                  </p>
                  <div className="CityInterests_user">
                    {/* <img className="CityInterests_user-img" src="#" alt="auteur du post" /> */}
                    <div className="CityInterests_user-info">
                      <h5>
                        {interests.user.firstname}
                        {' '}
                        {interests.user.lastname}
                      </h5>
                      <small>{convertDate(interests.createdAt)}</small>
                    </div>
                  </div>
                </div>
              </Link>
            </article>
            <div>
              <p className={`CityInterests_title-status${interests.status}`}>Cet événement est passé</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default CityInterests;

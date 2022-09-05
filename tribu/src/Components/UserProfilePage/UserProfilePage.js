/* eslint-disable max-len */
import { React } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
// Imports locaux
import '../../styles/styles.scss';
import Loading from '../Loading/Loading';
import { toggleInterestForm } from '../../actions/interests';

function UserProfilePage() {
  const dispatch = useDispatch();
  const {
    firstname,
    lastname,
    presentation,
    post,
    cityName,
    image,
  } = useSelector((state) => state.user);

  const citySlug = cityName.toLowerCase();

  const userLoading = useSelector((state) => state.user.loading);

  if (userLoading) {
    return <Loading />;
  }

  return (
    <div className="UserProfilePage">

      <div className="UserProfilePage_card">
        <img className="UserProfilePage_card-img" src={image} alt="avatar" />
        <div className="UserProfilePage_card-right">
          <h2 className="UserProfilePage_card-name">
            {firstname}
            {' '}
            {lastname}
          </h2>
          <h3 className="UserProfilePage_card-city">{cityName}</h3>
          <p className="UserProfilePage_card-presentation">{presentation}</p>
        </div>
      </div>

      <div className="UserProfilePage_interests">
        <h4 className="UserProfilePage_interests-title">Mes partages avec la communauté</h4>
        <div className="UserProfilePage_interests-container">

          {post.length > 0 && post.map((interests) => (
            <article className={`CityInterests_card CityInterests_card-status${interests.status}`} key={interests.id}>
              <Link to={`/ville/${citySlug}/${interests.id}`}>
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
                  <p className="CityInterests_readmore">
                    Voir plus
                  </p>
                  <div className="CityInterests_user">
                    {/* <img className="CityInterests_user-img" src="#" alt="auteur du post" /> */}
                    <div className="CityInterests_user-info">
                      <small>
                        publié le
                        {' '}
                        {interests.createdAt}
                      </small>
                    </div>
                  </div>
                </div>
              </Link>
            </article>
          ))}

          {post.length === 0 && (
            <div>
              <div className="NoCityInterests_text">
                <p> Tu n&apos;as pas encore d&apos;intérêt</p>
                <p> Partage ton premier intérêt avec la Tribu :</p>
              </div>
              <div className="NoCityInterests_emptycard">
                <div className="NoCityInterests_emptycard-background" />
                <button
                  type="button"
                  className="NoCityInterests_emptycard-button"
                  onClick={() => {
                    dispatch(toggleInterestForm());
                    window.scrollTo({ top: 0 });
                  }}
                >
                  <ion-icon name="add-outline" />
                </button>
              </div>
            </div>
          )}

        </div>
      </div>
      <div className="CityPage_buttonContainer">
        <button
          type="button"
          className="CityPage_back-to-top-button"
          onClick={() => {
            window.scrollTo({ top: 0, behavior: 'smooth' });
          }}
        >
          <ion-icon className="CityPage_back-to-top-button-icon" name="arrow-up-outline" />
        </button>
      </div>
    </div>
  );
}

export default UserProfilePage;

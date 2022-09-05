import { React } from 'react';
import { useParams, Navigate, Link } from 'react-router-dom';
import { useSelector } from 'react-redux';

import '../../styles/styles.scss';
import location from '../../assets/images/location.png';
import calendar from '../../assets/images/timetable.png';
import Loading from '../Loading/Loading';
import LikeButton from '../Buttons/LikeButton';
import ParticipateButton from '../Buttons/ParticipateButton';
import { dateInFrench, convertDate } from '../../utils/functions';

function Interest() {
  const { slug, id } = useParams();
  const logged = useSelector((state) => state.user.logged);

  const interestsLoading = useSelector((state) => state.interests.loading);
  const interestsList = useSelector((state) => state.interests.list);

  const currentCity = interestsList.find((testedInterest) => (
    testedInterest.id === Number(id)));

  console.log(currentCity);

  if (interestsLoading) {
    return <Loading />;
  }

  if (!currentCity) {
    return <Navigate to="/PageIntrouvable" replace />;
  }

  return (
    <div className="container">
      <div className={`Interest Interest_status${currentCity.status}`}>

        <div className="Interest_description">
          <div className="Interest_description_category">
            {currentCity.category.map((category) => (
              <span
                className={`Interest_description_category_item ${category.name}`}
                key={category.id}
              >
                {category.name}
              </span>
            ))}
            {logged && <LikeButton />}
          </div>

          {currentCity.date && (
            <div className="Interest_description_date">
              <img className="Interest_description_date_icon" src={calendar} alt="icone calendrier" />
              {dateInFrench(currentCity.date)}
            </div>
          )}

          <h1 className="Interest_description_title">{currentCity.title}</h1>
          <p className="Interest_description_content">{currentCity.content}</p>
          {currentCity.address && (
            <div className="Interest_description_address">
              <img className="Interest_description_address_icon" src={location} alt="icone de localisation" />
              {currentCity.address}
            </div>
          )}
          <p className="Interest_description_author">
            publié par
            {' '}
            {currentCity.user.firstname}
            {' '}
            {currentCity.user.lastname}
          </p>
          <p className="Interest_description_publishdate">
            {convertDate(currentCity.createdAt)}
          </p>
          {currentCity.category.map((category) => (
            category.name === 'Evénements' && <ParticipateButton />
          ))}
        </div>

        <div className="Interest_image">
          <img className="Interest_img" src={currentCity.image} alt={currentCity.name} />
        </div>

      </div>
      <div className="navbuttons">
        <Link to={`/ville/${slug}/`}>
          <button className="navbuttons_item" type="button">
            Retour à la ville
          </button>
        </Link>
        <Link to="/">
          <button className="navbuttons_item" type="button">
            Accueil
          </button>
        </Link>
      </div>
    </div>
  );
}

export default Interest;

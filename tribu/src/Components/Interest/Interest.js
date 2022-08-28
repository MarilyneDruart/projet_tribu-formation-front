import { React, useEffect } from 'react';
import { useParams, Navigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import calendar from '../../assets/images/timetable.png';

import '../../styles/styles.scss';
import { fetchInterests } from '../../actions/interests';
// import Loading from '../Loading/Loading';

function Interest() {
  const { id } = useParams();
  const dispatch = useDispatch();

  // eslint-disable-next-line
  const interestsList = useSelector((state) => state.interests.list);
  const currentCity = interestsList.find((testedCity) => testedCity.id === Number(id));
  // const loading = useSelector((state) => state.interests.loading);

  console.log(interestsList);
  console.log(currentCity);

  useEffect(() => {
    dispatch(fetchInterests());
  }, []);

  // Converting YYYY-MM-DD into french format
  const dateInFrench = (dateToChange) => {
    const day = (dateToChange.slice(8, 10));
    let month = (dateToChange.slice(5, 7));
    const year = (dateToChange.slice(0, 4));

    // Turning month number into name
    // eslint-disable-next-line
    month === '01' ? month = 'janvier' : month === '02' ? month = 'février' : month === '03' ? month = 'mars' : month === '04' ? month = 'avril' : month === '05' ? month = 'mai' : month === '06' ? month = 'juin' : month === '07' ? month = 'juillet' : month === '08' ? month = 'août' : month === '09' ? month = 'septembre' : month === '10' ? month = 'octobre' : month === '11' ? month = 'novembre' : month === '12' ? month = 'décembre' : ''

    return `le ${day} ${month} ${year}`;
  };

  if (!currentCity) {
    return <Navigate to="/PageIntrouvable" replace />;
  }

  // if (!loading) {
  //   return <Loading />;
  // }

  return (
    <div className="container">
      <div className="Interest">

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
          </div>

          {currentCity.date && (
            <div className="Interest_description_date">
              <img className="Interest_description_date_icon" src={calendar} alt="icone calendrier" />
              {dateInFrench(currentCity.date)}
            </div>
          )}

          <h1 className="Interest_description_title">{currentCity.title}</h1>
          <p className="Interest_description_content">{currentCity.content}</p>
          <p className="Interest_description_author">
            publié par
            {' '}
            {currentCity.user.firstname}
            {' '}
            {currentCity.user.lastname}
          </p>
          <p className="Interest_description_publishdate">
            {dateInFrench(currentCity.createdAt)}
          </p>
        </div>

        <div className="Interest_image">
          <img src={currentCity.image} alt={currentCity.name} />
        </div>

      </div>
      <div className="navbuttons">
        <button className="navbuttons_item" type="button">Retour à la liste</button>
        <button className="navbuttons_item" type="button">Retour à l&apos;accueil</button>
      </div>
    </div>
  );
}

export default Interest;

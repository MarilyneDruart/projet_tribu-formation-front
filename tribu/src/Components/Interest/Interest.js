import { React } from 'react';
import { useParams, Navigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import calendar from '../../assets/images/timetable.png';

import '../../styles/styles.scss';

function Interest() {
  const { id } = useParams();
  const interestsList = useSelector((state) => state.interests.list);
  const currentInterest = interestsList.find((interest) => interest.id === Number(id));

  console.log(currentInterest);

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

  if (!currentInterest) {
    return <Navigate to="/PageIntrouvable" replace />;
  }

  return (
    <div className="Interest">

      <div className="Interest_description">
        <div className="Interest_description_category">
          {currentInterest.category.map((category) => (
            <span
              className={`Interest_description_category_item ${category.name}`}
              key={category.id}
            >
              {category.name}
            </span>
          ))}
        </div>

        {currentInterest.date && (
          <div className="Interest_description_date">
            <img className="Interest_description_date_icon" src={calendar} alt="icone calendrier" />
            {dateInFrench(currentInterest.date)}
          </div>
        )}

        <h1 className="Interest_description_title">{currentInterest.title}</h1>
        <p className="Interest_description_content">{currentInterest.content}</p>
        <p className="Interest_description_author">
          publié par
          {' '}
          {currentInterest.user.firstname}
          {' '}
          {currentInterest.user.lastname}
        </p>
        <p className="Interest_description_publishdate">
          {dateInFrench(currentInterest.createdAt)}
        </p>
      </div>

      <div className="Interest_image">
        <img src={currentInterest.image} alt={currentInterest.name} />
      </div>

    </div>
  );
}

export default Interest;

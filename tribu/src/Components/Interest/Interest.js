import { React } from 'react';
import { useParams, Navigate } from 'react-router-dom';
import { useSelector } from 'react-redux';

import '../../styles/styles.scss';

function Interest() {
  const { id } = useParams();
  const interestsList = useSelector((state) => state.interests.list);

  const currentInterest = interestsList.find((interest) => interest.id === Number(id));

  console.log(currentInterest);

  if (!currentInterest) {
    return <Navigate to="/PageIntrouvable" replace />;
  }

  return (
    <div className="Interest">

      <div className="Interest_description">
        <div className="Interest_description_category">
          {currentInterest.category.map((category) => (
            <span className="Interest_description_category_item">{category.name}</span>
          ))}
        </div>

        <h1 className="Interest_description_title">{currentInterest.title}</h1>
        <p className="Interest_description_content">{currentInterest.content}</p>
        <p className="Interest_description_author">
          créé par
          {' '}
          {currentInterest.user.firstname}
          {' '}
          {currentInterest.user.lastname}
        </p>
        <p className="Interest_description_date">
          le
          {' '}
          {currentInterest.createdAt}
        </p>
      </div>

      <div className="Interest_image">
        <img src={currentInterest.image} alt={currentInterest.name} />
      </div>

    </div>
  );
}

export default Interest;

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
          <div className="Interest_description_category_item">
            <span className="">{currentInterest.category.name}</span>
          </div>
        </div>

        <h1 className="Interest_description_title">{currentInterest.name}</h1>
        <p className="Interest_description_content">{currentInterest.content}</p>
        <p>
          créé par
          {' '}
          {currentInterest.user.firstname}
        </p>
        <p>
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

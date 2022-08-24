import { React } from 'react';
import { useParams, Navigate } from 'react-router-dom';
import { useSelector } from 'react-redux';

import '../../styles/styles.scss';

function Interest() {
  const { id } = useParams();
  console.log(id);

  const findInterest = (interestsList, searchedId) => {
    const interest = interestsList.find((testedInterest) => testedInterest.id === searchedId);
    console.log(interestsList);
    console.log(interest);
    console.log(searchedId);

    if (id !== searchedId) {
      <Navigate to="/NotFound" replace />;
    }
    return interest;
  };

  const currentInterest = useSelector((state) => findInterest(state.interests.list, id));
  console.log(currentInterest);

  if (!currentInterest) {
    return <Navigate to="/PageIntrouvable" replace />;
  }

  return (
    <div className="Interest">
      <img src={currentInterest.image} className="Interest_img" alt={currentInterest.name} />
      <p>{currentInterest.category.name}</p>
      <div className="Interest_content">
        <h2 className="Interest_title">{currentInterest.name}</h2>
      </div>
      <p className="Interest_description">{currentInterest.content}</p>
      <p>
        créé par
        {currentInterest.user.firstname}
      </p>
      <p>
        le
        {currentInterest.createdAt}
      </p>
    </div>

  );
}

export default Interest;

import { React } from 'react';
import { useParams } from 'react-router-dom';
import { useSelector } from 'react-redux';

import '../../styles/styles.scss';

function Interest() {
  const { slug } = useParams();

  const findInterest = (interestsList, searchedSlug) => {
    const interest = interestsList.find((testedInterest) => testedInterest.slug === searchedSlug);
    return interest;
  };

  const currentInterest = useSelector((state) => findInterest(state.interests.list, slug));
  console.log(currentInterest);

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

/* eslint-disable max-len */
import { React } from 'react';
import { useSelector } from 'react-redux';

import MainImageProfile from './MainImageProfile';

// Imports locaux
import '../../styles/styles.scss';

function UserProfilePage() {
  const { firstname, lastname, presentation } = useSelector((state) => state.user);
  return (
    <div className="Home">
      <MainImageProfile />
      <h2 className="Home_name">
        {firstname}
        {' '}
        {lastname}
      </h2>
      <p>{presentation}</p>
      <h3>Mes intérêts</h3>
      {/* if (post.length > 0) {

      }
      {post.map((post) => (
        <article></article>
      ))} */}
    </div>
  );
}

export default UserProfilePage;

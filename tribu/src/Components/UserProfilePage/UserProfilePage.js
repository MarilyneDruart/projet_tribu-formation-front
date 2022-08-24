/* eslint-disable max-len */
import React from 'react';

import MainImageProfile from './MainImageProfile';

// Imports locaux
import '../../styles/styles.scss';

function UserProfilePage() {
  return (
    <div className="Home">
      <MainImageProfile />
      <h2 className="Home_name">Prénom NOM</h2>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab placeat libero nemo iure nobis, voluptate assumenda doloribus pariatur nesciunt! Consequuntur fugiat culpa dolore quod maiores repellendus facilis nam unde earum.</p>
      <h3>Mes intérêts</h3>
    </div>
  );
}

export default UserProfilePage;

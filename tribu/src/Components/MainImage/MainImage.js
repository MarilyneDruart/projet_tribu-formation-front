import React from 'react';

import '../../styles/styles.scss';

import img from '../../assets/images/Rome-Main.jpg';

function MainImage() {
  return (
    <div className="MainImage">
      <img src={img} className="MainImage_img" alt="Rome" />
      <div className="MainImage_content">
        <h2 className="MainImage_title">rome</h2>
      </div>
    </div>
  );
}

export default MainImage;

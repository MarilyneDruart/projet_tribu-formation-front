import React from 'react';

import '../../../styles/styles.scss';

function CityImage() {
  const image = `
  div {
    background-image: url('../assets/images/main-image2.jpg');
  }
  `;
  return (
    <div className="CityImage">
      <style>{image}</style>
      <div className="CityImage_content">
        <h2 className="CityImage_title">Nom de la ville</h2>
      </div>
    </div>
  );
}

export default CityImage;

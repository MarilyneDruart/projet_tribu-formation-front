import React from 'react';
import PropTypes from 'prop-types';

import '../../../styles/styles.scss';

function CityImage({ image, name }) {
  const cityImage = `
  div {
    background-image: url(${image});
  }
  `;
  return (
    <div className="CityImage">
      <style>{cityImage}</style>
      <div className="CityImage_content">
        <h2 className="CityImage_title">{name}</h2>
      </div>
    </div>
  );
}

CityImage.propTypes = {
  image: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
};

export default CityImage;

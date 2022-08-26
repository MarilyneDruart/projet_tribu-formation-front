import React from 'react';
import PropTypes from 'prop-types';

import '../../../styles/styles.scss';

function CityImage({ image, name }) {
  return (
    <div className="CityImage">
      <div className="CityImage_img" style={{ backgroundImage: `url(${image})` }}>
        <div className="CityImage_content">
          <h2 className="CityImage_title">{name}</h2>
        </div>
      </div>
    </div>
  );
}

CityImage.propTypes = {
  image: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
};

export default CityImage;

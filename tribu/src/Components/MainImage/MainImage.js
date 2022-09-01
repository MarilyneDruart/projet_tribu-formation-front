import React from 'react';
import PropTypes from 'prop-types';

import '../../styles/styles.scss';

function MainImage({ image }) {
  return (
    <div className="MainImage">
      <div className="MainImage_img" style={{ backgroundImage: `url(${image})` }} />
    </div>
  );
}

MainImage.propTypes = {
  image: PropTypes.string.isRequired,
};

export default MainImage;

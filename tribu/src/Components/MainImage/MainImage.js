import React from 'react';
import PropTypes from 'prop-types';

import '../../styles/styles.scss';

function MainImage({ title, image }) {
  return (
    <div className="MainImage">
      <div className="MainImage_img" style={{ backgroundImage: `url(${image})` }}>
        <div className="MainImage_content">
          <h2 className="MainImage_title">{title}</h2>
        </div>
      </div>
    </div>
  );
}

MainImage.propTypes = {
  title: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
};

export default MainImage;

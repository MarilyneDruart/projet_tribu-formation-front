import React from 'react';
import PropTypes from 'prop-types';

import '../../../../styles/styles.scss';

function CarouselItem({ slide, stopSlide, startSlide }) {
  return (
    <div
      className="Carousel_item"
      onMouseEnter={stopSlide}
      onMouseOut={startSlide}
      onBlur={startSlide}
    >
      <img src={slide} alt="" />
    </div>
  );
}

CarouselItem.propTypes = {
  slide: PropTypes.string.isRequired,
  stopSlide: PropTypes.func.isRequired,
  startSlide: PropTypes.func.isRequired,
};

export default CarouselItem;

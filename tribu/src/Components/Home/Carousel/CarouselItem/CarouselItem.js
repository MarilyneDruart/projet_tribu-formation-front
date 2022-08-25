import React from 'react';
import PropTypes from 'prop-types';

function CarouselItem({ slide }) {
  return (
    <div className="Carousel_item">
      <img src={slide} alt="" />
    </div>
  );
}

CarouselItem.propTypes = {
  slide: PropTypes.string.isRequired,
};

export default CarouselItem;

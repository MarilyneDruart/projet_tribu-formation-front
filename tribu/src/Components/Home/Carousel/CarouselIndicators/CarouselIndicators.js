import React from 'react';
import PropTypes from 'prop-types';

import '../../../../styles/styles.scss';

function CarouselIndicators({ slides, currentIndex, switchIndex }) {
  return (
    <div className="Carousel_indicators">
      {slides.map((_, index) => (
        <button
          type="button"
          className={`Carousel_indicator_item${
            currentIndex === index ? ' active' : ''
          }`}
          onClick={() => switchIndex(index)}
          aria-label="image suivante"
          // eslint-disable-next-line
          key={index}
        />
      ))}
    </div>
  );
}

CarouselIndicators.propTypes = {
  slides: PropTypes.arrayOf(PropTypes.string).isRequired,
  currentIndex: PropTypes.number.isRequired,
  switchIndex: PropTypes.func.isRequired,
};

export default CarouselIndicators;

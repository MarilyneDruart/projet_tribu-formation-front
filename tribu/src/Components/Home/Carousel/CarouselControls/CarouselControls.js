import React from 'react';
import PropTypes from 'prop-types';

import '../../../../styles/styles.scss';

function CarouselControls({ prev, next }) {
  return (
    <div className="Carousel_controls">
      <button
        type="button"
        className="Carousel_control left"
        aria-label="Précédent"
        onClick={prev}
      >
        &lt;
      </button>
      <button
        type="button"
        className="Carousel_control right"
        aria-label="Suivant"
        onClick={next}
      >
        &gt;
      </button>
    </div>
  );
}

CarouselControls.propTypes = {
  prev: PropTypes.func.isRequired,
  next: PropTypes.func.isRequired,
};

export default CarouselControls;

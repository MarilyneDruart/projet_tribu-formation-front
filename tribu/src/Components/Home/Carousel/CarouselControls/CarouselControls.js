import React from 'react';

import '../../../../styles/styles.scss';

function CarouselControls() {
  return (
    <div className="Carousel_controls">
      <button
        type="button"
        className="Carousel_control left"
        aria-label="précédent"
      />
      <button
        type="button"
        className="Carousel_control right"
        aria-label="suivant"
      />
    </div>
  );
}

export default CarouselControls;

import React from 'react';

import '../../../styles/styles.scss';
import img1 from '../../../assets/images/carousel/1.jpg';
import img2 from '../../../assets/images/carousel/2.jpg';
import img3 from '../../../assets/images/carousel/3.jpg';
import img4 from '../../../assets/images/carousel/4.jpg';
import img5 from '../../../assets/images/carousel/5.jpg';
import img6 from '../../../assets/images/carousel/6.jpg';

function Carousel() {
  const slides = [
    img1,
    img2,
    img3,
    img4,
    img5,
    img6,
  ];

  return (
    <div className="container">
      <div className="Carousel">
        <div className="Carousel_inner">
          {slides.map((slide) => (
            <div className="Carousel_item" key={slide}>
              <img src={slide} alt="" />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Carousel;

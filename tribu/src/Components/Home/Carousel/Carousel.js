import { React, useState, useEffect } from 'react';

import '../../../styles/styles.scss';
import img1 from '../../../assets/images/carousel/1.jpg';
import img2 from '../../../assets/images/carousel/2.jpg';
import img3 from '../../../assets/images/carousel/3.jpg';
import img4 from '../../../assets/images/carousel/4.jpg';
import img5 from '../../../assets/images/carousel/5.jpg';
import img6 from '../../../assets/images/carousel/6.jpg';
import CarouselItem from './CarouselItem/CarouselItem';
import CarouselControls from './CarouselControls/CarouselControls';

function Carousel() {
  const slides = [
    img1,
    img2,
    img3,
    img4,
    img5,
    img6,
  ];

  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const slideInterval = setInterval(() => {
      // eslint-disable-next-line no-confusing-arrow
      setCurrentSlide((slide) => slide < slides.length - 1 ? slide + 1 : 0);
      console.log('interval');
    }, 3000);

    return () => clearInterval(slideInterval);
  }, []);

  return (
    <div className="container">
      <div className="Carousel">
        <div
          className="Carousel_inner"
          style={{ transform: `translateX(${-currentSlide * 100}%)` }}
        >
          {slides.map((slide) => (
            <CarouselItem slide={slide} key={slide} />
          ))}
        </div>
        <CarouselControls />
      </div>
    </div>
  );
}

export default Carousel;

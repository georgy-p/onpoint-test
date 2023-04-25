import ProductSlide from './product/ProductSlide';
import MainSlide from './MainSlide';
import TextSlide from './TextSlide';
import { useState } from 'react';
import Slide from './Slide';

const Slider = () => {
  const [slideIndex, setSlideIndex] = useState(0);
  const [touchPosition, setTouchPosition] = useState(null);

  const goToTextSlide = () => setSlideIndex(1);

  const goToHomePage = () => {
    setSlideIndex(0);
  };

  const changeSlide = (direction = 1) => {
    let slideNumber = 0;

    if (slideIndex + direction > 2) {
      return;
    }

    if (slideIndex + direction > 0) {
      slideNumber = (slideIndex + direction) % 3;
    }
    setSlideIndex(slideNumber);
  };

  const handleTouchStart = (e) => {
    const touchStartX = e.touches[0].clientX;
    setTouchPosition(touchStartX);
  };

  const handleTouchEnd = (e) => {
    if (touchPosition === null) {
      return;
    }
    const currentPosition = e.changedTouches[0].clientX;
    const direction = touchPosition - currentPosition;

    if (direction > 10) {
      console.log('right');
      changeSlide(1);
    }

    if (direction < -10) {
      console.log('left');
      changeSlide(-1);
    }

    setTouchPosition(null);
  };

  return (
    <div
      className='slider'
      onTouchStart={handleTouchStart}
      onTouchEnd={handleTouchEnd}
    >
      <div
        className='slides-container'
        style={{ transform: `translateX(-${slideIndex * 989}px)` }}
      >
        <Slide className={'slide'} goToHomePage={goToHomePage}>
          <MainSlide key='main' goToTextSlide={goToTextSlide} />
        </Slide>
        <Slide className={'slide'} goToHomePage={goToHomePage}>
          <TextSlide key='text' />
        </Slide>
        <Slide className={'slide'} goToHomePage={goToHomePage}>
          <ProductSlide key='product' />
        </Slide>
      </div>
    </div>
  );
};

export default Slider;

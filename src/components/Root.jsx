import homebtn from '../images/buttons/homebtn.png';
import logo from '../images/logo.png';
import ProductSlide from './ProductSlide';
import MainSlide from './MainSlide';
import TextSlide from './TextSlide';
import { bg } from '../images/backgrounds';
import { useContext, useState } from 'react';
import { useRef } from 'react';
import ThemeContext from './ThemeContext';

const Root = () => {
  const { theme } = useContext(ThemeContext);

  const slides = [
    <MainSlide key='main' />,
    <TextSlide key='text' />,
    <ProductSlide key='product' />,
  ];

  const [currentSlide, setCurrentSlide] = useState(
    <MainSlide key='main' setNext={() => setCurrentSlide(slides[1])} />
  );

  const [slideIndex, setSlideIndex] = useState(0);

  const handleClick = () => {
    setCurrentSlide(
      <MainSlide key='main' setNext={() => setCurrentSlide(slides[1])} />
    );
  };

  const background = bg[currentSlide.key]();

  const touchStartX = useRef(null);
  const touchEndX = useRef(null);

  const handleTouchStart = (e) => {
    touchStartX.current = e.touches[0].clientX;
  };

  const handleTouchEnd = (e) => {
    touchEndX.current = e.changedTouches[0].clientX;

    if (touchStartX.current && touchEndX.current) {
      const diff = touchEndX.current - touchStartX.current;

      if (diff > 50) {
        console.log('Свайп влево!');
        const nextIndex = slideIndex - 1;
        if (nextIndex < 0) {
          return;
        } else {
          setSlideIndex(nextIndex);
          setCurrentSlide(slides[nextIndex]);
        }
        // Добавьте здесь ваш код для обработки свайпа вправо
      } else if (diff < -50) {
        console.log('Свайп вправо!');
        const nextIndex = slideIndex + 1;
        if (nextIndex === slides.length) {
          return;
        } else {
          console.log(nextIndex);
          setSlideIndex(nextIndex);
          setCurrentSlide(slides[nextIndex]);
          console.log(slides[slideIndex]);
        }
      }
    }
  };

  return (
    <div
      className={`container ${theme}`}
      style={{ backgroundImage: `url(${background})` }}
      onTouchStart={handleTouchStart}
      onTouchEnd={handleTouchEnd}
    >
      <div className='inner-container'>
        <div className='header'>
          <button className='home-btn' onClick={handleClick}>
            <img className='home-btn' src={homebtn} />
          </button>
          <p className='home-line'>|</p>
          <div className='header-title'>
            <p className='header-text'>PROJECT</p>
          </div>
        </div>
        <div className='content'>{currentSlide}</div>
        <div className='logo'>
          <img src={logo} />
        </div>
      </div>
    </div>
  );
};

export default Root;

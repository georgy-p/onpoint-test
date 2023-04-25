import { useState } from 'react';
import bottle from '../../images/product_page/bottle.png';
import plate from '../../images/product_page/plate.png';
import notebook from '../../images/product_page/notebook.png';
import plus from '../../images/product_page/plus.png';
import Overlay from './Overlay';
import Advantages from './Advantages';

const ProductSlide = () => {
  const [isClicked, setClicked] = useState(false);

  const handleClick = () => {
    setClicked(true);
  };

  const modalClick = () => {
    setClicked(false);
  };

  const innerContent = (
    <div className='product-container'>
      <div className='product-innner-container'>
        <div className='product-row-1'>
          <p className='product-header'>КЛЮЧЕВОЕ СООБЩЕНИЕ</p>
          <h1 className='product-subheader'>
            BREND<span>XY</span>
          </h1>
        </div>
        <div className='product-row-2'>
          <div className='product-col-1'>
            <div className='product-card-container-1'>
              <div className='product-card-1' />
              <div className='product-card-inner'>
                <img src={plate} alt='plate logo' className='icon' />
                <p className='text'>
                  Ehicula ipsum a arcu cursus vitae. Eu non diam phasellus
                  vestibulum lorem sed risus ultricies
                </p>
              </div>
            </div>
          </div>
          <div className='product-col-2'>
            <div className='product-card-container-2'>
              <div className='product-card-2' />
              <div className='product-card-inner-2'>
                <img src={notebook} alt='notebook' className='icon' />
                <p className='text'>A arcu cursus vitae</p>
              </div>
            </div>
            <button className='btn' onClick={handleClick}>
              <img className='btn-logo' src={plus} alt='plus button' />
              <p className='btn-text'>Подробнее</p>
            </button>
          </div>
          <div className='product-col-2'></div>
        </div>
      </div>
    </div>
  );

  const currentComponent = isClicked ? (
    <Advantages modalClick={modalClick} />
  ) : (
    innerContent
  );

  return (
    <div className='product'>
      <img className='product-bottle' src={bottle} alt='bottle' />
      <div className='product-main-container'>{currentComponent}</div>
      <Overlay isClicked={isClicked}></Overlay>
    </div>
  );
};

export default ProductSlide;

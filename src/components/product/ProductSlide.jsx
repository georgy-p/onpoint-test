import bottle from '../../images/product_page/bottle.png';
import plate from '../../images/product_page/plate.png';
import notebook from '../../images/product_page/notebook.png';
import plus from '../../images/product_page/plus.png';
import bubble1 from '../../images/product_page/animated/bubble1.png';
import bubble2 from '../../images/product_page/animated/bubble2.png';
import bubble3 from '../../images/product_page/animated/bubble3.png';
import bubble4 from '../../images/product_page/animated/bubble4.png';
import bubble5 from '../../images/product_page/animated/bubble5.png';
import bubble6 from '../../images/product_page/animated/bubble6.png';
import bubble7 from '../../images/product_page/animated/bubble7.png';
import bubble8 from '../../images/product_page/animated/bubble8.png';

import Overlay from './Overlay';
import Advantages from './Advantages';

const ProductSlide = ({ isClickedModal, setClickedModal }) => {
  const handleClick = () => {
    setClickedModal(true);
  };

  const modalClick = () => {
    setClickedModal(false);
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

  const currentComponent = isClickedModal ? (
    <Advantages modalClick={modalClick} />
  ) : (
    innerContent
  );

  return (
    <div className='product'>
      <img className='product-bottle' src={bottle} alt='bottle' />
      <img src={bubble1} alt='bubble1' className='bubble1 absolute' />
      <img src={bubble2} alt='bubble2' className='bubble2 absolute' />
      <img src={bubble3} alt='bubble4' className='bubble3 absolute' />
      <img src={bubble4} alt='bubble4' className='bubble4 absolute' />
      <img src={bubble5} alt='bubble5' className='bubble5 absolute' />
      <img src={bubble6} alt='bubble6' className='bubble6 absolute' />
      <img src={bubble7} alt='bubble7' className='bubble7 absolute' />
      <img src={bubble8} alt='bubble8' className='bubble8 absolute' />
      <div className='product-main-container'>{currentComponent}</div>
      <Overlay isClicked={isClickedModal}></Overlay>
    </div>
  );
};

export default ProductSlide;

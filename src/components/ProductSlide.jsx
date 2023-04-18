// import { useState } from 'react';
import bottle from '../images/product_page/bottle.png';
import Advantages from './Advantages';

const ProductSlide = () => {
  // const [isClicked, setClicked] = useState(false);

  return (
    <>
      <img className='product-bottle' src={bottle} alt='bottle' />
      <div className='product-main-container'>
        <Advantages />
      </div>
    </>
  );
};

export default ProductSlide;

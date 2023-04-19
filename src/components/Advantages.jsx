import prev from '../images/product_page/prev.png';
import next from '../images/product_page/next.png';
import close from '../images/product_page/close.svg';
import advantagesList from '../texts/advantagesList';
import { useState } from 'react';

const Advantages = ({ modalClick }) => {
  const { list1, list2 } = advantagesList;
  const [isNext, setNext] = useState(false);

  const handlePrev = () => setNext(!isNext);
  const handleNext = () => setNext(!isNext);

  const renderItem = (text, number) => (
    <div className='list-item-group' key={number}>
      <p className='list-item-number'>{number}</p>
      <p className='list-item-text'>{text}</p>
    </div>
  );

  const currentList = isNext ? list2 : list1;

  const blockClick = isNext ? 'active' : '';

  return (
    <div className='advantages-container'>
      <div className='advantages-inner-container'>
        <div className='col-1'>
          <p className='product-header'>ПРЕИМУЩЕСТВА</p>
          <h1 className='product-subheader'>
            BREND<span>XY</span>
          </h1>
          <div className='list-container'>
            {currentList.map((text, index) => {
              const adder = isNext ? 4 : 1;
              const number = `0${index + adder}`;
              return renderItem(text, number);
            })}
          </div>
          <div className='list-btn-group'>
            <div className='list-btn' onClick={handlePrev}>
              <img src={prev} alt='prev' />
            </div>
            <div className='list-circle active' />
            <div className={`list-circle ${blockClick}`} />
            <div className='list-btn' onClick={handleNext}>
              <img src={next} alt='next' />
            </div>
          </div>
        </div>
        <div className='col-2'>
          <button className='close-btn' onClick={modalClick}>
            <img src={close} alt='close button' />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Advantages;

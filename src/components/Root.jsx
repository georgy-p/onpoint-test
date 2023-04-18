import homebtn from '../images/buttons/homebtn.png';
import logo from '../images/logo.png';
import bg1 from '../images/backgrounds/bg1.png';
import ProductSlide from './ProductSlide';

const currentSlide = <ProductSlide />;
const background = bg1;

const Root = () => {
  const handleClick = () => alert('Нашажата кнопка домой');

  return (
    <div
      className='container'
      style={{ backgroundImage: `url(${background})` }}
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

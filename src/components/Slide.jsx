import homebtn from '../images/buttons/homebtn.png';
import logo from '../images/logo.png';

const Slide = ({ children, goToHomePage }) => {
  return (
    <div className={'container'}>
      <div className='inner-container'>
        <div className='header'>
          <button className='home-btn' onClick={goToHomePage}>
            <img className='home-btn' src={homebtn} />
          </button>
          <p className='home-line'>|</p>
          <div className='header-title'>
            <p className='header-text'>PROJECT</p>
          </div>
        </div>
        <div className='content'>{children}</div>
        <div className='logo'>
          <img src={logo} />
        </div>
      </div>
    </div>
  );
};

export default Slide;

import nextbtn from '../images/buttons/nextbtn.png';

const Main = ({ goToTextSlide }) => {
  return (
    <div className='main-container'>
      <div className='main-greeting'>
        <p className='corner-text'>ПРИВЕТ,</p>
      </div>
      <div className='main-text-container'>
        <p className='main-text-normal size-80'>
          ЭТО <span className='main-text-bold size-80'>НЕ</span>
        </p>
        <p className='main-text-normal size-80'>КОММЕРЧЕСКОЕ</p>
        <div className='main-inner'>
          <p className='main-text-normal size-80'>ЗАДАНИЕ</p>
          <div className='main-btn'>
            <button className='btn' onClick={goToTextSlide}>
              <img className='btn-logo' src={nextbtn} />
              <p className='btn-text'>Что дальше?</p>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Main;

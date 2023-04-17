import nextbtn from '../images/buttons/nextbtn.png';

const Main = () => {
  return (
    <div className='main-container'>
      <div className='main-greeting'>
        <p className='main-text-greeting'>ПРИВЕТ,</p>
      </div>
      <div className='main-text-container'>
        <p className='main-text-normal size-80'>
          ЭТО <span className='main-text-bold size-80'> НЕ</span>
        </p>
        <p className='main-text-normal size-80'>КОММЕРЧЕСКОЕ</p>
        <div className='main-inner'>
          <p className='main-text-normal size-80'>ЗАДАНИЕ</p>
          <button className='main-btn'>
            <img className='main-btn-logo' src={nextbtn} />
            <p className='main-btn-text'>Что дальше?</p>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Main;

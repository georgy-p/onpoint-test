import nextbtn from '../images/buttons/nextbtn.png';
import pinkSperm1 from '../images/main/pink_sperm_1.png';
import bakti2 from '../images/main/animated/bakti_2.png';
import bakti3 from '../images/main/animated/bakti_3.png';
import bakti1 from '../images/main/animated/bakti_1.png';
import bakti4 from '../images/main/animated/bakti_4.png';
import stick from '../images/main/stick.png';
import unfocusSperm from '../images/main/unfocus_sperm_.png';
import unfocusBakti from '../images/main/unfocus_bakti.png';
import unfocusBakti1 from '../images/main/unfocus_bakti_1.png';

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
      <img src={pinkSperm1} alt='pinkSperm1' className='pinkSperm1 fixed' />
      <img src={bakti2} alt='bakti2' className='bakti2 animate' />
      <img src={bakti3} alt='bakti3' className='bakti3 animate' />
      <img src={bakti1} alt='bakti3' className='bakti1 animate' />
      <img src={bakti4} alt='bakti3' className='bakti4 animate' />
      <img src={stick} alt='stick' className='stick fixed' />
      <img
        src={unfocusSperm}
        alt='unfocusSperm'
        className='unfocusSperm fixed'
      />
      <img
        src={unfocusBakti}
        alt='unfocusBakti'
        className='unfocusBakti fixed'
      />
      <img
        src={unfocusBakti1}
        alt='unfocusBakti1'
        className='unfocusBakti1 fixed'
      />
    </div>
  );
};

export default Main;

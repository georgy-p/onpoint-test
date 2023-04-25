const Overlay = ({ isClicked }) => {
  return (
    <div
      className='overlay'
      style={{ display: isClicked ? 'block' : 'none' }}
    />
  );
};

export default Overlay;

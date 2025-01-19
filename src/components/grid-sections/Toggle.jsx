import { useEffect, useState } from 'react';

const Toggle = () => {
  const [isToggleOn, setIsToggleOn] = useState(false);

  useEffect(() => {
    if (isToggleOn) {
      document.body.classList.add('dark-theme');
    } else {
      document.body.classList.remove('dark-theme');
    }
  }, [isToggleOn]);
  
  return (
    <div className='grid-item theme-toggle-item'>
      <div
        className={`theme-toggle ${isToggleOn ? 'active' : ''}`}
        onClick={() => setIsToggleOn(!isToggleOn)}
      >
        <div className='thumb'></div>
      </div>
    </div>
  );
};

export default Toggle;

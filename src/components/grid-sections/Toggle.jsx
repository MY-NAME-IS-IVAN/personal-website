import { useEffect } from 'react';
import { any } from 'prop-types';

const Toggle = ({ isDarkTheme, setIsDarkTheme }) => {
  useEffect(() => {
    if (isDarkTheme) {
      document.body.classList.add('dark-theme');
    } else {
      document.body.classList.remove('dark-theme');
    }
  }, [isDarkTheme]);

  return (
    <div className='grid-item theme-toggle-item'>
      <div
        className={`theme-toggle ${isDarkTheme ? 'active' : ''}`}
        onClick={() => setIsDarkTheme(!isDarkTheme)}
      >
        <div className='thumb'></div>
      </div>
    </div>
  );
};

Toggle.propTypes = {
  isDarkTheme: any,
  setIsDarkTheme: any,
};

export default Toggle;

import { any } from 'prop-types';

const Toggle = ({ changeTheme, isDarkTheme }) => {
  return (
    <div className='grid-item theme-toggle-item'>
      <div
        className={`theme-toggle ${isDarkTheme ? 'active' : ''}`}
        onClick={() => changeTheme()}
      >
        <div className='thumb'></div>
      </div>
    </div>
  );
};

Toggle.propTypes = {
  changeTheme: any,
  isDarkTheme: any,
};

export default Toggle;

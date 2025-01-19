import './Grid.css';

import AboutMyself from './AboutMyself';
import Github from './Github';
import LinkedIn from './LinkedIn';
import Instagram from './Instagram';
import Toggle from './Toggle';
import IBMCertificate from './IBMCertificate';
import MyLocation from './MyLocation';

const Grid = () => {
  return (
    <div className='grid-container all'>
      <AboutMyself />
      <IBMCertificate />
      <MyLocation />
      <Github />
      <LinkedIn />
      <Instagram />
      <Toggle />
    </div>
  );
};

export default Grid;

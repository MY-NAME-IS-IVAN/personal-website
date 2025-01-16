import { useState } from 'react';
import ContactButton from '../ContactButton';
import './Header.css';

const Header = () => {
  const [segmentOption, setSegmentOption] = useState('all');

  return (
    <div className='header-container'>
      <p className='name-title'>Ivan</p>
      <ul className='segment-control'>
        <li
          className={`option ${segmentOption == 'all' ? 'active' : ''}`}
          onClick={() => setSegmentOption('all')}
        >
          All
        </li>
        <li
          className={`option ${segmentOption == 'about' ? 'active' : ''}`}
          onClick={() => setSegmentOption('about')}
        >
          About
        </li>
        <li
          className={`option ${segmentOption == 'projects' ? 'active' : ''}`}
          onClick={() => setSegmentOption('projects')}
        >
          Projcets
        </li>
        <li
          className={`option ${segmentOption == 'media' ? 'active' : ''}`}
          onClick={() => setSegmentOption('media')}
        >
          Media
        </li>
      </ul>
      <ContactButton />
    </div>
  );
};

export default Header;

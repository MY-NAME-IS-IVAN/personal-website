import './Header.css';

import ContactButton from '../ContactButton';

import { any } from 'prop-types';

const Header = ({ setIsContactFormOpen, segmentOption, setSegmentOption }) => {
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
      <ContactButton setIsContactFormOpen={setIsContactFormOpen} />
    </div>
  );
};

Header.propTypes = {
  setIsContactFormOpen: any,
  segmentOption: any,
  setSegmentOption: any,
};

export default Header;

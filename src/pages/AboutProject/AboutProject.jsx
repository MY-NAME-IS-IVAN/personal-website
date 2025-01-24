import './AboutProject.css';

import { useState } from 'react';
import PropTypes from 'prop-types';

import { MdNavigateNext } from 'react-icons/md';
import { Link } from 'react-router-dom';

const AboutProject = ({
  title,
  subtitle,
  description,
  technologiesIcons,
  projectScreenshots,
}) => {
  const [activeImageIndex, setActiveImageIndex] = useState(0);

  function changeImage(changeValue) {
    let newIndex = activeImageIndex + changeValue;

    if (newIndex > projectScreenshots.length - 1) {
      newIndex = 0;
    } else if (newIndex < 0) {
      newIndex = projectScreenshots.length - 1;
    }

    setActiveImageIndex(newIndex);
  }

  return (
    <div className='about-project-container'>
      <Link to={'/'} className='back-button'>
        <MdNavigateNext />
      </Link>
      <div>
        <h2 className='project-title'>{title}</h2>
        <h3 className='project-subtitle'>{subtitle}</h3>
      </div>
      <div>
        <p className='build-with-text'>Build With</p>
        <ul className='technologies-list'>
          {technologiesIcons.map((icon, index) => {
            return <li key={index}>{icon}</li>;
          })}
        </ul>
      </div>
      <div className='image-slider-container'>
        <ul className='images-list'>
          {projectScreenshots.map((screen, index) => {
            return (
              <li
                key={index}
                className={activeImageIndex == index ? '' : 'hidden'}
              >
                <img src={screen} alt='' />
              </li>
            );
          })}
        </ul>
        <div className='controls'>
          <div className='button left' onClick={() => changeImage(-1)}>
            <MdNavigateNext />
          </div>
          <div className='dots'>
            {projectScreenshots.map((screen, index) => {
              return (
                <div
                  key={index}
                  className={`dot ${activeImageIndex == index ? 'active' : ''}`}
                  onClick={() => setActiveImageIndex(index)}
                ></div>
              );
            })}
          </div>
          <div className='button' onClick={() => changeImage(1)}>
            <MdNavigateNext />
          </div>
        </div>
      </div>
      <p className='project-decsription'>{description}</p>
    </div>
  );
};

AboutProject.propTypes = {
  title: PropTypes.string.isRequired,
  subtitle: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  technologiesIcons: PropTypes.array.isRequired,
  projectScreenshots: PropTypes.array.isRequired,
};

export default AboutProject;
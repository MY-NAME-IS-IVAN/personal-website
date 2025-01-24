import { FaArrowsRotate } from 'react-icons/fa6';

import FaceThinking from '../../assets/face-pictures/thinking.png';
import FaceExplosion from '../../assets/face-pictures/explosion.png';
import FaceFist from '../../assets/face-pictures/fist.png';
import FaceCalm from '../../assets/face-pictures/calm.png';
import FaceIdea from '../../assets/face-pictures/idea.png';
import FaceVictory from '../../assets/face-pictures/victory.png';
import FaceWink from '../../assets/face-pictures/wink.png';

import { useState } from 'react';

const AboutMyself = () => {
  const [toggleCount, setToggleCount] = useState(0);
  const [isFaceVisible, setIsFaceVisible] = useState(true);

  let faceTimeout = null;

  const facePictures = [
    FaceThinking,
    FaceWink,
    FaceFist,
    FaceVictory,
    FaceExplosion,
    FaceIdea,
    FaceCalm,
  ];

  return (
    <div className='grid-item about-myself'>
      <div className='picture-container'>
        <img
          src={
            isFaceVisible
              ? facePictures[toggleCount % facePictures.length]
              : facePictures[(toggleCount - 1) % facePictures.length]
          }
          alt=''
          className={`face-picture ${isFaceVisible ? 'visible' : 'hidden'}`}
        />
        <button
          className='face-toggle'
          disabled={!isFaceVisible}
          onClick={() => {
            setToggleCount(toggleCount + 1);
            setIsFaceVisible(false);

            clearTimeout(faceTimeout);
            faceTimeout = setTimeout(() => setIsFaceVisible(true), 750);
          }}
        >
          <FaArrowsRotate
            className='toggle-arrow'
            style={{ transform: `rotate(${toggleCount * 360}deg)` }}
          />
          <p>Toggle</p>
        </button>
      </div>
      <div className='text-container'>
        <p className='summary-text'>
          Hi, I&apos;m <span className='name-title'>Ivan</span>. Ambitious
          software developer with passion for learning new technologies and
          adapting to new ways to create digital systems and services. Skilled
          in front-end development with an interest in creating immersive
          applications. Dedicated to keep growing as a developer and make a good
          impact on humanity with technologies.
        </p>
      </div>
    </div>
  );
};

export default AboutMyself;

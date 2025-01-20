import './Grid.css';
import './GridDarkTheme.css';

import { useState } from 'react';

import AboutMyself from './AboutMyself';
import Github from './Github';
import LinkedIn from './LinkedIn';
import Instagram from './Instagram';
import Toggle from './Toggle';
import IBMCertificate from './IBMCertificate';
import MyLocation from './MyLocation';
import Project from './Project';

// React Icons
import {
  FaReact,
  FaJs,
  FaHtml5,
  FaCss3,
  FaUnity,
  FaPython,
  FaTelegram,
} from 'react-icons/fa6';
import { AiFillOpenAI } from 'react-icons/ai';
import { TbBrandCSharp } from 'react-icons/tb';
import { SiAdobephotoshop } from 'react-icons/si';

// Project Pictures
import StoicismPicture from '../../assets/projects-pictures/StoicismPicture.jpg';
import DeadCells from '../../assets/projects-pictures/DeadCells.jpg';
import GamePicture from '../../assets/projects-pictures/Game.jpg';
import MoodCompanion from '../../assets/projects-pictures/MoodCompanion.jpg';

const Grid = () => {
  const [isDarkTheme, setIsDarkTheme] = useState(false);

  return (
    <>
      <div className='grid-container all'>
        <AboutMyself />
        <Project
          title='Published Game'
          projectImage={GamePicture}
          projectLink='https://store.playstation.com/en-us/product/UP6537-CUSA32521_00-9855650559742112'
          technologiesIcons={[
            <FaUnity key={'unity'} title='Unity' />,
            <TbBrandCSharp key={'csharp'} title='C#' />,
            <SiAdobephotoshop key={'photoshop'} title='Photoshop' />,
          ]}
        />
        <Github />
        <Toggle isDarkTheme={isDarkTheme} setIsDarkTheme={setIsDarkTheme} />
        <LinkedIn />
        <Project
          title='Stoicism History'
          projectImage={StoicismPicture}
          projectLink='https://github.com/MY-NAME-IS-IVAN/Stoicism'
          technologiesIcons={[
            <FaReact key={'react'} title='React' />,
            <FaJs key={'javascript'} title='JavaScript' />,
            <FaCss3 key={'css'} title='CSS' />,
            <FaHtml5 key={'html'} title='HTML' />,
          ]}
        />
        <MyLocation isDarkTheme={isDarkTheme} />
        <Instagram />
        <Project
          title='Mood Companion'
          projectImage={MoodCompanion}
          isHorizontal={true}
          projectLink='https://t.me/mental_companion_bot'
          technologiesIcons={[
            <FaPython key={'python'} title='Python' />,
            <AiFillOpenAI key={'openAI'} title='OpenAI' />,
            <FaTelegram key={'telegram'} title='Telegram' />,
          ]}
        />
        <Project
          title='Dead Cells Website'
          projectImage={DeadCells}
          isHorizontal={true}
          projectLink='https://github.com/MY-NAME-IS-IVAN/dead-cells-website-clone'
          technologiesIcons={[
            <FaReact key={'react'} title='React' />,
            <FaJs key={'javascript'} title='JavaScript' />,
            <FaCss3 key={'css'} title='CSS' />,
            <FaHtml5 key={'html'} title='HTML' />,
          ]}
        />
        <IBMCertificate />
      </div>
    </>
  );
};

export default Grid;

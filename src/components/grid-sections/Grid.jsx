import './Grid.css';
import './GridDarkTheme.css';

import { useState, useEffect } from 'react';

import AboutMyself from './AboutMyself';
import Github from './Github';
import LinkedIn from './LinkedIn';
import Instagram from './Instagram';
import Toggle from './Toggle';
import IBMCertificate from './IBMCertificate';
import MyLocation from './MyLocation';
import Project from './Project';

import { any } from 'prop-types';

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

const Grid = ({ changeTheme, isDarkTheme, segmentOption }) => {
  const [canBeHorizontal, setCanBeHorizontal] = useState(true);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth > 785) {
        setCanBeHorizontal(true);
      } else {
        setCanBeHorizontal(false);
      }
    };

    window.addEventListener('resize', handleResize);
    handleResize();

    return () => window.removeEventListener('resize', handleResize);
  }, []);

  function GameProject() {
    return (
      <Project
        title='Published Game'
        projectImage={GamePicture}
        projectPagePath='/personal-website/dr-oil'
        projectLink='https://store.playstation.com/en-us/product/UP6537-CUSA32521_00-9855650559742112'
        technologiesIcons={[
          <FaUnity key={'unity'} title='Unity' />,
          <TbBrandCSharp key={'csharp'} title='C#' />,
          <SiAdobephotoshop key={'photoshop'} title='Photoshop' />,
        ]}
      />
    );
  }

  function StoicismProject() {
    return (
      <Project
        title='Stoicism History'
        projectImage={StoicismPicture}
        projectPagePath='/personal-website/stoicism-history'
        projectLink='https://github.com/MY-NAME-IS-IVAN/Stoicism'
        technologiesIcons={[
          <FaReact key={'react'} title='React' />,
          <FaJs key={'javascript'} title='JavaScript' />,
          <FaCss3 key={'css'} title='CSS' />,
          <FaHtml5 key={'html'} title='HTML' />,
        ]}
      />
    );
  }

  function MoodCompanionProject() {
    return (
      <Project
        title='Mood Companion'
        projectImage={MoodCompanion}
        projectPagePath='/personal-website/mood-companion'
        isHorizontal={canBeHorizontal ? true : false}
        projectLink='https://t.me/mood_companion_bot'
        technologiesIcons={[
          <FaPython key={'python'} title='Python' />,
          <AiFillOpenAI key={'openAI'} title='OpenAI' />,
          <FaTelegram key={'telegram'} title='Telegram' />,
        ]}
      />
    );
  }

  function DeadCellsProject() {
    return (
      <Project
        title='Dead Cells Website'
        projectImage={DeadCells}
        projectPagePath='/personal-website/dead-cells'
        isHorizontal={canBeHorizontal ? true : false}
        projectLink='https://github.com/MY-NAME-IS-IVAN/dead-cells-website-clone'
        technologiesIcons={[
          <FaReact key={'react'} title='React' />,
          <FaJs key={'javascript'} title='JavaScript' />,
          <FaCss3 key={'css'} title='CSS' />,
          <FaHtml5 key={'html'} title='HTML' />,
        ]}
      />
    );
  }

  function MyLocationElement() {
    return <MyLocation isDarkTheme={isDarkTheme} />;
  }

  function ToggleElement() {
    return <Toggle changeTheme={changeTheme} isDarkTheme={isDarkTheme} />;
  }

  return (
    <>
      <div
        className={`grid-container all ${
          segmentOption == 'all' ? 'active' : 'hidden'
        }`}
      >
        <AboutMyself />
        <GameProject />
        <Github />
        <ToggleElement />
        <StoicismProject />
        <IBMCertificate />
        <LinkedIn />
        <Instagram />
        <MyLocationElement />
        <MoodCompanionProject />
        <DeadCellsProject />
      </div>
      <div
        className={`grid-container about ${
          segmentOption == 'about' ? 'active' : 'hidden'
        }`}
      >
        <AboutMyself />
        <IBMCertificate />
        <Github />
        <LinkedIn />
        <MyLocationElement />
        <Instagram />
        <ToggleElement />
        <GameProject />
        <StoicismProject />
        <MoodCompanionProject />
        <DeadCellsProject />
      </div>
      <div
        className={`grid-container projects ${
          segmentOption == 'projects' ? 'active' : 'hidden'
        }`}
      >
        <StoicismProject />
        <GameProject />
        <MoodCompanionProject />
        <DeadCellsProject />
        <Github />
        <Instagram />
        <AboutMyself />
        <IBMCertificate />
        <ToggleElement />
        <LinkedIn />
        <MyLocationElement />
      </div>
      <div
        className={`grid-container media ${
          segmentOption == 'media' ? 'active' : 'hidden'
        }`}
      >
        <LinkedIn />
        <Instagram />
        <Github />
        <IBMCertificate />
        <ToggleElement />
        <AboutMyself />
        <GameProject />
        <StoicismProject />
        <MyLocationElement />
        <MoodCompanionProject />
        <DeadCellsProject />
      </div>
    </>
  );
};

Grid.propTypes = {
  changeTheme: any,
  isDarkTheme: any,
  segmentOption: any,
};

export default Grid;

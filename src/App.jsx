import { useState, useEffect } from 'react';
import { Route, Routes } from 'react-router-dom';

import Home from './pages/Home';
import AboutProject from './pages/AboutProject/AboutProject.jsx';

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

// Project Screenshots
import DrOilScreen1 from './assets/project-screens/DrOil1.jpg';
import DrOilScreen2 from './assets/project-screens/DrOil2.jpg';
import DrOilScreen3 from './assets/project-screens/DrOil3.jpg';
import Stoicism1 from './assets/project-screens/Stoicism1.jpg';
import Stoicism2 from './assets/project-screens/Stoicism2.jpg';
import Stoicism3 from './assets/project-screens/Stoicism3.jpg';
import MoodCompanion1 from './assets/project-screens/MoodCompanion1.jpg';
import MoodCompanion2 from './assets/project-screens/MoodCompanion2.jpg';
import DeadCells1 from './assets/project-screens/DeadCells1.jpg';
import DeadCells2 from './assets/project-screens/DeadCells2.jpg';
import DeadCells3 from './assets/project-screens/DeadCells3.jpg';

function App() {
  const [isDarkTheme, setIsDarkTheme] = useState(() => {
    const savedTheme = localStorage.getItem('isDarkTheme');
    return savedTheme ? JSON.parse(savedTheme) : false;
  });

  useEffect(() => {
    if (isDarkTheme) {
      document.body.classList.add('dark-theme');
    } else {
      document.body.classList.remove('dark-theme');
    }

    localStorage.setItem('isDarkTheme', JSON.stringify(isDarkTheme));
  }, [isDarkTheme]);

  const changeTheme = () => {
    setIsDarkTheme(!isDarkTheme);
  };

  function PubishedGamePage() {
    return (
      <AboutProject
        title='Dr. Oil'
        subtitle='Game Published on Consoles'
        description='Collaborated with a small team as the sole programmer to build a video game on Unity. The project lasted 4 months, culminating in the game`s release on Steam. Successfully negotiated and sold publishing rights for console platforms.'
        technologiesIcons={[
          <FaUnity key={'unity'} title='Unity' />,
          <TbBrandCSharp key={'csharp'} title='C#' />,
          <SiAdobephotoshop key={'photoshop'} title='Photoshop' />,
        ]}
        projectScreenshots={[DrOilScreen1, DrOilScreen2, DrOilScreen3]}
      />
    );
  }

  function StoicismHistoryPage() {
    return (
      <AboutProject
        title='History of Stoicism Website'
        subtitle='Website to educate users about Stoicism'
        description='Created an interactive, minimalist website to educate users about Stoicism and its history. The site showcases advanced CSS animations and interactivity, demonstrating my ability to design engaging and dynamic web pages.'
        technologiesIcons={[
          <FaReact key={'react'} title='React' />,
          <FaJs key={'javascript'} title='JavaScript' />,
          <FaCss3 key={'css'} title='CSS' />,
          <FaHtml5 key={'html'} title='HTML' />,
        ]}
        projectScreenshots={[Stoicism1, Stoicism2, Stoicism3]}
      />
    );
  }

  function DeadCellsPage() {
    return (
      <AboutProject
        title='Dead Cells Website Clone'
        subtitle='Pixel Perfect Website Clone'
        description='Developed a pixel-perfect clone of the video game Dead Cells official website. Recreated all the pages and ensured a fully responsive design. Optimized the clone by using newer technologies, making it significantly faster than the original.'
        technologiesIcons={[
          <FaReact key={'react'} title='React' />,
          <FaJs key={'javascript'} title='JavaScript' />,
          <FaCss3 key={'css'} title='CSS' />,
          <FaHtml5 key={'html'} title='HTML' />,
        ]}
        projectScreenshots={[DeadCells1, DeadCells2, DeadCells3]}
      />
    );
  }

  function MoodCompanionPage() {
    return (
      <AboutProject
        title='Mood Companion'
        subtitle='Your personal companion for mental health and mood tracking'
        description='Developed a personal chatbot designed to track users` moods and provide insights based on their current emotional state. Leveraged the OpenAI API to power the AI capabilities and the Telegram API to create an interface.'
        technologiesIcons={[
          <FaPython key={'python'} title='Python' />,
          <AiFillOpenAI key={'openAI'} title='OpenAI' />,
          <FaTelegram key={'telegram'} title='Telegram' />,
        ]}
        projectScreenshots={[MoodCompanion1, MoodCompanion2]}
      />
    );
  }

  return (
    <div className='whole-app-container'>
      <Routes>
        <Route
          path='/'
          element={<Home changeTheme={changeTheme} isDarkTheme={isDarkTheme} />}
        />
        <Route path='/dr-oil' element={<PubishedGamePage />} />
        <Route path='/stoicism-history' element={<StoicismHistoryPage />} />
        <Route path='/dead-cells' element={<DeadCellsPage />} />
        <Route path='/mood-companion' element={<MoodCompanionPage />} />
      </Routes>
    </div>
  );
}

export default App;

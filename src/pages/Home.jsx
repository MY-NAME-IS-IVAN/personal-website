import { useState, useEffect } from 'react';
import { any } from 'prop-types';

import ContactForm from '../components/ContactForm/ContactForm';
import Grid from '../components/grid-sections/Grid';
import Header from '../components/Header/Header';

const Home = ({ changeTheme, isDarkTheme }) => {
  const [segmentOption, setSegmentOption] = useState('all');
  const [isContactFormOpen, setIsContactFormOpen] = useState(false);

  useEffect(() => {
    const body = document.body;
    if (isContactFormOpen) {
      body.style.overflow = 'hidden';
    } else {
      body.style.overflow = 'auto';
    }
  }, [isContactFormOpen]);

  return (
    <>
      <ContactForm
        isContactFormOpen={isContactFormOpen}
        setIsContactFormOpen={setIsContactFormOpen}
      />
      <Header
        isContactFormOpen={isContactFormOpen}
        setIsContactFormOpen={setIsContactFormOpen}
        segmentOption={segmentOption}
        setSegmentOption={setSegmentOption}
      />
      <Grid
        changeTheme={changeTheme}
        isDarkTheme={isDarkTheme}
        segmentOption={segmentOption}
      />
    </>
  );
};

Home.propTypes = {
  changeTheme: any,
  isDarkTheme: any,
};

export default Home;

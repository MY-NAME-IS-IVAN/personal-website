import { useState, useEffect } from 'react';
import ContactForm from './components/ContactForm/ContactForm';
import Grid from './components/grid-sections/Grid';
import Header from './components/Header/Header';

function App() {
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
    <div className='whole-app-container'>
      <ContactForm
        isContactFormOpen={isContactFormOpen}
        setIsContactFormOpen={setIsContactFormOpen}
      />
      <Header
        isContactFormOpen={isContactFormOpen}
        setIsContactFormOpen={setIsContactFormOpen}
      />
      <Grid />
    </div>
  );
}

export default App;

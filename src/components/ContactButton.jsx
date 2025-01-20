import { any } from 'prop-types';

const ContactButton = ({ setIsContactFormOpen }) => {
  return (
    <button
      className='contact-button'
      onClick={() => setIsContactFormOpen(true)}
    >
      Contact
    </button>
  );
};

ContactButton.propTypes = {
  setIsContactFormOpen: any,
};

export default ContactButton;

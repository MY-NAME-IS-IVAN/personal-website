import PropTypes from 'prop-types';

const Project = ({
  title,
  projectImage,
  projectLink,
  technologiesIcons,
  isHorizontal = false,
}) => {
  const technologies = technologiesIcons.map((icon, index) => {
    return <li key={index}>{icon}</li>;
  });

  return (
    <a
      href={projectLink}
      target='_blank'
      className={`grid-item grid-link project ${
        isHorizontal ? 'horizontal' : ''
      }`}
    >
      <div className='header'>
        <div>
          <p className='secondary-text'>PROJECT</p>
          <p className='title'>{title}</p>
        </div>
        <div>
          <p className='secondary-text'>BUILD WITH</p>
          <ul className='technologies-list'>{technologies}</ul>
        </div>
      </div>
      <div className='pciture-container'>
        <img src={projectImage} alt='' />
      </div>
    </a>
  );
};

Project.propTypes = {
  title: PropTypes.string.isRequired,
  projectImage: PropTypes.string.isRequired,
  projectLink: PropTypes.string.isRequired,
  technologiesIcons: PropTypes.array.isRequired,
  isHorizontal: PropTypes.bool,
};

export default Project;

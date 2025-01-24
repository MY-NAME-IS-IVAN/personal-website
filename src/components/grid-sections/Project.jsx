import PropTypes from 'prop-types';
import ProjectButtons from '../ProjectButtons';

const Project = ({
  title,
  projectImage,
  technologiesIcons,
  isHorizontal = false,
  projectPagePath = '/',
  projectLink,
}) => {
  const technologies = technologiesIcons.map((icon, index) => {
    return <li key={index}>{icon}</li>;
  });

  function CurrentProjectButtons() {
    return (
      <ProjectButtons
        isHorizontal={isHorizontal}
        projectPagePath={projectPagePath}
        projectLink={projectLink}
      />
    );
  }

  return (
    <div
      className={`grid-item project ${
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
        {isHorizontal && <CurrentProjectButtons />}
      </div>
      <div className='pciture-container'>
        <img src={projectImage} alt='' />
      </div>
      {!isHorizontal && <CurrentProjectButtons />}
    </div>
  );
};

Project.propTypes = {
  title: PropTypes.string.isRequired,
  projectImage: PropTypes.string.isRequired,
  technologiesIcons: PropTypes.array.isRequired,
  isHorizontal: PropTypes.bool,
  projectPagePath: PropTypes.string.isRequired,
  projectLink: PropTypes.string.isRequired,
};

export default Project;

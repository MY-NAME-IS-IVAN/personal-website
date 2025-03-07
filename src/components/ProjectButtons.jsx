import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

const ProjectButtons = ({
  isHorizontal,
  projectPagePath = '/personal-website/',
  projectLink,
}) => {
  return (
    <div
      className={`project-buttons-container ${
        isHorizontal ? 'left' : 'center'
      }`}
    >
      <Link to={projectPagePath} className='about-project-button'>
        About Project
      </Link>
      <a href={projectLink} target='_blank' className='view-project-button'>
        View Project
      </a>
    </div>
  );
};

ProjectButtons.propTypes = {
  isHorizontal: PropTypes.bool,
  projectPagePath: PropTypes.string.isRequired,
  projectLink: PropTypes.string.isRequired,
};

export default ProjectButtons;

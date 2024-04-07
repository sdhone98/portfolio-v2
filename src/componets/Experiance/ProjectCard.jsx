import "./ProjectCard.scss";
const ProjectCard = ({
  id,
  projectName,
  position,
  projectDuration,
  description,
  correntMode
}) => {
  return (
    <div className="project-info">
      <h4>{projectName}</h4>
      <span>
        <i>
          {position} {projectDuration}
        </i>
      </span>
      <ul>
        {description.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
    </div>
  );
};

export default ProjectCard;

import "./ProjectCard.scss";
const ProjectCard = ({
  projectName,
  position,
  projectDuration,
  description,
}) => {
  const msg = [
    "An essay should have a structure like an introduction, body, and conclusion",
    "Kids can talk about the pen in general and its history, origin, and evolution",
    "They can add an idea of their favourite pen, its utility, and its impact and importance in society",
    "A well-rounded concluding paragraph summarising all the points is crucial",
  ];
  return (
    <div className="project-card-main">
      <div className="cardholder">
        <div className="dot"></div>
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
      </div>
    </div>
  );
};

export default ProjectCard;

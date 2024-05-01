import "./ProjectCard.scss";
const ProjectCard = ({
  id,
  projectName,
  position,
  projectDuration,
  description,
  imageName,
  correntMode,
}) => {

  return (
    <div className="project-info" style={{flexDirection: `${id/2 == 0? "row":"row-reverse"}`,
    border: `1px solid ${correntMode? "rgba(245,245,245,.3)" : "rgba(0,0,0,.3)"}`}}>
      <div className="img">
        <img src={`/project_images/background/${imageName}`} alt={imageName}/>
      </div>
      <div className="center-line" style={{backgroundColor: `${correntMode? "rgba(245,245,245,.3)":"rgba(0,0,0,.3)"}`}}></div>
      <div className="card">
        <h4>{projectName}</h4>
        <span>
          <i>
            {position} {projectDuration} {}
          </i>
        </span>
        <ul>
          {description.map((item, index) => (
            <li key={index}>{item}</li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default ProjectCard;

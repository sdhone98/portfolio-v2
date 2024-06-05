import "./Project.scss";
import Data from "../../resources/information.json";
import Card from "./Card";
const Project = ({ isDarkModeOn }) => {
  return (
    <div className="project-main">
      <p>Browse My Recent</p>
      <h2>Project</h2>

      <div className="project-container">
        {Data.projects.map((project) => (
          <Card
            key={project.name}
            projectName={project.name}
            projectUrl={project.url}
            projectHostUrl={project.hostUrl}
            tectStack={project.techStack.join(" ")}
            projectImageName={project.imageBackground}
            currentMode={isDarkModeOn}
          />
        ))}
      </div>
    </div>
  );
};

export default Project;

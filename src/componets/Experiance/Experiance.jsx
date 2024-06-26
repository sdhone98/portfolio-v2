import "./Experiance.scss";
import ProjectCard from "./ProjectCard";
import data from "../../resources/information.json"
const Experiance = ({isDarkModeOn}) => {
  const Data = data.experiance

  const containerCustomStyle = {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
  };

  const RBG_BLACK_COLOR = `rgb(19,19,19)`;
  const RBG_WHITE_COLOR = `rgb(245,245,245)`;

  return (
    <div className="experiance-main">
      <p>Explore My Journey</p>
      <h2>Experience</h2>

      <div className="container" style={containerCustomStyle}>
        {Data.map((project, index) => (
            <ProjectCard
              id={index}
              key={index}
              projectName={project.name}
              position={project.designation}
              projectDuration={project.duration}
              description={project.description}
              imageName={project.imageName}
              correntMode={isDarkModeOn}
            />
          ))}
      </div>
    </div>
  );
};

export default Experiance;

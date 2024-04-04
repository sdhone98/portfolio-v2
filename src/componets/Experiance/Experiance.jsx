import "./Experiance.scss";
import ProjectCard from "./ProjectCard";
const Experiance = ({isDarkModeOn}) => {

  const msg = [
    "An essay should have a structure like an introduction, body, and conclusion",
    "Kids can talk about the pen in general and its history, origin, and evolution",
    "They can add an idea of their favourite pen, its utility, and its impact and importance in society",
    "A well-rounded concluding paragraph summarising all the points is crucial",
  ];

  const containerCustomStyle = {
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  };

  const RBG_BLACK_COLOR = `rgb(19,19,19)`;
  const RBG_WHITE_COLOR = `rgb(245,245,245)`;

  const taskList = ["Task 1", "Task 2", "Task 3", "Task 4"];
  return (
    <div className="experiance-main">
      <p>Explore My Journey</p>
      <h2>Experience</h2>

      <div className="container" style={containerCustomStyle}>
        <div className="vertical-line" style={{background: `${isDarkModeOn? RBG_WHITE_COLOR:RBG_BLACK_COLOR}`}}>
          <div className="circle" style={{background: isDarkModeOn? RBG_WHITE_COLOR:RBG_BLACK_COLOR}}></div>
        </div>
        <div className="info">
          {taskList.map((project, index) => (
            <ProjectCard
              key={index}
              projectName="Task 1"
              position="Sub task"
              projectDuration="Description"
              description={msg}
              correntMode={isDarkModeOn}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Experiance;

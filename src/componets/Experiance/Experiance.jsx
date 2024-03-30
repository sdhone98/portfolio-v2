import "./Experiance.scss";
import ProjectCard from "./ProjectCard";
const Experiance = () => {
  const msg = [
    "An essay should have a structure like an introduction, body, and conclusion",
    "Kids can talk about the pen in general and its history, origin, and evolution",
    "They can add an idea of their favourite pen, its utility, and its impact and importance in society",
    "A well-rounded concluding paragraph summarising all the points is crucial",
  ];

  const containerCustomStyle = {
    width: "60%",
    height: "fit-content",
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  };

  const taskList = ["Task 1", "Task 2", "Task 3", "Task 4"];
  return (
    <div className="experiance-main">
      <p>Explore My Journey</p>
      <h2>Experience</h2>

      <div className="container" style={containerCustomStyle}>
        <div className="vertical-line">
          <div className="circle"></div>
        </div>
        <div className="info">
          {taskList.map((project, index) => (
            <ProjectCard
              key={index}
              projectName="Task 1"
              position="Sub task"
              projectDuration="Description"
              description={msg}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Experiance;

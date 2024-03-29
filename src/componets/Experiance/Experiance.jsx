import "./Experiance.scss";
import ProjectCard from "./ProjectCard";
const Experiance = () => {
  const msg = [
    "An essay should have a structure like an introduction, body, and conclusion",
    "Kids can talk about the pen in general and its history, origin, and evolution",
    "They can add an idea of their favourite pen, its utility, and its impact and importance in society",
    "A well-rounded concluding paragraph summarising all the points is crucial",
  ];

  const taskList = ["Task 1", "Task 2", "Task 3", "Task 4"];
  return (
    <div className="experiance-main">
      <h2>Test</h2>

      <div className="container">
        <div className="vertical-line">
          <div className="circle"></div>
        </div>
        <div className="info">
          {taskList.map((project) => (
            <ProjectCard
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

import "./Project.scss";
import Data from "../../resources/information.json";
import Card from "./Card";
const Project = () => {
  return (
    <div className="project-main">
      <p>Browse My Recent</p>
      <h2>Project</h2>

      <div className="project-container">
        {Data.projects.map((project) => (
          <Card
            projectName={project.name}
            projectUrl={project.url}
            tectStack={project.techStack.join(" ")}
            projectImageName={project.imageBackground}
          />
        ))}

        {/* <Card projectName="Task 1" projectUrl="#" tectStack="Option 1 Option 2 Option 3"/>
        <Card projectName="Task 1" projectUrl="#" tectStack="Option 1 Option 2 Option 3"/>
        <Card projectName="Task 1" projectUrl="#" tectStack="Option 1 Option 2 Option 3"/>
        <Card projectName="Task 1" projectUrl="#" tectStack="Option 1 Option 2 Option 3"/>
        <Card projectName="Task 1" projectUrl="#" tectStack="Option 1 Option 2 Option 3"/> */}
      </div>
    </div>
  );
};

export default Project;

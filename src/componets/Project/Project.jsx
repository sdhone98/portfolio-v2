import "./Project.scss";
import Card from "./Card";
const Project = () => {
  return (
    <div className="project-main">
      <p>Browse My Recent</p>
      <h2>Project</h2>
      <div className="project-container">
        <Card projectName="Task 1" projectUrl="#" tectStack="Option 1 Option 2 Option 3"/>
        <Card projectName="Task 1" projectUrl="#" tectStack="Option 1 Option 2 Option 3"/>
        <Card projectName="Task 1" projectUrl="#" tectStack="Option 1 Option 2 Option 3"/>
        <Card projectName="Task 1" projectUrl="#" tectStack="Option 1 Option 2 Option 3"/>
        <Card projectName="Task 1" projectUrl="#" tectStack="Option 1 Option 2 Option 3"/>
        <Card projectName="Task 1" projectUrl="#" tectStack="Option 1 Option 2 Option 3"/>
      </div>
    </div>
  );
};

export default Project;

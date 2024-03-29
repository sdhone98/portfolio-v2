
import NavBar from "./componets/NavBar/NavBar";
import Home from "./componets/Home/Home";
import Experiance from "./componets/Experiance/Experiance";
import Project from "./componets/Project/Project";
import ConatctUs from "./componets/ContactUs/ContactUs";
import "./App.css";
import Skills from "./componets/Skills/Skills";

function App() {

  return (
    <>
      <NavBar />
      <Skills/>
      <Home />
      <Experiance />
      <Project />
      <ConatctUs/>
    </>
  );
}

export default App;

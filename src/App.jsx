import { useRef } from "react";
import NavBar from "./componets/NavBar/NavBar";
import Home from "./componets/Home/Home";
import Experiance from "./componets/Experiance/Experiance";
import Project from "./componets/Project/Project";
import ConatctUs from "./componets/ContactUs/ContactUs";
import "./App.css";
import Skills from "./componets/Skills/Skills";
import Footer from "./componets/Footer/Footer";

function App() {
  const homeRef = useRef(null);
  const contactRef = useRef(null);
  const projectRef = useRef(null);
  const experienceRef = useRef(null);
  return (
    <>
      <NavBar
        homeRef={homeRef}
        contactRef={contactRef}
        projectRef={projectRef}
        experienceRef={experienceRef}
      />
      {/* <Home /> */}
      <Experiance />
      <Project />
      <Skills />
      <ConatctUs />
      <Footer/>
    </>
  );
}

export default App;

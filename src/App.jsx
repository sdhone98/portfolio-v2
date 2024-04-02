import { useEffect, useRef, useState } from "react";
import NavBar from "./componets/NavBar/NavBar";
import Home from "./componets/Home/Home";
import Experiance from "./componets/Experiance/Experiance";
import Project from "./componets/Project/Project";
import ConatctUs from "./componets/ContactUs/ContactUs";
import "./App.css";
import Skills from "./componets/Skills/Skills";
import Footer from "./componets/Footer/Footer";

function App() {
  const RBG_BLACK_COLOR = `rgb(19,19,19)`;
  const RBG_WHITE_COLOR = `rgb(245,245,245)`;

  const homeRef = useRef(null);
  const contactRef = useRef(null);
  const projectRef = useRef(null);
  const experienceRef = useRef(null);

  const [darkModeOn, setDarkModeOn] = useState(true);

  useEffect(() => {
    document.body.style.backgroundColor = darkModeOn
      ? RBG_BLACK_COLOR
      : RBG_WHITE_COLOR;
    document.body.style.color = darkModeOn ? RBG_WHITE_COLOR : RBG_BLACK_COLOR;
  }, [darkModeOn]);

  return (
    <div className={darkModeOn ? "dark-mode" : "light-mode"}>
      <NavBar
        homeRef={homeRef}
        contactRef={contactRef}
        projectRef={projectRef}
        experienceRef={experienceRef}
        toggleMode_={setDarkModeOn}
      />
      <Home isDarkModeOn={darkModeOn}/>
      <Experiance isDarkModeOn={darkModeOn} />
      <Project isDarkModeOn={darkModeOn} />
      <Skills isDarkModeOn={darkModeOn} />
      <ConatctUs isDarkModeOn={darkModeOn} />
      <Footer isDarkModeOn={darkModeOn}/>
    </div>
  );
}

export default App;

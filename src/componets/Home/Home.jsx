import "./Home.scss";
import CV from "../../resources/SagarDhone.pdf";
("./colors");
const Home = ({ isDarkModeOn, contactRef }) => {
  const msg = "Full Stack Developer, But I lean towards Backend Development";
  const msg_1 = "Hello, I'm Sagar. A passionate Software Developer.";

  const svgFile = `<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20"><circle r="2" cx="0" cy="0" fill="${
    isDarkModeOn ? "rgba(245,245,245,.3)" : "rgb(19,19,19,.5)"
  }" /></svg>`;

  const backgroundPattern = `radial-gradient(circle at center, 
    transparent 1%, ${
      isDarkModeOn ? "rgb(19,19,19)" : "rgb(245,245,245)"
    } 60%), 
    url('data:image/svg+xml,${svgFile}'), 100%`;

  const scrollToSection = (ref) => {
    ref.current.scrollIntoView({ behavior: "smooth" });
  };

  const downloadCV = () => {
    const link = document.createElement("a");
    link.href = CV;
    link.download = "Sagar Dhone.pdf";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };
  return (
    <div className="home-main" style={{ background: backgroundPattern }}>
      <div className="container">
        <p
          style={{
            fontFamily: "Source Code Pro",
          }}
        >
          {msg_1}
        </p>
        <h1
          style={{
            textAlign: "center",
          }}
        >
          {msg}
        </h1>
        <div className="btn-container">
          <button className="first-btn" onClick={() => downloadCV()}>
            Download CV
          </button>
          <button
            className="second-btn"
            onClick={() => scrollToSection(contactRef)}
          >
            Contact Me
          </button>
        </div>
      </div>
    </div>
  );
};

export default Home;

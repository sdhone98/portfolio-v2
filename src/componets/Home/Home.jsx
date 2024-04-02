import "./Home.scss";
("./colors");
const Home = ({ isDarkModeOn }) => {
  const msg = "Full Stack Developer, But I lean towards Backend Development";
  const msgg = "React Context is a way to manage state globally.";
  const msg_1 = "Hello, I'm Sagar. A passionate Software Developer.";
  const msg_11 = "Lorem Ipmsem.";
  const color = "232, 252, 255";

  const svgFile = `<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20"><circle r="2" cx="0" cy="0" fill="${
    isDarkModeOn ? "rgba(245,245,245,.3)" : "rgb(19,19,19,.5)"
  }" /></svg>`;

  const backgroundPattern = `radial-gradient(circle at center, 
    transparent 1%, ${
      isDarkModeOn ? "rgb(19,19,19)" : "rgb(245,245,245)"
    } 60%), 
    url('data:image/svg+xml,${svgFile}'), 100%`;
  return (
    <div className="home-main" style={{ background: backgroundPattern }}>
      <div className="container">
        <p
          style={{
            fontFamily: "Source Code Pro",
            fontSize: "1rem",
            fontWeight: "300",
          }}
        >
          {msg_1}
        </p>
        <h1
          style={{
            padding: "1rem 0",
            fontSize: "3rem",
            marginBottom: "3rem",
            textAlign: "center",
          }}
        >
          {msgg}
        </h1>
        <div className="btn-container">
          <button className="first-btn">Download CV</button>
          <button className="second-btn">Contact Me</button>
        </div>
      </div>
    </div>
  );
};

export default Home;

import "./Home.scss";
("./colors");
const Home = () => {
  const customButtonStyle = { background: "rgb(245,245,245)" };
  const onHoverState = () => {
    console.log("HOVER ON");
  };

  const offHoverState = () => {
    console.log("HOVER OFF");
  };

  const backgroundPattern = `radial-gradient(circle at center, transparent 0%, rgb(19,19,19) 65%), url('data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20"><circle r="2" cx="0" cy="0" fill="rgba(245,245,245,.3)" /></svg>')`;
  return (
    <div className="home-main" style={{ background: backgroundPattern }}>
      <div className="container">
        <p style={{ color: "rgb(255,255,255)", fontFamily:"Source Code Pro", fontSize: "1rem", fontWeight: "200"}}>
          Hello, I'm Sagar. A passionate Software Developer.
        </p>
        <h1
          style={{
            padding: "1rem 0",
            color: "rgb(255,255,255)",
            fontSize: "3rem",
            marginBottom: "3rem",
            textAlign: "center"
          }}
        >
          Full Stack Developer, But I lean towards Backend Development
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

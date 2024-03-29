import "./Card.scss";
const Card = ({ projectName, projectUrl, tectStack }) => {
  const openInNewTab = (url) => {
    const newWindow = window.open(url, "_blank", "noopener,noreferrer");
    if (newWindow) newWindow.opener = null;
  };

  const cardCustomStyle = {
    width: "250px",
    height: "350px",
    border: "0.5px solid rgba(245, 245, 245, 0.3)",
    borderRadius: "15px",
    padding: "1rem",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  };

  const imgCustomStyle = {
    width: "100%",
    height: "40%",
    objectFit: "cover",
    borderRadius: "15px",
  };

  const pCustomStyle = {
    marginBottom: "1rem",
    fontSize: ".8rem",
    fontWeight: "600",
  };

  const h4CustomStyle = {
    margin: "1rem 0",
    fontSize: "1.8rem",
    fontWeight: "600",
  };
  return (
    <div className="card" style={cardCustomStyle}>
      <img
        src="https://images.tokopedia.net/img/cache/900/VqbcmM/2023/5/29/de6aba0b-03a7-4224-b000-90648d86264c.jpg"
        alt="image"
        style={imgCustomStyle}
      ></img>
      <h4 style={h4CustomStyle}>{projectName}</h4>
      <i>
        <p style={pCustomStyle}>{tectStack}</p>
      </i>
      <div className="action">
        <button onClick={() => openInNewTab(projectUrl)}>Click 1</button>
      </div>
    </div>
  );
};

export default Card;

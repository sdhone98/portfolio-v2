import { useState, useEffect } from "react";
import "./Card.scss";
const Card = ({
  projectName,
  projectUrl,
  tectStack,
  projectImageName,
  currentMode,
}) => {
  const img = "../../../src/resources/project_images/" + projectImageName;
  const openInNewTab = (url) => {
    const newWindow = window.open(url, "_blank", "noopener,noreferrer");
    if (newWindow) newWindow.opener = null;
  };





  
  const COLOR_CODE = currentMode? 19:245;
  const RBG_BLACK_COLOR = `rgb(19,19,19)`;
  const RBG_WHITE_COLOR = `rgb(245,245,245)`;
  const RBGA_BLACK_COLOR = "rgba(19,19,19,.3)";
  const RBGA_WHITE_COLOR = "rgba(245,245,245,.3)";

  const cardCustomStyle = {
    width: "250px",
    height: "350px",
    borderRadius: "15px",
    padding: "1rem",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    border: `.5px solid ${currentMode? RBGA_WHITE_COLOR: RBGA_BLACK_COLOR}`
  };

  const imgCustomStyle = {
    width: "100%",
    height: "40%",
    objectFit: "cover",
    borderRadius: "15px",
    border: `.5px solid ${currentMode? RBGA_WHITE_COLOR: RBGA_BLACK_COLOR}`
  };

  const pCustomStyle = {
    marginBottom: "1rem",
    fontSize: ".8rem",
    fontWeight: "300",
  };

  const h4CustomStyle = {
    margin: "1rem 0",
    fontSize: "1.8rem",
    fontWeight: "600",
    textAlign: "center",
    lineHeight: "1",
  };

  const buttonCustomStyle = {
    color: `${currentMode ? RBG_WHITE_COLOR : RBG_BLACK_COLOR}`,
    border: `.5px solid ${currentMode? RBGA_WHITE_COLOR: RBGA_BLACK_COLOR}`,
    background: 'transparent'
  };

  return (
    <div className="card" style={cardCustomStyle}>
      <img src={img} alt="image" style={imgCustomStyle}></img>
      <h4 style={h4CustomStyle}>{projectName}</h4>
      <i>
        <p style={pCustomStyle}>{tectStack}</p>
      </i>
      <div className="action">
        <button
        id="btn-1"
          style={buttonCustomStyle}
          onClick={() => openInNewTab(projectUrl)}
        >
          GitHub
        </button>
      </div>
    </div>
  );
};

export default Card;

import { useState, useEffect, useRef } from "react";
import "./MenuOption.scss";
const MenuOption = ({
  id,
  optionName,
  optionValues,
  parentState,
  setParentState,

}) => {



  const scrollToSection = (name, ref) => {
    console.log("REF == > ", name, ref, " : ===== : ", ref.current);
    if (ref && ref.current) {
      ref.current.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  const switchTab = (name) => {
    set
    // switch (name) {
    //   case "Home":
    //     console.log("TAB ========> ", name);
    //     scrollToSection(homeRef)
    //     break;
    //   case "Experiance":
    //     console.log("TAB ========> ", name);
    //     break;
    //   case "Projects":
    //     console.log("TAB ========> ", name);
    //     break;
    //   case "Skills":
    //     console.log("TAB ========> ", name);
    //     break;
    //   case "Contact Me":
    //     console.log("TAB ========> ", name);
    //     break;
    //   default:
    //     break;
    // }
  };

  const [popUpState, setPopUpState] = useState(true);

  const handleMouseEnter = () => {
    setPopUpState(true);
  };

  const handleMouseLeave = () => {
    setPopUpState(false);
  };

  useEffect(() => {
    parentState && popUpState && setPopUpState(false);

    !parentState && setPopUpState(false);
  }, [parentState]);

  const openInNewTab = (url) => {
    const newWindow = window.open(url, "_blank", "noopener,noreferrer");
    if (newWindow) newWindow.opener = null;
  };

  const subMenuCustomStyle = {
    marginTop: "4.9rem",
    padding: " .5rem",
    position: "absolute",
    zIndex: "99",
    width: "9rem",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    color: "rgb(245,245,245)",
    border: `.5px solid rgba(245,245,245,.3)`,
    borderRadius: "8px",
    background: "rgb(19,19,19)",
  };

  const aTagCustomStyle = {
    width: "fit-content",
    margin: "3px",
    textAlign: "center",
    color: "rgb(245,245,245)",
    fontSize: "1rem",
    fontWeight: 200,
  };

  return (
    <div
      className="menu-option"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      {
        <label
          style={{
            color: "rgb(245,245,245)",
            width: "fit-content",
            padding: "2.5rem 0",
          }}
        >
          {optionName}
        </label>
      }
      {popUpState && optionValues.length ? (
        <div className="sub-menu" style={subMenuCustomStyle}>
          {optionValues.map((subOption, index) => (
            <div
              key={index}
              className="sub-menu-option"
              onClick={() => scrollToSection(subOption.name,event)}
              style={{
                width: "100%",
                margin: "2px",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                padding: "2px",
              }}
            >
              {id == 1 && (
                <div style={{ width: "fit-content", margin: "0 .5rem" }}>
                  {subOption.svgCode}
                </div>
              )}
              <a href={subOption.url} key={index} style={aTagCustomStyle}>
                {subOption.name}
              </a>
            </div>
          ))}
        </div>
      ) : (
        <></>
      )}
    </div>
  );
};
export default MenuOption;

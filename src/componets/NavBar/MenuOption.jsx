import { useState, useEffect, useRef } from "react";
import "./MenuOption.scss";
const MenuOption = ({
  id,
  optionName,
  optionValues,
  parentState,
  setParentState,
  test,
}) => {
  const [isDarkMode, setDarkMode] = useState(true);
  const toggleSwitchMode = () => {
    
    if (id in [0,1]) {
      setParentState(true);
      setPopUpState(true);
    }
    if (id == 2) {
      setDarkMode((isDarkMode) => !isDarkMode);
    }
  };

  useEffect(() => {
    test(isDarkMode);
  }, [isDarkMode]);

  const [popUpState, setPopUpState] = useState(false);

  const handleMouseEnter = () => {
    setPopUpState(true);
  };

  const handleMouseLeave = () => {
    setPopUpState(false);
  };

  // useEffect(() => {
  //   (parentState && popUpState && setPopUpState(false)) || (!parentState && setPopUpState(false))
  // }, [parentState]);

  const openInNewTabNEW = (url) => {
    const newWindow = window.open(url, "_blank", "noopener,noreferrer");
    if (newWindow) newWindow.opener = null;
  };

  const subMenuCustomStyle = {
    marginTop: "2.5rem",
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
    fontFamily: "Inter"
  };

  return (
    <div
      id={id}
      className="menu-option"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      onClick={() => toggleSwitchMode()}
      style={{ color: "rgb(245,245,245)" }}
    >
      {id != 2 ? optionName : isDarkMode ? optionName[0] : optionName[1]}
      {popUpState && optionValues.length ? (
        <div className="sub-menu" style={subMenuCustomStyle}>
          {optionValues.map((subOption, index) => (
            <div
              key={index}
              className="sub-menu-option"
              onClick={ subOption.func}
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
              <span key={index} style={aTagCustomStyle} onClick={ () => id == 1 && openInNewTabNEW(subOption.url)}>
                {subOption.name}
              </span>
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

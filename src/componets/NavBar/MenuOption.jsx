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

  const moonSvg = (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="16"
      height="16"
      fill="currentColor"
      class="bi bi-moon-stars"
      viewBox="0 0 16 16"
    >
      <path d="M6 .278a.77.77 0 0 1 .08.858 7.2 7.2 0 0 0-.878 3.46c0 4.021 3.278 7.277 7.318 7.277q.792-.001 1.533-.16a.79.79 0 0 1 .81.316.73.73 0 0 1-.031.893A8.35 8.35 0 0 1 8.344 16C3.734 16 0 12.286 0 7.71 0 4.266 2.114 1.312 5.124.06A.75.75 0 0 1 6 .278M4.858 1.311A7.27 7.27 0 0 0 1.025 7.71c0 4.02 3.279 7.276 7.319 7.276a7.32 7.32 0 0 0 5.205-2.162q-.506.063-1.029.063c-4.61 0-8.343-3.714-8.343-8.29 0-1.167.242-2.278.681-3.286" />
      <path d="M10.794 3.148a.217.217 0 0 1 .412 0l.387 1.162c.173.518.579.924 1.097 1.097l1.162.387a.217.217 0 0 1 0 .412l-1.162.387a1.73 1.73 0 0 0-1.097 1.097l-.387 1.162a.217.217 0 0 1-.412 0l-.387-1.162A1.73 1.73 0 0 0 9.31 6.593l-1.162-.387a.217.217 0 0 1 0-.412l1.162-.387a1.73 1.73 0 0 0 1.097-1.097zM13.863.099a.145.145 0 0 1 .274 0l.258.774c.115.346.386.617.732.732l.774.258a.145.145 0 0 1 0 .274l-.774.258a1.16 1.16 0 0 0-.732.732l-.258.774a.145.145 0 0 1-.274 0l-.258-.774a1.16 1.16 0 0 0-.732-.732l-.774-.258a.145.145 0 0 1 0-.274l.774-.258c.346-.115.617-.386.732-.732z" />
    </svg>
  );

  const toggleSwitchMode = () => {
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

  useEffect(() => {
    (parentState && popUpState && setPopUpState(false)) || (!parentState && setPopUpState(false))
  }, [parentState]);

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

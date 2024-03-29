import { useState, useEffect } from "react";
import "./MenuOption.scss";
const MenuOption = ({
  optionName,
  optionValues,
  parentState,
  setParentState,
}) => {

  console.log("CHILD DATA ===> ",optionName, optionValues)
  const [popUpState, setPopUpState] = useState(false);

  const handleMouseEnter = () => {
    setPopUpState(true);
  };

  const handleMouseLeave = () => {
    setPopUpState(false);
  };

  useEffect(() => {
    parentState && popUpState && setPopUpState(true);

    !parentState && setPopUpState(false);
  }, [parentState]);

  const subMenuCustomStyle = {
    marginTop: "2.5rem",
    padding: "1rem",
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
    <div className="menu-option" onMouseEnter={handleMouseEnter}>
      {
        <label style={{ color: "rgb(245,245,245)", width: "fit-content" }}>
          {optionName}
        </label>
      }
      {popUpState && optionValues.length ? (
        <div className="sub-menu" style={subMenuCustomStyle}>
          {optionValues.map((subOption, index) => (
            <a href={subOption.url} key={index} style={aTagCustomStyle}>
              {subOption.name}
            </a>
          ))}
        </div>
      ) : (
        <></>
      )}
    </div>
  );
};
export default MenuOption;

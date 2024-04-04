import React, { useState, useRef } from "react";
import "./NavBar.scss";
import MenuOption from "./MenuOption";
const NavBar = ({ data, toggleMode_ }) => {
  const [parentState, setParentState] = useState(false);

  const toggleParentState = () => {
    setParentState((parentState) => !parentState);
  };
  return (
    <div
      className="navbar-main"
      onMouseEnter={toggleParentState}
      onMouseLeave={toggleParentState}
    >
      {data.map((option, index) => (
        <MenuOption
          key={index}
          id={index}  
          optionName={option.name}
          optionValues={option.values}
          parentState={parentState}
          setParentState={setParentState}
          test={toggleMode_}
        />
      ))}
    </div>
  );
};

export default NavBar;

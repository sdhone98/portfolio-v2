import React, { useState } from "react";
import "./NavBar.scss";
import MenuOption from "./MenuOption";
const NavBar = () => {
  const [parentState, setParentState] = useState(false);

  const data = [
    {
      name: "Option 1",
      values: [
        {
          name: "Sub Option 1",
          url: "#",
        },
        {
          name: "Sub Option 2",
          url: "#",
        },
        {
          name: "Sub Option 3",
          url: "#",
        },
        {
          name: "Sub Option 4",
          url: "#",
        },
        {
          name: "Sub Option 5",
          url: "#",
        }
      ],
    },

    {
      name: "Option 2",
      values: [
        {
          name: "Sub Option 1",
          url: "#",
        },
        {
          name: "Sub Option 2",
          url: "#",
        },
        {
          name: "Sub Option 3",
          url: "#",
        },
      ],
    },
    {
      name: "Option 3",
      values: [],
    },
  ];

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
          optionName={option.name}
          optionValues={option.values}
          parentState={parentState}
          setParentState={setParentState}
        />
      ))}
    </div>
  );
};

export default NavBar;

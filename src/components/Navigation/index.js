import React, { useState } from "react";

function Navigation(props) {
  // const [currentOption, setCurrentOption] = useState([])
  const [menuOptions] = useState([
    "About Me",
    "Portfolio",
    "Contact",
    "Resume",
  ]);
  return (
    <div>
      <ul className="nav-list">
        {menuOptions.map((option) => (
          <li key={option} className="options">
            {option}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Navigation;

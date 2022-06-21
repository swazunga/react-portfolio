import React, { useEffect } from "react";
import { capitalizeFirstLetter } from "../../utils/helpers";

function Header(props) {
  const {
    categories = [],
    setCurrentCategory,
    currentCategory,
    contactSelected,
    setContactSelected,
  } = props;
  useEffect(() => {
    document.title = capitalizeFirstLetter(currentCategory.name);
  }, [currentCategory]);
  return (
    <div>
      <h1>Michael Kendrick</h1>
      <nav>
        <ul>
          <li>
            <a href="#projects" onClick={() => setContactSelected(false)}>
              Projects
            </a>
          </li>
          <li className={`mx-2 ${contactSelected && "navActive"}`}>
            <span onClick={() => setContactSelected(true)}>Contact Me</span>
          </li>
          <a href="resume">Resume</a>
        </ul>
      </nav>
    </div>
  );
}

export default Header;

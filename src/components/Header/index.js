import React from "react";
import Navigation from "../Navigation";

function Header() {
  //   const [contactSelected, setContactSelected] = useState(false);

  return (
    <div>
      <h1 className="h1">Michael Kendrick</h1>
      <nav>
        <Navigation></Navigation>
      </nav>
    </div>
  );
}

export default Header;

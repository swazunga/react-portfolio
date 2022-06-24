import React from "react";
import Navigation from "../Navigation";

function Header(props) {
  return (
    <>
      <div>
        <h1 className="h1">Michael Kendrick</h1>
      </div>
      <Navigation
        currentPage={props.currentPage}
        handlePageChange={props.handlePageChange}
      />
    </>
  );
}

export default Header;

import React from "react";

function Footer() {
  return (
    <footer className="footer">
      <a href="http://github.com/swazunga">
        {" "}
        <img
          src="./github2.webp"
          alt="github"
          width="200"
          height="100"
        ></img>{" "}
      </a>

      <a href="https://www.linkedin.com/in/michaellkendrick/">
        <img src="./linkedin.png" alt="linkedIn" width="100" height="100"></img>
      </a>
      <a href="https://www.frontendmentor.io/profile/swazunga">
        <img src="./FrontendMentor.png" alt="frontend mentor"></img>
      </a>
    </footer>
  );
}

export default Footer;

import React from "react";

function Project(props) {
  return (
    <>
      <h1>{props.title}</h1>
      <img src={props.image} alt={props.title} />
      <br></br>
      <a href={props.githubLink}>github</a>
      <br></br>
      <a href={props.deployLink}>deployed site</a>
    </>
  );
}

export default Project;

import React from "react";

function Project(props) {
  return (
    <>
      <h1>{props.title}</h1>
      <img src={props.image} alt={props.title} />
      <a href={props.githubLink}>github</a>
      <a href={props.deployLink}>deploy site</a>
    </>
  );
}

export default Project;

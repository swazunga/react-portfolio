import React from "react";
import Project from "../../components/Project";

function Portfolio() {
  const projectInfo = [
    {
      title: "title 1",
      image: "./logo192.png",
      githubLink: "www.github.com",
      deployLink: "www.google.com",
    },
    {
      title: "title 2",
      image: "./logo512.png",
      githubLink: "www.stackoverflow.com",
      deployLink: "www.linkedin.com",
    },
    {
      title: "title 3",
      image: "./logo192.png",
      githubLink: "www.github.com",
      deployLink: "www.google.com",
    },
  ];
  return (
    <div>
      <h1>Portfolio</h1>
      {projectInfo.map((project, i) => (
        <Project
          title={project.title}
          image={project.image}
          githubLink={project.githubLink}
          deployLink={project.deployLink}
          key={project.title}
        />
      ))}
    </div>
  );
}

export default Portfolio;

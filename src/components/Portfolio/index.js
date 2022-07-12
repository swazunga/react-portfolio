import React from "react";
import Project from "../../components/Project";

function Portfolio() {
  const projectInfo = [
    {
      title: "Run Buddy",
      image: "./run-buddy.jpeg",
      githubLink: "https://github.com/swazunga/run-buddy",
      deployLink: "https://swazunga.github.io/run-buddy/",
    },
    {
      title: "Expense Tracker",
      image: "./ExpenseTracker.png",
      githubLink: "https://github.com/swazunga/symmetrical-bassoon",
      deployLink: "https://sleepy-forest-49846.herokuapp.com/",
    },
    {
      title: "Food Festival",
      image: "./FoodFestival.png",
      githubLink: "https://github.com/swazunga/food-festival",
      deployLink: "https://swazunga.github.io/food-festival/#",
    },
    {
      title: "Note Taker",
      image: "./NoteTaker.png",
      githubLink: "https://github.com/swazunga/miniature-eureka",
      deployLink: "https://fast-refuge-56054.herokuapp.com/",
    },
    {
      title: "Zoo Keepr",
      image: "./ZooKeepr.png",
      githubLink: "https://github.com/swazunga/zookeepr",
      deployLink: "https://evening-dawn-16655.herokuapp.com/",
    },
    {
      title: "Advice Generator",
      image: "./Advice.png",
      githubLink: "https://github.com/swazunga/advice-generator",
      deployLink: "https://swazunga.github.io/advice-generator/",
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

import React from 'react'
import "./Projectstyle.css";
import ProjectCard from "./ProjectCard.jsx"

const MiniProject = () => {
  const projects = [


    {
      id: 2,
      image: "https://picsum.photos/400/250?2",
      title: "About Tamil Nadu Dams",
      description:
        "An informative web app displaying details of dams with filtering features. Developed using React with dynamic data rendering and responsive UI.",
      languages: ["HTML", "CSS", "React"],
      link: "https://sk-boutique.vercel.app/"
    },
    {
      id: 3,
      image: "https://picsum.photos/400/250?3",
      title: "Voice to Text Converter",
      description:
        "A web app that converts speech into text in real time using browser APIs. Built with React, HTML, and CSS for a simple and interactive experience.",
      languages: ["HTML", "CSS", "React"],
      link: "https://flower-boutique-ecru.vercel.app/"
    }
  ];

  return (
    <div className="project-Container">
      <h3>Mini <span className='letter'>Projects</span></h3>

      <div className="project-grid">
        {projects.map((item) => (

          <ProjectCard key={item.id} item={item} />
        ))}
      </div>
    </div>
  );
}

export default MiniProject

import React from "react";
import "./Projectstyle.css";
import ProjectCard from "./ProjectCard.jsx"
import Fish from '../Images/fish.jpg'
import Saree from '../Images/saree.jpg'
import Floral from '../Images/floral.jpg'
import Library from '../Images/library.jpg'
import Smartcity from "../Images/smartcity.jpg"
import recipe from "../Images/recipe.jpg"


const Project = () => {
  const projects = [
    {
      id: 1,
      image: Smartcity,
      title: "Smart City Issues Reporting System",
      description: "Built a Smart City Issues Management System with Citizen, Admin, and Manager roles for reporting and managing city complaints using the MERN stack.",
      languages: ["React.js", "Node.js", "Express.js", "MongoDB", "CSS"],
      link: "https://smart-city-issues-managements.onrender.com/"
    },
    {
      id: 2,
      image: recipe,
      title: "Recipe Finder",
      description: "Developed a Recipe Finder web application using React that allows users to search and explore different recipes with detailed cooking information.",
      languages: ["React.js", "CSS"],
      link: "https://recipe-finder-project-plum.vercel.app/"
    },
    {
      id: 3,
      image: Library,
      title: "Library Management",
      description:
        "A dynamic library management system is to add books and students, manage borrowing, track issued books, and show remaining stock in simple interface.",
      languages: ["HTML", "CSS", "JQuery"],
      link: "https://library-management-b6wo.vercel.app/"
    },
    {
      id: 4,
      image: Floral,
      title: "Floral Fantasy",
      description: "A creative floral-themed website with visually appealing design and animations. Focused on responsive layout and engaging user interface using HTML, CSS, and JavaScript.",
      languages: ["HTML", "CSS", "JavaScript"],
      link: "https://flower-boutique-ecru.vercel.app/"
    },
    {
      id: 5,
      image: Saree,
      title: "SK Saree Boutique",
      description: "A modern boutique website displaying saree collections with an elegant UI. Designed responsive product sections using HTML, CSS, and Bootstrap.",
      languages: ["HTML", "CSS", "Bootstrap"],
      link: "https://sk-boutique.vercel.app/"
    },
    {
      id: 6,
      image: Fish,
      title: "Fish Aquarium",
      description: "A responsive website showcasing different fish species with a clean and interactive design. Built using HTML and CSS with smooth animations and mobile- friendly layout.",
      languages: ["HTML", "CSS"],
      link: "https://fish-aquarium-lovat.vercel.app/"
    }
  ];

  return (
    <div className="project-Container">
      <h3>Projects</h3>

      <div className="project-grid">
        {projects.map((item) => (
          <ProjectCard key={item.id} item={item} />
        ))}
      </div>
    </div>
  );
};

export default Project;
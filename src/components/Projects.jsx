import React, { useState } from "react";
import assetVerseImg from "../assets/assetVerse.jpeg";
import zipShiftImg from "../assets/zipShift.jpeg";
import financialIMG from "../assets/financialFlow.jpeg";

const Projects = () => {
  const [activeProject, setActiveProject] = useState(null);

  const projects = [
    {
      title: "AssetVerse",
      description:
        "AssetVerse is an asset management project: a MERN Stack application for asset management. It features role-based access, secure authentication, a modern and responsive UI, and smooth user interactions. Built with React, Node.js, MongoDB, Express, and Firebase for authentication and database management.",
      image: assetVerseImg,
      tags: [
        "React",
        "Node.js",
        "MongoDB",
        "Express",
        "Firebase",
        "Tailwind CSS",
      ],
      live: "https://asset-verse-track.web.app/",
      github: "https://github.com/mehadhossen123/Asset-verse-client",
    },
    {
      title: "ZipShift",
      description:
        "Zip Shift is a parcel delivery management system with role-based access, real-time tracking, and secure authentication. Built with React and Firebase, it offers a clean UI and smooth user experience for managing deliveries efficiently.",
      image: zipShiftImg,
      tags: ["React", "Firebase", "Tailwind CSS"],
      live: "https://zap-shift-2d7e7.web.app/",
      github: "https://github.com/mehadhossen123/Zip-shift--client",
    },
    {
      title: "Financial Flow",
      description:
        "Engineered a full-stack application for real-time financial data visualization using interactive charts and graphs to enable users to monitor and compare total income vs. expenses at a glance.",
      image: financialIMG, // used imported image instead of URL
      tags: [
        "React",
        "Node.js",
        "MongoDB",
        "Express",
        "Firebase",
        "Tailwind CSS",
      ],
      live: "https://assignment10-3e0fa.web.app/",
      github: "https://github.com/mehadhossen123/FinanceFlow-client",
    },
  ];

  return (
    <div id="projects" className="container mx-auto px-4 py-20">
      {/* Header */}
      <div className="text-center mb-14">
        <h1 className="text-4xl font-bold mb-3">Projects</h1>
        <p className="text-gray-400 max-w-2xl mx-auto text-sm">
          A showcase of my projects demonstrating skills and experience in
          modern web technologies.
        </p>
      </div>

      {/* Projects Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {projects.map((project, index) => (
          <div
            key={index}
            className="bg-white/5 border border-white/10 rounded-lg p-4 hover:border-primary/50 hover:shadow-lg transition"
          >
            {/* Image */}
            <div className="overflow-hidden rounded-md mb-3">
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-36 object-cover cursor-pointer hover:scale-105 transition"
                onClick={() => setActiveProject(project)}
              />
            </div>

            {/* Title */}
            <h2 className="text-lg font-semibold mb-1">{project.title}</h2>

            {/* Description */}
            <p className="text-sm text-gray-400 mb-3 line-clamp-3">
              {project.description}
            </p>

            {/* Tags */}
            <div className="flex flex-wrap gap-1.5 mb-3">
              {project.tags.map((tag) => (
                <span
                  key={tag}
                  className="text-[11px] px-2 py-0.5 bg-primary/10 text-primary rounded-full"
                >
                  {tag}
                </span>
              ))}
            </div>

            {/* Buttons */}
            <div className="flex gap-2">
              <a
                href={project.live}
                target="_blank"
                rel="noreferrer"
                className="flex-1 text-center text-xs py-1.5 bg-primary text-white rounded-md"
              >
                Live
              </a>
              <a
                href={project.github}
                target="_blank"
                rel="noreferrer"
                className="flex-1 text-center text-xs py-1.5 border border-primary text-primary rounded-md"
              >
                GitHub
              </a>
            </div>
          </div>
        ))}
      </div>

      {/* Modal */}
      {activeProject && (
        <div
          className="fixed inset-0 bg-black/70 flex items-center justify-center z-50"
          onClick={() => setActiveProject(null)}
        >
          <div
            className="bg-gray-900 p-6 rounded-xl max-w-3xl w-full"
            onClick={(e) => e.stopPropagation()}
          >
            <img
              src={activeProject.image}
              alt={activeProject.title}
              className="rounded-lg mb-4"
            />
            <h2 className="text-2xl font-bold mb-2">{activeProject.title}</h2>
            <p className="text-gray-400">{activeProject.description}</p>
          </div>
        </div>
      )}
    </div>
  );
};

export default Projects;

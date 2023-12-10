import React from 'react';
import Project from '../Project';

export default function Portfolio() {

  const projects = [
    {
      title: 'Look for a Book',
      description: 'A Book Search App',
      imageUrl: '../../../assets/images/screenshotOne.png',
      link: 'https://look-for-a-book.onrender.com/',
      github: 'https://github.com/Kiararj/look-for-a-book'
    },
  ];

    return (
      <div className="portfolio-section">
      <h2>Portfolio</h2>
      <div className="projects">
        {/* Map through projects and render Project component for each */}
        {projects.map((project, index) => (
          <Project
            key={index}
            title={project.title}
            imageUrl={project.imageUrl}
            description={project.description}
            link={project.link}
            github={project.github}
          />
        ))}
      </div>
    </div>
    );
  }
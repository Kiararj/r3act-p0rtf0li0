import React from 'react';

const Project = ({ title, description, imageUrl, link, github }) => {
  return (
    <div className="project">
      <h3>{title}</h3>
      <img src={imageUrl} alt={title} />
      <p>{description}</p>
      <a href={github} target="_blank" >GitHub Repo</a>
      <a href={link} target="_blank" >Link</a>
    </div>
  );
};

export default Project;
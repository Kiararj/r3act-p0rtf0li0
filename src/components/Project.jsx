import React from 'react';

const Project = ({ title, description, imageUrl, link, github }) => {
  const projectStyle = {
    width: '80%',
    padding: '20px',
    borderRadius: '15px',
    backgroundColor: '#ffffff',
    margin: '20px auto',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center'
  }
  
  const imageStyle = {
    width: '100%',
    height: '200px',
    objectFit: 'cover',
    borderRadius: '10px'
  }

  return (
    <div style={projectStyle}>
      <h3>{title}</h3>
      <img src={imageUrl} alt={title} style={imageStyle} />
      <p>{description}</p>
      <a href={github} target="_blank" >GitHub Repo</a>
      <a href={link} target="_blank" >Link</a>
    </div>
  );
};

export default Project;
import React from 'react';
import Project from '../Project';

export default function Portfolio() {
  const portfolioStyle = {
    backgroundColor: '#F5EFFF', 
    padding: '25px',
  }

  const projectsStyle = {
    display: 'flex',
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between'
  }

  const projects = [
    {
      title: 'Look for a Book',
      description: 'A full stack book search application built with MERN stack, styled with Bootstrap',
      imageUrl: '../../../assets/images/screenshotOne.png',
      link: 'https://look-for-a-book.onrender.com/',
      github: 'https://github.com/Kiararj/look-for-a-book'
    },
    {
      title: 'VenueViewer',
      description: 'A full stack application built with JavaScript, MySQL, Node.js, styled with Tailwind CSS',
      imageUrl: '../../../assets/images/screenshotTwo.png',
      link: 'https://venue-viewer-team1-69164e361419.herokuapp.com/login',
      github: 'https://github.com/ChaseOstien/Venue-Viewer'
    },
    {
      title: 'Just.Another.Text.Editor',
      description: 'Text Editor built using PWA principles',
      imageUrl: '../../../assets/images/screenshotThree.png',
      link: 'https://shielded-cove-52935-433337f55b6b.herokuapp.com/',
      github: 'https://github.com/Kiararj/text-editor'
    },
    {
      title: 'Social Network API',
      description: 'An API built with Express and MongoDB',
      imageUrl: '../../../assets/images/screenshotFour.png',
      link: 'https://drive.google.com/file/d/1KhK1Qh83OAbNmQo-OrvjyZ689hzwT--p/view',
      github: 'https://github.com/Kiararj/social-network-api'
    },
    {
      title: 'eCommerce-back-end',
      description: 'Back end for an ecommerce site using Express, Node.js, MySQL',
      imageUrl: '../../../assets/images/screenshotFive.png',
      link: 'https://drive.google.com/file/d/1FxyX6BAz5DJR-f7t4x1jXN_ZWEXA9rhB/view',
      github: 'https://github.com/Kiararj/look-for-a-book'
    },
    {
      title: 'Workforce-Navigator',
      description: 'A CMS employee tracker built using SQL',
      imageUrl: '../../../assets/images/screenshotSix.png',
      link: 'https://drive.google.com/file/d/1HTnl60bV3Ij7yozWs6mm43mtYE0ahCnJ/view',
      github: 'https://github.com/Kiararj/workforce-navigator'
    },
  ];

    return (
      <div style={portfolioStyle}>
      <div style={projectsStyle}>
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
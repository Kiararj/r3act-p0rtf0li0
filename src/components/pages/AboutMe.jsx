import React, { useState, useEffect } from 'react';

export default function AboutMe() {
const [windowWidth, setWindowWidth] = useState(window.innerWidth);

useEffect(() => {
 const handleResize = () => {
   setWindowWidth(window.innerWidth);
 };

 window.addEventListener('resize', handleResize);

 // Cleanup function to remove the event listener
 return () => {
   window.removeEventListener('resize', handleResize);
 };
}, []);
  
const smallScreenStyles = {
  aboutMeStyle: {
    backgroundColor: '#F5EFFF', 
    padding: '15px',
    display: 'block',
    height: 'auto'
  },
  imageStyle: {
    width: '300px',
    height: '300px',
    borderRadius: '50%'
  },
  paragraphStyle: {
    display: 'block',
    marginLeft: '0px',
  }
 };
 
 const mediumScreenStyles = {
  aboutMeStyle: {
    backgroundColor: '#F5EFFF', 
    padding: '15px',
    display: 'block',
    height: 'auto'
  },
  imageStyle: {
    width: '300px',
    height: '300px',
    borderRadius: '50%'
  },
  paragraphStyle: {
    display: 'block',
    marginLeft: '0px',
  }
 };
 
 const largeScreenStyles = {
  aboutMeStyle: {
    backgroundColor: '#F5EFFF', 
    padding: '25px',
    display: 'flex',
    justifyContent: 'space-between',
    height: '575px'
  },

  imageStyle: {
    width: '450px',
    height: '450px',
    borderRadius: '50%'
  },

  paragraphStyle: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    marginLeft: '20px',
  }
 };

 const styles = windowWidth < 600 
? smallScreenStyles 
: windowWidth < 900 
  ? mediumScreenStyles 
  : largeScreenStyles;

    return (
      <div style={styles}>
      <div style={styles.aboutMeStyle}>
        <img src='../../../assets/images/profile2.png' style={styles.imageStyle}></img>
        <p style={styles.paragraphStyle}>
        Hi, I'm Kiara, a passionate Full Stack Web Developer based in Austin, Texas. 
        Fresh out of the UT Full Stack Coding Program, I'm geared up to dive into the world of web development armed with a wealth of newly acquired skills. 
        As a full stack developer, I've explored the ever-changing concepts of front and back-end development. 
        I have a solid understanding of HTML, CSS, JavaScript along with the React framework in front-end development.
        For back-end development, I have gained knowledge in Express, Node.js, and MongoDB.
        I thrive on problem-solving and adore turning concepts into reality.
        I'm devoted to creating web applications that prioritize user needs and are streamlined for optimal performance.
        When I'm not deep in lines of code, you'll find me exploring the vibrant energy of Austin through attending live music and running on trails. In my spare time, I enjoy staying active by lifting weights and playing video games. My goal as a budding developer is to keep honing my skills by crafting new projects and channeling that expertise into future professional endeavors.
        I'm excited to keep learning and growing. Reach out—I'd love to connect and explore possibilities together! Welcome to my journey in web development!
      </p>
      </div>
      </div>
    );
  }
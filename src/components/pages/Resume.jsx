import React, { useState, useEffect } from 'react';
import { FaHtml5 } from 'react-icons/fa';
import { FaCss3Alt } from 'react-icons/fa';
import { IoLogoJavascript } from 'react-icons/io5';
import { FaBootstrap } from 'react-icons/fa';
import { FaReact } from 'react-icons/fa';
import { FaNodeJs } from 'react-icons/fa';
import { SiExpress } from 'react-icons/si';
import { DiMongodb } from 'react-icons/di';
import { SiApollographql } from 'react-icons/si';
import { GrMysql } from 'react-icons/gr';
import { FaGitAlt } from 'react-icons/fa6';
import { FaGithub } from 'react-icons/fa';
import { SiInsomnia } from 'react-icons/si';

export default function Resume() {

  const resumeStyles = {
    smallScreen: {
      resumeStyle: {
        backgroundColor: '#F5EFFF', 
        padding: '15px',
        display: 'block',
        justifyContent: 'center',
        height: 'auto'
      },
      sectionStyle: {
        backgroundColor: 'white',
        padding: '10px',
        display: 'block',
        alignItems: 'center',
        width: '100%',
        margin: '10px 0'
      },
      listStyle: {
        listStyleType: 'none',
        padding: '0',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center'
      },
      listItemStyle: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        marginBottom: '10px',
      }
    },
    mediumScreen: {
      resumeStyle: {
        backgroundColor: '#F5EFFF', 
        padding: '20px',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between',
        height: 'auto'
      },
      sectionStyle: {
        backgroundColor: 'white',
        padding: '15px',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        width: '80%',
        margin: '10px auto'
      },
      listStyle: {
        listStyleType: 'none',
        padding: '0',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center'
      },
      listItemStyle: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        marginBottom: '10px',
      }
    },
    largeScreen: {
      resumeStyle: {
        backgroundColor: '#F5EFFF', 
        padding: '25px',
        display: 'flex',
        justifyContent: 'space-between',
        height: '575px'
      },
      sectionStyle: {
        backgroundColor: 'white',
        padding: '20px',
        borderRadius: '10px',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        width: '30%',
        margin: '0 10px'
      },
      listStyle: {
        listStyleType: 'none',
        padding: '0',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center'
      },
      listItemStyle: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        marginBottom: '10px',
      }
    }
  };
  
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

useEffect(() => {
  const handleResize = () => {
    setWindowWidth(window.innerWidth);
  };

  window.addEventListener('resize', handleResize);

  return () => {
    window.removeEventListener('resize', handleResize);
  };
}, []);

const styles = windowWidth < 600 
  ? resumeStyles.smallScreen 
  : windowWidth < 900 
    ? resumeStyles.mediumScreen 
    : resumeStyles.largeScreen;

    return (
      <div style={styles.resumeStyle}>
      <div style={styles.sectionStyle}>
        <h3>Front End</h3>
        <ul style={styles.listStyle}>
        <li style={styles.listItemStyle}>HTML <FaHtml5 /></li>
        <li style={styles.listItemStyle}>CSS <FaCss3Alt /></li>
        <li style={styles.listItemStyle}>JavaScript <IoLogoJavascript /></li>
        <li style={styles.listItemStyle}>Bootstrap <FaBootstrap /></li>
        <li style={styles.listItemStyle}>React <FaReact /></li>
        </ul>
      </div>
      <div style={styles.sectionStyle}>
        <h3>Back End</h3>
        <ul style={styles.listStyle}>
          <li style={styles.listItemStyle}>Node <FaNodeJs /></li>
          <li style={styles.listItemStyle}>Express <SiExpress /></li>
          <li style={styles.listItemStyle}>MongoDB <DiMongodb /></li>
          <li style={styles.listItemStyle}>Apollo GraphQL <SiApollographql /></li>
          <li style={styles.listItemStyle}>MySQL <GrMysql /></li>
        </ul>
      </div>
      <div style={styles.sectionStyle}>
        <h3>Other Tools</h3>
        <ul style={styles.listStyle}>
          <li style={styles.listItemStyle}>Git <FaGitAlt /></li>
          <li style={styles.listItemStyle}>GitHub <FaGithub /></li>
          <li style={styles.listItemStyle}>Insomnia <SiInsomnia /></li>
        </ul>
      </div>
      <div style={styles.sectionStyle}>
      <h2>Resume</h2>
      Download resume<a href= '/assets/Resume.pdf'>here</a>.
      </div>
    </div>
    );
  }
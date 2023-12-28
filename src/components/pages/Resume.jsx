import { FaHtml5 } from "react-icons/fa";
import { FaCss3Alt } from "react-icons/fa";
import { IoLogoJavascript } from "react-icons/io5";
import { FaBootstrap } from "react-icons/fa";
import { FaReact } from "react-icons/fa";
import { FaNodeJs } from "react-icons/fa";
import { SiExpress } from "react-icons/si";
import { DiMongodb } from "react-icons/di";
import { SiApollographql } from "react-icons/si";
import { GrMysql } from "react-icons/gr";
import { FaGitAlt } from "react-icons/fa6";
import { FaGithub } from "react-icons/fa";
import { SiInsomnia } from "react-icons/si";

export default function Resume() {

  const resumeStyle = {
    backgroundColor: '#F5EFFF', 
    padding: '25px',
    display: 'flex',
    justifyContent: 'space-between'
  }
  
  const sectionStyle = {
    backgroundColor: 'white',
    padding: '20px',
    borderRadius: '10px',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    width: '30%',
    margin: '0 10px'
  }
  
  const listStyle = {
    listStyleType: 'none',
    padding: '0',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center'
  }
  
  const listItemStyle = {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: '10px'
  }

    return (
      <div style={resumeStyle}>
      <div style={sectionStyle}>
        <h3>Front End</h3>
        <ul style={listStyle}>
        <li style={listItemStyle}>HTML <FaHtml5 /></li>
        <li style={listItemStyle}>CSS <FaCss3Alt /></li>
        <li style={listItemStyle}>JavaScript <IoLogoJavascript /></li>
        <li style={listItemStyle}>Bootstrap <FaBootstrap /></li>
        <li style={listItemStyle}>React <FaReact /></li>
        </ul>
      </div>
      <div style={sectionStyle}>
        <h3>Back End</h3>
        <ul style={listStyle}>
          <li style={listItemStyle}>Node <FaNodeJs /></li>
          <li style={listItemStyle}>Express <SiExpress /></li>
          <li style={listItemStyle}>MongoDB <DiMongodb /></li>
          <li style={listItemStyle}>Apollo GraphQL <SiApollographql /></li>
          <li style={listItemStyle}>MySQL <GrMysql /></li>
        </ul>
      </div>
      <div style={sectionStyle}>
        <h3>Other Tools</h3>
        <ul style={listStyle}>
          <li style={listItemStyle}>Git <FaGitAlt /></li>
          <li style={listItemStyle}>GitHub <FaGithub /></li>
          <li style={listItemStyle}>Insomnia <SiInsomnia /></li>
        </ul>
      </div>
      <div style={sectionStyle}>
      <h2>Resume</h2>
      Download resume<a href= "#">here</a>.
      </div>
    </div>
    );
  }
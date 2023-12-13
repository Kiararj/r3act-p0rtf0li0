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
    return (
      <div>
        <h1>Resume</h1>
        <h2>Skills</h2>
        <h3>Front End</h3>
        <ul>
        <li>HTML <FaHtml5 /></li>
        <li>CSS <FaCss3Alt /></li>
        <li>JavaScript <IoLogoJavascript /></li>
        <li>Bootstrap <FaBootstrap /></li>
        <li>React <FaReact /></li>
        </ul>
        <h3>Back End</h3>
        <ul>
          <li>Node <FaNodeJs /></li>
          <li>Express <SiExpress /></li>
          <li>MongoDB <DiMongodb /></li>
          <li>Apollo GraphQL <SiApollographql /></li>
          <li>MySQL <GrMysql /></li>
        </ul>
        <h3>Other Tools</h3>
        <ul>
          <li>Git <FaGitAlt /></li>
          <li>GitHub <FaGithub /></li>
          <li>Insomnia <SiInsomnia /></li>
        </ul>
      </div>
    );
  }
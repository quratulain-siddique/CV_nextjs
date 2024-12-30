"use client";
import { useState } from 'react';

import About from "@/components/about";
import Experience from '@/components/experience';
import Certification from '@/components/certification';
import Education from '@/components/education';
import Projects from '@/components/projects';
import Skills from '@/components/skills';

import Image from "next/image";

export default function Home() {
  function editIdNumber(idNumber) {
    let sectionId;
    switch (idNumber) {
      case 1:
        sectionId = "aboutSection";
        setIsHighlightedCertification(false);
        setIsHighlightedEducation(false);
        setIsHighlightedExperience(false);
        setIsHighlightedProjects(false);
        setIsHighlightedSkills(false);
        handleAboutClick();
        break;
      case 2:

      sectionId = "experienceSection";
        setIsHighlightedAbout(false);
        setIsHighlightedCertification(false);
        setIsHighlightedEducation(false);
        setIsHighlightedProjects(false);
        setIsHighlightedSkills(false);
        handleExperienceClick();
        break;
      case 3:

      sectionId = "projectsSection";
        setIsHighlightedAbout(false);
        setIsHighlightedCertification(false);
        setIsHighlightedEducation(false);
        setIsHighlightedExperience(false);
        setIsHighlightedSkills(false);
        handleProjectsClick();
        break;
      case 4:
        sectionId = "skillsSection";
        setIsHighlightedAbout(false);
        setIsHighlightedCertification(false);
        setIsHighlightedEducation(false);
        setIsHighlightedExperience(false);
        setIsHighlightedProjects(false);
        handleSkillsClick();
        break;
      case 5:
        sectionId = "certificationSection";
        setIsHighlightedAbout(false);
        setIsHighlightedEducation(false);
        setIsHighlightedExperience(false);
        setIsHighlightedProjects(false);
        setIsHighlightedSkills(false);
        handleCertificationClick();
        break;
      case 6:
        sectionId = "educationSection";
        setIsHighlightedAbout(false);
        setIsHighlightedCertification(false);
        setIsHighlightedExperience(false);
        setIsHighlightedProjects(false);
        setIsHighlightedSkills(false);
        handleEducationClick();
        break;
      default:
        console.log("Default: Value is not between 1 and 6");
    }    
    // Scroll the element into view
    const sectionElement = document.getElementById(sectionId);
    if (sectionElement) {
      sectionElement.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  }
  const [isHighlightedAbout, setIsHighlightedAbout] = useState(false);
  const handleAboutClick = () => {
    setIsHighlightedAbout(!isHighlightedAbout);
  };
  
  const [isHighlightedExperience, setIsHighlightedExperience] = useState(false);
  const handleExperienceClick = () => {
    setIsHighlightedExperience(!isHighlightedExperience);
  };

  const [isHighlightedCertification, setIsHighlightedCertification] = useState(false);
  const handleCertificationClick = () => {
    setIsHighlightedCertification(!isHighlightedCertification);
  };

  const [isHighlightedEducation, setIsHighlightedEducation] = useState(false);
  const handleEducationClick = () => {
    setIsHighlightedEducation(!isHighlightedEducation);
  };

  const [isHighlightedProjects, setIsHighlightedProjects] = useState(false);
  const handleProjectsClick = () => {
    setIsHighlightedProjects(!isHighlightedProjects);
  };

  const [isHighlightedSkills, setIsHighlightedSkills] = useState(false);
  const handleSkillsClick = () => {
    setIsHighlightedSkills(!isHighlightedSkills);
  };

  

  return (<>
  <div className="container">

  <div className="leftColumn col-lg-6 col-sm-12">
  <div className="containerHeading">
  <div className="box box1">&lt;/&gt;</div>
  <div className="box box2">Qurat Ul Ain Siddique</div>
  <div className="box box3">Web Developer Intern</div>

</div>

<div>
  <p>I strive to create clean, user-friendly digital experiences that work seamlessly across the web.</p>
</div>

<div className="labelDiv">
  <label htmlFor="aboutSection" onClick={() => editIdNumber(1)} className={isHighlightedAbout ? 'highlightedDiv' : 'notHighlightedDiv' } >------ About</label><br/>
  <label htmlFor="experienceSection" onClick={() => editIdNumber(2)} className={isHighlightedExperience ? 'highlightedDiv' : 'notHighlightedDiv' }>------ Experience</label><br/>
  <label htmlFor="projectsSection" onClick={() => editIdNumber(3)} className={isHighlightedProjects ? 'highlightedDiv' : 'notHighlightedDiv' }>------ Projects</label><br/>
  <label htmlFor="skillsSection" onClick={() => editIdNumber(4)} className={isHighlightedSkills ? 'highlightedDiv' : 'notHighlightedDiv' }>------ Skills</label><br/>
  <label htmlFor="certificationSection" onClick={() => editIdNumber(5)} className={isHighlightedCertification ? 'highlightedDiv' : 'notHighlightedDiv' }>------ Certification</label><br/>
  <label htmlFor="educationSection" onClick={() => editIdNumber(6)} className={isHighlightedEducation ? 'highlightedDiv' : 'notHighlightedDiv' }>------ Education</label><br/>
</div>
<center>
<div className="navDiv">
 <a href="https://github.com/quratulain-siddique" target="_blank"><Image src="/githubIcon.png" alt="github icon" height={50} width={50} priority className="navIcons"></Image></a>
 <a href="https://www.linkedin.com/in/quratulain-siddique/" target="_blank"><Image src="/linkedlnIcon.png" alt="linkedln icon" height={50} width={50} priority className="navIcons"></Image></a>
 <a href="https://leetcode.com/u/quratulain-siddique/" target="_blank"> <Image src="/leetcodeIcon.png" alt="leetcode icon" height={50} width={50} priority className="navIcons"></Image></a>
 <a href="mailto:quratulainsiddique12@example.com" ><Image src="/emailIcon.png" alt="email me at icon" height={50} width={50} priority className="navIcons"></Image></a>
 <a href="Qurat Ul Ain Siddique.pdf" download="CV" ><Image src="/downloadIcon.png" alt="download CV icon" height={50} width={50} priority className="navIcons"></Image></a>
</div>
</center>
  </div>
  <div className="rightColumn col-lg-6 col-sm-12"> 
 <div className="headingDiv" id="aboutSection" style={{border: isHighlightedAbout ? '2px solid silver' : '2px solid transparent', transition: 'border 0.5s ease' }}>
  <About/>
 </div>
 <div className="headingDiv" id="experienceSection" style={{border: isHighlightedExperience ? '2px solid silver' : '2px solid transparent', transition: 'border 0.5s ease' }} >
  <Experience/>
 </div>

 <div className="headingDiv" id="projectsSection" style={{border: isHighlightedProjects ? '2px solid silver' : '2px solid transparent', transition: 'border 0.5s ease' }} >
  <Projects/>
 </div>
 <div className="headingDiv" id="skillsSection" style={{border: isHighlightedSkills ? '2px solid silver' : '2px solid transparent', transition: 'border 0.5s ease' }} >
  <Skills/>
 </div>
 <div className="headingDiv" id="certificationSection" style={{border: isHighlightedCertification ? '2px solid silver' : '2px solid transparent', transition: 'border 0.5s ease' }} >
  <Certification/>
 </div>
 <div className="headingDiv" id="educationSection" style={{border: isHighlightedEducation ? '2px solid silver' : '2px solid transparent', transition: 'border 0.5s ease' }} >
  <Education/>
 </div>

  </div>
  </div>
  
  </>
    
  );
}

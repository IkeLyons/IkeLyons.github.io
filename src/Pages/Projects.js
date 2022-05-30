import { Parallax } from "react-scroll-parallax";
import "./Projects.css";

function Projects() {
  return (
    <div className="projectsRoot">
      <Parallax className="project" translateX={[-100, 0]} shouldAlwaysCompleteAnimation={true}>
        <a className="projectVisual" href="https://www.textronsystems.com/products/a2pats-family-products">
          <img src="/a2pats.png" alt="A2PATS Logo"></img>
        </a>
        <p className="projectDescription">
          During the spring of 2021 my project was textron's a2pats electromagnetic warfare simulation software. there i implemented a distributed simulation
          standard (dis) across the full-stack using c# and wpf .net. This allowed our simultion software to seemlessly integrate with other (often proprietary)
          warfare simulation software. I also interfaced with Boeing Company to troubleshoot issues and ensure end-user satisfaction. Click the logo to view the
          website!
        </p>
      </Parallax>
      <Parallax className="project" translateX={[100, 0]} shouldAlwaysCompleteAnimation={true}>
        <p className="projectDescription">
          During the fall of 2020 I was a project lead for a Rensselaer Center for Open Source project called yacs. This website is our schools de-facto course
          scheduler, and during my tenure we finished out a full re-design and modernization of the site in vue.js and flask; creating the site you see today.
          Click the logo to view the website!
        </p>
        <a className="projectVisual" href="https://yacs.cs.rpi.edu">
          <img src="/yacstext.png" alt="YACS Logo"></img>
        </a>
      </Parallax>
      <Parallax className="project" translateX={[-100, 0]} shouldAlwaysCompleteAnimation={true}>
        <a className="projectVisual" href="https://www.joinacsia.org">
          <img src="/ACSIA.png" alt="ACSIA Logo"></img>
        </a>
        <p className="projectDescription">
          I currently volunteer for acsia where I aid research efforts, manage the website, and support other researchers through infrastructure creation.
          Founder Zach Hadley calls me the "data og" due to my efforts in dataset collection/web scraping as well as data visualization across multiple research
          projects. I'm also looking at using GitHub's social impact initiative to help other non-profits in their work and to increase the public ability to
          interact with acsia's research. Click the logo to view the website!
        </p>
      </Parallax>
    </div>
  );
}

export default Projects;
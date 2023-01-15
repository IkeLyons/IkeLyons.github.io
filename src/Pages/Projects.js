import { Parallax } from "react-scroll-parallax";
import "./Projects.css";
import { useState, useEffect } from "react";

const ease = "easeOutCirc";

function Projects() {
  const [matches, setMatches] = useState(window.matchMedia("(max-width: 450px)").matches);
  const scrollStart = window.innerHeight;
  const scrollDivisionUnit = (window.innerHeight / 3) * 0.9;
  const scrollEnd = scrollStart + scrollDivisionUnit;

  useEffect(() => {
    const handler = (e) => setMatches(e.matches);
    window.matchMedia("(max-width: 450px)").addEventListener("change", handler);
  });

  return (
    <div className="projectsRoot">
      <Parallax
        className="project"
        translateX={matches ? [0, 0] : [-100, 0]}
        rotateY={matches ? [0, 360] : [0, 0]}
        shouldAlwaysCompleteAnimation={true}
        easing={ease}
        startScroll={matches ? null : scrollStart}
        endScroll={matches ? null : scrollEnd}
      >
        <a className="projectVisual" href="https://www.textronsystems.com/products/a2pats-family-products">
          <img src="/a2pats.png" alt="A2PATS Logo"></img>
        </a>
        <p className="projectDescription">
          During the spring of 2021 my project was textron's a2pats electromagnetic warfare simulation software. there i implemented a distributed simulation
          standard (dis) across the full-stack using c# and wpf .net. This allowed our simultion software to seemlessly integrate with other (often proprietary)
          warfare simulation software. I also interfaced Boeing engineers to troubleshoot issues and ensure end-user satisfaction. Click the logo to view the
          website!
        </p>
      </Parallax>
      <Parallax
        className="project middleProject"
        translateX={matches ? [0, 0] : [100, 0]}
        rotateX={matches ? [0, 360] : [0, 0]}
        shouldAlwaysCompleteAnimation={true}
        easing={ease}
        startScroll={matches ? null : scrollStart + scrollDivisionUnit}
        endScroll={matches ? null : scrollEnd + scrollDivisionUnit}
      >
        <p className="projectDescription">
          During the fall of 2020 I was a project lead for yacs; Rensselaer Polytechnic Institute's de-facto course scheduler. yacs was created under the
          Rensselaer Center for Open Source and during my tenure we finished out a full re-design and modernization of the site in vue.js and flask; creating
          the site you see today. Click the logo to view the website!
        </p>
        <a className="projectVisual" href="https://yacs.cs.rpi.edu">
          <img src={matches ? "/yacs.png" : "/yacstext.png"} alt="YACS Logo"></img>
        </a>
      </Parallax>
      <Parallax
        className="project"
        translateX={matches ? [0, 0] : [-100, 0]}
        rotateZ={matches ? [0, 360] : [0, 0]}
        shouldAlwaysCompleteAnimation={true}
        easing={ease}
        startScroll={matches ? null : scrollStart + 2 * scrollDivisionUnit}
        endScroll={matches ? null : scrollEnd + 2 * scrollDivisionUnit}
      >
        <a className="projectVisual" href="https://www.joinacsia.org">
          <img src="/ACSIA.png" alt="ACSIA Logo"></img>
        </a>
        <p className="projectDescription">
          I currently volunteer for acsia where I aid research efforts, manage the website, and support other researchers through infrastructure creation.
          Founder Zach Hadley calls me the "data o.g." due to my efforts in dataset collection/web scraping as well as data visualization across multiple
          research projects. I'm also looking at using GitHub's social impact initiative to help other non-profits in their work and to increase the public
          ability to interact with acsia's research. Click the logo to view our website!
        </p>
      </Parallax>
    </div>
  );
}

export default Projects;

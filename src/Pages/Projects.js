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
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
          quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse
        </p>
      </Parallax>
      <Parallax className="project" translateX={[100, 0]} shouldAlwaysCompleteAnimation={true}>
        <p className="projectDescription">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Condimentum id venenatis a
          condimentum vitae sapien pellentesque habitant. Blandit turpis cursus in hac habitasse platea dictumst quisque sagittis.
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
          Elit sed vulputate mi sit amet mauris commodo quis imperdiet. Cursus euismod quis viverra nibh cras. Vitae nunc sed velit dignissim sodales ut eu sem
          integer. A scelerisque purus semper eget. Dapibus ultrices in iaculis nunc sed augue lacus. Vitae congue eu consequat ac felis. Nisl nisi scelerisque
          eu ultrices vitae auctor eu augue ut. Non nisi est sit amet facilisis magna. Vel pretium lectus quam id. Quam lacus suspendisse faucibus interdum
          posuere lorem ipsum.
        </p>
      </Parallax>
    </div>
  );
}

export default Projects;

import { Parallax } from "react-scroll-parallax";
import "./Landing.css";

function Landing() {
  return (
    <div className="root">
      <div className="nameHeader">
        <span className="text">Ike Lyons</span>
      </div>
      <div className="container">
        <Parallax translateY={[100, -100]} translateX={[-100, 100]} className="box">
          <div className="blackBox"></div>
        </Parallax>
        <Parallax translateY={[-70, 70]} translateX={[-130, 130]} className="name">
          <span className="text">Ike Lyons</span>
        </Parallax>
      </div>
    </div>
  );
}

export default Landing;

import { Parallax } from "react-scroll-parallax";
import "./Landing.css";

function Landing() {
  return (
    <div className="container">
      <Parallax translateY={[100, -100]} translateX={[-100, 100]} className="lower">
        <div className="blackBox">test</div>
      </Parallax>
      <Parallax className="text" translateY={[-70, 70]} translateX={[130, -130]}>
        <span className="h1">Ike Lyons</span>
      </Parallax>
    </div>
  );
}

export default Landing;

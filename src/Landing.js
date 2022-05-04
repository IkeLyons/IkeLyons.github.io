import { Parallax } from "react-scroll-parallax";
import "./Landing.css";

const words = "nice to meet you".split("");

function Landing() {
  return (
    <div className="root">
      <div className="nameHeader">
        <Parallax translateY={[150, -150]}>
          <span className="text">i'm ike lyons</span>
        </Parallax>
      </div>
      <div className="container">
        {words.map((word, i) => (
          <Parallax key={i} translateX={[100 * (i - 7.5) * -1, 100 * (i - 7.5)]} className="word">
            {word}
          </Parallax>
        ))}
      </div>
    </div>
  );
}

export default Landing;

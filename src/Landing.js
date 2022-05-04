import { Parallax } from "react-scroll-parallax";
import "./Landing.css";

const words = "nice to meet you".split("");

function Landing() {
  return (
    <div className="root">
      <div className="nameHeader">
        <Parallax translateY={[200, -200]}>
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
      <div className="downarrows">
        <svg style={{ color: "#ffffff" }} xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi" viewBox="0 0 16 16">
          {" "}
          <path
            fillRule="evenodd"
            d="M1.646 6.646a.5.5 0 0 1 .708 0L8 12.293l5.646-5.647a.5.5 0 0 1 .708.708l-6 6a.5.5 0 0 1-.708 0l-6-6a.5.5 0 0 1 0-.708z"
            fill="white"
          ></path>{" "}
          <path
            fillRule="evenodd"
            d="M1.646 2.646a.5.5 0 0 1 .708 0L8 8.293l5.646-5.647a.5.5 0 0 1 .708.708l-6 6a.5.5 0 0 1-.708 0l-6-6a.5.5 0 0 1 0-.708z"
            fill="white"
          ></path>{" "}
        </svg>
      </div>
    </div>
  );
}

export default Landing;

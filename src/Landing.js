import { Parallax } from "react-scroll-parallax";
import "./Landing.css";

const words = "i'm ike lyons".split("");

function Landing() {
  return (
    <div className="root">
      <div className="main">
        <div className="topTextContainer">
          <Parallax translateY={[400, -200]}>
            <span className="text">Hello there</span>
          </Parallax>
        </div>
        <div className="imageContainer">
          <Parallax translateY={[-50, 50]}>
            <img src="/IMG_0150.jpg" alt="A picture of me your browser didnt download :(" />
          </Parallax>
        </div>
        <div className="bottomTextContainer">
          {words.map((word, i) => (
            <Parallax key={i} translateX={[100 * (i - words.length / 2) * -1, 100 * (i - words.length / 2)]} className="word">
              {word}
            </Parallax>
          ))}
        </div>
      </div>
      <div className="footer">
        <Parallax translateX={[10, -100]}>Software Engineering</Parallax>
        <div className="downarrows">
          <svg style={{ color: "#ffffff" }} xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="currentColor" className="bi" viewBox="0 0 16 16">
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
        <Parallax translateX={[-10, 100]}>Web Development</Parallax>
      </div>
    </div>
  );
}

export default Landing;

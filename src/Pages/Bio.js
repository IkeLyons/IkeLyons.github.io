import "./Bio.css";
import "../Components/TypeAnimator.js";
import TypeAnimator from "../Components/TypeAnimator.js";

function Bio() {
  return (
    <div className="bioRoot">
      <div className="bioText">
        <TypeAnimator text="nice to meet you!" timeout={200}></TypeAnimator> i'm william lyons (better known as ike), a software engineer and web developer
        based in New York City. i'm passionate about open source, writing great software, and baseball.{" "}
      </div>
      <div className="linkText">
        check out my{" "}
        <div className="linkContainer">
          <a href="https://github.com/IkeLyons">GitHub</a>{" "}
        </div>
        to view my work across the entire stack. if you'd like to see my professional history, check out my{" "}
        <div className="linkContainer">
          <a href="https://www.linkedin.com/in/ikelyons/">linkedin</a>{" "}
        </div>
        . lastly, take a look at some of my PROJECTS:
      </div>
    </div>
  );
}

export default Bio;
